import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Configure pool for Twenty CRM PostgreSQL database
const pool = new Pool({
  connectionString: process.env.TWENTY_PG_URL || 'postgres://twenty:c6f3070f91b9c1b76b28a87069851d16de33b4fcd63afcfdd21753d5a2e3dea5@127.0.0.1:5433/default',
  max: 10,
  idleTimeoutMillis: 30000,
});

const WORKSPACE_SCHEMA = 'workspace_67vrfikn51gwl7h04ihd00c96';

function parseBudgetMicros(budgetStr: string): number {
  if (!budgetStr) return 0;
  const numbers = budgetStr.match(/\d[\d,]*/g);
  if (!numbers || numbers.length === 0) return 0;
  const firstNum = parseInt(numbers[0].replace(/,/g, ''), 10);
  if (isNaN(firstNum)) return 0;
  return firstNum * 1000000; // Twenty CRM stores currency amounts in micros ($1 = 1,000,000 micros)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Extract form fields (handles both direct form payload and nested custom-form-handler format)
    const name = (body.contact?.name || body['your-name'] || body.name || '').trim();
    const email = (body.contact?.email || body['your-email'] || body.email || '').trim().toLowerCase();
    const projectDescription = (body.contact?.project_description || body['text-tell-project'] || body.message || '').trim();
    const budget = (body.contact?.budget || body.budget || '').trim();
    const services = Array.isArray(body.contact?.services) ? body.contact.services : (Array.isArray(body.services) ? body.services : []);
    
    // Tracking & page metadata
    const serviceType = body.page_info?.service_type || body.service_type || 'General Inquiry';
    const pageUrl = body.page_info?.page_url || body.page_url || body.urll || '';
    const ipAddress = body.tracking?.ip_address || body.ip || '';
    const referrer = body.tracking?.referrer || body.urlback || '';
    const utmSource = body.tracking?.utm_source || body.utm_source || '';
    const utmCampaign = body.tracking?.utm_campaign || body.utm_campaign || '';

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, error: 'Valid email address is required.' }, { status: 400 });
    }

    const nameParts = (name || 'Website Lead').split(/\s+/);
    const firstName = nameParts[0] || 'Website';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Insert or find Person in Twenty CRM
    let personId: string | null = null;
    const client = await pool.connect();

    try {
      // 1. Upsert Person
      const personQuery = `
        INSERT INTO ${WORKSPACE_SCHEMA}.person 
          ("nameFirstName", "nameLastName", "emailsPrimaryEmail", "jobTitle", "createdBySource", "position")
        VALUES ($1, $2, $3, $4, 'MANUAL', 0)
        ON CONFLICT ("emailsPrimaryEmail") DO UPDATE 
        SET "updatedAt" = now(),
            "nameFirstName" = CASE WHEN ${WORKSPACE_SCHEMA}.person."nameFirstName" = '' THEN EXCLUDED."nameFirstName" ELSE ${WORKSPACE_SCHEMA}.person."nameFirstName" END,
            "nameLastName" = CASE WHEN ${WORKSPACE_SCHEMA}.person."nameLastName" = '' THEN EXCLUDED."nameLastName" ELSE ${WORKSPACE_SCHEMA}.person."nameLastName" END
        RETURNING id;
      `;
      const personRes = await client.query(personQuery, [firstName, lastName, email, serviceType]);
      personId = personRes.rows[0]?.id;

      // 2. Create Opportunity / Deal in Twenty CRM
      const oppName = `${serviceType} — ${name || email}`;
      const budgetMicros = parseBudgetMicros(budget);

      const oppQuery = `
        INSERT INTO ${WORKSPACE_SCHEMA}.opportunity 
          ("name", "amountAmountMicros", "amountCurrencyCode", "stage", "pointOfContactId", "createdBySource", "position")
        VALUES ($1, $2, 'USD', 'NEW', $3, 'MANUAL', 0)
        RETURNING id;
      `;
      const oppRes = await client.query(oppQuery, [oppName, budgetMicros, personId]);
      const oppId = oppRes.rows[0]?.id;

      // 3. Create Note with full inquiry details
      const noteTitle = `Inquiry: ${serviceType}`;
      const noteMarkdown = `
### New Website Lead Details
* **Name:** ${name || 'Not provided'}
* **Email:** ${email}
* **Service Requested:** ${serviceType}
* **Specific Services:** ${services.length > 0 ? services.join(', ') : 'None specified'}
* **Budget:** ${budget || 'Not specified'}
* **Project Description:** ${projectDescription || 'No description provided'}

---
* **Page URL:** [${pageUrl}](${pageUrl})
* **Referrer:** ${referrer || 'Direct'}
* **UTM Source:** ${utmSource || 'N/A'}
* **UTM Campaign:** ${utmCampaign || 'N/A'}
* **IP Address:** ${ipAddress || 'Unknown'}
* **Submitted At:** ${new Date().toISOString()}
      `.trim();

      const noteQuery = `
        INSERT INTO ${WORKSPACE_SCHEMA}.note ("title", "bodyV2Markdown", "createdBySource", "position")
        VALUES ($1, $2, 'MANUAL', 0)
        RETURNING id;
      `;
      const noteRes = await client.query(noteQuery, [noteTitle, noteMarkdown]);
      const noteId = noteRes.rows[0]?.id;

      // Link Note to Person and Opportunity
      if (noteId && personId) {
        await client.query(
          `INSERT INTO ${WORKSPACE_SCHEMA}."noteTarget" ("noteId", "targetPersonId", "targetOpportunityId") VALUES ($1, $2, $3)`,
          [noteId, personId, oppId || null]
        );
      }

      console.log(`[Twenty CRM] Successfully created lead: ${email}, personId: ${personId}, oppId: ${oppId}, noteId: ${noteId}`);
    } catch (dbErr) {
      console.error('[Twenty CRM DB Error]', dbErr);
    } finally {
      client.release();
    }

    // 4. Asynchronously forward to N8N webhook for email triggers (without blocking response)
    const n8nWebhookUrl = 'https://n8n.aenfinite.com/webhook/aenfinite-contact-form';
    fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).catch(err => console.error('[N8N Webhook Forwarding Error]', err));

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will contact you shortly.',
      twenty_person_id: personId,
    });
  } catch (error: any) {
    console.error('[API Contact Error]', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

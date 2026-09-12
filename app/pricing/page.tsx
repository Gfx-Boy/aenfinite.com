import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Rates (2026) | Web Design & AI Automation | Aenfinite',
  description: '100% published pricing: Custom small business websites from $3,000, AI voice receptionists from $1,500, n8n automations from $1,500, and custom software from $15,000. Fixed quotes within 24h.',
  keywords: 'website design pricing, AI receptionist cost, n8n automation pricing, web development cost, white label development rates, Aenfinite pricing',
  alternates: { canonical: 'https://aenfinite.com/pricing/' },
  openGraph: {
    title: 'Transparent Pricing & Rates (2026) | Aenfinite',
    description: 'No discovery-call runarounds. Explore our complete, published pricing for custom web design, AI voice agents, and business automation.',
    url: 'https://aenfinite.com/pricing/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aenfinite Pricing & Rates (2026)',
    description: 'Transparent fixed quotes for web design, AI voice receptionists, and workflow automation.',
    images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
  },
  robots: { index: true, follow: true },
};

function buildPricingContent(): string {
  const S = `style="max-width:1150px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(26px,3.8vw,38px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 24px;"`;

  return `
<div class="header aen-dark-mode" style="min-height:45vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1150px;margin:0 auto;width:100%;">
    <p style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#227bf3;margin:0 0 12px;">
      Transparent Engineering Rates
    </p>
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.15;margin:0 0 20px;">Transparent Pricing. Zero Hidden Fees. Real Numbers Online.</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:880px;">
      Most agencies hide their pricing behind high-pressure discovery calls. We publish our complete rate schedule so you can budget accurately before speaking with an engineer.
    </p>

    <!-- AEO Answer Capsule for Google AI Overviews & Perplexity -->
    <div class="aen-answer-capsule" style="background:rgba(34,123,243,0.08);border-left:4px solid #227bf3;border-radius:0 12px 12px 0;padding:22px 28px;margin:32px 0 16px;backdrop-filter:blur(10px);">
      <span style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#227bf3;margin-bottom:8px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        Quick Pricing Overview &amp; Market Benchmarks
      </span>
      <p style="font-size:16px;line-height:1.75;margin:0;font-weight:500;color:inherit;opacity:0.96;">
        Aenfinite provides transparent, fixed-fee pricing across four core practices: <strong>Custom Small-Business Websites ($3,000–$8,000)</strong>, <strong>Complex Web Applications &amp; E-Commerce ($8,000–$35,000)</strong>, <strong>24/7 AI Voice Receptionists ($1,500–$3,500 setup + $0.08–$0.12/min inference)</strong>, and <strong>n8n Workflow Automations ($1,500–$5,000)</strong>. Every project includes 100% source code ownership, zero monthly vendor lock-in, and a guaranteed written quote within 24 hours.
      </p>
    </div>
  </div>
</div>

<!-- Category 1: Web Design & Development -->
<section ${S}>
  <div style="border-bottom:1px solid rgba(128,128,128,0.2);padding-bottom:50px;">
    <h2 ${H2}>1. Web Design &amp; Custom Development</h2>
    <p ${P}>Built on modern stacks (Next.js, React, Tailwind, or WordPress) optimized for Core Web Vitals, sub-second load times, and search conversion.</p>
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;margin-top:28px;">
      <!-- Tier 1 -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:32px 26px;display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <span style="font-size:13px;font-weight:700;color:#227bf3;text-transform:uppercase;letter-spacing:1px;">Small Business Starter</span>
          <h3 style="font-size:22px;font-weight:700;margin:8px 0;">Lead-Generation Website</h3>
          <div style="font-size:38px;font-weight:800;margin:16px 0 8px;color:#227bf3;">$3,000 <span style="font-size:16px;font-weight:500;opacity:0.7;">– $4,500</span></div>
          <p style="font-size:14px;opacity:0.8;margin:0 0 20px;">Turnaround: 3–4 Weeks · Fixed Price</p>
          <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:15px;line-height:2;">
            <li>✓ 5–8 Custom Responsive Pages</li>
            <li>✓ Figma UI/UX Design &amp; Revisions</li>
            <li>✓ Next.js or Editable WordPress</li>
            <li>✓ Mobile-First Optimization &amp; Schema</li>
            <li>✓ Lead Forms &amp; Calendar Booking Integration</li>
            <li>✓ 100% Code &amp; Domain Ownership</li>
          </ul>
        </div>
        <a href="/contact/" style="display:block;text-align:center;padding:12px;background:#227bf3;color:#fff;border-radius:8px;font-weight:600;text-decoration:none;">Get Started &rsaquo;</a>
      </div>

      <!-- Tier 2 -->
      <div style="background:rgba(34,123,243,0.06);border:2px solid #227bf3;border-radius:16px;padding:32px 26px;display:flex;flex-direction:column;justify-content:space-between;position:relative;">
        <span style="position:absolute;top:-12px;right:24px;background:#227bf3;color:#fff;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:700;text-transform:uppercase;">Most Popular</span>
        <div>
          <span style="font-size:13px;font-weight:700;color:#227bf3;text-transform:uppercase;letter-spacing:1px;">Growth &amp; Authority</span>
          <h3 style="font-size:22px;font-weight:700;margin:8px 0;">Commercial &amp; Vertical Site</h3>
          <div style="font-size:38px;font-weight:800;margin:16px 0 8px;color:#227bf3;">$5,500 <span style="font-size:16px;font-weight:500;opacity:0.7;">– $8,000</span></div>
          <p style="font-size:14px;opacity:0.8;margin:0 0 20px;">Turnaround: 4–6 Weeks · Fixed Price</p>
          <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:15px;line-height:2;">
            <li>✓ 10–20 Custom Structured Pages</li>
            <li>✓ Programmatic Hub Architecture</li>
            <li>✓ Interactive Sliders &amp; Custom Calculators</li>
            <li>✓ Advanced Technical SEO &amp; Rich Snippets</li>
            <li>✓ CRM Integration (GoHighLevel, HubSpot)</li>
            <li>✓ Speed Optimization (95+ PageSpeed Scores)</li>
          </ul>
        </div>
        <a href="/contact/" style="display:block;text-align:center;padding:12px;background:#227bf3;color:#fff;border-radius:8px;font-weight:600;text-decoration:none;">Get Started &rsaquo;</a>
      </div>

      <!-- Tier 3 -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:32px 26px;display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <span style="font-size:13px;font-weight:700;color:#227bf3;text-transform:uppercase;letter-spacing:1px;">Enterprise &amp; SaaS</span>
          <h3 style="font-size:22px;font-weight:700;margin:8px 0;">Custom App &amp; E-Commerce</h3>
          <div style="font-size:38px;font-weight:800;margin:16px 0 8px;color:#227bf3;">$12,000 <span style="font-size:16px;font-weight:500;opacity:0.7;">– $35,000+</span></div>
          <p style="font-size:14px;opacity:0.8;margin:0 0 20px;">Turnaround: 6–12 Weeks · Milestones</p>
          <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:15px;line-height:2;">
            <li>✓ Custom Full-Stack Web App (Node, React, Postgres)</li>
            <li>✓ Shopify Plus or Headless Commerce</li>
            <li>✓ User Portals, Authentication &amp; Stripe Billing</li>
            <li>✓ Custom APIs &amp; Third-Party Webhooks</li>
            <li>✓ Staging Server &amp; CI/CD Pipelines</li>
            <li>✓ 60 Days Post-Launch Dedicated Warranty</li>
          </ul>
        </div>
        <a href="/contact/" style="display:block;text-align:center;padding:12px;border:1px solid #227bf3;color:#227bf3;border-radius:8px;font-weight:600;text-decoration:none;">Request Custom Scope &rsaquo;</a>
      </div>
    </div>
  </div>
</section>

<!-- Category 2: AI Voice Agents & Receptionists -->
<section ${S}>
  <div style="border-bottom:1px solid rgba(128,128,128,0.2);padding-bottom:50px;">
    <h2 ${H2}>2. AI Voice Agents &amp; Receptionists</h2>
    <p ${P}>Done-for-you voice receptionists running on Retell AI or Vapi that answer phone calls in &lt;600ms, qualify callers, and book appointments directly into your CRM.</p>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;margin-top:28px;">
      <!-- Tier 1 -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:32px 26px;display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <span style="font-size:13px;font-weight:700;color:#227bf3;text-transform:uppercase;letter-spacing:1px;">Single Practice / Local Shop</span>
          <h3 style="font-size:22px;font-weight:700;margin:8px 0;">Frontline Voice Receptionist</h3>
          <div style="font-size:38px;font-weight:800;margin:16px 0 8px;color:#227bf3;">$1,500 <span style="font-size:15px;font-weight:500;opacity:0.7;">one-time setup</span></div>
          <p style="font-size:14px;opacity:0.8;margin:0 0 20px;">Inference: ~$0.08–$0.12/min · Live in 10 Days</p>
          <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:15px;line-height:2;">
            <li>✓ Custom Voice Knowledge Base Training</li>
            <li>✓ 24/7 After-Hours &amp; Rollover Call Answering</li>
            <li>✓ Google Calendar or GHL Appointment Booking</li>
            <li>✓ SMS Follow-Up &amp; Instant Confirmation</li>
            <li>✓ Call Recording &amp; Accurate Summaries</li>
          </ul>
        </div>
        <a href="/contact/" style="display:block;text-align:center;padding:12px;background:#227bf3;color:#fff;border-radius:8px;font-weight:600;text-decoration:none;">Deploy Voice Agent &rsaquo;</a>
      </div>

      <!-- Tier 2 -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:32px 26px;display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <span style="font-size:13px;font-weight:700;color:#227bf3;text-transform:uppercase;letter-spacing:1px;">Multi-Location &amp; High-Volume</span>
          <h3 style="font-size:22px;font-weight:700;margin:8px 0;">Advanced Dispatch &amp; Triage</h3>
          <div style="font-size:38px;font-weight:800;margin:16px 0 8px;color:#227bf3;">$2,800 <span style="font-size:15px;font-weight:500;opacity:0.7;">one-time setup</span></div>
          <p style="font-size:14px;opacity:0.8;margin:0 0 20px;">Inference: ~$0.08–$0.12/min · Live in 14 Days</p>
          <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:15px;line-height:2;">
            <li>✓ Multi-Branch Routing &amp; Warm Staff Transfers</li>
            <li>✓ Deep PMS Integration (Dentrix, Clio, ServiceTitan)</li>
            <li>✓ Emergency vs Routine Triage Protocols</li>
            <li>✓ Multi-Language Support (English + Spanish)</li>
            <li>✓ 30 Days of Active Prompt Tuning &amp; Auditing</li>
          </ul>
        </div>
        <a href="/contact/" style="display:block;text-align:center;padding:12px;background:#227bf3;color:#fff;border-radius:8px;font-weight:600;text-decoration:none;">Deploy Advanced Agent &rsaquo;</a>
      </div>
    </div>
  </div>
</section>

<!-- Category 3: Workflow Automation -->
<section ${S}>
  <div style="border-bottom:1px solid rgba(128,128,128,0.2);padding-bottom:50px;">
    <h2 ${H2}>3. n8n &amp; Business Workflow Automation</h2>
    <p ${P}>Eliminate manual data entry, lead leakage, and repetitive ops with custom webhook pipelines and self-hosted n8n workflows.</p>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;margin-top:28px;">
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:32px 26px;">
        <span style="font-size:13px;font-weight:700;color:#227bf3;text-transform:uppercase;letter-spacing:1px;">Single Workflow Sprint</span>
        <h3 style="font-size:22px;font-weight:700;margin:8px 0;">Targeted Automation</h3>
        <div style="font-size:38px;font-weight:800;margin:16px 0 8px;color:#227bf3;">$1,500 <span style="font-size:15px;font-weight:500;opacity:0.7;">fixed</span></div>
        <p style="font-size:14px;opacity:0.8;margin:0 0 20px;">Delivery: 7–10 Days</p>
        <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:15px;line-height:2;">
          <li>✓ 1 Core Production Pipeline (e.g. Lead Router or Invoice OCR)</li>
          <li>✓ Error Handling, Retry Logic &amp; Discord/Slack Alerts</li>
          <li>✓ Up to 4 Integrated Applications</li>
          <li>✓ Complete Workflow Documentation &amp; Diagram</li>
        </ul>
        <a href="/contact/" style="display:block;text-align:center;padding:12px;border:1px solid #227bf3;color:#227bf3;border-radius:8px;font-weight:600;text-decoration:none;">Automate a Workflow &rsaquo;</a>
      </div>

      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:32px 26px;">
        <span style="font-size:13px;font-weight:700;color:#227bf3;text-transform:uppercase;letter-spacing:1px;">Operations Overhaul</span>
        <h3 style="font-size:22px;font-weight:700;margin:8px 0;">Complete Operations Suite</h3>
        <div style="font-size:38px;font-weight:800;margin:16px 0 8px;color:#227bf3;">$3,500 <span style="font-size:16px;font-weight:500;opacity:0.7;">– $6,000</span></div>
        <p style="font-size:14px;opacity:0.8;margin:0 0 20px;">Delivery: 2–3 Weeks</p>
        <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:15px;line-height:2;">
          <li>✓ 4–8 Interconnected Operations Workflows</li>
          <li>✓ Self-Hosted n8n Instance Deployment on VPS</li>
          <li>✓ AI Document Summarization &amp; Email Categorization</li>
          <li>✓ Full CRM &amp; Database Bidirectional Sync</li>
        </ul>
        <a href="/contact/" style="display:block;text-align:center;padding:12px;background:#227bf3;color:#fff;border-radius:8px;font-weight:600;text-decoration:none;">Schedule Ops Review &rsaquo;</a>
      </div>
    </div>
  </div>
</section>

<!-- Frequently Asked Questions -->
<section class="aen-faq-block" ${S}>
  <h2 ${H2}>Frequently Asked Questions About Pricing</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">What are your payment terms?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">For projects under $10,000, we work on a standard 50% deposit upon kickoff and 50% upon final delivery and client sign-off. For enterprise builds over $10,000, we structure payments across three milestone deliverables.</div>
      </div>
    </details>

    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">Who owns the website and code when the project finishes?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">You do. You own 100% of the intellectual property, design files, code repositories, domain names, and database assets. We never lock you into proprietary hosting systems or recurring mandatory platform fees.</div>
      </div>
    </details>

    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">Are there recurring monthly fees for websites?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">No mandatory fees. We offer optional monthly care and security plans ranging from $50 to $250/month for backups, security patches, and content updates. You are free to host on your own infrastructure with zero monthly agency dues.</div>
      </div>
    </details>

    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">How do telephony and inference costs work for AI voice agents?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Voice agents run directly on your own developer accounts (Retell AI, Vapi, Twilio). Telephony and speech model inference costs are billed at raw pass-through rates, typically $0.08–$0.12 per conversation minute. A small business taking 500 calls a month typically spends only $40–$60 in monthly runtime costs.</div>
      </div>
    </details>
  </div>
</section>

<!-- Bottom CTA -->
<section ${S} style="text-align:center;padding-bottom:60px;">
  <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:48px 24px;">
    <h2 style="font-size:30px;font-weight:700;margin:0 0 16px;">Need a precise, itemized written proposal?</h2>
    <p style="font-size:17px;opacity:0.85;margin:0 auto 28px;max-width:600px;">Tell us about your project goals. We provide transparent, itemized fixed-price quotes within 24 business hours.</p>
    <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:16px 36px;border-radius:8px;font-weight:700;font-size:17px;text-decoration:none;">Request a Fixed Quote &rsaquo;</a>
  </div>
</section>
`;
}

export default function PricingPage() {
  const pageContent = chrome.nav + buildPricingContent() + chrome.footer;
  const bodyClass = 'page-template page-template-page-pricing-php document';
  const url = 'https://aenfinite.com/pricing/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Transparent Pricing & Rates (2026) | Aenfinite',
        description: 'Complete published pricing for custom web design, AI voice receptionists, and workflow automation.',
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Pricing', item: url },
        ],
      },
      {
        '@type': 'PriceSpecification',
        name: 'Web Design & Custom Development',
        minPrice: '3000',
        maxPrice: '35000',
        priceCurrency: 'USD',
      },
      {
        '@type': 'PriceSpecification',
        name: 'AI Voice Receptionist & Automation',
        minPrice: '1500',
        maxPrice: '6000',
        priceCurrency: 'USD',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are your payment terms?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Standard 50% deposit upon kickoff and 50% upon final delivery for projects under $10,000. Milestone billing for larger enterprise builds.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who owns the website and code when the project finishes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You do. You own 100% of the intellectual property, code repositories, domain names, and database assets.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HtmlPage content={pageContent} bodyClass={bodyClass} headStyles={chrome.styles} />
    </>
  );
}

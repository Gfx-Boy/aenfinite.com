// Language: Hindi (hi)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';

export const metadata: Metadata = {
  title: 'Free AI Opportunity Audit & ROI Calculator [2026] — Discover Missed Revenue',
  description: '✓ Free 30-minute AI Opportunity Audit. ✓ We calculate missed revenue, analyze operational bottlenecks, and map custom AI automation systems with zero obligation. Calculate your ROI →',
  keywords: 'free AI audit, AI opportunity audit, business automation audit, AI consultation, AI assessment, missed revenue analysis, AI ROI calculator',
  alternates: { canonical: "https://aenfinite.com/hi/audit/", languages: {"x-default":"https://aenfinite.com/audit/","en":"https://aenfinite.com/audit/","es":"https://aenfinite.com/es/audit/","fr":"https://aenfinite.com/fr/audit/","de":"https://aenfinite.com/de/audit/","it":"https://aenfinite.com/it/audit/","ar":"https://aenfinite.com/ar/audit/","pt":"https://aenfinite.com/pt/audit/","zh":"https://aenfinite.com/zh/audit/","hi":"https://aenfinite.com/hi/audit/","nl":"https://aenfinite.com/nl/audit/","ja":"https://aenfinite.com/ja/audit/","ko":"https://aenfinite.com/ko/audit/"} },
  openGraph: {
    title: 'Free AI Opportunity Audit & ROI Calculator [2026] — Discover Missed Revenue',
    description: '✓ Free 30-minute AI Opportunity Audit. ✓ We calculate missed revenue, analyze operational bottlenecks, and map custom AI automation systems with zero obligation. Calculate your ROI →',
    url: 'https://aenfinite.com/audit/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  robots: { index: true, follow: true },
};

function buildAuditContent(): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  return `
<div class="header" style="min-height:50vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <p style="font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:#227bf3;margin:0 0 16px;">Free — No Obligation — 30 Minutes</p>
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.12;margin:0 0 24px;">Your Free AI<br>Opportunity Audit</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:780px;">We&rsquo;ll analyze your current operations, calculate the revenue you&rsquo;re losing to manual processes and missed calls, and map exactly which AI systems will fix it — with real numbers.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:32px;">
      <a href="/hi/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:16px 36px;border-radius:8px;font-weight:700;font-size:18px;text-decoration:none;">Book Your Audit Now &rsaquo;</a>
      <a href="#roi-calculator" class="button button__secondary" style="display:inline-block;border:1px solid rgba(255,255,255,0.2);padding:16px 36px;border-radius:8px;font-weight:700;font-size:18px;text-decoration:none;color:inherit;">Try ROI Calculator &darr;</a>
    </div>
  </div>
</div>

<!-- Interactive ROI Calculator Widget -->
<section id="roi-calculator" ${S}>
  <div style="background:rgba(34,123,243,0.04);border:1px solid rgba(34,123,243,0.2);border-radius:20px;padding:36px 30px;">
    <div style="text-align:center;max-width:700px;margin:0 auto 30px;">
      <h2 style="font-size:clamp(24px,3.5vw,34px);font-weight:700;margin:0 0 12px;">Instant AI ROI & Missed Revenue Calculator</h2>
      <p style="font-size:16px;opacity:0.85;line-height:1.6;">Adjust the sliders below to estimate how much revenue your business can recover each month with 24/7 AI lead capture.</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;align-items:center;">
      <div style="display:flex;flex-direction:column;gap:20px;">
        <div>
          <div style="display:flex;justify-content:space-between;font-weight:600;font-size:15px;margin-bottom:8px;">
            <span>Monthly Inbound Calls / Inquiries:</span>
            <span id="callsVal" style="color:#227bf3;font-weight:700;">150</span>
          </div>
          <input type="range" id="callsInput" min="20" max="1000" step="10" value="150" style="width:100%;accent-color:#227bf3;cursor:pointer;" oninput="updateRoiCalc()">
        </div>

        <div>
          <div style="display:flex;justify-content:space-between;font-weight:600;font-size:15px;margin-bottom:8px;">
            <span>Average Customer Value ($):</span>
            <span id="valVal" style="color:#227bf3;font-weight:700;">$1,200</span>
          </div>
          <input type="range" id="valInput" min="100" max="10000" step="100" value="1200" style="width:100%;accent-color:#227bf3;cursor:pointer;" oninput="updateRoiCalc()">
        </div>

        <div>
          <div style="display:flex;justify-content:space-between;font-weight:600;font-size:15px;margin-bottom:8px;">
            <span>Estimated Missed Calls (%):</span>
            <span id="missedVal" style="color:#227bf3;font-weight:700;">25%</span>
          </div>
          <input type="range" id="missedInput" min="5" max="60" step="5" value="25" style="width:100%;accent-color:#227bf3;cursor:pointer;" oninput="updateRoiCalc()">
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.25);border-radius:16px;padding:30px;text-align:center;">
        <div style="font-size:14px;text-transform:uppercase;letter-spacing:1.5px;color:#227bf3;font-weight:700;margin-bottom:8px;">Estimated Recoverable Revenue</div>
        <div id="roiResult" style="font-size:clamp(36px,5vw,52px);font-weight:800;color:#227bf3;line-height:1.1;margin-bottom:12px;">$11,250 / mo</div>
        <p style="font-size:15px;opacity:0.8;line-height:1.6;margin:0 0 20px;">By capturing 24/7 after-hours calls and routing prospects to booked calendar slots instantly.</p>
        <a href="/hi/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 28px;border-radius:8px;font-weight:700;font-size:16px;text-decoration:none;width:100%;box-sizing:border-box;">Capture This Revenue &rsaquo;</a>
      </div>
    </div>
  </div>
</section>

<script>
function updateRoiCalc() {
  var calls = parseInt(document.getElementById('callsInput').value, 10);
  var val = parseInt(document.getElementById('valInput').value, 10);
  var missed = parseInt(document.getElementById('missedInput').value, 10);

  document.getElementById('callsVal').textContent = calls.toLocaleString();
  document.getElementById('valVal').textContent = '$' + val.toLocaleString();
  document.getElementById('missedVal').textContent = missed + '%';

  // 25% close rate on recovered calls
  var recoveredCalls = calls * (missed / 100);
  var recoveredRevenue = Math.round(recoveredCalls * 0.25 * val);

  document.getElementById('roiResult').textContent = '$' + recoveredRevenue.toLocaleString() + ' / mo';
}
</script>

<!-- What you get -->
<section ${S}>
  <h2 ${H2}>What You Get (For Free)</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin-top:20px;">
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <div style="width:48px;height:48px;border-radius:12px;background:rgba(34,123,243,0.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#227bf3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">Current Systems Analysis</h3>
      <p style="font-size:16px;line-height:1.7;opacity:0.85;margin:0;">We audit your existing phone system, website, CRM, and customer journey to find where leads are leaking out.</p>
    </div>
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <div style="width:48px;height:48px;border-radius:12px;background:rgba(34,123,243,0.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#227bf3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      </div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">Missed Revenue Calculation</h3>
      <p style="font-size:16px;line-height:1.7;opacity:0.85;margin:0;">Using your real numbers (call volume, average ticket, close rate), we calculate exactly how much revenue you're losing to missed calls, slow follow-up, and manual processes.</p>
    </div>
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <div style="width:48px;height:48px;border-radius:12px;background:rgba(34,123,243,0.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#227bf3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
      </div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">AI Opportunity Map</h3>
      <p style="font-size:16px;line-height:1.7;opacity:0.85;margin:0;">A custom roadmap showing which AI systems will have the biggest impact on your business — prioritized by ROI and implementation speed.</p>
    </div>
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <div style="width:48px;height:48px;border-radius:12px;background:rgba(34,123,243,0.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#227bf3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      </div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">ROI Projection</h3>
      <p style="font-size:16px;line-height:1.7;opacity:0.85;margin:0;">Conservative 90-day revenue projections based on the AI systems we recommend — so you know exactly what to expect before investing a dollar.</p>
    </div>
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <div style="width:48px;height:48px;border-radius:12px;background:rgba(34,123,243,0.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#227bf3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
      </div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">Implementation Roadmap</h3>
      <p style="font-size:16px;line-height:1.7;opacity:0.85;margin:0;">A step-by-step plan you can execute with us or on your own. No strings attached — the roadmap is yours to keep regardless.</p>
    </div>
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <div style="width:48px;height:48px;border-radius:12px;background:rgba(34,123,243,0.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#227bf3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      </div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">Competitive Analysis</h3>
      <p style="font-size:16px;line-height:1.7;opacity:0.85;margin:0;">Quick scan of what your competitors are doing with AI and automation — and where you can leapfrog them.</p>
    </div>
  </div>
</section>

<!-- Who it's for -->
<section ${S}>
  <h2 ${H2}>Who This Is For</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:20px;">
    <div style="padding:24px;border:1px solid rgba(34,123,243,0.2);border-radius:12px;background:rgba(34,123,243,0.03);">
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;color:#227bf3;">Great Fit</h3>
      <ul style="font-size:15px;line-height:1.8;opacity:0.85;margin:0;padding-left:20px;">
        <li>Service businesses (HVAC, plumbing, dental, legal, real estate)</li>
        <li>Businesses receiving 50+ calls/week</li>
        <li>Companies spending $5K+/month on operations</li>
        <li>Business owners tired of missed calls and manual follow-up</li>
        <li>Agencies looking to add AI services to their offering</li>
      </ul>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;opacity:0.8;">Not the Best Fit</h3>
      <ul style="font-size:15px;line-height:1.8;opacity:0.85;margin:0;padding-left:20px;">
        <li>Pre-revenue startups without product-market fit</li>
        <li>Businesses looking for the cheapest possible solution</li>
        <li>Companies wanting to build AI themselves (we can recommend resources)</li>
        <li>Businesses without a website or existing customer base</li>
      </ul>
    </div>
  </div>
</section>

<!-- How it works -->
<section ${S}>
  <h2 ${H2}>How the Audit Works</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;margin-top:20px;">
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">01</div>
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;">Book Your Slot</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">Choose a 30-minute slot that works for you. We&rsquo;ll send a brief questionnaire about your business to prepare.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">02</div>
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;">We Research</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">Before the call, we audit your website, test your phone system, and research your industry&rsquo;s AI adoption.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">03</div>
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;">Live Audit Call</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">We walk through your systems, show you exactly where revenue is leaking, and present the AI solutions that will fix it.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">04</div>
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;">Your Roadmap</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">Within 24 hours, you receive your custom AI Opportunity Report with recommendations, ROI projections, and implementation plan.</p>
    </div>
  </div>
</section>

<!-- No pressure -->
<section ${S}>
  <div style="background:rgba(34,123,243,0.06);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:32px 28px;text-align:center;">
    <h2 style="font-size:24px;font-weight:700;margin:0 0 14px;">Zero Pressure. Zero Obligation.</h2>
    <p style="font-size:17px;line-height:1.7;opacity:0.85;max-width:700px;margin:0 auto;">This isn&rsquo;t a sales call disguised as a consultation. You get a real analysis with real numbers. If we&rsquo;re a fit, great. If not, you walk away with a valuable roadmap you can use with anyone. That&rsquo;s it.</p>
  </div>
</section>

<!-- FAQ -->
<section class="aen-faq-block" ${S}>
  <h2 ${H2}>Questions हमारे बारे में the Audit</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">Is the audit really free?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Yes. No credit card, no hidden fees, no obligation. We use the audit to demonstrate our expertise and build relationships. If we earn your business, great — but there's zero pressure to buy anything.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">How long does the audit take?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">The live call is 30 minutes. We do 30–60 minutes of research before the call. Your custom report is delivered within 24 hours after.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">Who will I be speaking with?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">A senior AI systems architect from our team — not a sales rep or junior account manager. The same person who would architect your system is the one doing the audit.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">What do I need to prepare?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Just answer the brief questionnaire we send after booking. If you know your approximate monthly call volume, average customer value, and current tools — that helps us prepare better. But it's not required.</div>
      </div>
    </details>
  </div>
</section>

<!-- Final CTA -->
<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:48px 24px;">
    <h2 style="font-size:clamp(24px,4vw,36px);font-weight:700;margin:0 0 16px;">Stop Guessing. Start Knowing.</h2>
    <p style="font-size:18px;opacity:0.85;max-width:650px;margin:0 auto 28px;">In 30 minutes, you&rsquo;ll know exactly where your business is losing revenue — and exactly which AI systems will fix it. For free.</p>
    <a href="/hi/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:16px 40px;border-radius:8px;font-weight:700;font-size:18px;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
    <p style="font-size:14px;opacity:0.5;margin-top:16px;">Or call us directly: <a href="tel:+13034199782" style="color:inherit;">+1 (303) 419-9782</a></p>
  </div>
</section>
`;
}

export default function AuditPage() {
  const pageContent = chrome.nav + buildAuditContent() + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = 'https://aenfinite.com/audit/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'Free AI Opportunity Audit & ROI Calculator',
        serviceType: 'Business Consultation & AI ROI Assessment',
        description: 'Free 30-minute analysis of your business operations, missed revenue calculation, and AI opportunity mapping with custom implementation roadmap.',
        provider: { '@id': 'https://aenfinite.com/#organization' },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free 30-minute AI Opportunity Audit — no obligation',
        },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Free AI Audit & ROI Calculator', item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is the audit really free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. No credit card, no hidden fees, no obligation. We use the audit to demonstrate our expertise and build relationships.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does the audit take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The live call is 30 minutes. We do 30–60 minutes of research before the call. Your custom report is delivered within 24 hours after.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who will I be speaking with?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A senior AI systems architect from our team — not a sales rep or junior account manager.',
            },
          },
          {
            '@type': 'Question',
            name: 'What do I need to prepare?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Just answer the brief questionnaire we send after booking. Approximate monthly call volume and customer value helps us prepare better.',
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

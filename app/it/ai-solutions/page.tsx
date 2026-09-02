// Language: Italian (it)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import aiSolutionsData from '@/lib/ai-solutions-data.json';

export const metadata: Metadata = {
  title: 'AI Automazione & Voice Receptionists by Industry [2026]',
  description: '✓ Done-for-you AI chatbots, voice receptionists, and workflow automation tailored for dental, HVAC, legal, real estate, and home services. Free live demo →',
  keywords: 'AI automation by industry, AI receptionist, AI voice agent, dental AI chatbot, HVAC AI receptionist, legal AI intake, real estate AI assistant, restaurant AI ordering',
  alternates: { canonical: "https://aenfinite.com/it/ai-solutions/", languages: {"x-default":"https://aenfinite.com/ai-solutions/","en":"https://aenfinite.com/ai-solutions/","es":"https://aenfinite.com/es/ai-solutions/","fr":"https://aenfinite.com/fr/ai-solutions/","de":"https://aenfinite.com/de/ai-solutions/","it":"https://aenfinite.com/it/ai-solutions/","ar":"https://aenfinite.com/ar/ai-solutions/","pt":"https://aenfinite.com/pt/ai-solutions/","zh":"https://aenfinite.com/zh/ai-solutions/","hi":"https://aenfinite.com/hi/ai-solutions/","nl":"https://aenfinite.com/nl/ai-solutions/","ja":"https://aenfinite.com/ja/ai-solutions/","ko":"https://aenfinite.com/ko/ai-solutions/"} },
  openGraph: {
    title: 'AI Automazione & Voice Receptionists by Industry [2026]',
    description: 'Custom AI chatbots and voice agents engineered for your specific business vertical. 24/7 lead qualification, appointment booking, and CRM synchronization.',
    url: 'https://aenfinite.com/ai-solutions/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automazione & Voice Receptionists by Industry | Aenfinite',
    description: 'Done-for-you AI agents and voice receptionists. Installed, configured, and managed by our Denver senior engineers.',
    images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
  },
  robots: { index: true, follow: true },
};

type AISolutionItem = {
  name: string;
  slug: string;
  icon: string;
  title: string;
  metaDesc: string;
  heroSub: string;
  missedMath: string;
  integrations: string[];
};

const SOLUTIONS = Object.values(aiSolutionsData as unknown as Record<string, AISolutionItem>);

function buildAIHubContent(): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  return `
<div class="header" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.15;margin:0 0 20px;">AI Automazione &amp; Voice Receptionists by Industry</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:860px;">Never lose an emergency call, after-hours lead, or booking opportunity again. We build, train, and manage custom AI agents wired directly into your existing software.</p>
    <p style="margin-top:28px;">
      <a href="/it/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:15px 32px;border-radius:8px;font-weight:600;font-size:16px;text-decoration:none;">Schedule an AI Demo Call</a>
    </p>
  </div>
</div>

<section ${S}>
  <div style="text-align:center;max-width:820px;margin:0 auto 40px;">
    <h2 ${H2}>Done-For-You AI Solutions for Your Vertical</h2>
    <p ${P}>Select your business type to explore tailored voice agents, intelligent chat dispatchers, CRM connections, and published pricing.</p>
  </div>

  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;">
    ${SOLUTIONS.map(sol => `
      <div style="border:1px solid rgba(128,128,128,0.22);border-radius:14px;padding:28px;background:rgba(255,255,255,0.03);display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <div style="font-size:32px;width:56px;height:56px;background:rgba(34,123,243,0.1);border:1px solid rgba(34,123,243,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">${sol.icon}</div>
          <h3 style="font-size:22px;font-weight:700;margin:0 0 12px;line-height:1.3;">
            <a href="/it/ai-solutions/${sol.slug}/" style="color:inherit;text-decoration:none;">${sol.name}</a>
          </h3>
          <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0 0 16px;">${sol.heroSub}</p>
          <div style="font-size:13px;padding:10px 14px;background:rgba(34,123,243,0.08);border-left:3px solid #227bf3;border-radius:4px;margin-bottom:16px;line-height:1.5;">
            <strong>The Revenue Leak:</strong> ${sol.missedMath}
          </div>
          <div style="font-size:13px;opacity:0.8;margin-bottom:18px;">
            <strong>Integrates with:</strong> ${sol.integrations.slice(0, 4).join(', ')}
          </div>
        </div>
        <div>
          <a href="/it/ai-solutions/${sol.slug}/" style="display:inline-flex;align-items:center;font-weight:600;font-size:15px;color:#227bf3;text-decoration:none;">
            Explore ${sol.name} &rsaquo;
          </a>
        </div>
      </div>
    `).join('')}
  </div>
</section>

<section ${S}>
  <div style="background:linear-gradient(135deg,rgba(34,123,243,0.08) 0%,rgba(34,123,243,0.02) 100%);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:36px;margin:20px 0;">
    <h2 ${H2}>Why Done-For-You AI Beats DIY Software Tools</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:24px;">
      <div>
        <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;color:#e53935;">❌ Generic SaaS Chatbots & DIY AI</h3>
        <ul style="padding-left:18px;line-height:1.8;font-size:15px;opacity:0.85;margin:0;">
          <li>You spend 20+ hours configuring prompt templates</li>
          <li>Prone to hallucination and awkward robotic pauses</li>
          <li>Doesn't integrate cleanly with your legacy FSM or EHR</li>
          <li>No ongoing prompt engineering or error monitoring</li>
          <li>High monthly subscription fees with zero support</li>
        </ul>
      </div>
      <div>
        <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;color:#2e7d32;">✅ Aenfinite Installed AI System</h3>
        <ul style="padding-left:18px;line-height:1.8;font-size:15px;opacity:0.85;margin:0;">
          <li>Engineered, tuned, and tested by senior AI engineers</li>
          <li>Natural human-like voice with ultra-low latency (&lt;600ms)</li>
          <li>Direct bi-directional sync with Jobber, Clio, Dentrix, etc.</li>
          <li>Continuous monitoring and prompt optimization</li>
          <li>Fixed setup pricing + predictable monthly usage</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Pair AI Automazione With a Custom Website</h2>
  <p ${P}>Looking for a complete digital overhaul? Pair our AI receptionists with our custom, high-converting industry websites:</p>
  <p style="margin:20px 0;">
    <a href="/it/industries/" style="font-weight:700;font-size:17px;color:#227bf3;text-decoration:none;">Explore Web Design by Industry &rsaquo;</a>
  </p>
</section>

<section class="aen-faq-block" ${S}>
  <h2 ${H2}>Domande Frequenti</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">How do voice AI receptionists connect to my existing business phone?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">You do not need to change phone carriers or numbers. We provide a dedicated AI bridge number. You simply set up conditional call forwarding (e.g. after-hours, on busy lines, or 24/7) from your existing provider to the AI receptionist.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">How much does it cost to set up an AI receptionist or chatbot?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Our done-for-you setups range from <strong>$1,500 to $4,500</strong> for full custom prompt tuning, voice configuration, and CRM/FSM integration. Monthly hosting, monitoring, and voice minutes start at <strong>$149–$299/mo</strong>.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">What happens if the caller asks something unexpected?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">The AI is built with safe escalation rules. If a caller asks a complex question outside its knowledge base, it gracefully captures their contact info and question, then triggers an urgent notification or transfers the call directly to your on-call team.</div>
      </div>
    </details>
  </div>
</section>

<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Hear a live demonstration tailored for your business</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Book a 20-minute discovery session with our Denver engineering team. We'll run a live test call and map out your exact automation workflow.</p>
    <a href="/it/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Request a Live AI Demo &rsaquo;</a>
  </div>
</section>
`;
}

export default function AISolutionsHubPage() {
  const pageContent = chrome.nav + buildAIHubContent() + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = 'https://aenfinite.com/ai-solutions/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'AI Automazione & Voice Receptionists by Industry',
        serviceType: 'AI Agent & Voice Receptionist Sviluppo',
        description: 'Done-for-you AI voice agents, smart chatbots, and CRM/FSM workflow automation for dental, HVAC, law firms, real estate, restaurants, and home services.',
        provider: { '@id': 'https://aenfinite.com/#organization' },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'City', name: 'Denver' },
        ],
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'AI Solutions', item: url },
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

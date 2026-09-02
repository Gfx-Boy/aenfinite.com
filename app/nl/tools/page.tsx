// Language: Dutch (nl)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import toolsData from '@/lib/tools-data.json';

export const metadata: Metadata = {
  title: 'Our Technologie Stack — AI, Automatisering & Ontwikkeling Tools | Aenfinite',
  description: 'The tools we use to build your AI systems: n8n, Make.com, Vapi, GoHighLevel, WordPress, and Retell AI. Open-source, industry-standard, no vendor lock-in.',
  keywords: 'n8n agency, make.com consultant, vapi developer, GoHighLevel expert, wordpress development, retell ai, ai automation tools',
  alternates: { canonical: "https://aenfinite.com/nl/tools/", languages: {"x-default":"https://aenfinite.com/tools/","en":"https://aenfinite.com/tools/","es":"https://aenfinite.com/es/tools/","fr":"https://aenfinite.com/fr/tools/","de":"https://aenfinite.com/de/tools/","it":"https://aenfinite.com/it/tools/","ar":"https://aenfinite.com/ar/tools/","pt":"https://aenfinite.com/pt/tools/","zh":"https://aenfinite.com/zh/tools/","hi":"https://aenfinite.com/hi/tools/","nl":"https://aenfinite.com/nl/tools/","ja":"https://aenfinite.com/ja/tools/","ko":"https://aenfinite.com/ko/tools/"} },
  openGraph: {
    title: 'Our Technologie Stack — AI, Automatisering & Ontwikkeling Tools | Aenfinite',
    description: 'Industry-standard tools, expert implementation. See the technology behind our AI systems.',
    url: 'https://aenfinite.com/tools/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  robots: { index: true, follow: true },
};

type ToolItem = {
  slug: string;
  name: string;
  fullName: string;
  icon: string;
  whatItDoes: string;
  pricing: string;
};

const TOOLS = Object.values(toolsData as unknown as Record<string, ToolItem>);

function buildHubContent(): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  const cards = TOOLS.map(t => `
    <a href="/nl/tools/${t.slug}/" style="text-decoration:none;color:inherit;display:block;background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:28px 24px;transition:all 0.3s ease;">
      <div style="width:54px;height:54px;background:rgba(34,123,243,0.08);border:1px solid rgba(34,123,243,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">${t.icon}</div>
      <h3 style="font-size:22px;font-weight:700;margin:0 0 8px;">${t.name}</h3>
      <p style="font-size:14px;font-weight:600;color:#227bf3;margin:0 0 12px;">${t.fullName}</p>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0 0 16px;">${t.whatItDoes.substring(0, 150)}…</p>
      <span style="font-size:14px;font-weight:600;color:#227bf3;">Meer Informatie &rsaquo;</span>
    </a>
  `).join('\n');

  return `
<div class="header aen-dark-mode" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.15;margin:0 0 20px;">Our Technologie Stack</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:860px;">We don&rsquo;t build on proprietary platforms that lock you in. Every system uses industry-standard, open-source tools that you control. Here's what powers our AI and automation builds.</p>
  </div>
</div>

<section ${S}>
  <h2 ${H2}>The Tools We Build With</h2>
  <p ${P}>Each tool is battle-tested in production with real businesses. Click any card to learn how we use it and why it matters for your project.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;margin-top:20px;">
    ${cards}
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Why This Stack?</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:20px;">
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">🔓 No Vendor Lock-In</h3>
      <p style="font-size:15px;line-height:1.7;opacity:0.8;margin:0;">Every tool has an open API and export capability. You're never trapped. Switch providers anytime without losing data.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">💰 Cost-Effective at Scale</h3>
      <p style="font-size:15px;line-height:1.7;opacity:0.8;margin:0;">Self-hosted n8n has no per-task pricing. GHL replaces $500+/month in separate tools. The stack costs 60–80% less than enterprise alternatives.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">🤖 AI-Native</h3>
      <p style="font-size:15px;line-height:1.7;opacity:0.8;margin:0;">Every tool integrates with AI models natively. Vapi and Retell for voice, n8n for orchestration, GHL for CRM triggers — AI is first-class, not an afterthought.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">📖 You Own Everything</h3>
      <p style="font-size:15px;line-height:1.7;opacity:0.8;margin:0;">Accounts, data, workflows, and AI agents are in your name. Cancel our management anytime and keep the complete system.</p>
    </div>
  </div>
</section>

<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Need Help Choosing the Right Tools?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Book a free AI Opportunity Audit and we&rsquo;ll recommend the exact stack for your business — based on your budget, technical needs, and growth goals.</p>
    <a href="/nl/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
  </div>
</section>
`;
}

export default function ToolsHubPage() {
  const pageContent = chrome.nav + buildHubContent() + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = 'https://aenfinite.com/tools/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Technologie Stack', item: url },
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

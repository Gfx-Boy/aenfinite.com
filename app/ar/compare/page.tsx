// Language: Arabic (ar)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import comparisonsData from '@/lib/comparisons-data.json';

export const metadata: Metadata = {
  title: 'Honest Comparisons — AI, تصميم المواقع & Tools | Aenfinite',
  description: 'Side-by-side comparisons: AI receptionist vs answering service, custom website vs WordPress, done-for-you AI vs DIY, agency vs in-house, GoHighLevel vs HubSpot.',
  keywords: 'AI receptionist vs answering service, custom website vs wordpress, done for you AI vs DIY chatbot, agency vs in-house developer, GoHighLevel vs HubSpot',
  alternates: { canonical: "https://aenfinite.com/ar/compare/", languages: {"x-default":"https://aenfinite.com/compare/","en":"https://aenfinite.com/compare/","es":"https://aenfinite.com/es/compare/","fr":"https://aenfinite.com/fr/compare/","de":"https://aenfinite.com/de/compare/","it":"https://aenfinite.com/it/compare/","ar":"https://aenfinite.com/ar/compare/","pt":"https://aenfinite.com/pt/compare/","zh":"https://aenfinite.com/zh/compare/","hi":"https://aenfinite.com/hi/compare/","nl":"https://aenfinite.com/nl/compare/","ja":"https://aenfinite.com/ja/compare/","ko":"https://aenfinite.com/ko/compare/"} },
  openGraph: {
    title: 'Honest Comparisons — AI, تصميم المواقع & Tools | Aenfinite',
    description: 'Data-driven comparisons to help you make the right technology and partner decisions for your business.',
    url: 'https://aenfinite.com/compare/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  robots: { index: true, follow: true },
};

type CompItem = {
  slug: string;
  name: string;
  title: string;
  heroSub: string;
  optionA: { name: string; icon: string };
  optionB: { name: string; icon: string };
};

const COMPARISONS = Object.values(comparisonsData as unknown as Record<string, CompItem>);

function buildHubContent(): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;

  const cards = COMPARISONS.map(c => `
    <a href="/ar/compare/${c.slug}/" style="text-decoration:none;color:inherit;display:block;background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:28px 24px;transition:all 0.3s ease;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <span style="font-size:28px;">${c.optionA.icon}</span>
        <span style="font-size:20px;opacity:0.5;">vs</span>
        <span style="font-size:28px;">${c.optionB.icon}</span>
      </div>
      <h3 style="font-size:20px;font-weight:700;margin:0 0 10px;line-height:1.3;">${c.name}</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">${c.heroSub.substring(0, 160)}…</p>
      <span style="display:inline-block;margin-top:14px;font-size:14px;font-weight:600;color:#227bf3;">Read Full Comparison &rsaquo;</span>
    </a>
  `).join('\n');

  return `
<div class="header aen-dark-mode" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.15;margin:0 0 20px;">Honest Comparisons</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:860px;">We implement AI, websites, and CRM systems every day. Here are data-driven, no-BS comparisons to help you make the right choice — even if that choice isn't us.</p>
  </div>
</div>

<section ${S}>
  <h2 ${H2}>Browse Comparisons</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:20px;margin-top:20px;">
    ${cards}
  </div>
</section>

<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Need Help Deciding?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Book a free AI Opportunity Audit. We&rsquo;ll analyze your current systems and recommend the right solution — no pressure, no sales pitch.</p>
    <a href="/ar/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
  </div>
</section>
`;
}

export default function CompareHubPage() {
  const pageContent = chrome.nav + buildHubContent() + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = 'https://aenfinite.com/compare/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Compare', item: url },
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

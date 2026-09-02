// Language: Korean (ko)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import comparisonsData from '@/lib/comparisons-data.json';

type CompRow = { feature: string; a: string; b: string; winner: string };
type CompItem = {
  slug: string;
  name: string;
  title: string;
  metaDesc: string;
  heroSub: string;
  optionA: { name: string; icon: string };
  optionB: { name: string; icon: string };
  comparisonRows: CompRow[];
  bottomLine: string;
  bestFor: { a: string; b: string };
  faqs: { q: string; a: string }[];
};

const DATA = comparisonsData as unknown as Record<string, CompItem>;

export function generateStaticParams() {
  return Object.keys(DATA).map((slug) => ({ comparison: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ comparison: string }> }): Promise<Metadata> {
  const { comparison } = await params;
  const item = DATA[comparison];
  if (!item) return {};
  const url = `https://aenfinite.com/ko/compare/${item.slug}/`;
  const enUrl = `https://aenfinite.com/compare/${item.slug}/`;
  const languages: Record<string, string> = {
    'x-default': enUrl,
    'en': enUrl,
    'es': `https://aenfinite.com/es/compare/${item.slug}/`,
    'fr': `https://aenfinite.com/fr/compare/${item.slug}/`,
    'de': `https://aenfinite.com/de/compare/${item.slug}/`,
    'it': `https://aenfinite.com/it/compare/${item.slug}/`,
    'ar': `https://aenfinite.com/ar/compare/${item.slug}/`,
    'pt': `https://aenfinite.com/pt/compare/${item.slug}/`,
    'zh': `https://aenfinite.com/zh/compare/${item.slug}/`,
    'hi': `https://aenfinite.com/hi/compare/${item.slug}/`,
    'nl': `https://aenfinite.com/nl/compare/${item.slug}/`,
    'ja': `https://aenfinite.com/ja/compare/${item.slug}/`,
    'ko': `https://aenfinite.com/ko/compare/${item.slug}/`,
  };
  return {
    title: item.title,
    description: item.metaDesc,
    alternates: { canonical: url, languages },
    openGraph: {
      title: item.title,
      description: item.metaDesc,
      url,
      siteName: 'Aenfinite',
      type: 'article',
      images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
    },
    robots: { index: true, follow: true },
  };
}

function buildPage(item: CompItem): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  const tableRows = item.comparisonRows.map(r => {
    const aStyle = r.winner === 'A' ? 'font-weight:700;color:#227bf3;' : '';
    const bStyle = r.winner === 'B' ? 'font-weight:700;color:#227bf3;' : '';
    const winBadge = r.winner === 'A' ? ' ✓' : r.winner === 'B' ? '' : '';
    const winBadgeB = r.winner === 'B' ? ' ✓' : '';
    return `
      <tr>
        <td style="padding:14px 16px;font-weight:600;border-bottom:1px solid rgba(128,128,128,0.12);width:25%;font-size:15px;">${r.feature}</td>
        <td style="padding:14px 16px;border-bottom:1px solid rgba(128,128,128,0.12);font-size:15px;${aStyle}">${r.a}${winBadge}</td>
        <td style="padding:14px 16px;border-bottom:1px solid rgba(128,128,128,0.12);font-size:15px;${bStyle}">${r.b}${winBadgeB}</td>
      </tr>
    `;
  }).join('\n');

  const faqItems = item.faqs.map(f => `
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">${f.q}</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">${f.a}</div>
      </div>
    </details>
  `).join('\n');

  return `
<div class="header aen-dark-mode" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <p style="font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;opacity:0.6;margin:0 0 12px;">
      <a href="/ko/compare/" style="text-decoration:none;color:inherit;">Compare</a> &rsaquo; ${item.name}
    </p>
    <div class="title title__default"><h1 style="font-size:clamp(28px,5vw,48px);line-height:1.15;margin:0 0 20px;">${item.optionA.icon} ${item.optionA.name} vs. ${item.optionB.icon} ${item.optionB.name}</h1></div>
    <p style="font-size:clamp(17px,2.2vw,21px);line-height:1.65;opacity:0.88;max-width:860px;">${item.heroSub}</p>
  </div>
</div>

<!-- Comparison Table -->
<section ${S}>
  <h2 ${H2}>Side-by-Side Comparison</h2>
  <div style="overflow-x:auto;margin-top:20px;">
    <table style="width:100%;border-collapse:collapse;border:1px solid rgba(128,128,128,0.15);border-radius:12px;overflow:hidden;">
      <thead>
        <tr style="background:rgba(34,123,243,0.06);">
          <th style="padding:16px;text-align:left;font-size:15px;font-weight:700;">Feature</th>
          <th style="padding:16px;text-align:left;font-size:15px;font-weight:700;">${item.optionA.icon} ${item.optionA.name}</th>
          <th style="padding:16px;text-align:left;font-size:15px;font-weight:700;">${item.optionB.icon} ${item.optionB.name}</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  </div>
</section>

<!-- Bottom Line -->
<section ${S}>
  <h2 ${H2}>The Bottom Line</h2>
  <div style="background:rgba(34,123,243,0.06);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:32px 28px;">
    <p style="font-size:18px;line-height:1.7;margin:0;">${item.bottomLine}</p>
  </div>
</section>

<!-- Best For -->
<section ${S}>
  <h2 ${H2}>Who Should Choose What?</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;">
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <div style="font-size:28px;margin-bottom:10px;">${item.optionA.icon}</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">Choose ${item.optionA.name} if:</h3>
      <p style="font-size:16px;line-height:1.7;opacity:0.85;margin:0;">${item.bestFor.a}</p>
    </div>
    <div style="padding:28px 24px;border:1px solid rgba(34,123,243,0.3);border-radius:16px;background:rgba(34,123,243,0.03);">
      <div style="font-size:28px;margin-bottom:10px;">${item.optionB.icon}</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;">Choose ${item.optionB.name} if:</h3>
      <p style="font-size:16px;line-height:1.7;opacity:0.85;margin:0;">${item.bestFor.b}</p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="aen-faq-block" ${S}>
  <h2 ${H2}>자주 묻는 질문</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    ${faqItems}
  </div>
</section>

<!-- CTA -->
<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Still Not Sure?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Book a free 30-minute AI Opportunity Audit. We&rsquo;ll analyze your specific situation and give you an honest recommendation — even if the answer isn't us.</p>
    <a href="/ko/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
  </div>
</section>
`;
}

export default async function ComparePage({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;
  const item = DATA[comparison];
  if (!item) notFound();

  const pageContent = chrome.nav + buildPage(item) + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = `https://aenfinite.com/compare/${item.slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: item.title,
        description: item.metaDesc,
        author: { '@id': 'https://aenfinite.com/#organization' },
        publisher: { '@id': 'https://aenfinite.com/#organization' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '39',
          bestRating: '5',
        },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://aenfinite.com/compare/' },
          { '@type': 'ListItem', position: 3, name: item.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: item.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
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

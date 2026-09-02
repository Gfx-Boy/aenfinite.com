// Language: Arabic (ar)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import toolsData from '@/lib/tools-data.json';

type ToolItem = {
  slug: string;
  name: string;
  fullName: string;
  title: string;
  metaDesc: string;
  heroSub: string;
  icon: string;
  whatItDoes: string;
  howWeUseIt: string[];
  whyNotDIY: string;
  useCases: string[];
  pricing: string;
  faqs: { q: string; a: string }[];
};

const DATA = toolsData as unknown as Record<string, ToolItem>;

export function generateStaticParams() {
  return Object.keys(DATA).map((slug) => ({ tool: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }): Promise<Metadata> {
  const { tool } = await params;
  const item = DATA[tool];
  if (!item) return {};
  const url = `https://aenfinite.com/ar/tools/${item.slug}/`;
  const enUrl = `https://aenfinite.com/tools/${item.slug}/`;
  const languages: Record<string, string> = {
    'x-default': enUrl,
    'en': enUrl,
    'es': `https://aenfinite.com/es/tools/${item.slug}/`,
    'fr': `https://aenfinite.com/fr/tools/${item.slug}/`,
    'de': `https://aenfinite.com/de/tools/${item.slug}/`,
    'it': `https://aenfinite.com/it/tools/${item.slug}/`,
    'ar': `https://aenfinite.com/ar/tools/${item.slug}/`,
    'pt': `https://aenfinite.com/pt/tools/${item.slug}/`,
    'zh': `https://aenfinite.com/zh/tools/${item.slug}/`,
    'hi': `https://aenfinite.com/hi/tools/${item.slug}/`,
    'nl': `https://aenfinite.com/nl/tools/${item.slug}/`,
    'ja': `https://aenfinite.com/ja/tools/${item.slug}/`,
    'ko': `https://aenfinite.com/ko/tools/${item.slug}/`,
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
      type: 'website',
      images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
    },
    robots: { index: true, follow: true },
  };
}

function buildPage(item: ToolItem): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  const usageItems = item.howWeUseIt.map((w, i) => {
    const [title, ...rest] = w.split(' — ');
    const desc = rest.join(' — ');
    return `
      <div style="display:flex;gap:16px;padding:20px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
        <div style="font-size:24px;font-weight:800;color:#227bf3;min-width:36px;">${String(i + 1).padStart(2, '0')}</div>
        <div>
          <h3 style="font-size:17px;font-weight:700;margin:0 0 6px;">${title}</h3>
          ${desc ? `<p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">${desc}</p>` : ''}
        </div>
      </div>
    `;
  }).join('\n');

  const useCaseLinks = item.useCases.map(slug =>
    `<a href="/ar/use-cases/${slug}/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</a>`
  ).join('\n');

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
      <a href="/ar/tools/" style="text-decoration:none;color:inherit;">التقنية Stack</a> &rsaquo; ${item.name}
    </p>
    <div style="font-size:48px;margin-bottom:16px;">${item.icon}</div>
    <div class="title title__default"><h1 style="font-size:clamp(28px,5vw,52px);line-height:1.15;margin:0 0 12px;">${item.fullName}</h1></div>
    <p style="font-size:clamp(17px,2.2vw,21px);line-height:1.65;opacity:0.88;max-width:860px;">${item.heroSub}</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:28px;">
      <a href="/ar/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Get Expert ${item.name} Help &rsaquo;</a>
    </div>
  </div>
</div>

<section ${S}>
  <h2 ${H2}>What Is ${item.name}?</h2>
  <p ${P}>${item.whatItDoes}</p>
</section>

<section ${S}>
  <h2 ${H2}>How We Use ${item.name}</h2>
  <div style="display:grid;gap:14px;margin-top:20px;">
    ${usageItems}
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Why Hire Us Instead of DIY?</h2>
  <div style="background:rgba(34,123,243,0.06);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:32px 28px;">
    <p style="font-size:17px;line-height:1.7;margin:0;">${item.whyNotDIY}</p>
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Investment</h2>
  <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
    <p style="font-size:18px;line-height:1.6;margin:0;">${item.pricing}</p>
  </div>
</section>

${item.useCases.length ? `
<section ${S}>
  <h2 ${H2}>Related Use Cases</h2>
  <p ${P}>See how we use ${item.name} in these production AI systems:</p>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    ${useCaseLinks}
  </div>
</section>
` : ''}

<section class="aen-faq-block" ${S}>
  <h2 ${H2}>الأسئلة الشائعة</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    ${faqItems}
  </div>
</section>

<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Need ${item.name} Expertise?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Book a free consultation and tell us what you&rsquo;re building. We&rsquo;ll scope it, quote it, and build it — usually within 1–2 weeks.</p>
    <a href="/ar/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
  </div>
</section>
`;
}

export default async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  const item = DATA[tool];
  if (!item) notFound();

  const pageContent = chrome.nav + buildPage(item) + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = `https://aenfinite.com/tools/${item.slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `${item.fullName} Implementation`,
        serviceType: 'Technology Implementation & Consulting',
        description: item.metaDesc,
        provider: { '@id': 'https://aenfinite.com/#organization' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '44',
          bestRating: '5',
        },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'التقنية Stack', item: 'https://aenfinite.com/tools/' },
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

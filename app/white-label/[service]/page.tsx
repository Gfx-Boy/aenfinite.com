import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import whiteLabelData from '@/lib/white-label-data.json';

export const dynamic = 'force-static';
export const dynamicParams = true;

type WLRec = {
  name: string;
  singular: string;
  slug: string;
  icon: string;
  title: string;
  metaDesc: string;
  heroHeading: string;
  heroSub: string;
  problemStat: string;
  problemDetail: string;
  features: Array<[string, string]>;
  pricing: string;
  faqs: Array<[string, string]>;
  relatedServices: string[];
};

const DATA = whiteLabelData as unknown as Record<string, WLRec>;

export async function generateStaticParams() {
  return Object.keys(DATA).map(slug => ({ service: slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ service: string }> }
): Promise<Metadata> {
  const { service } = await params;
  const svc = DATA[service];
  if (!svc) return {};

  const url = `https://aenfinite.com/white-label/${service}/`;
  const enUrl = `https://aenfinite.com/white-label/${service}/`;
  const languages: Record<string, string> = {
    'x-default': enUrl,
    'en': enUrl,
    'es': `https://aenfinite.com/es/white-label/${service}/`,
    'fr': `https://aenfinite.com/fr/white-label/${service}/`,
    'de': `https://aenfinite.com/de/white-label/${service}/`,
    'it': `https://aenfinite.com/it/white-label/${service}/`,
    'ar': `https://aenfinite.com/ar/white-label/${service}/`,
    'pt': `https://aenfinite.com/pt/white-label/${service}/`,
    'zh': `https://aenfinite.com/zh/white-label/${service}/`,
    'hi': `https://aenfinite.com/hi/white-label/${service}/`,
    'nl': `https://aenfinite.com/nl/white-label/${service}/`,
    'ja': `https://aenfinite.com/ja/white-label/${service}/`,
    'ko': `https://aenfinite.com/ko/white-label/${service}/`,
  };
  return {
    title: svc.title,
    description: svc.metaDesc,
    alternates: { canonical: url, languages },
    openGraph: {
      title: svc.title,
      description: svc.metaDesc,
      url,
      siteName: 'Aenfinite',
      type: 'website',
      images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: svc.title,
      description: svc.metaDesc,
      images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
    },
    robots: { index: true, follow: true },
  };
}

function buildWLBody(svc: WLRec): string {
  const S = `style="max-width:1050px;margin:0 auto;padding:36px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,34px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 16px;"`;

  return `
<div class="header" style="min-height:40vh;display:flex;align-items:center;padding:120px 24px 45px;">
  <div style="max-width:1050px;margin:0 auto;width:100%;">
    <div style="width:60px;height:60px;background:rgba(34,123,243,0.08);border:1px solid rgba(34,123,243,0.2);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;">${svc.icon}</div>
    <div class="title title__default"><h1 style="font-size:clamp(30px,5vw,52px);line-height:1.15;margin:0 0 18px;">${svc.heroHeading}</h1></div>
    <p style="font-size:clamp(17px,2.2vw,21px);line-height:1.6;opacity:0.88;max-width:840px;">${svc.heroSub}</p>
    <p style="margin-top:24px;">
      <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 30px;border-radius:8px;font-weight:600;font-size:16px;text-decoration:none;">Request Wholesale Agency Rates</a>
    </p>
  </div>
</div>

<section ${S}>
  <div style="background:rgba(34,123,243,0.06);border-left:4px solid #227bf3;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:32px;">
    <h2 style="font-size:20px;font-weight:700;margin:0 0 8px;color:#227bf3;">The Agency Scaling Bottleneck</h2>
    <p style="font-size:17px;line-height:1.7;margin:0 0 12px;font-weight:500;">${svc.problemStat}</p>
    <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0;">${svc.problemDetail}</p>
  </div>
</section>

<section ${S}>
  <h2 ${H2}>What We Deliver for Your Agency</h2>
  <p ${P}>Every project is delivered with complete source code, pixel-perfect fidelity to your Figma designs, and 100% white-label confidentiality:</p>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin-top:24px;">
    ${svc.features.map(([name, desc]) => `
      <div style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;padding:24px;background:rgba(255,255,255,0.02);">
        <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;color:#227bf3;">${name}</h3>
        <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0;">${desc}</p>
      </div>
    `).join('')}
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Wholesale Agency Pricing &amp; Turnaround</h2>
  <p ${P}>${svc.pricing}</p>
  <p style="font-size:15px;opacity:0.85;margin-top:10px;">All projects are backed by our mutual NDA, fixed-price guarantee, and dedicated technical project management.</p>
</section>

<section class="aen-faq-block" ${S}>
  <h2 ${H2}>Frequently Asked Questions</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    ${svc.faqs.map(([q, a]) => `
      <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:16px 20px;">
        <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:clamp(16px,2.2vw,19px);line-height:1.45;">${q}</summary>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
          <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">${a}</div>
        </div>
      </details>
    `).join('')}
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Explore Other White-Label Capabilities</h2>
  <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:16px;">
    ${svc.relatedServices.map(slug => {
      const rel = DATA[slug];
      if (!rel) return '';
      return `<a href="/white-label/${slug}/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.25);border-radius:24px;text-decoration:none;color:inherit;font-size:15px;font-weight:500;">${rel.icon} ${rel.name} &rsaquo;</a>`;
    }).join('')}
    <a href="/white-label/" style="padding:10px 18px;border:1px solid #227bf3;border-radius:24px;text-decoration:none;color:#227bf3;font-size:15px;font-weight:600;">View All White-Label Services &rsaquo;</a>
  </div>
</section>

<section ${S} style="padding-bottom:50px;text-align:center;">
  <div style="border:1px solid rgba(128,128,128,0.2);border-radius:14px;padding:36px 20px;">
    <h2 style="font-size:26px;font-weight:700;margin:0 0 12px;">Have an active client scope or Figma file?</h2>
    <p style="font-size:16px;opacity:0.85;margin:0 auto 20px;max-width:550px;">Send us your project scope for a guaranteed 24-hour wholesale price quote and delivery timeline.</p>
    <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 28px;border-radius:8px;font-weight:600;text-decoration:none;">Submit a Project for Scoping &rsaquo;</a>
  </div>
</section>
`;
}

export default async function WhiteLabelDetailPage(
  { params }: { params: Promise<{ service: string }> }
) {
  const { service } = await params;
  const svc = DATA[service];
  if (!svc) notFound();

  const pageContent = chrome.nav + buildWLBody(svc) + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = `https://aenfinite.com/white-label/${service}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: svc.title,
        serviceType: `White-Label ${svc.name}`,
        description: svc.metaDesc,
        provider: { '@id': 'https://aenfinite.com/#organization' },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Australia' },
        ],
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'White-Label Services', item: 'https://aenfinite.com/white-label/' },
          { '@type': 'ListItem', position: 3, name: svc.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: svc.faqs.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: a,
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

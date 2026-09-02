// Language: French (fr)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import industriesData from '@/lib/industries-data.json';

export const dynamic = 'force-static';
export const dynamicParams = true;

type IndustryRec = {
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
  aiAngle: string;
  pricing: string;
  faqs: Array<[string, string]>;
  relatedIndustries: string[];
  relatedAI?: string;
};

const DATA = industriesData as unknown as Record<string, IndustryRec>;

export async function generateStaticParams() {
  return Object.keys(DATA).map(slug => ({ industry: slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ industry: string }> }
): Promise<Metadata> {
  const { industry } = await params;
  const ind = DATA[industry];
  if (!ind) return {};

  const url = `https://aenfinite.com/fr/industries/${industry}/`;
  const enUrl = `https://aenfinite.com/industries/${industry}/`;
  const languages: Record<string, string> = {
    'x-default': enUrl,
    'en': enUrl,
    'es': `https://aenfinite.com/es/industries/${industry}/`,
    'fr': `https://aenfinite.com/fr/industries/${industry}/`,
    'de': `https://aenfinite.com/de/industries/${industry}/`,
    'it': `https://aenfinite.com/it/industries/${industry}/`,
    'ar': `https://aenfinite.com/ar/industries/${industry}/`,
    'pt': `https://aenfinite.com/pt/industries/${industry}/`,
    'zh': `https://aenfinite.com/zh/industries/${industry}/`,
    'hi': `https://aenfinite.com/hi/industries/${industry}/`,
    'nl': `https://aenfinite.com/nl/industries/${industry}/`,
    'ja': `https://aenfinite.com/ja/industries/${industry}/`,
    'ko': `https://aenfinite.com/ko/industries/${industry}/`,
  };
  return {
    title: ind.title,
    description: ind.metaDesc,
    alternates: { canonical: url, languages },
    openGraph: {
      title: ind.title,
      description: ind.metaDesc,
      url,
      siteName: 'Aenfinite',
      type: 'website',
      images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ind.title,
      description: ind.metaDesc,
      images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
    },
    robots: { index: true, follow: true },
  };
}

function buildIndustryBody(ind: IndustryRec): string {
  const S = `style="max-width:1050px;margin:0 auto;padding:36px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,34px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 16px;"`;

  return `
<div class="header" style="min-height:40vh;display:flex;align-items:center;padding:120px 24px 45px;">
  <div style="max-width:1050px;margin:0 auto;width:100%;">
    <div style="width:60px;height:60px;background:rgba(34,123,243,0.08);border:1px solid rgba(34,123,243,0.2);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;">${ind.icon}</div>
    <div class="title title__default"><h1 style="font-size:clamp(30px,5vw,52px);line-height:1.15;margin:0 0 18px;">${ind.heroHeading}</h1></div>
    <p style="font-size:clamp(17px,2.2vw,21px);line-height:1.6;opacity:0.88;max-width:840px;">${ind.heroSub}</p>
    <p style="margin-top:24px;">
      <a href="/fr/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 30px;border-radius:8px;font-weight:600;font-size:16px;text-decoration:none;">Schedule a Discovery Call</a>
    </p>
  </div>
</div>

<section ${S}>
  <div style="background:rgba(34,123,243,0.06);border-left:4px solid #227bf3;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:32px;">
    <h2 style="font-size:20px;font-weight:700;margin:0 0 8px;color:#227bf3;">The Cost of a Generic Website</h2>
    <p style="font-size:17px;line-height:1.7;margin:0 0 12px;font-weight:500;">${ind.problemStat}</p>
    <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0;">${ind.problemDetail}</p>
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Built Specifically for ${ind.name}</h2>
  <p ${P}>Every module, integration, and user flow is purpose-engineered around how ${ind.singular} clients evaluate, decide, and convert:</p>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin-top:24px;">
    ${ind.features.map(([name, desc]) => `
      <div style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;padding:24px;background:rgba(255,255,255,0.02);">
        <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;color:#227bf3;">${name}</h3>
        <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0;">${desc}</p>
      </div>
    `).join('')}
  </div>
</section>

<section ${S}>
  <div style="background:linear-gradient(135deg,rgba(34,123,243,0.1) 0%,rgba(34,123,243,0.03) 100%);border:1px solid rgba(34,123,243,0.25);border-radius:14px;padding:32px;margin:20px 0;">
    <h2 style="font-size:24px;font-weight:700;margin:0 0 12px;">⚡ Automated 24/7 AI Integration</h2>
    <p ${P}>${ind.aiAngle}</p>
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Published Pricing &amp; Timeline</h2>
  <p ${P}>${ind.pricing}</p>
  <p style="font-size:15px;opacity:0.85;margin-top:10px;">All projects are delivered with full source code ownership, zero proprietary lock-in, and direct senior engineer communication.</p>
</section>

<section class="aen-faq-block" ${S}>
  <h2 ${H2}>Questions Fréquemment Posées</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    ${ind.faqs.map(([q, a]) => `
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
  <h2 ${H2}>Explore Autre Industry Solutions</h2>
  <p ${P}>We also build tailored web and AI solutions for other high-growth verticals:</p>
  <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:16px;">
    ${ind.relatedIndustries.map(slug => {
      const rel = DATA[slug];
      if (!rel) return '';
      return `<a href="/fr/industries/${slug}/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.25);border-radius:24px;text-decoration:none;color:inherit;font-size:15px;font-weight:500;">${rel.icon} ${rel.name} &rsaquo;</a>`;
    }).join('')}
    <a href="/fr/industries/" style="padding:10px 18px;border:1px solid #227bf3;border-radius:24px;text-decoration:none;color:#227bf3;font-size:15px;font-weight:600;">Voir Tout Industries &rsaquo;</a>
  </div>
</section>

<section ${S} style="padding-bottom:50px;text-align:center;">
  <div style="border:1px solid rgba(128,128,128,0.2);border-radius:14px;padding:36px 20px;">
    <h2 style="font-size:26px;font-weight:700;margin:0 0 12px;">Ready to elevate your ${ind.singular}?</h2>
    <p style="font-size:16px;opacity:0.85;margin:0 auto 20px;max-width:550px;">Contact our Denver team for a complimentary audit and fixed-price scope proposal.</p>
    <a href="/fr/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 28px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Consultation Gratuite &rsaquo;</a>
  </div>
</section>
`;
}

export default async function IndustryDetailPage(
  { params }: { params: Promise<{ industry: string }> }
) {
  const { industry } = await params;
  const ind = DATA[industry];
  if (!ind) notFound();

  const pageContent = chrome.nav + buildIndustryBody(ind) + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = `https://aenfinite.com/industries/${industry}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: ind.title,
        serviceType: `Conception Web for ${ind.name}`,
        description: ind.metaDesc,
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
          { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://aenfinite.com/industries/' },
          { '@type': 'ListItem', position: 3, name: ind.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: ind.faqs.map(([q, a]) => ({
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

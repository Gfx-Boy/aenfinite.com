import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import aiSolutionsData from '@/lib/ai-solutions-data.json';

export const dynamic = 'force-static';
export const dynamicParams = true;

type AISolutionRec = {
  name: string;
  singular: string;
  slug: string;
  icon: string;
  title: string;
  metaDesc: string;
  heroHeading: string;
  heroSub: string;
  missedMath: string;
  wedge: string;
  workflows: Array<[string, string]>;
  integrations: string[];
  pricing: string;
  faqs: Array<[string, string]>;
  relatedIndustry: string;
  relatedSolutions: string[];
};

const DATA = aiSolutionsData as unknown as Record<string, AISolutionRec>;

export async function generateStaticParams() {
  return Object.keys(DATA).map(slug => ({ solution: slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ solution: string }> }
): Promise<Metadata> {
  const { solution } = await params;
  const sol = DATA[solution];
  if (!sol) return {};

  const url = `https://aenfinite.com/ai-solutions/${solution}/`;
  const enUrl = `https://aenfinite.com/ai-solutions/${solution}/`;
  const languages: Record<string, string> = {
    'x-default': enUrl,
    'en': enUrl,
    'es': `https://aenfinite.com/es/ai-solutions/${solution}/`,
    'fr': `https://aenfinite.com/fr/ai-solutions/${solution}/`,
    'de': `https://aenfinite.com/de/ai-solutions/${solution}/`,
    'it': `https://aenfinite.com/it/ai-solutions/${solution}/`,
    'ar': `https://aenfinite.com/ar/ai-solutions/${solution}/`,
    'pt': `https://aenfinite.com/pt/ai-solutions/${solution}/`,
    'zh': `https://aenfinite.com/zh/ai-solutions/${solution}/`,
    'hi': `https://aenfinite.com/hi/ai-solutions/${solution}/`,
    'nl': `https://aenfinite.com/nl/ai-solutions/${solution}/`,
    'ja': `https://aenfinite.com/ja/ai-solutions/${solution}/`,
    'ko': `https://aenfinite.com/ko/ai-solutions/${solution}/`,
  };
  return {
    title: sol.title,
    description: sol.metaDesc,
    alternates: { canonical: url, languages },
    openGraph: {
      title: sol.title,
      description: sol.metaDesc,
      url,
      siteName: 'Aenfinite',
      type: 'website',
      images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: sol.title,
      description: sol.metaDesc,
      images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
    },
    robots: { index: true, follow: true },
  };
}

function buildSolutionBody(sol: AISolutionRec): string {
  const S = `style="max-width:1050px;margin:0 auto;padding:36px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,34px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 16px;"`;

  return `
<div class="header" style="min-height:40vh;display:flex;align-items:center;padding:120px 24px 45px;">
  <div style="max-width:1050px;margin:0 auto;width:100%;">
    <div style="font-size:36px;width:64px;height:64px;background:rgba(34,123,243,0.1);border:1px solid rgba(34,123,243,0.2);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;">${sol.icon}</div>
    <div class="title title__default"><h1 style="font-size:clamp(30px,5vw,52px);line-height:1.15;margin:0 0 18px;">${sol.heroHeading}</h1></div>
    <p style="font-size:clamp(17px,2.2vw,21px);line-height:1.6;opacity:0.88;max-width:840px;">${sol.heroSub}</p>
    <p style="margin-top:24px;">
      <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 30px;border-radius:8px;font-weight:600;font-size:16px;text-decoration:none;">Schedule a Live AI Demo</a>
    </p>
  </div>
</div>

<section ${S}>
  <div style="background:rgba(34,123,243,0.06);border-left:4px solid #227bf3;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:32px;">
    <h2 style="font-size:20px;font-weight:700;margin:0 0 8px;color:#227bf3;">The Cost of Missed Calls &amp; Inquiries</h2>
    <p style="font-size:17px;line-height:1.7;margin:0 0 12px;font-weight:500;">${sol.missedMath}</p>
    <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0;">${sol.wedge}</p>
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Core AI Workflows for Your ${sol.singular}</h2>
  <p ${P}>Every automated flow is designed around your real operational needs, diagnostic parameters, and booking rules:</p>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin-top:24px;">
    ${sol.workflows.map(([name, desc]) => `
      <div style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;padding:24px;background:rgba(255,255,255,0.02);">
        <h3 style="font-size:18px;font-weight:700;margin:0 0 10px;color:#227bf3;">⚡ ${name}</h3>
        <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0;">${desc}</p>
      </div>
    `).join('')}
  </div>
</section>

<section ${S}>
  <div style="background:linear-gradient(135deg,rgba(34,123,243,0.1) 0%,rgba(34,123,243,0.03) 100%);border:1px solid rgba(34,123,243,0.25);border-radius:14px;padding:32px;margin:20px 0;">
    <h2 style="font-size:24px;font-weight:700;margin:0 0 12px;">🔗 Seamless Tool &amp; Software Integrations</h2>
    <p ${P}>We don't ask you to change the tools your team relies on every day. We connect directly into your stack:</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:14px;">
      ${sol.integrations.map(tool => `
        <span style="background:#227bf3;color:#fff;padding:8px 16px;border-radius:20px;font-size:14px;font-weight:600;">${tool}</span>
      `).join('')}
    </div>
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Transparent Setup &amp; Maintenance Pricing</h2>
  <p ${P}>${sol.pricing}</p>
  <p style="font-size:15px;opacity:0.85;margin-top:10px;">Includes prompt development, sandbox testing, voice synthesis, telephone carrier forwarding setup, and staff onboarding.</p>
</section>

<section class="aen-faq-block" ${S}>
  <h2 ${H2}>Frequently Asked Questions</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    ${sol.faqs.map(([q, a]) => `
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
  <h2 ${H2}>Pair With Our Industry Web Design</h2>
  <p ${P}>Upgrade your complete digital presence with our purpose-built industry website for your vertical:</p>
  <div style="margin-top:14px;">
    <a href="/industries/${sol.relatedIndustry}/" style="display:inline-block;padding:12px 24px;border:1px solid #227bf3;border-radius:8px;text-decoration:none;color:#227bf3;font-weight:600;font-size:16px;">
      View ${sol.name.replace('AI for ', '').replace('AI Receptionist for ', '').replace('AI Intake for ', '').replace('AI Assistant for ', '').replace('AI Ordering for ', '')} Web Design &rsaquo;
    </a>
  </div>
</section>

<section ${S} style="padding-bottom:50px;text-align:center;">
  <div style="border:1px solid rgba(128,128,128,0.2);border-radius:14px;padding:36px 20px;">
    <h2 style="font-size:26px;font-weight:700;margin:0 0 12px;">Ready to deploy your ${sol.singular} AI system?</h2>
    <p style="font-size:16px;opacity:0.85;margin:0 auto 20px;max-width:550px;">Contact our engineering team to hear a test call and receive a custom workflow architecture diagram.</p>
    <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 28px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Live AI Demo &rsaquo;</a>
  </div>
</section>
`;
}

export default async function AISolutionDetailPage(
  { params }: { params: Promise<{ solution: string }> }
) {
  const { solution } = await params;
  const sol = DATA[solution];
  if (!sol) notFound();

  const pageContent = chrome.nav + buildSolutionBody(sol) + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = `https://aenfinite.com/ai-solutions/${solution}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: sol.title,
        serviceType: `AI Voice & Chat Automation for ${sol.name}`,
        description: sol.metaDesc,
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
          { '@type': 'ListItem', position: 2, name: 'AI Solutions', item: 'https://aenfinite.com/ai-solutions/' },
          { '@type': 'ListItem', position: 3, name: sol.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: sol.faqs.map(([q, a]) => ({
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

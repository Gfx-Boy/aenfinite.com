// Language: French (fr)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import useCasesData from '@/lib/use-cases-data.json';

type UseCaseItem = {
  slug: string;
  name: string;
  title: string;
  metaDesc: string;
  heroSub: string;
  targetPersona: string;
  problemMath: string;
  workflows: string[];
  integrations: string[];
  pricing: string;
  timeline: string;
  relatedIndustries: string[];
  relatedAiSolutions: string[];
  faqs: { q: string; a: string }[];
};

const DATA = useCasesData as unknown as Record<string, UseCaseItem>;

export function generateStaticParams() {
  return Object.keys(DATA).map((slug) => ({ usecase: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ usecase: string }> }): Promise<Metadata> {
  const { usecase } = await params;
  const uc = DATA[usecase];
  if (!uc) return {};
  const url = `https://aenfinite.com/fr/use-cases/${uc.slug}/`;
  const enUrl = `https://aenfinite.com/use-cases/${uc.slug}/`;
  const languages: Record<string, string> = {
    'x-default': enUrl,
    'en': enUrl,
    'es': `https://aenfinite.com/es/use-cases/${uc.slug}/`,
    'fr': `https://aenfinite.com/fr/use-cases/${uc.slug}/`,
    'de': `https://aenfinite.com/de/use-cases/${uc.slug}/`,
    'it': `https://aenfinite.com/it/use-cases/${uc.slug}/`,
    'ar': `https://aenfinite.com/ar/use-cases/${uc.slug}/`,
    'pt': `https://aenfinite.com/pt/use-cases/${uc.slug}/`,
    'zh': `https://aenfinite.com/zh/use-cases/${uc.slug}/`,
    'hi': `https://aenfinite.com/hi/use-cases/${uc.slug}/`,
    'nl': `https://aenfinite.com/nl/use-cases/${uc.slug}/`,
    'ja': `https://aenfinite.com/ja/use-cases/${uc.slug}/`,
    'ko': `https://aenfinite.com/ko/use-cases/${uc.slug}/`,
  };
  return {
    title: uc.title,
    description: uc.metaDesc,
    alternates: { canonical: url, languages },
    openGraph: {
      title: uc.title,
      description: uc.metaDesc,
      url,
      siteName: 'Aenfinite',
      type: 'website',
      images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: uc.title,
      description: uc.metaDesc,
      images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
    },
    robots: { index: true, follow: true },
  };
}

function buildPage(uc: UseCaseItem): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  const workflowItems = uc.workflows.map((w, i) => {
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

  const integrationTags = uc.integrations.map(i =>
    `<span style="padding:8px 16px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;font-size:14px;font-weight:600;">${i}</span>`
  ).join('\n');

  const faqItems = uc.faqs.map(f => `
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">${f.q}</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">${f.a}</div>
      </div>
    </details>
  `).join('\n');

  const industryLinks = uc.relatedIndustries.map(slug =>
    `<a href="/fr/industries/${slug}/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">Conception Web for ${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</a>`
  ).join('\n');

  const aiLinks = uc.relatedAiSolutions.map(slug =>
    `<a href="/fr/ai-solutions/${slug}/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">AI Solutions for ${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</a>`
  ).join('\n');

  return `
<div style="background:#050505; color:#f4f4f5;">
<!-- Hero -->
<div class="header aen-dark-mode" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <p style="font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;opacity:0.6;margin:0 0 12px;">
      <a href="/fr/use-cases/" style="text-decoration:none;color:inherit;">Use Cases</a> &rsaquo; ${uc.name}
    </p>
    <div class="title title__default"><h1 style="font-size:clamp(28px,5vw,52px);line-height:1.15;margin:0 0 20px;">${uc.name}</h1></div>
    <p style="font-size:clamp(17px,2.2vw,21px);line-height:1.65;opacity:0.88;max-width:860px;">${uc.heroSub}</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:28px;">
      <a href="/fr/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
      <a href="/fr/contact/" class="button" style="display:inline-block;background:transparent;color:inherit;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;border:1px solid rgba(128,128,128,0.3);">Talk to Our Team &rsaquo;</a>
    </div>
  </div>
</div>

<!-- Problem Math -->
<section ${S}>
  <h2 ${H2}>The Revenue You&rsquo;re Losing</h2>
  <div style="background:rgba(34,123,243,0.06);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:32px 28px;">
    <p style="font-size:20px;line-height:1.65;font-weight:500;margin:0;">${uc.problemMath}</p>
  </div>
  <p ${P} style="margin-top:20px;">Best for: <strong>${uc.targetPersona}</strong></p>
</section>

<!-- AI Workflow -->
<section ${S}>
  <h2 ${H2}>How the AI System Works</h2>
  <p ${P}>This isn't a chatbot widget you configure yourself. It's a fully built, tested, and deployed system with the following workflows:</p>
  <div style="display:grid;gap:14px;margin-top:20px;">
    ${workflowItems}
  </div>
</section>

<!-- Integrations -->
<section ${S}>
  <h2 ${H2}>Integrations &amp; Tech Stack</h2>
  <p ${P}>Every integration is configured and tested — no API wrestling on your end. We wire it all together.</p>
  <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:16px;">
    ${integrationTags}
  </div>
  <p style="margin-top:20px;font-size:15px;opacity:0.7;">Don't see your tool? We integrate with anything that has an API. <a href="/fr/tools/" style="color:#227bf3;">See our full tech stack &rsaquo;</a></p>
</section>

<!-- Pricing -->
<section ${S}>
  <h2 ${H2}>Investment &amp; Timeline</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <h3 style="font-size:18px;font-weight:700;margin:0 0 12px;">💰 Pricing</h3>
      <p style="font-size:17px;line-height:1.6;margin:0;">${uc.pricing}</p>
    </div>
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <h3 style="font-size:18px;font-weight:700;margin:0 0 12px;">⏱️ Timeline</h3>
      <p style="font-size:17px;line-height:1.6;margin:0;">${uc.timeline}</p>
    </div>
    <div style="padding:28px 24px;border:1px solid rgba(128,128,128,0.2);border-radius:16px;">
      <h3 style="font-size:18px;font-weight:700;margin:0 0 12px;">🔑 Ownership</h3>
      <p style="font-size:17px;line-height:1.6;margin:0;">Built in your own accounts. Cancel management anytime and keep the entire system.</p>
    </div>
  </div>
</section>

<!-- Related pages -->
${(uc.relatedIndustries.length || uc.relatedAiSolutions.length) ? `
<section ${S}>
  <h2 ${H2}>Related Solutions</h2>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    ${industryLinks}
    ${aiLinks}
    <a href="/fr/use-cases/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">Voir Tout Use Cases</a>
  </div>
</section>
` : ''}

<!-- FAQ -->
<section class="aen-faq-block" ${S}>
  <h2 ${H2}>Questions Fréquemment Posées</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    ${faqItems}
  </div>
</section>

<!-- CTA -->
<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Ready to Build This System?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Book a free 30-minute AI Opportunity Audit. We&rsquo;ll show you exactly how this system works for your business, with real numbers and a clear implementation plan.</p>
    <a href="/fr/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
  </div>
</section>
</div>
`;
}

export default async function UseCasePage({ params }: { params: Promise<{ usecase: string }> }) {
  const { usecase } = await params;
  const uc = DATA[usecase];
  if (!uc) notFound();

  const pageContent = chrome.nav + buildPage(uc) + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = `https://aenfinite.com/use-cases/${uc.slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: uc.name,
        serviceType: 'AI Automatisation System',
        description: uc.metaDesc,
        provider: { '@id': 'https://aenfinite.com/#organization' },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'City', name: 'Denver' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '52',
          bestRating: '5',
          worstRating: '1',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '2500',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
        },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://aenfinite.com/use-cases/' },
          { '@type': 'ListItem', position: 3, name: uc.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: uc.faqs.map(f => ({
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

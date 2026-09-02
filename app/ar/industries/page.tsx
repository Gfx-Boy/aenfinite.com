// Language: Arabic (ar)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import industriesData from '@/lib/industries-data.json';

export const metadata: Metadata = {
  title: 'Industry-Specific تصميم المواقع & التطوير الخدمات | Aenfinite',
  description: 'Custom websites tailored to your industry. We build high-converting web solutions for dental, legal, real estate, restaurants, healthcare, construction, home services, and e-commerce.',
  keywords: 'industry web design, web design for dentists, web design for law firms, real estate web design, restaurant websites, healthcare web design, contractor websites, تطوير التجارة الإلكترونية',
  alternates: { canonical: "https://aenfinite.com/ar/industries/", languages: {"x-default":"https://aenfinite.com/industries/","en":"https://aenfinite.com/industries/","es":"https://aenfinite.com/es/industries/","fr":"https://aenfinite.com/fr/industries/","de":"https://aenfinite.com/de/industries/","it":"https://aenfinite.com/it/industries/","ar":"https://aenfinite.com/ar/industries/","pt":"https://aenfinite.com/pt/industries/","zh":"https://aenfinite.com/zh/industries/","hi":"https://aenfinite.com/hi/industries/","nl":"https://aenfinite.com/nl/industries/","ja":"https://aenfinite.com/ja/industries/","ko":"https://aenfinite.com/ko/industries/"} },
  openGraph: {
    title: 'Industry-Specific تصميم المواقع & التطوير الخدمات | Aenfinite',
    description: 'Custom websites engineered for specific business verticals. Online booking, CRM integration, client portals, and industry-specific workflows.',
    url: 'https://aenfinite.com/industries/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry-Specific تصميم المواقع & التطوير | Aenfinite',
    description: 'Custom web solutions built specifically for your vertical with published pricing and direct senior team delivery.',
    images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
  },
  robots: { index: true, follow: true },
};

type IndustryItem = {
  name: string;
  slug: string;
  icon: string;
  title: string;
  metaDesc: string;
  heroSub: string;
  problemStat: string;
};

const INDUSTRIES = Object.values(industriesData as unknown as Record<string, IndustryItem>);

function buildHubContent(): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  return `
<div class="header" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.15;margin:0 0 20px;">تصميم المواقع &amp; التطوير by Industry</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:860px;">Generic templates fail because every industry has unique customer journeys, compliance rules, and conversion mechanics. We build purpose-built web solutions for high-value business verticals.</p>
    <p style="margin-top:28px;">
      <a href="/ar/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:15px 32px;border-radius:8px;font-weight:600;font-size:16px;text-decoration:none;">Book a free strategy session</a>
    </p>
  </div>
</div>

<section ${S}>
  <div style="text-align:center;max-width:800px;margin:0 auto 40px;">
    <h2 ${H2}>Explore Our Industry-Specific Solutions</h2>
    <p ${P}>Select your industry to see our tailored features, workflow integrations, PMS/EHR/FSM connections, and published pricing.</p>
  </div>

  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;">
    ${INDUSTRIES.map(ind => `
      <div style="border:1px solid rgba(128,128,128,0.22);border-radius:14px;padding:28px;background:rgba(255,255,255,0.03);display:flex;flex-direction:column;justify-content:space-between;transition:transform 0.2s, border-color 0.2s;">
        <div>
          <div style="width:54px;height:54px;background:rgba(34,123,243,0.08);border:1px solid rgba(34,123,243,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">${ind.icon}</div>
          <h3 style="font-size:22px;font-weight:700;margin:0 0 12px;line-height:1.3;">
            <a href="/ar/industries/${ind.slug}/" style="color:inherit;text-decoration:none;">${ind.name}</a>
          </h3>
          <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0 0 16px;">${ind.heroSub}</p>
          <div style="font-size:13px;padding:10px 14px;background:rgba(34,123,243,0.08);border-left:3px solid #227bf3;border-radius:4px;margin-bottom:18px;line-height:1.5;">
            <strong>Industry Insight:</strong> ${ind.problemStat}
          </div>
        </div>
        <div>
          <a href="/ar/industries/${ind.slug}/" style="display:inline-flex;align-items:center;font-weight:600;font-size:15px;color:#227bf3;text-decoration:none;">
            View ${ind.name} Solution &rsaquo;
          </a>
        </div>
      </div>
    `).join('')}
  </div>
</section>

<section ${S}>
  <div style="background:linear-gradient(135deg,rgba(34,123,243,0.08) 0%,rgba(34,123,243,0.02) 100%);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:36px;margin:20px 0;">
    <h2 ${H2}>The Difference Between a Template and an Industry Website</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:24px;">
      <div>
        <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;color:#e53935;">❌ Generic الوكالة / DIY Template</h3>
        <ul style="padding-left:18px;line-height:1.8;font-size:15px;opacity:0.85;margin:0;">
          <li>Stock photos of people in generic suits</li>
          <li>No integration with your industry CRM or PMS</li>
          <li>Standard contact form that drops into spam</li>
          <li>No compliance safeguards (HIPAA, Bar Rules, ADA)</li>
          <li>Slow, bloated code that hurts SEO and speed</li>
        </ul>
      </div>
      <div>
        <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;color:#2e7d32;">✅ Aenfinite Purpose-Built Solution</h3>
        <ul style="padding-left:18px;line-height:1.8;font-size:15px;opacity:0.85;margin:0;">
          <li>Tailored conversion flows specific to your buyers</li>
          <li>Direct synchronization with Dentrix, Clio, Jobber, Toast, etc.</li>
          <li>24/7 AI chat & intake assistants that capture after-hours leads</li>
          <li>Full regulatory & accessibility compliance engineered in</li>
          <li>Clean Next.js architecture with instant load times & 100 SEO</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section ${S}>
  <h2 ${H2}>Combine تصميم المواقع with 24/7 AI الأتمتة</h2>
  <p ${P}>Every industry website we build can be paired with our done-for-you conversational AI assistants. Discover how AI transforms operations for your vertical:</p>
  <p style="margin:20px 0;">
    <a href="/ar/ai-solutions/" style="font-weight:700;font-size:17px;color:#227bf3;text-decoration:none;">Explore AI الأتمتة by Industry &rsaquo;</a>
  </p>
</section>

<section class="aen-faq-block" ${S}>
  <h2 ${H2}>الأسئلة الشائعة</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">What makes an industry-specific website different from a general website?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Industry-specific websites are engineered around the exact decision triggers, software ecosystems, and compliance requirements of your specific field. Rather than just showcasing static text, they integrate with your industry CRM (like Clio for law or Dentrix for dentists), automate bookings, and address the specific trust concerns of your customers.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">How much do custom industry websites cost?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Our custom industry builds typically range from <strong>$3,500 to $15,000</strong> for small-to-midsize practices and businesses, and <strong>$15,000 to $30,000+</strong> for multi-location groups and complex HIPAA/EHR integrations. All pricing is fixed and published upfront.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">Do you provide copywriting and asset creation for my industry?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Yes. Our team includes specialized copywriters who understand the terminology, legal/ethical boundaries, and buyer personas for legal, medical, dental, trades, and commerce verticals.</div>
      </div>
    </details>
  </div>
</section>

<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Ready to build a website that dominates your vertical?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Speak directly with our senior engineers and digital architects. We will audit your current presence and provide a clear, fixed-price plan.</p>
    <a href="/ar/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Schedule Your Consultation &rsaquo;</a>
  </div>
</section>
`;
}

export default function IndustriesHubPage() {
  const pageContent = chrome.nav + buildHubContent() + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = 'https://aenfinite.com/industries/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'Industry-Specific تصميم المواقع & التطوير',
        serviceType: 'تصميم المواقع & Custom تطوير البرمجيات',
        description: 'Purpose-built website design, development, and AI automation solutions for dentists, law firms, real estate, healthcare, construction, home services, and restaurants.',
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
          { '@type': 'ListItem', position: 2, name: 'Industries', item: url },
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

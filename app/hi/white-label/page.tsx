// Language: Hindi (hi)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import whiteLabelData from '@/lib/white-label-data.json';

export const metadata: Metadata = {
  title: 'White-Label वेब डिज़ाइन, डेवलपमेंट & AI for Agencies | Aenfinite',
  description: 'Scale your डिजिटल एजेंसी with our white-label design, custom development, and AI automation partner services. 100% unbranded, fixed wholesale pricing, and direct senior engineering.',
  keywords: 'white label web design, white label agency partner, white label web development, white label wordpress, white label ai agency, agency outsourcing partner',
  alternates: { canonical: "https://aenfinite.com/hi/white-label/", languages: {"x-default":"https://aenfinite.com/white-label/","en":"https://aenfinite.com/white-label/","es":"https://aenfinite.com/es/white-label/","fr":"https://aenfinite.com/fr/white-label/","de":"https://aenfinite.com/de/white-label/","it":"https://aenfinite.com/it/white-label/","ar":"https://aenfinite.com/ar/white-label/","pt":"https://aenfinite.com/pt/white-label/","zh":"https://aenfinite.com/zh/white-label/","hi":"https://aenfinite.com/hi/white-label/","nl":"https://aenfinite.com/nl/white-label/","ja":"https://aenfinite.com/ja/white-label/","ko":"https://aenfinite.com/ko/white-label/"} },
  openGraph: {
    title: 'White-Label वेब डिज़ाइन, डेवलपमेंट & AI for Agencies | Aenfinite',
    description: 'Add senior dev capacity and AI automation to your agency without hiring in-house. 100% white-label with wholesale margins.',
    url: 'https://aenfinite.com/white-label/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White-Label वेब डिज़ाइन & AI for Agencies | Aenfinite',
    description: 'Wholesale design, engineering & AI automation for growing marketing agencies.',
    images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
  },
  robots: { index: true, follow: true },
};

type WLItem = {
  name: string;
  slug: string;
  icon: string;
  title: string;
  metaDesc: string;
  heroSub: string;
  problemStat: string;
};

const SERVICES = Object.values(whiteLabelData as unknown as Record<string, WLItem>);

function buildWLHubContent(): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  return `
<div class="header" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.15;margin:0 0 20px;">White-Label वेब डिज़ाइन &amp; AI for Agencies</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:860px;">Your behind-the-scenes engineering department. Deliver pixel-perfect websites, custom WordPress builds, and cutting-edge AI voice &amp; chat agents to your clients under your brand.</p>
    <p style="margin-top:28px;">
      <a href="/hi/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:15px 32px;border-radius:8px;font-weight:600;font-size:16px;text-decoration:none;">Book a Partner Introduction Call</a>
    </p>
  </div>
</div>

<section ${S}>
  <div style="text-align:center;max-width:820px;margin:0 auto 40px;">
    <h2 ${H2}>White-Label Service Offerings for एजेंसी Partners</h2>
    <p ${P}>Expand your service catalog immediately with guaranteed wholesale rates, transparent SLAs, and strict NDA protection.</p>
  </div>

  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;">
    ${SERVICES.map(svc => `
      <div style="border:1px solid rgba(128,128,128,0.22);border-radius:14px;padding:28px;background:rgba(255,255,255,0.03);display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <div style="width:54px;height:54px;background:rgba(34,123,243,0.08);border:1px solid rgba(34,123,243,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">${svc.icon}</div>
          <h3 style="font-size:22px;font-weight:700;margin:0 0 12px;line-height:1.3;">
            <a href="/hi/white-label/${svc.slug}/" style="color:inherit;text-decoration:none;">${svc.name}</a>
          </h3>
          <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0 0 16px;">${svc.heroSub}</p>
          <div style="font-size:13px;padding:10px 14px;background:rgba(34,123,243,0.08);border-left:3px solid #227bf3;border-radius:4px;margin-bottom:18px;line-height:1.5;">
            <strong>एजेंसी Advantage:</strong> ${svc.problemStat}
          </div>
        </div>
        <div>
          <a href="/hi/white-label/${svc.slug}/" style="display:inline-flex;align-items:center;font-weight:600;font-size:15px;color:#227bf3;text-decoration:none;">
            Explore ${svc.name} &rsaquo;
          </a>
        </div>
      </div>
    `).join('')}
  </div>
</section>

<section ${S}>
  <div style="background:linear-gradient(135deg,rgba(34,123,243,0.08) 0%,rgba(34,123,243,0.02) 100%);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:36px;margin:20px 0;">
    <h2 ${H2}>How the एजेंसी Partnership Works</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:24px;">
      <div style="padding:16px;border-left:3px solid #227bf3;background:rgba(255,255,255,0.02);">
        <strong style="font-size:18px;color:#227bf3;">1. Scoping &amp; Fixed Quote</strong>
        <p style="font-size:14px;line-height:1.6;margin:8px 0 0;opacity:0.85;">भेजें us your Figma file, client brief, or wireframe. We provide a guaranteed wholesale quote within 24 hours.</p>
      </div>
      <div style="padding:16px;border-left:3px solid #227bf3;background:rgba(255,255,255,0.02);">
        <strong style="font-size:18px;color:#227bf3;">2. Seamless डेवलपमेंट</strong>
        <p style="font-size:14px;line-height:1.6;margin:8px 0 0;opacity:0.85;">Our senior team builds on private staging environments with regular milestone updates in your shared Slack channel.</p>
      </div>
      <div style="padding:16px;border-left:3px solid #227bf3;background:rgba(255,255,255,0.02);">
        <strong style="font-size:18px;color:#227bf3;">3. Unbranded Delivery</strong>
        <p style="font-size:14px;line-height:1.6;margin:8px 0 0;opacity:0.85;">We deliver clean code and documentation completely under your agency brand, ready for your client's signoff.</p>
      </div>
      <div style="padding:16px;border-left:3px solid #227bf3;background:rgba(255,255,255,0.02);">
        <strong style="font-size:18px;color:#227bf3;">4. Ongoing Retainers</strong>
        <p style="font-size:14px;line-height:1.6;margin:8px 0 0;opacity:0.85;">Earn recurring monthly revenue by reselling our maintenance, CRO, and AI monitoring retainers at your own retail price.</p>
      </div>
    </div>
  </div>
</section>

<section class="aen-faq-block" ${S}>
  <h2 ${H2}>अक्सर पूछे जाने वाले प्रश्न for एजेंसी Partners</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">Are your contracts covered by a mutual NDA?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Yes, 100%. Before reviewing any client assets or proprietary scopes, we sign a standard mutual NDA. We never showcase client work without explicit written consent.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">What margins can our agency expect?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Most of our agency partners achieve <strong>50% to 70% gross margins</strong>. For example, a custom build quoted by us at $3,000 wholesale is typically billed to the end client at $7,500–$10,000.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">Can you attend client meetings as our technical team?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Yes. Our senior technical leads can join discovery calls or sprint demos using your agency email address and branding, acting seamlessly as your internal development department.</div>
      </div>
    </details>
  </div>
</section>

<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Let's discuss your agency's upcoming projects</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Schedule a 20-minute partner introduction call with our leadership team. We'll discuss wholesale pricing, workflow integration, and current capacity.</p>
    <a href="/hi/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Schedule a Partner Discovery Call &rsaquo;</a>
  </div>
</section>
`;
}

export default function WhiteLabelHubPage() {
  const pageContent = chrome.nav + buildWLHubContent() + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = 'https://aenfinite.com/white-label/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'White-Label वेब डिज़ाइन, डेवलपमेंट & AI for Agencies',
        serviceType: 'White-Label एजेंसी सेवाएं',
        description: 'Wholesale white-label web development, Next.js applications, custom WordPress builds, and AI automation for digital marketing agencies.',
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
          { '@type': 'ListItem', position: 2, name: 'White-Label सेवाएं', item: url },
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

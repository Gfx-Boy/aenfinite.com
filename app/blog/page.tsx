import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';

export const metadata: Metadata = {
  title: 'Web Design, AI & Cost Guides Blog | Aenfinite',
  description: 'Practical cost guides, software architecture insights, AI automation breakdowns, and web development strategies from the senior engineering team at Aenfinite.',
  keywords: 'web design cost, AI chatbot cost, website cost small business, custom web development guide, AI receptionist pricing, Denver web design agency, Aenfinite blog',
  alternates: { canonical: 'https://aenfinite.com/blog/' },
  openGraph: {
    title: 'Web Design, AI & Cost Guides Blog | Aenfinite',
    description: 'Explore comprehensive cost breakdowns, AI automation guides, and web engineering best practices.',
    url: 'https://aenfinite.com/blog/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design, AI & Cost Guides Blog | Aenfinite',
    description: 'Practical guides and cost breakdowns for businesses investing in modern web and AI solutions.',
    images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
  },
  robots: { index: true, follow: true },
};

function buildBlogBody(): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,34px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  return `
<div class="header" style="min-height:40vh;display:flex;align-items:center;padding:130px 24px 45px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.15;margin:0 0 18px;">Engineering &amp; Strategy Insights</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:840px;">Transparent cost breakdowns, AI automation architectures, and conversion-focused design strategies from our Denver engineering team.</p>
  </div>
</div>

<section ${S}>
  <div style="margin-bottom:32px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:6px 14px;border-radius:20px;font-size:13px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">Featured Cost Guides</span>
    <h2 ${H2} style="margin-top:10px;">The Truth About Software &amp; Web Pricing</h2>
    <p ${P}>We publish un-gated, real-world pricing guides so business leaders can make informed investment decisions without sales gimmicks.</p>
  </div>

  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;">
    
    <article style="border:1px solid rgba(128,128,128,0.22);border-radius:14px;padding:28px;background:rgba(255,255,255,0.03);display:flex;flex-direction:column;justify-content:space-between;">
      <div>
        <div style="font-size:13px;color:#227bf3;font-weight:600;margin-bottom:8px;">AI &amp; AUTOMATION COST GUIDE</div>
        <h3 style="font-size:22px;font-weight:700;margin:0 0 12px;line-height:1.35;">
          <a href="https://blog.aenfinite.com/how-much-does-an-ai-chatbot-cost/" style="color:inherit;text-decoration:none;">How Much Does an AI Chatbot Cost in 2026?</a>
        </h3>
        <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0 0 16px;">A comprehensive breakdown of DIY SaaS vs. custom built AI agents, voice receptionists, vector database integrations, and monthly API hosting costs.</p>
      </div>
      <div>
        <a href="https://blog.aenfinite.com/how-much-does-an-ai-chatbot-cost/" style="font-weight:600;font-size:15px;color:#227bf3;text-decoration:none;">Read Pricing Breakdown &rsaquo;</a>
      </div>
    </article>

    <article style="border:1px solid rgba(128,128,128,0.22);border-radius:14px;padding:28px;background:rgba(255,255,255,0.03);display:flex;flex-direction:column;justify-content:space-between;">
      <div>
        <div style="font-size:13px;color:#227bf3;font-weight:600;margin-bottom:8px;">SMALL BUSINESS WEB PRICING</div>
        <h3 style="font-size:22px;font-weight:700;margin:0 0 12px;line-height:1.35;">
          <a href="https://blog.aenfinite.com/how-much-does-a-website-cost-for-a-small-business/" style="color:inherit;text-decoration:none;">How Much Does a Website Cost for a Small Business?</a>
        </h3>
        <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0 0 16px;">What you actually get at $3k, $10k, and $25k. We break down design, copywriting, custom development, SEO architecture, and ongoing hosting.</p>
      </div>
      <div>
        <a href="https://blog.aenfinite.com/how-much-does-a-website-cost-for-a-small-business/" style="font-weight:600;font-size:15px;color:#227bf3;text-decoration:none;">Read Cost Analysis &rsaquo;</a>
      </div>
    </article>

    <article style="border:1px solid rgba(128,128,128,0.22);border-radius:14px;padding:28px;background:rgba(255,255,255,0.03);display:flex;flex-direction:column;justify-content:space-between;">
      <div>
        <div style="font-size:13px;color:#227bf3;font-weight:600;margin-bottom:8px;">AGENCY COMPARISON &amp; REVIEW</div>
        <h3 style="font-size:22px;font-weight:700;margin:0 0 12px;line-height:1.35;">
          <a href="https://blog.aenfinite.com/best-web-design-agencies-denver/" style="color:inherit;text-decoration:none;">Best Web Design Agencies in Denver (2026 Guide)</a>
        </h3>
        <p style="font-size:15px;line-height:1.65;opacity:0.85;margin:0 0 16px;">An objective evaluation of top Denver web design shops, agency specialties, portfolio highlights, and typical project investment ranges.</p>
      </div>
      <div>
        <a href="https://blog.aenfinite.com/best-web-design-agencies-denver/" style="font-weight:600;font-size:15px;color:#227bf3;text-decoration:none;">Read Agency Guide &rsaquo;</a>
      </div>
    </article>

  </div>
</section>

<section ${S}>
  <div style="background:linear-gradient(135deg,rgba(34,123,243,0.08) 0%,rgba(34,123,243,0.02) 100%);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:36px;">
    <h2 ${H2}>Explore Our Core Solutions</h2>
    <div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:18px;">
      <a href="/industries/" style="padding:12px 22px;background:#227bf3;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">Web Design by Industry &rsaquo;</a>
      <a href="/ai-solutions/" style="padding:12px 22px;background:rgba(255,255,255,0.06);border:1px solid rgba(128,128,128,0.25);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;">AI Solutions &amp; Voice Receptionists &rsaquo;</a>
      <a href="/white-label/" style="padding:12px 22px;background:rgba(255,255,255,0.06);border:1px solid rgba(128,128,128,0.25);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;">White-Label Agency Services &rsaquo;</a>
      <a href="/locations/" style="padding:12px 22px;background:rgba(255,255,255,0.06);border:1px solid rgba(128,128,128,0.25);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;">US Locations &rsaquo;</a>
    </div>
  </div>
</section>

<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Looking for a custom project quote?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Speak directly with our senior team in Denver. We'll provide a fixed quote and technical blueprint for your website or AI system.</p>
    <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free Consultation &rsaquo;</a>
  </div>
</section>
`;
}

export default function BlogHubPage() {
  const pageContent = chrome.nav + buildBlogBody() + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = 'https://aenfinite.com/blog/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        name: 'Aenfinite Web Engineering & AI Insights',
        description: 'Transparent cost guides, AI automation architecture, and web development strategies from the senior engineering team at Aenfinite.',
        publisher: { '@id': 'https://aenfinite.com/#organization' },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blog & Cost Guides', item: url },
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

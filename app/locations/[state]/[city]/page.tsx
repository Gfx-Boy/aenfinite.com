import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import citiesData from '@/lib/us-cities.json';

// On-demand static generation: nothing is prerendered at build time; each city
// page renders on its first request and is cached from then on. This is the
// only viable way to serve ~19,500 pages from this VPS — prerendering them all
// would mean multi-hour builds and ~5GB of HTML.
export const dynamic = 'force-static';
export const dynamicParams = true;

type CityRec = { name: string; pop: number; srank: number; nrank: number };
type StateRec = { state: string; code: string; cities: Record<string, CityRec> };
const DATA = citiesData as unknown as Record<string, StateRec>;

// Cities that already have dedicated metro pages keep their existing URLs.
const METRO_REDIRECTS: Record<string, string> = {
  'colorado/denver': '/locations/denver/',
  'florida/miami': '/locations/miami/',
  'massachusetts/boston': '/locations/boston/',
  'california/los-angeles': '/locations/los-angeles/',
  'california/san-diego': '/locations/san-diego/',
  'new-york/new-york': '/locations/new-york/',
};

/* Deterministic per-city seed so phrasing varies across pages but is stable
   across builds (no Math.random — pages must not churn between renders). */
function seedOf(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h);
}
const pick = <T,>(arr: T[], seed: number, salt: number): T => arr[(seed + salt) % arr.length];

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
const fmt = (n: number) => n.toLocaleString('en-US');

function sizeLabel(pop: number): string {
  if (pop >= 500000) return 'major metro';
  if (pop >= 100000) return 'large city';
  if (pop >= 30000) return 'mid-sized city';
  if (pop >= 8000) return 'growing community';
  return 'close-knit community';
}

function nearby(stateSlug: string, citySlug: string, count: number): Array<[string, CityRec]> {
  const st = DATA[stateSlug];
  const me = st.cities[citySlug];
  return Object.entries(st.cities)
    .filter(([slug]) => slug !== citySlug && !METRO_REDIRECTS[`${stateSlug}/${slug}`])
    .sort((a, b) => Math.abs(a[1].srank - me.srank) - Math.abs(b[1].srank - me.srank))
    .slice(0, count);
}

const TITLES = [
  (c: string, st: string) => `Web Design & Development in ${c}, ${st}`,
  (c: string, st: string) => `${c} Web Design, Development & AI Automation`,
  (c: string, st: string) => `Website Design Company Serving ${c}, ${st}`,
  (c: string, st: string) => `Web Development & AI Automation for ${c} Businesses`,
  (c: string, st: string) => `${c}, ${st} Web Design & Custom Development`,
  (c: string, st: string) => `Custom Websites & AI Automation in ${c}, ${st}`,
];

const DESCRIPTIONS = [
  (c: CityRec, st: string) => `Aenfinite builds custom websites, e-commerce and AI automation for businesses in ${c.name}, ${st} (pop. ${fmt(c.pop)}). Published pricing, senior team, delivered remotely from Denver.`,
  (c: CityRec, st: string) => `Web design from $3,000, e-commerce from $8,000 and AI automation from $1,500 for ${c.name} businesses. One senior Denver team serving all of ${st} remotely.`,
  (c: CityRec, st: string) => `Looking for a web design or automation partner in ${c.name}? Aenfinite serves ${st}'s ${ordinal(c.srank)}-largest city with custom builds and published pricing.`,
  (c: CityRec, st: string) => `Custom web development, WordPress, e-commerce and AI voice agents for companies in ${c.name}, ${st}. Fixed quotes, no discovery-call runaround.`,
];

const INTROS = [
  (c: CityRec, st: string) =>
    `${c.name} is ${st}'s ${ordinal(c.srank)}-largest city — a ${sizeLabel(c.pop)} of ${fmt(c.pop)} people where a business's website is usually its first impression. Aenfinite designs, builds and maintains that first impression: custom websites, e-commerce stores, and AI automation that answers your leads in minutes, delivered to ${c.name} businesses by one senior team.`,
  (c: CityRec, st: string) =>
    `Businesses in ${c.name}, ${st} compete for attention the moment someone searches — and with ${fmt(c.pop)} residents${c.nrank ? ` (the ${ordinal(c.nrank)}-largest city in the US)` : ''}, that competition is real. Aenfinite gives ${c.name} companies a website built to win it: custom design, real engineering, and automation that follows up with every lead automatically.`,
  (c: CityRec, st: string) =>
    `From ${sizeLabel(c.pop) === 'close-knit community' ? 'main-street storefronts' : 'downtown offices'} to home-service crews across ${c.name}, every ${st} business needs the same three things online: a website that looks credible, ranks on Google, and turns visitors into calls. That's exactly what Aenfinite builds — with published pricing, so ${c.name} businesses know their number before committing.`,
  (c: CityRec, st: string) =>
    `Aenfinite is a Denver-based digital agency serving ${c.name} and the rest of ${st} remotely — ${fmt(c.pop)} residents, ${st}'s ${ordinal(c.srank)}-largest city, and not a single project we can't deliver there. Custom websites, WordPress builds, online stores, and AI automation with fixed, published pricing.`,
];

const FAQS: Array<[(c: CityRec, st: string) => string, (c: CityRec, st: string) => string]> = [
  [(c) => `How much does a website cost in ${c.name}?`,
   (c) => `The same as anywhere we work: custom small-business sites run $3,000–$15,000, e-commerce $8,000–$40,000, quoted fixed after a free consultation. ${c.name} businesses pay published rates — no local markup.`],
  [(c, st) => `Do you have an office in ${c.name}, ${st}?`,
   (c) => `Our team is based at 1500 N Grant St in Denver, Colorado and serves ${c.name} remotely — video kickoffs, weekly progress reviews, and a shared project board. Over 150 projects have been delivered this way.`],
  [(c) => `How long does a website take for a ${c.name} business?`,
   () => `A custom site takes 4–10 weeks including design rounds and content; e-commerce 8–16 weeks. If an agency promises a custom site in one week, it's a template with your logo on it.`],
  [(c) => `Can you help my ${c.name} business rank on Google?`,
   (c, st) => `Yes — every build ships with SEO foundations (schema, Core Web Vitals, keyword-mapped pages), and we offer ongoing SEO for ${c.name} businesses competing across ${st} or nationally.`],
  [(c) => `Do you build AI automation for ${c.name} companies?`,
   (c) => `Yes. AI workflows, voice agents that answer your phones, and chatbots trained on your business — from $1,500. ${c.name} service businesses use these to answer every lead within minutes, around the clock.`],
  [(c, st) => `Why hire a Denver agency instead of one in ${c.name}?`,
   (c, st) => `You get big-market experience at published prices: the same senior team that serves Denver, ${st} and all 50 states — without paying an agency's downtown-office overhead in your project.`],
  [(c) => `What industries do you serve in ${c.name}?`,
   () => `Home services, real estate, legal, healthcare, restaurants, e-commerce and B2B services make up most of our work — plus startups that need custom software or automation.`],
  [(c) => `Do you redesign existing websites for ${c.name} businesses?`,
   () => `Yes — redesigns typically run 60–80% of a new build and include redirect mapping so your existing Google rankings survive the migration.`],
  [(c) => `Who owns the website when it's done?`,
   () => `You do — domain, code, and content, fully. We never hold sites hostage on proprietary platforms or "$99/month forever" schemes.`],
  [(c) => `What does ongoing maintenance cost?`,
   () => `$50–$300/month depending on the stack, covering updates, backups, security and small changes. It's optional — you always own the site either way.`],
  [(c, st) => `Do you serve other cities in ${st} too?`,
   (c, st) => `Yes — everything we deliver is digital, so we serve every city in ${st}, from the largest metros to the smallest towns, with the same team and pricing.`],
  [(c) => `How do I get a quote for my ${c.name} project?`,
   () => `Book a free consultation at aenfinite.com/contact/ or email hello@aenfinite.com. You'll get a fixed quote — a number, not a runaround.`],
];

const SERVICES: Array<[string, string, string]> = [
  ['Custom Web Design', '/services/web-design/', 'Conversion-focused design built around your customers — not a template.'],
  ['Web Development', '/services/custom-web-development/', 'Fast, secure custom builds on modern stacks.'],
  ['WordPress Websites', '/services/wordpress-websites/', 'Editable, SEO-ready WordPress builds you own outright.'],
  ['E-Commerce', '/services/e-commerce-websites/', 'Stores that are fast, trustworthy, and easy to run.'],
  ['AI Automation', '/services/ai-automation/', 'Workflows and agents that answer every lead in minutes.'],
  ['AI Voice Agents', '/services/ai-voice-agents/', 'A phone line that never misses a call — from $1,500.'],
  ['CRM Automation', '/services/crm-automation/', 'Follow-up, reminders and pipelines that run themselves.'],
  ['SEO', '/services/search-engine-optimization/', 'Technical foundations plus content that actually ranks.'],
];

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildBody(stateSlug: string, citySlug: string): string {
  const st = DATA[stateSlug];
  const c = st.cities[citySlug];
  const seed = seedOf(`${stateSlug}/${citySlug}`);
  const stateName = st.state;
  const intro = pick(INTROS, seed, 1)(c, stateName);

  const faqIdx: number[] = [];
  for (let i = 0; i < FAQS.length && faqIdx.length < 5; i++) {
    const idx = (seed + i * 7) % FAQS.length;
    if (!faqIdx.includes(idx)) faqIdx.push(idx);
  }

  const near = nearby(stateSlug, citySlug, 6);
  const svcOffset = seed % SERVICES.length;
  const services = SERVICES.map((_, i) => SERVICES[(i + svcOffset) % SERVICES.length]);

  const S = `style='max-width:1000px;margin:0 auto;padding:32px 24px;font-family:inherit;'`;
  const H2 = `style='font-size:clamp(24px,3.5vw,34px);font-weight:700;margin:36px 0 18px;line-height:1.25;'`;
  const P = `style='line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 16px;'`;

  return `
<div class="header" style="min-height:38vh;display:flex;align-items:center;padding:120px 24px 40px;">
  <div style="max-width:1000px;margin:0 auto;">
    <div class="title title__default"><h1 style="font-size:clamp(30px,5vw,52px);line-height:1.15;margin:0 0 18px;">Web Design &amp; Development in ${esc(c.name)}, ${esc(st.code)}</h1></div>
    <p style="font-size:clamp(17px,2.2vw,21px);line-height:1.6;opacity:0.85;max-width:820px;">Custom websites, e-commerce and AI automation for ${esc(c.name)} businesses — published pricing, one senior team, delivered remotely from Denver.</p>
    <p style="margin-top:22px;"><a href="/contact/" class="button" style="display:inline-block;background:#1656b5;color:#fff;padding:14px 28px;border-radius:8px;font-weight:600;">Get a fixed quote</a></p>
  </div>
</div>
<section ${S}>
  <p ${P}>${intro}</p>
  <p ${P}>Everything we deliver is digital — design reviews, staging links, launches and support all happen online, which is how one senior team serves ${esc(c.name)}, the rest of ${esc(stateName)}, and clients in all 50 states without franchise-style handoffs. You work directly with the people building your project, and every engagement starts from <a href='/locations/denver/'>our published Denver pricing</a>.</p>
</section>
<section ${S}>
  <h2 ${H2}>What we build for ${esc(c.name)} businesses</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px;">
    ${services.map(([name, url, blurb]) => `<div style="border:1px solid rgba(128,128,128,0.25);border-radius:12px;padding:18px;"><a href="${url}" style="font-weight:700;font-size:17px;">${name} &rsaquo;</a><p style="margin:8px 0 0;font-size:15px;line-height:1.6;opacity:0.85;">${blurb}</p></div>`).join('\n    ')}
  </div>
</section>
<section ${S}>
  <h2 ${H2}>Published pricing — the same in ${esc(c.name)} as everywhere</h2>
  <p ${P}>Custom small-business websites run <strong>$3,000–$15,000</strong>, e-commerce <strong>$8,000–$40,000</strong>, and AI automation starts at <strong>$1,500</strong> — always quoted fixed after a free consultation. See <a href="https://blog.aenfinite.com/how-much-does-a-website-cost-for-a-small-business/">what a website really costs in 2026</a> for the full breakdown.</p>
</section>
<section ${S}>
  <h2 ${H2}>Serving all of ${esc(stateName)}</h2>
  <p ${P}>${esc(c.name)} is one of ${fmt(Object.keys(st.cities).length)} ${esc(stateName)} communities we serve. Nearby: ${near.map(([slug, cc]) => `<a href="/locations/${stateSlug}/${slug}/">${esc(cc.name)}</a>`).join(' · ')} — or see the <a href="/locations/${stateSlug}/">${esc(stateName)} overview</a> and <a href="/locations/">every state we serve</a>.</p>
</section>
<section class='aen-faq-block' aria-labelledby='aen-faq-title' ${S}>
  <h2 id='aen-faq-title' ${H2}>Frequently Asked Questions</h2>
  <div itemscope itemtype='https://schema.org/FAQPage'>
    ${faqIdx.map(i => {
      const [q, a] = FAQS[i];
      return `<details class='aen-faq-item' itemscope itemprop='mainEntity' itemtype='https://schema.org/Question' style='border:1px solid rgba(128,128,128,0.25);border-radius:12px;margin-bottom:14px;padding:16px 20px;'>
      <summary itemprop='name' style='cursor:pointer;font-weight:600;font-size:clamp(16px,2.2vw,19px);line-height:1.45;'>${esc(q(c, stateName))}</summary>
      <div itemscope itemprop='acceptedAnswer' itemtype='https://schema.org/Answer' style='margin-top:12px;'>
        <div itemprop='text' style='line-height:1.7;font-size:16px;opacity:0.85;'>${esc(a(c, stateName))}</div>
      </div>
    </details>`;
    }).join('\n    ')}
  </div>
</section>
<section ${S} style="max-width:1000px;margin:0 auto;padding:8px 24px 48px;">
  <p style="font-size:15px;opacity:0.8;line-height:1.9;">Ready to start? <a href='/contact/'>Book a free consultation</a> or email hello@aenfinite.com — you'll get a straight quote for your ${esc(c.name)} project.</p>
</section>`;
}

export async function generateMetadata(
  { params }: { params: Promise<{ state: string; city: string }> }
): Promise<Metadata> {
  const { state, city } = await params;
  const st = DATA[state];
  const c = st?.cities?.[city];
  if (!st || !c) return {};
  const seed = seedOf(`${state}/${city}`);
  const url = `https://aenfinite.com/locations/${state}/${city}/`;
  const title = pick(TITLES, seed, 0)(c.name, st.code);
  const description = pick(DESCRIPTIONS, seed, 2)(c, st.state);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Aenfinite',
      type: 'website',
      images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CityPage(
  { params }: { params: Promise<{ state: string; city: string }> }
) {
  const { state, city } = await params;
  const metro = METRO_REDIRECTS[`${state}/${city}`];
  if (metro) redirect(metro);
  const st = DATA[state];
  const c = st?.cities?.[city];
  if (!st || !c) notFound();

  const pageContent = chrome.nav + buildBody(state, city) + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = `https://aenfinite.com/locations/${state}/${city}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: `Aenfinite — Web Design & Development in ${c.name}, ${st.code}`,
        url,
        image: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg',
        telephone: '+1-303-419-9782',
        priceRange: '$$',
        address: { '@type': 'PostalAddress', streetAddress: '1500 N Grant St, Ste R', addressLocality: 'Denver', addressRegion: 'CO', postalCode: '80203', addressCountry: 'US' },
        areaServed: [
          { '@type': 'City', name: c.name },
          { '@type': 'State', name: st.state },
        ],
        parentOrganization: { '@type': 'Organization', name: 'Aenfinite', url: 'https://aenfinite.com/' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://aenfinite.com/locations/' },
          { '@type': 'ListItem', position: 3, name: st.state, item: `https://aenfinite.com/locations/${state}/` },
          { '@type': 'ListItem', position: 4, name: c.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: (() => {
          const s = seedOf(`${state}/${city}`);
          const idxs: number[] = [];
          for (let i = 0; i < FAQS.length && idxs.length < 5; i++) {
            const idx = (s + i * 7) % FAQS.length;
            if (!idxs.includes(idx)) idxs.push(idx);
          }
          return idxs.map(i => ({
            '@type': 'Question',
            name: FAQS[i][0](c, st.state),
            acceptedAnswer: {
              '@type': 'Answer',
              text: FAQS[i][1](c, st.state),
            },
          }));
        })(),
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

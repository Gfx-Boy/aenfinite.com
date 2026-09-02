import type { Metadata } from 'next';
import { notFound, redirect, RedirectType } from 'next/navigation';
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
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

const pick = <T,>(arr: T[], seed: number, salt: number): T => arr[(seed + salt) % arr.length];

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
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

/* High-CTR, High-Ranking Title Formulas designed to win clicks on Google SERPs */
const TITLES = [
  (c: string, st: string) => `${c} Web Design, Development & AI Automation (From $3k)`,
  (c: string, st: string) => `Top-Rated Web Design Agency in ${c}, ${st} | 4.9★`,
  (c: string, st: string) => `Custom Websites, E-Commerce & AI Voice Agents | ${c}, ${st}`,
  (c: string, st: string) => `${c}, ${st} Web Design & Development (Published Pricing)`,
  (c: string, st: string) => `Best Web Design Company Serving ${c}, ${st} | Fixed Quote`,
  (c: string, st: string) => `Custom Web Development & AI Automation for ${c} Businesses`,
  (c: string, st: string) => `High-Speed Web Design & Smart AI Agents in ${c}, ${st}`,
  (c: string, st: string) => `Web Design & Custom Development in ${c}, ${st} | Aenfinite®`,
  (c: string, st: string) => `Full-Stack Web Development & AI Solutions in ${c}, ${st}`,
  (c: string, st: string) => `${c} Web Design & SEO Services | Senior US Engineers`,
  (c: string, st: string) => `Modern Web Design & 24/7 AI Receptionists | ${c}, ${st}`,
  (c: string, st: string) => `Affordable Custom Web Design for ${c}, ${st} Companies`,
];

/* High-Converting Meta Descriptions with ratings, pricing brackets & CTA triggers */
const DESCRIPTIONS = [
  (c: CityRec, st: string) => `⭐ 4.9★ Rated Agency. Custom web design from $3,000 & AI automation from $1,500 for ${c.name}, ${st} businesses (pop. ${fmt(c.pop)}). Fast 3-week delivery & fixed quotes.`,
  (c: CityRec, st: string) => `Looking for custom web development or AI voice agents in ${c.name}? Aenfinite delivers high-converting websites with published pricing & zero fluff. Free consultation!`,
  (c: CityRec, st: string) => `Web design from $3,000, e-commerce from $8,000 and AI automation from $1,500 for ${c.name} companies. Senior US team serving all of ${st} with 100% code ownership.`,
  (c: CityRec, st: string) => `Custom websites, WordPress development, online stores & AI voice receptionists for businesses in ${c.name}, ${st}. Fixed quotes and no discovery-call runaround.`,
  (c: CityRec, st: string) => `Top-rated custom web design & AI workflows for ${c.name}, ${st} companies. Transparent pricing, 5-star Google reviews, and dedicated senior engineering.`,
  (c: CityRec, st: string) => `Transform your ${c.name} business with high-speed web design and 24/7 AI lead capture. Published pricing starting at $1,500 with zero hidden fees. Get a quote!`,
  (c: CityRec, st: string) => `Professional web design & AI automation for ${c.name} businesses. Built for speed, mobile conversion, and Google rankings with complete transparent pricing.`,
  (c: CityRec, st: string) => `Senior engineering team delivering custom web development, e-commerce, and AI chatbots to ${c.name}, ${st}. Fixed pricing with full source code ownership.`,
];

const INTROS = [
  (c: CityRec, st: string) =>
    `${c.name} is ${st}'s ${ordinal(c.srank)}-largest city — a ${sizeLabel(c.pop)} of ${fmt(c.pop)} residents where a business's digital presence directly dictates its market share. Aenfinite designs, engineers, and scales that presence: high-speed custom websites, conversion-optimized e-commerce stores, and 24/7 AI voice agents that qualify and capture leads within seconds, delivered to ${c.name} companies by one senior US engineering team.`,
  (c: CityRec, st: string) =>
    `Businesses in ${c.name}, ${st} compete for client attention the moment a local search occurs — and with ${fmt(c.pop)} residents${c.nrank ? ` (the ${ordinal(c.nrank)}-largest city in the US)` : ''}, digital execution separates market leaders from also-rans. Aenfinite provides ${c.name} companies with custom web architecture built to dominate: clean code, sub-second load times, and autonomous AI workflows that follow up with every prospect automatically.`,
  (c: CityRec, st: string) =>
    `From ${sizeLabel(c.pop) === 'close-knit community' ? 'main-street storefronts and local contractors' : 'downtown corporate offices and high-growth startups'} across ${c.name}, every ${st} company needs the same three outcomes online: a website that commands trust, ranks at the top of Google, and reliably turns searchers into booked calls. That is exactly what Aenfinite engineers — with 100% published pricing, so ${c.name} business leaders know their exact investment before signing.`,
  (c: CityRec, st: string) =>
    `Aenfinite is a senior digital agency based in Denver, Colorado, serving ${c.name} and the entire state of ${st} remotely — ${fmt(c.pop)} residents, ${st}'s ${ordinal(c.srank)}-largest market, and complete capability to deliver enterprise-grade builds there. Custom web applications, editable WordPress builds, Shopify e-commerce, and autonomous AI voice receptionists with transparent, published pricing.`,
];

/* Comprehensive 16-Question Dynamic FAQ Pool with rich local and commercial context */
const FAQS: Array<[(c: CityRec, st: string) => string, (c: CityRec, st: string) => string]> = [
  [(c) => `How much does a custom website cost for a ${c.name} business?`,
   (c) => `We publish our exact investment tiers: custom small-business websites run $3,000–$15,000, e-commerce stores $8,000–$40,000, and custom web applications $15,000+. Every project for ${c.name} companies is quoted at a fixed, all-inclusive price with milestone billing — zero hidden fees, zero hourly creep.`],
  [(c, st) => `How do you serve ${c.name}, ${st} businesses remotely from Denver?`,
   (c, st) => `Everything we build is digital. We run structured remote workflows with ${c.name} clients via private Slack channels, weekly video updates, interactive Figma design prototypes, and live staging URLs. Over 150 successful projects across all 50 states have been delivered seamlessly through this process.`],
  [(c) => `How long does a website build take for a ${c.name} company?`,
   () => `Standard custom website builds take 3 to 6 weeks from initial architecture kickoff to production launch. Complex e-commerce platforms or custom software applications typically take 6 to 12 weeks. We set hard milestone dates in our contract and adhere to them strictly.`],
  [(c, st) => `Can you help our ${c.name} business rank at the top of Google?`,
   (c, st) => `Yes. Every single build includes full technical SEO foundations: Core Web Vitals optimization (90+ PageSpeed target), Schema.org structured data, XML sitemaps, localized metadata mapping, and conversion-focused copy for ${c.name} and ${st} search queries. We also provide ongoing local and national SEO campaigns.`],
  [(c) => `Do you build AI voice agents and receptionists for ${c.name} companies?`,
   (c) => `Yes. We build custom AI voice agents and 24/7 website receptionists starting at $1,500. These agents answer incoming customer phone calls within two rings, qualify leads, answer pricing questions, and book appointments directly into your calendar and CRM, ensuring your ${c.name} business never loses an after-hours lead.`],
  [(c, st) => `Why hire Aenfinite instead of a local ${c.name} freelancer or large agency?`,
   (c, st) => `Local freelancers often lack full-stack depth (design + backend + AI + SEO) and carry ghosting risks. Big traditional agencies charge $30k–$80k+ retainers to pay for downtown office rent and account executives. Aenfinite gives ${c.name} businesses direct access to senior US engineers and designers with published, transparent pricing and rapid 3–5 week delivery.`],
  [(c) => `Who owns the website, source code, and assets upon launch?`,
   () => `You own 100% of everything — the domain, design files, source code, database, and content. We never lock you into proprietary CMS platforms or monthly hostage fees. You receive the full GitHub repository and hosting credentials at launch.`],
  [(c) => `What industries in ${c.name} do you specialize in?`,
   () => `We build high-performing digital systems for Home Services (HVAC, Roofing, Plumbing), Healthcare & Dental, Legal & Law Firms, Commercial Real Estate, SaaS & Tech Startups, E-Commerce Brands, and Professional B2B Services.`],
  [(c) => `Do you redesign existing websites without losing our current Google rankings?`,
   () => `Yes. Website redesigns typically run 60–80% of a new build cost. We perform a complete pre-launch URL audit, keyword mapping, and 1-to-1 301 redirect architecture to protect and enhance your existing organic Google rankings during the migration.`],
  [(c) => `What does ongoing website maintenance and hosting support cost?`,
   () => `Ongoing care plans run $50 to $300/month depending on your traffic and complexity. This includes high-speed cloud hosting, daily automated backups, security patching, Core Web Vitals monitoring, and dedicated developer hours for updates. Maintenance is completely optional.`],
  [(c, st) => `Do you serve other cities and counties across ${st}?`,
   (c, st) => `Yes. We serve every city, town, and metropolitan area in ${st} with the same senior team, published rates, and dedicated engineering capacity.`],
  [(c) => `What technology stack do you use for custom development?`,
   () => `We build using modern, industry-leading technologies: Next.js, React, TypeScript, Node.js, TailwindCSS, PostgreSQL, Supabase, and Headless WordPress. This ensures your website loads under 1 second, scales effortlessly, and is immune to bloated plugin vulnerabilities.`],
  [(c) => `What is the expected ROI of implementing AI automation for a ${c.name} business?`,
   () => `Most service businesses recover 15 to 40 staff-hours per month by automating lead qualification, appointment scheduling, and CRM updates. At typical loaded labor rates, a $2,500 AI workflow pays for itself within 60 to 90 days and continues delivering recurring labor savings indefinitely.`],
  [(c) => `How do we get started and receive a fixed-price proposal?`,
   () => `Visit our contact page at aenfinite.com/contact/ or email hello@aenfinite.com. We schedule a 20-minute discovery call and deliver a detailed technical roadmap with a 100% fixed quote within 24 hours.`],
  [(c) => `Do you provide white-label web development for ${c.name} marketing agencies?`,
   (c) => `Yes. We offer dedicated white-label development and AI automation partnerships for marketing and creative agencies in ${c.name} under strict NDAs, allowing agencies to scale client capacity without hiring full-time developers.`],
  [(c) => `How do your websites perform on mobile devices and Google Core Web Vitals?`,
   () => `Every website is built mobile-first with clean semantic HTML, responsive CSS, optimized WebP/SVG media, and minimal client-side JavaScript. We consistently achieve 90–100 scores on Google PageSpeed Insights for both mobile and desktop.`],
];

const SERVICES: Array<[string, string, string]> = [
  ['Custom Web Design', '/services/web-design/', 'Bespoke, high-converting UX/UI designed around your audience — zero cookie-cutter templates.'],
  ['Web Development', '/services/custom-web-development/', 'Blazing-fast, secure custom builds engineered on modern Next.js and TypeScript stacks.'],
  ['WordPress Websites', '/services/wordpress-websites/', 'Fully editable, SEO-optimized WordPress builds that you own 100% outright.'],
  ['E-Commerce Stores', '/services/e-commerce-websites/', 'High-conversion Shopify & WooCommerce stores built for speed, trust, and frictionless checkout.'],
  ['AI Automation', '/services/ai-automation/', 'Custom n8n and Make workflows that connect your CRM, lead funnels, and operations seamlessly.'],
  ['AI Voice Receptionists', '/services/ai-voice-agents/', 'Autonomous phone agents that answer every call in 2 rings and book appointments 24/7.'],
  ['CRM & Pipeline Automation', '/services/crm-automation/', 'Automated lead nurture, SMS follow-ups, and pipeline tracking that operates hands-free.'],
  ['Search Engine Optimization', '/services/search-engine-optimization/', 'Technical SEO, rich Schema markup, and localized landing architectures that dominate SERPs.'],
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

  const near = nearby(stateSlug, citySlug, 8);
  const svcOffset = seed % SERVICES.length;
  const services = SERVICES.map((_, i) => SERVICES[(i + svcOffset) % SERVICES.length]);

  const S = `style="max-width:1050px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(26px,3.8vw,36px);font-weight:700;margin:0 0 20px;line-height:1.25;"`;
  const P = `style="line-height:1.85;font-size:17px;opacity:0.9;margin:0 0 18px;"`;

  return `
<!-- HERO SECTION -->
<div class="header" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;background:radial-gradient(circle at 50% 20%, rgba(34,123,243,0.12) 0%, rgba(0,0,0,0) 70%);">
  <div style="max-width:1050px;margin:0 auto;width:100%;">
    <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(34,123,243,0.12);color:#227bf3;border:1px solid rgba(34,123,243,0.3);padding:6px 16px;border-radius:24px;font-size:13px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:18px;">
      <span>⭐ 4.9/5 Rating</span> &bull; <span>${esc(c.name)}, ${esc(st.code)}</span>
    </div>
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.2vw,56px);line-height:1.15;margin:0 0 20px;font-weight:800;">Web Design &amp; Development in ${esc(c.name)}, ${esc(st.code)}</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:860px;margin:0 0 28px;">Custom websites, high-conversion e-commerce, and 24/7 AI automation for ${esc(c.name)} businesses — 100% published pricing, senior US engineering, delivered with zero fluff.</p>
    <div style="display:flex;flex-wrap:wrap;gap:14px;">
      <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:15px 32px;border-radius:8px;font-weight:700;font-size:16px;text-decoration:none;box-shadow:0 4px 18px rgba(34,123,243,0.35);">Get a Fixed-Price Quote &rsaquo;</a>
      <a href="/blog/how-much-does-a-website-cost-for-a-small-business/" style="display:inline-block;background:rgba(255,255,255,0.06);border:1px solid rgba(128,128,128,0.3);color:inherit;padding:15px 28px;border-radius:8px;font-weight:600;font-size:16px;text-decoration:none;">View Pricing Guide &rsaquo;</a>
    </div>
  </div>
</div>

<!-- AEO / DIRECT ANSWER EXECUTIVE SUMMARY CARD -->
<section ${S}>
  <div style="background:linear-gradient(135deg, rgba(34,123,243,0.08) 0%, rgba(255,255,255,0.02) 100%);border:1px solid rgba(34,123,243,0.25);border-radius:16px;padding:32px 28px;box-shadow:0 8px 30px rgba(0,0,0,0.15);">
    <div style="font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#227bf3;margin-bottom:10px;">Executive Project Summary &bull; ${esc(c.name)}, ${esc(st.code)}</div>
    <h2 style="font-size:24px;font-weight:700;margin:0 0 16px;line-height:1.3;">At a Glance: Custom Web Engineering &amp; AI Solutions</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:20px;">
      <div style="border-left:3px solid #227bf3;padding-left:14px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Delivery Timeline</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px;">3 to 6 Weeks</div>
        <div style="font-size:14px;opacity:0.8;margin-top:2px;">Hard milestone guarantees</div>
      </div>
      <div style="border-left:3px solid #227bf3;padding-left:14px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Investment Range</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px;">$3,000 – $15,000</div>
        <div style="font-size:14px;opacity:0.8;margin-top:2px;">100% Fixed quotes, no overages</div>
      </div>
      <div style="border-left:3px solid #227bf3;padding-left:14px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Core Tech Stack</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px;">Next.js &bull; AI &bull; WordPress</div>
        <div style="font-size:14px;opacity:0.8;margin-top:2px;">Sub-second load speeds</div>
      </div>
      <div style="border-left:3px solid #227bf3;padding-left:14px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Code Ownership</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px;">100% Client Owned</div>
        <div style="font-size:14px;opacity:0.8;margin-top:2px;">Full GitHub &amp; asset handover</div>
      </div>
    </div>
  </div>
</section>

<!-- LOCAL LANDSCAPE & INTRO -->
<section ${S}>
  <p ${P}>${intro}</p>
  <p ${P}>Every project we deliver operates entirely digital — design reviews in Figma, interactive staging environments, scheduled video updates, and direct engineering collaboration. This modern delivery model gives ${esc(c.name)} companies access to top-tier US talent without the overhead, bloated retainers, or franchise handoffs of traditional local agencies. You work directly with senior engineers, backed by <a href="/locations/denver/">our published Denver pricing</a>.</p>
</section>

<!-- COMPARISON MATRIX -->
<section ${S}>
  <div style="margin-bottom:28px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:5px 14px;border-radius:18px;font-size:13px;font-weight:700;text-transform:uppercase;">The Aenfinite Advantage</span>
    <h2 ${H2} style="margin-top:10px;">Why ${esc(c.name)} Businesses Choose Aenfinite</h2>
    <p ${P}>How we compare against cheap freelancer templates and legacy, slow-moving agencies.</p>
  </div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;text-align:left;border:1px solid rgba(128,128,128,0.2);border-radius:12px;overflow:hidden;background:rgba(255,255,255,0.02);">
      <thead>
        <tr style="background:rgba(34,123,243,0.12);border-bottom:1px solid rgba(128,128,128,0.25);">
          <th style="padding:16px 20px;font-size:15px;font-weight:700;">Feature &amp; Deliverable</th>
          <th style="padding:16px 20px;font-size:15px;font-weight:700;opacity:0.7;">Freelancers / Cheap Templates</th>
          <th style="padding:16px 20px;font-size:15px;font-weight:700;opacity:0.7;">Traditional Agencies</th>
          <th style="padding:16px 20px;font-size:15px;font-weight:700;color:#227bf3;">Aenfinite®</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(128,128,128,0.15);">
          <td style="padding:16px 20px;font-weight:600;">Pricing Model</td>
          <td style="padding:16px 20px;opacity:0.8;">Vague / Hourly overages</td>
          <td style="padding:16px 20px;opacity:0.8;">$30k–$80k+ Min retainers</td>
          <td style="padding:16px 20px;color:#227bf3;font-weight:700;">100% Fixed &amp; Published ($3k+)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(128,128,128,0.15);">
          <td style="padding:16px 20px;font-weight:600;">Delivery Timeline</td>
          <td style="padding:16px 20px;opacity:0.8;">Unpredictable / Frequent delays</td>
          <td style="padding:16px 20px;opacity:0.8;">3–6 Months of meetings</td>
          <td style="padding:16px 20px;color:#227bf3;font-weight:700;">3–6 Weeks rapid launch</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(128,128,128,0.15);">
          <td style="padding:16px 20px;font-weight:600;">AI Automation &amp; Voice Agents</td>
          <td style="padding:16px 20px;opacity:0.8;">None / Generic chatbots</td>
          <td style="padding:16px 20px;opacity:0.8;">$15k+ Expensive add-on</td>
          <td style="padding:16px 20px;color:#227bf3;font-weight:700;">Built-in 24/7 AI Voice &amp; Chat</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(128,128,128,0.15);">
          <td style="padding:16px 20px;font-weight:600;">Source Code Ownership</td>
          <td style="padding:16px 20px;opacity:0.8;">Often locked in SaaS tools</td>
          <td style="padding:16px 20px;opacity:0.8;">Proprietary CMS lock-in</td>
          <td style="padding:16px 20px;color:#227bf3;font-weight:700;">100% Full IP &amp; GitHub ownership</td>
        </tr>
        <tr>
          <td style="padding:16px 20px;font-weight:600;">Direct Communication</td>
          <td style="padding:16px 20px;opacity:0.8;">Ghosting risks</td>
          <td style="padding:16px 20px;opacity:0.8;">Account managers (no devs)</td>
          <td style="padding:16px 20px;color:#227bf3;font-weight:700;">Direct Senior Developer Access</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- 6-PILLAR CORE SERVICES -->
<section ${S}>
  <div style="margin-bottom:28px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:5px 14px;border-radius:18px;font-size:13px;font-weight:700;text-transform:uppercase;">Full-Stack Solutions</span>
    <h2 ${H2} style="margin-top:10px;">What We Build for ${esc(c.name)} Companies</h2>
    <p ${P}>Engineered for conversion, search dominance, and operational speed.</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:22px;">
    ${services.map(([name, url, blurb]) => `
    <div style="border:1px solid rgba(128,128,128,0.22);border-radius:14px;padding:24px;background:rgba(255,255,255,0.03);display:flex;flex-direction:column;justify-content:space-between;transition:transform 0.2s ease;">
      <div>
        <h3 style="font-size:20px;font-weight:700;margin:0 0 10px;line-height:1.3;"><a href="${url}" style="color:inherit;text-decoration:none;">${name} &rsaquo;</a></h3>
        <p style="margin:0;font-size:15px;line-height:1.65;opacity:0.85;">${blurb}</p>
      </div>
      <div style="margin-top:16px;">
        <a href="${url}" style="font-size:14px;font-weight:700;color:#227bf3;text-decoration:none;">Learn More &rsaquo;</a>
      </div>
    </div>`).join('\n    ')}
  </div>
</section>

<!-- 4-STEP DELIVERY PROCESS -->
<section ${S}>
  <div style="margin-bottom:28px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:5px 14px;border-radius:18px;font-size:13px;font-weight:700;text-transform:uppercase;">Proven Methodology</span>
    <h2 ${H2} style="margin-top:10px;">Our 4-Step Build Framework</h2>
    <p ${P}>How we take your ${esc(c.name)} business from discovery to a high-converting digital engine in under 6 weeks.</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:20px;">
    <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:24px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">01</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">Architecture Blueprint</h3>
      <p style="font-size:14px;line-height:1.6;opacity:0.85;margin:0;">We map your customer funnel, tech stack, SEO keywords, and conversion goals into a fixed roadmap.</p>
    </div>
    <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:24px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">02</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">Figma UI/UX Design</h3>
      <p style="font-size:14px;line-height:1.6;opacity:0.85;margin:0;">Custom, responsive design layouts built in Figma for your exact brand with unlimited prototype revisions.</p>
    </div>
    <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:24px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">03</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">Full-Stack Build</h3>
      <p style="font-size:14px;line-height:1.6;opacity:0.85;margin:0;">Clean Next.js / WordPress development, API integrations, and 24/7 AI lead capture agent deployment.</p>
    </div>
    <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:24px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">04</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">SEO &amp; Production Launch</h3>
      <p style="font-size:14px;line-height:1.6;opacity:0.85;margin:0;">Core Web Vitals validation, Schema.org indexation, 301 redirect protection, and complete handover.</p>
    </div>
  </div>
</section>

<!-- PUBLISHED PRICING -->
<section ${S}>
  <div style="background:linear-gradient(135deg, rgba(34,123,243,0.06) 0%, rgba(255,255,255,0.02) 100%);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:36px 30px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:5px 14px;border-radius:18px;font-size:13px;font-weight:700;text-transform:uppercase;">Transparent Investment</span>
    <h2 ${H2} style="margin-top:12px;">Published Rates &bull; No Local Markups in ${esc(c.name)}</h2>
    <p ${P}>We believe business leaders deserve straightforward pricing without sales discovery gimmicks. Every ${esc(c.name)} project receives a fixed-cost proposal based on our national rates:</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-top:24px;">
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:20px;">
        <div style="font-size:14px;opacity:0.8;font-weight:600;">Small Business Websites</div>
        <div style="font-size:24px;font-weight:800;color:#227bf3;margin:8px 0;">$3,000 – $15,000</div>
        <div style="font-size:14px;opacity:0.85;line-height:1.5;">Custom UI/UX, mobile-first speed, technical SEO &amp; CMS integration.</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:20px;">
        <div style="font-size:14px;opacity:0.8;font-weight:600;">E-Commerce Stores</div>
        <div style="font-size:24px;font-weight:800;color:#227bf3;margin:8px 0;">$8,000 – $40,000</div>
        <div style="font-size:14px;opacity:0.85;line-height:1.5;">High-converting Shopify/WooCommerce with custom cart funnels &amp; ERP sync.</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:20px;">
        <div style="font-size:14px;opacity:0.8;font-weight:600;">AI Automation &amp; Agents</div>
        <div style="font-size:24px;font-weight:800;color:#227bf3;margin:8px 0;">$1,500 – $10,000</div>
        <div style="font-size:14px;opacity:0.85;line-height:1.5;">24/7 AI voice phone agents, automated lead follow-up &amp; CRM pipelines.</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:20px;">
        <div style="font-size:14px;opacity:0.8;font-weight:600;">Ongoing Care &amp; Growth</div>
        <div style="font-size:24px;font-weight:800;color:#227bf3;margin:8px 0;">$50 – $300/mo</div>
        <div style="font-size:14px;opacity:0.85;line-height:1.5;">Cloud hosting, daily backups, security monitoring &amp; developer support.</div>
      </div>
    </div>
    <div style="margin-top:24px;">
      <a href="https://blog.aenfinite.com/how-much-does-a-website-cost-for-a-small-business/" style="color:#227bf3;font-weight:600;text-decoration:none;font-size:15px;">Read our detailed 2026 Website Cost Breakdown &rsaquo;</a>
    </div>
  </div>
</section>

<!-- LOCAL STATE NETWORK -->
<section ${S}>
  <h2 ${H2}>Serving All of ${esc(stateName)}</h2>
  <p ${P}>${esc(c.name)} is one of ${fmt(Object.keys(st.cities).length)} ${esc(stateName)} communities we support with dedicated engineering. Explore nearby cities:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:14px;">
    ${near.map(([slug, cc]) => `<a href="/locations/${stateSlug}/${slug}/" style="display:inline-block;padding:8px 16px;background:rgba(255,255,255,0.04);border:1px solid rgba(128,128,128,0.25);border-radius:20px;text-decoration:none;color:inherit;font-size:14px;font-weight:500;">${esc(cc.name)} &rsaquo;</a>`).join('\n    ')}
  </div>
  <div style="margin-top:20px;font-size:15px;">
    <a href="/locations/${stateSlug}/" style="color:#227bf3;font-weight:600;text-decoration:none;">View all ${esc(stateName)} locations &rsaquo;</a> &bull; <a href="/locations/" style="color:#227bf3;font-weight:600;text-decoration:none;">All 50 US States &rsaquo;</a>
  </div>
</section>

<!-- FAQ SECTION WITH MICRODATA -->
<section class='aen-faq-block' aria-labelledby='aen-faq-title' ${S}>
  <div style="margin-bottom:24px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:5px 14px;border-radius:18px;font-size:13px;font-weight:700;text-transform:uppercase;">Common Questions</span>
    <h2 id='aen-faq-title' ${H2} style="margin-top:10px;">Frequently Asked Questions</h2>
    <p ${P}>Everything you need to know about working with Aenfinite in ${esc(c.name)}, ${esc(st.code)}.</p>
  </div>
  <div itemscope itemtype='https://schema.org/FAQPage'>
    ${faqIdx.map(i => {
      const [q, a] = FAQS[i];
      return `<details class='aen-faq-item' itemscope itemprop='mainEntity' itemtype='https://schema.org/Question' style='border:1px solid rgba(128,128,128,0.25);border-radius:12px;margin-bottom:14px;padding:18px 22px;background:rgba(255,255,255,0.02);'>
      <summary itemprop='name' style='cursor:pointer;font-weight:600;font-size:clamp(16px,2.2vw,19px);line-height:1.45;'>${esc(q(c, stateName))}</summary>
      <div itemscope itemprop='acceptedAnswer' itemtype='https://schema.org/Answer' style='margin-top:12px;'>
        <div itemprop='text' style='line-height:1.75;font-size:16px;opacity:0.85;'>${esc(a(c, stateName))}</div>
      </div>
    </details>`;
    }).join('\n    ')}
  </div>
</section>

<!-- BOTTOM CONSULTATION CTA -->
<section ${S} style="padding-bottom:60px;">
  <div style="background:radial-gradient(circle at 50% 50%, rgba(34,123,243,0.12) 0%, rgba(255,255,255,0.02) 100%);border:1px solid rgba(34,123,243,0.3);border-radius:16px;padding:44px 28px;text-align:center;">
    <h2 style="font-size:clamp(24px,3.8vw,36px);font-weight:800;margin:0 0 14px;">Ready to grow your ${esc(c.name)} business?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:640px;margin:0 auto 24px;line-height:1.7;">Speak directly with our senior engineering team. We'll provide a fixed-price roadmap and clear timeline within 24 hours.</p>
    <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:15px 36px;border-radius:8px;font-weight:700;font-size:16px;text-decoration:none;box-shadow:0 4px 20px rgba(34,123,243,0.4);">Book Your Free Consultation &rsaquo;</a>
    <div style="margin-top:18px;font-size:14px;opacity:0.75;">No sales reps &bull; 100% Fixed quotes &bull; Direct engineer contact</div>
  </div>
</section>
`;
}

export async function generateMetadata(
  { params }: { params: Promise<{ state: string; city: string }> }
): Promise<Metadata> {
  const { state, city } = await params;
  const metro = METRO_REDIRECTS[`${state}/${city}`];
  if (metro) {
    return {
      title: 'Redirecting...',
      alternates: { canonical: `https://aenfinite.com${metro}` },
    };
  }
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
  if (metro) redirect(metro, RedirectType.replace);
  const st = DATA[state];
  const c = st?.cities?.[city];
  if (!st || !c) notFound();

  const pageContent = chrome.nav + buildBody(state, city) + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = `https://aenfinite.com/locations/${state}/${city}/`;

  const s = seedOf(`${state}/${city}`);
  const faqIdxs: number[] = [];
  for (let i = 0; i < FAQS.length && faqIdxs.length < 5; i++) {
    const idx = (s + i * 7) % FAQS.length;
    if (!faqIdxs.includes(idx)) faqIdxs.push(idx);
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${url}#service`,
        name: `Aenfinite — Web Design & Development in ${c.name}, ${st.code}`,
        url,
        image: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg',
        telephone: '+1-303-419-9782',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1500 N Grant St, Ste R',
          addressLocality: 'Denver',
          addressRegion: 'CO',
          postalCode: '80203',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '39.7392',
          longitude: '-104.9903',
        },
        areaServed: [
          { '@type': 'City', name: c.name },
          { '@type': 'State', name: st.state },
          { '@type': 'Country', name: 'United States' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '48',
          bestRating: '5',
          worstRating: '1',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '1500',
          highPrice: '15000',
          offerCount: '12',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web Design & AI Automation Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Small Business Web Design',
                description: 'Bespoke, high-performance website design and development with full code ownership.',
              },
              price: '3000',
              priceCurrency: 'USD',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Voice Receptionist & Automation',
                description: 'Autonomous 24/7 AI voice phone agents and workflow automation for lead qualification.',
              },
              price: '1500',
              priceCurrency: 'USD',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'E-Commerce Store Development',
                description: 'High-conversion Shopify and WooCommerce platforms with custom checkout flows.',
              },
              price: '8000',
              priceCurrency: 'USD',
            },
          ],
        },
        parentOrganization: {
          '@id': 'https://aenfinite.com/#organization',
        },
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
        mainEntity: faqIdxs.map(i => ({
          '@type': 'Question',
          name: FAQS[i][0](c, st.state),
          acceptedAnswer: {
            '@type': 'Answer',
            text: FAQS[i][1](c, st.state),
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

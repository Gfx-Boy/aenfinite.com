import type { Metadata } from 'next';
import { notFound, redirect, RedirectType } from 'next/navigation';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import citiesData from '@/lib/us-cities.json';

// On-demand static generation: rendered once on request and cached on the edge.
export const dynamic = 'force-static';
export const dynamicParams = true;

type CityRec = { name: string; pop: number; srank: number; nrank: number };
type StateRec = { state: string; code: string; cities: Record<string, CityRec> };
const DATA = citiesData as unknown as Record<string, StateRec>;

// Cities with dedicated metro hub pages
const METRO_REDIRECTS: Record<string, string> = {
  'colorado/denver': '/locations/denver/',
  'florida/miami': '/locations/miami/',
  'massachusetts/boston': '/locations/boston/',
  'california/los-angeles': '/locations/los-angeles/',
  'california/san-diego': '/locations/san-diego/',
  'new-york/new-york': '/locations/new-york/',
};

/* Deterministic per-city seed: stable hashing without random churn */
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

type MarketTier = {
  tier: number;
  label: string;
  type: string;
  searchVolumeBracket: string;
  annualRevBracket: string;
  primaryFocus: string;
  trades: string[];
};

function getMarketTier(pop: number): MarketTier {
  if (pop >= 250000) {
    return {
      tier: 1,
      label: 'major metropolitan market',
      type: 'Major Metropolitan Hub',
      searchVolumeBracket: '1,500 to 4,000+',
      annualRevBracket: '$85,000 to $280,000+',
      primaryFocus: 'Enterprise Next.js web applications, high-concurrency 24/7 AI voice agents, and competitive organic search acquisition',
      trades: ['B2B Software & SaaS', 'Healthcare & Specialty Clinics', 'Commercial Real Estate', 'High-Growth Startups', 'E-Commerce Brands'],
    };
  }
  if (pop >= 50000) {
    return {
      tier: 2,
      label: 'regional commercial hub',
      type: 'Commercial Growth Center',
      searchVolumeBracket: '450 to 1,500',
      annualRevBracket: '$55,000 to $175,000+',
      primaryFocus: 'Custom conversion-focused web architecture, local SEO market dominance, and autonomous appointment booking workflows',
      trades: ['Medical & Dental Practices', 'Commercial Contractors & Trades', 'Law & Legal Services', 'Accounting & Financial Advisors', 'Automotive Groups'],
    };
  }
  if (pop >= 15000) {
    return {
      tier: 3,
      label: 'suburban growth market',
      type: 'Suburban Growth Market',
      searchVolumeBracket: '180 to 450',
      annualRevBracket: '$40,000 to $120,000+',
      primaryFocus: 'High-converting mobile-first contractor funnels, Google Local Pack top-3 ranking, and instant after-hours lead response',
      trades: ['Roofing, HVAC & Plumbing', 'Local Dental & Orthodontics', 'Personal Injury & Family Law', 'Home Remodeling & Design', 'Boutique Retail & Hospitality'],
    };
  }
  return {
    tier: 4,
    label: 'close-knit business community',
    type: 'Local Business Community',
    searchVolumeBracket: '60 to 180',
    annualRevBracket: '$25,000 to $80,000+',
    primaryFocus: 'Fixed-price corporate-grade websites ($3k+), eliminating big-city agency retainers, and commanding local search trust',
    trades: ['Residential Contractors', 'Independent Healthcare Providers', 'Local Service Franchises', 'Family-Owned Retail', 'Professional Consultancies'],
  };
}

function nearby(stateSlug: string, citySlug: string, count: number): Array<[string, CityRec]> {
  const st = DATA[stateSlug];
  const me = st.cities[citySlug];
  return Object.entries(st.cities)
    .filter(([slug]) => slug !== citySlug && !METRO_REDIRECTS[`${stateSlug}/${slug}`])
    .sort((a, b) => Math.abs(a[1].srank - me.srank) - Math.abs(b[1].srank - me.srank))
    .slice(0, count);
}

/* High-CTR, Clean Exact-Match SERP Titles (No secondary pipes, under 46 chars so '%s | Aenfinite®' fits within 60 chars) */
const TITLES = [
  (c: string, st: string) => `Web Design & Development in ${c}, ${st}`,
  (c: string, st: string) => `${c}, ${st} Web Design & Development Agency`,
  (c: string, st: string) => `Custom Web Design & AI Automation in ${c}, ${st}`,
  (c: string, st: string) => `Top-Rated Web Design Company in ${c}, ${st}`,
  (c: string, st: string) => `${c}, ${st} Web Design & SEO Services`,
  (c: string, st: string) => `Custom Websites & AI Voice Agents in ${c}, ${st}`,
  (c: string, st: string) => `Best Web Design & Development in ${c}, ${st}`,
  (c: string, st: string) => `${c}, ${st} Custom Web Development & AI`,
  (c: string, st: string) => `Full-Stack Web Design & Development in ${c}, ${st}`,
  (c: string, st: string) => `Modern Web Design & Fast Development in ${c}, ${st}`,
  (c: string, st: string) => `${c}, ${st} Professional Web Design & Apps`,
  (c: string, st: string) => `High-Converting Web Design in ${c}, ${st}`,
];

/* Compelling Meta Descriptions with published pricing, ratings & local relevance */
const DESCRIPTIONS = [
  (c: CityRec, st: string, tier: MarketTier) =>
    `Custom web design from $3,000 & 24/7 AI automation from $1,500 for ${c.name}, ${st} businesses. Senior US engineers, sub-second load speeds & 100% fixed quotes.`,
  (c: CityRec, st: string, tier: MarketTier) =>
    `Top-rated web development and AI voice agents for companies in ${c.name}, ${st} (pop. ${fmt(c.pop)}). Rapid 3-week delivery, 100% code ownership, published pricing.`,
  (c: CityRec, st: string, tier: MarketTier) =>
    `Grow your ${c.name} business with high-speed custom web design, e-commerce, and automated AI lead capture. Transparent Denver rates starting at $3,000. Free consult!`,
  (c: CityRec, st: string, tier: MarketTier) =>
    `Looking for an elite web design agency serving ${c.name}, ${st}? Aenfinite delivers custom Next.js websites, mobile Core Web Vitals, and 24/7 AI receptionists.`,
  (c: CityRec, st: string, tier: MarketTier) =>
    `Engineering custom websites and autonomous AI voice systems for ${c.name} businesses. 4.9★ rated senior team with milestone billing and zero retainer lock-ins.`,
  (c: CityRec, st: string, tier: MarketTier) =>
    `Fixed-price web development ($3k–$15k) and smart AI workflows ($1,500+) for ${c.name}, ${st} companies. Full source code handover with direct engineer communication.`,
];

/* 16 Deeply Varied, Rich Local Intro Essays */
const INTROS = [
  (c: CityRec, st: string, tier: MarketTier) =>
    `${c.name} is ${st}'s ${ordinal(c.srank)}-largest market — a ${tier.label} of ${fmt(c.pop)} residents where a company's web architecture directly governs its client acquisition. Aenfinite delivers full-stack digital capability to ${c.name} businesses: custom-coded Next.js websites loading in under one second, conversion-engineered e-commerce, and 24/7 AI voice receptionists that qualify incoming leads instantly. Handled directly by senior US engineers with 100% published pricing.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `In a growing market like ${c.name}, ${st}${c.nrank ? ` (ranked ${ordinal(c.nrank)} nationally)` : ''}, the digital divide between market leaders and stagnant competitors comes down to speed and trust. Aenfinite builds custom digital systems for ${c.name} organizations: clean TypeScript code, sub-second Core Web Vitals, and autonomous AI voice agents that book discovery calls while you sleep. Everything is quoted at a fixed price with zero agency discovery fluff.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `From established service firms to ambitious local enterprises throughout ${c.name}, winning local market share requires three non-negotiables: commanding organic search presence on Google, a website that converts visitors within three seconds, and instantaneous lead response. Aenfinite engineers that exact engine for ${st} companies, backed by transparent Denver pricing and dedicated senior developer collaboration.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `Operating as a senior digital innovation agency, Aenfinite provides ${c.name} businesses with the engineering rigor typically reserved for venture-backed brands. With a population of ${fmt(c.pop)}, ${c.name} represents a vital commercial center in ${st}. We engineer custom web platforms, editable WordPress builds, Shopify storefronts, and automated AI phone agents with complete source code handover and fixed milestone pricing.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `Customer acquisition in ${c.name}, ${st} has permanently migrated to mobile and AI-driven search. When prospective clients in ${c.name} look for services, slow-loading templates and unresponsive forms cost businesses thousands in lost billings. Aenfinite delivers high-velocity digital infrastructure: custom designs tailored in Figma, sub-second mobile page loads, and AI workflows that answer inquiries within two rings.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `For companies across ${c.name}, hiring a reliable technology partner shouldn't involve bloated retainers, junior account managers, or hidden change fees. Aenfinite brings over a decade of full-stack engineering to ${c.name}, ${st}, delivering bespoke web development from $3,000 and autonomous AI automation from $1,500. You work directly with veteran software developers who respect your timeline and budget.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `As ${st}'s ${ordinal(c.srank)}-ranked city with ${fmt(c.pop)} residents, ${c.name} businesses operate in an increasingly competitive regional economy. Standing out requires more than an off-the-shelf WordPress template. Aenfinite builds bespoke digital assets: clean code, bulletproof SEO foundations, and autonomous AI customer service agents designed to convert local searchers into booked revenue.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `Whether you run a commercial contracting business, medical practice, legal firm, or high-growth venture in ${c.name}, your website is your highest-leverage sales asset. Aenfinite transforms ${c.name}, ${st} websites into automated client acquisition channels — engineered on modern stacks, optimized for Google PageSpeed 90+, and supported by 24/7 AI phone receptionists that never miss an opportunity.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `Local enterprises in ${c.name} need technology partners who deliver measurable commercial ROI. Aenfinite eliminates the traditional agency overhead by providing ${c.name}, ${st} companies direct access to senior developers in Denver. We deliver custom websites, robust e-commerce architectures, and autonomous AI integrations on predictable 3-to-6-week timelines with 100% intellectual property ownership.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `Ranked as a ${tier.label} of ${fmt(c.pop)} people, ${c.name} holds immense commercial opportunity for businesses equipped with superior digital tools. Aenfinite engineers high-performance web systems tailored to ${st} commerce: lightning-fast Next.js apps, customized CRM automations, and intelligent AI voice bots that handle after-hours client qualification seamlessly.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `Aenfinite helps ${c.name} companies outpace dated regional competitors through modern digital architecture. Serving all of ${st} remotely from our Denver headquarters, we equip ${c.name} leadership teams with bespoke UI/UX designs, Schema-rich SEO architecture, and AI-driven client intake funnels backed by published, transparent pricing.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `In ${c.name}, ${st}, first impressions happen on Google in less than 50 milliseconds. Aenfinite builds conversion-focused web properties that establish immediate trust, rank high on local search terms, and turn clicks into contracts. We deliver full-stack Next.js and WordPress builds tailored for ${c.name} business growth, with milestone billing and zero lock-in contracts.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `Businesses throughout ${c.name} frequently struggle with slow freelancers or overpriced big-city agencies. Aenfinite bridges the gap for ${st} organizations: senior engineering quality, rapid 3-to-5-week turnaround times, published fixed pricing, and cutting-edge 24/7 AI receptionists that give your business an immediate competitive edge.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `Dominating local search in ${c.name}, ${st} requires technical excellence: Core Web Vitals perfection, clean semantic HTML, localized Schema microdata, and frictionless mobile user journeys. Aenfinite builds these technical foundations into every custom website, helping ${c.name} service providers capture high-intent inquiries before competitors even notice.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `From ${tier.trades[0]} to ${tier.trades[1]}, commercial operators in ${c.name} demand dependable technology that generates tangible pipeline revenue. Aenfinite engineers bespoke websites and autonomous AI voice workflows that qualify leads 24/7/365, delivering enterprise-grade solutions at transparent, small-business-friendly rates across ${st}.`,

  (c: CityRec, st: string, tier: MarketTier) =>
    `With ${fmt(c.pop)} residents, ${c.name} is a vibrant ${tier.label} where local search intent is high and customer expectations are higher. Aenfinite builds digital experiences that command attention: elegant modern typography, frictionless contact funnels, and autonomous AI assistants that ensure no customer inquiry in ${c.name} ever goes unanswered.`,
];

/* Comprehensive 20-Question Dynamic FAQ Pool */
const FAQS: Array<[(c: CityRec, st: string) => string, (c: CityRec, st: string) => string]> = [
  [(c) => `How much does a custom website cost for a business in ${c.name}?`,
   (c) => `We publish our exact investment tiers with zero hidden fees: custom small-business websites run $3,000–$8,000, high-converting e-commerce platforms run $8,000–$25,000, and complex custom web applications run $15,000+. Every project for ${c.name} companies is quoted at a 100% fixed, all-inclusive price with milestone billing.`],

  [(c, st) => `How do you serve ${c.name}, ${st} clients remotely from Denver?`,
   (c, st) => `Everything we build is digital. We run seamless remote workflows with ${c.name} clients via private Slack channels, scheduled video milestone reviews, interactive Figma design prototypes, and live staging URLs. We have successfully launched over 150 projects across all 50 states without geographic friction.`],

  [(c) => `How long does a website build take for a ${c.name} company?`,
   () => `Standard custom website builds take 3 to 5 weeks from kickoff to production launch. Complex e-commerce platforms or custom software applications typically take 6 to 10 weeks. We establish concrete contractual milestone deadlines and adhere to them strictly.`],

  [(c, st) => `Can you help our ${c.name} business rank at the top of Google?`,
   (c, st) => `Yes. Every build includes full technical SEO foundations: Core Web Vitals optimization (90+ PageSpeed score target), Schema.org structured data, XML sitemaps, localized metadata mapping, and conversion-focused copywriting for ${c.name} and ${st} search queries. We also offer dedicated ongoing SEO growth campaigns.`],

  [(c) => `Do you build 24/7 AI voice agents and receptionists for ${c.name} companies?`,
   (c) => `Yes. We build custom AI voice phone agents and website receptionists starting at $1,500. These agents answer incoming customer phone calls within two rings, qualify leads, answer pricing questions, and book appointments directly into your calendar and CRM, ensuring your ${c.name} business never loses an after-hours lead.`],

  [(c, st) => `Why hire Aenfinite instead of a local ${c.name} freelancer or large agency?`,
   (c, st) => `Local freelancers often lack full-stack depth (design + backend + AI + SEO) and carry ghosting risks. Big traditional agencies charge $30k–$80k+ retainers to pay for downtown office overhead and account executives. Aenfinite gives ${c.name} businesses direct access to senior US engineers with published, transparent pricing and rapid delivery.`],

  [(c) => `Who owns the website, source code, and assets upon launch?`,
   () => `You own 100% of everything — domain, design files, source code, database, and content. We never lock you into proprietary CMS platforms or monthly hostage fees. You receive full GitHub repository access and hosting credentials upon final launch.`],

  [(c) => `What industries in ${c.name} do you have experience with?`,
   () => `We build high-performing digital systems for Home Services (Roofing, HVAC, Plumbing), Healthcare & Dental Clinics, Legal & Law Firms, Commercial Real Estate, SaaS & Tech Startups, E-Commerce Brands, and Professional B2B Service Providers.`],

  [(c) => `Do you redesign existing websites without losing our current Google rankings?`,
   () => `Yes. We perform a complete pre-launch URL crawl, keyword mapping, and comprehensive 1-to-1 301 redirect architecture to protect and elevate your existing organic Google rankings during the migration.`],

  [(c) => `What does ongoing website maintenance and hosting support cost?`,
   () => `Optional ongoing care plans run $50 to $300/month depending on traffic and complexity. This includes high-speed cloud hosting, daily automated backups, security patching, Core Web Vitals monitoring, and dedicated developer hours for updates. Care plans are completely optional with no lock-in.`],

  [(c, st) => `Do you serve other cities and counties across ${st}?`,
   (c, st) => `Yes. We serve every city, town, and county across ${st} with the same senior US engineering team, published rates, and dedicated delivery capacity.`],

  [(c) => `What technology stack do you use for custom development?`,
   () => `We build using modern, industry-leading technologies: Next.js, React, TypeScript, Node.js, TailwindCSS, PostgreSQL, Supabase, and Headless WordPress. This ensures your website loads in under 1 second, scales effortlessly, and avoids bloated plugin security vulnerabilities.`],

  [(c) => `What is the expected ROI of implementing AI automation for a ${c.name} business?`,
   () => `Most service businesses recover 15 to 40 staff-hours per month by automating lead qualification, appointment scheduling, and CRM updates. At typical loaded labor rates, a $2,500 AI workflow pays for itself within 60 to 90 days and delivers recurring labor savings indefinitely.`],

  [(c) => `How do we get started and receive a fixed-price proposal?`,
   () => `Visit our contact page at aenfinite.com/contact/ or email hello@aenfinite.com. We schedule a 20-minute discovery consultation and deliver a detailed technical roadmap with a 100% fixed quote within 24 hours.`],

  [(c) => `Do you provide white-label web development for ${c.name} marketing agencies?`,
   (c) => `Yes. We provide dedicated white-label development and AI automation partnerships for marketing and creative agencies in ${c.name} under strict NDAs, allowing agencies to scale client capacity without hiring full-time developers.`],

  [(c) => `How do your websites perform on mobile devices and Google Core Web Vitals?`,
   () => `Every website is built mobile-first with clean semantic HTML, responsive CSS, optimized WebP/SVG media, and minimal client-side JavaScript. We consistently achieve 90–100 scores on Google PageSpeed Insights for both mobile and desktop.`],

  [(c) => `Can you integrate our website with our CRM, like HubSpot or GoHighLevel?`,
   () => `Yes. We specialize in API and webhook integrations connecting your website forms, AI phone agents, and lead funnels directly into GoHighLevel, HubSpot, Salesforce, Clio, ServiceTitan, or custom PostgreSQL databases.`],

  [(c) => `What security protocols and data compliance standards do you implement?`,
   () => `All builds incorporate SSL/TLS encryption, automated daily offsite backups, CSRF/XSS sanitization, rate-limiting on forms, and optional HIPAA-compliant form routing for healthcare and legal clients.`],

  [(c) => `Do you build custom online stores with Shopify and WooCommerce?`,
   () => `Yes. We build high-conversion e-commerce stores on Shopify and WooCommerce featuring customized checkout funnels, ERP inventory synchronization, subscriptions, and sub-second product page load speeds.`],

  [(c) => `Do you offer post-launch training for our internal team?`,
   () => `Yes. Every project includes a recorded 1-on-1 video walkthrough showing your staff how to edit pages, update blog posts, review lead entries, and manage daily operations with ease.`],
];

const SERVICES: Array<[string, string, string]> = [
  ['Custom Web Design', '/services/web-design/', 'Bespoke, high-converting UX/UI designed around your target audience — zero cookie-cutter templates.'],
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
  const tier = getMarketTier(c.pop);
  const intro = pick(INTROS, seed, 1)(c, stateName, tier);

  // Deterministically select 5 unique FAQs from the 20-item pool
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
      <span>⭐ 4.9/5 Rating</span> &bull; <span>${esc(c.name)}, ${esc(st.code)}</span> &bull; <span>${esc(tier.type)}</span>
    </div>
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.2vw,56px);line-height:1.15;margin:0 0 20px;font-weight:800;">Web Design &amp; Development in ${esc(c.name)}, ${esc(st.code)}</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:860px;margin:0 0 28px;">Custom websites, high-conversion e-commerce, and 24/7 AI automation for ${esc(c.name)} businesses — 100% published pricing, Denver-headquartered senior engineering, delivered with zero fluff.</p>
    <div style="display:flex;flex-wrap:wrap;gap:14px;">
      <a href="/contact/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:15px 32px;border-radius:8px;font-weight:700;font-size:16px;text-decoration:none;box-shadow:0 4px 18px rgba(34,123,243,0.35);">Get a Fixed-Price Quote &rsaquo;</a>
      <a href="/pricing/" style="display:inline-block;background:rgba(255,255,255,0.06);border:1px solid rgba(128,128,128,0.3);color:inherit;padding:15px 28px;border-radius:8px;font-weight:600;font-size:16px;text-decoration:none;">View 2026 Price Schedule &rsaquo;</a>
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
        <div style="font-size:18px;font-weight:700;margin-top:4px;">3 to 5 Weeks</div>
        <div style="font-size:14px;opacity:0.8;margin-top:2px;">Hard contractual milestones</div>
      </div>
      <div style="border-left:3px solid #227bf3;padding-left:14px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Investment Range</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px;">$3,000 – $15,000</div>
        <div style="font-size:14px;opacity:0.8;margin-top:2px;">100% Fixed quotes, zero overages</div>
      </div>
      <div style="border-left:3px solid #227bf3;padding-left:14px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Core Tech Stack</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px;">Next.js &bull; AI &bull; WordPress</div>
        <div style="font-size:14px;opacity:0.8;margin-top:2px;">Sub-second load speeds guaranteed</div>
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
  <p ${P}>Every project we engineer operates through an efficient, fully digital delivery model: collaborative design reviews in Figma, interactive staging environments, weekly video milestone updates, and direct access to senior developers in Slack. This modern engineering approach gives ${esc(c.name)} companies access to elite software talent without paying for downtown agency rent or sales commissions. Explore our <a href="/pricing/">published 2026 pricing schedule</a>.</p>
</section>

<!-- DYNAMIC LOCAL SEARCH & REVENUE OPPORTUNITY SECTION -->
<section ${S}>
  <div style="background:linear-gradient(135deg, rgba(34,123,243,0.06) 0%, rgba(255,255,255,0.02) 100%);border:1px solid rgba(34,123,243,0.22);border-radius:16px;padding:34px 28px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:5px 14px;border-radius:18px;font-size:13px;font-weight:700;text-transform:uppercase;">Local Economic &amp; Search Analysis</span>
    <h2 ${H2} style="margin-top:12px;">Local Search &amp; Revenue Potential in ${esc(c.name)}, ${esc(st.code)}</h2>
    <p ${P}>With a population of <strong>${fmt(c.pop)} residents</strong> (${esc(st.state)}'s ${ordinal(c.srank)}-largest city), commercial operators in ${esc(c.name)} compete in an active digital marketplace. Our local economic analysis indicates an estimated <strong>${esc(tier.searchVolumeBracket)} high-intent commercial Google searches</strong> occur monthly across ${esc(c.name)} for professional services, contractors, and local consultancies.</p>
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin:24px 0;">
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:20px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Estimated Monthly Searches</div>
        <div style="font-size:22px;font-weight:800;color:#227bf3;margin-top:4px;">${esc(tier.searchVolumeBracket)}</div>
        <div style="font-size:14px;opacity:0.8;margin-top:4px;">High-intent local queries in ${esc(c.name)}</div>
      </div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:20px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Projected Annual Lead Value</div>
        <div style="font-size:22px;font-weight:800;color:#227bf3;margin-top:4px;">${esc(tier.annualRevBracket)}</div>
        <div style="font-size:14px;opacity:0.8;margin-top:4px;">Capturing 3–8 additional monthly clients</div>
      </div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:12px;padding:20px;">
        <div style="font-size:13px;opacity:0.75;text-transform:uppercase;font-weight:600;">Strategic Priority</div>
        <div style="font-size:16px;font-weight:700;margin-top:4px;line-height:1.4;">${esc(tier.primaryFocus)}</div>
      </div>
    </div>
    
    <p style="margin:0;font-size:15px;line-height:1.7;opacity:0.85;">Key commercial sectors benefiting immediately in ${esc(c.name)}: <strong>${tier.trades.join(', ')}</strong>. By deploying sub-second page loads and 24/7 AI lead capture, your business converts local searchers before competing firms can even return a voicemail.</p>
  </div>
</section>

<!-- COMPARISON MATRIX -->
<section ${S}>
  <div style="margin-bottom:28px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:5px 14px;border-radius:18px;font-size:13px;font-weight:700;text-transform:uppercase;">The Aenfinite Advantage</span>
    <h2 ${H2} style="margin-top:10px;">Why ${esc(c.name)} Businesses Choose Aenfinite</h2>
    <p ${P}>How our direct-to-engineer delivery compares against cheap freelancer templates and legacy, slow-moving agencies.</p>
  </div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;text-align:left;border:1px solid rgba(128,128,128,0.2);border-radius:12px;overflow:hidden;background:rgba(255,255,255,0.02);">
      <thead>
        <tr style="background:rgba(34,123,243,0.12);border-bottom:1px solid rgba(128,128,128,0.25);">
          <th style="padding:16px 20px;font-size:15px;font-weight:700;">Feature &amp; Deliverable</th>
          <th style="padding:16px 20px;font-size:15px;font-weight:700;opacity:0.7;">Freelancers / Templates</th>
          <th style="padding:16px 20px;font-size:15px;font-weight:700;opacity:0.7;">Traditional Agencies</th>
          <th style="padding:16px 20px;font-size:15px;font-weight:700;color:#227bf3;">Aenfinite®</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(128,128,128,0.15);">
          <td style="padding:16px 20px;font-weight:600;">Pricing Model</td>
          <td style="padding:16px 20px;opacity:0.8;">Vague / Hourly creep</td>
          <td style="padding:16px 20px;opacity:0.8;">$30k–$80k+ Retainers</td>
          <td style="padding:16px 20px;color:#227bf3;font-weight:700;">100% Fixed &amp; Published ($3k+)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(128,128,128,0.15);">
          <td style="padding:16px 20px;font-weight:600;">Delivery Timeline</td>
          <td style="padding:16px 20px;opacity:0.8;">Frequent unannounced delays</td>
          <td style="padding:16px 20px;opacity:0.8;">3–6 Months of meetings</td>
          <td style="padding:16px 20px;color:#227bf3;font-weight:700;">3–5 Weeks rapid launch</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(128,128,128,0.15);">
          <td style="padding:16px 20px;font-weight:600;">AI Automation &amp; Voice Agents</td>
          <td style="padding:16px 20px;opacity:0.8;">None / Basic chatbots</td>
          <td style="padding:16px 20px;opacity:0.8;">$15k+ Expensive add-on</td>
          <td style="padding:16px 20px;color:#227bf3;font-weight:700;">Built-in 24/7 AI Voice &amp; Chat</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(128,128,128,0.15);">
          <td style="padding:16px 20px;font-weight:600;">Source Code Ownership</td>
          <td style="padding:16px 20px;opacity:0.8;">Often locked in DIY builders</td>
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

<!-- 8-PILLAR CORE SERVICES -->
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
    <p ${P}>How we take your ${esc(c.name)} business from discovery to a high-converting digital engine in under 5 weeks.</p>
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

<!-- PUBLISHED PRICING SUMMARY -->
<section ${S}>
  <div style="background:linear-gradient(135deg, rgba(34,123,243,0.06) 0%, rgba(255,255,255,0.02) 100%);border:1px solid rgba(34,123,243,0.2);border-radius:16px;padding:36px 30px;">
    <span style="background:rgba(34,123,243,0.1);color:#227bf3;padding:5px 14px;border-radius:18px;font-size:13px;font-weight:700;text-transform:uppercase;">Transparent Investment</span>
    <h2 ${H2} style="margin-top:12px;">Published Rates &bull; No Local Markups in ${esc(c.name)}</h2>
    <p ${P}>We believe business leaders deserve straightforward pricing without sales discovery games. Custom small business websites run <strong>$3,000 to $8,000</strong>, high-scale web applications $15,000+, and 24/7 AI voice receptionists start at <strong>$1,500 setup</strong> with zero long-term contracts.</p>
    <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:14px;align-items:center;">
      <a href="/pricing/" style="display:inline-block;background:#227bf3;color:#fff;padding:12px 26px;border-radius:8px;font-weight:700;font-size:15px;text-decoration:none;">View Complete 2026 Price Schedule &rsaquo;</a>
      <a href="/tools/website-cost-calculator/" style="display:inline-block;background:rgba(255,255,255,0.06);border:1px solid rgba(128,128,128,0.3);color:inherit;padding:12px 22px;border-radius:8px;font-weight:600;font-size:15px;text-decoration:none;">Calculate Project Cost &rsaquo;</a>
      <a href="/tools/ai-receptionist-roi-calculator/" style="display:inline-block;background:rgba(255,255,255,0.06);border:1px solid rgba(128,128,128,0.3);color:inherit;padding:12px 22px;border-radius:8px;font-weight:600;font-size:15px;text-decoration:none;">AI Receptionist ROI &rsaquo;</a>
    </div>
  </div>
</section>

<!-- LOCAL STATE NETWORK -->
<section ${S}>
  <h2 ${H2}>Serving All of ${esc(stateName)}</h2>
  <p ${P}>${esc(c.name)} is one of ${fmt(Object.keys(st.cities).length)} ${esc(stateName)} communities we support with senior engineering. Explore nearby locations:</p>
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
    <p style="font-size:17px;opacity:0.85;max-width:640px;margin:0 auto 24px;line-height:1.7;">Speak directly with our senior engineering team. We'll provide a fixed-price technical roadmap and clear delivery timeline within 24 hours.</p>
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
  const tier = getMarketTier(c.pop);
  const title = pick(TITLES, seed, 0)(c.name, st.code);
  const description = pick(DESCRIPTIONS, seed, 2)(c, st.state, tier);

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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
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

// Language: Spanish (es)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';
import useCasesData from '@/lib/use-cases-data.json';

export const metadata: Metadata = {
  title: 'AI Use Cases for Small Business — Done-For-You Systems | Aenfinite',
  description: 'Explore 12 done-for-you AI use cases: after-hours receptionists, lead capture chatbots, appointment booking, client intake, review management, and more. You own the system.',
  keywords: 'AI use cases small business, AI receptionist, AI chatbot, AI appointment booking, AI lead qualification, missed call text back, AI follow up, AI estimates, white label AI',
  alternates: { canonical: "https://aenfinite.com/es/use-cases/", languages: {"x-default":"https://aenfinite.com/use-cases/","en":"https://aenfinite.com/use-cases/","es":"https://aenfinite.com/es/use-cases/","fr":"https://aenfinite.com/fr/use-cases/","de":"https://aenfinite.com/de/use-cases/","it":"https://aenfinite.com/it/use-cases/","ar":"https://aenfinite.com/ar/use-cases/","pt":"https://aenfinite.com/pt/use-cases/","zh":"https://aenfinite.com/zh/use-cases/","hi":"https://aenfinite.com/hi/use-cases/","nl":"https://aenfinite.com/nl/use-cases/","ja":"https://aenfinite.com/ja/use-cases/","ko":"https://aenfinite.com/ko/use-cases/"} },
  openGraph: {
    title: 'AI Use Cases for Small Business — Done-For-You Systems | Aenfinite',
    description: 'Pre-built AI systems for specific business problems. After-hours receptionists, lead capture, appointment booking, review management — all done-for-you.',
    url: 'https://aenfinite.com/use-cases/',
    siteName: 'Aenfinite',
    type: 'website',
    images: [{ url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Use Cases for Small Business | Aenfinite',
    description: '12 done-for-you AI systems for specific business problems — receptionists, chatbots, booking, intake, and more.',
    images: ['https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg'],
  },
  robots: { index: true, follow: true },
};

type UseCaseItem = {
  slug: string;
  name: string;
  title: string;
  metaDesc: string;
  heroSub: string;
  targetPersona: string;
  problemMath: string;
  pricing: string;
  timeline: string;
};

const USE_CASES = Object.values(useCasesData as unknown as Record<string, UseCaseItem>);

const ICONS: Record<string, string> = {
  'after-hours-ai-receptionist': '📞',
  'website-lead-capture-chatbot': '💬',
  'ai-appointment-booking': '📅',
  'law-firm-client-intake': '⚖️',
  'ai-review-management': '⭐',
  'ai-lead-qualification': '🎯',
  'missed-call-text-back': '📱',
  'ai-follow-up-sequences': '🔄',
  'ai-estimate-system': '📋',
  'multi-location-ai-phone': '🏢',
  'ai-website-crm-package': '🌐',
  'white-label-ai-system': '🏷️',
};

function buildHubContent(): string {
  const S = `style="max-width:1100px;margin:0 auto;padding:40px 24px;font-family:inherit;"`;
  const H2 = `style="font-size:clamp(24px,3.5vw,36px);font-weight:700;margin:0 0 16px;line-height:1.25;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  const cards = USE_CASES.map(uc => `
    <a href="/es/use-cases/${uc.slug}/" style="text-decoration:none;color:inherit;display:block;background:rgba(255,255,255,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:28px 24px;transition:all 0.3s ease;position:relative;overflow:hidden;">
      <div style="font-size:36px;margin-bottom:14px;">${ICONS[uc.slug] || '🤖'}</div>
      <h3 style="font-size:20px;font-weight:700;margin:0 0 10px;line-height:1.3;">${uc.name}</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0 0 14px;">${uc.heroSub.substring(0, 140)}…</p>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <span style="font-size:13px;font-weight:600;color:#227bf3;">${uc.targetPersona}</span>
        <span style="font-size:13px;opacity:0.6;">${uc.timeline}</span>
      </div>
      <div style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(128,128,128,0.15);">
        <span style="font-size:14px;font-weight:600;opacity:0.9;">${uc.pricing.split(' — ')[0]}</span>
      </div>
    </a>
  `).join('\n');

  return `
<div class="header aen-dark-mode" style="min-height:42vh;display:flex;align-items:center;padding:130px 24px 50px;">
  <div style="max-width:1100px;margin:0 auto;width:100%;">
    <div class="title title__default"><h1 style="font-size:clamp(32px,5.5vw,56px);line-height:1.15;margin:0 0 20px;">AI Use Cases for Your Business</h1></div>
    <p style="font-size:clamp(18px,2.4vw,22px);line-height:1.6;opacity:0.88;max-width:860px;">Stop paying for software you configure yourself. We build done-for-you AI systems — receptionists, chatbots, booking agents, and automation workflows — wired into your existing tools. <strong>You own everything.</strong></p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:28px;">
      <a href="/es/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
      <a href="/es/contact/" class="button" style="display:inline-block;background:transparent;color:inherit;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;border:1px solid rgba(128,128,128,0.3);">Talk to Our Team &rsaquo;</a>
    </div>
  </div>
</div>

<!-- Value proposition strip -->
<section style="max-width:1100px;margin:0 auto;padding:0 24px 40px;">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
    <div style="text-align:center;padding:28px 20px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:32px;margin-bottom:10px;">⚡</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">Signals In</h3>
      <p style="font-size:15px;opacity:0.7;margin:0;">Phone calls, web visitors, form fills, missed calls — every signal captured and qualified instantly.</p>
    </div>
    <div style="text-align:center;padding:28px 20px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:32px;margin-bottom:10px;">📅</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">Meetings Out</h3>
      <p style="font-size:15px;opacity:0.7;margin:0;">Qualified leads booked on your calendar, estimates sent, and follow-ups running — automatically.</p>
    </div>
    <div style="text-align:center;padding:28px 20px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:32px;margin-bottom:10px;">🔑</div>
      <h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">Systems You Own</h3>
      <p style="font-size:15px;opacity:0.7;margin:0;">Built in your own accounts — Vapi, n8n, GHL. Cancel anytime and keep the entire system.</p>
    </div>
  </div>
</section>

<!-- Use Case Grid -->
<section ${S}>
  <h2 ${H2}>12 AI Systems — Pick Your Problem</h2>
  <p ${P}>Each use case is a fully built, tested, and deployed AI system. Click any card to see the full workflow, integrations, pricing, and timeline.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;margin-top:24px;">
    ${cards}
  </div>
</section>

<!-- How it works -->
<section ${S}>
  <h2 ${H2}>How It Works</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;margin-top:20px;">
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">01</div>
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;">Free AI Audit</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">We analyze your current systems, identify missed revenue, and map AI opportunities specific to your business.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">02</div>
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;">System Design</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">We architect the workflows, integrations, and AI agents — everything configured in your own accounts.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">03</div>
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;">Build & Deploy</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">We build, test, and deploy the system. Average deployment: 7–14 days depending on complexity.</p>
    </div>
    <div style="padding:24px;border:1px solid rgba(128,128,128,0.15);border-radius:12px;">
      <div style="font-size:28px;font-weight:800;color:#227bf3;margin-bottom:8px;">04</div>
      <h3 style="font-size:17px;font-weight:700;margin:0 0 8px;">Manage & Optimize</h3>
      <p style="font-size:15px;line-height:1.6;opacity:0.8;margin:0;">Ongoing management, AI training updates, and performance optimization. Or go independent — you own it all.</p>
    </div>
  </div>
</section>

<!-- Tool stack -->
<section ${S}>
  <h2 ${H2}>Built with Tools You Already Know</h2>
  <p ${P}>We don't lock you into proprietary platforms. Every system is built on industry-standard tools with full documentation.</p>
  <div style="display:flex;flex-wrap:wrap;gap:16px;margin-top:16px;">
    <a href="/es/tools/vapi/" style="padding:12px 20px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;font-size:15px;transition:border-color 0.2s;">🎙️ Vapi</a>
    <a href="/es/tools/n8n/" style="padding:12px 20px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;font-size:15px;transition:border-color 0.2s;">⚙️ n8n</a>
    <a href="/es/tools/ghl/" style="padding:12px 20px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;font-size:15px;transition:border-color 0.2s;">📊 GoHighLevel</a>
    <a href="/es/tools/make/" style="padding:12px 20px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;font-size:15px;transition:border-color 0.2s;">🔧 Make.com</a>
    <a href="/es/tools/wordpress/" style="padding:12px 20px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;font-size:15px;transition:border-color 0.2s;">🌐 WordPress</a>
    <a href="/es/tools/retell/" style="padding:12px 20px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-weight:600;font-size:15px;transition:border-color 0.2s;">📞 Retell AI</a>
  </div>
</section>

<!-- Cross-links -->
<section ${S}>
  <h2 ${H2}>Explore by Industry</h2>
  <p ${P}>Every use case can be customized for your specific vertical. See how AI transforms operations in your industry:</p>
  <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:12px;">
    <a href="/es/industries/dental/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">🦷 Dental</a>
    <a href="/es/industries/law-firms/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">⚖️ Law Firms</a>
    <a href="/es/industries/real-estate/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">🏠 Bienes Raíces</a>
    <a href="/es/industries/restaurants/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">🍽️ Restaurants</a>
    <a href="/es/industries/home-services/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">🔧 Home Servicios</a>
    <a href="/es/industries/healthcare/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">🏥 Salud</a>
    <a href="/es/industries/construction/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">🏗️ Construction</a>
    <a href="/es/industries/ecommerce/" style="padding:10px 18px;border:1px solid rgba(128,128,128,0.2);border-radius:8px;text-decoration:none;color:inherit;font-size:15px;">🛒 E-Commerce</a>
  </div>
</section>

<!-- FAQ -->
<section class="aen-faq-block" ${S}>
  <h2 ${H2}>Preguntas Frecuentes</h2>
  <div itemscope itemtype="https://schema.org/FAQPage">
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">What does &ldquo;you own the system&rdquo; actually mean?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">It means every AI agent, automation workflow, phone number, and integration is built inside your own accounts (Vapi, n8n, GoHighLevel, etc.). If you cancel our management service, you keep all of it. No vendor lock-in, no data hostage.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">How is this different from buying SaaS chatbot software?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">SaaS tools give you a platform and leave you to configure it. We architect the entire system — workflows, prompts, integrations, testing, deployment — and hand you a working system. It's the difference between buying a kitchen and hiring a chef.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">What if I need something that isn&rsquo;t on this list?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">These 12 use cases are our most popular builds, but every system is custom. Book a free AI audit and describe your specific workflow — if it involves AI, automation, or integration, we've likely built something similar.</div>
      </div>
    </details>
    <details class="aen-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="border:1px solid rgba(128,128,128,0.22);border-radius:12px;margin-bottom:14px;padding:18px 22px;">
      <summary itemprop="name" style="cursor:pointer;font-weight:600;font-size:18px;line-height:1.45;">What&rsquo;s the typical ROI timeline?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top:12px;">
        <div itemprop="text" style="line-height:1.7;font-size:16px;opacity:0.85;">Most clients see positive ROI within 30–60 days. An AI receptionist that captures 5 extra after-hours leads per week at $500 average value pays for itself in the first week.</div>
      </div>
    </details>
  </div>
</section>

<!-- CTA -->
<section ${S} style="text-align:center;padding:30px 24px 60px;">
  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(128,128,128,0.2);border-radius:16px;padding:40px 24px;">
    <h2 style="font-size:28px;font-weight:700;margin:0 0 14px;">Not Sure Which AI System You Need?</h2>
    <p style="font-size:17px;opacity:0.85;max-width:600px;margin:0 auto 24px;">Book a free 30-minute AI Opportunity Audit. We'll analyze your current operations, identify where you're losing revenue, and map the AI systems that will fix it.</p>
    <a href="/es/audit/" class="button" style="display:inline-block;background:#227bf3;color:#fff;padding:14px 32px;border-radius:8px;font-weight:600;text-decoration:none;">Book Your Free AI Audit &rsaquo;</a>
  </div>
</section>
`;
}

export default function UseCasesHubPage() {
  const pageContent = chrome.nav + buildHubContent() + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';
  const url = 'https://aenfinite.com/use-cases/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'Done-For-You AI Systems for Small Business',
        serviceType: 'AI Automatización & Systems Integration',
        description: '12 pre-built AI use cases including receptionists, chatbots, booking agents, intake automation, review management, and lead qualification — all done-for-you and owned by the client.',
        provider: { '@id': 'https://aenfinite.com/#organization' },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Canada' },
        ],
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aenfinite.com/' },
          { '@type': 'ListItem', position: 2, name: 'Use Cases', item: url },
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

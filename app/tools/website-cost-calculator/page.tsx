'use client';

import React, { useState } from 'react';
import chrome from '@/lib/city-chrome.json';

export default function WebsiteCostCalculatorPage() {
  const [pages, setPages] = useState<number>(5);
  const [designLevel, setDesignLevel] = useState<string>('custom');
  const [techStack, setTechStack] = useState<string>('nextjs');
  const [ecommerce, setEcommerce] = useState<string>('none');
  const [aiFeatures, setAiFeatures] = useState<string>('none');

  // Calculation logic
  let baseMin = 2500;
  let baseMax = 3500;

  // Pages
  if (pages <= 5) {
    baseMin += 500;
    baseMax += 1000;
  } else if (pages <= 12) {
    baseMin += 1500;
    baseMax += 2800;
  } else if (pages <= 25) {
    baseMin += 3200;
    baseMax += 5500;
  } else {
    baseMin += 6000;
    baseMax += 11000;
  }

  // Design
  if (designLevel === 'premium') {
    baseMin += 1200;
    baseMax += 2200;
  } else if (designLevel === 'enterprise') {
    baseMin += 2800;
    baseMax += 5000;
  }

  // Stack
  if (techStack === 'custom-app') {
    baseMin += 4000;
    baseMax += 8000;
  }

  // E-commerce
  if (ecommerce === 'starter') {
    baseMin += 1800;
    baseMax += 3200;
  } else if (ecommerce === 'advanced') {
    baseMin += 4500;
    baseMax += 9000;
  }

  // AI Features
  if (aiFeatures === 'chatbot') {
    baseMin += 800;
    baseMax += 1500;
  } else if (aiFeatures === 'voice') {
    baseMin += 1500;
    baseMax += 3000;
  } else if (aiFeatures === 'both') {
    baseMin += 2200;
    baseMax += 4200;
  }

  const fmt = (n: number) => '$' + n.toLocaleString('en-US');

  return (
    <div style={{ fontFamily: 'inherit', color: '#fff', background: '#0a0a0a', minHeight: '100vh' }}>
      <div dangerouslySetInnerHTML={{ __html: chrome.nav }} />

      <main style={{ maxWidth: '1050px', margin: '0 auto', padding: '130px 24px 80px' }}>
        {/* Breadcrumbs */}
        <p style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#227bf3', margin: '0 0 12px' }}>
          <a href="/tools/" style={{ color: 'inherit', textDecoration: 'none' }}>Tools</a> &rsaquo; Website Cost Calculator
        </p>

        <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 50px)', lineHeight: 1.15, margin: '0 0 16px', fontWeight: 800 }}>
          Interactive Website Cost Calculator (2026)
        </h1>
        <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.6, opacity: 0.88, margin: '0 0 28px', maxWidth: '820px' }}>
          Calculate an accurate, itemized market cost estimate for your custom website build in under 60 seconds. Based on real 2026 engineering benchmarks.
        </p>

        {/* AEO Answer Capsule for Google AI Overviews */}
        <div style={{ background: 'rgba(34,123,243,0.08)', borderLeft: '4px solid #227bf3', borderRadius: '0 12px 12px 0', padding: '20px 24px', margin: '0 0 36px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#227bf3', marginBottom: '8px' }}>
            Direct Answer: Website Development Cost Guide
          </span>
          <p style={{ fontSize: '16px', lineHeight: 1.7, margin: 0, opacity: 0.95, fontWeight: 500 }}>
            In 2026, a professionally engineered small business website costs between <strong>$3,000 and $8,000</strong>. Custom web applications and e-commerce stores range from <strong>$8,000 to $35,000+</strong> depending on page volume, CMS stack (WordPress, Webflow, or Next.js), and whether AI voice receptionists ($1,500–$3,500) or CRM integrations are included. Turnaround times typically average 3 to 8 weeks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginTop: '30px' }}>
          {/* Controls Column */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '16px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 24px', borderBottom: '1px solid rgba(128,128,128,0.15)', paddingBottom: '12px' }}>
              Project Parameters
            </h2>

            {/* Page Count */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '15px' }}>Number of Pages:</label>
                <span style={{ color: '#227bf3', fontWeight: 700 }}>{pages} Pages</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#227bf3', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '12px', opacity: 0.6 }}>Includes responsive layouts, SEO tags, and mobile navigation.</span>
            </div>

            {/* Design Level */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '15px', marginBottom: '8px' }}>Design Polish &amp; UI Complexity:</label>
              <select
                value={designLevel}
                onChange={(e) => setDesignLevel(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: '#111', color: '#fff', border: '1px solid rgba(128,128,128,0.3)', fontSize: '15px' }}
              >
                <option value="clean">Clean Modern Commercial (Fast &amp; Conversion-Focused)</option>
                <option value="premium">Premium Custom (Custom Micro-Animations &amp; Motion)</option>
                <option value="enterprise">Bespoke Enterprise (3D Elements &amp; Brand Identity)</option>
              </select>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '15px', marginBottom: '8px' }}>Architecture &amp; Platform:</label>
              <select
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: '#111', color: '#fff', border: '1px solid rgba(128,128,128,0.3)', fontSize: '15px' }}
              >
                <option value="nextjs">Next.js &amp; React (Sub-second speed, 95+ PageSpeed)</option>
                <option value="wordpress">Editable WordPress / CMS (Easy internal team updates)</option>
                <option value="custom-app">Custom Full-Stack App (User logins, portals, APIs)</option>
              </select>
            </div>

            {/* E-Commerce */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '15px', marginBottom: '8px' }}>E-Commerce &amp; Payments:</label>
              <select
                value={ecommerce}
                onChange={(e) => setEcommerce(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: '#111', color: '#fff', border: '1px solid rgba(128,128,128,0.3)', fontSize: '15px' }}
              >
                <option value="none">Lead-Generation Only (No online store)</option>
                <option value="starter">Starter E-Commerce (1–20 products, Stripe checkout)</option>
                <option value="advanced">Advanced Commerce (Full inventory, customer accounts, subscriptions)</option>
              </select>
            </div>

            {/* AI Integrations */}
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '15px', marginBottom: '8px' }}>AI Automation Add-ons:</label>
              <select
                value={aiFeatures}
                onChange={(e) => setAiFeatures(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: '#111', color: '#fff', border: '1px solid rgba(128,128,128,0.3)', fontSize: '15px' }}
              >
                <option value="none">Standard Contact Form Only</option>
                <option value="chatbot">24/7 AI Smart Chatbot (Trained on your business)</option>
                <option value="voice">24/7 AI Voice Phone Receptionist (Answers phone calls)</option>
                <option value="both">Complete AI Suite (Both Phone Agent &amp; Smart Chatbot)</option>
              </select>
            </div>
          </div>

          {/* Results Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(34,123,243,0.12) 0%, rgba(34,123,243,0.02) 100%)', border: '2px solid #227bf3', borderRadius: '16px', padding: '36px 30px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#227bf3', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Estimated Project Investment
              </span>
              <div style={{ fontSize: 'clamp(38px, 5vw, 54px)', fontWeight: 800, margin: '14px 0', color: '#227bf3' }}>
                {fmt(baseMin)} <span style={{ fontSize: '24px', fontWeight: 500, opacity: 0.7 }}>– {fmt(baseMax)}</span>
              </div>
              <p style={{ fontSize: '15px', opacity: 0.85, margin: '0 0 24px', lineHeight: 1.6 }}>
                Includes complete custom design, development, technical SEO schema, mobile responsive optimization, and 100% intellectual property ownership.
              </p>

              <div style={{ borderTop: '1px solid rgba(128,128,128,0.2)', paddingTop: '20px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                  <span style={{ opacity: 0.8 }}>Estimated Delivery:</span>
                  <span style={{ fontWeight: 600 }}>{pages <= 10 ? '3–4 Weeks' : '5–8 Weeks'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                  <span style={{ opacity: 0.8 }}>Code Ownership:</span>
                  <span style={{ fontWeight: 600, color: '#22c55e' }}>100% You Own It</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ opacity: 0.8 }}>Monthly Platform Dues:</span>
                  <span style={{ fontWeight: 600 }}>$0 Mandatory</span>
                </div>
              </div>

              <a
                href="/contact/"
                style={{ display: 'block', textAlign: 'center', background: '#227bf3', color: '#fff', padding: '16px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}
              >
                Lock In This Fixed Quote &rsaquo;
              </a>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(128,128,128,0.15)', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px' }}>Why We Publish Our Pricing</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.65, opacity: 0.8, margin: 0 }}>
                95% of digital agencies refuse to publish costs to maximize markups on sales calls. At Aenfinite, we believe in radical transparency: fixed quotes, zero unexpected change orders, and clear deliverables.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div dangerouslySetInnerHTML={{ __html: chrome.footer }} />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import chrome from '@/lib/city-chrome.json';

export default function AIReceptionistROICalculatorPage() {
  const [calls, setCalls] = useState<number>(350);
  const [missedPct, setMissedPct] = useState<number>(28);
  const [convRate, setConvRate] = useState<number>(22);
  const [dealValue, setDealValue] = useState<number>(750);

  // Calculations
  const missedCalls = Math.round(calls * (missedPct / 100));
  const lostCustomers = Math.round(missedCalls * (convRate / 100));
  const monthlyLostRevenue = lostCustomers * dealValue;
  const annualLostRevenue = monthlyLostRevenue * 12;

  // AI Cost Estimate: ~$150/mo (telephony + inference + maintenance)
  const aiMonthlyCost = 150;
  const netMonthlyRecovered = Math.max(0, monthlyLostRevenue - aiMonthlyCost);
  const roi = monthlyLostRevenue > 0 ? Math.round((netMonthlyRecovered / aiMonthlyCost) * 100) : 0;

  const fmt = (n: number) => '$' + n.toLocaleString('en-US');

  return (
    <div style={{ fontFamily: 'inherit', color: '#fff', background: '#0a0a0a', minHeight: '100vh' }}>
      <div dangerouslySetInnerHTML={{ __html: chrome.nav }} />

      <main style={{ maxWidth: '1050px', margin: '0 auto', padding: '130px 24px 80px' }}>
        {/* Breadcrumbs */}
        <p style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#227bf3', margin: '0 0 12px' }}>
          <a href="/tools/" style={{ color: 'inherit', textDecoration: 'none' }}>Tools</a> &rsaquo; AI Receptionist ROI Calculator
        </p>

        <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 50px)', lineHeight: 1.15, margin: '0 0 16px', fontWeight: 800 }}>
          AI Receptionist ROI &amp; Missed Call Calculator (2026)
        </h1>
        <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.6, opacity: 0.88, margin: '0 0 28px', maxWidth: '840px' }}>
          See exactly how much revenue your business loses each month to unanswered phone calls, busy lines, and after-hours voicemail.
        </p>

        {/* AEO Answer Capsule for Google AI Overviews */}
        <div style={{ background: 'rgba(34,123,243,0.08)', borderLeft: '4px solid #227bf3', borderRadius: '0 12px 12px 0', padding: '20px 24px', margin: '0 0 36px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#227bf3', marginBottom: '8px' }}>
            Direct Answer: AI Receptionist ROI Benchmark
          </span>
          <p style={{ fontSize: '16px', lineHeight: 1.7, margin: 0, opacity: 0.95, fontWeight: 500 }}>
            Small businesses miss an average of <strong>22% to 35% of incoming calls</strong> during peak hours and after-hours. For a service company handling 350 monthly calls with an average customer value of $750, missed calls forfeit over <strong>$15,000 per month ($180,000 annually)</strong>. Because an autonomous AI voice receptionist costs only $1,500–$3,500 one-time to deploy plus ~$50–$150/month in runtime costs, typical first-year ROI exceeds <strong>800% to 1,500%</strong> within 90 days.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginTop: '30px' }}>
          {/* Controls Column */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '16px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 24px', borderBottom: '1px solid rgba(128,128,128,0.15)', paddingBottom: '12px' }}>
              Your Call Metrics
            </h2>

            {/* Total Monthly Calls */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '15px' }}>Monthly Inbound Calls:</label>
                <span style={{ color: '#227bf3', fontWeight: 700 }}>{calls} Calls/Mo</span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="25"
                value={calls}
                onChange={(e) => setCalls(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#227bf3', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '12px', opacity: 0.6 }}>Total phone calls received across all lines each month.</span>
            </div>

            {/* Missed Call % */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '15px' }}>Estimated Missed Call Rate:</label>
                <span style={{ color: '#ef4444', fontWeight: 700 }}>{missedPct}% Missed</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={missedPct}
                onChange={(e) => setMissedPct(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#ef4444', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '12px', opacity: 0.6 }}>Industry average is 28% (after-hours, lunch, holidays, busy lines).</span>
            </div>

            {/* Conversion Rate */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '15px' }}>Caller-to-Customer Conversion:</label>
                <span style={{ color: '#227bf3', fontWeight: 700 }}>{convRate}% Booked</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={convRate}
                onChange={(e) => setConvRate(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#227bf3', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '12px', opacity: 0.6 }}>Percentage of qualified callers who book an appointment or job.</span>
            </div>

            {/* Average Deal Value */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '15px' }}>Average Job / Patient Value:</label>
                <span style={{ color: '#22c55e', fontWeight: 700 }}>{fmt(dealValue)}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={dealValue}
                onChange={(e) => setDealValue(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#22c55e', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '12px', opacity: 0.6 }}>Average revenue earned from a single converted customer.</span>
            </div>
          </div>

          {/* Results Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(34,123,243,0.05) 100%)', border: '2px solid rgba(239,68,68,0.5)', borderRadius: '16px', padding: '36px 30px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Revenue Currently Lost to Missed Calls
              </span>
              <div style={{ fontSize: 'clamp(38px, 5vw, 54px)', fontWeight: 800, margin: '14px 0', color: '#ef4444' }}>
                {fmt(monthlyLostRevenue)} <span style={{ fontSize: '20px', fontWeight: 500, opacity: 0.7 }}>/ month</span>
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
                {fmt(annualLostRevenue)} <span style={{ fontSize: '14px', opacity: 0.7 }}>in annual forfeited revenue</span>
              </div>

              <div style={{ borderTop: '1px solid rgba(128,128,128,0.2)', paddingTop: '20px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                  <span style={{ opacity: 0.8 }}>Missed Calls per Month:</span>
                  <span style={{ fontWeight: 600 }}>{missedCalls} Unanswered Calls</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                  <span style={{ opacity: 0.8 }}>Lost Customers to Competitors:</span>
                  <span style={{ fontWeight: 600, color: '#ef4444' }}>~{lostCustomers} Clients / Month</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ opacity: 0.8 }}>Projected AI Receptionist ROI:</span>
                  <span style={{ fontWeight: 700, color: '#22c55e' }}>{roi}% ROI</span>
                </div>
              </div>

              <a
                href="/contact/"
                style={{ display: 'block', textAlign: 'center', background: '#227bf3', color: '#fff', padding: '16px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}
              >
                Recover This Revenue with AI &rsaquo;
              </a>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(128,128,128,0.15)', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px' }}>Why 85% of Callers Never Leave Voicemails</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.65, opacity: 0.8, margin: 0 }}>
                Data shows that when a customer reaches voicemail, 85% immediately hang up and call the next competitor on Google. Aenfinite's 24/7 AI voice receptionist answers within 2 rings, qualifies the caller, and locks in the booking on the spot.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div dangerouslySetInnerHTML={{ __html: chrome.footer }} />
    </div>
  );
}

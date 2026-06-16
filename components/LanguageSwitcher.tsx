'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Floating language switcher, rendered globally from the root layout.
 *
 * Deep-links to the same page in the chosen language when it exists
 * (all 11 locales share an identical 59-route tree); falls back to the
 * locale homepage for English-only pages (blog posts, /cities/, etc.).
 */

const LANGUAGES: { code: string; label: string }[] = [
  { code: '', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh', label: '中文' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
];

const LOCALE_CODES = LANGUAGES.map(l => l.code).filter(Boolean);

// Routes that exist in every locale (identical tree across all 11 locales).
const SHARED_ROUTES = new Set([
  '/', '/agency/', '/agency/partner-with-us/', '/agency/partner-with-us/ghl-services/',
  '/agency/partner-with-us/referral-program/', '/agency/partner-with-us/white-label-services/',
  '/blog/', '/contact/', '/darkmode/', '/featured-work/', '/privacy-policy/', '/services/',
  '/services/ai-chatbots-and-virtual-assistants/', '/services/app-development/',
  '/services/branding/', '/services/conference-branding/', '/services/custom-web-development/',
  '/services/digital-marketing/', '/services/e-commerce-websites/', '/services/graphic-design/',
  '/services/logo-design/', '/services/packaging-design/', '/services/paid-ads/',
  '/services/pay-per-click/', '/services/search-engine-optimization/',
  '/services/social-media-marketing/', '/services/software-and-platform-development/',
  '/services/trade-show-booth-design/', '/services/ui-ux-design/',
  '/services/web-design-and-branding-for-real-estate/', '/services/web-design/',
  '/services/wordpress-websites/', '/services/workflow-and-business-automation/',
  '/work/', '/work/afropopup/', '/work/algopros/', '/work/all/', '/work/amkiservice/',
  '/work/ansu/', '/work/blue-vine-marketing/', '/work/branding/', '/work/cimeo-vision/',
  '/work/feiro/', '/work/fiscoclic/', '/work/global-design-solution/', '/work/graphic-design/',
  '/work/husnohaya/', '/work/khatech/', '/work/logo-design/', '/work/lumea/', '/work/mindfit/',
  '/work/mobile-apps/', '/work/neocert/', '/work/neurolinker/', '/work/olly/',
  '/work/packaging-design/', '/work/quarena/', '/work/robophil/',
  '/work/web-design-and-development/',
]);

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Detect current locale + base path (path without locale prefix)
  const seg = pathname.split('/')[1];
  const currentLocale = LOCALE_CODES.includes(seg) ? seg : '';
  let basePath = currentLocale ? pathname.slice(currentLocale.length + 1) : pathname;
  if (!basePath.startsWith('/')) basePath = '/' + basePath;
  if (!basePath.endsWith('/')) basePath += '/';

  const current = LANGUAGES.find(l => l.code === currentLocale) || LANGUAGES[0];

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const hrefFor = (code: string) => {
    const prefix = code ? '/' + code : '';
    // Same page in the target language when it exists, else that language's home
    return SHARED_ROUTES.has(basePath) ? (prefix + basePath || '/') : (prefix + '/' || '/');
  };

  return (
    <div
      ref={ref}
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 99999, fontFamily: 'inherit' }}
      aria-label="Language switcher"
    >
      {open && (
        <div
          style={{
            position: 'absolute', bottom: '110%', right: 0, background: '#0d0d0d',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: 8,
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, minWidth: 230,
            boxShadow: '0 8px 30px rgba(0,0,0,0.45)',
          }}
        >
          {LANGUAGES.map(l => (
            <a
              key={l.code || 'en'}
              href={hrefFor(l.code)}
              hrefLang={l.code || 'en'}
              style={{
                padding: '8px 12px', borderRadius: 8, fontSize: 13, textDecoration: 'none',
                color: l.code === currentLocale ? '#000' : '#fff',
                background: l.code === currentLocale ? '#fff' : 'transparent',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (l.code !== currentLocale) (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.12)'; }}
              onMouseLeave={e => { if (l.code !== currentLocale) (e.target as HTMLElement).style.background = 'transparent'; }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px',
          background: '#0d0d0d', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 999, cursor: 'pointer', fontSize: 13, lineHeight: 1,
          boxShadow: '0 4px 18px rgba(0,0,0,0.35)',
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {current.label}
      </button>
    </div>
  );
}

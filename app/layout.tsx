import type { Metadata } from 'next';
import Script from 'next/script';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aenfinite.com'),
  title: {
    default: 'Aenfinite® — Web Design, AI Automation & Custom Development | Denver',
    template: '%s | Aenfinite®',
  },
  description: 'full-service digital innovation agency delivering AI solutions & automation, custom software and app development, SEO & digital marketing, e-commerce, branding and UI/UX design.',
  icons: {
    icon: [
      { url: '/wp-content/themes/aenfinite.com/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/wp-content/themes/aenfinite.com/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/wp-content/themes/aenfinite.com/favicon/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/wp-content/themes/aenfinite.com/favicon/favicon.ico',
  },
  manifest: '/wp-content/themes/aenfinite.com/favicon/site.webmanifest',
  openGraph: {
    siteName: 'Aenfinite',
    images: [{
      url: 'https://aenfinite.com/wp-content/themes/aenfinite.com/images/thumbnail.jpg',
      width: 1200,
      height: 630,
      alt: 'Aenfinite Digital Innovation Agency',
    }],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch & preconnect for speed */}

        {/* Local SEO - Denver, Colorado geo signals */}
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Denver" />
        <meta name="geo.position" content="39.7392;-104.9903" />
        <meta name="ICBM" content="39.7392, -104.9903" />

        {/* Hreflang alternates are declared per-page via each page's metadata
            (alternates.languages) — a global homepage-pointing set here would be
            invalid on every other page. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload the latin Manrope woff2s (400 + 700) so text paints in its final font */}
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_C-bnTfc7AKrU.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE9_C-bnTfc7AKrU.woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Manrope @font-face inlined — was a render-blocking fonts.googleapis.com
            request; font files stay on gstatic (preconnected), display=optional. */}
        <style dangerouslySetInnerHTML={{ __html: `/* cyrillic-ext */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_P-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_G-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_B-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_N-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_M-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_C-bnTfc7AKrU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFN_P-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFN_G-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFN_B-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFN_N-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFN_M-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFN_C-bnTfc7AKrU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE9_P-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE9_G-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE9_B-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE9_N-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE9_M-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE9_C-bnTfc7AKrU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE9_P-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE9_G-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE9_B-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE9_N-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE9_M-bnTfc7AKrWJwA.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-display: optional;
  src: url(https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE9_C-bnTfc7AKrU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}` }} />
        {/* Perf: skip layout/paint of below-fold blocks on these very large legacy pages */}
        <style dangerouslySetInnerHTML={{ __html: `.footer,.sitemap-footer,.aen-faq-block,.aen-reading,.aen-states-grid{content-visibility:auto;contain-intrinsic-size:auto 600px;}` }} />

        {/* Critical CSS preloaded, then applied */}
        <link
          rel="preload"
          href="/wp-content/themes/aenfinite.com/static/css/mainf1a7.css?v=20250731-2020"
          as="style"
        />
        <link
          href="/wp-content/themes/aenfinite.com/static/css/mainf1a7.css?v=20250731-2020"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="preload"
          href="/wp-content/themes/aenfinite.com/stylef1a7.css?v=20250731-2020"
          as="style"
        />
        <link
          href="/wp-content/themes/aenfinite.com/stylef1a7.css?v=20250731-2020"
          rel="stylesheet"
          type="text/css"
        />

        {/* Font Awesome for lightbox nav icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Minor CSS – load non-blocking */}
        <link
          rel="stylesheet"
          id="classic-theme-styles-css"
          href="/wp-includes/css/classic-themes.mind1c0.css?ver=6.7.2"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <link
          rel="stylesheet"
          id="contact-form-7-css"
          href="/wp-content/plugins/contact-form-7/includes/css/stylesfc7a.css?ver=6.0.6"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
      </head>
      <body>
        {children}

        {/* Global floating language switcher */}
        <LanguageSwitcher />

        {/* Core JavaScript Libraries – afterInteractive to not block first paint */}
        <Script
          src="/wp-content/themes/aenfinite.com/static/js/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/wp-content/themes/aenfinite.com/static/js/slick.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/wp-content/themes/aenfinite.com/static/js/gsap.min.js"
          strategy="afterInteractive"
        />
        {/* ScrollMagic, animation.gsap, smartScroll removed – not used by any page */}

        {/* Google Analytics – lazyOnload so it never blocks page interaction */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K9VRBCFE61"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K9VRBCFE61');
          `}
        </Script>

        {/* GTM – lazyOnload */}
        <Script id="gtm" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-53L4TW5R');
          `}
        </Script>

        {/* Page functionality */}
        <Script
          src="/wp-content/themes/aenfinite.com/static/js/demo5163.js?v=20241204-0018"
          strategy="afterInteractive"
        />
        <Script
          src="/wp-content/themes/aenfinite.com/static/js/aos.js"
          strategy="afterInteractive"
        />

        {/* AOS Init */}
        <Script id="aos-init" strategy="afterInteractive">
          {`
            if (typeof $ !== 'undefined') {
              $(function() { if (typeof AOS !== 'undefined') AOS.init(); });
            } else {
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof AOS !== 'undefined') AOS.init();
              });
            }
          `}
        </Script>

        {/* Button highlights & Form handler */}
        <Script src="/js/button-highlights.js" strategy="afterInteractive" />
        <Script src="/js/custom-form-handler.js" strategy="afterInteractive" />

        {/* WordPress CF7 – lazyOnload since forms aren't the first interaction */}
        <Script src="/wp-includes/js/dist/hooks.min4fdd.js?ver=4d63a3d491d11ffd8ac6" strategy="lazyOnload" id="wp-hooks-js" />
        <Script src="/wp-includes/js/dist/i18n.minc33c.js?ver=5e580eb46a90c2b997e6" strategy="lazyOnload" id="wp-i18n-js" />
        <Script src="/wp-content/plugins/contact-form-7/includes/swv/js/indexfc7a.js?ver=6.0.6" strategy="lazyOnload" id="swv-js" />
        <Script id="wpcf7-config" strategy="lazyOnload">
          {`var wpcf7 = {"api":{"root":"https://aenfinite.com/wp-json/","namespace":"contact-form-7/v1"},"cached":1};`}
        </Script>
      </body>
    </html>
  );
}

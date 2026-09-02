// Language: Japanese (ja)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';
import chrome from '@/lib/city-chrome.json';

// Static params for the main authors
export function generateStaticParams() {
  return [
    { name: 'hasan' },
    { name: 'aenfinite' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params;
  const authorName = name.charAt(0).toUpperCase() + name.slice(1);
  return {
    title: `${authorName} | Author at Aenfinite®`,
    description: `Read articles and professional insights from ${authorName}, part of the senior engineering and design team at Aenfinite.`,
    alternates: { canonical: `https://aenfinite.com/author/${name}/` },
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const authorName = name.charAt(0).toUpperCase() + name.slice(1);
  const url = `https://aenfinite.com/ja/author/${name}/`;

  const S = `style="max-width:900px;margin:0 auto;padding:60px 24px;font-family:inherit;"`;
  const P = `style="line-height:1.8;font-size:17px;opacity:0.9;margin:0 0 20px;"`;

  const pageBody = `
    <div class="header" style="min-height:30vh;display:flex;align-items:center;padding:120px 24px 40px;background:rgba(34,123,243,0.05);">
      <div style="max-width:900px;margin:0 auto;width:100%;text-align:center;">
        <h1 style="font-size:clamp(36px,5vw,52px);line-height:1.15;margin:0 0 16px;">${authorName}</h1>
        <p style="font-size:18px;opacity:0.85;margin:0;">Senior Engineering & Design Team | Aenfinite®</p>
      </div>
    </div>
    
    <section ${S}>
      <h2 style="font-size:26px;font-weight:700;margin-bottom:20px;">会社概要 ${authorName}</h2>
      <p ${P}>${authorName} is an integral part of the Aenfinite team, specializing in creating high-conversion web platforms, AI automation systems, and enterprise-grade software. With a focus on performance and robust engineering, ${authorName} helps businesses navigate デジタルトランスフォーメーション and scale efficiently.</p>
      <p ${P}>Read ${authorName}'s latest insights on our <a href="https://blog.aenfinite.com/" style="color:#227bf3;text-decoration:none;">engineering blog</a>.</p>
    </section>
  `;

  const pageContent = chrome.nav + pageBody + chrome.footer;
  const bodyClass = 'page-template page-template-page-service-php page-child document';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}#webpage`,
    url,
    name: `${authorName} - Author Profile`,
    mainEntity: {
      '@type': 'Person',
      '@id': `${url}#person`,
      name: authorName,
      url,
      worksFor: {
        '@id': 'https://aenfinite.com/#organization'
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HtmlPage content={pageContent} bodyClass={bodyClass} headStyles={chrome.styles} />
    </>
  );
}

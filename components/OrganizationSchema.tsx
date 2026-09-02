import React from 'react';

interface OrganizationSchemaProps {
  dateModified?: string;
}

export default function OrganizationSchema({ dateModified }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://aenfinite.com/#organization",
    "name": "Aenfinite®",
    "url": "https://aenfinite.com",
    "logo": "https://aenfinite.com/wp-content/themes/aenfinite.com/images/aenfinite-full.svg",
    "founder": {
      "@type": "Person",
      "name": "Hasan"
    },
    "foundingDate": "2017",
    "description": "Full-service digital innovation agency delivering AI solutions & automation, custom software and app development, SEO & digital marketing, e-commerce, branding and UI/UX design. (150+ projects)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1500 N Grant St, Ste R",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "postalCode": "80203",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-303-419-9782",
      "contactType": "Customer Service",
      "email": "info@aenfinite.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/aenfinite",
      "https://clutch.co/profile/aenfinite",
      "https://www.crunchbase.com/organization/aenfinite",
      "https://twitter.com/aenfinite",
      "https://www.facebook.com/aenfinite",
      "https://www.youtube.com/@aenfinite"
    ],
    ...(dateModified && { dateModified })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

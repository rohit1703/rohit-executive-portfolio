import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Rohit Mallavarapu | Marketing Leader (Startup to NASDAQ)", 
  description = "Executive portfolio of Rohit Mallavarapu. The strategic engine behind $7M+ revenue and Grid Dynamics’ NASDAQ journey.", 
  // CRITICAL: Replace this with your working Imgur link OR keep this if 'social-card.png' is in public/
  image = "https://rohit-executive-portfolio.vercel.app/social-card.png",
  url = "https://rohit-executive-portfolio.vercel.app/"
}) => {
  
  // JSON-LD Structured Data: This tells Google you are a "Person" not just a webpage.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rohit Mallavarapu",
    "url": url,
    "image": image,
    "jobTitle": "Marketing Leader",
    "worksFor": {
      "@type": "Organization",
      "name": "Grid Dynamics"
    },
    "sameAs": [
      "https://www.linkedin.com/in/rohitmallavarapu17/",
      // Add other social links here if you have them
    ],
    "description": description
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data Script */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
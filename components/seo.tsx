import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";

interface SEOIProps {
  description?: string;
  lang?: string;
  keywords?: string[];
  title: string;
  image?: string;
  type?: string;
  author?: string;
  url?: string;
  twitterCreator?: string;
}

const SEO: React.FC<SEOIProps> = ({ 
  description, 
  lang, 
  keywords, 
  title,
  image,
  type,
  author,
  url,
  twitterCreator
}) => {
  const siteTitle = "Aaditya Chapagain | ML Engineer & Developer";
  const defaultDescription = "Machine Learning Engineer with expertise in Natural Language Processing and Full Stack Development. Explore my portfolio, blogs, and projects.";
  const defaultImage = "/aaditya-profile.png";
  const siteUrl = "https://aadityachapagain.com";
  
  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;
  
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content={author || "Aaditya Chapagain"} />
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterCreator || "@aadityachapagain"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Keywords */}
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      
      {/* Canonical Link */}
      <link rel="canonical" href={metaUrl} />
      
      {/* Language */}
      <html lang={lang || "en"} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

SEO.defaultProps = {
  lang: "en",
  keywords: ["Machine Learning", "AI", "Full Stack Development", "Portfolio", "Blog"],
  description: "Machine Learning Engineer with expertise in Natural Language Processing and Full Stack Development. Explore my portfolio, blogs, and projects.",
  type: "website",
  author: "Aaditya Chapagain",
  twitterCreator: "@aadityachapagain"
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  twitterCreator: PropTypes.string
};

export default SEO;
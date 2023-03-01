import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";

interface SEOIProps {
  description: string;
  lang?: string;
  keywords: string[];
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SEO: React.FC<SEOIProps> = ({ description, lang, keywords, title }) => {
  return (
    <Head>
      <html lang={lang ?? "en"} />
      <meta
        name="description"
        content={
          description ?? "Trying to logs things I learned in my daily life."
        }
      />
      <meta
        property="og:title"
        content={title ?? "Life long learning and lessons"}
      />
      <meta
        property="og:description"
        content={
          description ?? "Trying to logs things I learned in my daily life."
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/profile_image.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Aaditya Chapagain" />
      <meta
        name="twitter:title"
        content={title ?? "Life long learning and lessons"}
      />
      <meta
        name="twitter:description"
        content={
          description ?? "Trying to logs things I learned in my daily life."
        }
      />
      {keywords.map((val: string, idx: number) => {
        return <meta key={idx} name="keywords" content={val} />;
      })}
      {/* <link rel="icon" href="/images/aadityalogo.ico" /> */}
      <title>{title}</title>
    </Head>
  );
};

SEO.defaultProps = {
  lang: `en`,
  keywords: ["life", "blog", "ideas"],
  description: "Aaditya chapagain blogs",
  title: "Aaditya's Blog site"
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default SEO;

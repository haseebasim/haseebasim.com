import Head from 'next/head';
import React from 'react';

const Meta = ({ title, route }) => {
  return (
    <Head>
      <meta property="og:locale" content="en" />
      <meta property="og:title" content="Haseeb Asim" />
      <meta property="og:site_name" content="Haseeb Asim" />
      <meta
        property="og:description"
        content="A Full Stack Developer, developing exceptional digital experiences with a touch of cloud computing"
      />
      <meta property="og:url" content={`https://www.haseebasim.com${route}`} />
      <meta name="title" content={title} />
      <meta
        name="description"
        content="A Full Stack Developer, developing exceptional digital experiences with a touch of cloud computing"
      />
      <meta name="author" content="Haseeb Asim" />
      <link rel="canonical" href={`https://www.haseebasim.com${route}`} />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;

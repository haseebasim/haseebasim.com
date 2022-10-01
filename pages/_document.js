import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="/HA.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <meta
          name="description"
          content="A Full Stack Developer, developing exceptional digital experiences with a touch of cloud computing"
        />
        <meta
          name="keywords"
          content="React, Next, Node, TypeScript, Freelance, Upwork, Node, Backend, Frontend, Developer, Web Developer, GoLang"
        />
        <meta name="author" content="John Doe" />
        <title>Haseeb Asim</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

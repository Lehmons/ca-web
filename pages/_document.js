import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" /> 
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content="Commercial Artists" />
        <meta property="og:description" content="Commercial Artists" />
        <meta property="og:image" content="/images/social-share.jpg" />
        <meta property="og:url" content="https://commercialartists.com" />
        <meta property="og:site_name" content="Commercial Artists" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="Commercial Artists" />
        <meta name="twitter:title" content="Commercial Artists" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

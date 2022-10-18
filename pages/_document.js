import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
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
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" /> */}
        {/* <link
          rel="preload"
          href="/fonts/bradford-light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        /> */}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content="Commercial Artists" />
        <meta property="og:description" content="Commercial Artists" />
        <meta property="og:image" content="/images/social-share.jpg" />
        <meta property="og:url" content="https://commercialartists.com" />
        <meta property="og:site_name" content="Commercial Artists" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="Commercial Artists" />
        <meta name="twitter:title" content="Commercial Artists" />
        {/* <meta property="og:video" content="/videos/social-share.mp4" />
        <meta property="og:video" content="/videos/social-share.mp4" />
        <meta
          property="og:video:secure_url"
          content="/videos/social-share.mp4"
        />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1920" />
        <meta property="og:video:height" content="1080" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

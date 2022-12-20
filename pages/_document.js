import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Vitalik Twitter Thread GPT-3 Writer" key="title" />
        <meta
          property="og:description"
          content="Vitalik twitter thread generator
"
          key="description"
        />
        <meta
          property="og:image"
          content="https://www.cronista.com/files/image/330/330339/60953d1321301.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

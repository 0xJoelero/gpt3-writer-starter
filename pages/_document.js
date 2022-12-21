import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Sermon generator" key="title" />
        <meta
          property="og:description"
          content="Input a text or verse and get a sermon
"
          key="description"
        />
        <meta
          property="og:image"
          content="https://www.cronista.com/files/image/330/330339/60953d1321301.jpghttps://www.spurgeongems.org/2020/wp-content/uploads/2019/12/The-Ministers-Farewell-image-865x1024.jpg"
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

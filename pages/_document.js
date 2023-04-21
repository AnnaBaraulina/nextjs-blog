import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="/fonts/Heebo-Black.ttf"
            rel="preload"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            onLoad={() => console.log('Font loaded')}
          />
          <link
            href="/fonts/Heebo-Bold.ttf"
            rel="preload"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            onLoad={() => console.log('Font loaded')}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
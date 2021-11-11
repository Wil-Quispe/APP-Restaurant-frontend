import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDoc extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/mainlogo.png" />
          <title>Menus Diarios Pa'ti</title>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDoc

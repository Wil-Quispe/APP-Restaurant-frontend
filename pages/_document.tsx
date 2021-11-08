import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDoc extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDoc

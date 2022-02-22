import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
    render() {
        return (
          <Html>
            <Head>
                <title>INNOSCOUT WEBSITE V1.1</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' /> 
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap" rel="stylesheet" />
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
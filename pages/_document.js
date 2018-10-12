import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/js/jquery.min.js" />
          <script src="/static/js/bootstrap.min.js" />

          <script src="/static/js/jquery-plugin-collection.js" />

          <script src="/static/js/script.js" />
        </body>
      </html>
    );
  }
}

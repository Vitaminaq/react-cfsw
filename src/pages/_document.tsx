import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  public render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Followme,外汇社区,外汇交易,外汇平台,外汇投资"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

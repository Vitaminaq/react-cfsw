import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        console.log(ctx, '>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    public render() {
        return (
         
                <html>
                <Head>
                    <title>cfsw</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <React.Fragment />
                </body>
            </html>     
        );
    }
}

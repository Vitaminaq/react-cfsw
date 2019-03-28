import App, { Container, NextAppContext } from "next/app";
import Head from "next/head";
import React from "react";
import store from "@src/store/index";
import { Provider } from "react-redux";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};
    let title = "";

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if ((Component as any).$setTitle) {
      title = (Component as any).$setTitle();
    }
    return { pageProps, title };
  }

  render() {
    const { Component, pageProps, title } = (this as any).props;

    return (
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

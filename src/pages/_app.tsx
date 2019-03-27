import App, { Container, NextAppContext } from "next/app";
import Head from "next/head";
import React from "react";
import store from "@src/store/index";
// import { withRouter } from "next/router";
import { Provider } from "react-redux";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>我是一个标题</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

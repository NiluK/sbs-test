import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../config/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.colors.background};
    font-family: sans-serif;
  }
`;

export default class NextApp extends App {
  public render(): React.ReactNode {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>SBS Test</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

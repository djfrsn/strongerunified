import App, { Container } from 'next/app';
import React from 'react';
import { MenuProvider } from '../components/bathkebespoke/context/MenuContext';
import '../components/index.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </Container>
    );
  }
}

export default MyApp;

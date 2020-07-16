import React from 'react';
import { wrapper } from '../store/configureStore';
import { AppProps } from 'next/app';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Footer } from '../components/Footer';

import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
}

export default wrapper.withRedux(App);

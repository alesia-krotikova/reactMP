import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';
import { AppProps } from 'next/app';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Footer } from '../components/Footer';

import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
        <Footer />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;

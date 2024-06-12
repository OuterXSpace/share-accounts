import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import type { AppProps } from 'next/app';
import { initFlowbite } from 'flowbite';
import { ToastProvider } from '../components';
import { configureAppStore } from '../lib';
import { Provider } from 'react-redux';
import '../styles/globals.css';

const store = configureAppStore();

const App: React.FC<AppProps> = observer((props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <Provider store={store}>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </Provider>
  );
});

export default App;

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import type { AppProps } from 'next/app';
import { initFlowbite } from 'flowbite';
import { configureAppStore } from '../store-tookit';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import { ToastProvider } from '../components';

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
      <ToastContainer
        closeButton={false}
        hideProgressBar
        className="my-toast-container"
        autoClose={3000}
        position="bottom-center"
      />
    </Provider>
  );
});

export default App;

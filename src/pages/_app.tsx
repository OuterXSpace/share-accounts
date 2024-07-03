import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import type { AppProps } from 'next/app';
import { initFlowbite } from 'flowbite';
import { configureAppStore } from '../store-tookit';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';

const store = configureAppStore();

const App: React.FC<AppProps> = observer((props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer
        closeButton={false}
        hideProgressBar
        className="my-toast-container"
        autoClose={2000}
        position="bottom-center"
      />
    </Provider>
  );
});

export default App;

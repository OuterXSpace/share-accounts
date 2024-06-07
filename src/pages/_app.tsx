import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import type { AppProps } from 'next/app';
import { initFlowbite } from 'flowbite';
import '../styles/globals.css';

const App: React.FC<AppProps> = observer((props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    initFlowbite();
  }, []);

  return <Component {...pageProps} />;
});

export default App;

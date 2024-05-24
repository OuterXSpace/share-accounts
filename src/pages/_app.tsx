import React from 'react';
import { observer, Provider } from 'mobx-react';
import type { AppProps } from 'next/app';
import { uIStore } from '../stores';
import '../styles/globals.css';

const App: React.FC<AppProps> = observer((props) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={uIStore}>
      <Component {...pageProps} />
    </Provider>
  );
});

export default App;

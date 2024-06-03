import React, { useEffect } from 'react';
import { observer, Provider } from 'mobx-react';
import type { AppProps } from 'next/app';
import { uIStore } from '../stores';
import { initFlowbite } from 'flowbite';
import '../styles/globals.css';
import CartProvider from '../next-core-ui/share-account/src/context/cart-context/cart-context.ctx';

const App: React.FC<AppProps> = observer((props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <Provider store={uIStore}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  );
});

export default App;

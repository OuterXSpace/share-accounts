import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { observer, Provider } from 'mobx-react';
import type { AppProps } from 'next/app';
import { useUIContent } from '../hooks';
import { uIStore } from '../stores';
import { Footer } from '../views';
import '../styles/globals.css';

const App = observer(({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const [, setLoading] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const { content: systemConfig } = useUIContent<Record<string, any>>('ui-config');

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

  const animationProps = {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    transition: { type: 'ease', duration: 1 },
  };

  return (
    <Provider store={uIStore}>
      {!isMobile ? (
        <motion.div key={router.route} {...animationProps}>
          <Component {...pageProps} systemConfig={systemConfig} />
        </motion.div>
      ) : (
        <Component {...pageProps} systemConfig={systemConfig} />
      )}
      <Footer />
    </Provider>
  );
});

export default App;

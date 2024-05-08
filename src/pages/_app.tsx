import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Provider } from "mobx-react";
import { uIStore } from "@/stores";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Check if the window width is less than a certain threshold (e.g., 768px) to determine if it's a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      window.removeEventListener("resize", handleResize);
    };
  }, [router]);

  // Animation properties for non-mobile devices
  const animationProps = {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    transition: { type: "ease", duration: 1 },
  };

  return (
    <Provider store={uIStore}>
      {!isMobile ? (
        <motion.div key={router.route} {...animationProps}>
          <Component {...pageProps} />
        </motion.div>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
};

export default App;

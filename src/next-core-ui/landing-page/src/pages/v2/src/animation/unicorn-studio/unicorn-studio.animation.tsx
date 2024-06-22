import React, { useRef } from 'react';
import { UnicornStudioAnimationProp } from './unicorn-studio.type';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial/dist/gsap';

gsap.registerPlugin(useGSAP);

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export const UnicornStudioAnimation: React.FC<UnicornStudioAnimationProp> = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.unicorn.studio/v1.2.0/unicornStudio.umd.js';
      script.async = true;
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    },
    { scope: container },
  );

  return <div ref={container} data-us-project="ywrqp5HH8f3PmuxayhNs?update=aaafff" className="hero-visual" />;
};

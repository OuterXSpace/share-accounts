import React, { useEffect, useRef } from 'react';
import { UnicornStudioAnimationProp } from './unicorn-studio.type';

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export const UnicornStudioAnimation: React.FC<UnicornStudioAnimationProp> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.unicorn.studio/v1.2.0/unicornStudio.umd.js';
    script.async = true;
    script.onload = () => {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="hero-visual">
      <canvas ref={canvasRef} width={2205} height={603} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

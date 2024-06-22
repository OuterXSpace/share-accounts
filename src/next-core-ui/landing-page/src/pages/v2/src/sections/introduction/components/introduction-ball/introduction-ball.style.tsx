import React from 'react';

export const IntroductionBallStyle: React.FC = () => {
  return (
    <style jsx global>{`
      .introduction__ball canvas {
        width: 100% !important;
        height: 100% !important;
      }
      @media (max-width: 768px) {
        .introduction__ball canvas {
          display: none;
        }
      }
    `}</style>
  );
};

import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export const ArrowLeft: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverAnimation = useSpring({
    fill: isHovered ? '#000000' : '#303231',
    config: { tension: 170, friction: 26 },
  });

  return (
    <div className="overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <animated.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.5 7.5L1.5 7.5V6.5L43.5 6.5V7.5Z"
          fill={hoverAnimation.fill}
        />
        <animated.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.70711 1.00008L1.70711 7.00008L7.70711 13.0001L7 13.7072L0.292894 7.00008L7 0.292969L7.70711 1.00008Z"
          fill={hoverAnimation.fill}
        />
      </svg>
    </div>
  );
};

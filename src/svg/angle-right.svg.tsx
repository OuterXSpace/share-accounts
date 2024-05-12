import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export const AngleRight: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverAnimation = useSpring({
    fill: isHovered ? '#000000' : '#303231',
    config: { tension: 170, friction: 26 },
  });

  return (
    <div className="overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <animated.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.80804 3.56699L6.69193 2.68311L14.0089 10L6.69193 17.317L5.80804 16.4331L12.2406 10L5.80804 3.56699Z"
          fill={hoverAnimation.fill}
        />
      </svg>
    </div>
  );
};

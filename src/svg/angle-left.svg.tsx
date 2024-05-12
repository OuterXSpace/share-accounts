import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export const AngleLeft: React.FC = () => {
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
          d="M14.0089 3.56699L13.125 2.68311L5.80809 10L13.125 17.317L14.0089 16.4331L7.57634 10L14.0089 3.56699Z"
          fill={hoverAnimation.fill}
        />
      </svg>
    </div>
  );
};

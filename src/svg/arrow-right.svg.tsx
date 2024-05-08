import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

export const ArrowRight: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverAnimation = useSpring({
    fill: isHovered ? "#000000" : "#303231",
    config: { tension: 170, friction: 26 },
  });

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="44"
        height="14"
        viewBox="0 0 44 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 6.5L42.5 6.5V7.5L0.5 7.5L0.5 6.5Z"
          fill={hoverAnimation.fill}
        />
        <animated.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.2929 12.9999L42.2929 6.99992L36.2929 0.999925L37 0.292818L43.7071 6.99992L37 13.707L36.2929 12.9999Z"
          fill={hoverAnimation.fill}
        />
      </svg>
    </div>
  );
};

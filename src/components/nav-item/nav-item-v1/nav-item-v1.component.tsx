import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';

export interface INavItemProps {
  title: string;
}

export const NavItemV1: React.FC<INavItemProps> = ({ title }) => {
  const router = useRouter();

  const isActive =
    router.pathname === `/${title.toLowerCase()}` || (router.pathname === '/' && title.toLowerCase() === 'home');

  const [styles, api] = useSpring(() => ({
    width: isActive ? '100%' : '0%',
    config: { tension: 170, friction: 26 },
  }));

  return (
    <div className="cursor-pointer">
      <h3
        className="text-[22px] md:text-[26px] 2xl:text-[30px] uppercase font-semibold relative w-fit"
        onMouseEnter={() => api.start({ width: '100%' })}
        onMouseLeave={() => api.start({ width: '0%' })}
      >
        {title}
        {isActive ? (
          <span className="absolute left-0 bottom-0 h-[2px] bg-black w-full" />
        ) : (
          <animated.span className="absolute left-0 bottom-0 h-[2px] bg-black" style={styles} />
        )}
      </h3>
    </div>
  );
};

import { useSpring, animated } from 'react-spring';
import React from 'react';
import { NavItemV1 } from '../../nav-item/nav-item-v1/nav-item-v1.component';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { uIStore } from '../../../stores';

export interface IDrawerNavProps {
  navItems?: Record<string, any>[];
}

export const DrawerNavV1: React.FC<IDrawerNavProps> = observer((props) => {
  const { navItems = [] } = props;

  const { isOpenNavbar, setOpenNavbar } = uIStore;

  const drawerAnimation = useSpring({
    transform: isOpenNavbar ? 'translateX(0%)' : 'translateX(-100%)', // TranslateX to show/hide the drawer
    config: { tension: 170, friction: 26 }, // Animation configuration
  });

  const overlayAnimation = useSpring({
    opacity: isOpenNavbar ? 0.4 : 0,
    config: { tension: 170, friction: 26 },
    // delay: 500,
  });

  const [styles, api] = useSpring(() => ({
    stroke: '#303231', // Initial stroke color
    strokeWidth: 2, // Initial stroke width
    config: { tension: 170, friction: 26 }, // Animation configuration
  }));

  const toggleDrawer = () => {
    setOpenNavbar(!isOpenNavbar); // Toggle the state
  };

  return (
    <animated.nav className="fixed h-full w-full md:w-4/12 z-[100] flex" style={{ ...drawerAnimation }}>
      <nav className="h-[80%] md:h-full bg-white w-full z-[110] flex flex-col gap-6 md:gap-20 pl-8 md:pl-[24%] pr-8 md:pr-[10%] pt-8 md:pt-16">
        {/* Close button */}
        <div
          className="flex justify-end items-center cursor-pointer"
          onClick={toggleDrawer}
          onMouseEnter={
            () => api.start({ stroke: '#000000', strokeWidth: 2.5 }) // Animate x1 from 15 to 0 and change other styles
          }
          onMouseLeave={
            () => api.start({ stroke: '#303231', strokeWidth: 2 }) // Reset x1 to 15 and other styles
          }
        >
          <svg width="20" height="20" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <animated.line
              x1="1.46967"
              y1="26.9255"
              x2="26.9255"
              y2="1.46964"
              stroke={styles.stroke}
              strokeWidth={styles.strokeWidth}
            />
            <animated.line
              y1="-0.75"
              x2="36"
              y2="-0.75"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27.4558 27.4558)"
              stroke={styles.stroke}
              strokeWidth={styles.strokeWidth}
            />
          </svg>
        </div>
        {/* Navigation links */}
        <div className="flex flex-col gap-4 md:gap-6">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index} onClick={toggleDrawer}>
              <NavItemV1 title={item.title} />
            </Link>
          ))}
        </div>
      </nav>

      {/* Overlay */}
      {isOpenNavbar && (
        <animated.div
          className="h-full bg-black absolute w-full md:w-[300%] opacity-50"
          style={{ ...overlayAnimation }}
          onClick={toggleDrawer}
        />
      )}
    </animated.nav>
  );
});

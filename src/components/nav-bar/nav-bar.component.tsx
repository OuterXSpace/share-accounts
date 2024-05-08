import { useSpring, animated } from "react-spring";
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { uIStore } from "@/stores";
import { useWindowDimensions } from "@/hooks/use-window-dimention";
import Link from "next/link";
import { motion } from "framer-motion";

export interface INavBarProps {
  initialWidth: React.MutableRefObject<string>;
  initialPaddingRight: React.MutableRefObject<string>;
  isHome?: boolean;
}

export const NavBar: React.FC<INavBarProps> = observer(
  ({ initialWidth, initialPaddingRight, isHome = true }) => {
    const [scrollY, setScrollY] = React.useState(0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const { isOpenNavbar } = uIStore;

    const toggleDrawer = () => {
      uIStore.setOpenNavbar(!isOpenNavbar);
    };

    const { width: widthScreen } = useWindowDimensions();

    const [styles, api] = useSpring(() => ({
      x1: 15,
      stroke: "#303231",
      strokeWidth: 1.5,
      config: { tension: 170, friction: 26 },
    }));

    const springProps = useSpring({
      paddingTop:
        isHome && widthScreen > 768 && scrollY < 700
          ? 56
          : widthScreen <= 768
          ? 16
          : 24,
      paddingBottom:
        isHome && widthScreen > 768 && scrollY < 700
          ? 56
          : widthScreen <= 768
          ? 16
          : 24,
    });

    return (
      <motion.div
        className="fixed top-0 left-0 bg-white z-50"
        initial={{
          width: isHome && widthScreen > 768 ? "38%" : "95%",
        }}
        animate={{
          width: isHome
            ? widthScreen > 768 && scrollY <= 700
              ? "41.6666666667%"
              : "100%"
            : "100%",
          transition: { duration: 0.8 },
        }}
      >
        <animated.div
          className="w-full px-4 lg:pl-[90px] xl:pl-[102px] 2xl:pl-[150px] md:pr-[8%] py-4 md:py-6 flex justify-between items-center"
          style={springProps}
        >
          {/* Tilte */}
          <Link href={"/"}>
            <h3 className="flex items-start font-semibold text-[20px] md:text-[26px] gap-[2px]">
              DQH ARCHITECTS
              <span className="text-[14px] font-normal pt-[5px]">©</span>
            </h3>
          </Link>

          {/* Navbar */}
          <div className="flex flex-row-reverse md:flex-row items-center gap-6">
            <div
              className="cursor-pointer"
              onClick={toggleDrawer}
              onMouseEnter={() =>
                api.start({ x1: 0, stroke: "#000000", strokeWidth: 1.7 })
              }
              onMouseLeave={() =>
                api.start({ x1: 15, stroke: "#303231", strokeWidth: 1.5 })
              }
            >
              <animated.svg
                width="36"
                height="10"
                viewBox="0 0 36 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={styles}
              >
                <animated.line y1="1.25" x2="36" y2="1.25" />
                <animated.line x1={styles.x1} y1="9.25" x2="36" y2="9.25" />
              </animated.svg>
            </div>
            <h4 className="font-base relative font-medium">
              EN
              <span className="w-full h-[1.5px] bg-[#303231] absolute bottom-0 left-0" />
            </h4>
          </div>
        </animated.div>
      </motion.div>
    );
  }
);

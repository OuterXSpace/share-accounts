import React from 'react';
import gsap from 'gsap-trial/dist/gsap';
import { SplitText } from 'gsap-trial/dist/SplitText';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { HoverFloatTextProp } from './hover-float-text.type';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const HoverFloatText: React.FC<HoverFloatTextProp> = (props) => {
  const { children } = props;

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText, ScrollTrigger);

      const showTitleAndAnimate = (title: HTMLElement) => {
        const childSplit = new SplitText(title, {
          type: 'lines',
          linesClass: 'split-child',
        });

        gsap.from(childSplit.lines, {
          scrollTrigger: {
            trigger: title,
            start: 'top 120%',
            end: 'bottom 100%',
            toggleActions: 'play none none none',
          },
          duration: 1.2,
          yPercent: 200,
          ease: 'power4.out',
          skewY: 6,
          stagger: 0.15,
          opacity: 0,
        });
      };

      const headings = gsap.utils.toArray('h2, h3, h4, p, .footer-menu .link');

      headings.forEach((title, index) => {
        (title as HTMLElement).style.visibility = 'hidden';
        setTimeout(() => {
          (title as HTMLElement).style.visibility = 'visible';
          showTitleAndAnimate(title as HTMLElement);
        }, 0 * index);
      });
    },
    { revertOnUpdate: true },
  );

  return (
    <motion.div
      className="cta-text-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-inside"
        initial={{ opacity: 0, y: '-3.82vw' }}
        animate={{ opacity: 1, y: '0vw' }}
        whileHover={{ y: '-3.82vw' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

import React, { useRef } from 'react';
import gsap from 'gsap-trial/dist/gsap';
import { useGSAP } from '@gsap/react';
import { ScrambleTextPlugin } from 'gsap-trial/dist/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { SplitText } from 'gsap-trial/dist/SplitText';
import { HoverChangeTextProp } from './hover-change-text.type';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrambleTextPlugin);

export const HoverChangeText: React.FC<HoverChangeTextProp> = (props) => {
  const { id, children } = props;

  const textContainerRef = useRef<HTMLDivElement>(null);

  const animateHoverScramble = (textContainer: HTMLElement, newText: string) => {
    gsap.to(textContainer, {
      scrambleText: {
        text: newText,
        chars: 'ABC*abc*123!*',
        speed: 1,
      },
      ease: 'linear',
      duration: 0.5,
    });
  };

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(`.${id}`) as HTMLElement[];

      elements.forEach((textContainer, index) => {
        const newText = textContainer.textContent?.trim();
        const delay = index * 0.2;
        const duration = 1.2;

        gsap.from(textContainer, {
          scrollTrigger: textContainer,
          duration,
          yPercent: 200,
          ease: 'power4.out',
          skewY: 6,
          opacity: 0,
          onComplete: () => {
            gsap.to(textContainer, {
              scrambleText: {
                text: newText,
                chars: 'ABC*abc*123!*',
                speed: 1,
              },
              ease: 'linear',
              duration: 0.5,
            });
          },
          delay,
        });

        textContainer.addEventListener('mouseover', () => {
          animateHoverScramble(textContainer, newText);
        });
      });
    },
    { scope: textContainerRef, revertOnUpdate: true },
  );

  return <div ref={textContainerRef}>{children}</div>;
};

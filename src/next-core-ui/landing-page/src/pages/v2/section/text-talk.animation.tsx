import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap-trial/dist/gsap';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { SplitText } from 'gsap-trial/dist/SplitText';
import { ScrambleTextPlugin } from 'gsap-trial/dist/ScrambleTextPlugin';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const TextTalkAnimation: React.FC = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (textContainerRef.current) {
      const elements = gsap.utils.toArray('.text-container') as HTMLElement[];

      elements.forEach((textContainer, index) => {
        const newText = textContainer.textContent?.trim();

        // Calculate delay based on index to stagger animations
        const delay = index * 0.2; // Adjust delay as needed
        const duration = 1.2; // Duration for SplitText animation

        if (!textContainer.closest('.cta-text-block')) {
          gsap.from(textContainer, {
            scrollTrigger: textContainer,
            duration,
            yPercent: 200,
            ease: 'power4.out',
            skewY: 6,
            opacity: 0,
            onComplete: () => {
              // ScrambleText animation
              gsap.to(textContainer, {
                scrambleText: {
                  text: newText,
                  chars: 'ABC*abc*123!*', // Set scramble complexity with custom characters
                  speed: 1, // Set scramble speed
                },
                ease: Linear.easeNone,
                duration: 0.5, // Duration for ScrambleText animation
              });
            },
            delay, // Apply staggered delay to the SplitText animation
          });
        }

        // Hover animation
        textContainer.addEventListener('mouseover', () => {
          animateHoverScramble(textContainer, newText);
        });
      });
    }
  }, []);

  // Function to animate scramble text on hover
  const animateHoverScramble = (textContainer: HTMLElement, newText: string) => {
    gsap.to(textContainer, {
      scrambleText: {
        text: newText,
        chars: 'ABC*abc*123!*',
        speed: 1,
      },
      ease: Linear.easeNone,
      duration: 0.5,
    });
  };

  return (
    <div className="cta-text-block" ref={textContainerRef}>
      <div
        className="text-inside"
        style={{
          transform:
            'translate3d(0px, 0vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <h2 style={{ visibility: 'visible' }}>
          <div
            className="split-parent"
            style={{
              display: 'block',
              textAlign: 'start',
              position: 'relative',
            }}
          >
            <div
              className="split-child"
              style={{
                display: 'block',
                textAlign: 'start',
                position: 'relative',
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                opacity: 1,
                transform: 'translate(0px, 0px)',
              }}
            >
              LET’S TALK
            </div>
          </div>
        </h2>
        <h2 style={{ visibility: 'visible' }}>
          <div
            className="split-parent"
            style={{
              display: 'block',
              textAlign: 'start',
              position: 'relative',
            }}
          >
            <div
              className="split-child"
              style={{
                display: 'block',
                textAlign: 'start',
                position: 'relative',
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                opacity: 1,
                transform: 'translate(0px, 0px)',
              }}
            >
              LET’S TALK
            </div>
          </div>
        </h2>
        <h2 style={{ visibility: 'visible' }}>
          <div
            className="split-parent"
            style={{
              display: 'block',
              textAlign: 'start',
              position: 'relative',
            }}
          >
            <div
              className="split-child"
              style={{
                display: 'block',
                textAlign: 'start',
                position: 'relative',
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                opacity: 1,
                transform: 'translate(0px, 0px)',
              }}
            >
              LET’S TALK
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

import React, { CSSProperties, useEffect, useRef } from 'react';
import gsap from 'gsap-trial/dist/gsap';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProp {
  text: string;
  style?: CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProp> = (props) => {
  const { text, style } = props;

  const textContainerRef = useRef<HTMLHeadingElement>(null); // Ref for text container

  useEffect(() => {
    // Animation logic
    const textContainer = textContainerRef.current;

    if (!textContainer) return;

    const newText = textContainer.textContent?.trim() || '';

    // Calculate delay based on index to stagger animations
    const delay = 0.2; // Adjust delay as needed

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
            ease: 'linear',
            duration: 0.5, // Duration for ScrambleText animation
          });
        },
        delay, // Apply staggered delay to the SplitText animation
      });
    }

    // Hover animation
    const animateHoverScramble = () => {
      if (textContainer) {
        gsap.to(textContainer, {
          scrambleText: {
            text: newText,
            chars: 'ABC*abc*123!*',
            speed: 1,
          },
          ease: 'linear',
          duration: 0.5,
        });
      }
    };

    textContainer.addEventListener('mouseover', animateHoverScramble);

    return () => {
      textContainer.removeEventListener('mouseover', animateHoverScramble);
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <h1 style={style} ref={textContainerRef} className="text-container">
      {text}
    </h1>
  );
};

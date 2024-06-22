import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface AnimatedTextProps {
  text: string;
}
const randomX = gsap.utils.random(-200, 200, 1, true);

export const AnimatedTest: React.FC<AnimatedTextProps> = ({ text }) => {
  const textRef = useRef<any>();
  const container = useRef<any>();
  const boxRef = useRef<any>();
  const boxRef2 = useRef<any>();
  const onClickBox = useRef<any>();
  const onLoadBox = useRef<any>();

  const [endX, setEndX] = useState(0);
  // Cách 2
  const { contextSafe } = useGSAP({ scope: container });

  const onClickGood2 = contextSafe(() => {
    gsap.to('box', {
      rotation: 180,
    });
  });

  // Cách 1

  useGSAP((context, contextSafeIn) => {
    gsap.to(onLoadBox.current, {
      rotation: 360,
      duration: 2,
    });

    const onClickGood = contextSafeIn(() => {
      gsap.to(onLoadBox.current, {
        rotation: 360,
        duration: 2,
      });
    });

    onClickBox?.current?.addEventListener('click', onClickGood);

    return () => {
      onClickBox?.current?.removeEventListener('click', onClickGood);
    };
  });

  useGSAP(
    () => {
      gsap.from('.circle', {
        scale: 0,
        duration: 1,
        repeat: -1,
        ease: 'power2.inOut',
        yoyo: true,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      gsap.to('.box', {
        x: endX,
        duration: 1,
        delay: 0.5,
      });
    },
    { dependencies: [endX], scope: container, revertOnUpdate: true },
  );

  // useGSAP(() => {
  //   gsap.to(box.current, { x: 360 });
  //   gsap.timeline().to(box.current, { x: 1800 });

  //   const split = SplitText.create(textRef.current, { type: 'chars' });
  //   gsap.from(split.chars, {});

  //   ScrollTrigger.create({});
  // });

  return (
    <>
      <div ref={container} className="app">
        <div className="circle gradient-blue">1</div>
        <div className="circle gradient-blue">2</div>
        <div className="circle gradient-blue">3</div>
        <div className="circle gradient-blue">4</div>
      </div>
      <div ref={container} className="app">
        <button className="" onClick={() => setEndX(randomX())}>
          Pass in random value value
        </button>
        <div className="box gradient-blue" ref={boxRef}>
          {endX}
        </div>
      </div>
      <div ref={container} className="app">
        <div className="box gradient-blue" ref={onLoadBox}>
          OnLoad1
        </div>
        <button className="" ref={onClickBox}>
          OnClick1
        </button>
      </div>
      <div ref={container} className="app">
        <div className="box gradient-blue" ref={boxRef2}>
          Box 2
        </div>
        <button className="" onClick={onClickGood2}>
          onClickGood2
        </button>
      </div>
      {/* <div ref={textRef} className="text-container">
        {text}
      </div> */}
    </>
  );
};

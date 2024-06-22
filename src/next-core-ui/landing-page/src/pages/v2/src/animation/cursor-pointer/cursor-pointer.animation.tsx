import React from 'react';
import gsap from 'gsap-trial/dist/gsap';
import { useGSAP } from '@gsap/react';
import { CursorPointerProp } from './cursor-pointer.type';

gsap.registerPlugin(useGSAP);

export const CursorPointer: React.FC<CursorPointerProp> = () => {
  useGSAP(() => {
    const cursor = document.querySelector('#cursor');
    const mouse = { x: -100, y: -100 };
    let isMoving = false;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const updateCoordinates = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
    };

    const stopMoving = () => {
      isMoving = false;
    };

    const animateCursor = () => {
      if (isMoving) {
        gsap.to(cursor, { duration: 0.5, x: mouse.x, y: mouse.y, ease: 'power2.out' });
      }
      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    window.addEventListener('mousemove', updateCoordinates);
    window.addEventListener('mousedown', stopMoving);
    window.addEventListener('mouseup', updateCoordinates);

    return () => {
      window.removeEventListener('mousemove', updateCoordinates);
      window.removeEventListener('mousedown', stopMoving);
      window.removeEventListener('mouseup', updateCoordinates);
    };
  });

  return (
    <div
      id="cursor"
      className="cursor"
      style={{
        translate: 'none',
        rotate: 'none',
        scale: 'none',
        transform: 'translate(-50%, -50%) translate3d(353px, 253px, 0px)',
        opacity: 1,
        display: 'block',
      }}
    >
      <div className="cursor__circle" />
    </div>
  );
};

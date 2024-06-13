import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export const AnimationCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');
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
  }, []);

  return (
    <div
      id="cursor"
      className="cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <div
        className="cursor__circle"
        style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'red' }}
      />
    </div>
  );
};

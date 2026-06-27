import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Cubes from '../Cubes/Cubes';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const vLineRef = useRef(null);
  const hLineRef = useRef(null);
  const cubesWrapperRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }
    });

    tl.fromTo(vLineRef.current, { scaleY: 0 }, { scaleY: 1, duration: 1.2, ease: 'expo.inOut' })
      .fromTo(hLineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'expo.inOut' }, "<0.2")
      .fromTo(cubesWrapperRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.inOut' }, "-=0.8");

    // Hold to let Cubes animation run a bit
    tl.to({}, { duration: 2.0 });

    // Animate out
    tl.to(cubesWrapperRef.current, { opacity: 0, duration: 0.6, ease: 'power2.inOut' })
      .to(hLineRef.current, { scaleX: 0, duration: 0.8, ease: 'expo.inOut' }, "<0.1")
      .to(vLineRef.current, { scaleY: 0, duration: 0.8, ease: 'expo.inOut' }, "<0.1")
      .to(containerRef.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, "-=0.4");

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="preloader-container" ref={containerRef}>
      <div 
        ref={cubesWrapperRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Cubes 
          gridSize={8}
          maxAngle={60}
          radius={4}
          borderStyle="1px solid rgba(255,255,255,0.05)"
          faceColor="transparent"
          rippleColor="rgba(255,255,255,0.2)"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>
      <div className="preloader-line-v" ref={vLineRef} style={{ zIndex: 1 }}></div>
      <div className="preloader-line-h" ref={hLineRef} style={{ zIndex: 1 }}></div>
    </div>
  );
}

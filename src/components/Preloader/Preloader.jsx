import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrambleText from '../ScrambleText/ScrambleText';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const vLineRef = useRef(null);
  const hLineRef = useRef(null);
  const pillRef = useRef(null);

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
      .fromTo(pillRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, "-=0.6");

    // Hold to let ScrambleText finish
    tl.to({}, { duration: 1.8 });

    // Animate out
    tl.to(pillRef.current, { scale: 0, opacity: 0, duration: 0.4, ease: 'back.in(1.7)' })
      .to(hLineRef.current, { scaleX: 0, duration: 0.8, ease: 'expo.inOut' })
      .to(vLineRef.current, { scaleY: 0, duration: 0.8, ease: 'expo.inOut' }, "<0.1")
      .to(containerRef.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, "-=0.4");

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="preloader-container" ref={containerRef}>
      <div className="preloader-line-v" ref={vLineRef}></div>
      <div className="preloader-line-h" ref={hLineRef}></div>
      <div className="preloader-pill-wrapper">
        <div className="preloader-pill" ref={pillRef}>
          <div className="preloader-dot"></div>
          <span><ScrambleText text="LOADING" speed={40} delay={600} /></span>
        </div>
      </div>
    </div>
  );
}

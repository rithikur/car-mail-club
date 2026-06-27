import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './PillButton.css';

const PillButton = ({
  label = 'Button',
  onClick,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#000000',
  pillColor = '#ffffff',
  textColor = '#000000',
  hoverTextColor = '#ffffff'
}) => {
  const pillRef = useRef(null);
  const circleRef = useRef(null);
  const labelRef = useRef(null);
  const hoverLabelRef = useRef(null);
  const tlRef = useRef(null);
  const activeTweenRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      if (!pillRef.current || !circleRef.current || !labelRef.current || !hoverLabelRef.current) return;

      const pill = pillRef.current;
      const circle = circleRef.current;
      const label = labelRef.current;
      const white = hoverLabelRef.current;

      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      gsap.set(label, { y: 0 });
      gsap.set(white, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease, overwrite: 'auto' }, 0);
      tl.to(label, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
      
      gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
      tl.to(white, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);

      tlRef.current = tl;
    };

    layout();
    
    // Fallback resize/layout timing
    const timeout = setTimeout(layout, 100);
    window.addEventListener('resize', layout);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', layout);
    };
  }, [ease]);

  const handleEnter = () => {
    if (!tlRef.current) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tlRef.current.tweenTo(tlRef.current.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = () => {
    if (!tlRef.current) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tlRef.current.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--pill-text': textColor,
    '--hover-text': hoverTextColor
  };

  return (
    <button
      ref={pillRef}
      className={`pill-button ${className}`}
      style={cssVars}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      <span className="hover-circle" ref={circleRef} aria-hidden="true" />
      <span className="label-stack">
        <span className="pill-label" ref={labelRef}>{label}</span>
        <span className="pill-label-hover" ref={hoverLabelRef} aria-hidden="true">
          {label}
        </span>
      </span>
    </button>
  );
};

export default PillButton;

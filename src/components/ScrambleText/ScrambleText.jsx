import React, { useEffect, useRef, useState } from 'react';

const binary = '01';

export default function ScrambleText({ text, speed = 30, delay = 0 }) {
  const [displayText, setDisplayText] = useState(text.replace(/[a-zA-Z0-9]/g, '0'));
  const ref = useRef(null);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const startAnimation = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText((prev) => 
          text.split('').map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return binary[Math.floor(Math.random() * binary.length)];
          }).join('')
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, speed);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(startAnimation, delay);
        observer.unobserve(ref.current);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [text, speed, delay]);

  return <span ref={ref} style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>{displayText}</span>;
}

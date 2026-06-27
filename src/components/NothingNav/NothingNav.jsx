import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './NothingNav.css';

const navItems = [
  "THE BOXES",
  "HOW IT WORKS",
  "PRICING",
  "ABOUT US",
  "CONTACT"
];

export default function NothingNav({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        opacity: 1,
        pointerEvents: 'auto',
        ease: 'power3.inOut'
      });
      gsap.fromTo(linksRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.2 }
      );
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.4,
        opacity: 0,
        pointerEvents: 'none',
        ease: 'power3.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div className="nothing-nav-overlay" ref={overlayRef}>
      <div className="nothing-header-center">
        <div className="nothing-logo">CAR MAIL CLUB</div>
        <button className="nothing-close-btn" onClick={onClose}>
          <div className="burger-line-cross-1"></div>
          <div className="burger-line-cross-2"></div>
        </button>
      </div>
      <div className="nothing-nav-content">
        <div className="nothing-brand"></div>
        <nav className="nothing-links">
          {navItems.map((item, index) => {
            const href = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <a 
                key={index} 
                href={href} 
                className="nothing-link"
                ref={el => linksRef.current[index] = el}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  setTimeout(() => {
                    const target = document.querySelector(href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 400);
                }}
              >
                {item}
              </a>
            );
          })}
        </nav>
        <div className="nothing-footer">
          <a href="#account">ACCOUNT</a>
          <a href="#support">SUPPORT</a>
          <a href="#community">COMMUNITY</a>
          <a href="#about">ABOUT</a>
        </div>
      </div>
    </div>
  );
}

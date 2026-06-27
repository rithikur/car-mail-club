import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotGrid from './components/DotGrid/DotGrid';
import GooeyNav from './components/GooeyNav/GooeyNav';
import ScrollFloat from './components/ScrollFloat/ScrollFloat';
import BlurText from './components/BlurText/BlurText';
import MagicRings from './components/MagicRings/MagicRings';
import ScrambleText from './components/ScrambleText/ScrambleText';
import NothingNav from './components/NothingNav/NothingNav';
import Preloader from './components/Preloader/Preloader';
import ProcessSection from './components/ProcessSection/ProcessSection';
import QnASection from './components/QnASection/QnASection';
import SplashCursor from './components/SplashCursor/SplashCursor';
import MagicBento from './components/MagicBento/MagicBento';
import TrueFocus from './components/TrueFocus/TrueFocus';
import FooterSection from './components/FooterSection/FooterSection';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({
      duration: 2.5,
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);



    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);


  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      


      <div className="app-container">
        {/* Dynamic Background */}
        <div className="dot-grid-container">
        <DotGrid
          dotSize={6}
          gap={30}
          baseColor="#333333"
          activeColor="#ff3b30"
          proximity={150}
          shockRadius={300}
          shockStrength={8}
          resistance={600}
          returnDuration={1.2}
        />
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-center">
          <div className="logo">CAR MAIL CLUB</div>
          <button className="menu-btn hamburger-icon" onClick={() => setIsNavOpen(true)}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="hero">
        <SplashCursor 
          RAINBOW_MODE={false} 
          COLOR="#ffffff" 
          BACK_COLOR={{r: 0, g: 0, b: 0}}
          TRANSPARENT={true}
          SPLAT_RADIUS={0.3}
        />
        <div className="hero-stars"></div>
        <div className="hero-content">
          <TrueFocus 
            sentence="ENGINEERED TO PERFECTION"
            manualMode={false}
            blurAmount={6}
            borderColor="#ffffff"
            glowColor="rgba(255, 255, 255, 0.4)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.5}
            className="hero-title"
          />
          <div className="hero-subtitle">
            <ScrambleText text="[ SECTOR 07 // AUTOMOTIVE EXCELLENCE ]" speed={30} delay={1000} />
          </div>
          
          <div className="draw-arrow-scroll">
            <span className="scroll-label">EXPLORE</span>
            <svg viewBox="0 0 24 40" fill="none" stroke="#fff" strokeWidth="1.5">
              <path className="arrow-shaft" d="M12 0v38" />
              <path className="arrow-head" d="M4 30l8 8 8-8" />
            </svg>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="magic-rings-wrapper">
          <MagicRings
            color="#333333"
            colorTwo="#ffffff"
            ringCount={3}
            speed={0.5}
            attenuation={5}
            lineThickness={1}
            baseRadius={0.25}
            radiusStep={0.10}
            scaleRate={0.05}
            opacity={0.3}
            blur={0}
            noiseAmount={0.02}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0}
            hoverScale={1}
            parallax={0}
            clickBurst={false}
          />
        </div>
        <div className="about-content">
          <ScrollFloat
            animationDuration={1}
            ease="back.out(1.5)"
            scrollStart="top bottom-=10%"
            scrollEnd="bottom center"
            stagger={0.015}
            textClassName="about-reveal-text"
          >
            "Cars have always interested you? Our genes have been influenced by cars. It cannot be avoided."
          </ScrollFloat>
        </div>
      </section>

      {/* Horizontal Marquee Section */}
      <section className="marquee-section">
        <div className="marquee-container">
          <div className="marquee-text">UNCOMPROMISING DESIGN — RELENTLESS PERFORMANCE —</div>
          <div className="marquee-text">UNCOMPROMISING DESIGN — RELENTLESS PERFORMANCE —</div>
          <div className="marquee-text">UNCOMPROMISING DESIGN — RELENTLESS PERFORMANCE —</div>
          <div className="marquee-text">UNCOMPROMISING DESIGN — RELENTLESS PERFORMANCE —</div>
        </div>
      </section>

      {/* Luxury Grid Section */}
      <section className="grid-section">
        <div className="luxury-grid">
          <div className="grid-item">
            <div className="grid-item-label"><ScrambleText text="01 // AERO" speed={30} delay={200} /></div>
            <h3 className="grid-item-title">AERODYNAMICS</h3>
          </div>
          <div className="grid-item">
            <div className="grid-item-label"><ScrambleText text="02 // PWR" speed={30} delay={400} /></div>
            <h3 className="grid-item-title">POWERTRAIN</h3>
          </div>
          <div className="grid-item">
            <div className="grid-item-label"><ScrambleText text="03 // CHS" speed={30} delay={600} /></div>
            <h3 className="grid-item-title">CHASSIS</h3>
          </div>
          <div className="grid-item">
            <div className="grid-item-label"><ScrambleText text="04 // INT" speed={30} delay={800} /></div>
            <h3 className="grid-item-title">INTERIOR</h3>
          </div>
        </div>
      </section>

      {/* The Boxes / Inside Section */}
      <section id="the-boxes" className="bento-section">
        <div className="bento-header">
           <h2 className="massive-text">INSIDE THE BOX</h2>
        </div>
        <div className="bento-grid">
           <div className="bento-item item-large">
              <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop" alt="Precision Gear" />
              <div className="bento-overlay">
                 <ScrambleText text="[ 01 // EXCLUSIVE PARTS ]" speed={30} delay={0} />
              </div>
           </div>
           <div className="bento-item item-small offset-down">
              <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop" alt="Accessories" />
              <div className="bento-overlay">
                 <ScrambleText text="[ 02 // LIFESTYLE GEAR ]" speed={30} delay={200} />
              </div>
           </div>
           <div className="bento-item item-small">
              <img src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1974&auto=format&fit=crop" alt="Magazine" />
              <div className="bento-overlay">
                 <ScrambleText text="[ 03 // CURATED READS ]" speed={30} delay={400} />
              </div>
           </div>
           <div className="bento-item item-wide">
              <img src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=2071&auto=format&fit=crop" alt="Detailing" />
              <div className="bento-overlay">
                 <ScrambleText text="[ 04 // DETAILING KITS ]" speed={30} delay={600} />
              </div>
           </div>
        </div>
      </section>
      
      {/* Pricing / Reserve Now via MagicBento */}
      <MagicBento 
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={false}
        clickEffect={true}
        particleCount={40}
      />

      {/* Contact / Select Model */}
      <section id="contact" className="contact-section">
         <h2 className="hero-title" style={{ textAlign: 'center', lineHeight: '0.8' }}>
            SELECTING<br/>MODEL
         </h2>
      </section>

      {/* How it Works / Process */}
      <ProcessSection />

      {/* QnA Section */}
      <QnASection />

      {/* Nothing Style Navigation */}
      <NothingNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <FooterSection />

    </div>
    </>
  );
}

export default App;

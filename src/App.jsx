import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotGrid from './components/DotGrid/DotGrid';
import GooeyNav from './components/GooeyNav/GooeyNav';
import BlurText from './components/BlurText/BlurText';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import MagicRings from './components/MagicRings/MagicRings';
import ScrambleText from './components/ScrambleText/ScrambleText';
import NothingNav from './components/NothingNav/NothingNav';
import Preloader from './components/Preloader/Preloader';
import ProcessSection from './components/ProcessSection/ProcessSection';
import SplashCursor from './components/SplashCursor/SplashCursor';
import MagicBento from './components/MagicBento/MagicBento';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const marqueeRef = useRef(null);
  const marqueeTextRef = useRef(null);

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

    // Marquee Animation
    if (marqueeTextRef.current) {
      gsap.to(marqueeTextRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);


  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* Global Grid Overlay */}
      <div className="global-grid-lines">
        <div></div><div></div><div></div><div></div>
      </div>

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
        <div className="logo">CAR MAIL CLUB</div>
        <button className="menu-btn" onClick={() => setIsNavOpen(true)}>
          <ScrambleText text="MODELS +" speed={40} delay={500} />
        </button>
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
        <div className="hero-content">
          <BlurText
            text="ENGINEERED TO PERFECTION"
            delay={150}
            animateBy="words"
            direction="top"
            className="hero-title"
          />
          <div className="hero-subtitle">
            <ScrambleText text="[ SECTOR 07 // AUTOMOTIVE EXCELLENCE ]" speed={30} delay={1000} />
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
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={20}
            textClassName="about-reveal-text"
          >
            "Cars have always interested you? Our genes have been influenced by cars. It cannot be avoided."
          </ScrollReveal>
        </div>
      </section>

      {/* Horizontal Marquee Section */}
      <section className="marquee-section" ref={marqueeRef}>
        <div className="marquee-container" ref={marqueeTextRef}>
          <div className="marquee-text">UNCOMPROMISING DESIGN — RELENTLESS PERFORMANCE — UNCOMPROMISING DESIGN — RELENTLESS PERFORMANCE — </div>
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
      
      {/* How it Works / Process */}
      <ProcessSection />
      
      {/* Contact / Select Model */}
      <section id="contact" className="contact-section">
         <h2 className="hero-title" style={{ textAlign: 'center', lineHeight: '0.8' }}>
            SELECTING<br/>MODEL
         </h2>
      </section>

      {/* Pricing / Reserve Now via MagicBento */}
      <MagicBento 
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={false}
        clickEffect={true}
      />

      {/* Nothing Style Navigation */}
      <NothingNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </div>
    </>
  );
}

export default App;

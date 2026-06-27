import React from 'react';
import DotGrid from './components/DotGrid/DotGrid';
import GooeyNav from './components/GooeyNav/GooeyNav';
import BlurText from './components/BlurText/BlurText';
import './index.css';

function App() {
  const navItems = [
    { label: "The Boxes", href: "#boxes" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];


  return (
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
        <div className="logo">
          Car<span>Mail</span>Club
        </div>
        <div className="nav-wrapper">
          <GooeyNav
            items={navItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
        <div className="header-right">
          {/* Empty space to balance the logo and perfectly center the nav */}
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <div className="hero-badge">Premium Subscription</div>
          
          <BlurText
            text="The Ultimate Box for Gearheads"
            delay={150}
            animateBy="words"
            direction="top"
            className="hero-title"
          />
          
          <BlurText
            text="Curated car parts, exclusive detailing supplies, and automotive lifestyle gear delivered straight to your garage every month. Ignite your passion for driving."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="hero-description"
          />
          
          <div className="cta-group">
            <button className="btn btn-primary" id="join-club-btn">Join the Club</button>
            <button className="btn btn-secondary" id="view-past-boxes-btn">View Past Boxes</button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="features">
            <div className="feature">
              <span className="feature-value">10k+</span>
              <span className="feature-label">Active Members</span>
            </div>
            <div className="feature">
              <span className="feature-value">$150+</span>
              <span className="feature-label">Value Per Box</span>
            </div>
            <div className="feature">
              <span className="feature-value">100%</span>
              <span className="feature-label">Enthusiast Approved</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

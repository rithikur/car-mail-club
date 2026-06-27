import React from 'react';
import LaserFlow from '../LaserFlow/LaserFlow';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <LaserFlow 
        color="#ffffff" 
        fogIntensity={0.6}
        wispIntensity={7.0}
        flowSpeed={0.5}
        horizontalBeamOffset={0.324}
        verticalBeamOffset={0.068}
      />
      
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">SECTOR 07</h2>
          <p className="footer-tagline">UNCOMPROMISING DESIGN. RELENTLESS PERFORMANCE.</p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>VEHICLES</h4>
            <ul>
              <li><a href="#hyperion">HYPERION RS</a></li>
              <li><a href="#valkyrie">VALKYRIE X</a></li>
              <li><a href="#concept">CONCEPT 01</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>EXPLORE</h4>
            <ul>
              <li><a href="#technology">TECHNOLOGY</a></li>
              <li><a href="#design">DESIGN</a></li>
              <li><a href="#heritage">HERITAGE</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#careers">CAREERS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SECTOR 07 AUTOMOTIVE. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal">
            <a href="#privacy">PRIVACY POLICY</a>
            <a href="#terms">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

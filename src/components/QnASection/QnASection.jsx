import React, { useState } from 'react';
import SideRays from '../SideRays/SideRays';
import './QnASection.css';

const qnaData = [
  {
    question: "WHAT IS SECTOR 07?",
    answer: "Sector 07 is our secure facility where our curators meticulously source, authenticate, and assemble the finest automotive artifacts and gear globally before dispatching them directly to your garage."
  },
  {
    question: "ARE THE PARTS AUTHENTIC?",
    answer: "Absolutely. Every component, piece of literature, and accessory is verified by our in-house automotive historians and engineers. We do not compromise on provenance."
  },
  {
    question: "CAN I CANCEL MY SUBSCRIPTION?",
    answer: "Yes. You maintain full control over your telemetry. You can pause, modify, or terminate your subscription at any time through your encrypted account portal."
  },
  {
    question: "DO YOU SHIP INTERNATIONALLY?",
    answer: "We utilize premium global logistics to ensure your boxes arrive pristine, no matter your coordinates. International dispatch is fully supported."
  }
];

const QnASection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQnA = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="qna" className="qna-section rigid-grid" style={{ borderTop: 'none', position: 'relative' }}>
      {/* SideRays Background Effect */}
      <div className="qna-rays-bg">
        <SideRays
          speed={1.5}
          rayColor1="#ffffff"
          rayColor2="#666666"
          intensity={1.2}
          spread={1.5}
          origin="top-right"
          tilt={-10}
          saturation={0}
          blend={0.5}
          falloff={1.5}
          opacity={0.3}
        />
      </div>

      <div className="rigid-cell span-2 qna-header-cell">
        <h2 className="qna-title">Q N A</h2>
        <p className="cell-desc">DECRYPTED INFORMATION</p>
      </div>

      <div className="rigid-cell span-2 qna-list-cell">
        <div className="qna-list">
          {qnaData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`qna-item ${isActive ? 'active' : ''}`}
                onClick={() => toggleQnA(index)}
              >
                <div className="qna-question">
                  <span>{item.question}</span>
                  <span className="qna-icon">{isActive ? '-' : '+'}</span>
                </div>
                <div className="qna-answer" style={{ maxHeight: isActive ? '200px' : '0px', opacity: isActive ? 1 : 0, overflow: 'hidden', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QnASection;

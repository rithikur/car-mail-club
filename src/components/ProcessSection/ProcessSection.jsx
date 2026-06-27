import React from 'react';

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="rigid-grid">
      {/* Row 1: Curation */}
      <div className="rigid-cell">
        <div className="cell-header"><span className="cell-pill">.01</span></div>
        <h3 className="cell-title">Global <br/><em>Curation</em></h3>
        <div style={{marginTop: 'auto'}}>
          <p className="cell-desc">Our experts source the finest automotive gear, parts, and literature globally.</p>
        </div>
      </div>
      <div className="rigid-cell">
        <div className="cell-top-right">GLOBAL SOURCING<br/>PARTS & GEAR</div>
      </div>
      <div className="rigid-cell empty-cell"></div>
      <div className="rigid-cell empty-cell"></div>

      {/* Row 2: Packaging */}
      <div className="rigid-cell empty-cell"></div>
      <div className="rigid-cell empty-cell"></div>
      <div className="rigid-cell">
        <div className="cell-header"><span className="cell-pill">.02</span></div>
        <h3 className="cell-title">Sector 07 <br/><em>Packaging</em></h3>
        <div style={{marginTop: 'auto'}}>
          <p className="cell-desc">Each box is meticulously assembled in our secure sector 07 facility.</p>
        </div>
      </div>
      <div className="rigid-cell">
         <div className="cell-top-right">SECURE ASSEMBLY<br/>QUALITY CONTROL</div>
      </div>

      {/* Row 3: Dispatch */}
      <div className="rigid-cell">
        <div className="cell-header"><span className="cell-pill">.03</span></div>
        <h3 className="cell-title">Premium <br/><em>Dispatch</em></h3>
        <div style={{marginTop: 'auto'}}>
          <p className="cell-desc">Delivered via premium logistics directly to your garage.</p>
        </div>
      </div>
      <div className="rigid-cell">
         <div className="cell-top-right">DIRECT DELIVERY<br/>PREMIUM LOGISTICS</div>
      </div>
      <div className="rigid-cell empty-cell"></div>
      <div className="rigid-cell empty-cell"></div>
    </section>
  );
}

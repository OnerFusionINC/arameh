import React from 'react';

const Philosophy = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--primary-bg)', padding: '8rem 5%' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--accent-color)' }}>The Philosophy</h2>
        
        <p style={{ fontSize: '1.25rem', lineHeight: '2', marginBottom: '2rem', fontWeight: 300 }}>
          Arameh is a house devoted to the art of fine fragrance — where every candle and every perfume is created with intention, purity, and quiet luxury.
        </p>
        
        <p style={{ fontSize: '1.25rem', lineHeight: '2', marginBottom: '4rem', fontWeight: 300, color: 'var(--text-muted)' }}>
          We believe scent is not just worn.<br/>
          <span style={{ color: 'var(--text-main)' }}>It is remembered. It lingers. It defines.</span>
        </p>
        
        <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--accent-color)', margin: '0 auto 4rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', textAlign: 'left' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Candles</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 300 }}>
              Crafted using high-grade soy wax and premium fragrance compositions, Arameh candles are designed for a clean, slow, and refined burn.
            </p>
            <ul style={{ color: 'var(--text-muted)', fontWeight: 300, listStylePosition: 'inside', opacity: 0.8 }}>
              <li>Pure soy wax for a cleaner experience</li>
              <li>High-quality fragrance blends</li>
              <li>Elegant scent projection without heaviness</li>
              <li>A warm, immersive atmosphere</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Perfumes</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 300 }}>
              At the heart of Arameh lies our devotion to fine perfumery. Each creation is built like a signature — layered, expressive, and unforgettable.
            </p>
            <ul style={{ color: 'var(--text-muted)', fontWeight: 300, listStylePosition: 'inside', opacity: 0.8 }}>
              <li>High-grade fragrance notes</li>
              <li>Premium essential oils and compounds</li>
              <li>Carefully balanced compositions</li>
              <li>Long-lasting, refined blends</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '5rem' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-color)' }}>
              "Luxury is not loud. It is precise. It is intentional."
            </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

import React from 'react';

// We will map these items once images become available.
// For now, we will create beautifully styled placeholder blocks that fit the dark theme.
const ITEMS = [
  { name: "Aroma Candles", image: "/arameh/candle.png" },
  { name: "Intention Candle", image: "/arameh/candle.png" },
  { name: "Perfume", image: "/arameh/perfume.png" },
  { name: "Solid Perfume", image: "/arameh/perfume.png" },
  { name: "Attar", image: "/arameh/perfume.png" },
  { name: "Wax Sachets", image: "/arameh/candle.png" },
  { name: "Organic Teas", image: "/arameh/perfume.png" }, // placeholder fallback
];

const Gallery = () => {
  return (
    <section className="section container" style={{ paddingBottom: '8rem' }}>
       <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', color: 'var(--accent-color)' }}>
        Our Collection
      </h2>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}
      >
        {ITEMS.map((item, index) => (
          <div 
            key={index} 
            className="gallery-item"
            style={{
              position: 'relative',
              aspectRatio: '3 / 4',
              backgroundColor: 'var(--secondary-bg)',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            {/* Image layered below the gradient */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6,
                zIndex: 0
              }}
            />

            <div 
              className="gallery-image-placeholder"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, var(--secondary-bg) 0%, #1a1918 100%)',
                opacity: 0.2,
                transition: 'opacity 0.5s ease',
                zIndex: 1
              }}
            />
            
            <div 
              style={{
                position: 'relative',
                zIndex: 2,
                padding: '1.5rem',
                textAlign: 'center',
                width: '100%',
                background: 'linear-gradient(to top, rgba(13,13,12,0.9), transparent)',
                marginTop: 'auto'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', letterSpacing: '0.05em', color: 'var(--text-main)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-item:hover .gallery-image-placeholder {
          opacity: 0.4;
          transform: scale(1.05); /* very subtle scale for luxury feel */
        }
        .gallery-image-placeholder {
          transition: var(--transition-smooth);
        }
      `}</style>
    </section>
  );
};

export default Gallery;

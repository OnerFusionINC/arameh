import React from 'react';

// Dynamically import all images from the img directory
const imageModules = import.meta.glob('../assets/img/*.{png,jpg,jpeg,webp}', { eager: true });

const dynamicItems = Object.keys(imageModules).map((filePath) => {
  // Extract filename without extension (e.g., "Aroma_Candle")
  const fileName = filePath.split('/').pop().split('.')[0];
  
  // Format the name by replacing underscores/dashes with spaces
  const cleanName = fileName.replace(/[_-]/g, ' ');

  return {
    name: cleanName,
    image: imageModules[filePath].default || imageModules[filePath]
  };
});

const Gallery = () => {
  return (
    <section id="collection" className="section container" style={{ paddingBottom: '8rem' }}>
       <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', color: 'var(--accent-color)' }}>
        Our Collection
      </h2>

      {dynamicItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          Please add your product images to the <code>src/assets/img/</code> folder to see them here.
        </p>
      ) : (
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {dynamicItems.map((item, index) => (
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
                border: '1px solid rgba(0,0,0,0.05)'
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
                  zIndex: 0
                }}
              />

              {/* Light theme overlay on hover */}
              <div 
                className="gallery-image-placeholder"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'var(--secondary-bg)',
                  opacity: 0,
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
                  background: 'linear-gradient(to top, rgba(250,249,246,0.95), rgba(250,249,246,0))',
                  marginTop: 'auto'
                }}
              >
                <h3 style={{ fontSize: '1.2rem', letterSpacing: '0.05em', color: 'var(--text-main)', fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .gallery-item:hover .gallery-image-placeholder {
          opacity: 0.15;
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

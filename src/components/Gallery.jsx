import React from 'react';

// Dynamically import all images from the collection directory
const imageModules = import.meta.glob('../assets/img/collection/*.{png,jpg,jpeg,webp}', { eager: true });

const collectionItems = Object.keys(imageModules).sort().map((filePath, index) => {
  const fileIndex = (index + 1).toString().padStart(3, '0');
  
  return {
    id: index,
    src: imageModules[filePath].default || imageModules[filePath],
    category: 'Signature Collection',
    title: `Essence № ${fileIndex}`,
    description: 'A masterpiece created through the meticulous blending of rare, raw ingredients.'
  };
});

const Gallery = () => {
  return (
    <section id="collection" className="products-section" style={{ backgroundColor: 'var(--primary-bg)', padding: '10rem 5%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 
          className="fade-in"
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: '5rem', 
            textAlign: 'center', 
            color: 'var(--text-main)',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.05em'
          }}
        >
          The Complete Collection
        </h2>

        <div className="products-grid">
          {collectionItems.map((product) => (
            <div key={product.id} className="product-card fade-in">
              <div className="product-image-container">
                <span className="product-badge">COLLECTION</span>
                <img src={product.src} alt={product.title} className="product-image" />
              </div>
              
              <div className="product-info">
                <div className="product-meta">
                  <span className="category">{product.category}</span>
                </div>
                
                <h3 className="product-title" style={{ fontSize: '1.2rem' }}>{product.title}</h3>
                
                <p className="product-description" style={{ fontSize: '0.8rem' }}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

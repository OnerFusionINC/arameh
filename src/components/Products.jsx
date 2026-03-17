import React from 'react';

import product1 from '../assets/img/products/product_1.jpeg';
import product2 from '../assets/img/products/product_2.jpeg';
import product3 from '../assets/img/products/product_3.jpeg';
import product4 from '../assets/img/products/product_4.jpeg';
import product5 from '../assets/img/products/product_5.jpeg';
import product6 from '../assets/img/products/product_6.jpeg';
import product7 from '../assets/img/products/product_7.jpeg';
import product8 from '../assets/img/products/product_8.jpeg';

import video1 from '../assets/video/product_video_1.mp4';
import video2 from '../assets/video/product_video_2.mp4';
import video3 from '../assets/video/product_video_3.mp4';
import video4 from '../assets/video/product_video_4.mp4';

const productsData = [
  {
    id: 1,
    type: 'video',
    src: video1,
    badge: 'LUXURY',
    category: 'Ambient',
    title: 'Golden Glow',
    description: 'The flickering dance of light and shadow, capturing the essence of a serene evening.',
  },
  {
    id: 2,
    type: 'image',
    src: product1,
    badge: 'BEST SELLER',
    category: 'Gourmand',
    title: 'Velvet Rose & Oud',
    description: 'A decadent embrace of dark damask rose and smoky wood.',
  },
  {
    id: 3,
    type: 'video',
    src: video2,
    badge: 'NEW',
    category: 'Motion',
    title: 'Floral Whisper',
    description: 'Delicate petals caught in a gentle breeze, a symphony of white florals.',
  },
  {
    id: 4,
    type: 'image',
    src: product2,
    badge: '',
    category: 'Fresh',
    title: 'Midnight Jasmine',
    description: 'Blooming white florals under a moonlit sky.',
  },
  {
    id: 5,
    type: 'video',
    src: video3,
    badge: 'LIMITED',
    category: 'Ethereal',
    title: 'Scented Aura',
    description: 'An invisible trail of elegance that lingers long after you leave.',
  },
  {
    id: 6,
    type: 'image',
    src: product3,
    badge: 'NEW',
    category: 'Woody',
    title: 'Sandalwood Echo',
    description: 'The quiet resonance of sacred woods and amber.',
  },
  {
    id: 7,
    type: 'video',
    src: video4,
    badge: 'FRESHLY BREWED',
    category: 'Warm',
    title: 'Cinnamon Ritual',
    description: 'The comforting warmth of spiced tea on a rainy afternoon.',
  },
  {
    id: 8,
    type: 'image',
    src: product4,
    badge: '',
    category: 'Citrus',
    title: 'Bergamot Sunrise',
    description: 'Crisp morning air laced with Italian citrus.',
  },
];

const Products = () => {
  return (
    <section className="products-section" style={{ backgroundColor: 'var(--primary-bg)', padding: '6rem 5%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 
          className="fade-in"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '3rem', 
            textAlign: 'center', 
            color: 'var(--text-main)',
            fontFamily: 'var(--font-serif)',
          }}
        >
          Our Curated Collection
        </h2>

        <div className="products-grid">
          {productsData.map((product) => (
            <div key={product.id} className="product-card fade-in">
              <div className="product-image-container">
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                {product.type === 'video' ? (
                  <video 
                    src={product.src} 
                    className="product-image" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                  />
                ) : (
                  <img src={product.src} alt={product.title} className="product-image" />
                )}
              </div>
              
              <div className="product-info">
                <div className="product-meta">
                  <span className="category">{product.category}</span>
                </div>
                
                <h3 className="product-title">{product.title}</h3>
                
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

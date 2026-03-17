import React from 'react';

import product1 from '../assets/img/products/product_1.jpeg';
import product2 from '../assets/img/products/product_2.jpeg';
import product3 from '../assets/img/products/product_3.jpeg';
import product4 from '../assets/img/products/product_4.jpeg';
import product5 from '../assets/img/products/product_5.jpeg';
import product6 from '../assets/img/products/product_6.jpeg';
import product7 from '../assets/img/products/product_7.jpeg';
import product8 from '../assets/img/products/product_8.jpeg';

const productsData = [
  {
    id: 1,
    image: product1,
    badge: 'BEST SELLER',
    category: 'Gourmand',
    title: 'Velvet Rose & Oud',
    description: 'A decadent embrace of dark damask rose and smoky wood.',
    originalPrice: '₹2,499',
    price: '₹1,899',
  },
  {
    id: 2,
    image: product2,
    badge: '',
    category: 'Fresh',
    title: 'Midnight Jasmine',
    description: 'Blooming white florals under a moonlit sky.',
    originalPrice: '₹1,999',
    price: '₹1,499',
  },
  {
    id: 3,
    image: product3,
    badge: 'NEW',
    category: 'Woody',
    title: 'Sandalwood Echo',
    description: 'The quiet resonance of sacred woods and amber.',
    originalPrice: '₹2,799',
    price: '₹2,199',
  },
  {
    id: 4,
    image: product4,
    badge: '',
    category: 'Citrus',
    title: 'Bergamot Sunrise',
    description: 'Crisp morning air laced with Italian citrus.',
    originalPrice: '₹1,499',
    price: '₹1,199',
  },
  {
    id: 5,
    image: product5,
    badge: 'FRESHLY BREWED',
    category: 'Warm',
    title: 'Vanilla Bourbon',
    description: 'Poured over ice with a whisper of sweetness.',
    originalPrice: '₹2,199',
    price: '₹1,699',
  },
  {
    id: 6,
    image: product6,
    badge: 'SALE',
    category: 'Floral',
    title: 'Peony Blush',
    description: 'Soft petals wrapped in suede and red apple.',
    originalPrice: '₹1,899',
    price: '₹1,399',
  },
  {
    id: 7,
    image: product7,
    badge: '',
    category: 'Earthy',
    title: 'Vetiver Rain',
    description: 'The grounding scent of damp earth after a storm.',
    originalPrice: '₹2,299',
    price: '₹1,799',
  },
  {
    id: 8,
    image: product8,
    badge: 'LIMITED',
    category: 'Spicy',
    title: 'Cinnamon Ember',
    description: 'Glowing embers crackling on a winter evening.',
    originalPrice: '₹2,999',
    price: '₹2,499',
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
          Our Best Sellers
        </h2>

        <div className="products-grid">
          {productsData.map((product) => (
            <div key={product.id} className="product-card fade-in">
              <div className="product-image-container">
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-overlay">
                  <button className="quick-add-btn">QUICK ADD</button>
                </div>
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

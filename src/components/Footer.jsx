import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--secondary-bg)', padding: '6rem 5% 2rem', borderTop: '1px solid rgba(181,155,124,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4rem' }}>
        
        <div style={{ flex: '1 1 300px' }}>
          <img src="/footer.png" alt="Arameh" style={{ maxWidth: '180px', marginBottom: '1rem' }} />
          <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: '300px', marginBottom: '2rem' }}>
            Where scent becomes identity. A house devoted to the art of fine fragrance, purity, and quiet luxury.
          </p>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Contact</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={16} />
              <a href="mailto:Arameh_creatives@gmail.com" style={{ fontWeight: 300 }}>Arameh_creatives@gmail.com</a>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone size={16} />
              <a href="tel:+919769277555" style={{ fontWeight: 300 }}>9769277555</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone size={16} />
              <a href="tel:+919702077555" style={{ fontWeight: 300 }}>9702077555</a>
            </li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Social</h3>
          <a 
            href="https://www.instagram.com/p/DRTxybYjE2C/" 
            target="_blank" 
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontWeight: 300 }}
          >
            <Instagram size={18} />
            Follow us on Instagram
          </a>
        </div>
      </div>

      <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 300 }}>
        &copy; {new Date().getFullYear()} Arameh. All rights reserved | Designed By <a href="https://www.onerfusion.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>OnerFusion</a>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Collection', path: '/collection' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: isScrolled ? '1rem 5%' : '2rem 5%',
          backgroundColor: isScrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'var(--transition-smooth)',
          zIndex: 1000
        }}
      >
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '0.1em', fontWeight: 500 }}>
          <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>ARAMEH</Link>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    style={{ 
                      fontSize: '0.85rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.15em',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--accent-color)' : 'var(--text-main)',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'block' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'var(--primary-bg)',
          zIndex: 999,
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: mobileMenuOpen ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: location.pathname === link.path ? 'var(--accent-color)' : 'var(--text-main)',
                  textDecoration: 'none'
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;

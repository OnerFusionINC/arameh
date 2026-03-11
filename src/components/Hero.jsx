import React from 'react';

const Hero = () => {
  return (
    <section 
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '0 2rem',
        backgroundColor: 'var(--secondary-bg)', // A slightly different dark shade
        overflow: 'hidden'
      }}
    >
      {/* Decorative calm background elements could go here */}
      
      <div className="fade-in" style={{ zIndex: 2, maxWidth: '800px' }}>
        <h1 
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            letterSpacing: '0.05em',
            marginBottom: '1rem',
            color: 'var(--accent-color)'
          }}
        >
          ARAMEH
        </h1>
        <p 
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontWeight: 300,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)'
          }}
        >
          Where Scent Becomes Identity
        </p>
      </div>

      <div 
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          opacity: 0.6
        }}
      >
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--text-main)', margin: '10px auto 0' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

import React from 'react';

const Contact = () => {
  return (
    <section className="section container" style={{ paddingTop: '12rem', paddingBottom: '8rem', minHeight: '80vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--accent-color)' }}>Contact Us</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem', lineHeight: 1.8 }}>
          We would love to hear from you. For inquiries, collaborations, or simply to learn more about our scents, please reach out.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Email</h4>
            <a href="mailto:Arameh_creatives@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Arameh_creatives@gmail.com</a>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Phone</h4>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>9769277555</p>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>9702077555</p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Social</h4>
            <a href="https://www.instagram.com/p/DRTxybYjE2C/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

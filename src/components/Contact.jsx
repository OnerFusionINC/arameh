import React from 'react';

const Contact = () => {
  return (
    <section className="section container" style={{ paddingTop: '12rem', paddingBottom: '8rem', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--accent-color)' }}>Contact Us</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.2rem', lineHeight: 1.8 }}>
          We would love to hear from you. For inquiries, collaborations, or simply to learn more about our scents, please reach out using the form below.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', alignItems: 'center', textAlign: 'left' }}>
          
          <form 
            action="https://formsubmit.co/info@aramehcreatives.com" 
            method="POST"
            target="_blank"
            style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.aramehcreatives.com/contact.html" />
            <input type="hidden" name="_subject" value="New Arameh Website Inquiry!" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.85rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                placeholder="Your Name"
                style={{ padding: '0.8rem 1rem', backgroundColor: 'transparent', border: '1px solid rgba(181,155,124,0.4)', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.3s', fontSize: '1rem' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(181,155,124,0.4)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontSize: '0.85rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                placeholder="your.email@example.com"
                style={{ padding: '0.8rem 1rem', backgroundColor: 'transparent', border: '1px solid rgba(181,155,124,0.4)', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.3s', fontSize: '1rem' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(181,155,124,0.4)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.85rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Message</label>
              <textarea 
                name="message" 
                id="message" 
                required 
                rows="5"
                placeholder="How can we help you?"
                style={{ padding: '0.8rem 1rem', backgroundColor: 'transparent', border: '1px solid rgba(181,155,124,0.4)', color: 'var(--text-main)', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s', fontSize: '1rem', fontFamily: 'inherit' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(181,155,124,0.4)'}
              ></textarea>
            </div>

            <button 
              type="submit" 
              style={{ marginTop: '0.5rem', padding: '1rem 2rem', backgroundColor: 'var(--accent-color)', color: '#000', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 500, transition: 'opacity 0.3s', fontSize: '0.9rem' }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Send Message
            </button>
          </form>

          {/* Contact Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', maxWidth: '600px', borderTop: '1px solid rgba(181,155,124,0.2)', paddingTop: '3rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Email Direct</h4>
                <a href="mailto:info@aramehcreatives.com" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>info@aramehcreatives.com</a>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Phone</h4>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>+91 97692 77555</p>
                <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1.1rem' }}>+91 97020 77555</p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Social</h4>
                <a href="https://www.instagram.com/p/DRTxybYjE2C/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Instagram</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;


import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail('');
  };

  const footerStyles = {
    footer: {
      position: 'relative',
      background: 'linear-gradient(135deg, #faf8f5 0%, #f9f4f0 50%, #faf6f2 100%)',
      overflow: 'hidden',
      boxShadow: '0 -5px 30px rgba(0, 0, 0, 0.1)'
    },
    decorativeCircle1: {
      position: 'absolute',
      top: '-120px',
      right: '-120px',
      width: '300px',
      height: '300px',
      background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.1), rgba(218, 165, 132, 0.1))',
      borderRadius: '50%',
      filter: 'blur(60px)'
    },
    decorativeCircle2: {
      position: 'absolute',
      bottom: '-150px',
      left: '-100px',
      width: '350px',
      height: '350px',
      background: 'linear-gradient(45deg, rgba(231, 213, 179, 0.1), rgba(212, 163, 115, 0.1))',
      borderRadius: '50%',
      filter: 'blur(80px)'
    },
    container: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 30px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginBottom: '50px'
    },
    brandSection: {
      textAlign: 'left'
    },
    logo: {
      fontFamily: '"Times New Roman", serif',
      fontSize: '42px',
      fontWeight: '400',
      color: '#2d2d2d',
      letterSpacing: '3px',
      marginBottom: '15px',
      background: 'linear-gradient(135deg, #d4a373, #da9984)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    decorativeLine: {
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, #d4a373, #da9984)',
      borderRadius: '2px',
      marginBottom: '20px'
    },
    brandDescription: {
      color: '#666',
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '30px'
    },
    newsletterSection: {
      marginTop: '20px'
    },
    newsletterTitle: {
      color: '#2d2d2d',
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    newsletterForm: {
      display: 'flex',
      gap: '0'
    },
    emailInput: {
      flex: 1,
      padding: '12px 16px',
      fontSize: '14px',
      border: '2px solid #e8e8e8',
      borderRight: 'none',
      borderRadius: '8px 0 0 8px',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.8)',
      transition: 'all 0.3s ease'
    },
    submitButton: {
      padding: '12px 20px',
      background: 'linear-gradient(135deg, #d4a373, #da9984)',
      color: 'white',
      border: 'none',
      borderRadius: '0 8px 8px 0',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: 'scale(1)'
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    sectionTitle: {
      color: '#2d2d2d',
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      color: '#666',
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '12px'
    },
    icon: {
      width: '18px',
      height: '18px',
      color: '#d4a373',
      marginTop: '2px',
      flexShrink: 0
    },
    socialSection: {
      textAlign: 'center'
    },
    socialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px',
      marginBottom: '20px'
    },
    socialIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.1), rgba(218, 165, 132, 0.1))',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(212, 163, 115, 0.2)'
    },
    socialIconHover: {
      background: 'linear-gradient(135deg, #d4a373, #da9984)',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 25px rgba(212, 163, 115, 0.3)'
    },
    bottomSection: {
      borderTop: '1px solid rgba(212, 163, 115, 0.2)',
      paddingTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px'
    },
    copyright: {
      color: '#999',
      fontSize: '13px'
    },
    scrollTopButton: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, #d4a373, #da9984)',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      transition: 'all 0.3s ease',
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(212, 163, 115, 0.4)'
    },
    quickLinks: {
      display: 'flex',
      gap: '25px',
      flexWrap: 'wrap'
    },
    quickLink: {
      color: '#666',
      fontSize: '13px',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    }
  };

  const SocialIcon = ({ platform, children, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        style={{
          ...footerStyles.socialIcon,
          ...(isHovered ? footerStyles.socialIconHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      <footer style={footerStyles.footer}>
        {/* Decorative Background */}
        <div style={footerStyles.decorativeCircle1}></div>
        <div style={footerStyles.decorativeCircle2}></div>
        
        <div style={footerStyles.container}>
          <div style={footerStyles.grid}>
            
            {/* Brand Section */}
            <div style={footerStyles.brandSection}>
              <h2 style={footerStyles.logo}>BEAUTY EASE</h2>
              <div style={footerStyles.decorativeLine}></div>
              <p style={footerStyles.brandDescription}>
                Where elegance meets expertise. Experience luxury beauty services in our serene sanctuary of style and sophistication.
              </p>
              
              <div style={footerStyles.newsletterSection}>
                <h4 style={footerStyles.newsletterTitle}>Stay Beautiful</h4>
                <form style={footerStyles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      ...footerStyles.emailInput,
                      borderColor: email ? '#d4a373' : '#e8e8e8'
                    }}
                    required
                  />
                  <button 
                    type="submit"
                    style={footerStyles.submitButton}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 5px 20px rgba(212, 163, 115, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div style={footerStyles.infoSection}>
              <h3 style={footerStyles.sectionTitle}>
                <span style={footerStyles.icon}>📍</span>
                Contact Us
              </h3>
              <div style={footerStyles.infoItem}>
                <span style={footerStyles.icon}>📍</span>
                <span>123 Beauty Lane, Style City, SC 12345</span>
              </div>
              <div style={footerStyles.infoItem}>
                <span style={footerStyles.icon}>📞</span>
                <span>(555) 123-4567</span>
              </div>
              <div style={footerStyles.infoItem}>
                <span style={footerStyles.icon}>✉️</span>
                <span>hello@cheriesalon.com</span>
              </div>
              <div style={footerStyles.infoItem}>
                <span style={footerStyles.icon}>🌐</span>
                <span>www.cheriesalon.com</span>
              </div>
            </div>

            {/* Hours */}
            <div style={footerStyles.infoSection}>
              <h3 style={footerStyles.sectionTitle}>
                <span style={footerStyles.icon}>⏰</span>
                Opening Hours
              </h3>
              <div style={footerStyles.infoItem}>
                <span style={footerStyles.icon}>📅</span>
                <div>
                  <div>Mon - Fri: 9:00 AM - 7:00 PM</div>
                  <div>Saturday: 10:00 AM - 6:00 PM</div>
                  <div>Sunday: 11:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div style={footerStyles.socialSection}>
              <h3 style={footerStyles.sectionTitle}>
                <span style={footerStyles.icon}>💫</span>
                Follow Us
              </h3>
              <div style={footerStyles.socialGrid}>
                <SocialIcon platform="facebook" onClick={() => alert('Opening Facebook...')}>
                  <span style={{fontSize: '18px'}}>📘</span>
                </SocialIcon>
                <SocialIcon platform="instagram" onClick={() => alert('Opening Instagram...')}>
                  <span style={{fontSize: '18px'}}>📷</span>
                </SocialIcon>
                <SocialIcon platform="twitter" onClick={() => alert('Opening Twitter...')}>
                  <span style={{fontSize: '18px'}}>🐦</span>
                </SocialIcon>
                <SocialIcon platform="pinterest" onClick={() => alert('Opening Pinterest...')}>
                  <span style={{fontSize: '18px'}}>📌</span>
                </SocialIcon>
              </div>
              <p style={{...footerStyles.brandDescription, textAlign: 'center', marginTop: '15px'}}>
                Join our beauty community and stay updated with the latest trends and tips!
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div style={footerStyles.bottomSection}>
            <div style={footerStyles.copyright}>
              © 2025 CHÉRIE Beauty Salon. All rights reserved.
            </div>
            <div style={footerStyles.quickLinks}>
              <a href="#" style={footerStyles.quickLink} 
                 onMouseEnter={(e) => e.target.style.color = '#d4a373'}
                 onMouseLeave={(e) => e.target.style.color = '#666'}>
                Privacy Policy
              </a>
              <a href="#" style={footerStyles.quickLink}
                 onMouseEnter={(e) => e.target.style.color = '#d4a373'}
                 onMouseLeave={(e) => e.target.style.color = '#666'}>
                Terms of Service
              </a>
              <a href="#" style={footerStyles.quickLink}
                 onMouseEnter={(e) => e.target.style.color = '#d4a373'}
                 onMouseLeave={(e) => e.target.style.color = '#666'}>
                Booking Policy
              </a>
              <a href="#" style={footerStyles.quickLink}
                 onMouseEnter={(e) => e.target.style.color = '#d4a373'}
                 onMouseLeave={(e) => e.target.style.color = '#666'}>
                Gift Cards
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          style={footerStyles.scrollTopButton}
          onClick={scrollToTop}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 25px rgba(212, 163, 115, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(212, 163, 115, 0.4)';
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
import './Footer.css'; // Assuming you have a CSS file for styling
const Footer = () => {
  return (
    <footer className="cherie-footer">
      <div className="footer-content">
        <div className="footer-logo">CHERIE</div>
        <div className="footer-contact">
          <p>123 Beauty Lane, Style City</p>
          <p>Tel: (555) 123-4567</p>
          <p>Email: info@cheriesalon.com</p>
        </div>
        <div className="footer-hours">
          <p><strong>Hours:</strong></p>
          <p>Monday-Friday: 9am-7pm</p>
          <p>Saturday: 10am-6pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="footer-social">
          <span className="social-icon">FB</span>
          <span className="social-icon">IG</span>
          <span className="social-icon">TW</span>
          <span className="social-icon">PT</span>
        </div>
      </div>
      <div className="footer-copyright">
        © 2025 CHERIE Beauty Salon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
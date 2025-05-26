import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">
        <span className="navbar-logo-text">BEAUTY EASE</span> 
      </div>
      
      {/* Mobile Menu Button */}
      <div className="navbar-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </div>
      
      {/* Navigation Links */}
      <nav className={`navbar-links ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-close-button" onClick={() => setIsMenuOpen(false)}>
          <X size={24} />
        </div>
        <ul>
          <li className="active">
            <a href="#">
              SERVICES
              <span className="navbar-link-indicator"></span>
            </a>
          </li>
          <li>
            <a href="#">
              ABOUT US
              <span className="navbar-link-indicator"></span>
            </a>
          </li>
          <li>
            <a href="#">
              LOCATION
              <span className="navbar-link-indicator"></span>
            </a>
          </li>
          <li>
            <a href="#">
              CONTACT US
              <span className="navbar-link-indicator"></span>
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="navbar-actions">
        <div className="primary-button">LOGIN</div>
      </div>
    </header>
  );
};

export default Navbar; 
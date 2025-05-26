import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} style={{padding: '20px 40px'}}>
      <div className="navbar-logo">
        <NavLink
          to="/"
          className="navbar-logo-text"
          onClick={handleLinkClick}
        >
          BEAUTY EASE
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="navbar-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </div>

      {/* Navigation Links */}
      <nav className={`navbar-links ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              HOME
              <span className="navbar-link-indicator"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              SERVICES
              <span className="navbar-link-indicator"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              ABOUT US
              <span className="navbar-link-indicator"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              BOOKING
              <span className="navbar-link-indicator"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              CONTACT US
              <span className="navbar-link-indicator"></span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="navbar-actions">
        <NavLink
          to="/login"
          className={({ isActive }) => `primary-button ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          LOGIN
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
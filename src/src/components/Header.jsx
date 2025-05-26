import { Leaf, Star } from "lucide-react";
import "./Header.css";
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="header-container">
      <Navbar /> 
      {/* Hero Section */}
      <div className="hero-content">
        <div className="hero-overlay"></div>
        <div className="hero-title">
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <Star size={18} strokeWidth={1} className="decoration-star" />
            <div className="decoration-line"></div>
          </div>
          
          <h1>Premium Beauty Services</h1>

          <div className="hero-decoration">
            <Leaf size={60} strokeWidth={1} />
          </div>
          
          <p className="hero-text">
            Indulge in our curated collection of premium beauty services combining 
            state-of-the-art technology with luxury organic products. Experience the 
            perfect balance of nature and science for rejuvenation and radiance.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-button">BOOK NOW</button>
            <button className="primary-button">View Services</button>
          </div>
          
          <div className="credentials">
            <div className="credential-item">
              <span className="credential-number">24/7</span>
              <span className="credential-text">Available for You</span>
            </div>
            <div className="credential-divider"></div>
            <div className="credential-item">
              <span className="credential-number">95%</span>
              <span className="credential-text">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
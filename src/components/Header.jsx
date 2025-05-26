import { Leaf, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking");
  };

  const handleViewServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header-container">
      {/* Hero Section */}
      <div className="hero-content">
        <div className="hero-overlay"></div>
        <div className="hero-title">
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <Star size={18} strokeWidth={1} className="decoration-star" />
            <div className="decoration-line"></div>
          </div>
          
          <h1>Elevate your beauty routine -- digitally</h1>

          <div className="hero-decoration">
            <Leaf size={60} strokeWidth={1} />
          </div>
          
          <p className="hero-text">
          Step into the future of beauty care with our smart salon platform. Book appointments, manage services, and enjoy a seamless salon experience — all at your fingertips.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-button" onClick={handleBookNow}>BOOK NOW</button>
            <button className="primary-button" onClick={handleViewServices}>View Services</button>
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
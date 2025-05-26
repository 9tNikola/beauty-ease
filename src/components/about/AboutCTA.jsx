import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-decorations">
        <div className="cta-decoration cta-decoration-1" />
        <div className="cta-decoration cta-decoration-2" />
      </div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Experience Excellence?</h2>
          <p className="cta-subtitle">
            Join thousands who've discovered the future of beauty booking. 
            Your perfect beauty experience is just one click away.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn-primary">
              Book Your Appointment
            </button>
            <button className="cta-btn-secondary">
              Become a Partner
            </button>
          </div>
          
          <div className="cta-features">
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>Instant Booking</span>
            </div>
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>Verified Professionals</span>
            </div>
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>Money-back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA; 
import React from 'react';
import { Calendar } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Ready to Book Your Appointment?</h2>
        <p className="cta-subtitle">
          Join thousands of satisfied customers and experience beauty like never before
        </p>
        <a href="#book" className="btn-primary">
          Book Now <Calendar size={20} />
        </a>
      </div>
    </section>
  );
};

export default HomeCTA; 
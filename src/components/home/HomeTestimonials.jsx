import React from 'react';
import { useSelector } from 'react-redux';
import { Star } from 'lucide-react';

const HomeTestimonials = () => {
  const { testimonials } = useSelector((state) => state.home);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>What Our Clients Say</h2>
        <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)'}}>
          Real experiences from our satisfied customers
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#F7C52A" color="#F7C52A" />
                ))}
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <div className="testimonial-author">{testimonial.name}</div>
              <div className="testimonial-service">{testimonial.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials; 
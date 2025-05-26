import React from 'react';
import { useSelector } from 'react-redux';

const HomeServices = () => {
  const services = useSelector((state) => state.home?.services) || [];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Discover our wide range of professional beauty services designed to make you look and feel amazing
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">{service.image}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <a href="#book" className="service-button">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices; 
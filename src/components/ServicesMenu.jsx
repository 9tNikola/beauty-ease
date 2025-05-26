import { useState } from "react";
import Header from "./Header";
import ServiceNavigation from "./ServiceNavigation";
import ServiceContent from "./ServiceContent";
import { serviceCategories, allServices } from "../data/services/serviceData";
import '../pages/Services/Services.css';

const ServicesMenu = () => {
  const [activeCategory, setActiveCategory] = useState("hair");

  const handleNavClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleBookAppointment = () => {
    alert("Booking appointment for " + activeCategory + " services");
  };

  return (
    <div className="services-menu">
      <Header />
      <div className="services-content" id="services">
        <ServiceNavigation
          categories={serviceCategories}
          activeCategory={activeCategory}
          onNavClick={handleNavClick}
        />
        <ServiceContent
          services={allServices[activeCategory]}
          activeCategory={activeCategory}
        />
      </div>
      {/* Enhanced Booking Section */}
      <div className="booking-container">
        <div className="booking-header">
          <h2 className="booking-title">Ready to Book?</h2>
          <p className="booking-subtitle">
            Transform your look with our professional services. Book your appointment today and experience the difference.
          </p>
          <button className="book-button" onClick={handleBookAppointment}>
          <span>Book Appointment</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;

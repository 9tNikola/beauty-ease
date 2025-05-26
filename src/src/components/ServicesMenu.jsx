import { useState } from "react";
import Header from "./Header";
import ServiceNavigation from "./ServiceNavigation";
import ServiceContent from "./ServiceContent";
import Footer from "./Footer";
import { serviceCategories, allServices } from "../data/services/serviceData";

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
      <div className="services-content">
        <ServiceNavigation
          categories={serviceCategories}
          activeCategory={activeCategory}
          onNavClick={handleNavClick}
        />
        <ServiceContent
          services={allServices[activeCategory]}
          onBookAppointment={handleBookAppointment}
          activeCategory={activeCategory}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesMenu;

import './ServiceContent.css';
import { Clock, Star, Award, Sparkles } from 'lucide-react';

const ServiceContent = ({ services, activeCategory }) => {
  // Ensure services has the required structure
  const safeServices = services || {
    title: "",
    description: "",
    categories: []
  };

  // Get category icon based on active category
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Haircut': Star,
      'Color': Sparkles,
      'Beauty Consultation': Award,
      'Style Consultation': Star,
      'Hair Measurements': Clock,
      'Treatment Planning': Award,
      'Facial': Sparkles,
      'Massage': Award,
      'Body Treatments': Star,
      'Nail Art': Sparkles,
      'Manicure': Clock,
      'Pedicure': Clock,
      'Makeup': Sparkles,
      'Bridal': Star,
      'Spa': Award,
      'Booking': Clock
    };
    
    return iconMap[categoryName] || Sparkles;
  };

  return (
    <div className="content-area">
      {/* Hero Section */}
      <div className="content-hero">
        <div className="hero-content2">
          <h1 className='catetory-hero-title'>{safeServices.title || 'Our Services'}</h1>
          {safeServices.description && (
            <p className="intro-text">
              {safeServices.description}
            </p>
          )}
        </div>
      </div>

      {/* Services Container */}
      <div className="services-container">
        <div className="services-grid">
          {safeServices.categories?.map((category, index) => {
            const IconComponent = getCategoryIcon(category.category);
            
            return (
              <div className="service-category" key={index}>
                <div className="category-header">
                  <div className="category-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3>{category.category}</h3>
                </div>
                
                <div className="services-list">
                  {category.services?.map((service, serviceIndex) => (
                    <div className="service-item" key={serviceIndex}>
                      <div className="service-header">
                        <h4>{service.name}</h4>
                        <div className="service-price">{service.price}</div>
                      </div>
                      
                      {service.description && (
                        <p className="service-description">{service.description}</p>
                      )}
                      
                      {service.duration && (
                        <span className="service-duration">
                          <Clock size={12} /> {service.duration}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
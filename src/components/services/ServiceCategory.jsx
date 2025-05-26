const ServiceCategory = ({ category }) => {
  return (
    <div className="service-category">
      <h3 className="category-title">{category.category}</h3>
      <div className="services-list">
        {category.services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-header">
              <h4 className="service-name">{service.name}</h4>
              <span className="service-price">{service.price}</span>
            </div>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory; 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ServicesMenu from '../../components/ServicesMenu';
import { setActiveCategory, setSelectedService } from '../../store/slices/servicesSlice';

const ServicesPage = () => {
  const dispatch = useDispatch();
  const { activeCategory } = useSelector((state) => state.services);

  const handleCategoryChange = (categoryId) => {
    dispatch(setActiveCategory(categoryId));
  };

  const handleServiceSelect = (service) => {
    dispatch(setSelectedService(service));
  };

  return (
    <ServicesMenu
      onCategoryChange={handleCategoryChange}
      onServiceSelect={handleServiceSelect}
      activeCategory={activeCategory}
    />
  );
};

export default ServicesPage; 
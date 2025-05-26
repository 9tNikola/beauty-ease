import { icons } from "lucide-react";
import { useState, useEffect } from 'react';
import './ServiceNavigation.css';

const ServiceNavigation = ({ categories, activeCategory, onNavClick }) => {
  const [animating, setAnimating] = useState(false);
  const [lastActiveCategory, setLastActiveCategory] = useState(activeCategory);

  useEffect(() => {
    // Track category changes to trigger animations
    if (lastActiveCategory !== activeCategory && !animating) {
      handleCategoryChange(activeCategory);
    }
  }, [activeCategory, lastActiveCategory, animating]);

  const handleCategoryChange = (categoryId) => {
    // Prevent multiple rapid transitions
    if (animating) return;
    
    setAnimating(true);
    
    // Add exit animation to current content
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
      contentArea.classList.add('content-exit');
    }
    
    // After exit animation completes, update the category
    setTimeout(() => {
      setLastActiveCategory(categoryId);
      
      // Remove exit animation class
      if (contentArea) {
        contentArea.classList.remove('content-exit');
      }
      
      // Allow new animations to trigger
      setTimeout(() => {
        setAnimating(false);
      }, 100);
    }, 300);
    
    // Trigger the category change
    onNavClick(categoryId);
  };

  return (
    <div className="side-nav">
      {categories.map((category) => {
        // Handle both string icon names and component icons
        const IconComponent = typeof category.icon === 'string' 
          ? icons[category.icon] 
          : category.icon;
          
        return (
          <div
            key={category.id}
            className={`side-nav-item ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            <div className="icon-container">
              {IconComponent && <IconComponent size={24} />}
            </div>
            <div className="category-name">{category.name}</div>
            <div className="category-indicator"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceNavigation;
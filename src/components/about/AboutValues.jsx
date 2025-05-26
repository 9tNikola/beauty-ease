import React from 'react';
import { useSelector } from 'react-redux';
import { CheckCircle, Shield, Sparkles, Globe } from 'lucide-react';

const iconMap = {
  Shield,
  Sparkles,
  Globe
};

const AboutValues = () => {
  const { values } = useSelector((state) => state.about);

  return (
    <section className="values-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Drives Us</h2>
          <p className="section-subtitle">
            Core values that shape every decision and interaction
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <div className="value-features">
                  {value.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <CheckCircle size={16} className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues; 
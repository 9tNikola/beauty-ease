import React from 'react';
import { useSelector } from 'react-redux';

const AboutLeadership = () => {
  const { leadership } = useSelector((state) => state.about);

  return (
    <section className="leadership-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Leadership Team</h2>
          <p className="section-subtitle">Meet the visionaries behind Beauty Ease</p>
        </div>

        <div className="leadership-grid">
          {leadership.map((leader, index) => (
            <div key={index} className="leader-card">
              <div className="leader-image">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="leader-photo"
                />
                <div className="leader-status" />
              </div>
              <h3 className="leader-name">{leader.name}</h3>
              <div className="leader-role">{leader.role}</div>
              <p className="leader-bio">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership; 
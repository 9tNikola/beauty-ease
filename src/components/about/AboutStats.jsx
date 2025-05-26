import React from 'react';
import { useSelector } from 'react-redux';
import { Users, Award, Star, TrendingUp } from 'lucide-react';

const iconMap = {
  Users,
  Award,
  Star,
  TrendingUp
};

const AboutStats = () => {
  const { stats } = useSelector((state) => state.about);

  return (
    <section className="stats-section">
      <div className="stats-background" />
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title white">Impact That Matters</h2>
          <p className="section-subtitle purple">Numbers that reflect our commitment to excellence</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <IconComponent size={32} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-growth">{stat.growth}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStats; 
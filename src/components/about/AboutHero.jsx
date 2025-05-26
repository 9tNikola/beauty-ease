import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const AboutHero = ({ scrollY }) => {
  return (
    <section className="about-hero-section">
      <div 
        className="about-hero-background"
        style={{transform: `translateY(${scrollY * 0.5}px)`}}
      />
      <div className="about-hero-overlay" />
      
      <div className="about-hero-decorations">
        <div className="about-decoration about-decoration-1" />
        <div className="about-decoration about-decoration-2" />
      </div>

      <div className="about-hero-content">
        <h1 className="about-hero-title">
          Redefining Beauty
        </h1>
        <p className="about-hero-subtitle">
          Where technology meets artistry to create extraordinary beauty experiences
        </p>
        <div className="about-hero-buttons">
          <button className="btn-primary">
            Discover Our Story
            <ArrowRight className="btn-icon" size={20} />
          </button>
          <button className="btn-video">
            <div className="video-icon">
              <Play size={16} />
            </div>
            <span>Watch Our Journey</span>
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 
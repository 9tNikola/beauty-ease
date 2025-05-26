import React, { useState, useEffect } from 'react';
import AboutHero from '../../components/about/AboutHero';
import AboutStory from '../../components/about/AboutStory';
import AboutStats from '../../components/about/AboutStats';
import AboutValues from '../../components/about/AboutValues';
import AboutLeadership from '../../components/about/AboutLeadership';
import AboutCTA from '../../components/about/AboutCTA';
import './About.css';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page">
      <AboutHero scrollY={scrollY} />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutLeadership />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
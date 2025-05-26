import React from 'react';
import Header from '../../components/Header';
import HomeServices from '../../components/home/HomeServices';
import HomeTestimonials from '../../components/home/HomeTestimonials';
import HomeCTA from '../../components/home/HomeCTA';
import HomeStyles from '../../components/home/HomeStyles';
import AboutValues from '../../components/about/AboutValues';
import AboutCTA from '../../components/about/AboutCTA';

const HomePage = () => {
  return (
    <>
      <HomeStyles />
      <div className="home-page">
        <Header />
        <HomeServices />
        <AboutCTA/>
        <HomeTestimonials />
        <AboutValues />
      </div>
    </>
  );
};

export default HomePage;
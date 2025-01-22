import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/Services';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Stats />
      <Testimonials />
    </>
  );
};

export default Home;
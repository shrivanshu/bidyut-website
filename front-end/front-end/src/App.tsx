// src/App.tsx
import React from 'react';
import HeroSection from './Component/heroSection';
import OfferingsCarousel from './Component/OurOfferings';
import Footer from './Component/Footer';
import EducationStream from './Component/EducationStream';
import LmsSection from './Component/lmsSection';
import EducationNews from './Component/EducationNews';
import EN1 from './Component/EN1';
import Header from './Component/Header';
import Clock from './Component/Clock';
import TestimonialSection from './Component/TestimonialSection';


function App() {
  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      <OfferingsCarousel />
      <Clock />
      <EducationNews />
      <TestimonialSection />
      <EducationStream />
      <LmsSection/>
      <Footer />

    </div>
  );
}

export default App;

// src/App.tsx
import React from 'react';
import HeroSection from './Component/heroSection';
import OfferingsCarousel from './Component/OurOfferings';
import Footer from './Component/Footer';
import EducationStream from './Component/EducationStream';
import LmsSection from './Component/lmsSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <OfferingsCarousel />
      <EducationStream />
      <LmsSection/>
      <Footer />

    </div>
  );
}

export default App;

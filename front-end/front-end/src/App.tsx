// src/App.tsx
import React from 'react';

import HeroSection from './Component/heroSection';
import logo from './logo.svg';
import './App.css';
import OfferingsCarousel from './Component/OurOfferings';
import Footer from './Component/Footer';
import EducationStream from './Component/EducationStream';
import EducationNews from './Component/EducationNews';
import EN1 from './Component/EN1';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <OfferingsCarousel />
      <EducationNews />
      <EducationStream />
      <Footer />

    </div>
  );
}

export default App;

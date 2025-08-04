// src/App.tsx
import React from 'react';

import HeroSection from './Component/heroSection';
import logo from './logo.svg';
import './App.css';
import OfferingsCarousel from './Component/OurOfferings';
import Footer from './Component/Footer';
import EducationStream from './Component/EducationStream';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <OfferingsCarousel />
      <EducationStream />
      <Footer />

    </div>
  );
}

export default App;

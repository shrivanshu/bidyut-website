import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home_page';
import About from './Pages/AboutPage';
import Gallery from './Pages/Gallery_page';
import Contactpage from './Pages/Contact_page';
import Robotpage from './Pages/Robot_page';
import Cobotpage from './Pages/Cobot_page';
import B2Page from './Pages/B2Page';
import A2Page from './Pages/A2Page';
import SchoolPage from './Pages/SchoolPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/OptimizedLanguageContext';
import { NavigationProvider } from './contexts/NavigationContext';
import H1_page from './Pages/H1_page';
import H1_2_page from './Pages/H1_2_page';
import R1_page from './Pages/R1_page';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsCondition from './Pages/Terms&Condition';
import RefundPolicy from './Pages/RefundPolicy';
import Firefighting from './Pages/FirefightingPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <NavigationProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Contact" element={<Contactpage />} />
              <Route path="/Robot" element={<Robotpage />} />
              <Route path="/Cobot" element={<Cobotpage />} />
              <Route path="/H1" element={<H1_page />} />
              <Route path="/H1-2" element={<H1_2_page />} />
              <Route path="/R1" element={<R1_page />} />
              <Route path="/B2" element={<B2Page />} />
              <Route path="/A2" element={<A2Page />} />
              <Route path="/School" element={<SchoolPage />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/Terms&Condition" element={<TermsCondition />} />
              <Route path="/RefundPolicy" element={<RefundPolicy />} />
              <Route path="/Firefighting" element={<Firefighting />} />
            </Routes>
          </NavigationProvider>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

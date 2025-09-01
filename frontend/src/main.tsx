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
import H1_2_page from './Pages/H1_2_page';   // ✅ Added missing import
import R1_page from './Pages/R1_page';
import B2_Wells_Page from './Pages/B2_Wells_Page';
import A2_Wells_Page from './Pages/A2_Wells_Page';
import Inspection_page from './Pages/Inspection_page';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsCondition from './Pages/Terms&Condition';
import RefundPolicy from './Pages/RefundPolicy';
import GO2VPage from './Pages/GO2VPage';
import Firefighting from './Pages/FirefightingPage'; // ✅ moved to correct place
import Cobo_page from './Pages/Cobo_page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <NavigationProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/School" element={<SchoolPage />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Contact" element={<Contactpage />} />
              <Route path="/Cobot" element={<Cobo_page />} />

              
              <Route path="/Robot/Humanoids/Industry/H1" element={<H1_page />} />
              <Route path="/Robot/Humanoid/Industry/H1-2" element={<H1_2_page />} />
              
              <Route path="/Robot/Humanoid/Education/G1" element={<Robotpage />} />
              <Route path="/Robot/Humanoid/Education/R1" element={<R1_page />} />

              <Route path="/Robot/Quadrupeds/Industry/B2" element={<B2Page />} />
              <Route path="/Robot/Quadrupeds/Industry/B2-W" element={<B2_Wells_Page />} />
              <Route path="/Robot/Quadrupeds/Industry/A2" element={<A2Page />} />
              <Route path="/Robot/Quadrupeds/Industry/A2-W" element={<A2_Wells_Page />} />

              <Route path="/Robot/Quadrupeds/Education/GO2" element={<Cobotpage />} />
              <Route path="/Robot/Quadrupeds/Education/GO2V" element={<GO2VPage />} />

              <Route path="/Robot/Solutions/Firefighting" element={<Firefighting />} />
              <Route path="/Robot/Solutions/Inspection" element={<Inspection_page />} />
              
              
              
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/Terms&Condition" element={<TermsCondition />} />
              <Route path="/RefundPolicy" element={<RefundPolicy />} />
              
              
            </Routes>
          </NavigationProvider>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

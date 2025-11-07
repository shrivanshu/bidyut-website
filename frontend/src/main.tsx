import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Component/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/OptimizedLanguageContext';
import { NavigationProvider } from './contexts/NavigationContext';

const Home = lazy(() => import('./Pages/Home_page'));
const About = lazy(() => import('./Pages/AboutPage'));
const Gallery = lazy(() => import('./Pages/Gallery_page'));
const Contactpage = lazy(() => import('./Pages/Contact_page'));
const Robotpage = lazy(() => import('./Pages/Robot_page'));
const Cobotpage = lazy(() => import('./Pages/Cobot_page'));
const B2Page = lazy(() => import('./Pages/B2Page'));
const A2Page = lazy(() => import('./Pages/A2Page'));
const H1_page = lazy(() => import('./Pages/H1_page'));
const H1_2_page = lazy(() => import('./Pages/H1_2_page'));
const R1_page = lazy(() => import('./Pages/R1_page'));
const B2_Wells_Page = lazy(() => import('./Pages/B2_Wells_Page'));
const A2_Wells_Page = lazy(() => import('./Pages/A2_Wells_Page'));
const Inspection_page = lazy(() => import('./Pages/Inspection_page'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));
const TermsCondition = lazy(() => import('./Pages/Terms&Condition'));
const RefundPolicy = lazy(() => import('./Pages/RefundPolicy'));
const GO2VPage = lazy(() => import('./Pages/GO2VPage'));
const Firefighting = lazy(() => import('./Pages/FirefightingPage'));
const Cobo_page = lazy(() => import('./Pages/Cobo_page'));
const FinalSchoolPage = lazy(() => import('./Pages/School_Page_final'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <NavigationProvider>
              <ScrollToTop />
              <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-white text-black">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/School" element={<FinalSchoolPage />} />
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
                  <Route path="/Robot/Quadrupeds/Education/GO2-W" element={<GO2VPage />} />
                  <Route path="/Robot/Solutions/Firefighting" element={<Firefighting />} />
                  <Route path="/Robot/Solutions/Inspection" element={<Inspection_page />} />
                  <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                  <Route path="/Terms&Condition" element={<TermsCondition />} />
                  <Route path="/RefundPolicy" element={<RefundPolicy />} />
                </Routes>
              </Suspense>
            </NavigationProvider>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/OptimizedLanguageContext';
import { NavigationProvider } from './contexts/NavigationContext';
import ScrollToTop from './Component/ScrollToTop';
import './index.css';

const Home = lazy(() => import('./Pages/Home_page'));
const About = lazy(() => import('./Pages/AboutPage'));
const Gallery = lazy(() => import('./Pages/Gallery_page'));
const Contactpage = lazy(() => import('./Pages/Contact_page'));
const PartnerWithUs = lazy(() => import('./Pages/PartnerWithUs'));
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



function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <NavigationProvider>
              <ScrollToTop />
              <Suspense >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/school" element={<FinalSchoolPage />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contactpage />} />
                  <Route path="/partnerwithus" element={<PartnerWithUs />} />
                  <Route path="/cobot" element={<Cobo_page />} />
                  <Route path="/robot/humanoids/industry/h1" element={<H1_page />} />
                  <Route path="/robot/humanoid/industry/h1-2" element={<H1_2_page />} />
                  <Route path="/robot/humanoid/education/g1" element={<Robotpage />} />
                  <Route path="/robot/humanoid/education/r1" element={<R1_page />} />
                  <Route path="/robot/quadrupeds/industry/b2" element={<B2Page />} />
                  <Route path="/robot/quadrupeds/industry/b2-w" element={<B2_Wells_Page />} />
                  <Route path="/robot/quadrupeds/industry/a2" element={<A2Page />} />
                  <Route path="/robot/quadrupeds/industry/a2-w" element={<A2_Wells_Page />} />
                  <Route path="/robot/quadrupeds/education/go2" element={<Cobotpage />} />
                  <Route path="/robot/quadrupeds/education/go2-w" element={<GO2VPage />} />
                  <Route path="/robot/solutions/firefighting" element={<Firefighting />} />
                  <Route path="/Robot/Solutions/Firefighting" element={<Firefighting />} />
                  <Route path="/robot/solutions/inspection" element={<Inspection_page />} />
                  <Route path="/Robot/Solutions/Inspection" element={<Inspection_page />} />
                  <Route path="/Robot/Quadrupeds/Education/GO2" element={<Cobotpage />} />
                  <Route path="/Robot/Quadrupeds/Education/GO2-W" element={<GO2VPage />} />
                  <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                  <Route path="/Terms&Condition" element={<TermsCondition />} />
                  <Route path="/RefundPolicy" element={<RefundPolicy />} />
                  <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                  <Route path="/terms-and-condition" element={<TermsCondition />} />
                  <Route path="/refundpolicy" element={<RefundPolicy />} />
                </Routes>
              </Suspense>
            </NavigationProvider>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

const rootElement = document.getElementById('root')!;

// Check if we're in a pre-rendering environment
if (rootElement.hasChildNodes()) {
  // Hydrate for SSR/pre-rendered content
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  // Normal render for client-side
  ReactDOM.createRoot(rootElement).render(
    import.meta.env.PROD ? <App /> : <React.StrictMode><App /></React.StrictMode>
  );
}

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/OptimizedLanguageContext';
import { preloadCriticalChunks } from './utils/preloadStrategy';
import { setupBfcache } from './utils/bfcache';

// Lazy-load HelmetProvider to defer loading react-helmet-async until hydration
const ReactHelmetProvider = lazy(() =>
  import('react-helmet-async').then((mod) => ({ default: mod.HelmetProvider }))
);
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

const loadingFallback = (
  <div className="flex h-screen w-full items-center justify-center bg-white text-black">Loading...</div>
);

const AppRouter = lazy(async () => {
  const [{ BrowserRouter, Routes, Route }, scrollModule, navigationModule] = await Promise.all([
    import('react-router-dom').then(mod => ({
      BrowserRouter: mod.BrowserRouter,
      Routes: mod.Routes,
      Route: mod.Route
    })),
    import('./Component/ScrollToTop'),
    import('./contexts/NavigationContext')
  ]);

  const ScrollToTopComponent = scrollModule.default;
  const { NavigationProvider } = navigationModule;

  return {
    default: () => (
      <BrowserRouter>
        <NavigationProvider>
          <ScrollToTopComponent />
          <Suspense fallback={loadingFallback}>
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
    )
  };
});

preloadCriticalChunks();
setupBfcache();

const root = document.getElementById('root')!;
if (import.meta.env.PROD) {
  ReactDOM.createRoot(root).render(
    <ReactHelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Suspense fallback={loadingFallback}>
            <AppRouter />
          </Suspense>
        </LanguageProvider>
      </ThemeProvider>
    </ReactHelmetProvider>
  );
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ReactHelmetProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Suspense fallback={loadingFallback}>
              <AppRouter />
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
      </ReactHelmetProvider>
    </React.StrictMode>
  );
}

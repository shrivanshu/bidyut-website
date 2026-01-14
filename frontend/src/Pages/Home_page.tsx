
import { lazy } from 'react';
import Header from '../Component/Header';
import { LazyLoad } from '../Component/LazyLoad';

// Lazy load heavy components with chunk names for better caching
const HeroSection = lazy(() => import(/* webpackChunkName: "hero" */ '../Component/home_components/heroSection'));
const OfferingsCarousel = lazy(() => import(/* webpackChunkName: "offerings" */ '../Component/home_components/OurOfferings'));
const EducationStream = lazy(() => import(/* webpackChunkName: "edu-stream" */ '../Component/home_components/EducationStream'));
const LmsSection = lazy(() => import(/* webpackChunkName: "lms" */ '../Component/home_components/lmsSection'));
const EducationNews = lazy(() => import(/* webpackChunkName: "edu-news" */ '../Component/home_components/EducationNews'));
const TestimonialSection = lazy(() => import(/* webpackChunkName: "testimonials" */ '../Component/home_components/TestimonialSection'));
const TrustedPartners = lazy(() => import(/* webpackChunkName: "partners" */ '../Component/home_components/TrustedPartners'));
const Footer = lazy(() => import(/* webpackChunkName: "footer" */ '../Component/Footer'));

import { ThemeProvider } from '../contexts/ThemeContext';
import Loader from "../Component/Loader";
import { useState, useEffect } from "react";
import usePerformanceMonitoring from '../hooks/usePerformanceMonitoring';
import { SEO } from '../hooks/useSEO';


function Home_page() {

 const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Enable performance monitoring
  usePerformanceMonitoring();

  useEffect(() => {
    // Reduced loading delay for better user experience
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setLoading(false), 500); // Remove loader after transition
    }, 3000); // Loader visible for 3s instead of 5s

    return () => clearTimeout(timer);
  }, []);


  return (
    <ThemeProvider>
      <SEO
        title="Hands-On Robotics Courses in India | Bidyut Innovation"
        description="Explore robotics courses in India with Bidyut Innovation. Hands-on learning, robotics for kids, robotics for schools, coding & AI education."
        canonical="https://bidyutinnovation.com/"
      />
      {/* Hidden SEO content for crawlers */}
      <div className="sr-only">
        <h1>Bidyut Innovation - Leading Robotics Education Platform in India</h1>
        <p>Bidyut Innovation offers comprehensive robotics education programs for schools, students, and educational institutions across India. Our hands-on robotics courses combine STREAM learning (Science, Technology, Robotics, Engineering, Arts, Mathematics) with practical applications in artificial intelligence, coding, and automation.</p>
        <p>We provide cutting-edge robotics solutions including humanoid robots, quadruped robots, collaborative robots (cobots), and specialized educational kits designed for different age groups and skill levels. Our Learning Management System (LMS) enables seamless online and offline learning experiences.</p>
        <p>Partner with Bidyut Innovation to transform education through robotics, prepare students for future careers in technology, and build innovation-driven learning environments. Explore our robot models including H1, H1-2, G1, R1 humanoids, B2, A2, GO2 quadrupeds, and industrial cobots for various applications.</p>
      </div>
      {loading && <Loader fadeOut={fadeOut} />}
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen overflow-x-hidden" data-testid="home-page">
        <Header />
        <LazyLoad fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
          </div>
        }>
          <HeroSection />
        </LazyLoad>
        <LazyLoad fallback={
          <div className="min-h-[50vh] flex items-center justify-center p-4">
            <div className="w-full max-w-4xl space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        }>
          <OfferingsCarousel />
        </LazyLoad>
        <LazyLoad fallback={
          <div className="min-h-[40vh] flex items-center justify-center p-4">
            <div className="w-full max-w-4xl space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        }>
          <EducationNews />
        </LazyLoad>
        <LazyLoad fallback={
          <div className="min-h-[40vh] flex items-center justify-center p-4">
            <div className="w-full max-w-4xl space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 animate-pulse" />
              <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
            </div>
          </div>
        }>
          <LmsSection />
        </LazyLoad>
        <LazyLoad fallback={
          <div className="min-h-[60vh] flex items-center justify-center p-4">
            <div className="w-full max-w-4xl space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 animate-pulse" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        }>
          <TrustedPartners />
        </LazyLoad>
        <LazyLoad fallback={
          <div className="min-h-[40vh] flex items-center justify-center p-4">
            <div className="w-full max-w-4xl space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        }>
          <TestimonialSection />
        </LazyLoad>
        <LazyLoad fallback={
          <div className="min-h-[40vh] flex items-center justify-center p-4">
            <div className="w-full max-w-4xl space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        }>
          <EducationStream />
        </LazyLoad>
        <LazyLoad fallback={
          <div className="min-h-[30vh] flex items-center justify-center p-6">
            <div className="w-full max-w-5xl space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/3 animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        }>
          <Footer />
        </LazyLoad>
      </div>
    </ThemeProvider>
  );
}

export default Home_page;

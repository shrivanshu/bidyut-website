
import React from 'react';
import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import GalleryHero from '../Component/gallery_components/gallery_hero';
import ExploreOurGallery from '../Component/gallery_components/explore_our_gallery';
import AwardWinning from '../Component/gallery_components/award_wining';
import KnowUsMore from '../Component/gallery_components/know_us_more';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SEO } from '../hooks/useSEO';

const Gallery_page: React.FC = () => {
  return (
    <ThemeProvider>
      <SEO
        title="Robotics Education in India | Bidyut Innovation Gallery"
        description="Explore Bidyut Innovation's gallery showcasing cutting-edge robotics education in India. Hands-on STREAM, AI, and robotics programs transforming classrooms."
        canonical="https://bidyutinnovation.com/Gallery"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Bidyut Innovation Gallery",
          "url": "https://bidyutinnovation.com/Gallery",
          "description": "Explore Bidyut Innovation's gallery showcasing over 12 years of achievements in robotics and technology education. Discover student projects, advanced robotics workspaces, AI and STEM learning environments, and innovative solutions that have transformed 30+ schools and empowered 45,000+ students across India.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Bidyut Innovation",
            "url": "https://bidyutinnovation.com",
            "logo": "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
            "sameAs": [
              "https://www.instagram.com/bidyutinnovation?igsh=ZGIzZnRodjVpdHR5",
              "https://www.linkedin.com/company/bidyutinnovation/"
            ]
          }
        }}
      />
      <div className=" bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <GalleryHero />
          <ExploreOurGallery />
          <AwardWinning />
          <KnowUsMore />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Gallery_page;

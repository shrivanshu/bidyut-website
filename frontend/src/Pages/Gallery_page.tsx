
import React from 'react';
import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import GalleryHero from '../Component/gallery_components/gallery_hero';
import ExploreOurGallery from '../Component/gallery_components/explore_our_gallery';
import AwardWinning from '../Component/gallery_components/award_wining';
import KnowUsMore from '../Component/gallery_components/know_us_more';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useCanonical } from '../hooks/useCanonical';
import { useSEO } from '../hooks/useSEO';

const Gallery_page: React.FC = () => {
  useSEO({
    title: 'Robotics Education in India | Bidyut Innovation Gallery',
    description: 'Explore Bidyut Innovation\'s gallery showcasing cutting-edge robotics education in India. Hands-on STREAM, AI, and robotics programs transforming classrooms.',
    canonical: 'https://bidyutinnovation.com/Gallery'
  });
  
  return (
    <ThemeProvider>
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

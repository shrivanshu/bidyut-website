
import React from 'react';
import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import GalleryHero from '../Component/gallery_components/gallery_hero';
import ExploreOurGallery from '../Component/gallery_components/explore_our_gallery';
import AwardWinning from '../Component/gallery_components/award_wining';
import KnowUsMore from '../Component/gallery_components/know_us_more';
import { ThemeProvider } from '../contexts/ThemeContext';

const Gallery_page: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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

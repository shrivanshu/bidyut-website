
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import Hero from '../Component/gallery_components/gallery_hero';
import Our_Gallery from '../Component/gallery_components/explore_our_gallery';
import Award from '../Component/gallery_components/award_wining'
import Know_US from '../Component/gallery_components/know_us_more'
import { ThemeProvider } from '../contexts/ThemeContext';



function Gallery_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <Hero/>
        <Our_Gallery />
        <Award />
        <Know_US/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Gallery_page;

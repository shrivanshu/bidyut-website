
import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import { ThemeProvider } from '../contexts/ThemeContext';
import Static from '../Component/about_components/Static';
import Gallery from '../Component/about_components/Gallery';
import Ourjourney from '../Component/about_components/Ourjourney';
import AboutHeroSection from '../Component/about_components/AboutHeroSection';
import VideoSwitcher from '../Component/about_components/VideoSwitcher';


function About_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <AboutHeroSection />
        <VideoSwitcher />
        <Ourjourney />
        <Static/>
        <Gallery/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default About_page;


import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { ThemeProvider } from '../contexts/ThemeContext';
import Static from '../Component/about_components/Static';
import Gallery from '../Component/about_components/Gallery';
import Ourjourney from '../Component/about_components/Ourjourney';



function About_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <Static/>
        <Ourjourney />
        <Gallery/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default About_page;

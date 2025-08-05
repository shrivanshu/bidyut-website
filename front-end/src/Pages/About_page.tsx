
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { ThemeProvider } from '../contexts/ThemeContext';
import Static from '../Component/Static';
import Gallery from '../Component/Gallery';



function About_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <Static/>
        <Gallery/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default About_page;


import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import FirefightingVariants from '../Component/FirefightingComponents/FirefightingVariants';
import FirefightingDetails from '../Component/FirefightingComponents/FirefightingDetails';
import { ThemeProvider } from '../contexts/ThemeContext';
import FirefightingHeroSection from '../Component/FirefightingComponents/FirefightingHeroSection';

function FirefightingPage() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <FirefightingHeroSection/>
        <FirefightingVariants/>
        <FirefightingDetails/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default FirefightingPage;

import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import B2Variants from '../Component/B2_components/B2Variants';
import B2Details from '../Component/B2_components/B2Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import B2HeroSection from '../Component/B2_components/B2HeroSection';

function B2Page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <B2HeroSection/>
        <B2Variants/>
        <B2Details/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default B2Page;

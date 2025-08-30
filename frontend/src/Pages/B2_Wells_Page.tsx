import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import B2_Wells_Variants from '../Component/B2_Wells_components/B2_Wells_Variants';
import B2_Wells_Details from '../Component/B2_Wells_components/B2_Wells_Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import B2WellsHeroSection from '../Component/B2_Wells_components/B2WellsHeroSection';

function B2_Wells_Page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <B2WellsHeroSection/>
        <B2_Wells_Variants/>
        <B2_Wells_Details/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default B2_Wells_Page;

import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import A2_Wells_Variants from '../Component/A2_Wells_components/A2_Wells_Variants';
import A2_Wells_Details from '../Component/A2_Wells_components/A2_Wells_Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import A2WellHeroSection from '../Component/A2_Wells_components/A2WellHeroSection';

function A2_Wells_Page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <A2WellHeroSection/>
        <A2_Wells_Variants/>
        <A2_Wells_Details/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default A2_Wells_Page;

import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionH1_2 from '../Component/H1-2_components/HeroSectionH1_2';
import H1_2Variants from '../Component/H1-2_components/H1_2Variants';
import H1Detail from '../Component/H1_components/H1Detail';
import H1ComparisonChart from '../Component/H1_components/H1ComparisonChart';
import { ThemeProvider } from '../contexts/ThemeContext';
function H1_2_page() {
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSectionH1_2 />
        <H1_2Variants/>
        <H1Detail/>
        <H1ComparisonChart/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_2_page

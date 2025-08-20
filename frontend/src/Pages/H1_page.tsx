import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionH1 from '../Component/H1_components/HeroSectionH1';
import H1Variants from '../Component/H1_components/H1Variants';
import H1Detail from '../Component/H1_components/H1Detail';
import { ThemeProvider } from '../contexts/ThemeContext';
function H1_page() {
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSectionH1 />
        <H1Variants/>
        <H1Detail/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page

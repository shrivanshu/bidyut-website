import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionR1 from '../Component/R1_components/HeroSectionR1';
import R1Variants from '../Component/R1_components/R1Variants';
import R1Detail from '../Component/R1_components/R1Detail';
import { ThemeProvider } from '../contexts/ThemeContext';
function H1_page() {
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSectionR1 />
        <R1Variants/>
        <R1Detail/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page

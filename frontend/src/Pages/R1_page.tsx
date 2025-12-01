import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionR1 from '../Component/R1_components/HeroSectionR1';
import R1Variants from '../Component/R1_components/R1Variants';
import R1Detail from '../Component/R1_components/R1Detail';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';
function H1_page() {
  const navigate = useNavigate();
  
  // Set canonical URL
  useCanonical('https://bidyutinnovation.com/Robot/Humanoid/Education/R1');
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSectionR1 />
        <R1Variants/>
  <R1Detail onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page

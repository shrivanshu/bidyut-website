import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionH1_2 from '../Component/H1-2_components/HeroSectionH1_2';
import H1_2Variants from '../Component/H1-2_components/H1_2Variants';
import H1Detail from '../Component/H1_components/H1Detail';
import H1ComparisonChart from '../Component/H1_components/H1ComparisonChart';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';
function H1_2_page() {
  const navigate = useNavigate();
  
  // Set canonical URL
  useCanonical('https://bidyutinnovation.com/Robot/Humanoid/Industry/H1-2');
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header  />
        <HeroSectionH1_2 />
        <H1_2Variants/>
        <H1Detail onContactClick={() => navigate('/Contact')} />
  <H1ComparisonChart/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_2_page

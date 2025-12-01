import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionH1 from '../Component/H1_components/HeroSectionH1';
import H1Variants from '../Component/H1_components/H1Variants';
import H1Detail from '../Component/H1_components/H1Detail';
import H1ComparisonChart from '../Component/H1_components/H1ComparisonChart';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';
function H1_page() {
  const navigate = useNavigate();
  
  // Set canonical URL
  useCanonical('https://bidyutinnovation.com/Robot/Humanoids/Industry/H1');
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSectionH1 />
        <H1Variants/>
        <H1Detail onContactClick={() => navigate('/Contact')} />
  <H1ComparisonChart/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page

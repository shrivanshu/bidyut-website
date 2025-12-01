import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import B2Variants from '../Component/B2_components/B2Variants';
import B2Details from '../Component/B2_components/B2Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import B2HeroSection from '../Component/B2_components/B2HeroSection';
import { useNavigate } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';

function B2Page() {
  const navigate = useNavigate();
  
  // Set canonical URL
  useCanonical('https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2');
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <B2HeroSection/>
        <B2Variants/>
  <B2Details onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default B2Page;

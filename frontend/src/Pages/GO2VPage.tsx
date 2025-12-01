import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import GO2VVariants from '../Component/GO2VComponents/GO2VVariants';
import GO2VDetails from '../Component/GO2VComponents/GO2VDetails';
import { ThemeProvider } from '../contexts/ThemeContext';
import GO2VHeroSection from '../Component/GO2VComponents/GO2VHeroSection';
import { useNavigate } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';

function GO2VPage() {
  const navigate = useNavigate();
  
  // Set canonical URL
  useCanonical('https://bidyutinnovation.com/Robot/Quadrupeds/Education/GO2-W');
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
  <GO2VHeroSection/>
  <GO2VVariants/>
  <GO2VDetails onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default GO2VPage;

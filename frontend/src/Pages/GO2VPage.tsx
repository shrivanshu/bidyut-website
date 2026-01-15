import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import GO2VVariants from '../Component/GO2VComponents/GO2VVariants';
import GO2VDetails from '../Component/GO2VComponents/GO2VDetails';
import { ThemeProvider } from '../contexts/ThemeContext';
import GO2VHeroSection from '../Component/GO2VComponents/GO2VHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function GO2VPage() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="Unitree Go2 W Robot | Agile All-Terrain Robotics Companion"
          description="Meet the Unitree Go2 W robot — your agile, compact, and all-terrain companion perfect for robotics research, inspections, and versatile real-world tasks."
          canonical="https://bidyutinnovation.com/robot/quadrupeds/education/go2-w"
        />
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

import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionH1 from '../Component/H1_components/HeroSectionH1';
import H1Variants from '../Component/H1_components/H1Variants';
import H1Detail from '../Component/H1_components/H1Detail';
import H1ComparisonChart from '../Component/H1_components/H1ComparisonChart';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';
function H1_page() {
  const navigate = useNavigate();
  
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <SEO
          title="Unitree H1 Robot | Next-Gen Humanoid Robotics Power"
          description="Discover the full-size Unitree H1 humanoid robot, built for industrial automation, research, and advanced AI applications. Fast, precise, and ready to perform."
          canonical="https://bidyutinnovation.com/robot/humanoids/industry/h1"
        />
        <div className="sr-only">
          <h1>Unitree H1 Humanoid Robot - Industrial Automation and Research Platform</h1>
          <p>The Unitree H1 is a full-size humanoid robot engineered for industrial automation, advanced research, and AI-driven applications. With exceptional speed, precision, and versatility, the H1 robot delivers powerful performance for manufacturing, logistics, research institutions, and technology development projects.</p>
        </div>
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

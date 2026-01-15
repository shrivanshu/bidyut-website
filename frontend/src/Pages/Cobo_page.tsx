import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import CoboVariants from '../Component/Cobo_Parts_components/CoboVariants';
import CoboDetail from '../Component/Cobo_Parts_components/CoboDetail';
import { ThemeProvider } from '../contexts/ThemeContext';
import CoboHeroSection from '../Component/Cobo_Parts_components/CoboHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function Cobo_page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="Cobot Lightweight Robotic Arm Robot for Smart Automation"
          description="Upgrade your automation with a lightweight robotic arm cobot designed for fast deployment, high precision, and safe collaboration in modern workspaces."
          canonical="https://bidyutinnovation.com/cobot"
        />
        <div className="sr-only">
          <h1>Collaborative Robot (Cobot) - Lightweight Robotic Arm for Smart Automation</h1>
          <p>Upgrade your industrial automation with our advanced collaborative robot (cobot) featuring a lightweight robotic arm design. Engineered for fast deployment, high precision, and safe human-robot collaboration, our cobot solutions transform modern workspaces with intelligent automation, flexible programming, and industry-leading safety features for manufacturing, assembly, packaging, and quality control applications.</p>
        </div>
        <Header />
        <CoboHeroSection/>
        <CoboVariants/>
  <CoboDetail onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Cobo_page;

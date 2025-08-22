import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import CobotVariants from '../Component/Cobot_components/CobotVariants';
import CobotDetail from '../Component/Cobot_components/CobotDetail';
import { ThemeProvider } from '../contexts/ThemeContext';
import HeroSection from '../Component/Cobot_components/heroSection';
import A2ComparisonChart from '../Component/Cobot_components/CobotComparisonChart';

function Cobot_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSection/>
        <CobotVariants/>
        <CobotDetail/>
        <A2ComparisonChart />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Cobot_page;

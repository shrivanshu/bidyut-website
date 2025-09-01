import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import CoboVariants from '../Component/Cobo_Parts_components/CoboVariants';
import CoboDetail from '../Component/Cobo_Parts_components/CoboDetail';
import { ThemeProvider } from '../contexts/ThemeContext';
import CoboHeroSection from '../Component/Cobo_Parts_components/CoboHeroSection';

function Cobo_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <CoboHeroSection/>
        <CoboVariants/>
        <CoboDetail/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Cobo_page;

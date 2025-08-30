import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import GO2VVariants from '../Component/GO2VComponents/GO2VVariants';
import GO2VDetails from '../Component/GO2VComponents/GO2VDetails';
import { ThemeProvider } from '../contexts/ThemeContext';
import GO2VHeroSection from '../Component/GO2VComponents/GO2VHeroSection';

function GO2VPage() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
  <GO2VHeroSection/>
  <GO2VVariants/>
  <GO2VDetails/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default GO2VPage;

import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import A2Variants from '../Component/A2Components/A2Variants';
import A2Details from '../Component/A2Components/A2Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import A2HeroSection from '../Component/A2Components/A2HeroSection';
import A2ComparisonChart from '../Component/A2Components/A2ComparisonChart';

function A2Page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
  <A2HeroSection/>
  <A2Variants/>
  <A2Details/>
  <A2ComparisonChart />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default A2Page;

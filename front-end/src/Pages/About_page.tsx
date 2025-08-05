
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { ThemeProvider } from '../contexts/ThemeContext';



function About_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default About_page;

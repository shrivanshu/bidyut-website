import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import { ThemeProvider } from '../contexts/ThemeContext';
import RoboticsComparisonChart from '../Component/Table';

function Robot_Detail_Page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <RoboticsComparisonChart/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Robot_Detail_Page;

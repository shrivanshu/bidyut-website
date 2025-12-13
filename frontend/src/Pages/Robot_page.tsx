import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionRobot from '../Component/robot_components/HeroSectionRobot';
import RobotVariants from '../Component/robot_components/RobotVariants';
import RobotDetail from '../Component/robot_components/RobotDetail';
import Table from '../Component/G1_Table';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SEO } from '../hooks/useSEO';

function Robot_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <SEO
          title="G1 Humanoid Robot | Education Programs | Bidyut Innovation"
          description="G1 humanoid robot for robotics education. Hands-on learning in schools and institutions with advanced humanoid technology."
          canonical="https://bidyutinnovation.com/Robot/Humanoid/Education/G1"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree G1 Humanoid Robot",
            "image": "https://bidyutinnovation.com/media/Robot_Details.svg",
            "description": "Unitree G1 Humanoid Robot is an advanced educational platform for AI-driven learning and robotics innovation, featuring agile human-like mobility, 3D perception, and high-torque joints for classroom and research applications",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Humanoid/Education/G1",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Humanoid/Education/G1",
              "seller": {
                "@type": "Organization",
                "name": "Bidyut Innovation",
                "url": "https://bidyutinnovation.com",
                "logo": "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
                "telephone": "+91-9370782979",
                "email": "Info@bidyutrobotics.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "901 Clifton Corporate Park, 11/6, AB Road, Sector A, Slice 6, Aranya Nagar, VijayNagar",
                  "addressLocality": "Indore",
                  "addressRegion": "Madhya Pradesh",
                  "postalCode": "452010",
                  "addressCountry": "IN"
                }
              }
            }
          }}
        />
        <Header />
        <HeroSectionRobot />
        <RobotVariants/>
        <RobotDetail/>
  <Table/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Robot_page;

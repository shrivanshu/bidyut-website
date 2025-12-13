import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import A2Variants from '../Component/A2Components/A2Variants';
import A2Details from '../Component/A2Components/A2Details';
import A2HeroSection from '../Component/A2Components/A2HeroSection';
import A2ComparisonChart from '../Component/A2Components/A2ComparisonChart';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function A2Page() {
  const navigate = useNavigate();
  
  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <SEO
        title="A2 Quadruped Robot | Industry Solutions | Bidyut Innovation"
        description="A2 quadruped robot for industrial applications. Advanced automation and industrial robotics solutions."
        canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Industry/A2"
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Unitree A2 Quadruped Robot",
          "image": "https://bidyutinnovation.com/media/A2-w.webp",
          "description": "Unitree A2 is an advanced quadruped robot dog designed for industrial, educational, and research applications, offering agile mobility, robust payload handling, high-performance computing, and versatile operation for automation, inspection, and real-world tasks.",
          "brand": {
            "@type": "Brand",
            "name": "Unitree"
          },
          "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Industry/A2",
          "offers": {
            "@type": "Offer",
            "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Industry/A2",
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
      <A2HeroSection/>
      <A2Variants/>
      <A2Details onContactClick={() => navigate('/Contact')} />
      <A2ComparisonChart />
      <Footer />
    </div>
  );
}

export default A2Page;

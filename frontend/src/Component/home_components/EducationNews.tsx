import React, { useEffect, useRef } from 'react';
import EN1 from './EN1';
import { useLanguage } from '../../contexts/OptimizedLanguageContext';

const EducationNews: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      platform: 'linkedin' as const,
      timestamp: '08:10 PM | 01 Aug 2025',
      title: 'Young Innovators Build AI-Powered Robot for Campus Safety',
      content: 'A team of high school students created an AI-enabled robot designed to monitor school corridors and identify unusual behavior. The project won accolades at the National STEAM Fair and is now being considered for implementation in educational institutions nationwide.',
      author: 'Tech Innovation Hub'
    },
    {
      platform: 'twitter' as const,
      timestamp: '08:10 PM | 01 Aug 2025',
      title: 'Robotics Championship 2025: Students Gear Up to Compete',
      content: 'Thousands of students from across the country will battle it out with self-built robots at the upcoming RoboChamp 2025. The competition aims to promote STEM education and innovation among young minds.',
      author: 'RoboChamp Official'
    },
    {
      platform: 'twitter' as const,
      timestamp: '08:10 PM | 01 Aug 2025',
      title: 'Girls in Tech: All-Girl Robotics Team Wins National Recognition',
      content: 'An all-girl robotics team from Pune bagged first place in the National Robo Skills Competition with their autonomous delivery robot. The team broke stereotypes and inspired more girls to pursue STEM careers.',
      author: 'Girls in STEM'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '08:10 PM | 01 Aug 2025',
      title: 'Revolutionary Educational Robot Transforms Learning Experience',
      content: 'A breakthrough in educational technology has emerged with the development of an interactive robot that adapts to individual learning styles. Early trials show 40% improvement in student engagement and comprehension rates.',
      author: 'EduTech Innovations'
    },
    {
      platform: 'twitter' as const,
      timestamp: '07:45 PM | 01 Aug 2025',
      title: 'AI-Powered Teaching Assistant Debuts in Classrooms',
      content: 'Schools are now implementing AI teaching assistants that can answer student questions, provide personalized feedback, and help teachers manage classroom activities more effectively.',
      author: 'Future Classroom'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '07:30 PM | 01 Aug 2025',
      title: 'Student-Built Drone Wins International Competition',
      content: 'A team of engineering students developed an autonomous drone capable of search and rescue operations. Their innovation secured first place at the Global Robotics Challenge 2025.',
      author: 'Engineering Excellence'
    }
  ];

  const reviewsRow2 = [
    {
      platform: 'twitter' as const,
      timestamp: '07:15 PM | 01 Aug 2025',
      title: 'Smart Classroom Technology Revolutionizes Remote Learning',
      content: 'New interactive whiteboards with AI integration are helping teachers create more engaging virtual lessons. Students report 60% better retention rates with this technology.',
      author: 'EdTech Today'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '07:00 PM | 01 Aug 2025',
      title: 'Coding Bootcamp for Kids Sees Record Enrollment',
      content: 'Summer coding programs for children aged 8-16 are experiencing unprecedented demand. Parents are investing in their children\'s digital literacy and programming skills.',
      author: 'Code Academy Kids'
    },
    {
      platform: 'twitter' as const,
      timestamp: '06:45 PM | 01 Aug 2025',
      title: 'Virtual Reality Transforms Science Education',
      content: 'Students can now explore the human body, visit ancient civilizations, and conduct virtual chemistry experiments through immersive VR technology in classrooms.',
      author: 'VR Education Hub'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '06:30 PM | 01 Aug 2025',
      title: 'Robotics Club Builds Assistive Technology for Disabled Students',
      content: 'High school robotics team develops innovative assistive devices to help students with disabilities participate more fully in classroom activities and sports.',
      author: 'Inclusive Tech Initiative'
    },
    {
      platform: 'twitter' as const,
      timestamp: '06:15 PM | 01 Aug 2025',
      title: '3D Printing Lab Opens in Elementary School',
      content: 'Young students are learning design thinking and engineering principles through hands-on 3D printing projects, creating everything from toys to practical classroom tools.',
      author: 'Maker Education'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '06:00 PM | 01 Aug 2025',
      title: 'AI Tutoring System Shows Promising Results',
      content: 'Personalized AI tutoring platforms are helping students improve their math and science scores by adapting to individual learning patterns and providing targeted support.',
      author: 'AI Learning Solutions'
    }
  ];
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer || !scrollContainer2) return;

    let scrollAmount1 = 0;
    let scrollAmount2 = 0;
    const scrollStep = 2; // Increased speed for better visibility
    const scrollDelay = 20; // Smoother animation

    const autoScroll = () => {
      // First row - Clockwise (left to right)
      scrollAmount1 += scrollStep;
      scrollContainer.scrollLeft = scrollAmount1;

      // Reset scroll when reaching 1/3 of the way (since we have 3 copies)
      if (scrollAmount1 >= (scrollContainer.scrollWidth / 3)) {
        scrollAmount1 = 0;
        scrollContainer.scrollLeft = 0;
      }

      // Second row - Anti-clockwise (right to left)
      scrollAmount2 += scrollStep;
      const maxScroll2 = scrollContainer2.scrollWidth - scrollContainer2.clientWidth;
      scrollContainer2.scrollLeft = maxScroll2 - scrollAmount2;

      // Reset scroll when reaching 1/3 of the way (since we have 3 copies)
      if (scrollAmount2 >= (scrollContainer2.scrollWidth / 3)) {
        scrollAmount2 = 0;
        scrollContainer2.scrollLeft = maxScroll2;
      }
    };

    const intervalId = setInterval(autoScroll, scrollDelay);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center font-sans overflow-hidden transition-colors duration-300">
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="text-center py-8 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-colors duration-300">
            {t('latestNews').split(' & ')[0]} & <span className="text-emerald-500">{t('latestNews').split(' & ')[1]}</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
            {t('stayUpdated')}
          </p>
        </div>

        <div className="flex-1 w-full overflow-hidden flex flex-col justify-center">
          {/* First row - Clockwise movement (left to right) */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden py-8 relative scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Triple the reviews for seamless infinite scroll */}
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div key={index} className="flex-shrink-0">
                <EN1
                  platform={review.platform}
                  timestamp={review.timestamp}
                  title={review.title}
                  content={review.content}
                  author={review.author}
                />
              </div>
            ))}
          </div>

          {/* Second row - Anti-clockwise movement (right to left) */}
          <div 
            ref={scrollRef2}
            className="flex gap-6 overflow-x-auto overflow-y-hidden py-8 relative scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Triple the reviews for seamless infinite scroll */}
            {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((review, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0">
                <EN1
                  platform={review.platform}
                  timestamp={review.timestamp}
                  title={review.title}
                  content={review.content}
                  author={review.author}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Ensure smooth scrolling performance */
        .scrollbar-hide {
          will-change: scroll-position;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default EducationNews
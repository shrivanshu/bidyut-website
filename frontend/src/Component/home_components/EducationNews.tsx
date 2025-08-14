import React, { useEffect, useRef } from 'react';
import EN1 from './EN1';
import HomeHeroText from '../../Text_Animation/HomeHeroText';
import { useLanguage } from '../../contexts/OptimizedLanguageContext';

const EducationNews: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      platform: 'linkedin' as const,
      timestamp: '08:10 PM | 01 Aug 2025',
      title: 'Bidyut Launches Advanced Robotics Lab for Schools',
      content: 'Bidyut unveils a robotics lab to give students hands-on coding and tech skills for the future.',
      author: 'Bidyut Team'
    },
    {
      platform: 'twitter' as const,
      timestamp: '08:10 PM | 01 Aug 2025',
      title: 'Bidyut Innovation Expands EdTech Reach',
      content: 'Now in more cities, Bidyut’s robotics courses boost creativity and STEM learning in schools.',
      author: 'Bidyut Media'
    },
    {
      platform: 'twitter' as const,
      timestamp: '08:10 PM | 01 Aug 2025',
      title: '	AI-Powered Robots Transforming Education',
      content: 'AI robots are making STEM learning interactive, fun, and teamwork-focused.',
      author: 'Tech Insights Desk'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '08:10 PM | 01 Aug 2025',
      title: 'Humanoid Teachers Enter Classrooms',
      content: 'Schools adopt humanoid robots to support teaching and personalize lessons.',
      author: 'EdTech Research Team'
    },
    {
      platform: 'twitter' as const,
      timestamp: '07:45 PM | 01 Aug 2025',
      title: 'Robotics to be a Core Subject by 2030',
      content: 'Countries plan to make robotics mandatory in school curriculums.',
      author: 'Innovation Weekly Staff'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '07:30 PM | 01 Aug 2025',
      title: 'Drone Technology in STEM Education',
      content: 'Schools teach drone programming to bring physics and coding to life.',
      author: 'STEM Education Bureau'
    }
  ];

  const reviewsRow2 = [
    {
      platform: 'twitter' as const,
      timestamp: '07:15 PM | 01 Aug 2025',
      title: 'Collaborative Robots Enhance Lab Experiences',
      content: 'Cobots join school labs, helping students with safe, precise tasks.',
      author: 'Robotics Lab Network'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '07:00 PM | 01 Aug 2025',
      title: 'Virtual Robotics Competitions Rise in Popularity',
      content: 'Students code and compete with robots in virtual arenas.',
      author: 'GET Newsroom'
    },
    {
      platform: 'twitter' as const,
      timestamp: '06:45 PM | 01 Aug 2025',
      title: '      timestamLow-Cost Robotics Kits for Rural Schools',
      content: 'Affordable robotics kits bring STEM to rural students.',
      author: 'Robotics World Team'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '06:30 PM | 01 Aug 2025',
      title: 'AI Tutors for Personalized Learning',
      content: 'AI tutors in robotics tailor lessons for every student.',
      author: 'AI Hub Editorial'
    },
    {
      platform: 'twitter' as const,
      timestamp: '06:15 PM | 01 Aug 2025',
      title: 'Robotics Clubs Foster Teamwork and Innovation',
      content: 'Clubs inspire problem-solving and innovation from a young age.',
      author: 'SCT Editorial Board'
    },
    {
      platform: 'linkedin' as const,
      timestamp: '06:00 PM | 01 Aug 2025',
      title: 'Educational Robots Reach Special Needs Classrooms',
      content: 'Robots assist teachers with tailored learning for special needs students.',
      author: 'Future Tech Asia Writers'
    }
  ];
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer || !scrollContainer2) return;

    let scrollAmount = 0;
    let scrollAmount2 = 0;
    const scrollStep = 1;
    const scrollDelay = 30;
    let isUserScrolling = false;
    let isUserScrolling2 = false;

    const autoScroll = () => {
      if (!isUserScrolling) {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }

      if (!isUserScrolling2) {
        scrollAmount2 += scrollStep;
        scrollContainer2.scrollLeft = scrollContainer2.scrollWidth - scrollContainer2.clientWidth - scrollAmount2;

        // Reset scroll when reaching the end
        if (scrollAmount2 >= scrollContainer2.scrollWidth - scrollContainer2.clientWidth) {
          scrollAmount2 = 0;
        }
      }
    };

    const intervalId = setInterval(autoScroll, scrollDelay);

    // Pause scrolling on hover and manual scroll
    let currentIntervalId = intervalId;
    let scrollTimeout: NodeJS.Timeout;
    let scrollTimeout2: NodeJS.Timeout;
    
    const handleMouseEnter = () => {
      isUserScrolling = true;
      isUserScrolling2 = true;
    };
    
    const handleMouseLeave = () => {
      isUserScrolling = false;
      isUserScrolling2 = false;
    };

    const handleScroll = () => {
      isUserScrolling = true;
      scrollAmount = scrollContainer.scrollLeft;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 2000);
    };

    const handleScroll2 = () => {
      isUserScrolling2 = true;
      scrollAmount2 = scrollContainer2.scrollWidth - scrollContainer2.clientWidth - scrollContainer2.scrollLeft;
      clearTimeout(scrollTimeout2);
      scrollTimeout2 = setTimeout(() => {
        isUserScrolling2 = false;
      }, 2000);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('scroll', handleScroll);

    scrollContainer2.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer2.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer2.addEventListener('scroll', handleScroll2);
    
    return () => {
      clearInterval(currentIntervalId);
      clearTimeout(scrollTimeout);
      clearTimeout(scrollTimeout2);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer2.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer2.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer2.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8  w-screen  overflow-hidden">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <HomeHeroText
              text={[`${t('latestNews').split(' & ')[0]} & ${t('latestNews').split(' & ')[1]}`]}
              highlight={{ text: t('latestNews').split(' & ')[1], color: '#22c55e' }}
              typingSpeed={40}
              pauseDuration={0}
              showCursor={true}
              cursorCharacter="|"
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              startOnVisible={true}
            />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('stayUpdated')}
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto overflow-y-hidden pb-6 pt-6 relative scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Duplicate reviews for seamless infinite scroll */}
          {[...reviews, ...reviews].map((review, index) => (
            <EN1
              key={index}
              platform={review.platform}
              timestamp={review.timestamp}
              title={review.title}
              content={review.content}
              author={review.author}
            />
          ))}
        </div>

        {/* Second row of reviews scrolling in opposite direction */}
        <div 
          ref={scrollRef2}
          className="flex gap-3 overflow-x-auto overflow-y-hidden pb-6 pt-6 relative mt-6 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Duplicate reviews for seamless infinite scroll */}
          {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
            <EN1
              key={`row2-${index}`}
              platform={review.platform}
              timestamp={review.timestamp}
              title={review.title}
              content={review.content}
              author={review.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationNews
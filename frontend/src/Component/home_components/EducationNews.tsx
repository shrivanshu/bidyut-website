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
    const container1 = scrollRef.current;
    const container2 = scrollRef2.current;
    if (!container1 || !container2) return;

    let speed = 1; // pixels per frame
    let speed2 = -1; // negative = opposite direction
    let isHovering1 = false;
    let isHovering2 = false;

    // Duplicate content for seamless loop
    container1.innerHTML += container1.innerHTML;
    container2.innerHTML += container2.innerHTML;

    const step = () => {
      if (!isHovering1) {
        container1.scrollLeft += speed;
        if (container1.scrollLeft >= container1.scrollWidth / 2) {
          container1.scrollLeft = 0;
        }
      }
      if (!isHovering2) {
        container2.scrollLeft += speed2;
        if (container2.scrollLeft <= 0) {
          container2.scrollLeft = container2.scrollWidth / 2;
        }
      }
      requestAnimationFrame(step);
    };

    container1.addEventListener("mouseenter", () => (isHovering1 = true));
    container1.addEventListener("mouseleave", () => (isHovering1 = false));

    container2.addEventListener("mouseenter", () => (isHovering2 = true));
    container2.addEventListener("mouseleave", () => (isHovering2 = false));

    requestAnimationFrame(step);

    return () => {
      container1.replaceChildren(...Array.from(container1.children).slice(0, container1.children.length / 2));
      container2.replaceChildren(...Array.from(container2.children).slice(0, container2.children.length / 2));
    };
  }, []);

  return (
    <section className="pt-80 pb-0 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8  w-screen  overflow-hidden">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <HomeHeroText
              text={[`${t('latestNews').split(' & ')[0]} & ${t('latestNews').split(' & ')[1]}`]}
              highlight={{ text: t('latestNews').split(' & ')[1], color: '#537D5D' }}
              typingSpeed={40}
              pauseDuration={0}
              showCursor={false}
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

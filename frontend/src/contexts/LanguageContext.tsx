import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'hi' | 'ur' | 'bn' | 'ja';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLanguageName: (lang: Language) => string;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    aboutUs: 'About Us',
    school: 'School',
    robots: 'Robot\'s',
    contact: 'Contact',
    career: 'Career',
    gallery: 'Gallery',
    loginToLms: 'Login To LMS',
    
    // Robot dropdown
    robotDevelopment: 'Robot Development',
    aiSolutions: 'AI Solutions',
    automation: 'Automation',
    
    // Hero section
    learnRobotics: 'Learn Robotics. Build the Future.',
    thinkLimitless: 'Think Limitless',
    learn: 'Learn',
    beyondBoundaries: 'Beyond Boundaries',
    heroDescription: 'At Bidyut, we go beyond textbooks — offering practical robotics learning powered by AI, coding, and STEAM. Discover a new way to build, program, and solve real-world challenges with creativity.',
    scheduleDemoCall: 'Schedule A Demo Call',
    
    // Offerings
    ourOfferings: 'Our Offerings',
    offeringsSubtitle: 'Discover how Bidyut is transforming education and industry through innovative robotics solutions',
    offeringsInteractionHint: 'Click on any card to explore • Hover for details • Auto-scrolling pauses on interaction',
    collaborativeLearning: 'Collaborative Learning Spaces',
    collaborativeLearningDesc: 'Connect with peers worldwide in virtual study rooms where you can share resources, discuss concepts, and solve problems together.',
    smartProgress: 'Smart Progress Tracking',
    smartProgressDesc: 'Monitor your learning journey with detailed analytics and insights that help you identify strengths and areas for improvement.',
    interactiveWorkshops: 'Interactive Workshops',
    interactiveWorkshopsDesc: 'Engage in hands-on workshops led by experts to deepen your understanding and apply theoretical knowledge to real-world scenarios.',
    roboticsLabs: 'Robotics Simulation Labs',
    roboticsLabsDesc: 'Practice and experiment with robotics in a safe, virtual environment before deploying your solutions in the physical world.',
    personalizedMentorship: 'Personalized Mentorship',
    personalizedMentorshipDesc: 'Receive one-on-one guidance from industry professionals to accelerate your growth and achieve your career goals.',
    
    // LMS Section
    advancedLms: 'Advanced Learning Management System',
    lmsSubtitle: 'Discover our LMS platform designed to revolutionize education.',
    bidyutSmartLms: 'Bidyut Smart LMS',
    lmsDescription: 'Bidyut LMS offers interactive lessons in Robotics, Coding, and AI with gamified learning for school students. Teachers can easily assign tasks and track progress in real-time. Accessible anytime, it ensures smooth and secure learning in class or at home.',
    personalizedLearningPaths: 'Personalized Learning Paths',
    aiDrivenSystem: 'AI-driven system creates customized journeys based on learning style.',
    roboticsLabSimulation: 'Robotics Lab Simulation',
    practiceVirtual: 'Practice building and programming robots virtually with instant feedback.',
    
    // Education Stream
    streamEducation: 'STREAM Education',
    stream: 'STREAM',
    streamEducationDescription: 'STREAM Education blends Science, Technology, Robotics, Engineering, Arts, and Math to spark creativity and real-world problem-solving in learners',
    roboMain: 'Robo Main',
    roboMainDescription: 'Main robotic demonstration video',
    roboDance: 'Robo Dance',
    roboDanceDescription: 'Robotic dance performance',
    roboDance2: 'Robo Dance 2',
    roboDance2Description: 'Second robotic dance sequence',
    roboDance3: 'Robo Dance 3',
    roboDance3Description: 'Advanced robotic movements',
    roboDance5: 'Robo Dance 5',
    roboDance5Description: 'Final robotic performance',
    
    // Testimonials
    whatOurPartnersSay: 'What Our Partners Say',
    partnersTestimonialDescription: 'Discover how Bidyut is transforming education and industry through innovative robotics solutions',
    tapToViewOthers: 'TAP TO VIEW OTHERS',

    // Education News
    latestNews: 'Latest Robotics & Education News',
    stayUpdated: 'Stay updated with the latest innovation in robotics and education technology',
    
    // Trusted Partners
    trustedPartners: 'Trusted Partners',
    partnersDescription: 'We are proud to collaborate with industry-leading organizations that share our vision and values. Their continued trust and support help us deliver excellence every step of the way.',
    
    // About Page - Static Section
    bidyutFocuses: 'Bidyut Focuses on',
    educatingStudents: 'Educating Students',
    actWithIntegrity: 'to act with Integrity in an increasingly',
    digitalWorld: 'digital world',
    aboutDescription: 'Bidyut\'s trajectory is to bring the future of education to your doorsteps. We are on a mission to uplift the education system of India by developing the world\'s most advanced Coding and Robotics education for the children of our country.',
    ourMission: 'Our Mission',
    missionStatement: 'To create the most compelling education company of the 21st century by driving students towards conceptual, technological & fun-based learning.',
    ourVision: 'Our Vision',
    visionStatement: 'To prepare every child for a technological and challenging world ahead by fostering innovation through personalized learning experiences.',
    
    // Gallery Page
    knowUsMore: 'Know Us More',
    discoverHeart: 'Discover The Heart And Soul Of Bidyut Innovation – Our Mission, Our Team, And Our Vision For Transforming Education Through Technology.',
    awardWinning: 'Award Winning',
    digitalInnovation: 'Digital Innovation',
    celebratingJourney: 'Celebrating our journey of innovation, excellence, and impact in the field of technology and education.',
    nationalRoboticsAward: 'National Robotics Innovation Award',
    roboticsAwardDesc: 'Recognized for outstanding contributions to STEM education and robotics innovation',
    globalYouthEmpowerment: 'Global Youth Empowerment Recognition',
    youthEmpowermentDesc: 'Pioneering technology education for underserved communities',
    edtechExcellence: 'EdTech Excellence Certificate',
    edtechExcellenceDesc: 'Top-rated educational technology provider in India',
    inspiringGallery: 'Inspiring Gallery',
    innovationThroughTech: 'Innovation Through Tech',
    galleryDescription: 'For over 12 years, Bidyut Innovation has been revolutionizing robotics education across India. We\'ve empowered 45,000+ students and transformed 30+ schools with cutting-edge technology and hands-on learning experiences.',
    exploreOurGallery: 'Explore Our Gallery',
    projectsCompleted: 'Projects Completed',
    teamMembers: 'Team Members',
    happyClients: 'Happy Clients',
    yearsExperience: 'Years Experience',
    
    // Footer
    bidyutTechnologies: 'Bidyut Technologies',
    footerDescription: 'Leading provider of advanced robotics and technology solutions for educational institutions. Empowering the next generation through innovative STEM education and cutting-edge research.',
    quickLinks: 'Quick Links',
    contactInformation: 'Contact Information',
    address: 'Address',
    newsletter: 'Newsletter',
    newsletterDescription: 'Stay informed about our latest innovations, educational programs, and technology updates.',
    enterEmail: 'Enter Your Email Address',
    subscribeNewsletter: 'Subscribe to Newsletter',
    allRightsReserved: '© 2025 Bidyut Technologies. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    builtWithExcellence: 'Built with Excellence',
    
    // Categories (for filters)
    all: 'All',
    workspace: 'Workspace',
    technology: 'Technology',
    education: 'Education',
    team: 'Team',
    
    // Contact Page
    connectWithUs: 'Connect With Us. Build the Future.',
    getInTouch: 'Get in Touch',
    letsBuildSomethingGreat: "Let's Build Something Great",
    contactDescription: 'At Bidyut, we go beyond conversations — offering collaborative solutions powered by innovation, creativity, and expertise. Discover a new way to connect, collaborate, and solve real-world challenges with purpose.',
    letsTalkAboutProject: "Let's Talk About Your Project",
    name: 'Name',
    yourFullName: 'Your full name',
    emailAddress: 'Email Address',
    wellGetBackToYou: "We'll get back to you here",
    companyName: 'Company Name',
    letUsKnowWhoYouRepresent: 'Let us know who you represent',
    subject: 'Subject',
    whatsThisAbout: "What's this about?",
    message: 'Message',
    tellUsHowWeCanHelp: 'Tell us how we can help',
    sendMessage: 'Send Message',
    preferDirectApproach: 'Prefer a Direct Approach?',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    workingHours: 'Working Hours',
    workingHoursTime: 'Mon - Fri, 9AM - 6PM (IST)',
    easyAccess: 'Easy Access',
    wellConnected: 'Well Connected',
    open24_7: 'Open 24/7',
    alwaysAvailable: 'Always Available',
    primeLocation: 'Prime Location',
    cityCenter: 'City Center',
    visitOurOffice: 'Visit Our Office',
    getDirections: 'Get Directions',
    navigate: 'Navigate',
    
    // Gallery Hero
    inspiring: 'Inspiring',
    galleryInnovationTech: 'Innovation Through Tech',
    galleryHeroDescription: 'For over 12 years, Bidyut Innovation has been revolutionizing robotics education across India. We have empowered 45,000+ students and transformed 30+ schools with cutting-edge technology and hands-on learning experiences.',
    bidyutInnovation: 'Bidyut Innovation',
    studentsEmpowered: '45,000+ students',
    schoolsTransformed: '30+ schools',
    exploreProgram: 'Explore Program',
    partnerWithUs: 'Partner With Us'
  },
  hi: {
    // Header
    home: 'होम',
    aboutUs: 'हमारे बारे में',
    school: 'स्कूल',
    robots: 'रोबोट',
    contact: 'संपर्क',
    career: 'करियर',
    gallery: 'गैलरी',
    loginToLms: 'LMS में लॉगिन करें',
    
    // Robot dropdown
    robotDevelopment: 'रोबोट विकास',
    aiSolutions: 'AI समाधान',
    automation: 'स्वचालन',
    
    // Hero section
    learnRobotics: 'रोबोटिक्स सीखें। भविष्य का निर्माण करें।',
    thinkLimitless: 'असीमित सोचें',
    learn: 'सीखें',
    beyondBoundaries: 'सीमाओं के पार',
    heroDescription: 'बिद्युत में, हम पाठ्यपुस्तकों से आगे जाते हैं — AI, कोडिंग और STEAM द्वारा संचालित व्यावहारिक रोबोटिक्स शिक्षा प्रदान करते हैं। रचनात्मकता के साथ निर्माण, प्रोग्राम और वास्तविक दुनिया की चुनौतियों को हल करने का एक नया तरीका खोजें।',
    scheduleDemoCall: 'डेमो कॉल शेड्यूल करें',
    
    // Offerings
    ourOfferings: 'हमारी सेवाएं',
    offeringsSubtitle: 'जानें कि कैसे बिद्युत नवाचारी रोबोटिक्स समाधानों के माध्यम से शिक्षा और उद्योग को बदल रहा है',
    offeringsInteractionHint: 'अन्वेषण के लिए किसी भी कार्ड पर क्लिक करें • विवरण के लिए होवर करें • इंटरैक्शन पर ऑटो-स्क्रॉलिंग रुकती है',
    collaborativeLearning: 'सहयोगी शिक्षण स्थान',
    collaborativeLearningDesc: 'वर्चुअल अध्ययन कक्षों में दुनिया भर के साथियों के साथ जुड़ें जहाँ आप संसाधन साझा कर सकते हैं, अवधारणाओं पर चर्चा कर सकते हैं, और समस्याओं का समाधान कर सकते हैं।',
    smartProgress: 'स्मार्ट प्रगति ट्रैकिंग',
    smartProgressDesc: 'विस्तृत एनालिटिक्स और अंतर्दृष्टि के साथ अपनी शिक्षण यात्रा की निगरानी करें जो आपको अपनी शक्तियों और सुधार के क्षेत्रों को पहचानने में मदद करती है।',
    interactiveWorkshops: 'इंटरैक्टिव कार्यशालाएं',
    interactiveWorkshopsDesc: 'विशेषज्ञों के नेतृत्व में हाथ से की जाने वाली कार्यशालाओं में भाग लें ताकि आपकी समझ को गहरा बनाया जा सके और सैद्धांतिक ज्ञान को वास्तविक परिस्थितियों में लागू किया जा सके।',
    roboticsLabs: 'रोबोटिक्स सिमुलेशन लैब्स',
    roboticsLabsDesc: 'भौतिक संसार में अपने समाधानों को तैनात करने से पहले सुरक्षित, वर्चुअल वातावरण में रोबोटिक्स का अभ्यास और प्रयोग करें।',
    personalizedMentorship: 'व्यक्तिगत मार्गदर्शन',
    personalizedMentorshipDesc: 'अपनी वृद्धि को तेज़ करने और अपने कैरियर लक्ष्यों को प्राप्त करने के लिए उद्योग के पेशेवरों से एक-पर-एक मार्गदर्शन प्राप्त करें।',
    
    // LMS Section
    advancedLms: 'उन्नत शिक्षण प्रबंधन प्रणाली',
    lmsSubtitle: 'हमारे LMS प्लेटफॉर्म की खोज करें जो शिक्षा में क्रांति लाने के लिए डिज़ाइन किया गया है।',
    bidyutSmartLms: 'बिद्युत स्मार्ट LMS',
    lmsDescription: 'बिद्युत LMS स्कूली छात्रों के लिए गेमिफाइड लर्निंग के साथ रोबोटिक्स, कोडिंग और AI में इंटरैक्टिव पाठ प्रदान करता है। शिक्षक आसानी से कार्य सौंप सकते हैं और वास्तविक समय में प्रगति को ट्रैक कर सकते हैं।',
    personalizedLearningPaths: 'व्यक्तिगत शिक्षण पथ',
    aiDrivenSystem: 'AI-संचालित प्रणाली सीखने की शैली के आधार पर अनुकूलित यात्राएं बनाती है।',
    roboticsLabSimulation: 'रोबोटिक्स लैब सिमुलेशन',
    practiceVirtual: 'तत्काल फीडबैक के साथ रोबोट बनाने और प्रोग्रामिंग का वर्चुअल अभ्यास करें।',
    
    // Education Stream
    streamEducation: 'STREAM शिक्षा',
    stream: 'STREAM',
    streamEducationDescription: 'STREAM शिक्षा विज्ञान, प्रौद्योगिकी, रोबोटिक्स, इंजीनियरिंग, कला, और गणित को मिलाती है ताकि शिक्षार्थियों में रचनात्मकता और वास्तविक दुनिया की समस्या-समाधान की चिंगारी जगाई जा सके',
    roboMain: 'रोबो मुख्य',
    roboMainDescription: 'मुख्य रोबोटिक प्रदर्शन वीडियो',
    roboDance: 'रोबो डांस',
    roboDanceDescription: 'रोबोटिक डांस प्रदर्शन',
    roboDance2: 'रोबो डांस 2',
    roboDance2Description: 'दूसरा रोबोटिक डांस अनुक्रम',
    roboDance3: 'रोबो डांस 3',
    roboDance3Description: 'उन्नत रोबोटिक गतिविधियां',
    roboDance5: 'रोबो डांस 5',
    roboDance5Description: 'अंतिम रोबोटिक प्रदर्शन',
    
    // Testimonials
    whatOurPartnersSay: 'हमारे भागीदार क्या कहते हैं',
    partnersTestimonialDescription: 'जानें कि कैसे बिद्युत नवाचारी रोबोटिक्स समाधानों के माध्यम से शिक्षा और उद्योग को बदल रहा है',

    // Education News
    latestNews: 'नवीनतम रोबोटिक्स और शिक्षा समाचार',
    stayUpdated: 'रोबोटिक्स और शिक्षा प्रौद्योगिकी में नवीनतम नवाचार के साथ अपडेट रहें',
    
    // Trusted Partners
    trustedPartners: 'विश्वसनीय भागीदार',
    partnersDescription: 'हम उन उद्योग-अग्रणी संगठनों के साथ सहयोग करने पर गर्व करते हैं जो हमारी दृष्टि और मूल्यों को साझा करते हैं। उनका निरंतर विश्वास और समर्थन हर कदम पर उत्कृष्टता प्रदान करने में हमारी मदद करता है।',
    
    // Testimonials
    whatPartnersSay: 'हमारे भागीदार क्या कहते हैं',
    testimonialsSubtitle: 'जानें कि कैसे बिद्युत नवाचारी रोबोटिक्स समाधानों के माध्यम से शिक्षा और उद्योग को बदल रहा है',
    tapToViewOthers: 'अन्य देखने के लिए टैप करें',
    
    // About Page - Static Section
    bidyutFocuses: 'बिद्युत फोकस करता है',
    educatingStudents: 'छात्रों को शिक्षित करने पर',
    actWithIntegrity: 'तेजी से बढ़ती',
    digitalWorld: 'डिजिटल दुनिया में अखंडता के साथ कार्य करने के लिए',
    aboutDescription: 'बिद्युत का पथ शिक्षा के भविष्य को आपके दरवाजे तक लाना है। हम अपने देश के बच्चों के लिए दुनिया की सबसे उन्नत कोडिंग और रोबोटिक्स शिक्षा विकसित करके भारत की शिक्षा प्रणाली को उन्नत बनाने के मिशन पर हैं।',
    ourMission: 'हमारा मिशन',
    missionStatement: '21वीं सदी की सबसे प्रेरणादायक शिक्षा कंपनी बनाना और छात्रों को वैचारिक, तकनीकी और मजेदार शिक्षा की ओर प्रेरित करना।',
    ourVision: 'हमारी दृष्टि',
    visionStatement: 'व्यक्तिगत शिक्षण अनुभवों के माध्यम से नवाचार को बढ़ावा देकर हर बच्चे को आगे की तकनीकी और चुनौतीपूर्ण दुनिया के लिए तैयार करना।',
    
    // Gallery Page
    knowUsMore: 'हमें और जानें',
    discoverHeart: 'बिद्युत इनोवेशन के दिल और आत्मा की खोज करें – हमारा मिशन, हमारी टीम, और प्रौद्योगिकी के माध्यम से शिक्षा को बदलने की हमारी दृष्टि।',
    awardWinning: 'पुरस्कार विजेता',
    digitalInnovation: 'डिजिटल नवाचार',
    celebratingJourney: 'प्रौद्योगिकी और शिक्षा के क्षेत्र में नवाचार, उत्कृष्टता और प्रभाव की हमारी यात्रा का जश्न मनाना।',
    nationalRoboticsAward: 'राष्ट्रीय रोबोटिक्स नवाचार पुरस्कार',
    roboticsAwardDesc: 'STEM शिक्षा और रोबोटिक्स नवाचार में उत्कृष्ट योगदान के लिए मान्यता',
    globalYouthEmpowerment: 'वैश्विक युवा सशक्तिकरण मान्यता',
    youthEmpowermentDesc: 'वंचित समुदायों के लिए अग्रणी प्रौद्योगिकी शिक्षा',
    edtechExcellence: 'EdTech उत्कृष्टता प्रमाणपत्र',
    edtechExcellenceDesc: 'भारत में शीर्ष श्रेणी का शैक्षिक प्रौद्योगिकी प्रदाता',
    inspiringGallery: 'प्रेरणादायक गैलरी',
    innovationThroughTech: 'प्रौद्योगिकी के माध्यम से नवाचार',
    galleryDescription: '12 से अधिक वर्षों से, बिद्युत इनोवेशन भारत भर में रोबोटिक्स शिक्षा में क्रांति ला रहा है। हमने 45,000+ छात्रों को सशक्त बनाया है और अत्याधुनिक प्रौद्योगिकी और व्यावहारिक शिक्षण अनुभवों के साथ 30+ स्कूलों को बदल दिया है।',
    exploreOurGallery: 'हमारी गैलरी का अन्वेषण करें',
    projectsCompleted: 'पूर्ण परियोजनाएं',
    teamMembers: 'टीम सदस्य',
    happyClients: 'खुश ग्राहक',
    yearsExperience: 'साल का अनुभव',
    
    // Footer
    bidyutTechnologies: 'बिद्युत टेक्नोलॉजीज',
    footerDescription: 'शैक्षणिक संस्थानों के लिए उन्नत रोबोटिक्स और प्रौद्योगिकी समाधानों का अग्रणी प्रदाता। नवाचारी STEM शिक्षा और अत्याधुनिक अनुसंधान के माध्यम से अगली पीढ़ी को सशक्त बनाना।',
    quickLinks: 'त्वरित लिंक',
    contactInformation: 'संपर्क जानकारी',
    address: 'पता',
    newsletter: 'न्यूज़लेटर',
    newsletterDescription: 'हमारे नवीनतम नवाचार, शैक्षिक कार्यक्रम और प्रौद्योगिकी अपडेट के बारे में सूचित रहें।',
    enterEmail: 'अपना ईमेल पता दर्ज करें',
    subscribeNewsletter: 'न्यूज़लेटर की सदस्यता लें',
    allRightsReserved: '© 2025 बिद्युत टेक्नोलॉजीज। सभी अधिकार सुरक्षित।',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    cookiePolicy: 'कुकी नीति',
    builtWithExcellence: 'उत्कृष्टता के साथ निर्मित',
    
    // Categories (for filters)
    all: 'सभी',
    workspace: 'कार्यक्षेत्र',
    technology: 'प्रौद्योगिकी',
    education: 'शिक्षा',
    team: 'टीम',
    
    // Contact Page
    connectWithUs: 'हमसे जुड़ें। भविष्य का निर्माण करें।',
    getInTouch: 'संपर्क करें',
    letsBuildSomethingGreat: 'आइए कुछ बेहतरीन बनाते हैं',
    contactDescription: 'बिद्युत में, हम बातचीत से आगे जाते हैं — नवाचार, रचनात्मकता और विशेषज्ञता से संचालित सहयोगी समाधान प्रदान करते हैं। उद्देश्य के साथ जुड़ने, सहयोग करने और वास्तविक दुनिया की चुनौतियों को हल करने का एक नया तरीका खोजें।',
    letsTalkAboutProject: 'आइए आपकी परियोजना के बारे में बात करें',
    name: 'नाम',
    yourFullName: 'आपका पूरा नाम',
    emailAddress: 'ईमेल पता',
    wellGetBackToYou: 'हम आपसे यहाँ संपर्क करेंगे',
    companyName: 'कंपनी का नाम',
    letUsKnowWhoYouRepresent: 'हमें बताएं कि आप किसका प्रतिनिधित्व करते हैं',
    subject: 'विषय',
    whatsThisAbout: 'यह किस बारे में है?',
    message: 'संदेश',
    tellUsHowWeCanHelp: 'हमें बताएं कि हम कैसे मदद कर सकते हैं',
    sendMessage: 'संदेश भेजें',
    preferDirectApproach: 'प्रत्यक्ष संपर्क पसंद करते हैं?',
    phoneLabel: 'फोन',
    emailLabel: 'ईमेल',
    workingHours: 'कार्य समय',
    workingHoursTime: 'सोम - शुक्र, सुबह 9 - शाम 6 (IST)',
    easyAccess: 'आसान पहुंच',
    wellConnected: 'अच्छी तरह जुड़ा हुआ',
    open24_7: '24/7 खुला',
    alwaysAvailable: 'हमेशा उपलब्ध',
    primeLocation: 'प्रमुख स्थान',
    cityCenter: 'शहर केंद्र',
    visitOurOffice: 'हमारे कार्यालय से मिलें',
    getDirections: 'दिशा निर्देश प्राप्त करें',
    navigate: 'नेविगेट करें',
    
    // Gallery Hero
    inspiring: 'प्रेरणादायक',
    galleryInnovationTech: 'प्रौद्योगिकी के माध्यम से नवाचार',
    galleryHeroDescription: '12 वर्षों से अधिक समय से, बिद्युत इनोवेशन भारत भर में रोबोटिक्स शिक्षा में क्रांति ला रहा है। हमने अत्याधुनिक प्रौद्योगिकी और व्यावहारिक अधिगम अनुभवों के साथ 45,000+ छात्रों को सशक्त बनाया है और 30+ स्कूलों को बदला है।',
    bidyutInnovation: 'बिद्युत इनोवेशन',
    studentsEmpowered: '45,000+ छात्र',
    schoolsTransformed: '30+ स्कूल',
    exploreProgram: 'कार्यक्रम देखें',
    partnerWithUs: 'हमारे साथ साझेदारी करें'
  },
  bn: {
    // Header
    home: 'হোম',
    aboutUs: 'আমাদের সম্পর্কে',
    school: 'স্কুল',
    robots: 'রোবট',
    contact: 'যোগাযোগ',
    career: 'ক্যারিয়ার',
    gallery: 'গ্যালারি',
    loginToLms: 'LMS এ লগইন করুন',
    
    // Robot dropdown
    robotDevelopment: 'রোবট উন্নয়ন',
    aiSolutions: 'AI সমাধান',
    automation: 'স্বয়ংক্রিয়করণ',
    
    // Hero section
    learnRobotics: 'রোবোটিক্স শিখুন। ভবিষ্যত গড়ুন।',
    thinkLimitless: 'সীমাহীন চিন্তা করুন',
    learn: 'শিখুন',
    beyondBoundaries: 'সীমানার বাইরে',
    heroDescription: 'বিদ্যুতে, আমরা পাঠ্যবইয়ের বাইরে যাই — AI, কোডিং এবং STEAM দ্বারা চালিত ব্যবহারিক রোবোটিক্স শিক্ষা প্রদান করি। সৃজনশীলতার সাথে তৈরি, প্রোগ্রাম এবং বাস্তব জগতের চ্যালেঞ্জ সমাধানের নতুন উপায় আবিষ্কার করুন।',
    scheduleDemoCall: 'ডেমো কল শিডিউল করুন',
    
    // Offerings
    ourOfferings: 'আমাদের সেবাসমূহ',
    offeringsSubtitle: 'আবিষ্কার করুন কিভাবে বিদ্যুত উদ্ভাবনী রোবোটিক্স সমাধানের মাধ্যমে শিক্ষা এবং শিল্পে রূপান্তর আনছে',
    offeringsInteractionHint: 'অন্বেষণের জন্য যেকোনো কার্ডে ক্লিক করুন • বিস্তারিত জানতে হোভার করুন • ইন্টারঅ্যাকশনে অটো-স্ক্রলিং থেমে যায়',
    collaborativeLearning: 'সহযোগিতামূলক শিক্ষার স্থান',
    collaborativeLearningDesc: 'ভার্চুয়াল স্টাডি রুমে বিশ্বব্যাপী সহকর্মীদের সাথে সংযুক্ত হোন যেখানে আপনি সম্পদ ভাগ করতে, ধারণা নিয়ে আলোচনা করতে এবং একসাথে সমস্যার সমাধান করতে পারেন।',
    smartProgress: 'স্মার্ট অগ্রগতি ট্র্যাকিং',
    smartProgressDesc: 'বিস্তারিত অ্যানালিটিক্স এবং অন্তর্দৃষ্টি দিয়ে আপনার শেখার যাত্রা পর্যবেক্ষণ করুন যা আপনাকে শক্তি এবং উন্নতির ক্ষেত্রগুলি চিহ্নিত করতে সাহায্য করে।',
    interactiveWorkshops: 'ইন্টারঅ্যাক্টিভ কর্মশালা',
    interactiveWorkshopsDesc: 'বিশেষজ্ঞদের নেতৃত্বে হাতে-কলমে কর্মশালায় অংশগ্রহণ করুন যা আপনার বোঝাপড়া গভীর করতে এবং তাত্ত্বিক জ্ঞানকে বাস্তব-বিশ্বের পরিস্থিতিতে প্রয়োগ করতে সাহায্য করে।',
    roboticsLabs: 'রোবোটিক্স সিমুলেশন ল্যাব',
    roboticsLabsDesc: 'ভৌত জগতে আপনার সমাধান স্থাপনের আগে নিরাপদ, ভার্চুয়াল পরিবেশে রোবোটিক্স অনুশীলন এবং পরীক্ষা করুন।',
    personalizedMentorship: 'ব্যক্তিগতকৃত পরামর্শদান',
    personalizedMentorshipDesc: 'আপনার বৃদ্ধি ত্বরান্বিত করতে এবং আপনার কর্মজীবনের লক্ষ্য অর্জনে শিল্প পেশাদারদের কাছ থেকে এক-এর-উপর-এক নির্দেশনা গ্রহণ করুন।',
    
    // LMS Section
    advancedLms: 'উন্নত শিক্ষণ ব্যবস্থাপনা সিস্টেম',
    lmsSubtitle: 'আমাদের LMS প্ল্যাটফর্ম আবিষ্কার করুন যা শিক্ষায় বিপ্লব আনার জন্য ডিজাইন করা হয়েছে।',
    bidyutSmartLms: 'বিদ্যুত স্মার্ট LMS',
    lmsDescription: 'বিদ্যুত LMS স্কুল শিক্ষার্থীদের জন্য গেমিফাইড লার্নিং সহ রোবোটিক্স, কোডিং এবং AI-তে ইন্টারঅ্যাক্টিভ পাঠ প্রদান করে। শিক্ষকরা সহজেই কাজ বরাদ্দ করতে এবং রিয়েল-টাইমে অগ্রগতি ট্র্যাক করতে পারেন।',
    personalizedLearningPaths: 'ব্যক্তিগতকৃত শিক্ষার পথ',
    aiDrivenSystem: 'AI-চালিত সিস্টেম শেখার শৈলীর ভিত্তিতে কাস্টমাইজড যাত্রা তৈরি করে।',
    roboticsLabSimulation: 'রোবোটিক্স ল্যাব সিমুলেশন',
    practiceVirtual: 'তাৎক্ষণিক ফিডব্যাকের সাথে রোবট নির্মাণ এবং প্রোগ্রামিংয়ের ভার্চুয়াল অনুশীলন করুন।',
    
    // Education Stream
    streamEducation: 'STREAM শিক্ষা',
    stream: 'STREAM',
    streamEducationDescription: 'STREAM শিক্ষা বিজ্ঞান, প্রযুক্তি, রোবোটিক্স, ইঞ্জিনিয়ারিং, শিল্প, এবং গণিতকে মিশ্রিত করে শিক্ষার্থীদের মধ্যে সৃজনশীলতা এবং বাস্তব জগতের সমস্যা সমাধানের স্ফুলিঙ্গ জাগাতে',
    roboMain: 'রোবো মূল',
    roboMainDescription: 'মূল রোবোটিক প্রদর্শনী ভিডিও',
    roboDance: 'রোবো ডান্স',
    roboDanceDescription: 'রোবোটিক নৃত্য প্রদর্শনী',
    roboDance2: 'রোবো ডান্স ২',
    roboDance2Description: 'দ্বিতীয় রোবোটিক নৃত্য ক্রম',
    roboDance3: 'রোবো ডান্স ৩',
    roboDance3Description: 'উন্নত রোবোটিক চলাচল',
    roboDance5: 'রোবো ডান্স ৫',
    roboDance5Description: 'চূড়ান্ত রোবোটিক প্রদর্শনী',
    
    // Testimonials
    whatOurPartnersSay: 'আমাদের অংশীদাররা কী বলেন',
    partnersTestimonialDescription: 'জানুন কীভাবে বিদ্যুত উদ্ভাবনী রোবোটিক্স সমাধানের মাধ্যমে শিক্ষা ও শিল্পকে রূপান্তরিত করছে',

    // Education News
    latestNews: 'সর্বশেষ রোবোটিক্স ও শিক্ষা সংবাদ',
    stayUpdated: 'রোবোটিক্স এবং শিক্ষা প্রযুক্তিতে সর্বশেষ উদ্ভাবনের সাথে আপডেট থাকুন',
    
    // Trusted Partners
    trustedPartners: 'বিশ্বস্ত অংশীদার',
    partnersDescription: 'আমরা এমন শিল্প-নেতৃত্বাধীন সংস্থাগুলির সাথে সহযোগিতা করতে গর্বিত যারা আমাদের দৃষ্টিভঙ্গি এবং মূল্যবোধ ভাগ করে নেয়। তাদের অব্যাহত বিশ্বাস এবং সহায়তা আমাদের প্রতিটি পদক্ষেপে উৎকর্ষতা প্রদান করতে সাহায্য করে।',
    
    // Testimonials
    whatPartnersSay: 'আমাদের অংশীদাররা যা বলেন',
    testimonialsSubtitle: 'আবিষ্কার করুন কিভাবে বিদ্যুত উদ্ভাবনী রোবোটিক্স সমাধানের মাধ্যমে শিক্ষা এবং শিল্পে রূপান্তর আনছে',
    tapToViewOthers: 'অন্যদের দেখতে ট্যাপ করুন',
    
    // About Page - Static Section
    bidyutFocuses: 'বিদ্যুত ফোকাস করে',
    educatingStudents: 'শিক্ষার্থীদের শিক্ষিত করতে',
    actWithIntegrity: 'ক্রমবর্ধমান',
    digitalWorld: 'ডিজিটাল জগতে সততার সাথে কাজ করার জন্য',
    aboutDescription: 'বিদ্যুতের পথ হল শিক্ষার ভবিষ্যতকে আপনার দোরগোড়ায় নিয়ে আসা। আমরা আমাদের দেশের শিশুদের জন্য বিশ্বের সবচেয়ে উন্নত কোডিং এবং রোবোটিক্স শিক্ষা উন্নয়ন করে ভারতের শিক্ষা ব্যবস্থা উন্নত করার মিশনে রয়েছি।',
    ourMission: 'আমাদের মিশন',
    missionStatement: '২১শ শতাব্দীর সবচেয়ে প্রভাবশালী শিক্ষা কোম্পানি তৈরি করা এবং ছাত্রছাত্রীদের ধারণাগত, প্রযুক্তিগত এবং মজাদার শিক্ষার দিকে চালিত করা।',
    ourVision: 'আমাদের দৃষ্টিভঙ্গি',
    visionStatement: 'ব্যক্তিগতকৃত শেখার অভিজ্ঞতার মাধ্যমে উদ্ভাবনকে উৎসাহিত করে প্রতিটি শিশুকে এগিয়ে থাকা প্রযুক্তিগত এবং চ্যালেঞ্জিং বিশ্বের জন্য প্রস্তুত করা।',
    
    // Gallery Page
    knowUsMore: 'আমাদের আরো জানুন',
    discoverHeart: 'বিদ্যুত ইনোভেশনের হৃদয় এবং আত্মা আবিষ্কার করুন – আমাদের মিশন, আমাদের দল, এবং প্রযুক্তির মাধ্যমে শিক্ষা রূপান্তরের জন্য আমাদের দৃষ্টিভঙ্গি।',
    awardWinning: 'পুরস্কার বিজয়ী',
    digitalInnovation: 'ডিজিটাল উদ্ভাবন',
    celebratingJourney: 'প্রযুক্তি এবং শিক্ষার ক্ষেত্রে উদ্ভাবন, উৎকর্ষতা এবং প্রভাবের আমাদের যাত্রা উদযাপন করা।',
    nationalRoboticsAward: 'জাতীয় রোবোটিক্স উদ্ভাবন পুরস্কার',
    roboticsAwardDesc: 'STEM শিক্ষা এবং রোবোটিক্স উদ্ভাবনে অসাধারণ অবদানের জন্য স্বীকৃত',
    globalYouthEmpowerment: 'বিশ্বব্যাপী যুব ক্ষমতায়ন স্বীকৃতি',
    youthEmpowermentDesc: 'সুবিধাবঞ্চিত সম্প্রদায়ের জন্য অগ্রগামী প্রযুক্তি শিক্ষা',
    edtechExcellence: 'EdTech উৎকর্ষতা সার্টিফিকেট',
    edtechExcellenceDesc: 'ভারতে শীর্ষ রেটেড শিক্ষা প্রযুক্তি প্রদানকারী',
    inspiringGallery: 'অনুপ্রেরণামূলক গ্যালারি',
    innovationThroughTech: 'প্রযুক্তির মাধ্যমে উদ্ভাবন',
    galleryDescription: '১২ বছরেরও বেশি সময় ধরে, বিদ্যুত ইনোভেশন সারা ভারতে রোবোটিক্স শিক্ষায় বিপ্লব ঘটাচ্ছে। আমরা ৪৫,০০০+ শিক্ষার্থীকে ক্ষমতায়িত করেছি এবং অত্যাধুনিক প্রযুক্তি এবং হাতে-কলমে শেখার অভিজ্ঞতার সাথে ৩০+ স্কুল রূপান্তরিত করেছি।',
    exploreOurGallery: 'আমাদের গ্যালারি অন্বেষণ করুন',
    projectsCompleted: 'সম্পন্ন প্রকল্প',
    teamMembers: 'দলের সদস্য',
    happyClients: 'সন্তুষ্ট ক্লায়েন্ট',
    yearsExperience: 'বছরের অভিজ্ঞতা',
    
    // Footer
    bidyutTechnologies: 'বিদ্যুত প্রযুক্তি',
    footerDescription: 'শিক্ষা প্রতিষ্ঠানের জন্য উন্নত রোবোটিক্স এবং প্রযুক্তি সমাধানের অগ্রগামী প্রদানকারী। উদ্ভাবনী STEM শিক্ষা এবং অত্যাধুনিক গবেষণার মাধ্যমে পরবর্তী প্রজন্মকে ক্ষমতায়ন করা।',
    quickLinks: 'দ্রুত লিঙ্ক',
    contactInformation: 'যোগাযোগের তথ্য',
    address: 'ঠিকানা',
    newsletter: 'নিউজলেটার',
    newsletterDescription: 'আমাদের সর্বশেষ উদ্ভাবন, শিক্ষামূলক প্রোগ্রাম এবং প্রযুক্তি আপডেট সম্পর্কে অবগত থাকুন।',
    enterEmail: 'আপনার ইমেইল ঠিকানা প্রবেশ করান',
    subscribeNewsletter: 'নিউজলেটার সাবস্ক্রাইব করুন',
    allRightsReserved: '© ২০২৫ বিদ্যুত প্রযুক্তি। সকল অধিকার সংরক্ষিত।',
    privacyPolicy: 'গোপনীয়তা নীতি',
    termsOfService: 'সেবার শর্তাদি',
    cookiePolicy: 'কুকি নীতি',
    builtWithExcellence: 'উৎকর্ষতার সাথে নির্মিত',
    
    // Categories (for filters)
    all: 'সকল',
    workspace: 'কর্মক্ষেত্র',
    technology: 'প্রযুক্তি',
    education: 'শিক্ষা',
    team: 'দল',
    
    // Contact Page
    connectWithUs: 'আমাদের সাথে যুক্ত হন। ভবিষ্যত গড়ুন।',
    getInTouch: 'যোগাযোগ করুন',
    letsBuildSomethingGreat: 'চলুন কিছু দুর্দান্ত তৈরি করি',
    contactDescription: 'বিদ্যুতে, আমরা কথোপকথনের চেয়েও এগিয়ে যাই — উদ্ভাবন, সৃজনশীলতা এবং দক্ষতা দ্বারা চালিত সহযোগী সমাধান প্রদান করি। উদ্দেশ্যের সাথে সংযোগ, সহযোগিতা এবং বাস্তব-বিশ্বের চ্যালেঞ্জ সমাধানের একটি নতুন উপায় আবিষ্কার করুন।',
    letsTalkAboutProject: 'আপনার প্রকল্প সম্পর্কে কথা বলি',
    name: 'নাম',
    yourFullName: 'আপনার সম্পূর্ণ নাম',
    emailAddress: 'ইমেইল ঠিকানা',
    wellGetBackToYou: 'আমরা এখানে আপনার সাথে যোগাযোগ করব',
    companyName: 'কোম্পানির নাম',
    letUsKnowWhoYouRepresent: 'আপনি কার প্রতিনিধিত্ব করেন তা আমাদের জানান',
    subject: 'বিষয়',
    whatsThisAbout: 'এটা কিসের ব্যাপারে?',
    message: 'বার্তা',
    tellUsHowWeCanHelp: 'আমরা কীভাবে সাহায্য করতে পারি তা বলুন',
    sendMessage: 'বার্তা পাঠান',
    preferDirectApproach: 'সরাসরি যোগাযোগ পছন্দ করেন?',
    phoneLabel: 'ফোন',
    emailLabel: 'ইমেইল',
    workingHours: 'কর্মসময়',
    workingHoursTime: 'সোম - শুক্র, সকাল ৯টা - সন্ধ্যা ৬টা (IST)',
    easyAccess: 'সহজ প্রবেশ',
    wellConnected: 'ভালভাবে সংযুক্ত',
    open24_7: '২৪/৭ খোলা',
    alwaysAvailable: 'সর্বদা উপলব্ধ',
    primeLocation: 'প্রধান অবস্থান',
    cityCenter: 'শহরের কেন্দ্র',
    visitOurOffice: 'আমাদের অফিস দেখুন',
    getDirections: 'দিকনির্দেশনা পান',
    navigate: 'নেভিগেট করুন',
    
    // Gallery Hero
    inspiring: 'অনুপ্রেরণামূলক',
    galleryInnovationTech: 'প্রযুক্তির মাধ্যমে উদ্ভাবন',
    galleryHeroDescription: '১২ বছরেরও বেশি সময় ধরে, বিদ্যুত ইনোভেশন ভারত জুড়ে রোবোটিক্স শিক্ষায় বিপ্লব এনেছে। আমরা অত্যাধুনিক প্রযুক্তি এবং হাতে-কলমে শেখার অভিজ্ঞতার মাধ্যমে ৪৫,০০০+ শিক্ষার্থীকে ক্ষমতায়িত করেছি এবং ৩০+ স্কুলকে রূপান্তরিত করেছি।',
    bidyutInnovation: 'বিদ্যুত ইনোভেশন',
    studentsEmpowered: '৪৫,০০০+ শিক্ষার্থী',
    schoolsTransformed: '৩০+ স্কুল',
    exploreProgram: 'প্রোগ্রাম দেখুন',
    partnerWithUs: 'আমাদের সাথে অংশীদারিত্ব করুন'
  },
  ur: {
    // Header
    home: 'گھر',
    aboutUs: 'ہمارے بارے میں',
    school: 'اسکول',
    robots: 'روبوٹ',
    contact: 'رابطہ',
    career: 'کیریئر',
    gallery: 'گیلری',
    loginToLms: 'LMS میں لاگ ان کریں',
    
    // Robot dropdown
    robotDevelopment: 'روبوٹ ڈیولپمنٹ',
    aiSolutions: 'AI حل',
    automation: 'خودکار',
    
    // Hero section
    learnRobotics: 'روبوٹکس سیکھیں۔ مستقبل بنائیں۔',
    thinkLimitless: 'لامحدود سوچیں',
    learn: 'سیکھیں',
    beyondBoundaries: 'حدود سے آگے',
    heroDescription: 'بدیوت میں، ہم نصابی کتابوں سے آگے جاتے ہیں — AI، کوڈنگ اور STEAM کے ذریعے عملی روبوٹکس تعلیم فراہم کرتے ہیں۔ تخلیقیت کے ساتھ بنانے، پروگرام کرنے اور حقیقی دنیا کے چیلنجز حل کرنے کا نیا طریقہ دریافت کریں۔',
    scheduleDemoCall: 'ڈیمو کال کا شیڈول بنائیں',
    
    // Offerings
    ourOfferings: 'ہماری خدمات',
    offeringsSubtitle: 'دریافت کریں کہ بدیوت کیسے جدید روبوٹکس حل کے ذریعے تعلیم اور صنعت میں تبدیلی لا رہا ہے',
    offeringsInteractionHint: 'دریافت کے لیے کسی بھی کارڈ پر کلک کریں • تفصیلات کے لیے ہوور کریں • انٹرایکشن پر آٹو سکرولنگ رک جاتا ہے',
    collaborativeLearning: 'تعاونی سیکھنے کی جگہیں',
    collaborativeLearningDesc: 'ورچوئل اسٹڈی رومز میں دنیا بھر کے ساتھیوں سے جڑیں جہاں آپ وسائل شیئر کر سکتے ہیں، تصورات پر بحث کر سکتے ہیں، اور مسائل کا حل کر سکتے ہیں۔',
    smartProgress: 'اسمارٹ پیش قدمی ٹریکنگ',
    smartProgressDesc: 'تفصیلی تجزیات اور بصیرت کے ساتھ اپنے سیکھنے کے سفر کی نگرانی کریں جو آپ کو اپنی طاقتوں اور بہتری کے علاقوں کی شناخت میں مدد کرتا ہے۔',
    interactiveWorkshops: 'انٹرایکٹو ورکشاپس',
    interactiveWorkshopsDesc: 'ماہرین کی قیادت میں ہاتھوں سے کام کرنے والے ورکشاپس میں حصہ لیں تاکہ آپ کی سمجھ کو گہرا بنایا جا سکے اور نظریاتی علم کو حقیقی حالات میں لاگو کیا جا سکے۔',
    roboticsLabs: 'روبوٹکس سمولیشن لیبز',
    roboticsLabsDesc: 'جسمانی دنیا میں اپنے حل تعین کرنے سے پہلے محفوظ، ورچوئل ماحول میں روبوٹکس کی مشق اور تجربہ کریں۔',
    personalizedMentorship: 'ذاتی رہنمائی',
    personalizedMentorshipDesc: 'اپنی ترقی کو تیز کرنے اور اپنے کریئر کے اہداف حاصل کرنے کے لیے صنعت کے پیشہ ور افراد سے ایک-پر-ایک رہنمائی حاصل کریں۔',
    
    // LMS Section
    advancedLms: 'ایڈوانسڈ لرننگ منیجمنٹ سسٹم',
    lmsSubtitle: 'ہمارا LMS پلیٹ فارم دریافت کریں جو تعلیم میں انقلاب لانے کے لیے ڈیزائن کیا گیا ہے۔',
    bidyutSmartLms: 'بدیوت اسمارٹ LMS',
    lmsDescription: 'بدیوت LMS اسکول کے طلباء کے لیے گیمفائیڈ لرننگ کے ساتھ روبوٹکس، کوڈنگ اور AI میں انٹرایکٹو اسباق فراہم کرتا ہے۔ اساتذہ آسانی سے کام تفویض کر سکتے ہیں اور حقیقی وقت میں پیش قدمی کو ٹریک کر سکتے ہیں۔',
    personalizedLearningPaths: 'ذاتی سیکھنے کے راستے',
    aiDrivenSystem: 'AI-چلنے والا سسٹم سیکھنے کی طرز کی بنیاد پر حسب ضرورت سفر بناتا ہے۔',
    roboticsLabSimulation: 'روبوٹکس لیب سمولیشن',
    practiceVirtual: 'فوری فیڈ بیک کے ساتھ روبوٹ بنانے اور پروگرامنگ کی ورچوئل مشق کریں۔',
    
    // Education Stream
    streamEducation: 'STREAM تعلیم',
    stream: 'STREAM',
    streamEducationDescription: 'STREAM تعلیم سائنس، ٹیکنالوجی، روبوٹکس، انجینئرنگ، آرٹس، اور ریاضی کو ملاتی ہے تاکہ سیکھنے والوں میں تخلیقیت اور حقیقی دنیا کے مسئلے حل کرنے کی چنگاری جلائی جا سکے',
    roboMain: 'روبو مین',
    roboMainDescription: 'اصل روبوٹک مظاہرہ ویڈیو',
    roboDance: 'روبو ڈانس',
    roboDanceDescription: 'روبوٹک رقص کا مظاہرہ',
    roboDance2: 'روبو ڈانس 2',
    roboDance2Description: 'دوسرا روبوٹک رقص سلسلہ',
    roboDance3: 'روبو ڈانس 3',
    roboDance3Description: 'جدید روبوٹک حرکات',
    roboDance5: 'روبو ڈانس 5',
    roboDance5Description: 'آخری روبوٹک کارکردگی',
    
    // Testimonials
    whatOurPartnersSay: 'ہمارے شراکت دار کیا کہتے ہیں',
    partnersTestimonialDescription: 'دریافت کریں کہ بدیوت جدید روبوٹکس حل کے ذریعے تعلیم اور صنعت میں کیسے تبدیلی لا رہا ہے',

    // Education News
    latestNews: 'تازہ ترین روبوٹکس اور تعلیمی خبریں',
    stayUpdated: 'روبوٹکس اور تعلیمی ٹیکنالوجی میں جدید ترین نوویت کے ساتھ اپ ڈیٹ رہیں',
    
    // Trusted Partners
    trustedPartners: 'قابل اعتماد شراکت دار',
    partnersDescription: 'ہمیں ان صنعت کی قائدانہ تنظیموں کے ساتھ تعاون پر فخر ہے جو ہماری نقطہ نظر اور اقدار کو شیئر کرتی ہیں۔ ان کا مسلسل اعتماد اور حمایت ہر قدم پر بہترین کارکردگی فراہم کرنے میں ہماری مدد کرتا ہے۔',
    
    // Testimonials
    whatPartnersSay: 'ہمارے شراکت دار کیا کہتے ہیں',
    testimonialsSubtitle: 'دریافت کریں کہ بدیوت جدید روبوٹکس حل کے ذریعے تعلیم اور صنعت میں کیسے تبدیلی لا رہا ہے',
    tapToViewOthers: 'دوسروں کو دیکھنے کے لیے ٹیپ کریں',
    
    // About Page - Static Section
    bidyutFocuses: 'بدیوت فوکس کرتا ہے',
    educatingStudents: 'طلباء کی تعلیم پر',
    actWithIntegrity: 'تیزی سے بڑھتی',
    digitalWorld: 'ڈیجیٹل دنیا میں دیانتداری سے کام کرنے کے لیے',
    aboutDescription: 'بدیوت کا راستہ تعلیم کا مستقبل آپ کے دروازے تک لانا ہے۔ ہم اپنے ملک کے بچوں کے لیے دنیا کی سب سے جدید کوڈنگ اور روبوٹکس تعلیم تیار کر کے بھارت کے تعلیمی نظام کو بلند کرنے کے مشن پر ہیں۔',
    ourMission: 'ہمارا مشن',
    missionStatement: '21ویں صدی کی سب سے متاثر کن تعلیمی کمپنی بنانا اور طلباء کو تصوراتی، تکنیکی اور تفریحی سیکھنے کی طرف راغب کرنا۔',
    ourVision: 'ہماری نقطہ نظر',
    visionStatement: 'ذاتی سیکھنے کے تجربات کے ذریعے نئے پن کو فروغ دے کر ہر بچے کو آگے کی تکنیکی اور چیلنج بھری دنیا کے لیے تیار کرنا۔',
    
    // Gallery Page
    knowUsMore: 'ہمیں مزید جانیں',
    discoverHeart: 'بدیوت انوویشن کے دل اور روح کو دریافت کریں – ہمارا مشن، ہماری ٹیم، اور ٹیکنالوجی کے ذریعے تعلیم تبدیل کرنے کے لیے ہمارا نقطہ نظر۔',
    awardWinning: 'ایوارڈ یافتہ',
    digitalInnovation: 'ڈیجیٹل انوویشن',
    celebratingJourney: 'ٹیکنالوجی اور تعلیم کے میدان میں نئے پن، بہتری اور اثر کے ہمارے سفر کا جشن منانا۔',
    nationalRoboticsAward: 'قومی روبوٹکس انوویشن ایوارڈ',
    roboticsAwardDesc: 'STEM تعلیم اور روبوٹکس نئے پن میں شاندار تعاون کے لیے تسلیم شدہ',
    globalYouthEmpowerment: 'عالمی نوجوان بااختیار بنانے کا اعتراف',
    youthEmpowermentDesc: 'محروم برادریوں کے لیے پیشگام ٹیکنالوجی تعلیم',
    edtechExcellence: 'EdTech بہترین سرٹیفکیٹ',
    edtechExcellenceDesc: 'بھارت میں اعلیٰ درجہ کا تعلیمی ٹیکنالوجی فراہم کنندہ',
    inspiringGallery: 'متاثر کن گیلری',
    innovationThroughTech: 'ٹیکنالوجی کے ذریعے انوویشن',
    galleryDescription: '12 سال سے زیادہ، بدیوت انوویشن پورے بھارت میں روبوٹکس تعلیم میں انقلاب لا رہا ہے۔ ہم نے جدید ٹیکنالوجی اور عملی سیکھنے کے تجربات کے ساتھ 45,000+ طلباء کو بااختیار بنایا ہے اور 30+ اسکولوں کو تبدیل کیا ہے۔',
    exploreOurGallery: 'ہماری گیلری دیکھیں',
    projectsCompleted: 'مکمل پروجیکٹس',
    teamMembers: 'ٹیم ممبرز',
    happyClients: 'خوش کلائنٹس',
    yearsExperience: 'سال کا تجربہ',
    
    // Footer
    bidyutTechnologies: 'بدیوت ٹیکنالوجیز',
    footerDescription: 'تعلیمی اداروں کے لیے جدید روبوٹکس اور ٹیکنالوجی حل کا معروف فراہم کنندہ۔ نئے پن والی STEM تعلیم اور جدید تحقیق کے ذریعے اگلی نسل کو بااختیار بنانا۔',
    quickLinks: 'فوری لنکس',
    contactInformation: 'رابطہ کی معلومات',
    address: 'پتہ',
    newsletter: 'نیوز لیٹر',
    newsletterDescription: 'ہماری تازہ ترین نئے پن، تعلیمی پروگرامز اور ٹیکنالوجی اپ ڈیٹس کے بارے میں باخبر رہیں۔',
    enterEmail: 'اپنا ای میل ایڈریس داخل کریں',
    subscribeNewsletter: 'نیوز لیٹر سبسکرائب کریں',
    allRightsReserved: '© 2025 بدیوت ٹیکنالوجیز۔ تمام حقوق محفوظ ہیں۔',
    privacyPolicy: 'پرائیویسی پالیسی',
    termsOfService: 'سروس کی شرائط',
    cookiePolicy: 'کوکی پالیسی',
    builtWithExcellence: 'بہتری کے ساتھ بنایا گیا',
    
    // Categories (for filters)
    all: 'سب',
    workspace: 'ورک اسپیس',
    technology: 'ٹیکنالوجی',
    education: 'تعلیم',
    team: 'ٹیم',
    
    // Contact Page
    connectWithUs: 'ہم سے جڑیں۔ مستقبل بنائیں۔',
    getInTouch: 'رابطہ کریں',
    letsBuildSomethingGreat: 'آئیے کچھ شاندار بنائیں',
    contactDescription: 'بدیوت میں، ہم بات چیت سے آگے جاتے ہیں — نئے پن، تخلیقیت اور مہارت کے ذریعے تعاونی حل فراہم کرتے ہیں۔ مقصد کے ساتھ جڑنے، تعاون کرنے اور حقیقی دنیا کے چیلنجز حل کرنے کا نیا طریقہ دریافت کریں۔',
    letsTalkAboutProject: 'آئیے آپ کے پروجیکٹ کے بارے میں بات کریں',
    name: 'نام',
    yourFullName: 'آپ کا پورا نام',
    emailAddress: 'ای میل ایڈریس',
    wellGetBackToYou: 'ہم آپ سے یہاں رابطہ کریں گے',
    companyName: 'کمپنی کا نام',
    letUsKnowWhoYouRepresent: 'ہمیں بتائیں کہ آپ کس کی نمائندگی کرتے ہیں',
    subject: 'موضوع',
    whatsThisAbout: 'یہ کس بارے میں ہے؟',
    message: 'پیغام',
    tellUsHowWeCanHelp: 'ہمیں بتائیں کہ ہم کیسے مدد کر سکتے ہیں',
    sendMessage: 'پیغام بھیجیں',
    preferDirectApproach: 'براہ راست رابطہ ترجیح دیتے ہیں؟',
    phoneLabel: 'فون',
    emailLabel: 'ای میل',
    workingHours: 'کام کے اوقات',
    workingHoursTime: 'سوم - جمعہ، صبح 9 - شام 6 (IST)',
    easyAccess: 'آسان رسائی',
    wellConnected: 'بہتر طریقے سے جڑا ہوا',
    open24_7: '24/7 کھلا',
    alwaysAvailable: 'ہمیشہ دستیاب',
    primeLocation: 'اہم مقام',
    cityCenter: 'شہر کا مرکز',
    visitOurOffice: 'ہمارے دفتر آئیں',
    getDirections: 'سمت کے لیے رہنمائی حاصل کریں',
    navigate: 'نیویگیٹ کریں',
    
    // Gallery Hero
    inspiring: 'متاثر کن',
    galleryInnovationTech: 'ٹیکنالوجی کے ذریعے انوویشن',
    galleryHeroDescription: '12 سال سے زیادہ، بدیوت انوویشن پورے بھارت میں روبوٹکس تعلیم میں انقلاب لا رہا ہے۔ ہم نے جدید ٹیکنالوجی اور عملی سیکھنے کے تجربات کے ساتھ 45,000+ طلباء کو بااختیار بنایا ہے اور 30+ اسکولوں کو تبدیل کیا ہے۔',
    bidyutInnovation: 'بدیوت انوویشن',
    studentsEmpowered: '45,000+ طلباء',
    schoolsTransformed: '30+ اسکولز',
    exploreProgram: 'پروگرام دیکھیں',
    partnerWithUs: 'ہمارے ساتھ شراکت کریں'
  },
  ja: {
    // Header
    home: 'ホーム',
    aboutUs: '私たちについて',
    school: 'スクール',
    robots: 'ロボット',
    contact: 'お問い合わせ',
    career: 'キャリア',
    gallery: 'ギャラリー',
    loginToLms: 'LMSにログイン',
    
    // Robot dropdown
    robotDevelopment: 'ロボット開発',
    aiSolutions: 'AIソリューション',
    automation: '自動化',
    
    // Hero section
    learnRobotics: 'ロボティクスを学ぶ。未来を築く。',
    thinkLimitless: '無限に考える',
    learn: '学ぶ',
    beyondBoundaries: '境界を超えて',
    heroDescription: 'Bidyutでは、教科書を超えて — AI、コーディング、STEAMによる実践的なロボティクス学習を提供します。創造性とともに構築、プログラム、現実世界の課題解決の新しい方法を発見してください。',
    scheduleDemoCall: 'デモコールを予約',
    
    // Offerings
    ourOfferings: '私たちのサービス',
    offeringsSubtitle: 'Bidyutが革新的なロボティクスソリューションを通じて教育と産業をどのように変革しているかを発見してください',
    offeringsInteractionHint: '探索するには任意のカードをクリック • 詳細はホバー • インタラクションで自動スクロールが一時停止',
    collaborativeLearning: '協力的学習スペース',
    collaborativeLearningDesc: '仮想スタディルームで世界中の仲間とつながり、リソースを共有し、概念について話し合い、一緒に問題を解決できます。',
    smartProgress: 'スマート進捗追跡',
    smartProgressDesc: '詳細な分析と洞察でご自身の学習旅程を監視し、強みと改善領域を特定するのに役立ちます。',
    interactiveWorkshops: 'インタラクティブワークショップ',
    interactiveWorkshopsDesc: '専門家主導のハンズオンワークショップに参加し、理解を深め、理論的知識を現実世界のシナリオに適用できます。',
    roboticsLabs: 'ロボティクスシミュレーションラボ',
    roboticsLabsDesc: '物理的世界でソリューションを展開する前に、安全な仮想環境でロボティクスを練習し実験します。',
    personalizedMentorship: 'パーソナライズドメンターシップ',
    personalizedMentorshipDesc: '成長を加速し、キャリア目標を達成するために、業界専門家からの1対1の指導を受けます。',
    
    // LMS Section
    advancedLms: '高度学習管理システム',
    lmsSubtitle: '教育に革命をもたらすために設計されたLMSプラットフォームを発見してください。',
    bidyutSmartLms: 'Bidyut Smart LMS',
    lmsDescription: 'Bidyut LMSは、学校の生徒向けにゲーミフィケーションされた学習でロボティクス、コーディング、AIのインタラクティブレッスンを提供します。教師は簡単にタスクを割り当て、リアルタイムで進捗を追跡できます。',
    personalizedLearningPaths: 'パーソナライズド学習パス',
    aiDrivenSystem: 'AI駆動システムが学習スタイルに基づいてカスタマイズされた旅程を作成します。',
    roboticsLabSimulation: 'ロボティクスラボシミュレーション',
    practiceVirtual: '即座のフィードバックでロボットの構築とプログラミングを仮想練習します。',
    
    // Education Stream
    streamEducation: 'STREAM教育',
    stream: 'STREAM',
    streamEducationDescription: 'STREAM教育は、科学、技術、ロボティクス、工学、芸術、数学を融合し、学習者の創造性と現実世界での問題解決の火花を点火します',
    roboMain: 'ロボメイン',
    roboMainDescription: 'メインロボティクデモンストレーションビデオ',
    roboDance: 'ロボダンス',
    roboDanceDescription: 'ロボティクダンスパフォーマンス',
    roboDance2: 'ロボダンス2',
    roboDance2Description: '第二のロボティクダンスシーケンス',
    roboDance3: 'ロボダンス3',
    roboDance3Description: '高度なロボティック動作',
    roboDance5: 'ロボダンス5',
    roboDance5Description: '最終ロボティクパフォーマンス',
    
    // Testimonials
    whatOurPartnersSay: 'パートナーの声',
    partnersTestimonialDescription: 'Bidyutが革新的なロボティクスソリューションを通じて教育と産業をどのように変革しているかを発見してください',

    // Education News
    latestNews: '最新ロボティクス・教育ニュース',
    stayUpdated: 'ロボティクスと教育技術の最新イノベーションで最新情報を入手',
    
    // Trusted Partners
    trustedPartners: '信頼できるパートナー',
    partnersDescription: '私たちのビジョンと価値観を共有する業界をリードする組織との協力を誇りに思います。彼らの継続的な信頼とサポートが、あらゆる段階で優秀さを提供するのに役立ちます。',
    
    // Testimonials
    whatPartnersSay: 'パートナーが言うこと',
    testimonialsSubtitle: 'Bidyutが革新的なロボティクスソリューションを通じて教育と産業をどのように変革しているかを発見してください',
    tapToViewOthers: '他を見るためにタップ',
    
    // About Page - Static Section
    bidyutFocuses: 'Bidyutは焦点を当てる',
    educatingStudents: '学生を教育することに',
    actWithIntegrity: 'ますます',
    digitalWorld: 'デジタル世界で誠実に行動するために',
    aboutDescription: 'Bidyutの軌道は、教育の未来をあなたの玄関先にもたらすことです。私たちは、わが国の子どもたちのために世界で最も先進的なコーディングとロボティクス教育を開発することにより、インドの教育システムを向上させる使命にあります。',
    ourMission: '私たちのミッション',
    missionStatement: '21世紀で最も魅力的な教育会社を作り、学生を概念的、技術的、楽しい学習に向けて駆動すること。',
    ourVision: '私たちのビジョン',
    visionStatement: 'パーソナライズされた学習体験を通じてイノベーションを促進することにより、すべての子どもを技術的で挑戦的な世界に備える。',
    
    // Gallery Page
    knowUsMore: 'もっと私たちを知る',
    discoverHeart: 'Bidyut Innovationの心と魂を発見してください – 私たちのミッション、私たちのチーム、そして技術を通じて教育を変革するための私たちのビジョン。',
    awardWinning: '受賞歴',
    digitalInnovation: 'デジタルイノベーション',
    celebratingJourney: '技術と教育分野でのイノベーション、優秀さ、影響の私たちの旅を祝う。',
    nationalRoboticsAward: '国立ロボティクスイノベーション賞',
    roboticsAwardDesc: 'STEM教育とロボティクスイノベーションへの優れた貢献で認められました',
    globalYouthEmpowerment: 'グローバル青少年エンパワーメント認定',
    youthEmpowermentDesc: '恵まれないコミュニティのための先駆的技術教育',
    edtechExcellence: 'EdTech優秀証明書',
    edtechExcellenceDesc: 'インドでトップレートの教育技術プロバイダー',
    inspiringGallery: '感動的なギャラリー',
    innovationThroughTech: '技術を通じたイノベーション',
    galleryDescription: '12年以上にわたり、Bidyut Innovationはインド全土でロボティクス教育に革命をもたらしています。最先端技術と実践的学習体験で45,000+の学生を力づけ、30+の学校を変革しました。',
    exploreOurGallery: '私たちのギャラリーを探索',
    projectsCompleted: '完了プロジェクト',
    teamMembers: 'チームメンバー',
    happyClients: '満足クライアント',
    yearsExperience: '年の経験',
    
    // Footer
    bidyutTechnologies: 'Bidyut Technologies',
    footerDescription: '教育機関向けの先進ロボティクスと技術ソリューションの主要プロバイダー。革新的なSTEM教育と最先端研究を通じて次世代をエンパワーしています。',
    quickLinks: 'クイックリンク',
    contactInformation: '連絡先情報',
    address: '住所',
    newsletter: 'ニューズレター',
    newsletterDescription: '私たちの最新イノベーション、教育プログラム、技術アップデートについて最新情報を入手してください。',
    enterEmail: 'メールアドレスを入力してください',
    subscribeNewsletter: 'ニューズレターを購読',
    allRightsReserved: '© 2025 Bidyut Technologies. 全著作権所有。',
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: 'サービス利用規約',
    cookiePolicy: 'クッキーポリシー',
    builtWithExcellence: '優秀さで構築',
    
    // Categories (for filters)
    all: 'すべて',
    workspace: 'ワークスペース',
    technology: '技術',
    education: '教育',
    team: 'チーム',
    
    // Contact Page
    connectWithUs: '私たちと繋がろう。未来を築こう。',
    getInTouch: 'お問い合わせ',
    letsBuildSomethingGreat: '一緒に素晴らしいものを作りましょう',
    contactDescription: 'Bidyutでは、会話を超えて — イノベーション、創造性、専門知識によって駆動される協力的ソリューションを提供します。目的を持って接続し、協力し、現実世界の課題を解決する新しい方法を発見してください。',
    letsTalkAboutProject: 'あなたのプロジェクトについて話しましょう',
    name: '名前',
    yourFullName: 'フルネーム',
    emailAddress: 'メールアドレス',
    wellGetBackToYou: 'ここでご連絡いたします',
    companyName: '会社名',
    letUsKnowWhoYouRepresent: 'どちらを代表されているかお知らせください',
    subject: '件名',
    whatsThisAbout: 'これは何についてですか？',
    message: 'メッセージ',
    tellUsHowWeCanHelp: 'どのようにお手伝いできるかお聞かせください',
    sendMessage: 'メッセージを送信',
    preferDirectApproach: '直接的なアプローチをお好みですか？',
    phoneLabel: '電話',
    emailLabel: 'Eメール',
    workingHours: '営業時間',
    workingHoursTime: '月 - 金、午前9時 - 午後6時 (IST)',
    easyAccess: '簡単アクセス',
    wellConnected: 'よく接続されている',
    open24_7: '24/7オープン',
    alwaysAvailable: 'いつでも利用可能',
    primeLocation: 'プライムロケーション',
    cityCenter: '市中心部',
    visitOurOffice: '私たちのオフィスを訪問',
    getDirections: '道順を取得',
    navigate: 'ナビゲート',
    
    // Gallery Hero
    inspiring: '感動的な',
    galleryInnovationTech: '技術を通じたイノベーション',
    galleryHeroDescription: '12年以上にわたり、Bidyut Innovationはインド全土でロボティクス教育に革命をもたらしています。最先端技術と実践的学習体験で45,000+の学生をエンパワーし、30+の学校を変革しました。',
    bidyutInnovation: 'Bidyut Innovation',
    studentsEmpowered: '45,000+学生',
    schoolsTransformed: '30+学校',
    exploreProgram: 'プログラムを探索',
    partnerWithUs: '私たちとパートナーシップを組む'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && ['en', 'hi', 'ur', 'bn', 'ja'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations['en']] || key;
  };

  const getLanguageName = (lang: Language): string => {
    const languageNames = {
      en: 'English',
      hi: 'हिंदी',
      ur: 'اردو',
      bn: 'বাংলা',
      ja: '日本語'
    };
    return languageNames[lang];
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t, getLanguageName }}>
      {children}
    </LanguageContext.Provider>
  );
};

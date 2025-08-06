import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'hi' | 'bn';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
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
    phone: 'Phone',
    email: 'Email',
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
    phone: 'फोन',
    email: 'ईमेल',
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
    phone: 'ফোন',
    email: 'ইমেইল',
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
    if (savedLanguage && ['en', 'hi', 'bn'].includes(savedLanguage)) {
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

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

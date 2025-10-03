export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
  bgColor?: string; // Optional background color for the card
}

// Using placeholder images. Replace with your actual image URLs.
export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: 'Mrs. Manju Dogra',
    title: 'Principal',
    company: 'DAV BDL Public school',
    quote: "Bidyut innovation is a wonderful platform! The staff is so cool and helpful in all situations they have knowledge, let others light their candles in it. I truly appreciate bidyut innovation for sharing such a knowledge with us. They helped us a lot by providing such a valuable information by videos and they even provided different kits which are truly helpful for children We are really thankfull for working with such a cool team.",
    image: "/dav school.png",
  },
  {
    id: 2,
    name: 'Mrs. Nidhi Chaudhary',
    title: 'Teacher',
    company: 'School',
    quote: 'Bidyut Innovative Lab is an awesome place! They have cool gadgets and inventions that make life easier. The staff is friendly and helpful with hands-on activities.',
    image: '/schools/little wonders school.jpg',
    bgColor: 'bg-teal-400',
  },
  {
    id: 3,
    name: 'Mr. Selvin Bernardr',
    title: 'Technology Director',
    company: 'St. Vincent Pallotti School',
    quote: "Bidyut innovation provided incredible products for our cutting-edge robotics lab inaugurated in January 2024. Their informative training highlighted robotics' importance across educational, medical and commercial domains.",
    image: '/schools/St vincent palloti.avif',
  },
  {
    id: 4,
    name: 'Mrs. Aruna Rao',
    title: 'Teacher',
    company: 'Laurels School',
    quote: 'Introducing critical thinking to our tiny tots without performance stress is tough. But Bidyut Innovations made it straightforward with well-planned activities that develop clear thought processes.',
    image: '/schools/Laurels School.png',
  },
  {
    id: 5,
    name: 'Aarti Naini',
    title: 'Curriculum Head',
    company: 'JG High Secondary School Mhow',
    quote: "My experience with Bidyut's Robotics Lab has been incredible. The cutting-edge equipment, knowledgeable instructors, and solid foundation in robotics fundamentals have significantly impacted my understanding.",
    image: '/schools/JGHS.png',
  },
  {
    id: 6,
    name: 'Ankit sir',
    title: 'Principal',
    company: 'St. Raphael’s Higher Secondary School',
    quote: "I would like to extend my heartfelt thanks to the trainers of Bidyut Innovation for conducting such an engaging and informative robotics training session. The program will not only introduce our students to the exciting world of robotics but will also spark creativity, critical thinking, and a genuine interest in technology and innovation.",
    image: "/St. Raphael’s Higher Secondary School.png",
  },
  {
    id: 7,
    name: 'Mrs. Pratibha Sharma',
    title: 'EdTech Consultant',
    company: 'GD Goenka Indore',
    quote: "Bidyut Robotics has introduced skill-based learning that gives real meaning to education, especially in Math & Science concepts. Their simple yet effective teacher training approach and supportive team have made a significant impact on our students at GD Goenka Indore.",
    image: '/schools/GD Goenka.webp',
    bgColor: 'bg-teal-400',
  },
  {
    id: 8,
    name: 'Mr. Mano',
    title: 'Robotics Club Mentor',
    company: 'Medicaps',
    quote: "At MediCaps, we take immense pride in our Robotic Lab established with Bidyut Innovation. It provides students an immersive learning experience integrating practical STEM concepts. Our well-equipped lab serves as a focal point for exploration and hands-on learning, preparing students for a technology-driven future.",
    image: '/schools/medicaps school.png',
    bgColor: 'bg-teal-400',
  },
  {
    id: 9,
    name: 'Mrs. Renu Gurnani',
    title: 'Principal',
    company: 'Vedansh International School',
    quote: "Bidyut Innovations created a fantastic learning environment with top-notch resources and exceptional support. Their knowledgeable trainers make their robotics program outstanding for anyone diving into robotics.",
    image: "/vedansh.jpeg",
  },
  {
    id: 10,
    name: 'Mr.Kshitij',
    title: 'Lab Supervisor',
    company: 'Carmel School Ujjain',
    quote: "Bidyut Innovations created a fantastic learning environment with top-notch resources and exceptional support. Their knowledgeable trainers make their robotics program outstanding for anyone diving into robotics.",
    image: '/schools/carmel ujjain.png',
  },
  {
    id: 11,
    name: 'Vishal Sir',
    title: 'Science Teacher',
    company: 'Christu Jyoti School',
    quote: "Excellent explained all modules of course and also helping in making different models.Thanks a lot madam and sir for your guidance.We enjoyed a lot....Thanks again",
    image: "/ChristuJyotiConventSchool.png",
  },
];
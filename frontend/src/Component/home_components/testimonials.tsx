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
    name: 'Mr. Mitesh',
    title: 'Principal',
    company: 'Laurels school',
    quote: "The hands-on robotics sessions made science easy to grasp, connecting concepts to real-world uses and sparking our curiosity.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250',
  },
  {
    id: 2,
    name: 'Mrs. Nidhi Chaudhary',
    title: 'STEM Coordinator',
    company: 'Innovate Academy',
    quote: 'Their lab feels like a creative tech playground, full of interactive tools, cool gadgets, and friendly mentors.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250',
    bgColor: 'bg-teal-400',
  },
  {
    id: 3,
    name: 'Mr. Selvin Bernardr',
    title: 'Technology Director',
    company: 'St. Vincent Pallotti School',
    quote: "The robotics lab they set up at St. Vincent Pallotti’s inspired our students to explore technology in education, healthcare, and business.",
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250',
  },
  {
    id: 4,
    name: 'Mrs. Aruna Rao',
    title: 'Science Teacher',
    company: 'Laurels School',
    quote: 'Their screenless coding tools helped our youngest students develop logic, creativity, and problem-solving from day one.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=250',
  },
  {
    id: 5,
    name: 'Aarti Naini',
    title: 'Curriculum Head',
    company: 'JG High Secondary School Mhow',
    quote: 'We appreciate their focus on skill-based learning, comprehensive teacher training, and continuous support.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250',
  },
  {
    id: 6,
    name: 'Mr.Kshitij',
    title: 'Lab Supervisor',
    company: 'Carmel School Ujjain',
    quote: 'With world-class resources and patient trainers, our students built a solid foundation in robotics skills.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250',
  },
  {
    id: 7,
    name: 'Mrs. Pratibha Sharma',
  title: 'EdTech Consultant',
    company: 'EduSolutions',
    quote: 'Bidyut is leading the way in educational robotics. A truly innovative and impactful solution.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=250',
    bgColor: 'bg-teal-400',
  },
  {
    id: 8,
    name: 'Mr. Mano',
    title: 'Robotics Club Mentor',
    company: 'Medicaps',
    quote: 'The robotics lab they set up at St. Vincent Pallotti’s inspired our students to explore technology in education, healthcare, and business..',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=250',
    bgColor: 'bg-teal-400',
  },
    {
    id: 9,
    name: 'Mr. Mitesh',
    title: 'Principal',
    company: 'Laurels school',
    quote: "The hands-on robotics sessions made science easy to grasp, connecting concepts to real-world uses and sparking our curiosity.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250',
  },
  {
    id: 10,
    name: 'Mr.Kshitij',
    title: 'Lab Supervisor',
    company: 'Carmel School Ujjain',
    quote: 'With world-class resources and patient trainers, our students built a solid foundation in robotics skills.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250',
  },
  {
   id: 11,
    name: 'Mrs. Aruna Rao',
    title: 'Science Teacher',
    company: 'Laurels School',
    quote: 'Their screenless coding tools helped our youngest students develop logic, creativity, and problem-solving from day one.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=250',
  },
];

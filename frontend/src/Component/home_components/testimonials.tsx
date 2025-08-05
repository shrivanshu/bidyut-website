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
    name: 'Dr. Sarah Mitchell',
    title: 'Principal',
    company: 'Greenwood High School',
    quote: "The robotics program has transformed our students' learning experience. They're more engaged and excited about STEM subjects than ever before.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250',
  },
  {
    id: 2,
    name: 'Anika Sharma',
    title: 'STEM Coordinator',
    company: 'Innovate Academy',
    quote: 'Bidyut has been a game-changer for our curriculum. The hands-on approach to robotics is fantastic.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250',
    bgColor: 'bg-teal-400',
  },
  {
    id: 3,
    name: 'Leo Carter',
    title: 'Technology Director',
    company: 'Oakridge International',
    quote: "The support and resources provided are top-notch. Our students are building truly impressive projects.",
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250',
  },
  {
    id: 4,
    name: 'Priya Patel',
    title: 'Science Teacher',
    company: 'City Public School',
    quote: 'I have never seen my students so captivated. The excitement in the classroom is palpable.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=250',
  },
  {
    id: 5,
    name: 'Fatima Ahmed',
    title: 'Curriculum Head',
    company: 'Global Prep',
    quote: 'An excellent platform for fostering creativity and problem-solving skills in young minds.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250',
  },
  {
    id: 6,
    name: 'David Chen',
    title: 'Lab Supervisor',
    company: 'Brighton College',
    quote: 'The quality of the robotics kits is exceptional. They are durable, versatile, and easy to use.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250',
  },
  {
    id: 7,
    name: 'Isabella Rossi',
    title: 'EdTech Consultant',
    company: 'EduSolutions',
    quote: 'Bidyut is leading the way in educational robotics. A truly innovative and impactful solution.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=250',
    bgColor: 'bg-teal-400',
  },
  {
    id: 8,
    name: 'Kenji Tanaka',
    title: 'Robotics Club Mentor',
    company: 'Future Engineers Org',
    quote: 'Our club members have won several competitions using the skills they learned through Bidyut.',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=250',
    bgColor: 'bg-teal-400',
  },
    {
    id: 9,
    name: 'Maria Garcia',
    title: 'Parent',
    company: 'Northfield District',
    quote: 'My daughter comes home every day excited to tell me about the robot she is building. It\'s wonderful!',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=250',
  },
  {
    id: 10,
    name: 'Elena Ivanova',
    title: 'Principal',
    company: 'Riverdale School',
    quote: 'The collaborative spirit this program fosters is just as important as the technical skills.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250',
  },
  {
    id: 11,
    name: 'Sam Wilson',
    title: 'Tech Student',
    company: 'Tech University',
    quote: 'Learning with these tools has been incredible. It has solidified my passion for engineering.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250',
    bgColor: 'bg-teal-400',
  },
];
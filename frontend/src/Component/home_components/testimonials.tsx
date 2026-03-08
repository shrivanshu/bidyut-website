export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
  bgColor?: string; // Optional background color for the card
}

export const getTestimonials = (t: (key: string) => string): Testimonial[] => [
  {
    id: 1,
    name: 'Mrs. Nidhi Chaudhary',
    title: t('teacher'),
    company: t('school'),
    quote: t('testimonial1Quote'),
    image: '/schools/little wonders school.webp',
    bgColor: 'bg-teal-400',
  },
  {
    id: 2,
    name: 'Mrs. Manju Dogra',
    title: t('principal'),
    company: 'DAV BDL Public school',
    quote: t('testimonial2Quote'),
    image: '/dav school.webp',
  },
  {
    id: 3,
    name: 'Mr. Selvin Bernardr',
    title: t('technologyDirector'),
    company: 'St. Vincent Pallotti School',
    quote: t('testimonial3Quote'),
    image: '/schools/St vincent palloti.avif',
  },
  {
    id: 4,
    name: 'Mrs. Aruna Rao',
    title: t('teacher'),
    company: 'Laurels School',
    quote: t('testimonial4Quote'),
    image: '/schools/Laurels School.webp',
  },
  {
    id: 5,
    name: 'Aarti Naini',
    title: t('curriculumHead'),
    company: 'JG High Secondary School Mhow',
    quote: t('testimonial5Quote'),
    image: '/schools/JGHS.webp',
  },
  {
    id: 6,
    name: 'Ankit sir',
    title: t('principal'),
    company: 'St. Raphael’s Higher Secondary School',
    quote: t('testimonial6Quote'),
    image: '/St. Raphaelâ€™s Higher Secondary School.webp',
  },
  {
    id: 7,
    name: 'Mrs. Pratibha Sharma',
    title: t('edTechConsultant'),
    company: 'GD Goenka Indore',
    quote: t('testimonial7Quote'),
    image: '/schools/GD Goenka.webp',
    bgColor: 'bg-teal-400',
  },
  {
    id: 8,
    name: 'Mr. Mano',
    title: t('roboticsClubMentor'),
    company: 'Medicaps',
    quote: t('testimonial8Quote'),
    image: '/schools/medicaps school.webp',
    bgColor: 'bg-teal-400',
  },
  {
    id: 9,
    name: 'Mrs. Renu Gurnani',
    title: t('principal'),
    company: 'Vedansh International School',
    quote: t('testimonial9Quote'),
    image: '/vedansh.webp',
  },
  {
    id: 10,
    name: 'Mr.Kshitij',
    title: t('labSupervisor'),
    company: 'Carmel School Ujjain',
    quote: t('testimonial10Quote'),
    image: '/schools/carmel ujjain.webp',
  },
  {
    id: 11,
    name: 'Vishal Sir',
    title: t('scienceTeacher'),
    company: 'Christu Jyoti School',
    quote: t('testimonial11Quote'),
    image: '/ChristuJyotiConventSchool.webp',
  },
];

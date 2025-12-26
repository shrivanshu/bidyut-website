import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/* ----------------------------------------
   ESM dirname fix
---------------------------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ----------------------------------------
   META DATA (RED CODE – FULL)
---------------------------------------- */
const pageMetaTags = {
  "/": {
    title: "Robotics for Schools & STREAM Learning |  Bidyut Innovation",
    description:
      "Robotics for schools, teacher training, and STREAM learning. Explore humanoid, quadruped, and Unitree robots with AI-powered solutions for automation. ",
    schema: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Bidyut Innovation",
      url: "https://bidyutinnovation.com",
      logo: "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
      description:
        "Bidyut Innovation is India's leading Robotic EdTech Company, empowering schools and students through hands-on robotics, coding, AI, and STREAM-aligned programs. We provide advanced robotics solutions for education and industry, fostering creativity, problem-solving, and future-ready skills.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9370782979",
        contactType: "Customer Service",
        email: "Info@bidyutrobotics.com",
      },
      sameAs: [
        "https://www.instagram.com/bidyutinnovation?igsh=ZGIzZnRodjVpdHR5",
        "https://www.linkedin.com/company/bidyutinnovation/",
        "https://www.facebook.com/share/15bB1RccVgV/",
      ],
    },
  },

  "/About": {
    title: "Bidyut Innovation – Leading Robotics Company in India.",
    description:
      "Bidyut, a top robotics company in India, empowers students with hands-on learning, STREAM education, AI, and robotics programs to build future-ready skills.",
    schema: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Bidyut Innovation",
      url: "https://bidyutinnovation.com/About",
      logo: "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
      sameAs: [
        "https://www.instagram.com/bidyutinnovation?igsh=ZGIzZnRodjVpdHR5",
        "https://www.linkedin.com/company/bidyutinnovation/",
        "https://www.facebook.com/share/15bB1RccVgV/",
      ],
      description:
        "Bidyut Innovation is a leading Robotic EdTech Company in India, revolutionizing education through robotics, AI, and hands-on STREAM learning.",
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "mission",
          value:
            "To create the most compelling education company of the 21st century by driving students towards conceptual, technological, and fun-based learning.",
        },
        {
          "@type": "PropertyValue",
          name: "vision",
          value:
            "To prepare every child for a technological and challenging world ahead by fostering innovation through personalized learning experiences.",
        },
      ],
    },
  },

  "/School": {
    title: "Robotics Lab Setup for Schools | Teacher Training | Bidyut",
    description:
      "Robotics Lab Setup for schools with hands-on learning, teacher training, workshops, and drone programs. Making STREAM and AI education practical and engaging.",
    schema: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Bidyut Innovation",
      url: "https://bidyutinnovation.com/School",
      logo: "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
      description:
        "Bidyut Innovation provides hands-on robotics, AI, and drone education for schools, transforming classrooms into innovation hubs. Students engage in project-based learning, creative problem-solving, and real-world applications, developing skills for future-ready careers.",
      sameAs: [
        "https://www.instagram.com/bidyutinnovation?igsh=ZGIzZnRodjVpdHR5",
        "https://www.linkedin.com/company/bidyutinnovation/",
        "https://www.facebook.com/share/15bB1RccVgV/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Educational Programs",
        itemListElement: [
          {
            "@type": "EducationalOccupationalProgram",
            name: "Robotics Lab Setup",
            description:
              "Fully equipped labs with kits, sensors, and tools to bring classroom learning to life.",
          },
          {
            "@type": "EducationalOccupationalProgram",
            name: "STREAM Programs",
            description:
              "Integrated programs combining Science, Technology, Robotics, Engineering, Arts, and Math.",
          },
          {
            "@type": "EducationalOccupationalProgram",
            name: "Teacher Training",
            description:
              "Expert-led workshops and ongoing support for teachers to confidently deliver robotics and AI education.",
          },
          {
            "@type": "EducationalOccupationalProgram",
            name: "AI & Coding Clubs",
            description:
              "Interactive coding and AI projects for students to enhance computational thinking.",
          },
          {
            "@type": "EducationalOccupationalProgram",
            name: "Hands-On STEM Projects",
            description:
              "Practical, project-based learning experiences in robotics, AI, and engineering.",
          },
        ],
      },
    },
  },

  "/Gallery": {
    title: "Robotics Education in India | Bidyut Innovation Gallery",
    description:
      "Explore Bidyut Innovation's gallery showcasing cutting-edge robotics education in India. Hands-on STREAM, AI, and robotics programs transforming classrooms.",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Bidyut Innovation Gallery",
      url: "https://bidyutinnovation.com/Gallery",
      description:
        "Explore Bidyut Innovation's gallery showcasing over 12 years of achievements in robotics and technology education. Discover student projects, advanced robotics workspaces, AI and STEM learning environments, and innovative solutions that have transformed 30+ schools and empowered 45,000+ students across India.",
      mainEntity: {
        "@type": "EducationalOrganization",
        name: "Bidyut Innovation",
        url: "https://bidyutinnovation.com/Gallery",
        logo: "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
        sameAs: [
          "https://www.instagram.com/bidyutinnovation?igsh=ZGIzZnRodjVpdHR5",
          "https://www.linkedin.com/company/bidyutinnovation/",
          "https://www.facebook.com/share/15bB1RccVgV/",
        ],
        award: [
          "National Robotics Innovation Award (2023) – Recognized for outstanding contributions to STREAM education and robotics innovation.",
          "Global Youth Empowerment Recognition (2021) – Pioneering technology education for underserved communities.",
          "EdTech Excellence Certificate (2022) – Top-rated educational technology provider in India.",
        ],
      },
    },
  },

  "/Contact": {
    title: "Contact Bidyut Innovation | Robotics Labs & Solutions",
    description:
      "Connect with Bidyut Innovation for robotic lab setup, teacher training, humanoid robots and AI-powered industrial automation solutions.",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Bidyut Innovation Contact Page",
      url: "https://bidyutinnovation.com/Contact",
      mainEntity: {
        "@type": "EducationalOrganization",
        name: "Bidyut Innovation",
        url: "https://bidyutinnovation.com/Contact",
        logo: "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
        sameAs: [
          "https://www.instagram.com/bidyutinnovation?igsh=ZGIzZnRodjVpdHR5",
          "https://www.linkedin.com/company/bidyutinnovation/",
          "https://www.facebook.com/share/15bB1RccVgV/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 9370782979",
          contactType: "customer service",
          email: "Info@bidyutrobotics.com",
          areaServed: "IN",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "901 Clifton Corporate Park",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          postalCode: "452010",
          addressCountry: "IN",
        },
      },
    },
  },

  "/Cobot": {
    title: "Cobot Lightweight Robotic Arm Robot for Smart Automation",
    description:
      "Upgrade your automation with a lightweight robotic arm cobot designed for fast deployment, high precision, and safe collaboration in modern workspaces.",
  },

  "/Robot/Humanoids/Industry/H1": {
    title: "Unitree H1 Robot | Next-Gen Humanoid Robotics Power",
    description:
      "Discover the full-size Unitree H1 robot, built for industrial automation, research, and advanced AI applications. Fast, precise, and ready to perform.",
  },

  "/Robot/Humanoid/Industry/H1-2": {
    title: "Unitree Humanoid Robot H1-2 | Advanced Industrial Robotics",
    description:
      "Discover the Unitree Humanoid Robot H1-2, a full-size industrial robot with AI intelligence, precision, and speed—designed for automation and research.",
  },

  "/Robot/Humanoid/Education/G1": {
    title: "Humanoid Education G1 | Hands-On Learning Educational Robot",
    description:
      "Meet the Humanoid Education G1, a smart educational robot for hands-on STREAM learning, coding, and AI exploration. Inspire creativity and transform learning.",
  },

  "/Robot/Humanoid/Education/R1": {
    title: "Unitree R1 Robot |  Transform STEM Learning with Humanoids",
    description:
      "Explore the Unitree R1 robot, a humanoid designed for interactive STEM learning, coding, and AI skills. Engage students with creative hands-on innovation.",
  },

  "/Robot/Quadrupeds/Industry/B2": {
    title: "Unitree B2 | Smart Quadruped Robot for Research & Industry",
    description:
      "Explore the Quadruped Robot B2, built for industrial automation, AI-driven tasks, and advanced mobility. Fast, precise and designed for tough environments.",
  },

  "/Robot/Quadrupeds/Industry/B2-W": {
    title: "Unitree B2-W Inspection Robot | Next-Gen Agile Explorer",
    description:
      "Boost safety and efficiency with the Quadruped Industry B2‑W inspection robot—detect faults, monitor hazards, and gain accurate real-time industrial insights.",
  },

  "/Robot/Quadrupeds/Industry/A2": {
    title: "Unitree A2 | Smart Quadruped Robot Dog for Tough Tasks",
    description:
      "The Unitree A2 quadruped robot dog delivers high-speed agility, stability, and AI-driven performance—perfect for advanced industrial inspection and monitoring.",
  },

  "/Robot/Quadrupeds/Industry/A2-W": {
    title: "Unitree A2‑W | Autonomous Inspection Robot for Industry",
    description:
      "The Unitree A2‑W quadruped robot is an autonomous inspection robot designed to detect faults, monitor hazards, and provide real-time industrial insights.",
  },

  "/Robot/Quadrupeds/Education/G02": {
    title: "Unitree Robot Dog GO2 | Multipurpose AI Quadruped Robot",
    description:
      "Explore the Robot Dog GO2 – an advanced four-legged robot designed for education, research, autonomous robotics, and engaging interactive learning experiences.",
  },

  "/Robot/Quadrupeds/Education/G02-W": {
    title: "Unitree Go2 W Robot | Agile All-Terrain Robotics Companion",
    description:
      "Meet the Unitree Go2 W robot — your agile, compact, and all-terrain companion perfect for robotics research, inspections, and versatile real-world tasks.",
  },
};

/* ----------------------------------------
   READ BASE HTML
---------------------------------------- */
const htmlPath = path.join(__dirname, "build", "index.html");

if (!fs.existsSync(htmlPath)) {
  console.error("❌ build/index.html not found. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(htmlPath, "utf-8");

/* ----------------------------------------
   GENERATE PAGES
---------------------------------------- */
Object.entries(pageMetaTags).forEach(([route, meta]) => {
  if (!meta.title || !meta.description) return;

  const metaTags = `
<title>${meta.title}</title>
<meta name="description" content="${meta.description}" />
<meta property="og:title" content="${meta.title}" />
<meta property="og:description" content="${meta.description}" />
<meta property="og:url" content="https://bidyutinnovation.com${route}" />
`;

  let schemaTag = "";
  if (meta.schema) {
    schemaTag = `\n<script type="application/ld+json">${JSON.stringify(
      meta.schema
    )}</script>`;
  }

  const finalHtml = baseHtml.replace(
    "</head>",
    `${metaTags}${schemaTag}\n</head>`
  );

  if (route === "/") {
    fs.writeFileSync(htmlPath, finalHtml);
  } else {
    const dirPath = path.join(__dirname, "build", route.slice(1));
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(path.join(dirPath, "index.html"), finalHtml);
  }
});

console.log("✅ Meta tags injected for all pages successfully");

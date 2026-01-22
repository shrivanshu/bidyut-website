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
    title: "Robotics for Schools & STREAM Learning | Bidyut Innovation",
    description:
      "Robotics for schools, teacher training, and STREAM learning. Explore humanoid, quadruped, and Unitree robots with AI-powered solutions for automation.",
  },

  "/About": {
    title: "Bidyut Innovation – Leading Robotics Company in India",
    description:
      "Bidyut, a top robotics company in India, empowers students with hands-on learning, STREAM education, AI, and robotics programs to build future-ready skills.",
  },

  "/School": {
    title: "Robotics Lab Setup for Schools | Teacher Training | Bidyut",
    description:
      "Robotics Lab Setup for schools with hands-on learning, teacher training, workshops, and drone programs. Making STREAM and AI education practical and engaging.",
  },

  "/Contact": {
    title: "Contact Bidyut Innovation | Robotics Labs & Solutions",
    description:
      "Connect with Bidyut Innovation for robotic lab setup, teacher training, humanoid robots and AI-powered industrial automation solutions.",
  },

  "/Gallery": {
    title: "Robotics Education in India | Bidyut Innovation Gallery",
    description:
      "Explore Bidyut Innovation's gallery showcasing cutting-edge robotics education in India. Hands-on STREAM, AI, and robotics programs transforming classrooms.",
  },

  "/cobot": {
    title: "Cobot Lightweight Robotic Arm Robot for Smart Automation",
    description:
      "Upgrade your automation with a lightweight robotic arm cobot designed for fast deployment, high precision, and safe collaboration in modern workspaces.",
  },

  "/robot/humanoids/industry/h1": {
    title: "Unitree H1 Robot | Next-Gen Humanoid Robotics Power",
    description:
      "Discover the full-size Unitree H1 robot, built for industrial automation, research, and advanced AI applications.",
  },

  "/robot/humanoid/industry/h1-2": {
    title: "Unitree Humanoid Robot H1-2 | Advanced Industrial Robotics",
    description:
      "Discover the Unitree Humanoid Robot H1-2, a full-size industrial robot with AI intelligence and precision.",
  },

  "/robot/humanoid/education/g1": {
    title: "Humanoid Education G1 | Hands-On Learning Educational Robot",
    description:
      "Meet the Humanoid Education G1, a smart educational robot for STREAM learning, coding, and AI exploration.",
  },

  "/robot/humanoid/education/r1": {
    title: "Unitree R1 Robot | Transform STEM Learning with Humanoids",
    description:
      "Explore the Unitree R1 robot, designed for interactive STEM learning and AI skills.",
  },

  "/robot/quadrupeds/industry/b2": {
    title: "Unitree B2 | Smart Quadruped Robot for Research & Industry",
    description:
      "Explore the Quadruped Robot B2 for industrial automation and AI-driven mobility.",
  },

  "/robot/quadrupeds/industry/b2-w": {
    title: "Unitree B2-W Inspection Robot | Next-Gen Agile Explorer",
    description:
      "Boost safety with the B2-W inspection robot for industrial monitoring.",
  },

  "/robot/quadrupeds/industry/a2": {
    title: "Unitree A2 | Smart Quadruped Robot Dog for Tough Tasks",
    description:
      "High-speed quadruped robot dog for industrial inspection.",
  },

  "/robot/quadrupeds/industry/a2-w": {
    title: "Unitree A2-W | Autonomous Inspection Robot for Industry",
    description:
      "Autonomous quadruped robot for real-time industrial insights.",
  },

  "/robot/quadrupeds/education/go2": {
    title: "Unitree Robot Dog GO2 | Multipurpose AI Quadruped Robot",
    description:
      "Advanced robot dog for education and research.",
  },

  "/robot/quadrupeds/education/go2-w": {
    title: "Unitree Go2 W Robot | Agile All-Terrain Robotics Companion",
    description:
      "Compact all-terrain robot for research and inspections.",
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

import {
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  madalgos,
  hashedin,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fullStack,
  web3,
  machineLearning,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-stack Web Development",
    icon: fullStack,
  },
  {
    title: "Web3",
    icon: web3,
  },
  {
    title: "Machine Learning",
    icon: machineLearning,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "HashedIn by Deloitte",
    icon: hashedin,
    iconBg: "#000",
    date: "September 2021 - PRESENT",
    points: [
      "Full-stack web-developer working on serverless backend (using AWS Lambda) and micro frontend architecture based on React JS.",
      "Worked as a Front-end developer building Angular components for an Insurance Company",
      "Designed and developed the Front-end of an internal hiring tool using React JS.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "HashedIn by Deloitte",
    icon: hashedin,
    iconBg: "#000",
    date: "July 2021 - September 2021",
    points: [
      "Led a team of five & created a full-stack ecommerce web application using Spring Boot and Angular",
      "Developed a Black Jack game with serverless backend using Angular for the UI, GCP cloud functions and storage Bucket for backend.",
      "Developed a Full stack e-learning platform using Angular and Spring boot.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "MADAlgos",
    icon: madalgos,
    iconBg: "#E6DEDD",
    date: "May 2021 - July 2021",
    points: [
      "Designed and Developed full stack e commerce web application.",
      "Created and used APIs to perform CRUD operations",
      "Designed the Database of the application",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Implemented Authentication and Authorization to ensure safety of the users and the application",
      "Implemented and using payment gateways like RazorPay",
      "Tech used: Next JS, NodeJS, MySQL, PrismaORM, Microsoft Azure",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

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
  madalgos,
  hashedin,
  ISL,
  Connectopia,
  fullStack,
  web3,
  machineLearning,
  netflixApp,
  NftBazar,
  flappyBird,
  nextjs,
  aws,
  angular,
  python,
  eth,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    link: "https://drive.google.com/file/d/1l8mSV_G-sfYq5fn66oDLCqjveUouyPB3/view?usp=sharing"
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Web3 JS",
    icon: eth,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Indian Sign Language Interpreter",
    description:
      "An AI powered system that can interpret Indian (or any) Sign Language. Just train the model with any Sign Language that you want and it'll be able to interpret it.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "computer vision",
        color: "pink-text-gradient",
      },
    ],
    image: ISL,
    source_code_link: "https://github.com/Nanak360/ai_asl_interpreter",
  },
  {
    name: "Connectopia",
    description:
      "A social media website powered by Next.js 13 (under development)",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Connectopia,
    source_code_link: "https://github.com/Nanak360/Connectopia",
  },
  {
    name: "NFT Bazar",
    description:
      "An NFT marketplace built on the polygon network. Users can create, list and see all their NFTs. Used tailwind for styling the website.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "pink-text-gradient",
      },
    ],
    video: NftBazar,
    source_code_link: "https://github.com/Nanak360/nft-marketplace",
  },
  {
    name: "Netflix Clone",
    description:
      "One-page application showcasing only Netflix front end. Displayed details are fetched from “The Movie Database” API. Hosted in Google’s Firebase.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "pink-text-gradient",
      },
    ],
    image: netflixApp,
    source_code_link: "https://netflix-clone-2000.web.app/",
  },
  {
    name: "Flappy Bird",
    description:
      "Deployed on Firebase, it is a lightweight web-based game that can run mostly on all mobile and desktop browsers",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "pink-text-gradient",
      },
    ],
    image: flappyBird,
    source_code_link: "https://myflappybird-web.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

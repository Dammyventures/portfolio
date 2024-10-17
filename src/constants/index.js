import {
  mobile,
  backend,
  creator,
  web,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Application Development",
    icon: web,
  },
  {
    title: "Network Management",
    icon: mobile,
  },
  {
    title: "Data Analysis",
    icon: backend,
  },
  {
    title: "Database Administration",
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Programme Analyst",
    company_name: "MIST",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2020 - Present",
    points: [
      "Manage database administration assignments, enhances database performance and conduct regular system backups",
      "Serve on the DBA/Application team in the implementation of the new application system and database structure for state government",
       "Implementing responsive design and ensuring cross-browser compatibility.",
      "Represents the ministry in the adhoc meeting to suggest infrastructural requirement for database migration in MDA's", ],
  },
  {
    title: "Daabase Administrator",
    company_name: "LASRRA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2020 - Present",
    points: [
      "Managed databse administration assignments, enhances database performanceand conduct regular system backups",
      "Serve on the DBA/Application Team in the implementation of the new resident registration system",
       "Developd and tested storage strategies and disaster recovery plans for the operational database",
      "Integrated the Database backend with virtual verification, updated the management on the new system performance",
    ],
  },
  {
    title: "Team Lead (Database Verification)",
    company_name: "MIST",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2016 - Feb 2020",
    points: [
      "Supervised and managed the ABIS Data verification and processign unit and its personnel",
      "Developed and implemented targets and benchmarks and measured performance against those benchmarks",      
      "Designed the mini Apps for data collection and processing; designed database nominal roll for Audit Department",
      "Ran queries and backup log issues, prepared documentation and presented progress reports to management",
    ],  },
  {
    title: "Database Administrator",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2014 - May 2016",
    points: [
      "Modified database mangement systems, making changes whenever needed, reviewed DBMS Procedures and suggested improvement",
      "Specified user access levels for database segments and performed testing and addressed any issues present.",
       "Tested and analysed validation script, managed ABIS operation and search procedures",
         "Handled database server tuning, application tuning, maintaining documentation, capacity and database security",    ],
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

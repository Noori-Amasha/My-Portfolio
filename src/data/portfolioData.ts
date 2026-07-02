export const navItems = ["Home", "About", "Skills", "Projects", "Journey", "Contact"];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & API Development",
    skills: ["Node.js", "Express.js", "REST APIs", "MERN Stack"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Development Tools",
    skills: ["Postman", "Git", "GitHub Desktop","IntelliJ IDEA","VS Code"],
  },
  {
    title: "Deployment & Hosting",
    skills: ["Vercel", "Render"],
  },
  {
    title: "UI/UX & Design",
    skills: ["Figma", "Canva"],
  },
];



export type Project = {
  title: string;
  type: string;
  desc: string;
  stack: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "Smart-Queue-and-Token-Management-System",
    type: "Queue Management Web Application and Mobile Application",
    desc: "A digital queue management system that allows users to generate tokens, track queue progress and helps organisations manage customers efficiently while reducing waiting time.",
    stack: ["MongoDB", "Express.js", "React","Node.js","javascript"],
    githubUrl: "https://github.com/Vinod-Rajapaksha/Smart-Queue-and-Token-Management-System.git"
  },
  {
    title: "Personal Portfolio",
    type: "Developer Portfolio Website",
    desc: "A modern and responsive portfolio website created to showcase my technical skills, software projects, educational journey and contact information through interactive animations and a clean user interface.",
    stack: ["React", "TypeScript", "Motion","Tailwind","typescript"],
    githubUrl:"https://github.com/Noori-Amasha/My-Portfolio.git"
  },
  {
    title: "Smart Laundry System",
    type: "Laundry Service Management Application",
    desc: "A management system designed to handle customer orders, laundry service requests, order status updates and payment records through an organised digital workflow.",
    stack: ["React", "Node", "Express", "MongoDB","javascript"],
    githubUrl: "https://github.com/Noori-Amasha/smart-laundry-platform.git"
  },
  {
    title: "Tourism and Travel Management System",
    type: "Travel Booking and Management Platform",
    desc: "A tourism management platform that helps users explore travel packages, make bookings and manage trip information while allowing administrators to organise customers, destinations and reservations.",
    stack: ["React", "Springboot", "MSSQL","bootstrap"],
    githubUrl: "https://github.com/Noori-Amasha/Tourism-and-Travel-Management-System.git"
  },
];

export type JourneyItem = {
  year: string;
  title: string;
  desc: string;
};

export const journey: JourneyItem[] = [
  {
    year: "2024",
    title: "University Journey Began",
    desc: "Started my undergraduate studies in Computing. Built a strong foundation in programming, Data Structures & Algorithms, and networking fundamentals while developing problem-solving and analytical thinking skills.",
  },

  {
    year: "2025",
    title: "Core Software Engineering & AI",
    desc: "Expanded my knowledge through Object-Oriented Programming, Software Engineering principles, and Artificial Intelligence & Machine Learning. Gained experience in designing scalable systems, software development lifecycles, and intelligent solutions.",
  },

  {
    year: "2026",
    title: "Software Engineering Specialization",
    desc: "Successfully completed my second year and was selected for the Software Engineering specialization. Developed full-stack applications using the MERN stack, explored React Native mobile development, studied Operating Systems & System Administration, and strengthened professional collaboration and project management skills.",
  },
];
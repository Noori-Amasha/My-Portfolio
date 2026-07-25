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

export const journey = [
  {
    year: "2024",
    title: "University Journey Began",
    desc: "Started my undergraduate studies in Computing and began developing the technical mindset required to analyse problems and build practical software solutions.",
  },
  {
    year: "2024",
    title: "Programming and Computing Foundations",
    desc: "Built a foundation in programming, Data Structures and Algorithms, networking fundamentals, and analytical problem-solving through coursework and practical activities.",
  },
  {
    year: "2025",
    title: "Core Software Engineering",
    desc: "Expanded my knowledge of Object-Oriented Programming, Software Engineering principles, system design, and structured software development practices. Applied these concepts by developing a backend-focused project using Java and Spring Boot.",
  },
  {
    year: "2025",
    title: "Artificial Intelligence and System Design",
    desc: "Explored Artificial Intelligence and Machine Learning while learning how to design scalable systems, manage software lifecycles, and develop intelligent applications.",
  },
  {
    year: "2026",
    title: "Software Engineering Specialization",
    desc: "Successfully completed my second year and was selected for the Software Engineering specialization, strengthening my focus on modern application development.",
  },
  {
    year: "2026",
    title: "Full-Stack, Mobile and Professional Growth",
    desc: "Built full-stack applications using the MERN stack, explored React Native mobile development, studied operating systems, and improved teamwork and project management skills.",
  },
];
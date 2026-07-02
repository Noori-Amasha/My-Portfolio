import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LandingIntro from "./components/LandingIntro";

import { journey } from "./data/portfolioData";
import { Reveal, SectionTitle } from "./components/Toolkit";

const aboutCards = [
  {
    number: "01",
    title: "My Approach",
    description:"I focus on building web applications that are practical, scalable, and easy to maintain. I enjoy working on backend logic, database design, and application architecture while also creating responsive user interfaces that deliver a smooth user experience.",
    delay: 0,
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "I enjoy building the core logic that powers applications. From designing APIs to managing databases and authentication systems, I focus on creating reliable and scalable backend solutions.",
    delay: 0.15,
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "I approach development with a problem-solving mindset. I enjoy analysing requirements, breaking down complex challenges, and creating efficient software solutions that deliver real value.",
    delay: 0.25,
  },
  {
    number: "04",
    title: "Full-Stack Development",
    description:
      "I build complete web applications, from frontend interfaces to backend services. My goal is to create seamless user experiences supported by secure and efficient systems.",
    delay: 0.27,
  },
  {
    number: "05",
    title: "Software Architecture",
    description:
      "I believe strong software starts with a solid foundation. I focus on organising projects, designing maintainable structures, and writing code that can grow alongside future requirements.",
    delay: 0.29,
  },
  {
    number: "06",
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and I enjoy learning new tools, frameworks, and best practices. Every project is an opportunity to improve my skills and become a better engineer.",
    delay: 0.31,
  },
];

function About() {
  return (
    <section
      id="about"
      className="
        relative px-5 py-20
        sm:px-[5%] sm:py-24
        lg:px-[7%] lg:py-[120px]
      "
    >
      <SectionTitle
        label="About Me"
        title="Building the logic behind modern digital experiences."
        text="Third-year Software Engineering undergraduate and aspiring full-stack developer 
        with a passion for building modern, user-friendly software solutions. 
        Experienced in Java, Spring Boot, React, TypeScript, and database technologies. 
        Currently seeking an internship opportunity to apply my skills, gain industry experience, and grow as a software engineer."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {aboutCards.map((card) => (
          <Reveal key={card.number} delay={card.delay}>
            <article
              className="
                group relative h-full min-h-[260px] overflow-hidden
                rounded-[2rem] border border-blue-200/80
                bg-white/80 p-8
                shadow-[0_25px_80px_rgba(30,64,175,0.12)]
                backdrop-blur-xl
                transition duration-300
                before:pointer-events-none before:absolute before:inset-0
                before:content-['']
                before:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_18rem)]
                hover:-translate-y-2 hover:border-blue-400/70
                sm:p-[34px]

                dark:border-pink-300/15
                dark:bg-white/[0.06]
                dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                dark:before:bg-[radial-gradient(circle_at_top_left,rgba(244,63,140,0.22),transparent_18rem)]
                dark:hover:border-pink-400/50
              "
            >
              <div className="relative z-10">
                <span className="font-black text-blue-600 dark:text-pink-400">
                  {card.number}
                </span>

                <h3
                  className="
                    mt-4 text-[1.6rem] font-bold
                    tracking-[-0.04em] text-slate-900
                    dark:text-[#faf7fb]
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-4 leading-8 text-slate-600
                    dark:text-[#b7aabd]
                  "
                >
                  {card.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section
      id="journey"
      className="
        relative px-5 py-20
        sm:px-[5%] sm:py-24
        lg:px-[7%] lg:py-[120px]
      "
    >
      <SectionTitle
        label="Journey"
        title="A simple timeline of growth and direction."
        text="A look at how far I have come, what I have learned, and where I am heading next."
      />

      <div
        className="
          relative max-w-[900px]

          before:absolute
          before:bottom-2.5
          before:left-0
          before:top-2.5
          before:w-px
          before:bg-blue-200
          before:content-['']

          sm:before:left-[104px]

          dark:before:bg-pink-200/15
        "
      >
        {journey.map((item, index) => (
          <Reveal key={`${item.year}-${item.title}`} delay={index * 0.1}>
            <div
              className="
                relative grid grid-cols-1 gap-3
                py-6 pl-[22px]

                sm:grid-cols-[130px_1fr]
                sm:gap-7
                sm:pl-0
              "
            >
              <div
                className="
                  text-sm font-black text-blue-600
                  sm:text-base
                  dark:text-pink-400
                "
              >
                {item.year}
              </div>

              <article
                className="
                  rounded-3xl border border-blue-200/80
                  bg-white/80 p-6
                  shadow-[0_18px_55px_rgba(30,64,175,0.09)]
                  backdrop-blur-xl
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/70

                  dark:border-pink-300/15
                  dark:bg-white/[0.06]
                  dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  dark:hover:border-pink-400/50
                "
              >
                <h3
                  className="
                    text-xl font-bold tracking-[-0.03em]
                    text-slate-900
                    dark:text-[#faf7fb]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3 leading-8 text-slate-600
                    dark:text-[#b7aabd]
                  "
                >
                  {item.desc}
                </p>
              </article>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const shouldUseDarkTheme = savedTheme !== "light";

    document.documentElement.classList.toggle("dark", shouldUseDarkTheme);
  }, []);

  return (
    <>
      {showIntro && <LandingIntro onFinish={() => setShowIntro(false)} />}

      <CursorGlow />

      <motion.div
        className="
          fixed left-0 top-0 z-[9999]
          h-1 w-full origin-left
          bg-gradient-to-r
          from-blue-600 via-sky-400 to-cyan-300

          dark:from-pink-500
          dark:via-fuchsia-400
          dark:to-purple-400
        "
        style={{ scaleX }}
      />

      <div
        className="
          relative min-h-screen overflow-hidden
          bg-transparent text-slate-[#f8fafc]
          transition-colors duration-300

          dark:bg-transparent
          dark:text-[#faf7fb]
        "
      >
        <Navbar />
        <Hero />
        <About />
        <SoftSkills />
        <Projects />
        <Journey />
        <Contact />
      </div>
    </>
  );
}

export default App;
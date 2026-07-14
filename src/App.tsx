import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";

import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import LandingIntro from "./components/LandingIntro";
import Footer from "./components/Footer";

import { Reveal, SectionTitle } from "./components/Toolkit";
import ConstellationBackground from "./components/common/ConstellationBackground";

const routeSectionMap: Record<string, string> = {
  "/home": "home",
  "/about": "about",
  "/skills": "skills",
  "/projects": "projects",
  "/journey": "journey",
  "/contact": "contact",
};

const sectionRouteMap: Record<string, string> = {
  home: "/home",
  about: "/about",
  skills: "/skills",
  projects: "/projects",
  journey: "/journey",
  contact: "/contact",
};

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "journey",
  "contact",
];

const aboutCards = [
  {
    number: "01",
    title: "My Approach",
    description:
      "I focus on building web applications that are practical, scalable, and easy to maintain. I enjoy working on backend logic, database design, and application architecture while also creating responsive user interfaces that deliver a smooth user experience.",
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

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const hasInitializedRoute = useRef(false);

  /*
   * True while a navbar route click is causing smooth scrolling.
   *
   * This prevents the IntersectionObserver from selecting About,
   * Skills, Projects, etc. while the page is travelling toward
   * Journey or Contact.
   */
  const isProgrammaticScrolling = useRef(false);

  const scrollUnlockTimer = useRef<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  /*
   * Existing theme setup.
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const shouldUseDarkTheme = savedTheme !== "light";

    document.documentElement.classList.toggle(
      "dark",
      shouldUseDarkTheme,
    );
  }, []);

  /*
   * Always begin the portfolio at /home when App first opens.
   */
  useEffect(() => {
    if (hasInitializedRoute.current) {
      return;
    }

    hasInitializedRoute.current = true;

    if (location.pathname !== "/home") {
      navigate("/home", { replace: true });
    }

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location.pathname, navigate]);

  /*
   * Navbar route click -> smoothly scroll to the matching section.
   *
   * Examples:
   * /journey -> #journey
   * /contact -> #contact
   * /home    -> #home
   */
  useEffect(() => {
    if (showIntro) {
      return;
    }

    const sectionId = routeSectionMap[location.pathname];

    if (!sectionId) {
      navigate("/home", { replace: true });
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    isProgrammaticScrolling.current = true;

    if (scrollUnlockTimer.current !== null) {
      window.clearTimeout(scrollUnlockTimer.current);
    }

    const scrollTimer = window.setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      /*
       * Unlock after the smooth-scroll animation finishes.
       */
      scrollUnlockTimer.current = window.setTimeout(() => {
        isProgrammaticScrolling.current = false;
      }, 1000);
    }, 50);

    return () => {
      window.clearTimeout(scrollTimer);
    };
  }, [location.pathname, navigate, showIntro]);

  /*
   * Normal mouse-wheel/touch scrolling:
   *
   * - Detect the section currently passing through the centre
   *   of the viewport.
   * - Change the URL.
   * - NavLink automatically highlights the matching navigation item.
   */
  useEffect(() => {
    if (showIntro) {
      return;
    }

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(
        (section): section is HTMLElement => section !== null,
      );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScrolling.current) {
          return;
        }

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio -
              firstEntry.intersectionRatio,
          );

        const activeEntry = visibleEntries[0];

        if (!activeEntry) {
          return;
        }

        const activeSectionId = activeEntry.target.id;
        const activeRoute = sectionRouteMap[activeSectionId];

        if (!activeRoute) {
          return;
        }

        if (location.pathname !== activeRoute) {
          /*
           * replace:true is important.
           *
           * Normal scrolling will not create many browser-history
           * entries such as:
           * /home -> /about -> /skills -> /projects
           */
          navigate(activeRoute, {
            replace: true,
          });
        }
      },
      {
        /*
         * The middle area of the screen determines the active section.
         * This prevents the next section from becoming active merely
         * because a tiny part of it has appeared.
         */
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, navigate, showIntro]);

  /*
   * Clear remaining timer when App is removed.
   */
  useEffect(() => {
    return () => {
      if (scrollUnlockTimer.current !== null) {
        window.clearTimeout(scrollUnlockTimer.current);
      }
    };
  }, []);

  return (
    <>
      {showIntro && (
        <LandingIntro
          onFinish={() => {
            /*
             * Make sure the portfolio begins from Home after
             * the landing animation finishes.
             */
            navigate("/home", { replace: true });

            window.scrollTo({
              top: 0,
              behavior: "auto",
            });

            setShowIntro(false);
          }}
        />
      )}

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

      <div className="relative min-h-screen overflow-x-hidden">
  {/* Full-screen background layer */}
  <ConstellationBackground
    starCount={105}
    connectionDistance={150}
  />

  {/* All portfolio content stays above the background */}
        <div
          className="
            relative z-10
            mx-auto max-w-[1600px]
            bg-transparent text-[#f8fafc]
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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
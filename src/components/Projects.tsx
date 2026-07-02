import { motion } from "motion/react";
import { projects } from "../data/portfolioData";
import { Reveal, SectionTitle } from "./Toolkit";
import Section from "./common/Section";

function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        label="Projects"
        title="Ideas transformed into practical software solutions."
        text="A collection of web and mobile applications that demonstrate my technical skills, 
        problem-solving approach, and continuous growth as a software engineer."
      />

      <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.12}>
            <motion.article
              className="
                group relative h-full min-h-[390px]
                overflow-hidden rounded-[2rem]
                border border-blue-200/80
                bg-white/80 p-[30px]
                shadow-[0_25px_80px_rgba(30,64,175,0.12)]
                backdrop-blur-xl
                [transform-style:preserve-3d]

                before:pointer-events-none
                before:absolute before:inset-0
                before:content-['']
                before:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_18rem)]

                hover:border-blue-400/70

                dark:border-pink-300/15
                dark:bg-white/[0.06]
                dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                dark:before:bg-[radial-gradient(circle_at_top_left,rgba(244,63,140,0.22),transparent_18rem)]
                dark:hover:border-pink-400/50
              "
              whileHover={{
                y: -14,
                rotateX: 4,
                rotateY: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
            >
              <div className="relative z-10 flex h-full flex-col">
                <div
                  className="
                    flex items-start justify-between gap-4
                    text-slate-600 dark:text-[#b7aabd]
                  "
                >
                  <span className="text-[0.82rem] leading-5">
                    {project.type}
                  </span>

                  <strong
                    className="
                      shrink-0 text-[1.1rem]
                      text-blue-600 dark:text-pink-400
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </strong>
                </div>

                <h3
                  className="
                    mt-[60px] text-[2rem] font-bold
                    tracking-[-0.04em]
                    text-slate-900 dark:text-[#faf7fb]
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4 leading-[1.8]
                    text-slate-600 dark:text-[#b7aabd]
                  "
                >
                  {project.desc}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border border-blue-200/70
                        bg-blue-50/80
                        px-3 py-2
                        text-[0.82rem] text-slate-600

                        dark:border-pink-300/10
                        dark:bg-white/[0.08]
                        dark:text-[#b7aabd]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} repository on GitHub`}
                  className="
                    mt-auto inline-flex w-fit
                    items-center gap-2 pt-[34px]
                    font-extrabold
                    text-blue-600
                    transition-colors duration-200
                    hover:text-blue-800

                    dark:text-pink-400
                    dark:hover:text-pink-300
                  "
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  View on GitHub
                  <span aria-hidden="true">↗</span>
                </motion.a>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Projects;

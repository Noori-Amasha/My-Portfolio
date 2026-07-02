import { motion } from "motion/react";
import { skillCategories } from "../data/portfolioData";
import { Reveal, SectionTitle } from "./Toolkit";
import Section from "./common/Section";

function SoftSkills() {
  return (
    <Section id="skills">
      <SectionTitle
        label="Skills"
        title="The technologies behind the software I build."
        text="My growing technical toolkit for developing reliable backend systems, responsive user interfaces, and complete full-stack applications."
      />

      <div
        className="
          grid grid-cols-1 gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {skillCategories.map((category, categoryIndex) => (
          <Reveal
            key={category.title}
            delay={categoryIndex * 0.02}
          >
            <motion.article
              className="
                group relative h-full min-h-[190px]
                overflow-hidden rounded-[2rem]
                border border-blue-200/80
                bg-white/80 p-6
                shadow-[0_25px_80px_rgba(30,64,175,0.12)]
                backdrop-blur-xl

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
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <div className="relative z-10">
                <h3
                  className="
                    mb-5 text-xl font-bold
                    tracking-[-0.03em]
                    text-slate-900
                    dark:text-[#faf7fb]
                  "
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="
                        rounded-full
                        border border-blue-200/70
                        bg-blue-50/80
                        px-4 py-2.5
                        text-sm font-bold
                        text-slate-700
                        backdrop-blur-md

                        dark:border-pink-300/10
                        dark:bg-white/[0.08]
                        dark:text-[#d4c8d8]
                      "
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          categoryIndex * 0.08 +
                          skillIndex * 0.04,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default SoftSkills;

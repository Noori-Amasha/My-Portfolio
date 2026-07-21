import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import heroImage from "../assets/hero.png";
import { Reveal } from "./Toolkit";
import Button from "./common/Button";
import HighlightCard from "./common/HighlightCard";
import ElectricBorder from "./common/ElectricBorder";

function Hero() {
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  const heroY = useTransform(scrollY, [0, 500], [0, -70]);
  const glowY = useTransform(scrollY, [0, 500], [0, 110]);

  return (
    <section
      id="home"
      className="
        relative grid min-h-screen grid-cols-1
        items-center gap-[50px]
        px-5 pb-[70px] pt-[115px]

        min-[621px]:px-[5%]
        min-[621px]:py-[85px]

        min-[981px]:grid-cols-[1.1fr_0.9fr]
        min-[981px]:px-[7%]
        min-[981px]:pb-[95px]
        min-[981px]:pt-[145px]
      "
    >
      <motion.div
        className="
          absolute left-[9%] top-[18%] -z-10
          h-[190px] w-[190px]
          rounded-full bg-[rgba(167,139,250,0.28)]
          opacity-70 blur-[20px]
        "
        style={{ y: glowY }}
      />

      <motion.div
        className="
          absolute bottom-[18%] right-[12%] -z-10
          h-[220px] w-[220px]
          rounded-full bg-[rgba(34,211,238,0.22)]
          opacity-70 blur-[20px]
        "
        style={{ y: heroY }}
      />

      <div>
        <Reveal>
          <div
            className="
              flex w-fit items-center gap-2
              rounded-full border border-white/[0.13]
              bg-white/[0.06]
              px-3 py-2
              text-[0.82rem] text-[#a6a6b8]
            "
          >
            <span
              className="
                h-[8px] w-[8px] shrink-0 rounded-full
                bg-[#22c55e]
                shadow-[0_0_20px_#22c55e]
              "
            />

            <TypeAnimation
                  sequence={[
                    "Creating Modern Software Solutions",
                    1800,
                    "",
                    500,
                  ]}
                  wrapper="span"
                  speed={45}
                  deletionSpeed={60}
                  repeat={Infinity}
                  cursor={true}
                />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="
              mt-[22px] max-w-[690px]
              text-[2.8rem] font-bold
              leading-[0.92] tracking-[-0.08em]

              min-[621px]:text-[clamp(2.8rem,6.5vw,6.4rem)]
            "
          >
            My Portfolio{" "}
            <span
              className="
                inline-block
                bg-[linear-gradient(135deg,#a78bfa,#22d3ee,#f472b6)]
                bg-clip-text text-transparent
              "
            >
              AMASHA KAHANDAWA
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="
              mt-5 max-w-[540px]
              text-[1rem] leading-[1.75]
              text-[#a6a6b8]
            "
          >
            SE undergraduate and aspiring full-stack developer passionate about
            creating modern software solutions.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            className="
              mt-7 flex flex-col gap-3

              min-[621px]:flex-row
              min-[621px]:flex-wrap
            "
          >
            <Button href="https://github.com/Noori-Amasha">
              View Projects
            </Button>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                inline-flex min-h-10 w-full
                items-center justify-center
                rounded-full border border-white/[0.13]
                bg-white/[0.05]
                px-[18px] text-[0.9rem]
                font-bold text-[#f7f7ff]
                transition-[transform,border-color,background]
                duration-200
                hover:-translate-y-1
                min-[621px]:w-auto
              "
            >
              Contact Me
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div
            className="
              mt-[36px] grid max-w-[500px]
              grid-cols-1 gap-3

              min-[981px]:grid-cols-3
            "
          >
            <HighlightCard
              title="Problem Solving"
              description="Creative solutions"
              color="yellow"
            />

            <HighlightCard
              title="Backend Development"
              description="Java, Spring Boot"
              color="green"
            />

            <HighlightCard
              title="Frontend Development"
              description="React, TypeScript"
              color="blue"
            />
          </div>
        </Reveal>
      </div>

      <motion.div
        className="
          relative mt-8 grid place-items-center
          [perspective:1000px]

          min-[981px]:mt-0
        "
        style={{ y: heroY }}
        initial={{
          opacity: 0,
          scale: 0.9,
          rotate: -4,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
        }}
      >
        <div
          className="
            relative grid aspect-square
            w-full max-w-[360px]
            place-items-center
          "
        >
          <ElectricBorder className="aspect-[0.60] w-[72%] rounded-[34px]">
              <div
                className="
                  relative h-full w-full
                  overflow-hidden rounded-[34px]
                  border border-white/[0.13]
                  bg-white/[0.07]
                  shadow-[0_25px_80px_rgba(0,0,0,0.45)]

                  after:pointer-events-none
                  after:absolute after:inset-0
                  after:bg-[linear-gradient(to_top,rgba(7,7,12,0.75),transparent_45%)]
                  after:content-['']
                "
              >
                <img
                  src={heroImage}
                  alt="Portfolio hero"
                  className="h-full w-full object-cover"
                />
              </div>
              </ElectricBorder>

          <motion.div
            className="
              absolute -left-[2%] top-[8%]
              rounded-full border border-white/[0.13]
              bg-white/10 px-3 py-2
              text-[0.85rem] font-extrabold
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
            "
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            Fullstack developer
          </motion.div>

          <motion.div
            className="
              absolute -right-[3%] bottom-[19%]
              rounded-full border border-white/[0.13]
              bg-white/10 px-3 py-2
              text-[0.85rem] font-extrabold
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
            "
            animate={{
              y: [8, -8, 8],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            UG Software Eng.
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
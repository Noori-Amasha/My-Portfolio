
import { motion, useScroll, useTransform } from "motion/react";
import heroImage from "../assets/hero.png";
import { Reveal } from "./Toolkit";
import Button from "./common/Button";


function Hero() {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, -80]);
  const glowY = useTransform(scrollY, [0, 500], [0, 130]);

    return (
    <section
      id="home"
      className="
        relative grid min-h-screen grid-cols-1
        items-center gap-[60px]

        px-5 pb-[82px] pt-[130px]

        min-[621px]:px-[5%]
        min-[621px]:py-[95px]

        min-[981px]:grid-cols-[1.1fr_0.9fr]
        min-[981px]:px-[7%]
        min-[981px]:pb-[120px]
        min-[981px]:pt-[170px]
      "
    >
      
      <motion.div
        className="
          absolute left-[9%] top-[18%] -z-10
          h-[220px] w-[220px]
          rounded-full bg-[rgba(167,139,250,0.28)]
          opacity-70 blur-[20px]
        "
        style={{ y: glowY }}
      />

      {/* Second background glow */}
      <motion.div
        className="
          absolute bottom-[18%] right-[12%] -z-10
          h-[260px] w-[260px]
          rounded-full bg-[rgba(34,211,238,0.22)]
          opacity-70 blur-[20px]
        "
        style={{ y: heroY }}
      />

      {/* Hero text content */}
      <div>
        <Reveal>
          <div
            className="
              flex w-fit items-center gap-2.5
              rounded-full border border-white/[0.13]
              bg-white/[0.06]
              px-3.5 py-2.5
              text-[0.9rem] text-[#a6a6b8]
            "
          >
            <span
              className="
                h-[9px] w-[9px] shrink-0 rounded-full
                bg-[#22c55e]
                shadow-[0_0_20px_#22c55e]
              "
            />

            Creating Modern Software Solutions
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="
              mt-[26px] max-w-[790px]
              text-[3.4rem] font-bold
              leading-[0.92] tracking-[-0.08em]

              min-[621px]:text-[clamp(3.2rem,8vw,7.8rem)]
            "
          >
            My Portfolio{" "}
            <span
              className="
                inline-block bg-[linear-gradient(135deg,#a78bfa,#22d3ee,#f472b6)]
                bg-clip-text text-transparent
              "
            >
              AMASHA KAHADAWA
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="
              mt-7 max-w-[620px]
              text-[1.1rem] leading-[1.8]
              text-[#a6a6b8]
            "
          >
            SE undergraduate and aspiring full-stack developer 
            passionate about creating modern software solutions.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            className="
              mt-9 flex flex-col gap-4

              min-[621px]:flex-row
              min-[621px]:flex-wrap
            "
          >
            <Button href="https://github.com/Noori-Amasha">
              View Projects
            </Button>

            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div
            className="
              mt-[46px] grid max-w-[580px]
              grid-cols-1 gap-3.5

              min-[981px]:grid-cols-3
            "
          >
            <div
              className="
                rounded-3xl border border-pink/[0.13]
                bg-white/[0.055] p-[18px]
              "
            >
              <strong className="block text-[1.45rem]">
                Problem Solving
              </strong>

              <span className="mt-1.5 block text-[0.88rem] text-[#a6a6b8]">
                Creative solutions
              </span>
            </div>

            <div
              className="
                rounded-3xl border border-pink/[0.13]
                bg-white/[0.055] p-[18px]
              "
            >
              <strong className="block text-[1.45rem]">
                Backend Development
              </strong>

              <span className="mt-1.5 block text-[0.88rem] text-[#a6a6b8]">
                Java , Springboot
              </span>
            </div>

            <div
              className="
                rounded-3xl border border-pink/[0.13]
                bg-white/[0.055] p-[18px]
              "
            >
              <strong className="block text-[1.45rem]">
                Frontend Development 
              </strong>

              <span className="mt-1.5 block text-[0.88rem] text-[#a6a6b8]">
                React , Typescript
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Hero image section */}
      <motion.div
        className="
          relative mt-10 grid place-items-center
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
            w-full max-w-[430px]
            place-items-center
          "
        >
          {/* Outer orbit
          <div
            className="
              absolute inset-5 rounded-full
              border border-dashed border-white/50
              animate-[spin_18s_linear_infinite]
            "
          /> */}

          {/* Inner orbit
          <div
            className="
              absolute inset-8 rounded-full
              border border-dashed border-white/20
              animate-[spin_24s_linear_infinite_reverse]
            "
          /> */}

          {/* Image card */}
          <motion.div
            className="
              relative aspect-[0.60] w-[78%]
              overflow-hidden rounded-[42px]
              border border-white/[0.13]
              bg-white/[0.07]
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              [transform-style:preserve-3d]

              after:pointer-events-none
              after:absolute after:inset-0
              after:bg-[linear-gradient(to_top,rgba(7,7,12,0.75),transparent_45%)]
              after:content-['']
            "
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
          >
            <img
              src={heroImage}
              alt="Portfolio hero"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* First floating chip */}
          <motion.div
            className="
              absolute -left-[2%] top-[8%]
              rounded-full border border-white/[0.13]
              bg-white/10 px-4 py-3
              font-extrabold
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

          {/* Second floating chip */}
          <motion.div
            className="
              absolute -right-[3%] bottom-[19%]
              rounded-full border border-white/[0.13]
              bg-white/10 px-4 py-3
              font-extrabold
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

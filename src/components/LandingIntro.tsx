import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import ParticleField from "./common/ParticleField";
import glassFlowerGarden from "../assets/glass-flower-garden.png";

type LandingIntroProps = {
  onFinish: () => void;
};

function LandingIntro({ onFinish }: LandingIntroProps) {
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleStart = () => {
    if (loading) return;

    setLoading(true);

    timeoutRef.current = window.setTimeout(() => {
      onFinish();
    }, 3800);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      className="
        fixed inset-0 z-[99999]
        flex items-center justify-center
        overflow-hidden
        bg-[#05030a]
        px-4
      "
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_top,#1e1b4b,transparent_26rem)]
        "
      />

      {/* Falling particles */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          z-[1]
          h-[42vh]
          overflow-hidden
        "
      >
        <ParticleField count={50} minHeight={80} maxHeight={208} />
      </div>

      {/* Single transparent glass flower garden image */}
      <motion.img
        src={glassFlowerGarden}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
            pointer-events-none
            absolute
            left-1/2
            bottom-[-10vh]
            z-10

            w-[120vw]
            h-auto
            max-w-none
            -translate-x-1/2

            object-contain
            object-bottom
            select-none

            opacity-95

            sm:w-[110vw]
            lg:w-[100vw]
          "
        initial={{
          opacity: 0,
          y: 45,
          scale: 1.02,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
          delay: 0.15,
          ease: "easeOut",
        }}
      />

      {/* Existing portfolio card */}
      <motion.div
        className="
          relative z-20
          w-full max-w-[576px]
          rounded-[30px]
          border border-white/10
          bg-white/[0.055]
          px-5 py-10
          text-center
          shadow-[0_24px_80px_rgba(0,0,0,0.55)]
          backdrop-blur-xl

          sm:px-10
        "
        initial={{ opacity: 0, y: 36, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <motion.p
          className="
            mb-3
            text-[0.7rem]
            font-bold
            tracking-[0.26em]
            text-white/45
            uppercase
          "
          animate={{
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Welcome to Amasha&apos;s
        </motion.p>

        <motion.h1
          className="
            bg-gradient-to-r
            from-[#a78bfa]
            via-[#22d3ee]
            to-[#f472b6]
            bg-clip-text
            text-[3rem]
            font-black
            leading-none
            tracking-[-0.08em]
            text-transparent

            sm:text-[5.6rem]
          "
          animate={{
              filter: [
                "drop-shadow(0 0 6px rgba(34,211,238,0.2))",
                "drop-shadow(0 0 18px rgba(167,139,250,0.55))",
                "drop-shadow(0 0 6px rgba(34,211,238,0.2))",
              ],
            }}
          
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Portfolio
        </motion.h1>

        <p className="mx-auto mt-5 max-w-[416px] text-sm leading-7 text-white/55">
          Software Engineering Undergraduate | Aspiring Full-Stack Developer
        </p>

        {!loading ? (
          <motion.button
            type="button"
            onClick={handleStart}
            className="
              mt-8
              rounded-full
              bg-gradient-to-r
              from-[#a78bfa]
              to-[#22d3ee]
              px-10 py-3
              font-bold
              text-[#080812]
              shadow-[0_16px_48px_rgba(34,211,238,0.28)]
            "
            whileHover={{
              y: -4,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Start
          </motion.button>
        ) : (
          <div className="mx-auto mt-8 w-full max-w-[336px]">
            <motion.p
              className="
                mb-3
                text-[0.7rem]
                font-bold
                tracking-[0.2em]
                text-white/70
                uppercase
              "
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Loading...
            </motion.p>

            <div
              className="
                h-2.5
                overflow-hidden
                rounded-full
                border border-white/15
                bg-white/10
              "
            >
              <motion.div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-[#a78bfa]
                  via-[#22d3ee]
                  to-[#f472b6]
                "
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 3.5,
                  ease: "easeInOut",
                }}
              />
            </div>

            <p className="mt-3 text-[0.65rem] text-white/40">
              Charging portfolio experience
            </p>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}

export default LandingIntro;
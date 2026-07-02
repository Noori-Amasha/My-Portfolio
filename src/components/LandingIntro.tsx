import { useState } from "react";
import { motion } from "motion/react";
import ParticleField from "./common/ParticleField";

type LandingIntroProps = {
  onFinish: () => void;
};

function LandingIntro({ onFinish }: LandingIntroProps) {
  const [loading, setLoading] = useState(false);

    const handleStart = () => {
    setLoading(true);
    setTimeout(onFinish, 3800);
  };

  return (
    <motion.section
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#05030a] px-5"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e1b4b,transparent_32rem)]" />

      <div className="absolute inset-x-0 top-0 h-[52vh] overflow-hidden">
          <ParticleField count={50} minHeight={100} maxHeight={260} />
      </div>
      

      <motion.div
        className="relative z-10 w-full max-w-[720px] rounded-[38px] border border-white/10 bg-white/[0.055] px-6 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-12"
        initial={{ opacity: 0, y: 45, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <motion.p
          className="mb-4 text-sm font-bold tracking-[0.32em] text-white/45 uppercase"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          Welcome to Amasha's
        </motion.p>

        <motion.h1
          className="bg-gradient-to-r from-[#a78bfa] via-[#22d3ee] to-[#f472b6] bg-clip-text text-[3.8rem] font-black leading-none tracking-[-0.08em] text-transparent sm:text-[7rem]"
          animate={{
            y: [0, -8, 0],
            filter: [
              "drop-shadow(0 0 8px rgba(34,211,238,0.2))",
              "drop-shadow(0 0 22px rgba(167,139,250,0.55))",
              "drop-shadow(0 0 8px rgba(34,211,238,0.2))",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          Portfolio
        </motion.h1>

        <p className="mx-auto mt-6 max-w-[520px] text-base leading-8 text-white/55">
          Software Engineering Undergraduate | Aspiring Full-Stack Developer
        </p>

        {!loading ? (
          <motion.button
            onClick={handleStart}
            className="mt-10 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] px-12 py-4 font-bold text-[#080812] shadow-[0_20px_60px_rgba(34,211,238,0.28)]"
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Start
          </motion.button>
        ) : (
          <div className="mx-auto mt-10 w-full max-w-[420px]">
            <motion.p
              className="mb-4 text-sm font-bold tracking-[0.25em] text-white/70 uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              Loading...
            </motion.p>

            <div className="h-3 overflow-hidden rounded-full border border-white/15 bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#a78bfa] via-[#22d3ee] to-[#f472b6]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
              />
            </div>

            <p className="mt-4 text-xs text-white/40">
              Charging portfolio experience
            </p>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}

export default LandingIntro;
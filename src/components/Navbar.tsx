import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { navItems } from "../data/portfolioData";
import Button from "./common/Button";
import ParticleField from "./common/ParticleField";
import { FiArrowUp } from "react-icons/fi";

function Navbar() {
  const { scrollYProgress } = useScroll();
  
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.4,
  });
  
  const particleAreaHeight = useTransform(
    smoothScrollProgress,
    [0, 0.18, 0.36, 0.54, 0.72, 0.86],
    ["22vh", "32vh", "45vh", "60vh", "78vh", "100vh"],
  );

  const particleAreaOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.45, 0.86],
    [0.9, 0.95, 1],
  );

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none fixed
          left-[calc(50%+480px)] right-0 top-0
          z-[900] hidden overflow-hidden
          xl:block

          [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]
        "
        style={{
          height: particleAreaHeight,
          opacity: particleAreaOpacity,
        }}
      >
        <ParticleField
          count={40}
          minHeight={60}
          maxHeight={980}
          minDuration={5}
          maxDuration={15}
          minMove={12}
          maxMove={25}
          className="opacity-80"
        />
        
      </motion.div>

      <motion.header
        className="
          fixed left-4 right-4 top-[18px] z-[1000]
          mx-auto flex max-w-[980px]
          items-center justify-between
          rounded-full border border-white/[0.13]
          bg-[rgba(7,7,12,0.72)]
          px-[15px] py-[11px]
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-[18px]

          max-[620px]:top-[14px]
        "
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <a
          href="home"
          aria-label="Go to home section"
          className="
            grid h-[36px] w-[36px] shrink-0
            place-items-center rounded-full
            bg-gradient-to-br from-[#a78bfa] to-[#22d3ee]
            font-black tracking-[-0.04em]
          "
        >
          <FiArrowUp size={18} strokeWidth={3} />
        </a>

        <nav
          aria-label="Main navigation"
          className="
            flex items-center gap-[20px]
            max-[980px]:hidden
          "
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase()}`}
              className="
                text-[0.82rem] text-[#a6a6b8]
                transition-colors duration-[250ms]
                hover:text-[#f7f7ff]
              "
            >
              {item}
            </a>
          ))}
        </nav>

        <Button href="contact" className="max-[620px]:hidden">
           Let's Talk
        </Button>
      </motion.header>
    </>
  );
}

export default Navbar;
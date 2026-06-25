import { motion } from "motion/react";
import { navItems } from "../data/portfolioData";
import Button from "./common/Button";

function Navbar() {
  return (
    <motion.header
      className="
        fixed left-4 right-4 top-[22px] z-[1000]
        mx-auto flex max-w-[1120px]
        items-center justify-between
        rounded-full border border-white/[0.13]
        bg-[rgba(7,7,12,0.72)]
        px-[18px] py-[14px]
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        backdrop-blur-[18px]

        max-[620px]:top-[14px]
      "
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <a
        href="#home"
        aria-label="Go to home section"
        className="
          grid h-[42px] w-[42px] shrink-0
          place-items-center rounded-full
          bg-gradient-to-br from-[#a78bfa] to-[#22d3ee]
          font-black tracking-[-0.04em]
        "
      >
        <span className="text-[#111111]">^</span>
      </a>

      <nav
        aria-label="Main navigation"
        className="
          flex items-center gap-[26px]
          max-[980px]:hidden
        "
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="
              text-[0.9rem] text-[#a6a6b8]
              transition-colors duration-[250ms]
              hover:text-[#f7f7ff]
            "
          >
            {item}
          </a>
        ))}
      </nav>

      <Button href="#contact" className="max-[620px]:hidden">
        Hire Me
      </Button>
    </motion.header>
  );
}

export default Navbar;


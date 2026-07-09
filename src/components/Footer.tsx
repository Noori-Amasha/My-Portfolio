import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "motion/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        w-full
        border-t border-white/[0.12]
        bg-white/[0.055]
        px-5 py-4
        shadow-[0_-18px_60px_rgba(0,0,0,0.22)]
        backdrop-blur-[18px]
      "
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="
            flex items-center justify-between gap-5
            max-[700px]:flex-col
            max-[700px]:text-center
          "
        >
          <div>
            <motion.a
              href="#home"
              whileHover={{ scale: 1.04 }}
              className="
                text-sm font-black
                tracking-[-0.04em]
                text-[#f7f7ff]
              "
            >
              Portfolio of Amasha Kahandawa 
              <span className="text-[#a78bfa]">.</span>
            </motion.a>

            <p className="mt-1 text-xs text-[#a6a6b8]">
              Building sharp, modern and memorable digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-5 text-[#a6a6b8]">
            <motion.a
              href="https://github.com/Noori-Amasha"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
                color: "#1fc852",
              }}
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/amasha-kahandawa/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
                color: "#22d3ee",
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={30} />
            </motion.a>

            <motion.a
              href="mailto:nooriamashaed@gmail.com"
              whileHover={{
                y: -3,
                color: "#f472b6",
              }}
              aria-label="Email"
            >
              <MdEmail size={30} />
            </motion.a>
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Back to top"
            className="
            flex h-10 w-10 cursor-pointer items-center justify-center
            rounded-full
            border border-white/[0.12]
            bg-white/[0.07]
            text-[#f7f7ff]
            backdrop-blur-md
            transition-colors duration-200
            hover:border-[#a78bfa]/50
            hover:bg-[#a78bfa]/10
            hover:text-[#a78bfa]
                "
                >
                <FiArrowUp size={18} strokeWidth={2.5} />
                </motion.button>
        </div>

        <div className="mt-4 border-t border-white/[0.08] pt-3">
          <p className="text-center text-[0.68rem] text-[#a6a6b8]">
            © {currentYear} Amasha Kahadawa. Designed & built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
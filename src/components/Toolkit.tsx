import type { ReactNode } from "react";
import { motion } from "motion/react";

type SectionTitleProps = {
  label: string;
  title: string;
  text: string;
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export function SectionTitle({ label, title, text }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-[54px] max-w-[760px]"
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <span
        className="
          mb-4 inline-flex text-[0.78rem] font-extrabold
          uppercase tracking-[0.16em]
          text-blue-500 dark:text-cyan-300
        "
      >
        {label}
      </span>

      <h2
        className="
          m-0 text-[clamp(2rem,5vw,4.5rem)]
          leading-none tracking-[-0.06em]
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-5 text-[1.05rem] leading-[1.8]
          text-slate-600 dark:text-[#a6a6b8]
        "
      >
        {text}
      </p>
    </motion.div>
  );
}

export function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
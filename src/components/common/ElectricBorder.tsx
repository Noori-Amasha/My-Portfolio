import type { ReactNode } from "react";
import { motion } from "motion/react";

type ElectricBorderProps = {
  children: ReactNode;
  className?: string;
};

function ElectricBorder({
  children,
  className = "",
}: ElectricBorderProps) {
  return (
    <motion.div
      className={`
        group relative isolate
        ${className}
      `}
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
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Soft blue glow behind the card */}
      <div
        className="
          pointer-events-none absolute -inset-[3px]
          -z-10 rounded-[36px]
          bg-blue-500/30
          opacity-50 blur-[10px]
          transition-opacity duration-300
          group-hover:opacity-80
        "
      />

      {/* Normal blue border */}
      <div
        className="
          pointer-events-none absolute inset-0
          z-20 rounded-[34px]
          border border-blue-400/50
        "
      />

      {/* Moving electricity line */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 z-30
          h-full w-full
          overflow-visible
          rounded-[34px]
        "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="hero-electric-glow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="1.3" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id="hero-electric-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#60a5fa" />
            <stop offset="70%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        <motion.rect
          x="0.8"
          y="0.8"
          width="98.4"
          height="98.4"
          rx="8"
          ry="8"
          fill="none"
          stroke="url(#hero-electric-gradient)"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeDasharray="10 90"
          vectorEffect="non-scaling-stroke"
          filter="url(#hero-electric-glow)"
          animate={{
            strokeDashoffset: [100, 0],
            opacity: [0.45, 1, 0.55],
          }}
          transition={{
            strokeDashoffset: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 0.7,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        />

        <motion.rect
          x="0.8"
          y="0.8"
          width="98.4"
          height="98.4"
          rx="8"
          ry="8"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.55"
          strokeLinecap="round"
          strokeDasharray="3 97"
          vectorEffect="non-scaling-stroke"
          filter="url(#hero-electric-glow)"
          animate={{
            strokeDashoffset: [0, -100],
            opacity: [0.25, 1, 0.25],
          }}
          transition={{
            strokeDashoffset: {
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 0.5,
              repeat: Infinity,
            },
          }}
        />
      </svg>

      {children}
    </motion.div>
  );
}

export default ElectricBorder;
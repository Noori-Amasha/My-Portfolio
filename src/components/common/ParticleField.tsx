import { useMemo } from "react";
import { motion } from "motion/react";

type Particle = {
  id: number;
  left: number;
  height: number;
  delay: number;
  duration: number;
  moveAmount: number;
};

type ParticleFieldProps = {
  count?: number;
  minHeight?: number;
  maxHeight?: number;
  minDuration?: number;
  maxDuration?: number;
  minMove?: number;
  maxMove?: number;
  className?: string;
};

function createRandomGenerator(initialSeed: number) {
  let seed = initialSeed;

  return function random() {
    seed += 0x6d2b79f5;

    let value = seed;

    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function createParticles(
  count: number,
  minHeight: number,
  maxHeight: number,
  minDuration: number,
  maxDuration: number,
  minMove: number,
  maxMove: number,
): Particle[] {
  const random = createRandomGenerator(24681357);

  const heightRange = Math.max(0, maxHeight - minHeight);
  const durationRange = Math.max(0, maxDuration - minDuration);
  const movementRange = Math.max(0, maxMove - minMove);

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: random() * 100,
    height: minHeight + random() * heightRange,
    delay: random() * 0.35,

    // Higher duration means slower movement
    duration: minDuration + random() * durationRange,

    // Lower movement means gentler sideways motion
    moveAmount: minMove + random() * movementRange,
  }));
}

function ParticleField({
  count = 50,
  minHeight = 80,
  maxHeight = 260,
  minDuration = 5,
  maxDuration = 10,
  minMove = 12,
  maxMove = 35,
  className = "",
}: ParticleFieldProps) {
  const particles = useMemo(
    () =>
      createParticles(
        count,
        minHeight,
        maxHeight,
        minDuration,
        maxDuration,
        minMove,
        maxMove,
      ),
    [
      count,
      minHeight,
      maxHeight,
      minDuration,
      maxDuration,
      minMove,
      maxMove,
    ],
  );

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none absolute inset-0
        overflow-hidden
        ${className}
      `}
    >
      {particles.map((item) => (
        <motion.div
          key={item.id}
          className="
            absolute top-0 w-px origin-top
            bg-gradient-to-b
            from-white/45 via-white/15 to-transparent
            will-change-transform
          "
          style={{
            left: `${item.left}%`,
            height: item.height,
          }}
          animate={{
            x: [
              0,
              -item.moveAmount,
              item.moveAmount * 0.7,
              -item.moveAmount * 0.35,
              0,
            ],
            opacity: [0.25, 0.65, 0.35, 0.7, 0.3],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.span
            className="
              absolute bottom-0 left-1/2
              h-2.5 w-2.5
              -translate-x-1/2 rounded-full
              bg-white/70
              shadow-[0_0_6px_rgba(255,255,255,0.55),0_0_14px_rgba(254,240,138,0.45),0_0_24px_rgba(167,139,250,0.25)]
            "
            animate={{
              scale: [0.9, 1.35, 1],
              opacity: [0.65, 0.9, 0.75],
            }}
            transition={{
              duration: 2.2,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ParticleField;
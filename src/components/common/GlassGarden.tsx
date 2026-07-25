import { motion } from "motion/react";

import flowerGarden from "../../assets/flowers/flower-garden.png";
import flowerGardenLeft from "../../assets/flowers/flower-garden-left.png";
import flowerGardenCenter from "../../assets/flowers/flower-garden-center.png";
import flowerGardenRight from "../../assets/flowers/flower-garden-right.png";

type GlassGardenProps = {
  splitLayers?: boolean;
  className?: string;
};

const floatingAnimation = {
  y: [0, -7, 0],
  scale: [1, 1.012, 1],
};

function GlassGarden({
  splitLayers = false,
  className = "",
}: GlassGardenProps) {
  if (!splitLayers) {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 overflow-hidden ${className}`}
      >
        <motion.img
          src={flowerGarden}
          alt=""
          draggable={false}
          className="
            block h-auto w-full select-none object-contain object-bottom
            opacity-95 mix-blend-screen
            drop-shadow-[0_0_18px_rgba(199,210,254,0.42)]
          "
          animate={floatingAnimation}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 overflow-hidden ${className}`}
    >
      <motion.img
        src={flowerGardenLeft}
        alt=""
        draggable={false}
        className="
          absolute bottom-0 left-0 h-auto w-[48%] select-none
          opacity-95 mix-blend-screen
          drop-shadow-[0_0_18px_rgba(199,210,254,0.42)]
        "
        animate={{ y: [0, -8, 0], rotate: [0, -0.35, 0] }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={flowerGardenCenter}
        alt=""
        draggable={false}
        className="
          absolute bottom-[-1%] left-1/2 h-auto w-[52%]
          -translate-x-1/2 select-none opacity-90 mix-blend-screen
          drop-shadow-[0_0_20px_rgba(165,180,252,0.38)]
        "
        animate={{ y: [0, -5, 0], scale: [1, 1.015, 1] }}
        transition={{
          duration: 7.8,
          delay: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={flowerGardenRight}
        alt=""
        draggable={false}
        className="
          absolute bottom-0 right-0 h-auto w-[48%] select-none
          opacity-95 mix-blend-screen
          drop-shadow-[0_0_18px_rgba(199,210,254,0.42)]
        "
        animate={{ y: [0, -9, 0], rotate: [0, 0.35, 0] }}
        transition={{
          duration: 7.2,
          delay: 0.25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default GlassGarden;

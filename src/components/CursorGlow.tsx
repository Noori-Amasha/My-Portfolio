import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 450, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 35 });

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerdown", mouseDown);
    window.addEventListener("pointerup", mouseUp);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerdown", mouseDown);
      window.removeEventListener("pointerup", mouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="
          pointer-events-none fixed left-0 top-0 z-[99999]
          h-[9px] w-[9px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-white
          shadow-[0_0_25px_rgba(255,255,255,0.9)]
          max-[620px]:hidden
        "
        style={{ x: springX, y: springY }}
        animate={{ scale: clicked ? 0.75 : 1 }}
      />

      <motion.div
        className="
          pointer-events-none fixed left-0 top-0 z-[99999]
          h-11 w-11
          -translate-x-1/2 -translate-y-1/2
          rounded-full border border-white/35
          backdrop-blur-[3px]
          max-[620px]:hidden
        "
        style={{ x: springX, y: springY }}
        animate={{ scale: clicked ? 1.5 : 1 }}
      />
    </>
  );
}

export default CursorGlow;
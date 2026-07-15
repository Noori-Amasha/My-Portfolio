import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  opacityDirection: number;
  speedX: number;
  speedY: number;
  glowStrength: number;
};

type ConstellationBackgroundProps = {
  starCount?: number;
  connectionDistance?: number;
  className?: string;
};

function createSeededRandom(initialSeed: number) {
  let seed = initialSeed;

  return function random() {
    seed += 0x6d2b79f5;

    let value = seed;

    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function createStars(
  count: number,
  width: number,
  height: number,
): Star[] {
  const random = createSeededRandom(975312468);

  return Array.from({ length: count }, () => {
    const isMainStar = random() > 0.82;

    return {
      x: random() * width,
      y: random() * height,

      radius: isMainStar
        ? 1.5 + random() * 1.35
        : 0.55 + random() * 1.05,

      opacity: isMainStar
        ? 0.65 + random() * 0.3
        : 0.25 + random() * 0.45,

      opacityDirection: random() > 0.5 ? 1 : -1,

      // Extremely slow movement keeps the background professional.
      speedX: (random() - 0.5) * 0.045,
      speedY: (random() - 0.5) * 0.035,

      glowStrength: isMainStar
        ? 9 + random() * 10
        : 3 + random() * 5,
    };
  });
}

function ConstellationBackground({
  starCount = 100,
  connectionDistance = 155,
  className = "",
}: ConstellationBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let stars: Star[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId = 0;
    let devicePixelRatio = 1;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(
        devicePixelRatio,
        0,
        0,
        devicePixelRatio,
        0,
        0,
      );

      const responsiveStarCount =
        width < 640
          ? Math.round(starCount * 0.55)
          : width < 1024
            ? Math.round(starCount * 0.75)
            : starCount;

      stars = createStars(
        responsiveStarCount,
        width,
        height,
      );
    };

    const updateStars = () => {
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        star.opacity += 0.0018 * star.opacityDirection;

        if (star.opacity >= 0.95) {
          star.opacity = 0.95;
          star.opacityDirection = -1;
        }

        if (star.opacity <= 0.22) {
          star.opacity = 0.22;
          star.opacityDirection = 1;
        }

        if (star.x < -10) {
          star.x = width + 10;
        }

        if (star.x > width + 10) {
          star.x = -10;
        }

        if (star.y < -10) {
          star.y = height + 10;
        }

        if (star.y > height + 10) {
          star.y = -10;
        }
      });
    };

    const drawBackgroundGlow = () => {
      const glow = context.createRadialGradient(
        width * 0.48,
        height * 0.4,
        0,
        width * 0.48,
        height * 0.4,
        Math.max(width, height) * 0.65,
      );

      glow.addColorStop(0, "rgba(59, 130, 246, 0.055)");
      glow.addColorStop(0.45, "rgba(99, 102, 241, 0.025)");
      glow.addColorStop(1, "rgba(2, 6, 23, 0)");

      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
    };

    const drawConnections = () => {
      for (
        let firstIndex = 0;
        firstIndex < stars.length;
        firstIndex += 1
      ) {
        const firstStar = stars[firstIndex];

        for (
          let secondIndex = firstIndex + 1;
          secondIndex < stars.length;
          secondIndex += 1
        ) {
          const secondStar = stars[secondIndex];

          const distanceX = firstStar.x - secondStar.x;
          const distanceY = firstStar.y - secondStar.y;

          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY,
          );

          if (distance > connectionDistance) {
            continue;
          }

          const distanceOpacity =
            1 - distance / connectionDistance;

          const starOpacity =
            Math.min(firstStar.opacity, secondStar.opacity);

          const lineOpacity =
            distanceOpacity * starOpacity * 0.25;

          if (lineOpacity < 0.025) {
            continue;
          }

          const lineGradient = context.createLinearGradient(
            firstStar.x,
            firstStar.y,
            secondStar.x,
            secondStar.y,
          );

          lineGradient.addColorStop(
            0,
            `rgba(96, 165, 250, ${lineOpacity})`,
          );

          lineGradient.addColorStop(
            0.5,
            `rgba(125, 211, 252, ${lineOpacity * 0.9})`,
          );

          lineGradient.addColorStop(
            1,
            `rgba(167, 139, 250, ${lineOpacity})`,
          );

          context.beginPath();
          context.moveTo(firstStar.x, firstStar.y);
          context.lineTo(secondStar.x, secondStar.y);

          context.strokeStyle = lineGradient;
          context.lineWidth = 0.65;
          context.stroke();
        }
      }
    };

    const drawStars = () => {
      stars.forEach((star, index) => {
        const isPurpleStar = index % 7 === 0;
        const isCyanStar = index % 5 === 0;

        const starColor = isPurpleStar
          ? "167, 139, 250"
          : isCyanStar
            ? "103, 232, 249"
            : "191, 219, 254";

        context.save();

        context.shadowBlur = star.glowStrength;
        context.shadowColor = `rgba(${starColor}, ${star.opacity})`;

        context.beginPath();
        context.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2,
        );

        context.fillStyle = `rgba(${starColor}, ${star.opacity})`;
        context.fill();

        // Adds a small bright centre to larger stars.
        if (star.radius > 1.5) {
          context.beginPath();
          context.arc(
            star.x,
            star.y,
            Math.max(0.45, star.radius * 0.34),
            0,
            Math.PI * 2,
          );

          context.fillStyle = `rgba(255, 255, 255, ${
            Math.min(1, star.opacity + 0.15)
          })`;

          context.fill();
        }

        context.restore();
      });
    };

    const drawScene = () => {
      context.clearRect(0, 0, width, height);

      drawBackgroundGlow();
      drawConnections();
      drawStars();
    };

    const animate = () => {
      updateStars();
      drawScene();

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      window.cancelAnimationFrame(animationFrameId);

      if (prefersReducedMotion.matches) {
        drawScene();
        return;
      }

      animate();
    };

    const handleResize = () => {
      resizeCanvas();
      startAnimation();
    };

    resizeCanvas();
    startAnimation();

    window.addEventListener("resize", handleResize);
    prefersReducedMotion.addEventListener(
      "change",
      startAnimation,
    );

    return () => {
      window.cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", handleResize);

      prefersReducedMotion.removeEventListener(
        "change",
        startAnimation,
      );
    };
  }, [connectionDistance, starCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`
        pointer-events-none fixed inset-0
        z-0 h-screen w-screen
        opacity-90
        ${className}
      `}
    />
  );
}

export default ConstellationBackground;
import { motion } from "motion/react";
import { journey } from "../data/portfolioData";
import { SectionTitle } from "./Toolkit";

type JourneyItem = {
  year: string;
  title: string;
  desc: string;
};

type JourneyCardProps = {
  item: JourneyItem;
  index: number;
  side: "left" | "right";
};

function JourneyCard({
  item,
  index,
  side,
}: JourneyCardProps) {
  return (
    <motion.article
      className="
        group relative
        min-h-[250px] w-full
        overflow-hidden
        rounded-[1.75rem]
        border border-blue-200/70
        bg-white/75
        p-6
        shadow-[0_24px_70px_rgba(30,64,175,0.12)]
        backdrop-blur-2xl

        sm:p-7

        before:pointer-events-none
        before:absolute
        before:inset-0
        before:bg-[linear-gradient(135deg,rgba(59,130,246,0.12),transparent_42%)]
        before:content-['']

        after:pointer-events-none
        after:absolute
        after:inset-[1px]
        after:rounded-[calc(1.75rem-1px)]
        after:border
        after:border-white/40
        after:content-['']

        transition-[border-color,box-shadow,background-color]
        duration-500

        hover:border-blue-400/70
        hover:shadow-[0_30px_90px_rgba(37,99,235,0.20)]

        dark:border-pink-300/15
        dark:bg-white/[0.055]
        dark:shadow-[0_25px_80px_rgba(0,0,0,0.4)]
        dark:before:bg-[linear-gradient(135deg,rgba(236,72,153,0.17),transparent_44%)]
        dark:after:border-white/[0.035]
        dark:hover:border-pink-400/45
        dark:hover:bg-white/[0.075]
        dark:hover:shadow-[0_30px_100px_rgba(236,72,153,0.12)]
      "
      initial={{
        opacity: 0,
        x: side === "left" ? -65 : 65,
        rotateY: side === "left" ? -5 : 5,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        rotateY: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      whileHover={{
        y: -8,
        rotateX: 1.5,
        rotateY: side === "left" ? 1.5 : -1.5,
      }}
      transition={{
        opacity: {
          duration: 0.65,
          delay: index * 0.08,
        },
        x: {
          duration: 0.75,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        },
        rotateY: {
          duration: 0.75,
          delay: index * 0.08,
        },
        y: {
          type: "spring",
          stiffness: 180,
          damping: 18,
        },
        rotateX: {
          type: "spring",
          stiffness: 180,
          damping: 18,
        },
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    > 
      <div
        className="
          pointer-events-none absolute
          -right-20 -top-20
          h-48 w-48
          rounded-full
          bg-blue-400/0
          blur-3xl
          transition-colors duration-500

          group-hover:bg-blue-400/15

          dark:group-hover:bg-pink-400/15
        "
      />

       <div
        className="
          pointer-events-none absolute
          right-5 top-5
          h-9 w-9
          border-r border-t
          border-blue-400/35

          dark:border-pink-300/30
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className="
              rounded-full
              border border-blue-300/30
              bg-blue-500/10
              px-3 py-1.5
              text-[0.68rem] font-black
              uppercase tracking-[0.2em]
              text-blue-600

              dark:border-pink-300/20
              dark:bg-pink-400/10
              dark:text-pink-400
            "
          >
            {item.year}
          </span>

          <span
            className="
              text-xs font-bold
              tracking-[0.22em]
              text-slate-400/80

              dark:text-white/25
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div
          className="
            my-6 h-px w-full
            bg-gradient-to-r
            from-blue-400/50
            via-blue-300/15
            to-transparent

            dark:from-pink-400/50
            dark:via-pink-300/10
          "
        />

        <h3
          className="
            text-[1.3rem] font-bold
            leading-tight
            tracking-[-0.04em]
            text-slate-900

            sm:text-[1.45rem]

            dark:text-[#faf7fb]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-4
            text-[0.92rem]
            leading-7
            text-slate-600

            dark:text-[#b7aabd]
          "
        >
          {item.desc}
        </p>

        <div
          className="
            mt-auto flex items-center
            gap-2 pt-8
            text-[0.65rem] font-bold
            uppercase tracking-[0.2em]
            text-blue-500/70

            dark:text-pink-400/60
          "
        >
          <span
            className="
              h-1.5 w-1.5
              rounded-full
              bg-blue-500/70

              dark:bg-pink-400/70
            "
          />

          Growth checkpoint
        </div>
      </div>
    </motion.article>
  );
}

function Journey() {
  return (
    <section
      id="journey"
      className="
        relative overflow-hidden
        px-5 py-20
        sm:px-[5%] sm:py-24
        lg:px-[7%] lg:py-[120px]
      "
    >
      <SectionTitle
        label="Journey"
        title="A simple timeline of growth and direction."
        text="A look at how far I have come, what I have learned, and where I am heading next."
      />

      <div className="relative mx-auto mt-16 max-w-[1200px]">
        <div
          className="
            pointer-events-none absolute
            left-1/2 top-0
            hidden h-full w-[420px]
            -translate-x-1/2
            bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_65%)]
            blur-3xl

            md:block

            dark:bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.10),transparent_65%)]
          "
        />

        <motion.div
          className="
            absolute bottom-0 left-[11px] top-0
            w-px
            bg-gradient-to-b
            from-transparent
            via-blue-400/60
            to-transparent

            md:hidden

            dark:via-pink-400/50
          "
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.3,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top" }}
        />

        <motion.div
          className="
            absolute bottom-0 left-1/2 top-0
            hidden w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-blue-400/70
            to-transparent

            md:block

            dark:via-pink-400/55
          "
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "top" }}
        />

        <div className="relative flex flex-col gap-2 md:gap-3">
          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={`${item.year}-${item.title}`}
                className="
                  relative grid
                  grid-cols-[24px_minmax(0,1fr)]
                  gap-5

                  md:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)]
                  md:gap-0
                "
              >
                <div
                  className="
                    relative z-20 col-start-1
                    flex justify-center

                    md:hidden
                  "
                >
                  <TimelineMarker
                    index={index}
                    className="mt-10 h-3 w-3"
                  />
                </div>

                {isLeft && (
                  <div
                    className="
                      col-start-2 row-start-1

                      md:col-start-1
                      md:pr-10
                    "
                  >
                    <JourneyCard
                      item={item}
                      index={index}
                      side="left"
                    />
                  </div>
                )}
               
                <div
                  className="
                    relative z-20
                    hidden items-start justify-center

                    md:col-start-2
                    md:row-start-1
                    md:flex
                  "
                >
                  <TimelineMarker
                    index={index}
                    className="mt-12 h-4 w-4"
                  />

                  <motion.div
                    className={`
                      absolute top-[55px]
                      h-px w-[42px]
                      bg-gradient-to-r

                      ${
                        isLeft
                          ? "right-[40px] from-transparent to-blue-400/70 dark:to-pink-400/60"
                          : "left-[40px] from-blue-400/70 to-transparent dark:from-pink-400/60"
                      }
                    `}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08 + 0.35,
                    }}
                    style={{
                      transformOrigin: isLeft ? "right" : "left",
                    }}
                  />
                </div>
                
                {!isLeft && (
                  <div
                    className="
                      col-start-2 row-start-1

                      md:col-start-3
                      md:pl-10
                    "
                  >
                    <JourneyCard
                      item={item}
                      index={index}
                      side="right"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type TimelineMarkerProps = {
  index: number;
  className?: string;
};

function TimelineMarker({
  index,
  className = "",
}: TimelineMarkerProps) {
  return (
    <motion.span
      className={`
        block rounded-full
        border-[3px] border-white
        bg-blue-500
        shadow-[0_0_0_7px_rgba(59,130,246,0.12),0_0_28px_rgba(59,130,246,0.75)]

        dark:border-[#080b2c]
        dark:bg-pink-400
        dark:shadow-[0_0_0_7px_rgba(244,114,182,0.12),0_0_28px_rgba(244,114,182,0.75)]

        ${className}
      `}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 17,
        delay: index * 0.08 + 0.25,
      }}
    />
  );
}

export default Journey;
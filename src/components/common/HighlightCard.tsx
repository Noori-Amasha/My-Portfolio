type HighlightCardProps = {
  title: string;
  description: string;
  color: "yellow" | "green" | "blue";
};

const colorStyles = {
  yellow: {
    border: "border-yellow-300/35 hover:border-yellow-300/60",
    shadow:
      "shadow-[0_0_25px_rgba(250,204,21,0.08)] hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    gradient:
      "before:bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.22),transparent_65%)]",
    text: "text-yellow-100/65",
  },

  green: {
    border: "border-emerald-400/35 hover:border-emerald-400/65",
    shadow:
      "shadow-[0_0_25px_rgba(16,185,129,0.08)] hover:shadow-[0_0_38px_rgba(16,185,129,0.2)]",
    gradient:
      "before:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.24),transparent_65%)]",
    text: "text-emerald-100/65",
  },

  blue: {
    border: "border-sky-300/35 hover:border-sky-300/65",
    shadow:
      "shadow-[0_0_25px_rgba(56,189,248,0.08)] hover:shadow-[0_0_38px_rgba(56,189,248,0.2)]",
    gradient:
      "before:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_65%)]",
    text: "text-sky-100/65",
  },
};

function HighlightCard({
  title,
  description,
  color,
}: HighlightCardProps) {
  const styles = colorStyles[color];

  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl border
        bg-white/[0.055]
        p-4
        transition-all duration-300

        before:pointer-events-none
        before:absolute
        before:inset-0
        before:content-['']

        hover:-translate-y-1

        ${styles.border}
        ${styles.shadow}
        ${styles.gradient}
      `}
    >
      <div className="relative z-10">
        <strong className="block text-[1.18rem] text-white">
          {title}
        </strong>

        <span
          className={`
            mt-1 block text-[0.8rem]
            ${styles.text}
          `}
        >
          {description}
        </span>
      </div>
    </div>
  );
}

export default HighlightCard;
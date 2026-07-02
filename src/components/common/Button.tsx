import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses = `
    inline-flex min-h-12 w-full items-center justify-center
    rounded-full px-[22px] font-bold
    transition-[transform,border-color,background]
    duration-200
    hover:-translate-y-1
    min-[621px]:w-auto
  `;

  const primaryClasses = `
    bg-[linear-gradient(135deg,#a78bfa,#22d3ee)]
    text-[#080812]
    shadow-[0_16px_45px_rgba(167,139,250,0.26)]
  `;

  const secondaryClasses = `
    border border-white/[0.13]
    bg-white/[0.05]
    text-[#f7f7ff]
  `;

  return (
    <a
      href={href}
      className={`
        ${baseClasses}
        ${variant === "primary" ? primaryClasses : secondaryClasses}
        ${className}
      `}
    >
      {children}
    </a>
  );
}

export default Button;
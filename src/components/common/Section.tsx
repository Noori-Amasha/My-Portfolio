import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative px-5 py-20
        sm:px-[5%] sm:py-24
        lg:px-[7%] lg:py-[120px]
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default Section;
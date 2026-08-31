import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function DualRule({
  invert = false,
  size = "md",
  className = "",
}: {
  invert?: boolean;
  size?: "md" | "lg";
  className?: string;
}) {
  const long = size === "lg" ? "h-1 w-16 md:w-24" : "h-[3px] w-8 md:w-11";
  const short = size === "lg" ? "h-1 w-9 md:w-14" : "h-[3px] w-4 md:w-5";
  return (
    <span className={`flex shrink-0 items-center gap-1.5 ${className}`} aria-hidden>
      <span
        className={`rounded-full ${long} ${invert ? "bg-sky-300" : "bg-brand"}`}
      />
      <span className={`rounded-full bg-accent ${short}`} />
    </span>
  );
}

export function Eyebrow({
  children,
  invert = false,
}: {
  children: ReactNode;
  invert?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 md:gap-4 ${
        invert ? "text-accent" : "text-brand"
      }`}
    >
      <DualRule invert={invert} />
      <span className="font-display text-2xl font-semibold uppercase tracking-[0.18em] md:text-3xl lg:text-4xl">
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <Eyebrow invert={invert}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${
          invert ? "text-white" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${
            invert ? "text-white/70" : "text-muted-foreground"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  video,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  video?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand pb-24 pt-40 text-white md:pb-32 md:pt-52">
      {video && (
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div
        className={`absolute inset-0 ${video ? "bg-[#061528]/88" : "bg-brand"}`}
        aria-hidden
      />
      <div className="absolute inset-0 grid-noise opacity-20" aria-hidden />
      <div className="container-x relative mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
        >
          <span className="h-px w-10 bg-accent" />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[6.5rem]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}

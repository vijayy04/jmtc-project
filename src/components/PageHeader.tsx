import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { DualRule } from "@/components/SectionHeading";

export function PageHeader({
  eyebrow,
  eyebrowExtra,
  title,
  intro,
  video,
  image,
}: {
  eyebrow: string;
  /** Shown beside the eyebrow, e.g. industry subheading */
  eyebrowExtra?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  video?: string;
  image?: string;
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
      {!video && image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div
        className={`absolute inset-0 ${
          video || image ? "bg-[#061528]/72" : "bg-brand"
        }`}
        aria-hidden
      />
      <div className="absolute inset-0 grid-noise opacity-20" aria-hidden />
      <div className="container-x relative mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-accent md:gap-x-5"
        >
          <span className="font-display text-2xl font-semibold uppercase tracking-[0.18em] md:text-3xl lg:text-4xl">
            {eyebrow}
          </span>
          {eyebrowExtra && (
            <span className="max-w-3xl font-display text-lg font-semibold leading-snug tracking-tight text-white md:text-2xl lg:text-3xl">
              {eyebrowExtra}
            </span>
          )}
          <DualRule invert size="lg" />
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
            className="mt-8 max-w-2xl text-justify text-lg leading-relaxed text-white/70 [hyphens:auto]"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}

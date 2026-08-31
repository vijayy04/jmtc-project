import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import { company } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1200}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/60 to-brand" />
        <div className="absolute inset-0 grid-noise opacity-40 mix-blend-overlay" />
      </div>

      <div className="container-x relative mx-auto flex min-h-[100dvh] max-w-[1440px] flex-col justify-end pb-20 pt-32 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/70"
        >
          <span className="h-px w-10 bg-accent" />
          Founded {company.founded} · {company.country}
        </motion.div>

        <div className="mt-8 max-w-6xl">
          <h1 className="font-display text-balance text-[clamp(2.75rem,7.5vw,7rem)] font-semibold leading-[0.94] tracking-tight">
            {["Engineering", "Contracting", "Industrial Trading"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end"
        >
          <p className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            {company.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-[0_18px_40px_-20px_rgba(255,255,255,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-18px_rgba(255,255,255,0.65)] active:scale-[0.98]"
            >
              Explore Services
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-accent transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
            >
              Request Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Counter } from "@/components/Counter";
import { Eyebrow } from "@/components/SectionHeading";
import { company, stats } from "@/data/site";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-40">
      <div className="container-x mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={aboutImg}
              alt="Industrial precision components"
              width={1400}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden bg-accent px-6 py-5 text-white shadow-xl md:block">
            <div className="font-display text-3xl font-semibold leading-none">
              {company.founded}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.22em]">
              Founded
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <Eyebrow>About MJTC</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand md:text-5xl lg:text-6xl">
            A Bahrain company built on engineering discipline.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Founded in {company.founded}, {company.name} is an independent
            Bahrain company delivering integrated engineering, contracting and
            industrial trading services to industrial, utility, commercial and
            government clients across the Kingdom.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-brand md:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-brand"
            >
              Our Story
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

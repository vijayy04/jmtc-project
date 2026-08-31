import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-accent py-24 text-white md:py-32">
      <div className="absolute inset-0 grid-noise opacity-30" aria-hidden />
      <div className="container-x relative mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
        >
          Have a project?<br />
          Let's engineer it, supply it, deliver it.
        </motion.h2>
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-accent transition-transform duration-300 hover:-translate-y-0.5"
          >
            Request Quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4" />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

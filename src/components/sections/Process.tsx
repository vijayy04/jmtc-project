import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-brand py-28 text-white md:py-40">
      <div className="absolute inset-0 grid-noise opacity-20" aria-hidden />
      <div className="container-x relative mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-accent md:w-14" />
          <p className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-accent md:text-3xl lg:text-4xl">
            Our Process
          </p>
        </motion.div>
        <div>
          <SectionHeading
            invert
            title={<>From consultation to lifetime support.</>}
            intro="A disciplined seven-step process gives every project the same precision — regardless of scale or urgency."
          />
        </div>

        <div className="mt-20">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group grid grid-cols-[70px_1fr] items-start gap-6 border-t border-white/10 py-8 md:grid-cols-[110px_1.4fr_2fr] md:gap-10 md:py-10"
            >
              <div className="font-display text-2xl font-semibold text-accent md:text-3xl">
                {s.step}
              </div>
              <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
                {s.title}
              </h3>
              <p className="col-span-2 max-w-xl text-sm leading-relaxed text-white/70 md:col-span-1 md:text-base">
                {s.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

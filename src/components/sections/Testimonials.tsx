import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[idx];

  return (
    <section
      className="bg-background py-28 md:py-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x mx-auto max-w-[1440px]">
        <SectionHeading eyebrow="Client Voices" title={<>What partners say.</>} />
        <div className="relative mt-14 overflow-hidden rounded-sm border border-border bg-surface p-8 md:p-16">
          <Quote className="absolute right-8 top-8 size-16 text-accent/15 md:size-24" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl"
            >
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-brand md:text-4xl">
                "{t.quote}"
              </p>
              <footer className="mt-8 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                <span className="text-brand">{t.author}</span> · {t.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-10 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === idx ? "w-10 bg-accent" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

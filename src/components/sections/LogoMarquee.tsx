import { motion } from "framer-motion";

export type LogoMarqueeItem = {
  name: string;
  logo: string;
};

function LogoCard({ name, logo }: LogoMarqueeItem) {
  return (
    <div className="group flex h-28 w-[220px] shrink-0 items-center justify-center rounded-sm border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-24px_rgba(9,34,74,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_50px_-22px_rgba(9,34,74,0.28)] sm:h-32 sm:w-[260px] sm:p-7">
      <div className="flex h-full w-full items-center justify-center rounded-sm bg-white">
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

function buildMarqueeTrack(items: LogoMarqueeItem[]) {
  const repeatCount = Math.max(2, Math.ceil(12 / items.length));
  const marqueeItems = Array.from({ length: repeatCount }, () => items).flat();
  return [...marqueeItems, ...marqueeItems];
}

export function LogoMarquee({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: LogoMarqueeItem[];
}) {
  const track = buildMarqueeTrack(items);

  return (
    <section className="relative overflow-hidden bg-brand py-24 text-white md:py-32">
      <div className="grid-noise absolute inset-0 opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 size-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{description}</p>
        </motion.div>

        <div className="relative mt-14 md:mt-16">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand to-transparent sm:w-28"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand to-transparent sm:w-28"
            aria-hidden
          />

          <div className="overflow-hidden">
            <div className="marquee-track flex w-max gap-6 px-2 sm:gap-8">
              {track.map((item, i) => (
                <LogoCard key={`${item.name}-${i}`} name={item.name} logo={item.logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

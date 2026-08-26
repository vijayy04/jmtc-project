import { motion } from "framer-motion";

export type LogoMarqueeItem = {
  name: string;
  logo: string;
};

function LogoSeal({ name, logo, index }: LogoMarqueeItem & { index: number }) {
  return (
    <div className="group flex w-[148px] shrink-0 flex-col items-center gap-3 sm:w-[168px]">
      <div className="relative">
        <div className="absolute -left-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-white/15 sm:block" />
        <div className="flex size-[118px] items-center justify-center rounded-full bg-gradient-to-b from-white/25 via-white/10 to-white/5 p-[1.5px] shadow-[0_20px_40px_-28px_rgba(0,0,0,0.55)] sm:size-[132px]">
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full bg-[#f3efe8] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
            <span className="absolute left-1/2 top-3 -translate-x-1/2 font-display text-[9px] font-semibold tracking-[0.28em] text-brand/35">
              {String(index).padStart(2, "0")}
            </span>
            <img
              src={logo}
              alt={name}
              loading="lazy"
              className="mt-2 max-h-12 max-w-[4.75rem] object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 sm:max-h-14 sm:max-w-[5.5rem]"
            />
          </div>
        </div>
      </div>
      <p className="max-w-[9rem] truncate text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
        {name}
      </p>
    </div>
  );
}

function buildMarqueeTrack(items: LogoMarqueeItem[]) {
  const repeatCount = Math.max(3, Math.ceil(10 / Math.max(items.length, 1)));
  const marqueeItems = Array.from({ length: repeatCount }, () => items).flat();
  return [...marqueeItems, ...marqueeItems];
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: LogoMarqueeItem[];
  reverse?: boolean;
}) {
  const track = buildMarqueeTrack(items);

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-start gap-3 px-2 sm:gap-5 ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
      >
        {track.map((item, i) => (
          <LogoSeal
            key={`${item.name}-${reverse ? "b" : "a"}-${i}`}
            name={item.name}
            logo={item.logo}
            index={(i % items.length) + 1}
          />
        ))}
      </div>
    </div>
  );
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
  const rowA = items.filter((_, i) => i % 2 === 0);
  const rowB = items.filter((_, i) => i % 2 === 1);
  const secondRow = rowB.length > 0 ? rowB : [...items].reverse();

  return (
    <section className="relative overflow-hidden bg-brand py-24 text-white md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-24 size-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
        aria-hidden
      />

      <div className="container-x relative mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 md:px-5 md:py-2.5">
              <span className="size-2 rounded-full bg-accent" />
              <p className="font-display text-base font-semibold uppercase tracking-[0.18em] text-accent md:text-xl lg:text-2xl">
                {eyebrow}
              </p>
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="font-display text-5xl font-semibold tabular-nums leading-none text-white/15 md:text-6xl">
              {String(items.length).padStart(2, "0")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
              {description}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="logo-marquee-rails relative mt-16 md:mt-20">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand to-transparent sm:w-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand to-transparent sm:w-32"
          aria-hidden
        />
        <div className="flex flex-col gap-8">
          <MarqueeRow items={rowA} />
          <MarqueeRow items={secondRow} reverse />
        </div>
      </div>
    </section>
  );
}

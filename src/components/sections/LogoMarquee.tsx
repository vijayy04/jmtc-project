import { motion } from "framer-motion";

export type LogoMarqueeItem = {
  name: string;
  logo: string;
  bg?: string;
};

function isLightBg(hex?: string) {
  if (!hex) return true;
  const h = hex.replace("#", "");
  if (h.length !== 6) return true;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function LogoSeal({
  name,
  logo,
  bg = "#f3efe8",
  index,
}: LogoMarqueeItem & { index: number }) {
  const light = isLightBg(bg);

  return (
    <div className="group flex w-[160px] shrink-0 flex-col items-center gap-3 sm:w-[180px]">
      <div className="relative">
        <div className="absolute -left-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-white/15 sm:block" />
        <div className="flex size-[124px] items-center justify-center rounded-full bg-gradient-to-b from-white/25 via-white/10 to-white/5 p-[1.5px] shadow-[0_20px_40px_-28px_rgba(0,0,0,0.55)] sm:size-[140px]">
          <div
            className="relative flex size-full items-center justify-center overflow-hidden rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
            style={{ backgroundColor: bg }}
          >
            <span
              className={`absolute left-1/2 top-3 -translate-x-1/2 font-display text-[9px] font-semibold tracking-[0.28em] ${
                light ? "text-brand/35" : "text-white/35"
              }`}
            >
              {String(index).padStart(2, "0")}
            </span>
            <img
              src={logo}
              alt={name}
              loading="lazy"
              className="mt-1 max-h-14 max-w-[5.5rem] object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 sm:max-h-16 sm:max-w-[6.25rem]"
            />
          </div>
        </div>
      </div>
      <p className="max-w-[10rem] text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
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

function MarqueeRow({ items }: { items: LogoMarqueeItem[] }) {
  const track = buildMarqueeTrack(items);

  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex w-max items-start gap-3 px-2 sm:gap-5">
        {track.map((item, i) => (
          <LogoSeal
            key={`${item.name}-${i}`}
            name={item.name}
            logo={item.logo}
            bg={item.bg}
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
        <MarqueeRow items={items} />
      </div>
    </section>
  );
}

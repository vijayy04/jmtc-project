import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import contractingImg from "@/assets/contracting.jpg";
import tradingImg from "@/assets/trading.jpg";
import { SectionHeading } from "@/components/SectionHeading";

const cards = [
  {
    index: "01",
    kind: "Contracting",
    title: "Engineering & Contracting Services",
    desc: "Full-scope contracting across mechanical, electrical, civil and industrial engineering — from installation and commissioning to long-term maintenance contracts.",
    img: contractingImg,
    to: "/services",
    cta: "Explore Contracting",
  },
  {
    index: "02",
    kind: "Trading",
    title: "Industrial Trading & Supply",
    desc: "Sourcing and supply of industrial consumables, mechanical, electrical, instrumentation and safety products from trusted OEMs across the region.",
    img: tradingImg,
    to: "/trading",
    cta: "Explore Trading",
  },
];

export function ServicesSplit() {
  return (
    <section id="services" className="bg-surface pb-28 pt-14 md:pb-40 md:pt-20">
      <div className="container-x mx-auto max-w-[1440px]">
        <SectionHeading
          title={<>Two disciplines. <span className="text-accent">One partner.</span></>}
          intro="MJTC unites hands-on engineering delivery with disciplined industrial supply — so a single accountable partner covers the whole scope."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={c.to}
                className="group relative block h-full overflow-hidden rounded-sm bg-brand text-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-6 right-2 font-display text-[7rem] font-semibold leading-none text-white/10 md:text-[9rem]"
                  >
                    {c.index}
                  </span>
                  <div className="absolute left-5 top-5 z-10 flex items-center gap-3 rounded-full bg-accent px-5 py-3 shadow-[0_18px_40px_-16px_rgba(170,25,69,0.85)] md:left-6 md:top-6 md:gap-4 md:px-6 md:py-3.5">
                    <span className="font-display text-3xl font-semibold leading-none tracking-tight text-white md:text-4xl">
                      {c.index}
                    </span>
                    <span className="h-7 w-px bg-white/35 md:h-8" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white md:text-base">
                      {c.kind}
                    </span>
                  </div>
                </div>
                <div className="relative -mt-24 flex flex-col gap-5 p-8 md:p-10">
                  <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                    {c.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/75">
                    {c.desc}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]">
                    {c.cta}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

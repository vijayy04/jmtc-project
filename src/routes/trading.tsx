import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import tradingImg from "@/assets/trading.jpg";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CTA } from "@/components/sections/CTA";
import pageHeroVideo from "@/assets/about-hero.mp4";
import { tradingBrandPartners } from "@/data/brands";
import { tradingContent } from "@/data/site";
import { tradingServices } from "@/data/trading-services";
import type { TradingService } from "@/data/trading-services";

const highlights = [
  "Timely delivery across project schedules",
  "Competitive pricing on quality products",
  "Well-trained staff for prompt assistance",
];

export const Route = createFileRoute("/trading")({
  head: () => ({
    meta: [
      { title: "Industrial Trading & Supply — MJTC Bahrain" },
      {
        name: "description",
        content:
          "Your reliable partner for industrial trading solutions — tools, machines, construction equipment and materials across Bahrain.",
      },
      { property: "og:title", content: "Industrial Trading & Supply — MJTC" },
      {
        property: "og:description",
        content:
          "Twelve trading categories covering engineering products, electrical, mechanical, safety, tools and more.",
      },
      { property: "og:url", content: "/trading" },
    ],
    links: [{ rel: "canonical", href: "/trading" }],
  }),
  component: TradingPage,
});

function TradingServiceCard({
  service,
  index,
}: {
  service: TradingService;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-brand text-white shadow-[var(--shadow-brand)] transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[5/3]">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading={index === 0 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand via-brand/35 to-brand/10"
          aria-hidden
        />
        <div className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-sm bg-white/10 text-white backdrop-blur-sm transition-colors duration-500 group-hover:bg-accent">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </div>
        <span className="absolute right-5 top-5 font-display text-4xl font-semibold leading-none tracking-tight text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute bottom-5 left-5 right-5 rounded-sm border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/60">
            {service.badgeLabel}
          </p>
          <p className="mt-1 font-display text-sm font-semibold text-white">{service.badgeText}</p>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        <div className="grid-noise absolute inset-0 opacity-15" aria-hidden />
        <div className="relative flex flex-1 flex-col">
          <h3 className="font-display text-xl font-semibold leading-tight tracking-tight md:text-2xl">
            {service.title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">{service.desc}</p>
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 md:text-sm md:tracking-[0.2em]">
            {service.tagline}
            <ArrowUpRight className="size-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function TradingPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Industrial Trading"
        title={tradingContent.headline}
        intro={tradingContent.intro}
        video={pageHeroVideo}
      />

      <section className="relative border-b border-border bg-surface py-14 md:py-16">
        <div className="container-x mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {tradingContent.body}
            </motion.p>
            <ul className="flex flex-col gap-3 sm:min-w-[320px]">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <LogoMarquee
        eyebrow="Global Manufacturers"
        title="Brands We Work With"
        description="We source and supply products from leading international brands across electrical, mechanical, instrumentation and industrial equipment."
        items={tradingBrandPartners}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="container-x mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand md:text-4xl">
              Trading Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Twelve trading categories covering engineering products, electrical components,
              mechanical materials, safety equipment, storage solutions and more.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {tradingServices.map((service, i) => (
              <TradingServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 grid gap-8 overflow-hidden rounded-sm bg-brand text-white md:grid-cols-2"
          >
            <div className="p-10 md:p-14">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Bulk & Project Supply
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Need a full BOQ delivered on time?
              </h3>
              <p className="mt-6 max-w-md text-white/70">
                We handle multi-line project supply with dedicated commercial and logistics support —
                one point of contact, one delivery schedule.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold"
              >
                Request Quote <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="relative min-h-[280px]">
              <img
                src={tradingImg}
                alt="Industrial warehouse"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}

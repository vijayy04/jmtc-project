import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Clients } from "@/components/sections/Clients";
import pageHeroVideo from "@/assets/about-hero.mp4";
import { contractingServices } from "@/data/services";
import type { ContractingService } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Contracting Services — MJTC Bahrain" },
      {
        name: "description",
        content:
          "Civil engineering, O&M, mechanical fabrication, plant maintenance, equipment commissioning, electrical works and utility services across Bahrain.",
      },
      { property: "og:title", content: "Contracting Services — MJTC" },
      {
        property: "og:description",
        content:
          "Nine integrated contracting disciplines delivered by one accountable engineering partner.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const highlights = [
  "Certified crews across civil, mechanical and electrical",
  "Safety-first execution with audit-ready documentation",
  "End-to-end delivery from planning through commissioning",
];

function ImageServiceCard({
  service,
  index,
}: {
  service: ContractingService;
  index: number;
}) {
  const Icon = service.icon;
  const isFeatured = service.layout === "featured";

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
      {service.image && (
        <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[5/3]">
          <img
            src={service.image}
            alt={service.imageAlt ?? service.title}
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
          {service.badgeLabel && service.badgeText && (
            <div className="absolute bottom-5 left-5 right-5 rounded-sm border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/60">
                {service.badgeLabel}
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-white">{service.badgeText}</p>
            </div>
          )}
        </div>
      )}

      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        <div className="grid-noise absolute inset-0 opacity-15" aria-hidden />
        <div className="relative flex flex-1 flex-col">
          {isFeatured && (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Featured Service
            </p>
          )}
          <h3
            className={`font-display text-xl font-semibold leading-tight tracking-tight md:text-2xl ${
              isFeatured ? "mt-3" : ""
            }`}
          >
            {service.title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">{service.desc}</p>
          {service.tagline && (
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 md:text-sm md:tracking-[0.2em]">
              {service.tagline}
              <ArrowUpRight className="size-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Contracting"
        title={
          <>
            Nine disciplines.
            <br />
            One accountable partner.
          </>
        }
        intro="Integrated engineering and contracting services across civil, mechanical, electrical and industrial maintenance — delivered with precision, compliance and reliability."
        video={pageHeroVideo}
      />

      <section className="relative border-b border-border bg-surface py-14 md:py-16">
        <div className="container-x mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From foundations and fabrication to plant maintenance and utility support, MJTC
              delivers coordinated contracting scope under one roof.
            </p>
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

      <Clients />

      <section className="bg-background py-24 md:py-32">
        <div className="container-x mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {contractingServices.map((service, i) => (
              <ImageServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}

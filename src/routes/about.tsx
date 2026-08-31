import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CTA } from "@/components/sections/CTA";
import { Counter } from "@/components/Counter";
import { DualRule, Eyebrow } from "@/components/SectionHeading";
import aboutHeroVideo from "@/assets/about-hero.mp4";
import aboutOfficeImg from "@/assets/about-office.jpg";
import missionVisionImg from "@/assets/mission-vision-cutout.png";
import { aboutContent, company, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MJTC — A Bahrain engineering & contracting company" },
      {
        name: "description",
        content:
          "Mohifar Jahan Trading and Contracting is a leading trading, engineering and contracting firm in Bahrain delivering construction, maintenance and industrial supply services.",
      },
      { property: "og:title", content: "About MJTC" },
      {
        property: "og:description",
        content:
          "Empowering projects and elevating industry through engineering, contracting and industrial trading in Bahrain.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About"
        title={aboutContent.headline}
        intro="A leading trading, engineering and contracting firm in Bahrain, dedicated to excellence across construction, maintenance and industrial supply."
        video={aboutHeroVideo}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="container-x mx-auto grid max-w-[1440px] items-center gap-10 md:gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={aboutOfficeImg}
                alt="Mohifar Trading & Contracting office reception"
                width={768}
                height={1024}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-accent px-6 py-5 text-white shadow-xl md:-bottom-6 md:-right-4">
              <div className="font-display text-3xl font-semibold leading-none">
                {company.founded}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em]">
                Founded
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="flex flex-col justify-center"
          >
            <Eyebrow>About MJTC</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand md:text-5xl">
              A Bahrain company built on engineering discipline.
            </h2>
            <p className="mt-6 text-justify text-lg leading-relaxed text-muted-foreground [hyphens:auto] md:text-xl">
              {aboutContent.intro}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="container-x mx-auto mt-14 grid max-w-[1440px] grid-cols-2 gap-8 border-t border-border pt-12 sm:gap-10 md:mt-20 md:grid-cols-4 md:pt-16"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold tracking-tight text-brand md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand/70 md:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="container-x mx-auto flex max-w-[1440px] flex-col gap-12 lg:flex-row lg:items-center lg:gap-8">
          <div className="grid min-w-0 w-full flex-1 gap-16 lg:grid-cols-2">
            {[
              { label: "Our Mission", body: company.mission },
              { label: "Our Vision", body: company.vision },
            ].map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border-t border-border pt-8"
              >
                <div className="flex items-center gap-3 text-brand md:gap-4">
                  <DualRule />
                  <span className="font-display text-2xl font-semibold uppercase tracking-[0.18em] md:text-3xl lg:text-4xl">
                    {b.label}
                  </span>
                </div>
                <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight text-brand md:text-3xl">
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            src={missionVisionImg}
            alt="Mission and vision strategy illustration"
            width={597}
            height={418}
            loading="lazy"
            className="h-auto w-full max-w-lg shrink-0 object-contain object-center lg:w-[min(42%,520px)] lg:max-w-[520px]"
          />
        </div>
      </section>

      <section className="bg-brand py-24 text-white md:py-32">
        <div className="container-x mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {aboutContent.trustedTitle}
            </h2>
            <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-white/75 md:text-lg">
              {aboutContent.trustedBody}
            </p>
          </motion.div>
        </div>
      </section>

      <WhyChoose
        title="Why Choose Us"
        intro="Businesses across Bahrain choose MJTC for dependable contracting, industrial supply and the technical discipline to deliver complex projects with confidence."
      />
      <CTA />
    </Layout>
  );
}

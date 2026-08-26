import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CTA } from "@/components/sections/CTA";
import aboutHeroVideo from "@/assets/about-hero.mp4";
import { aboutContent, company } from "@/data/site";

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
        <div className="container-x mx-auto max-w-[1440px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {aboutContent.intro}
          </motion.p>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="container-x mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2">
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
              <div className="flex items-center gap-4 text-accent">
                <span className="h-px w-10 shrink-0 bg-accent md:w-14" />
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

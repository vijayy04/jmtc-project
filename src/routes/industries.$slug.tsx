import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { DualRule, Eyebrow } from "@/components/SectionHeading";
import { ServiceOfferAccordion } from "@/components/ServiceOfferAccordion";
import { getIndustryBySlug } from "@/data/site";
import type { Industry } from "@/data/site";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustryBySlug(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.industry.title ?? "Service"} — MJTC Bahrain` },
      {
        name: "description",
        content:
          loaderData?.industry.paragraphs?.[0] ??
          loaderData?.industry.body ??
          `${loaderData?.industry.title ?? "MJTC"} services in Bahrain.`,
      },
    ],
  }),
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const hasRichContent = Boolean(
    industry.heading || industry.paragraphs?.length || industry.body,
  );

  return (
    <Layout>
      <PageHeader
        eyebrow="Services"
        title={industry.heading ?? industry.title}
        intro={industry.subheading}
        image={industry.headerImage}
      />
      <section className="bg-background py-24 md:py-32">
        <div className="container-x mx-auto max-w-[1440px]">
          {industry.logo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-12 flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
            >
              <img
                src={industry.logo}
                alt={industry.logoAlt ?? industry.heading ?? industry.title}
                className="h-24 w-auto shrink-0 object-contain transition-transform duration-500 ease-out hover:scale-110 sm:h-28 md:h-32 lg:h-36"
              />
              {industry.partnerLogos && industry.partnerLogos.length > 0 && (
                <>
                  <div className="hidden h-28 w-px shrink-0 bg-border lg:block" />
                  <div className="grid flex-1 grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:grid-cols-3 xl:flex xl:flex-wrap xl:items-center xl:justify-between">
                    {industry.partnerLogos.map((brand) => (
                      <div
                        key={brand.name}
                        className="flex h-14 w-full items-center justify-center overflow-visible xl:w-auto xl:px-2"
                      >
                        <img
                          src={brand.src}
                          alt={brand.name}
                          className={`h-8 w-auto max-w-full object-contain transition-transform duration-500 ease-out hover:scale-110 ${
                            brand.name === "JBL" ? "" : "brightness-0"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}

          {industry.galleryImages && industry.galleryImages.length > 0 ? (
            <>
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-12">
              <div className="grid grid-cols-2 gap-5">
                {industry.galleryImages.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="overflow-hidden rounded-sm"
                  >
                    <img
                      src={src}
                      alt={`${industry.title} ${i + 1}`}
                      loading="lazy"
                      className="aspect-[5/4] h-full min-h-[14rem] w-full object-cover transition-transform duration-700 ease-out hover:scale-105 md:min-h-[18rem] lg:min-h-[20rem]"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
              >
                {industry.contentHeading && (
                  <>
                    <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-brand md:text-3xl">
                      {industry.contentHeading}
                    </h2>
                    <DualRule size="lg" className="mt-4 mb-6" />
                  </>
                )}
                {industry.paragraphs?.map((p, i) => (
                  <p
                    key={p.slice(0, 48)}
                    className={`text-justify text-lg leading-relaxed text-muted-foreground [hyphens:auto] md:text-xl ${
                      i > 0 ? "mt-6" : ""
                    }`}
                  >
                    {p}
                  </p>
                ))}
                {industry.body && !industry.paragraphs?.length && (
                  <p className="text-justify text-lg leading-relaxed text-muted-foreground [hyphens:auto] md:text-xl">
                    {industry.body}
                  </p>
                )}
                {industry.closing && (
                  <p className="mt-8 text-justify font-display text-xl font-semibold leading-snug text-brand [hyphens:auto] md:text-2xl">
                    {industry.closing}
                  </p>
                )}
              </motion.div>
            </div>
            </>
          ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-none"
          >
            {industry.contentHeading && (
              <>
                <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-brand md:text-3xl">
                  {industry.contentHeading}
                </h2>
                <DualRule size="lg" className="mt-4 mb-6" />
              </>
            )}

            {industry.paragraphs?.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mt-6 text-justify text-lg leading-relaxed text-muted-foreground [hyphens:auto] md:text-xl"
              >
                {p}
              </p>
            ))}

            {industry.body && !industry.paragraphs?.length && (
              <p className="text-justify text-lg leading-relaxed text-muted-foreground [hyphens:auto] md:text-xl">
                {industry.body}
              </p>
            )}

            {industry.closing && (
              <p className="mt-8 text-justify font-display text-xl font-semibold leading-snug text-brand [hyphens:auto] md:text-2xl">
                {industry.closing}
              </p>
            )}

            {!hasRichContent && (
              <p className="text-justify text-lg leading-relaxed text-muted-foreground [hyphens:auto] md:text-xl">
                Detailed content for this service will be added shortly. Contact
                MJTC for scope, capability and a tailored proposal.
              </p>
            )}
          </motion.div>
          )}
          {industry.serviceItems && industry.serviceItems.length > 0 && (
            <ServiceOfferAccordion items={industry.serviceItems} />
          )}
        </div>
      </section>

      {industry.cinemaExpansion && (
        <CinemaExpansionSection cinema={industry.cinemaExpansion} />
      )}

      <CTA />
    </Layout>
  );
}

function CinemaExpansionSection({
  cinema,
}: {
  cinema: NonNullable<Industry["cinemaExpansion"]>;
}) {
  const products = cinema.products ?? [];
  if (products.length === 0) return null;

  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <div className="container-x mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <Eyebrow>Our Products</Eyebrow>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.model}
              className="group overflow-hidden rounded-sm border border-border bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <div className="flex aspect-square items-center justify-center overflow-hidden bg-muted p-6">
                <img
                  src={product.image}
                  alt={`${product.model} ${product.name}`}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="font-display text-2xl font-semibold tracking-tight text-brand">
                  {product.model}
                </div>
                {product.name.toLowerCase() !== product.model.toLowerCase() && (
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {product.name}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

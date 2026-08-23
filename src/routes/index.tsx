import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesSplit } from "@/components/sections/ServicesSplit";
import { TradingProductsPreview } from "@/components/sections/TradingProductsPreview";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Brands } from "@/components/sections/Brands";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MJTC — Engineering, Contracting & Industrial Trading in Bahrain" },
      {
        name: "description",
        content:
          "Delivering reliable engineering, contracting and industrial trading solutions across Bahrain. Founded 2025.",
      },
      { property: "og:title", content: "MJTC — Engineering, Contracting & Industrial Trading" },
      {
        property: "og:description",
        content:
          "A Bahrain company built on engineering discipline — integrated contracting, maintenance and industrial supply.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <ServicesSplit />
      <TradingProductsPreview />
      <Brands />
      <WhyChoose />
      <Process />
      <Industries />
      <Testimonials />
      <AboutPreview />
      <CTA />
    </Layout>
  );
}

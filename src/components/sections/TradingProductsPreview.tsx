import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export function TradingProductsPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-brand/5 blur-3xl"
      />

      <div className="container-x relative mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title={
              <>
                Our Trading <span className="text-accent">Products</span>
              </>
            }
            intro="A curated selection of industrial products, equipment and trusted brand partnerships — sourced and supplied across Bahrain."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="shrink-0"
          >
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 rounded-full border border-brand bg-brand px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-accent active:scale-[0.98]"
            >
              View Gallery
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

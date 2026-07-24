import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryImages } from "@/data/gallery";

const previewImages = galleryImages.slice(0, 4);

const layoutClasses = [
  "md:col-span-12 md:row-span-2",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-12",
];

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

        <div className="mt-16 grid auto-rows-[280px] gap-4 md:grid-cols-12 md:auto-rows-[220px] md:gap-5">
          {previewImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-sm ${layoutClasses[i] ?? ""}`}
            >
              <Link to="/gallery" className="block h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                    {image.category}
                  </div>
                  <div className="mt-2 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {image.title}
                  </div>
                </div>
                <div className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

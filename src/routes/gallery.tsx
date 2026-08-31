import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { galleryImages } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Product Gallery — MJTC Bahrain" },
      {
        name: "description",
        content:
          "Browse MJTC's industrial trading products, equipment, brand partnerships and project deliveries across Bahrain.",
      },
      { property: "og:title", content: "Product Gallery — MJTC" },
      {
        property: "og:description",
        content: "Industrial products, equipment and trusted brands supplied across Bahrain.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const gridSpans = [
  "md:col-span-12 md:row-span-3",
  "md:col-span-6 md:row-span-2",
  "md:col-span-6 md:row-span-2",
  "md:col-span-4 md:row-span-2",
  "md:col-span-4 md:row-span-2",
  "md:col-span-4 md:row-span-2",
  "md:col-span-6",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
];

function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrev]);

  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <Layout>
      <PageHeader
        eyebrow="Gallery"
        title={<>Our trading products &amp; partnerships.</>}
        intro="Explore industrial equipment, project deliveries and the trusted brands we represent — curated from our trading portfolio across Bahrain."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-x mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Portfolio
              </div>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Click any image to view it in full detail. Use arrow keys to navigate
                between products.
              </p>
            </div>
            <div className="font-display text-5xl font-semibold tracking-tight text-brand">
              {String(galleryImages.length).padStart(2, "0")}
              <span className="ml-2 text-lg font-medium text-muted-foreground">
                items
              </span>
            </div>
          </motion.div>

          <div className="grid auto-rows-[260px] gap-4 md:grid-cols-12 md:auto-rows-[200px] md:gap-5">
            {galleryImages.map((image, i) => (
              <motion.button
                key={image.id}
                type="button"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 6) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveIndex(i)}
                className={`group relative overflow-hidden rounded-sm text-left ${gridSpans[i] ?? ""}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="grid size-14 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md">
                    <ZoomIn className="size-6" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                    {image.category}
                  </div>
                  <div className="mt-2 font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                    {image.title}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeImage && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand/95 p-4 backdrop-blur-sm md:p-8"
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={closeLightbox}
              className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
            >
              <X className="size-5" />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:grid"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-4 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:grid"
            >
              <ChevronRight className="size-5" />
            </button>

            <motion.div
              key={activeImage.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[82vh] w-full max-w-6xl overflow-hidden rounded-sm bg-black/20 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[72vh] w-full object-contain"
              />
              <div className="border-t border-white/10 bg-brand px-6 py-5 text-white md:px-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                      {activeImage.category}
                    </div>
                    <div className="mt-2 font-display text-2xl font-semibold tracking-tight">
                      {activeImage.title}
                    </div>
                  </div>
                  <div className="text-sm text-white/60">
                    {activeIndex + 1} / {galleryImages.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </Layout>
  );
}

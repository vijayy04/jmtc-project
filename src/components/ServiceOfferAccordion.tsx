import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { DualRule } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export type ServiceOfferItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export function ServiceOfferAccordion({
  heading = "What We Offer",
  items,
  defaultOpenId,
  className,
}: {
  heading?: string;
  items: ServiceOfferItem[];
  defaultOpenId?: string;
  className?: string;
}) {
  const headingId = useId();
  const initial = defaultOpenId ?? items[0]?.id ?? "";
  const [openId, setOpenId] = useState(initial);
  const [loadedIds, setLoadedIds] = useState<Set<string>>(
    () => new Set(initial ? [initial] : []),
  );

  if (items.length === 0) return null;

  return (
    <section className={cn("mt-20 md:mt-24", className)} aria-labelledby={headingId}>
      <h2
        id={headingId}
        className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-brand md:text-3xl"
      >
        {heading}
      </h2>
      <DualRule size="lg" className="mt-4" />

      <AccordionPrimitive.Root
        type="single"
        collapsible
        value={openId}
        onValueChange={(value) => {
          setOpenId(value);
          if (value) {
            setLoadedIds((prev) => {
              if (prev.has(value)) return prev;
              const next = new Set(prev);
              next.add(value);
              return next;
            });
          }
        }}
        className="mt-10 border-t border-border"
      >
        {items.map((item, index) => {
          const isOpen = openId === item.id;
          const showImage = loadedIds.has(item.id);

          return (
            <AccordionPrimitive.Item
              key={item.id}
              value={item.id}
              className="border-b border-border data-[state=open]:border-white/20"
            >
              <AccordionPrimitive.Header asChild>
                <h3 className="m-0">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "group flex w-full min-h-14 cursor-pointer items-center justify-between gap-4 px-4 py-5 text-left transition-colors duration-300 md:min-h-16 md:px-6 md:py-6",
                      "font-display text-xl font-semibold tracking-tight text-brand md:text-2xl lg:text-3xl",
                      "[@media(hover:hover)]:hover:bg-muted",
                      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
                      "data-[state=open]:[@media(hover:hover)]:hover:bg-accent",
                    )}
                  >
                    <span>{item.title}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center border border-current/25"
                      aria-hidden
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={1.75} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={1.75} />
                      )}
                    </span>
                  </AccordionPrimitive.Trigger>
                </h3>
              </AccordionPrimitive.Header>

              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
                <div className="bg-accent px-4 pb-8 pt-1 text-accent-foreground md:px-6 md:pb-10">
                  <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
                    <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                      {item.description}
                    </p>
                    <div className="aspect-[5/4] w-full overflow-hidden bg-brand/25">
                      {showImage && (
                        <img
                          src={item.image}
                          alt={item.imageAlt ?? item.title}
                          width={1200}
                          height={960}
                          loading={index === 0 && initial === item.id ? "eager" : "lazy"}
                          decoding="async"
                          className="h-full w-full object-cover offer-image-in motion-reduce:animate-none"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          );
        })}
      </AccordionPrimitive.Root>
    </section>
  );
}

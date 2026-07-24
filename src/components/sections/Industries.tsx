import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Fuel,
  HardHat,
  Home,
  Landmark,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { industries } from "@/data/site";

const icons = [Fuel, Factory, HardHat, ShoppingBag, Zap, Building2, Landmark, Home];

export function Industries() {
  return (
    <section className="bg-surface py-28 md:py-40">
      <div className="container-x mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Industries"
          title={<>Working across the sectors that build Bahrain.</>}
          intro="From oil & gas to government, our teams operate in the environments that demand the highest standards of safety and reliability."
        />
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((i, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-sm border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
              >
                <Icon className="size-8 text-brand transition-transform duration-500 group-hover:scale-110 group-hover:text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Sector
                  </div>
                  <div className="mt-2 font-display text-lg font-semibold leading-tight tracking-tight text-brand md:text-xl">
                    {i}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

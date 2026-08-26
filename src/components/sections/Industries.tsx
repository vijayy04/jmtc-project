import { motion } from "framer-motion";
import {
  Droplets,
  Factory,
  Fuel,
  Zap,
} from "lucide-react";
import oilGasImg from "@/assets/industries/oil-gas.jpg";
import industrialPlantsImg from "@/assets/industries/industrial-plants.jpg";
import utilitiesImg from "@/assets/industries/utilities.jpg";
import dewateringPumpsImg from "@/assets/industries/dewatering-pumps.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { industries } from "@/data/site";

const icons = [Fuel, Factory, Zap, Droplets];

const industryBackgrounds: Record<string, string> = {
  "Oil & Gas": oilGasImg,
  "Industrial Plants": industrialPlantsImg,
  Utilities: utilitiesImg,
  "Dewatering Pumps": dewateringPumpsImg,
};

export function Industries() {
  return (
    <section className="bg-surface py-28 md:py-40">
      <div className="container-x mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Industries"
          title={<>Working across the sectors that build Bahrain.</>}
          intro="From oil & gas to utilities and dewatering, our teams operate in the environments that demand the highest standards of safety and reliability."
        />
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((i, idx) => {
            const Icon = icons[idx % icons.length];
            const bg = industryBackgrounds[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className={`group relative flex aspect-square flex-col justify-between overflow-hidden rounded-sm border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  bg
                    ? "border-transparent text-white hover:border-accent"
                    : "border-border bg-background hover:border-brand"
                }`}
              >
                {bg && (
                  <>
                    <img
                      src={bg}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/45 to-brand/20" />
                  </>
                )}
                <Icon
                  className={`relative z-10 size-8 transition-transform duration-500 group-hover:scale-110 ${
                    bg ? "text-white group-hover:text-accent" : "text-brand group-hover:text-accent"
                  }`}
                />
                <div className="relative z-10">
                  <div
                    className={`text-xs uppercase tracking-[0.22em] ${
                      bg ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    Sector
                  </div>
                  <div
                    className={`mt-2 font-display text-lg font-semibold leading-tight tracking-tight md:text-xl ${
                      bg ? "text-white" : "text-brand"
                    }`}
                  >
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

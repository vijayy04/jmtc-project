import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Forklift,
  HardHat,
  Package,
  Settings,
  Speaker,
  Wrench,
} from "lucide-react";
import mepEngineeringImg from "@/assets/industries/mep-engineering.jpg";
import industrialPlantsImg from "@/assets/industries/industrial-plants.jpg";
import utilitiesImg from "@/assets/industries/utilities.jpg";
import dewateringPumpsImg from "@/assets/industries/dewatering-pumps.jpg";
import heroIndustrialImg from "@/assets/hero-industrial.jpg";
import contractingImg from "@/assets/contracting.jpg";
import tradingImg from "@/assets/trading.jpg";
import audioVisualImg from "@/assets/trading/audio-visual.png";
import { SectionHeading } from "@/components/SectionHeading";
import { industries } from "@/data/site";

const icons = [Wrench, Factory, Building2, HardHat, Settings, Forklift, Package, Speaker];

const industryBackgrounds: Record<string, string> = {
  "MEP Engineering Services": mepEngineeringImg,
  Infrastructure: industrialPlantsImg,
  "Structural Engineering Services": utilitiesImg,
  "Civil Engineering Services": dewateringPumpsImg,
  "Industrial Engineering & Maintenance Services": heroIndustrialImg,
  "Equipment Renting Service": contractingImg,
  "Material Supply": tradingImg,
  "Professional Sound and Engineering": audioVisualImg,
};

export function Industries() {
  return (
    <section className="bg-surface py-28 md:py-40">
      <div className="container-x mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Industries"
          title={<>Working across the sectors that build Bahrain.</>}
          intro="From MEP, structural, civil and industrial engineering to infrastructure, equipment rental and material supply, our teams operate in the environments that demand the highest standards of safety and reliability."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, idx) => {
            const Icon = icons[idx % icons.length];
            const bg = industryBackgrounds[industry.title];
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="h-full"
              >
                <Link
                  to="/industries/$slug"
                  params={{ slug: industry.slug }}
                  className="group flex h-full flex-col rounded-sm border border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden rounded-t-sm">
                    {bg && (
                      <img
                        src={bg}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/55 via-brand/20 to-transparent" />
                    <Icon className="relative z-10 m-6 size-8 text-white transition-transform duration-500 group-hover:scale-110 group-hover:text-accent" />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-4">
                    <div className="font-display text-xl font-semibold leading-snug tracking-tight text-brand">
                      {industry.title}
                    </div>
                    {industry.summary && (
                      <p className="mt-2 text-base leading-relaxed text-foreground/80">
                        {industry.summary}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

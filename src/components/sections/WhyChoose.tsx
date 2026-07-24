import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CircleCheck,
  Gauge,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUs } from "@/data/site";

const icons = [BriefcaseBusiness, BadgeCheck, CircleCheck, ShieldCheck, Scale, Gauge];

export function WhyChoose({
  title = "Precision, delivery and the discipline behind them.",
  intro = "Clients choose MJTC for the combination of engineering depth, supply reliability, and the responsiveness of an owner-led team.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="container-x mx-auto max-w-[1440px]">
        <SectionHeading title={title} intro={intro} />
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="group relative flex flex-col gap-4 bg-background p-8 transition-colors duration-300 hover:bg-brand hover:text-white"
              >
                <Icon className="size-7 text-accent transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="font-display text-xl font-semibold leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

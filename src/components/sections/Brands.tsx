import { brandPartners } from "@/data/brands";
import { LogoMarquee } from "@/components/sections/LogoMarquee";

export function Brands() {
  return (
    <LogoMarquee
      eyebrow="Manufacturer Partners"
      title="Our Brands"
      description="We represent and supply equipment from leading manufacturers across electrical, mechanical, instrumentation, audio and water technology."
      items={brandPartners}
      loop={false}
    />
  );
}

import { clients } from "@/data/clients";
import { LogoMarquee } from "@/components/sections/LogoMarquee";

export function Clients() {
  return (
    <LogoMarquee
      eyebrow="Trusted Partnerships"
      title="Our Clients"
      description="Leading organisations across Bahrain trust MJTC for dependable contracting, engineering delivery and long-term project support."
      items={clients}
    />
  );
}

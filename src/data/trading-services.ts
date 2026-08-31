import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Cog,
  Gauge,
  Globe2,
  Hammer,
  Layers,
  PanelTop,
  ShieldCheck,
  Speaker,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";
import engineeringProductsImg from "@/assets/trading/engineering-products.png";
import electricalProductsImg from "@/assets/trading/electrical-products.png";
import mechanicalMaterialImg from "@/assets/trading/mechanical-material.png";
import machineryAccessoriesImg from "@/assets/trading/machinery-accessories.png";
import industrialConsumablesImg from "@/assets/trading/industrial-consumables.png";
import safetyPpeImg from "@/assets/trading/safety-ppe.png";
import toolsImg from "@/assets/trading/tools.png";
import instrumentationImg from "@/assets/trading/instrumentation.png";
import rollingShutterImg from "@/assets/trading/rolling-shutter.png";
import rackingStorageImg from "@/assets/trading/racking-storage.png";
import frpCoversImg from "@/assets/trading/frp-covers.png";
import audioVisualImg from "@/assets/trading/audio-visual.png";

export type TradingService = {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  badgeLabel: string;
  badgeText: string;
  tagline: string;
};

export const tradingServices: TradingService[] = [
  {
    title: "Trading of All Engineering Products",
    desc: "We supply a broad range of engineering products tailored to meet industrial and commercial demands. Our inventory supports every phase of construction, maintenance, and operations.",
    icon: Globe2,
    image: engineeringProductsImg,
    imageAlt: "Global logistics and engineering product supply network",
    badgeLabel: "Engineering Supply",
    badgeText: "Construction · Maintenance · Operations",
    tagline: "End-to-end product sourcing",
  },
  {
    title: "Electrical Products and Components",
    desc: "From cables and panels to lighting and circuit breakers, we deliver quality electrical solutions. Sourced from trusted brands, our products ensure performance and safety.",
    icon: Zap,
    image: electricalProductsImg,
    imageAlt: "Electrical panels, wiring and industrial electrical components",
    badgeLabel: "Electrical",
    badgeText: "Cables · Panels · Lighting",
    tagline: "Trusted brands, safe performance",
  },
  {
    title: "Mechanical Industrial Material",
    desc: "We stock and supply premium-grade mechanical components and replacement parts. Ideal for repair, upgrades, and seamless plant operations.",
    icon: Cog,
    image: mechanicalMaterialImg,
    imageAlt: "Industrial valves and mechanical components",
    badgeLabel: "Mechanical",
    badgeText: "Components · Parts · Upgrades",
    tagline: "Premium-grade mechanical supply",
  },
  {
    title: "Equipment and Machinery Accessories",
    desc: "We offer accessories and add-ons for a wide range of industrial machinery and tools. Our products enhance efficiency, compatibility, and operational uptime.",
    icon: Wrench,
    image: machineryAccessoriesImg,
    imageAlt: "Excavator attachments and machinery accessories",
    badgeLabel: "Machinery",
    badgeText: "Attachments · Add-ons · Tools",
    tagline: "Boost efficiency and uptime",
  },
  {
    title: "Industrial Consumables",
    desc: "From lubricants to welding rods and sealants, we provide essential consumables for daily operations. Our reliable supply chain ensures consistent availability.",
    icon: Boxes,
    image: industrialConsumablesImg,
    imageAlt: "Industrial consumables, fasteners and workshop supplies",
    badgeLabel: "Consumables",
    badgeText: "Lubricants · Welding · Sealants",
    tagline: "Always available, always reliable",
  },
  {
    title: "Safety and PPE Products",
    desc: "We deliver certified safety gear including helmets, gloves, masks, and harnesses. Protect your workforce with our trusted personal protective equipment range.",
    icon: ShieldCheck,
    image: safetyPpeImg,
    imageAlt: "Safety helmets, PPE and industrial monitoring equipment",
    badgeLabel: "Safety & PPE",
    badgeText: "Helmets · Gloves · Harnesses",
    tagline: "Certified workforce protection",
  },
  {
    title: "Tools",
    desc: "Discover a complete line of tools, meters, and testing instruments for industrial use. We offer both precision and durability for workshop and site applications.",
    icon: Hammer,
    image: toolsImg,
    imageAlt: "Industrial power tools and hand tools on workbench",
    badgeLabel: "Tools",
    badgeText: "Power · Hand · Testing",
    tagline: "Precision for every application",
  },
  {
    title: "Instrumentation",
    desc: "Precision instruments, sensors and control devices for industrial measurement and automation. We offer accuracy and reliability for plant and process applications.",
    icon: Gauge,
    image: instrumentationImg,
    imageAlt: "Industrial instrumentation, PLCs and control systems",
    badgeLabel: "Instrumentation",
    badgeText: "Sensors · Meters · Controls",
    tagline: "Measure, monitor, control",
  },
  {
    title: "Rolling Shutter",
    desc: "Supply and installation of high-quality rolling shutters for commercial and industrial use. Motors, accessories, PVC strips, end caps, sensors and more — we ensure secure access, smooth operation, and long-lasting performance.",
    icon: PanelTop,
    image: rollingShutterImg,
    imageAlt: "Industrial rolling shutter door with PVC strip curtains",
    badgeLabel: "Rolling Shutter",
    badgeText: "Motors · Sensors · PVC Strips",
    tagline: "Secure access, smooth operation",
  },
  {
    title: "Racking Storage Solutions",
    desc: "Selective racking, bolt-free shelving, mobile shelving, automated storage and retrieval, pallet flow, and drive-in/drive-through racking systems for efficient warehouse storage.",
    icon: Warehouse,
    image: rackingStorageImg,
    imageAlt: "Warehouse racking and automated storage systems",
    badgeLabel: "Storage Systems",
    badgeText: "Racking · Shelving · AS/RS",
    tagline: "Maximise warehouse efficiency",
  },
  {
    title: "FRP Covers",
    desc: "Supply of Fiber Reinforced Polymers to EN 134 standard for long-lasting performance and durability. Manhole covers, light and heavy duty covers, trench covers and more.",
    icon: Layers,
    image: frpCoversImg,
    imageAlt: "FRP manhole and trench covers in multiple colours",
    badgeLabel: "FRP Covers",
    badgeText: "Manhole · Trench · Heavy Duty",
    tagline: "EN 134 standard durability",
  },
  {
    title: "Audio Visual Equipments",
    desc: "Professional audio systems, speakers, soundbars, and luxury audio devices for your events, home, conference hall and more.",
    icon: Speaker,
    image: audioVisualImg,
    imageAlt: "Professional JBL audio and visual equipment",
    badgeLabel: "Audio Visual",
    badgeText: "Speakers · Soundbars · Systems",
    tagline: "Professional sound, every venue",
  },
];

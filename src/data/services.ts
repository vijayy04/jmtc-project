import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Compass,
  Factory,
  HardHat,
  PackageCheck,
  Settings2,
  Wrench,
  Zap,
  Droplets,
} from "lucide-react";
import civilEngineeringImg from "@/assets/services/civil-engineering.png";
import operationMaintenanceImg from "@/assets/services/operation-maintenance.png";
import mechanicalFabricationImg from "@/assets/services/mechanical-fabrication.png";
import industrialPlantMaintenanceImg from "@/assets/services/industrial-plant-maintenance.png";
import equipmentInstallationImg from "@/assets/services/equipment-installation.png";
import industrialEngineeringImg from "@/assets/services/industrial-engineering.png";
import buildingMaintenanceImg from "@/assets/services/building-maintenance.png";
import generalElectricalImg from "@/assets/services/general-electrical.png";
import utilityServicesImg from "@/assets/services/utility-services.png";

export type ContractingService = {
  title: string;
  desc: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
  layout?: "featured" | "wide";
  imageSide?: "left" | "right";
  tagline?: string;
  badgeLabel?: string;
  badgeText?: string;
};

export const contractingServices: ContractingService[] = [
  {
    title: "Civil Engineering Contracting Works",
    desc: "We execute all types of civil works including foundations, structures, and infrastructure projects. Our team ensures quality, safety, and adherence to industry standards at every stage.",
    icon: HardHat,
    image: civilEngineeringImg,
    imageAlt: "Construction engineers reviewing a civil engineering site at sunrise",
    layout: "featured",
    imageSide: "right",
    tagline: "Foundations to infrastructure",
    badgeLabel: "Civil Works",
    badgeText: "Structures · Foundations · Infrastructure",
  },
  {
    title: "Operation and Maintenance Works",
    desc: "Comprehensive O&M solutions to keep your industrial facilities running smoothly. We ensure minimal downtime with proactive maintenance and skilled technicians.",
    icon: Settings2,
    image: operationMaintenanceImg,
    imageAlt: "Technician performing operation and maintenance on industrial control panels",
    layout: "wide",
    imageSide: "left",
    tagline: "Proactive care, minimal downtime",
    badgeLabel: "O&M Services",
    badgeText: "Preventive · Corrective · Support",
  },
  {
    title: "Mechanical Works and Fabrication",
    desc: "From structural steel to custom fabrication, we deliver precision-engineered mechanical solutions. We specialize in welding, assembly, and installation for various industrial applications.",
    icon: Wrench,
    image: mechanicalFabricationImg,
    imageAlt: "Engineers supervising welding and mechanical fabrication inside an industrial workshop",
    layout: "wide",
    imageSide: "right",
    tagline: "Precision steel to finished assembly",
    badgeLabel: "Fabrication",
    badgeText: "Welding · Assembly · Installation",
  },
  {
    title: "Industrial Projects and Plant Maintenance",
    desc: "We handle full-scale industrial projects and ongoing plant maintenance with expertise. Our solutions are designed to boost operational efficiency and reduce breakdowns.",
    icon: Factory,
    image: industrialPlantMaintenanceImg,
    imageAlt: "Industrial maintenance team servicing heavy plant equipment on site",
    layout: "wide",
    imageSide: "left",
    tagline: "Efficiency built into every shutdown",
    badgeLabel: "Plant Maintenance",
    badgeText: "Projects · Turnarounds · Uptime",
  },
  {
    title: "Equipment Installation and Commissioning",
    desc: "Professional installation and commissioning of heavy machinery and systems. We follow detailed protocols to ensure safe, accurate, and timely deployment.",
    icon: PackageCheck,
    image: equipmentInstallationImg,
    imageAlt: "Technician commissioning industrial equipment with digital checklist on site",
    layout: "wide",
    imageSide: "right",
    tagline: "Safe deployment, verified handover",
    badgeLabel: "Commissioning",
    badgeText: "Install · Test · Handover",
  },
  {
    title: "General Industrial Engineering Works",
    desc: "We provide flexible engineering services tailored to your project's technical needs. From layouts to execution, we align with your project goals and compliance standards.",
    icon: Compass,
    image: industrialEngineeringImg,
    imageAlt: "Engineer inspecting and adjusting industrial machinery controls on site",
    layout: "wide",
    imageSide: "left",
    tagline: "Engineering aligned to your scope",
    badgeLabel: "Industrial Engineering",
    badgeText: "Layout · Execution · Compliance",
  },
  {
    title: "Building Maintenance Services",
    desc: "We offer comprehensive building maintenance services to ensure your property remains safe, functional, and visually appealing. Our team handles all aspects of maintenance with reliability and efficiency.",
    icon: Building2,
    image: buildingMaintenanceImg,
    imageAlt: "Construction worker performing building roof maintenance on site",
    layout: "wide",
    imageSide: "right",
    tagline: "Safe, functional, well-maintained properties",
    badgeLabel: "Building Care",
    badgeText: "Repair · Upkeep · Restoration",
  },
  {
    title: "General Electrical Works",
    desc: "We handle end-to-end electrical works including wiring, panel installation, and system upgrades. Our experienced technicians ensure safe and compliant execution.",
    icon: Zap,
    image: generalElectricalImg,
    imageAlt: "Electrician wiring and assembling components inside an electrical control panel",
    layout: "wide",
    imageSide: "left",
    tagline: "Safe wiring, compliant execution",
    badgeLabel: "Electrical Works",
    badgeText: "Wiring · Panels · Upgrades",
  },
  {
    title: "Utility Services",
    desc: "We provide essential utility solutions including electrical, water, and equipment support. Designed to maintain uninterrupted facility operations with efficiency.",
    icon: Droplets,
    image: utilityServicesImg,
    imageAlt: "Industrial utility room with pumps, valves and insulated pipe systems",
    layout: "wide",
    imageSide: "right",
    tagline: "Uninterrupted facility operations",
    badgeLabel: "Utility Support",
    badgeText: "Electrical · Water · Equipment",
  },
];

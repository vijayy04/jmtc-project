import rackingStorageSolutions from "@/assets/gallery/racking-storage-solutions.png";
import operationsAndMaintenanceWorks from "@/assets/gallery/operations-and-maintenance-works.jpg";
import couplings from "@/assets/gallery/couplings.jpg";
import maintenanceWorks from "@/assets/gallery/maintenance-works.png";
import highVoltageCablePullingAccessories from "@/assets/gallery/high-voltage-cable-pulling-accessories.png";
import floatSwitches from "@/assets/gallery/float-switches.jpg";
import civilConsumables from "@/assets/gallery/civil-consumables.png";
import industrialFieldInstruments from "@/assets/gallery/industrial-field-instruments.png";
import inflatedPipeBalloons from "@/assets/gallery/inflated-pipe-balloons.png";
import tools from "@/assets/gallery/tools.png";
import dewateringPumps from "@/assets/gallery/dewatering-pumps.png";
import rollingShutter from "@/assets/gallery/rolling-shutter.jpg";
import industrialConsumables from "@/assets/gallery/industrial-consumables.png";
import electricalProducts from "@/assets/gallery/electrical-products.png";
import excavatorMachineAttachments from "@/assets/gallery/excavator-machine-attachments.png";
import valvesAndCouplings from "@/assets/gallery/valves-and-couplings.png";
import electricalComponents from "@/assets/gallery/electrical-components.png";
import instrumentation from "@/assets/gallery/instrumentation.png";
import equipmentAndMachinery from "@/assets/gallery/equipment-and-machinery.png";
import mechanicalIndustrialMaterial from "@/assets/gallery/mechanical-industrial-material.png";
import safetyAndPpe from "@/assets/gallery/safety-and-ppe.png";

export type GalleryImage = {
  id: number;
  src: string;
  title: string;
  category: string;
  featured?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: rackingStorageSolutions,
    title: "Racking Storage Solutions",
    category: "Storage",
    featured: true,
  },
  {
    id: 2,
    src: operationsAndMaintenanceWorks,
    title: "Operations and maintenance works",
    category: "Operations",
    featured: true,
  },
  {
    id: 3,
    src: couplings,
    title: "Couplings",
    category: "Mechanical",
    featured: true,
  },
  {
    id: 4,
    src: maintenanceWorks,
    title: "Maintenance works",
    category: "Maintenance",
    featured: true,
  },
  {
    id: 5,
    src: highVoltageCablePullingAccessories,
    title: "High voltage cable Pulling accessories",
    category: "Electrical",
    featured: true,
  },
  {
    id: 6,
    src: floatSwitches,
    title: "Float switches",
    category: "Instrumentation",
    featured: true,
  },
  {
    id: 7,
    src: civilConsumables,
    title: "Civil consumables",
    category: "Civil",
    featured: true,
  },
  {
    id: 8,
    src: industrialFieldInstruments,
    title: "Industrial Field Instruments",
    category: "Instrumentation",
    featured: true,
  },
  {
    id: 9,
    src: inflatedPipeBalloons,
    title: "Inflated pipe balloons",
    category: "Mechanical",
    featured: true,
  },
  {
    id: 10,
    src: tools,
    title: "Tools",
    category: "Equipment",
    featured: true,
  },
  {
    id: 11,
    src: dewateringPumps,
    title: "Dewatering pumps",
    category: "Equipment",
    featured: true,
  },
  {
    id: 12,
    src: rollingShutter,
    title: "Rolling shutter",
    category: "Contracting",
    featured: true,
  },
  {
    id: 13,
    src: industrialConsumables,
    title: "Industrial Consumables",
    category: "Trading",
    featured: true,
  },
  {
    id: 14,
    src: electricalProducts,
    title: "Electrical products",
    category: "Electrical",
    featured: true,
  },
  {
    id: 15,
    src: excavatorMachineAttachments,
    title: "Excavator machine attachments",
    category: "Equipment",
    featured: true,
  },
  {
    id: 16,
    src: valvesAndCouplings,
    title: "Valves and couplings",
    category: "Mechanical",
    featured: true,
  },
  {
    id: 17,
    src: electricalComponents,
    title: "Electrical components",
    category: "Electrical",
    featured: true,
  },
  {
    id: 18,
    src: instrumentation,
    title: "Instrumentation",
    category: "Instrumentation",
    featured: true,
  },
  {
    id: 19,
    src: equipmentAndMachinery,
    title: "Equipment and Machinery",
    category: "Equipment",
    featured: true,
  },
  {
    id: 20,
    src: mechanicalIndustrialMaterial,
    title: "Mechanical Industrial Material",
    category: "Mechanical",
    featured: true,
  },
  {
    id: 21,
    src: safetyAndPpe,
    title: "Safety and PPE",
    category: "Safety",
    featured: true,
  },
];

export const featuredGalleryImages = galleryImages.filter((img) => img.featured);

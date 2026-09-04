export const company = {
  name: "Mohifar Jahan Trading & Contracting",
  short: "MJTC",
  founded: "2025",
  country: "Kingdom of Bahrain",
  tagline: "Engineering. Contracting. Industrial Trading.",
  subtitle:
    "Delivering reliable engineering, contracting and industrial trading solutions across Bahrain.",
  mission:
    "To be the most trusted engineering and supply partner across the GLOBE and beyond by consistently exceeding client expectations.",
  vision:
    "To be the most trusted engineering and supply partner across the GCC and beyond by consistently exceeding client expectations.",
  phone: "+973 77094567",
  phoneAlt: "+973 33544567",
  whatsapp: "+973 33544567",
  email: "enquiries@mohifar.com",
  emailEnquiries: "enquiries@mohifar.com",
  emailSales: "sales@mohifar.com",
  address:
    "Shop 0, Building 305, Road 52, Block 214, Muharraq, Muharraq Al Muharraq 0214, Bahrain",
  addressLines: [
    "Shop 0, Building 305, Road 52, Block 214, Muharraq",
    "Muharraq Al Muharraq 0214",
    "Bahrain",
  ],
  vatNo: "220025816800002",
  hours: "Sunday – Thursday · 08:00 – 17:00",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contracting", to: "/services" },
  { label: "Trading", to: "/trading" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Industrial Clients" },
  { value: 9, suffix: "", label: "Service Disciplines" },
  { value: 1200, suffix: "+", label: "Products Supplied" },
];

export const tradingCategories = [
  "Trading of All Engineering Products",
  "Electrical Products and Components",
  "Mechanical Industrial Material",
  "Equipment and Machinery Accessories",
  "Industrial Consumables",
  "Safety and PPE Products",
  "Tools",
  "Instrumentation",
  "Rolling Shutter",
  "Racking Storage Solutions",
  "FRP Covers",
  "Audio Visual Equipments",
];

export const brands = [
  "Genesis",
  "Ashok Leyland",
  "Multispan",
  "Andeli",
  "JBL Professional",
  "PAGELE",
  "NexGen",
  "ZHENGHAO",
  "Racors",
  "Vairitas",
  "APG",
  "Wassertek",
];

export const tradingContent = {
  headline: "Your Reliable Partner for Industrial Trading Solutions",
  intro:
    "Mohifar Jahan Trading and Contracting is your dependable partner for innovative, efficient, and high-quality tools, machines, and construction equipment and materials. We provide reliable trading services, sourcing and supplying top-notch products across various industries.",
  body:
    "Our priorities include timely delivery, competitive pricing, and ensuring customer satisfaction. At MJTC, we offer our clients the best products at reasonable prices. Our offerings are designed to meet the rapidly growing and demanding needs of the construction and development sectors. We are committed to achieving the highest levels of customer satisfaction through the quality and reliability of our products and services. Our well-trained staff is always ready to provide prompt assistance to our valued clients.",
};

import harmanProfessionalLogo from "@/assets/brands/harman-professional.png";
import jblByHarmanLogo from "@/assets/brands/harman-family/jbl-by-harman.png";
import akgByHarmanLogo from "@/assets/brands/harman-family/akg.png";
import bssByHarmanLogo from "@/assets/brands/harman-family/bss.png";
import crownByHarmanLogo from "@/assets/brands/harman-family/crown.png";
import soundcraftByHarmanLogo from "@/assets/brands/harman-family/soundcraft.png";
import dbxByHarmanLogo from "@/assets/brands/harman-family/dbx.png";
import lexiconByHarmanLogo from "@/assets/brands/harman-family/lexicon.png";
import audioVisualImg from "@/assets/trading/audio-visual.png";
import mepEngineeringHeaderImg from "@/assets/industries/mep-engineering-header.jpg";
import mepPageElectricalImg from "@/assets/industries/mep-page-electrical.jpg";
import mepPagePlantImg from "@/assets/industries/mep-page-plant.jpg";
import mepPagePlumbingImg from "@/assets/industries/mep-page-plumbing.jpg";
import mepPageHvacImg from "@/assets/industries/mep-page-hvac.jpg";
import mepServiceMechanicalImg from "@/assets/industries/mep-service-mechanical.jpg";
import jbl3153 from "@/assets/cinema/jbl-3153.png";
import jbl3181f from "@/assets/cinema/jbl-3181f.png";
import crownXlc21300 from "@/assets/cinema/crown-xlc-21300.png";
import siPerformer3 from "@/assets/cinema/si-performer-3.png";
import pendantSubwoofer from "@/assets/cinema/pendant-subwoofer.png";
import bssVe330 from "@/assets/cinema/bss-ve-330.png";

export type ServiceOfferItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export type Industry = {
  title: string;
  slug: string;
  /** Short copy shown under the homepage industry card image */
  summary?: string;
  /** Page copy — filled in as content is provided */
  body?: string;
  heading?: string;
  subheading?: string;
  /** Heading shown above the industry page body copy */
  contentHeading?: string;
  logo?: string;
  logoAlt?: string;
  partnerLogos?: { name: string; src: string }[];
  headerImage?: string;
  galleryImages?: string[];
  serviceItems?: ServiceOfferItem[];
  paragraphs?: string[];
  closing?: string;
  cinemaExpansion?: {
    products?: {
      model: string;
      name: string;
      image: string;
      formats: string[];
    }[];
  };
};

export const industries: Industry[] = [
  {
    title: "MEP Engineering Services",
    slug: "mep-engineering-services",
    summary:
      "HVAC, firefighting, electrical installations, ELV systems, and plumbing services, ensuring efficient and reliable infrastructure.",
    headerImage: mepEngineeringHeaderImg,
    contentHeading: "Mechanical, Electrical, and Plumbing Engineering Services",
    galleryImages: [
      mepPagePlantImg,
      mepPageHvacImg,
      mepPageElectricalImg,
      mepPagePlumbingImg,
    ],
    serviceItems: [
      {
        id: "mechanical",
        title: "Mechanical",
        description:
          "HVAC systems, air conditioning, mechanical equipment installation, chilled water systems, and related mechanical works.",
        image: mepServiceMechanicalImg,
      },
      {
        id: "air-conditioning-systems",
        title: "Air Conditioning Systems",
        description:
          "Professional HVAC and air-conditioning installation, maintenance, ductwork, ventilation, and chilled water solutions.",
        image: mepPageHvacImg,
      },
      {
        id: "fire-fighting-services",
        title: "Fire Fighting Services",
        description:
          "Firefighting systems, fire protection pipework, pumps, valves, and associated installation and testing.",
        image: mepPagePlantImg,
      },
      {
        id: "electrical",
        title: "Electrical",
        description:
          "LV electrical installations, electrical containment, control panels, lighting systems, and ELV solutions.",
        image: mepPageElectricalImg,
      },
      {
        id: "pipework-surface-and-underground",
        title: "Pipework Surface and Underground",
        description:
          "Plumbing, water supply, drainage, stormwater, sewerage, and surface and underground pipework installations.",
        image: mepPagePlumbingImg,
      },
    ],
    paragraphs: [
      "Mohifar Jahan Trading and Contracting delivers integrated MEP and infrastructure solutions across mechanical, electrical, plumbing, and specialized building systems. Our expertise includes HVAC, firefighting, FM-200, piping, chilled water, LV electrical systems, lighting, ELV, BMS, fire alarms, plumbing, drainage, stormwater, and sewerage works, supported by infrastructure services such as dewatering, excavation, sheet piling, substations, street lighting, and telecommunications.",
      "We combine technical expertise, quality workmanship, safety, and reliable project execution to deliver practical engineering solutions for commercial, industrial, and infrastructure projects.",
    ],
  },
  {
    title: "Infrastructure",
    slug: "infrastructure",
    summary:
      "Reliable infrastructure supporting efficient industrial supply, contracting, and project execution.",
  },
  { title: "Structural Engineering Services", slug: "structural-engineering-services" },
  { title: "Civil Engineering Services", slug: "civil-engineering-services" },
  {
    title: "Industrial Engineering & Maintenance Services",
    slug: "industrial-engineering-maintenance-services",
  },
  { title: "Equipment Renting Service", slug: "equipment-renting-service" },
  { title: "Material Supply", slug: "material-supply" },
  {
    title: "Professional Sound and Engineering",
    slug: "professional-sound-and-engineering",
    summary:
      "Professional audio, video, and AV systems from trusted global brands, ensuring exceptional sound quality, seamless integration, and reliable performance.",
    heading: "HARMAN Professional Solutions",
    subheading: "Official HARMAN Professional Solutions Representative in Bahrain",
    logo: harmanProfessionalLogo,
    logoAlt: "HARMAN, a Samsung company",
    partnerLogos: [
      { name: "JBL", src: jblByHarmanLogo },
      { name: "Lexicon", src: lexiconByHarmanLogo },
      { name: "Soundcraft", src: soundcraftByHarmanLogo },
      { name: "dbx", src: dbxByHarmanLogo },
      { name: "Crown", src: crownByHarmanLogo },
      { name: "AKG", src: akgByHarmanLogo },
      { name: "BSS", src: bssByHarmanLogo },
    ],
    headerImage: audioVisualImg,
    paragraphs: [
      "Mohifar Jahan Trading and Contracting is proud to be the official representative of HARMAN Professional Solutions in Bahrain, providing access to world-class professional audio and AV solutions from some of the industry's most trusted brands.",
      "Our HARMAN portfolio includes JBL Professional, AKG, Crown, Soundcraft, Studer, BSS, dbx, DigiTech, and Lexicon, offering advanced solutions for commercial, hospitality, entertainment, corporate, and other professional applications.",
      "With HARMAN's globally recognized technology and our local expertise, we provide customers in Bahrain with reliable products, professional support, and tailored audio solutions designed to meet the demands of modern projects.",
    ],
    closing: "Mohifar Jahan Trading and Contracting — Your Trusted HARMAN Partner in Bahrain.",
    cinemaExpansion: {
      products: [
        {
          model: "3153",
          name: "Professional 3-Way Main Cinema Screen Speaker",
          image: jbl3153,
          formats: ["Premium Large Format", "Large Format"],
        },
        {
          model: "3181F",
          name: "Professional High-Power Cinema Subwoofer",
          image: jbl3181f,
          formats: ["Premium Large Format", "Large Format"],
        },
        {
          model: "XLC 21300",
          name: "2-Channel 1,300-Watt Power Amplifier for Pro Cinema Applications",
          image: crownXlc21300,
          formats: [
            "Premium Large Format",
            "Large Format",
            "Medium Format",
            "Small Format",
          ],
        },
        {
          model: "Si Performer 3",
          name: "Digital mixer with built-in automated lighting controller",
          image: siPerformer3,
          formats: [],
        },
        {
          model: "Pendant Subwoofer with Crossover",
          name: "Pendant Subwoofer with Crossover",
          image: pendantSubwoofer,
          formats: [],
        },
        {
          model: "VE-330",
          name: "4K60 H.26x/Dante AV-H & 1080p H.26x Dual-Stream Encoder with USB Audio and Video",
          image: bssVe330,
          formats: [],
        },
      ],
    },
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const aboutContent = {
  headline: "Empowering projects. Elevating Industry",
  intro:
    "Founded in 2025, Mohifar Jahan Trading & Contracting (MJTC) is an independent Bahrain-based company providing integrated trading, engineering, contracting, and industrial services to industrial, utility, commercial, and government clients across the Kingdom. Our expertise spans construction, engineering, design, industrial maintenance, equipment rental, and the supply of high-quality materials and industrial products. By combining advanced technology, innovative design, technical expertise, and disciplined project management, we deliver efficient, reliable, and high-quality solutions tailored to the unique requirements of every project. Our commitment to excellence enables us to execute diverse and complex projects with precision, professionalism, and a strong focus on safety and quality. At MJTC, we strive to exceed client expectations by delivering practical solutions, dependable service, and outstanding performance while building long-term relationships based on trust, integrity, and mutual success. Through our engineering expertise, dedicated team, and unwavering commitment to client satisfaction, MJTC transforms ideas and visions into successful, lasting results.",
  trustedTitle: "Trusted by Leading Industries, Chosen for Excellence",
  trustedBody:
    "At Mohifar Jahan Trading and Contracting, businesses across diverse sectors rely on us for dependable contracting services and high-quality industrial supplies. Our reputation is built on consistent performance, timely delivery, and unmatched value. From construction and infrastructure to maintenance and industrial trading, we provide end-to-end solutions backed by technical expertise and a commitment to long-term success.",
};

export const whyChooseUs = [
  {
    title: "Experienced Team",
    desc: "Our team brings years of hands-on experience in MEP and fire safety, ensuring dependable, professional execution from planning to commissioning.",
  },
  {
    title: "Assured Quality",
    desc: "At Mohifar, quality is not an option — it's a commitment. We ensure accuracy, compliance, and excellence in every phase of your project.",
  },
  {
    title: "Reliable Solutions",
    desc: "We deliver solutions you can count on — on time, every time. From planning to delivery, reliability is at the core of what we do.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Our processes align with industry regulations and safety standards, assuring you of seamless approvals and audit-ready documentation.",
  },
  {
    title: "Scalable Execution",
    desc: "Whether it's a high-rise tower, industrial complex, or commercial fit-out, our services are designed to adapt and scale with your project's needs.",
  },
  {
    title: "Smart & Efficient",
    desc: "Our approach combines precision engineering with cost-effective solutions, giving you high-value output without compromising quality.",
  },
];

export const processSteps = [
  { step: "01", title: "Consultation", desc: "We listen, scope and align on outcomes before anything else." },
  { step: "02", title: "Planning", desc: "Engineering, safety, procurement and schedule modelled up front." },
  { step: "03", title: "Procurement", desc: "Sourcing from vetted OEMs and stocked inventory when time matters." },
  { step: "04", title: "Execution", desc: "Certified crews delivering to specification, safely and on time." },
  { step: "05", title: "Inspection", desc: "Documented QA/QC, testing and third-party verification." },
  { step: "06", title: "Delivery", desc: "Structured handover with as-built documentation and training." },
  { step: "07", title: "Support", desc: "Ongoing maintenance, AMCs and rapid-response service." },
];

export const testimonials = [
  {
    quote:
      "MJTC brought engineering discipline and speed to our plant maintenance program. Their team is our first call for critical work.",
    author: "Plant Manager",
    role: "Industrial Manufacturing, Bahrain",
  },
  {
    quote:
      "Reliable supply of mechanical and electrical materials with real technical support. That combination is rare in the market.",
    author: "Procurement Lead",
    role: "Utilities Sector",
  },
  {
    quote:
      "From HVAC retrofit to civil works, MJTC delivered a coordinated scope on schedule. Communication was excellent throughout.",
    author: "Facilities Director",
    role: "Commercial Group",
  },
];

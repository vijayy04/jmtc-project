import akgLogo from "@/assets/brands/akg.png";
import apgLogo from "@/assets/brands/apg.png";
import bssLogo from "@/assets/brands/bss.png";
import crownLogo from "@/assets/brands/crown.png";
import dahuaLogo from "@/assets/brands/dahua.jpg";
import harmanLogo from "@/assets/brands/harman.png";
import hysterYaleLogo from "@/assets/brands/hyster-yale.png";
import jblLogo from "@/assets/brands/jbl.png";
import lexiconLogo from "@/assets/brands/lexicon.png";
import multispanLogo from "@/assets/brands/multispan.png";
import nexgenLogo from "@/assets/brands/nexgen.png";
import pageleLogo from "@/assets/brands/pagele.png";
import soundcraftLogo from "@/assets/brands/soundcraft.png";
import vairitasLogo from "@/assets/brands/vairitas.png";

export type Brand = {
  name: string;
  logo: string;
  /** Background color matching the logo artwork */
  bg: string;
};

export const brandPartners: Brand[] = [
  { name: "HARMAN", logo: harmanLogo, bg: "#ffffff" },
  { name: "JBL", logo: jblLogo, bg: "#ffffff" },
  { name: "Soundcraft", logo: soundcraftLogo, bg: "#ffffff" },
  { name: "Lexicon", logo: lexiconLogo, bg: "#ffffff" },
  { name: "Crown", logo: crownLogo, bg: "#ffffff" },
  { name: "BSS", logo: bssLogo, bg: "#ffffff" },
  { name: "AKG", logo: akgLogo, bg: "#ffffff" },
  { name: "Multispan", logo: multispanLogo, bg: "#ffffff" },
  { name: "NexGen", logo: nexgenLogo, bg: "#ffffff" },
  { name: "PAGELE", logo: pageleLogo, bg: "#ffffff" },
  { name: "Vairitas", logo: vairitasLogo, bg: "#ffffff" },
  { name: "APG", logo: apgLogo, bg: "#ffffff" },
  { name: "Hyster-Yale", logo: hysterYaleLogo, bg: "#ffffff" },
  { name: "Dahua", logo: dahuaLogo, bg: "#ffffff" },
];

/** Brands highlighted on the Trading page */
export const tradingBrandPartners: Brand[] = [
  { name: "Multispan", logo: multispanLogo, bg: "#ffffff" },
  { name: "APG", logo: apgLogo, bg: "#ffffff" },
  { name: "NexGen", logo: nexgenLogo, bg: "#ffffff" },
  { name: "PAGELE", logo: pageleLogo, bg: "#ffffff" },
  { name: "JBL", logo: jblLogo, bg: "#ffffff" },
  { name: "HARMAN", logo: harmanLogo, bg: "#ffffff" },
  { name: "Soundcraft", logo: soundcraftLogo, bg: "#ffffff" },
  { name: "AKG", logo: akgLogo, bg: "#ffffff" },
  { name: "Vairitas", logo: vairitasLogo, bg: "#ffffff" },
  { name: "Hyster-Yale", logo: hysterYaleLogo, bg: "#ffffff" },
];

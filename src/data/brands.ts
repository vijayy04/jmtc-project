import meggerLogo from "@/assets/brands/megger.png";
import geLogo from "@/assets/brands/ge.png";
import andeliLogo from "@/assets/brands/andeli.png";
import schneiderElectricLogo from "@/assets/brands/schneider-electric.png";
import threeMLogo from "@/assets/brands/3m.png";
import omronLogo from "@/assets/brands/omron.png";
import ronixLogo from "@/assets/brands/ronix.png";
import abbLogo from "@/assets/brands/abb.png";
import multispanLogo from "@/assets/brands/multispan.png";
import apgLogo from "@/assets/brands/apg.png";
import ashokLeylandLogo from "@/assets/brands/ashok-leyland.png";
import genesisLogo from "@/assets/brands/genesis.png";
import jblProfessionalLogo from "@/assets/brands/jbl-professional.png";
import nexgenLogo from "@/assets/brands/nexgen.png";
import pageleLogo from "@/assets/brands/pagele.png";
import racorsLogo from "@/assets/brands/racors.png";
import vairitasLogo from "@/assets/brands/vairitas.png";
import wassertekLogo from "@/assets/brands/wassertek.png";
import zhenghaoLogo from "@/assets/brands/zhenghao.png";

export type Brand = {
  name: string;
  logo: string;
};

export const tradingBrandPartners: Brand[] = [
  { name: "Megger", logo: meggerLogo },
  { name: "General Electric", logo: geLogo },
  { name: "Andeli", logo: andeliLogo },
  { name: "Schneider Electric", logo: schneiderElectricLogo },
  { name: "3M", logo: threeMLogo },
  { name: "Omron", logo: omronLogo },
  { name: "Ronix", logo: ronixLogo },
  { name: "ABB", logo: abbLogo },
  { name: "Multispan", logo: multispanLogo },
];

export const brandPartners: Brand[] = [
  ...tradingBrandPartners,
  { name: "Genesis", logo: genesisLogo },
  { name: "Ashok Leyland", logo: ashokLeylandLogo },
  { name: "JBL Professional", logo: jblProfessionalLogo },
  { name: "PAGELE", logo: pageleLogo },
  { name: "NexGen", logo: nexgenLogo },
  { name: "ZHENGHAO", logo: zhenghaoLogo },
  { name: "Racors", logo: racorsLogo },
  { name: "Vairitas", logo: vairitasLogo },
  { name: "APG", logo: apgLogo },
  { name: "Wassertek", logo: wassertekLogo },
];

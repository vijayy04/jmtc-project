import ashrafsLogo from "@/assets/clients/ashrafs.png";
import koohejiLogo from "@/assets/clients/kooheji.png";
import driccLogo from "@/assets/clients/dricc.png";

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { name: "Ashrafs", logo: ashrafsLogo },
  { name: "KOOHEJI Technical Services", logo: koohejiLogo },
  { name: "DRICC", logo: driccLogo },
];

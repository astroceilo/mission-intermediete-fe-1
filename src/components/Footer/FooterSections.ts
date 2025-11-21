import { categoryMenuItems, companyMenuItems, communityMenuItems, type FooterMenuItem, } from "./FooterMenuItems";


export interface FooterSection {
  title: string;
  items: FooterMenuItem[];
}

export const footerSections: FooterSection[] = [
  { title: "Kategori", items: categoryMenuItems },
  { title: "Perusahaan", items: companyMenuItems },
  { title: "Komunitas", items: communityMenuItems },
];

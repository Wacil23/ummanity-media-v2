// src/config/sidebarConfig.ts
import { fal, IconDefinition } from "@awesome.me/kit-1c316dac3b/icons";

export interface SidebarItem {
  label?: string;
  title?: string;
  href?: string;
  icon?: IconDefinition;
  children?: SidebarItem[];
}

export const siteMetaConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
};

export const sidebarConfig: SidebarItem[] = [
  {
    label: "Vue d'ensemble",
    href: "/overview",
    icon: fal.faRocketLaunch,
  },
  {
    title: "Dashboard",
    icon: fal.faGridRound2,
    children: [
      {
        label: "Accueil",
        href: "/[shopId]/dashboard",
      },
      {
        label: "Campagnes",
        href: "/[shopId]/campaigns",
      },
      {
        label: "Adsets",
        href: "/[shopId]/adsets",
      },
      {
        label: "Ads",
        href: "/[shopId]/ads",
      },
    ],
  },

  {
    title: "Boutique",
    icon: fal.faShop,
    children: [
      {
        label: "Mes boutiques",
        href: "/shops", // Liste de toutes les boutiques
      },
    ],
  },
  {
    label: "Rapports",
    icon: fal.faFiles,
    href: "/[shopId]/reports", // consolidation, export CSV, etc.
  },
  {
    title: "Paramètres",
    icon: fal.faGear,
    children: [
      {
        label: "Profil",
        href: "/settings/profile",
      },
      {
        label: "Organisation",
        href: "/settings/organization",
      },
    ],
  },
];

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import Sidebar from "@/components/ui/sidebar/Sidebar";
import { siteMetaConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteMetaConfig.name,
    template: `%s - ${siteMetaConfig.name}`,
  },
  description: siteMetaConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen  flex">
      <Sidebar />
      <main className="w-[100%] rounded-3xl m-5">{children}</main>
    </div>
  );
}

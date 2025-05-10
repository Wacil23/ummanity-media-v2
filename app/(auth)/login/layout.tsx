import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";
import { siteMetaConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/ui/theme/theme-switch";

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

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex flex-col h-screen">
          <main>{children}</main>

          <ThemeSwitch isAbsolute />
        </div>
      </body>
    </html>
  );
}

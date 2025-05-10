import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { config } from "@fortawesome/fontawesome-svg-core";

import { Providers } from "./providers";

import { siteMetaConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

config.autoAddCss = false;

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
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}

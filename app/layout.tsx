import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { brand } from "@/config/brand";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — Web Design & Development`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  metadataBase: new URL("https://iqbalfadillah.vercel.app"),
  openGraph: {
    title: `${brand.name} — Web Design & Development`,
    description: brand.description,
    type: "website",
    locale: "id_ID",
    siteName: brand.name,
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Web Design & Development`,
    description: brand.description,
    images: ["/images/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn(plusJakartaSans.variable)}>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
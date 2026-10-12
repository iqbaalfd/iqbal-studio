
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { brand } from "@/config/brand";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  openGraph: {
    title: `${brand.name} — Web Design & Development`,
    description: brand.description,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("font-sans", geist.variable)}>
      <body className={plusJakartaSans.variable}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

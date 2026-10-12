"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { brand } from "@/config/brand";

const navigation = [
  { label: "Layanan", href: "#services" },
  { label: "Proyek", href: "#work" },
  { label: "Proses", href: "#process" },
  { label: "Harga", href: "#pricing" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<"ID" | "EN">("ID");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-neutral-950/85 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="relative mx-auto flex min-h-[72px] w-full max-w-[1440px] items-center justify-between px-5 transition-[min-height] duration-300 sm:min-h-[80px] sm:px-8 lg:min-h-[88px] lg:px-12"
      >
        {/* Kiri: navigasi desktop */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-white/70 transition-colors duration-200 hover:text-[#c9ff57] xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-start transition-colors hover:text-[#c9ff57] lg:hidden"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Logo tengah */}
        <Link
          href="/"
          aria-label={`${brand.name} - Beranda`}
          onClick={() => setIsMenuOpen(false)}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[21px] font-extrabold uppercase leading-none tracking-[-0.08em] sm:text-[27px] lg:text-[30px]"
        >
          IQBAL STUDIO<span className="text-[#c9ff57]">.</span>
        </Link>

        {/* Kanan: search dan bahasa */}
        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label={isSearchOpen ? "Tutup pencarian" : "Buka pencarian"}
            aria-expanded={isSearchOpen}
            onClick={() => setIsSearchOpen((open) => !open)}
            className="inline-flex h-10 w-8 items-center justify-center text-white/80 transition-colors hover:text-[#c9ff57]"
          >
            {isSearchOpen ? <X size={19} /> : <Search size={19} />}
          </button>

          <button
            type="button"
            aria-label={`Bahasa saat ini ${language}. Klik untuk mengganti bahasa.`}
            onClick={() =>
              setLanguage((current) => (current === "ID" ? "EN" : "ID"))
            }
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors hover:text-[#c9ff57] sm:text-sm"
          >
            {language}
            <ChevronDown size={14} className="text-white/50" />
          </button>
        </div>
      </nav>

      {/* Panel pencarian */}
      {isSearchOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
          <form
            role="search"
            onSubmit={(event) => {
              event.preventDefault();

              const formData = new FormData(event.currentTarget);
              const query = String(formData.get("q") || "")
                .trim()
                .toLowerCase();

              const target = query.startsWith("#")
                ? query.slice(1)
                : navigation.find((item) =>
                    item.label.toLowerCase().includes(query)
                  )?.href.slice(1);

              if (target) {
                document
                  .getElementById(target)
                  ?.scrollIntoView({ behavior: "smooth" });
              }

              setIsSearchOpen(false);
            }}
            className="mx-auto flex max-w-3xl items-center gap-3"
          >
            <Search size={20} className="shrink-0 text-[#c9ff57]" />

            <input
              autoFocus
              name="q"
              type="search"
              placeholder="Cari layanan, proyek, harga..."
              aria-label="Cari di website"
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40"
            />

            <button
              type="submit"
              className="text-sm font-semibold text-[#c9ff57] transition-colors hover:text-white"
            >
              Cari
            </button>
          </form>
        </div>
      )}

      {/* Navigasi mobile */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-neutral-950/95 px-5 pb-5 backdrop-blur-xl sm:px-8 lg:hidden"
        >
          <div className="divide-y divide-white/10">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between py-4 text-base font-medium transition-colors hover:text-[#c9ff57]"
              >
                {item.label}
                <span className="text-xs text-white/40">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
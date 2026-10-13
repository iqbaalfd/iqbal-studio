"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { brand } from "@/config/brand";

const navigation = [
  { label: "Layanan", href: "#services" },
  { label: "Proyek", href: "#work" },
  { label: "Proses", href: "#process" },
  { label: "Harga", href: "#pricing" },
];

const observedSections = ["hero", "services", "work", "process", "pricing", "contact"];

export default function Navbar() {
  const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [language, setLanguage] = useState<"ID" | "EN">("ID");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = observedSections
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Margin diperluas agar perpindahan antar section mulus dan tidak ke-skip
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.15,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navigateToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

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
        {/* Navigasi desktop */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  navigateToSection(sectionId);
                }}
                className={`relative py-2 text-[13px] font-medium transition-colors duration-200 xl:text-sm ${
                  isActive
                    ? "text-[#c7f36b]"
                    : "text-white/70 hover:text-[#c7f36b]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-px origin-left bg-[#c7f36b] transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setIsMenuOpen((open) => !open);
            setIsSearchOpen(false);
          }}
          className="inline-flex h-10 w-10 items-center justify-start transition-colors hover:text-[#c7f36b] lg:hidden"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Logo tengah */}
        <Link
          href="/#hero"
          aria-label={`${brand.name} — kembali ke beranda`}
          onClick={() => {
            setIsMenuOpen(false);
            setIsSearchOpen(false);
          }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[21px] font-extrabold uppercase leading-none tracking-[-0.08em] sm:text-[27px] lg:text-[30px]"
        >
          IQBAL STUDIO<span className="text-[#c7f36b]">.</span>
        </Link>

        {/* Search dan bahasa */}
        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label={isSearchOpen ? "Tutup pencarian" : "Buka pencarian"}
            aria-expanded={isSearchOpen}
            aria-controls="site-search-panel"
            onClick={() => {
              setIsSearchOpen((open) => !open);
              setIsMenuOpen(false);
            }}
            className="inline-flex h-10 w-8 items-center justify-center text-white/80 transition-colors hover:text-[#c7f36b]"
          >
            {isSearchOpen ? <X size={19} /> : <Search size={19} />}
          </button>

          <button
            type="button"
            aria-label={`Bahasa saat ini ${language}. Klik untuk mengganti bahasa.`}
            onClick={() =>
              setLanguage((current) => (current === "ID" ? "EN" : "ID"))
            }
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors hover:text-[#c7f36b] sm:text-sm"
          >
            {language}
            <ChevronDown size={14} className="text-white/50" />
          </button>
        </div>
      </nav>

      {/* Panel pencarian */}
      {isSearchOpen && (
        <div
          id="site-search-panel"
          className="border-t border-white/10 bg-neutral-950/95 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <form
            role="search"
            onSubmit={(event) => {
              event.preventDefault();

              const formData = new FormData(event.currentTarget);
              const query = String(formData.get("q") || "")
                .trim()
                .toLowerCase();

              const normalizedQuery = query.startsWith("#")
                ? query.slice(1)
                : query;

              const matchedNavigation = navigation.find(
                (item) => item.label.toLowerCase().includes(normalizedQuery),
              );

              const target = observedSections.includes(normalizedQuery)
                ? normalizedQuery
                : matchedNavigation?.href.slice(1);

              if (target) navigateToSection(target);
              else setIsSearchOpen(false);
            }}
            className="mx-auto flex max-w-3xl items-center gap-3"
          >
            <Search size={20} aria-hidden="true" className="shrink-0 text-[#c7f36b]" />

            <input
              autoFocus
              name="q"
              type="search"
              placeholder="Cari layanan, proyek, proses, harga..."
              aria-label="Cari section di website"
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40"
            />

            <button
              type="submit"
              className="text-sm font-semibold text-[#c7f36b] transition-colors hover:text-white"
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
          className="border-t border-white/10 bg-neutral-950/95 px-5 pb-5 backdrop-blur-xl sm:px-8 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="divide-y divide-white/10">
            {navigation.map((item, index) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateToSection(sectionId);
                  }}
                  className={`flex items-center justify-between py-4 text-base font-medium transition-colors ${
                    isActive ? "text-[#c7f36b]" : "text-white hover:text-[#c7f36b]"
                  }`}
                >
                  {item.label}
                  <span className="text-xs text-white/40">0{index + 1}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
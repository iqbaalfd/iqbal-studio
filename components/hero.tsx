"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease },
        };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex h-[100svh] min-h-[100svh] flex-col justify-between overflow-hidden bg-[#0d0f0c] text-[#f3f1e9] pt-[var(--nav-height)]"
    >
      {/* ── AMBIENT GLOW & ORNAMEN STREETWEAR / EDITORIAL ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* Soft Ambient Aurora Glow */}
        <div className="absolute top-[40%] left-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#c7f36b]/15 via-[#c7f36b]/5 to-transparent blur-[130px]" />

        {/* Technical Grid Pattern Tipis */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(243,241,233,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(243,241,233,.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black 50%, transparent 90%)",
          }}
        />

        {/* Wireframe Globe 3D Background (Kiri) */}
        <svg
          className="absolute -left-16 top-[22%] h-72 w-72 text-[#c7f36b]/10 animate-[spin_60s_linear_infinite] lg:h-[360px] lg:w-[360px]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="45" />
          <ellipse cx="50" cy="50" rx="45" ry="18" />
          <ellipse cx="50" cy="50" rx="18" ry="45" />
          <line x1="5" y1="50" x2="95" y2="50" />
          <line x1="50" y1="5" x2="50" y2="95" />
        </svg>

        {/* Cyber Starburst / Four-Point Star (Kanan Atas) */}
        <div className="absolute right-[8%] top-[20%] hidden lg:block text-[#c7f36b]/25">
          <svg className="h-14 w-14 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
          </svg>
        </div>

        {/* Spinning Circular Badge (Kanan Bawah) */}
        <div className="absolute right-8 bottom-12 hidden lg:block opacity-80">
          <div className="relative h-24 w-24 animate-[spin_20s_linear_infinite]">
            <svg className="h-full w-full overflow-visible" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
                stroke="transparent"
              />
              <text className="text-[10px] font-bold uppercase tracking-[0.22em] fill-[#c7f36b]">
                <textPath href="#circlePath" startOffset="0%">
                  IQBAL STUDIO &bull; DIGITAL LAB &bull; EST. 2026 &bull;
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c7f36b]" />
            </div>
          </div>
        </div>
      </div>

      {/* ── KONTEN UTAMA ── */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-5 py-6 text-center sm:px-8 lg:px-12">
        
        {/* Badge Studio */}
        <motion.div {...reveal(0.1)} className="mb-4 flex items-center gap-3 sm:mb-5">
          <span aria-hidden="true" className="h-px w-8 bg-[#c7f36b]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7f36b]">
            Independent Digital Studio
          </p>
          <span aria-hidden="true" className="h-px w-8 bg-[#c7f36b]" />
        </motion.div>

        {/* Heading Utama */}
        <motion.h1
          id="hero-heading"
          {...reveal(0.18)}
          className="max-w-[1050px] text-[clamp(2.8rem,7.5vw,7rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.075em]"
        >
          <span className="block text-white">Your business.</span>
          <span className="my-1 block text-[#f3f1e9]/75 sm:my-1.5">Better</span>
          <span className="block text-[#c7f36b] drop-shadow-[0_0_35px_rgba(199,243,107,0.25)]">
            online.
          </span>
        </motion.h1>

        {/* Subtitle Ringkas */}
        <motion.p
          {...reveal(0.26)}
          className="mt-5 max-w-[480px] text-xs font-normal leading-relaxed text-[#f3f1e9]/80 sm:text-sm lg:text-base"
        >
          We design and build high-performance websites that help businesses stand out, build trust, and scale online.
        </motion.p>

        {/* Tombol Aksi (KONTRAST TINGGI DENGAN INLINE COLOR) */}
        <motion.div
          {...reveal(0.34)}
          className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href="#contact"
            style={{ backgroundColor: "#c7f36b", color: "#0d0f0c" }}
            className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 px-8 text-xs font-black uppercase tracking-wider transition-all duration-200 hover:bg-white hover:shadow-[0_0_30px_rgba(199,243,107,0.5)]"
          >
            <span style={{ color: "#0d0f0c" }}>Diskusikan proyek</span>
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              style={{ color: "#0d0f0c" }}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="#work"
            className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 border border-white/40 bg-transparent px-8 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-[#c7f36b] hover:text-[#c7f36b]"
          >
            Lihat karya
            <ArrowDownRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>

      {/* Footer Minimalis Bersih */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 w-full shrink-0"
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between border-t border-white/10 px-5 py-4 sm:px-8 lg:px-12">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f3f1e9]/40">
            &copy; {new Date().getFullYear()} Iqbal Studio
          </p>
          <a
            href="#services"
            className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f3f1e9]/60 transition-colors hover:text-[#c7f36b]"
          >
            Scroll to explore &darr;
          </a>
        </div>
      </motion.div>
    </section>
  );
}
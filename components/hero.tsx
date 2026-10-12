import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-neutral-950 text-white"
    >
      {/* Background */}
      <Image
        src="/images/hero-studio.png"
        alt="Studio kreatif dengan arsitektur beton dan pencahayaan dramatis"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layered overlay */}
      <div className="absolute inset-0 z-0 bg-black/35" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/45 via-black/20 to-black/65" />

      {/* Centered hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-5 pb-24 pt-28 text-center sm:px-8 sm:pb-28 sm:pt-32 lg:px-12">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9ff57] sm:mb-8 sm:text-xs">
          Independent Digital Studio
        </p>

        <h1
          id="hero-heading"
          className="max-w-[1100px] text-[clamp(3rem,8.5vw,8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.085em]"
        >
          <span className="block">Bisnis yang</span>
          <span className="block text-white/55">hebat, layak</span>
          <span className="block">tampil hebat.</span>
        </h1>

        <p className="mt-7 max-w-[490px] text-sm leading-6 text-white/80 sm:mt-9 sm:text-base sm:leading-7">
          Website yang dirancang untuk memperkuat identitas bisnis,
          membangun kepercayaan, dan membantu pelanggan mengenal
          layanan lo.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
          <Link
            href="#contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#c9ff57] px-5 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-white sm:px-6"
          >
            Diskusikan proyek
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="#work"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-5 text-sm font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
          >
            Lihat karya
            <ArrowDownRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Bottom information */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-3 border-t border-white/25 px-5 py-4 sm:px-8 lg:px-12">
          <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/70 sm:text-xs">
            Website Design &amp; Development
          </p>

          <a
            href="#work"
            className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-[#c9ff57] sm:text-xs"
          >
            Explore selected work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
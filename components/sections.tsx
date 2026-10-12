import Link from "next/link";
import { ArrowUpRight, Palette } from "lucide-react";
import { brand } from "@/config/brand";

type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  className: string;
  mark: string;
  accent: string;
  href: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Madani Digital Printing",
    type: "Business Website",
    description:
      "Konsep website untuk bisnis digital printing dengan fokus pada layanan, kejelasan informasi, dan jalur pemesanan.",
    className: "bg-[#e8e9e2]",
    mark: "MADANI",
    accent: "bg-[#c9ff57]",
    href: "#contact",
  },
  {
    number: "02",
    name: "Invictus",
    type: "Brand Landing Page",
    description:
      "Eksplorasi landing page dengan karakter visual yang kuat dan presentasi brand yang lebih modern.",
    className: "bg-[#e5e7ff]",
    mark: "INVICTUS",
    accent: "bg-[#4b5cff]",
    href: "#contact",
  },
  {
    number: "03",
    name: "Michi Bloom",
    type: "Florist Website",
    description:
      "Konsep website florist dengan pendekatan visual yang hangat, elegan, dan berorientasi pada produk.",
    className: "bg-[#f1e7df]",
    mark: "michi bloom",
    accent: "bg-[#e6bba8]",
    href: "#contact",
  },
];

export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Landing Page",
      description:
        "Halaman fokus untuk memperkenalkan produk, menawarkan layanan, atau mengarahkan pengunjung ke satu tindakan utama.",
      deliverables: "Promosi · Produk · Campaign",
    },
    {
      number: "02",
      title: "Business Website",
      description:
        "Website profesional untuk menjelaskan bisnis, menampilkan layanan, dan membantu calon pelanggan mengenal usaha lo.",
      deliverables: "Profil usaha · Jasa · UMKM",
    },
    {
      number: "03",
      title: "Custom Website",
      description:
        "Website dengan struktur dan fitur yang disesuaikan dengan kebutuhan serta alur kerja bisnis lo.",
      deliverables: "Kebutuhan khusus · Fitur tambahan",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-0 border-t border-black/10 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Heading */}
          <div className="lg:sticky lg:top-10 lg:self-start">
            <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
              <span className="h-2 w-2 bg-[#c9ff57]" />
              What I can build
            </p>

            <h2 className="max-w-xl text-[clamp(2.8rem,6.5vw,6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.075em] text-neutral-950">
              Website yang
              <br />
              <span className="text-neutral-400">punya tujuan.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600 sm:mt-8 sm:text-base">
              Setiap website dibuat berdasarkan kebutuhan bisnis,
              bukan sekadar tampilan yang terlihat bagus.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex min-h-11 items-center gap-3 border-b-2 border-[#c9ff57] pb-2 text-sm font-semibold text-neutral-950 transition-colors hover:text-neutral-500"
            >
              Diskusikan kebutuhan website
              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Service list */}
          <div className="border-t border-black/15">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border-b border-black/15 py-7 sm:py-9 lg:py-10"
              >
                <div className="grid grid-cols-[38px_minmax(0,1fr)] gap-3 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-5">
                  <span className="pt-1 text-xs tabular-nums text-neutral-400">
                    / {service.number}
                  </span>

                  <div>
                    <h3 className="flex flex-wrap items-center justify-between gap-3 text-2xl font-semibold tracking-[-0.06em] text-neutral-950 transition-colors group-hover:text-neutral-500 sm:text-3xl lg:text-4xl">
                      {service.title}

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/15 transition-all duration-300 group-hover:border-[#c9ff57] group-hover:bg-[#c9ff57] group-hover:text-neutral-950">
                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
                      {service.description}
                    </p>

                    <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.13em] text-neutral-400 sm:text-[10px]">
                      {service.deliverables}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkSection() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="work"
      className="scroll-mt-0 border-t border-black/10 bg-[#f5f5f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
              <span className="h-2 w-2 bg-[#c9ff57]" />
              Selected work / 2026
            </p>

            <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.075em] text-neutral-950">
              Ide jadi
              <br />
              <span className="text-neutral-400">pengalaman digital.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-1">
            <p className="text-sm leading-7 text-neutral-600 sm:text-base">
              Tiga eksplorasi website dengan kebutuhan, karakter, dan
              pendekatan desain yang berbeda.
            </p>
            <p className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9ff57]" />
              Semua preview masih berupa konsep
            </p>
          </div>
        </div>

        {/* Featured project */}
        <article className="group border border-black/10 bg-white">
          <div className="grid lg:grid-cols-[1.22fr_0.78fr]">
            {/* Project information */}
            <div className="flex flex-col justify-between p-6 sm:p-9 lg:order-2 lg:min-h-[510px] lg:p-11">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Featured project
                </span>
                <span className="text-xs tabular-nums text-neutral-400">
                  / {featuredProject.number}
                </span>
              </div>

              <div className="mt-9 lg:mt-16">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                  {featuredProject.type}
                </p>

                <h3 className="max-w-lg text-3xl font-semibold leading-[0.98] tracking-[-0.065em] text-neutral-950 sm:text-4xl lg:text-5xl">
                  {featuredProject.name}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
                  {featuredProject.description}
                </p>

                <Link
                  href={featuredProject.href}
                  className="group/link mt-7 inline-flex min-h-11 items-center gap-3 bg-neutral-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-[#c9ff57] hover:text-neutral-950"
                >
                  Diskusikan proyek serupa
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </div>

              <p className="mt-10 text-[9px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                Concept design — bukan website final
              </p>
            </div>

            {/* Large concept preview */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-t border-black/10 bg-[#dfe2d8] p-5 sm:min-h-[400px] sm:p-9 lg:order-1 lg:min-h-[510px] lg:border-r lg:border-t-0 lg:p-12">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-black/10 sm:h-80 sm:w-80" />
              <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full border border-black/10 sm:h-80 sm:w-80" />

              <div className="relative w-full max-w-[640px] overflow-hidden border border-black/10 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:-translate-y-1">
                {/* Browser chrome */}
                <div className="flex h-8 items-center gap-1.5 border-b border-black/10 px-3 sm:h-10 sm:px-4">
                  <span className="h-2 w-2 rounded-full bg-[#d1d1cb]" />
                  <span className="h-2 w-2 rounded-full bg-[#d1d1cb]" />
                  <span className="h-2 w-2 rounded-full bg-[#d1d1cb]" />
                  <div className="ml-3 h-4 flex-1 bg-neutral-100 sm:ml-5" />
                  <span className="text-[8px] text-neutral-400">CONCEPT</span>
                </div>

                {/* Mock website content */}
                <div className="grid min-h-[245px] grid-cols-[1fr_0.75fr] sm:min-h-[330px]">
                  <div className="flex flex-col justify-between p-4 sm:p-8 lg:p-9">
                    <div>
                      <p className="text-[8px] font-bold tracking-[0.13em] text-neutral-500 sm:text-[10px]">
                        MADANI DIGITAL PRINTING
                      </p>

                      <h4 className="mt-5 max-w-[280px] text-[clamp(1.1rem,3vw,2.6rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-neutral-950 sm:mt-8">
                        Cetak kebutuhan bisnismu.
                      </h4>

                      <p className="mt-3 max-w-[220px] text-[9px] leading-4 text-neutral-500 sm:mt-4 sm:text-xs sm:leading-5">
                        Solusi cetak untuk promosi, branding, dan kebutuhan
                        usaha.
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-2">
                      <span className="bg-neutral-950 px-3 py-2 text-[8px] font-semibold text-white sm:text-[10px]">
                        Lihat layanan
                      </span>
                      <span className="hidden text-[9px] text-neutral-400 sm:inline">
                        Digital printing
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-[#c9ff57] p-3 sm:p-5">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-neutral-950 sm:text-[10px]">
                      Print / Design
                    </span>

                    <div className="space-y-2">
                      <div className="h-16 border border-black/15 bg-white/35 sm:h-24" />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-12 bg-neutral-950 sm:h-16" />
                        <div className="h-12 border border-black/20 sm:h-16" />
                      </div>
                    </div>

                    <span className="text-[8px] font-medium text-neutral-950 sm:text-[10px]">
                      VISUAL DIRECTION / 01
                    </span>
                  </div>
                </div>
              </div>

              <span className="absolute bottom-3 right-3 bg-neutral-950 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#c9ff57] sm:bottom-5 sm:right-5">
                Preview konsep
              </span>
            </div>
          </div>
        </article>

        {/* Supporting projects */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article key={project.number} className="group">
              <Link
                href={project.href}
                aria-label={`Diskusikan proyek seperti ${project.name}`}
                className="block"
              >
                <div
                  className={`relative flex aspect-[5/3] items-center justify-center overflow-hidden border border-black/10 ${project.className}`}
                >
                  {/* Abstract background details */}
                  <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-black/10 transition-transform duration-500 group-hover:scale-110 sm:h-64 sm:w-64" />

                  <div className="relative w-[82%] max-w-[500px] overflow-hidden border border-black/10 bg-white shadow-[0_20px_55px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex h-7 items-center gap-1.5 border-b border-black/10 px-3 sm:h-9">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                      <span className="ml-2 h-3 flex-1 bg-neutral-100" />
                    </div>

                    {project.number === "02" ? (
                      <div className="flex min-h-[170px] flex-col justify-between bg-[#171717] p-5 text-white sm:min-h-[235px] sm:p-8">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[8px] uppercase tracking-[0.17em] text-white/50 sm:text-[10px]">
                            {project.type}
                          </span>
                          <span className="h-2 w-2 bg-[#c9ff57]" />
                        </div>

                        <div>
                          <h4 className="text-[clamp(1.8rem,5vw,3.8rem)] font-semibold leading-none tracking-[-0.08em]">
                            INVICTUS<span className="text-[#c9ff57]">.</span>
                          </h4>
                          <div className="mt-4 h-px w-full bg-white/20" />
                          <p className="mt-3 text-[9px] text-white/55 sm:text-xs">
                            A distinct digital identity
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid min-h-[170px] grid-cols-[1fr_0.8fr] bg-[#f8f1eb] sm:min-h-[235px]">
                        <div className="flex flex-col justify-between p-4 sm:p-7">
                          <span className="text-[8px] uppercase tracking-[0.14em] text-[#8a7165] sm:text-[10px]">
                            Florist / Concept
                          </span>

                          <div>
                            <h4 className="text-[clamp(1.2rem,3vw,2.5rem)] font-medium leading-none tracking-[-0.07em] text-[#614c42]">
                              michi bloom
                            </h4>
                            <p className="mt-3 text-[8px] text-[#8a7165] sm:text-[10px]">
                              Flowers for meaningful moments
                            </p>
                          </div>

                          <span className="mt-4 w-fit border border-[#b99c8b] px-3 py-2 text-[8px] text-[#614c42] sm:text-[10px]">
                            Explore collection
                          </span>
                        </div>

                        <div className="flex items-center justify-center bg-[#ead8cc] p-3 sm:p-5">
                          <div className="flex aspect-[3/4] w-full items-center justify-center bg-[#d7b9a8]">
                            <Palette
                              size={30}
                              strokeWidth={1}
                              className="text-[#8a6253] sm:size-10"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <span className="absolute bottom-3 right-3 bg-neutral-950 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#c9ff57] sm:bottom-4 sm:right-4">
                    Concept
                  </span>
                </div>
              </Link>

              <div className="flex items-start justify-between gap-4 border-b border-black/15 py-5 sm:py-6">
                <div className="max-w-xl">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                    {project.type}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.055em] text-neutral-950 sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {project.description}
                  </p>
                </div>

                <span className="pt-1 text-xs tabular-nums text-neutral-400">
                  / {project.number}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Honest portfolio note */}
        <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-6 text-neutral-500">
            Visual yang ditampilkan adalah ilustrasi konsep untuk menunjukkan
            arah desain, bukan screenshot website final atau klaim hasil
            proyek yang sudah diluncurkan.
          </p>

          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-neutral-950 transition-colors hover:text-neutral-500"
          >
            Bahas proyek lo
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Diskusi",
      description:
        "Kita bahas kebutuhan bisnis, target pelanggan, referensi visual, dan tujuan website yang ingin dicapai.",
      detail: "Brief & discovery",
    },
    {
      number: "02",
      title: "Perancangan",
      description:
        "Struktur halaman dan arah visual disusun agar informasi mudah dipahami dan sesuai karakter brand.",
      detail: "Structure & design",
    },
    {
      number: "03",
      title: "Pengembangan",
      description:
        "Desain diterjemahkan menjadi website responsif, lalu fitur dan navigasi diperiksa di berbagai ukuran layar.",
      detail: "Build & responsive",
    },
    {
      number: "04",
      title: "Peluncuran",
      description:
        "Kita lakukan pemeriksaan akhir, lalu siapkan website untuk dipublikasikan sesuai ruang lingkup proyek.",
      detail: "Final check & launch",
    },
  ];

  return (
    <section
      id="process"
      className="scroll-mt-0 border-t border-white/10 bg-[#111111] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
              <span className="h-2 w-2 bg-[#c9ff57]" />
              How it works
            </p>

            <h2 className="max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.075em]">
              Dari brief
              <br />
              <span className="text-white/40">sampai online.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/65 sm:text-base lg:justify-self-end lg:pb-2">
            Alur kerja yang jelas membantu kita menjaga arah proyek,
            menyepakati prioritas, dan mengurangi revisi yang tidak perlu.
          </p>
        </div>

        {/* Process timeline */}
        <div className="mt-9 border-t border-white/20 sm:mt-12 lg:mt-16">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group grid grid-cols-[44px_minmax(0,1fr)] gap-4 border-b border-white/15 py-7 sm:grid-cols-[70px_minmax(0,0.9fr)_minmax(0,1fr)] sm:gap-6 sm:py-8 lg:grid-cols-[100px_minmax(0,0.9fr)_minmax(0,1fr)_180px] lg:items-center lg:gap-8 lg:py-9"
            >
              <span className="pt-1 text-sm font-medium tabular-nums text-[#c9ff57] sm:text-base">
                {step.number}
              </span>

              <h3 className="text-2xl font-semibold tracking-[-0.06em] text-white transition-colors duration-200 group-hover:text-[#c9ff57] sm:text-3xl lg:text-4xl">
                {step.title}
              </h3>

              <p className="col-start-2 max-w-xl text-sm leading-7 text-white/60 sm:col-start-2 sm:col-span-2 sm:row-start-2 lg:col-start-auto lg:col-span-1 lg:row-start-auto lg:text-[15px]">
                {step.description}
              </p>

              <span className="col-start-2 mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:col-start-1 sm:mt-0 sm:row-start-2 lg:col-start-auto lg:row-start-auto lg:justify-self-end lg:text-right">
                {step.detail}
              </span>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-white/45">
            Timeline dan tahapan dapat menyesuaikan kompleksitas serta
            ruang lingkup proyek yang disepakati.
          </p>

          <a
            href="#contact"
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 border-b-2 border-[#c9ff57] pb-2 text-sm font-semibold text-white transition-colors hover:text-[#c9ff57]"
          >
            Mulai dengan diskusi
            <ArrowUpRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const packages = [
    {
      name: "Starter",
      price: "750.000",
      description: "Untuk bisnis yang butuh kehadiran online yang profesional.",
      features: [
        "1 halaman landing page",
        "Responsive desktop & mobile",
        "Tombol WhatsApp",
        "Formulir atau CTA kontak sederhana",
        "2 putaran revisi",
      ],
      featured: false,
      label: "For getting started",
    },
    {
      name: "Business",
      price: "1.500.000",
      description: "Untuk bisnis yang membutuhkan informasi lebih lengkap.",
      features: [
        "Hingga 5 halaman",
        "Responsive design",
        "Section layanan & profil bisnis",
        "Integrasi WhatsApp",
        "SEO dasar",
        "2 putaran revisi",
      ],
      featured: true,
      label: "Most versatile",
    },
    {
      name: "Showcase",
      price: "2.500.000",
      description: "Untuk brand yang ingin menampilkan produk atau portofolio.",
      features: [
        "Hingga 6 halaman",
        "Desain visual lebih custom",
        "Galeri produk atau portofolio",
        "Integrasi WhatsApp",
        "SEO dasar",
        "3 putaran revisi",
      ],
      featured: false,
      label: "For growing brands",
    },
  ];

  return (
    <section
      id="pricing"
      className="border-t border-black/10 bg-[#f4f4ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
              <span className="h-2 w-2 bg-[#c9ff57]" />
              Project investment
            </p>
            <h2 className="text-[clamp(2.7rem,6.5vw,6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.075em] text-neutral-950">
              Pilih yang
              <br />
              <span className="text-neutral-400">lo butuhkan.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-neutral-600 sm:text-base lg:justify-self-end">
            Pilih paket sesuai kebutuhan. Biaya domain, hosting, dan fitur
            tambahan dibahas terpisah sebelum proyek dimulai.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:mt-9 lg:grid-cols-3">
          {packages.map((item, index) => (
            <article
              key={item.name}
              className={`relative flex flex-col border p-5 sm:p-7 ${
                item.featured
                  ? "border-[#171717] bg-[#171717] text-white"
                  : "border-black/10 bg-[#f4f4ef] text-neutral-950"
              }`}
            >
              {item.featured && (
                <span className="absolute right-4 top-4 bg-[#c9ff57] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-neutral-950">
                  Recommended
                </span>
              )}

              <div className="flex items-center justify-between">
                <span className={`text-xs tabular-nums ${item.featured ? "text-white/45" : "text-neutral-400"}`}>
                  / 0{index + 1}
                </span>
                <span className={`h-2 w-2 ${item.featured ? "bg-[#c9ff57]" : "bg-neutral-300"}`} />
              </div>

              <p className={`mt-7 text-[9px] font-semibold uppercase tracking-[0.14em] ${item.featured ? "text-white/45" : "text-neutral-500"}`}>
                {item.label}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.06em] sm:text-3xl">
                {item.name}
              </h3>
              <p className={`mt-3 min-h-12 text-sm leading-6 ${item.featured ? "text-white/60" : "text-neutral-600"}`}>
                {item.description}
              </p>

              <div className="mt-5">
                <p className={`text-[9px] font-semibold uppercase tracking-[0.14em] ${item.featured ? "text-white/45" : "text-neutral-500"}`}>
                  Project fee
                </p>
                <p className="mt-1 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                  <span className="mr-1 text-sm font-medium tracking-normal">Rp</span>
                  {item.price}
                </p>
                <p className={`mt-1 text-[10px] ${item.featured ? "text-white/40" : "text-neutral-400"}`}>
                  Harga awal / per proyek
                </p>
              </div>

              <div className={`mt-6 border-t pt-5 ${item.featured ? "border-white/15" : "border-black/10"}`}>
                <p className={`text-[9px] font-semibold uppercase tracking-[0.14em] ${item.featured ? "text-white/45" : "text-neutral-500"}`}>
                  Yang termasuk
                </p>
                <ul className="mt-4 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-5">
                      <span aria-hidden="true" className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${item.featured ? "bg-[#c9ff57]" : "bg-neutral-400"}`} />
                      <span className={item.featured ? "text-white/80" : "text-neutral-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(`Halo Iqbal, saya tertarik dengan paket ${item.name} (Rp ${item.price}). Boleh konsultasi?`)}`}
                target="_blank"
                rel="noreferrer"
                className={`group mt-7 flex min-h-11 items-center justify-between gap-3 px-4 text-sm font-semibold transition-colors ${
                  item.featured
                    ? "bg-[#c9ff57] text-neutral-950 hover:bg-white"
                    : "border border-black/15 text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                }`}
              >
                Pilih paket {item.name}
                <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-neutral-500">
          Harga belum termasuk domain, hosting, layanan pihak ketiga, dan fitur di luar ruang lingkup paket. Detail final disepakati sebelum pengerjaan.
        </p>
      </div>
    </section>
  );
}

export function ContactSection() {
  const contactItems = [
    {
      number: "01",
      label: "Project inquiry",
      value: "Diskusi proyek baru",
    },
    {
      number: "02",
      label: "Collaboration",
      value: "Kolaborasi & partnership",
    },
    {
      number: "03",
      label: "Questions",
      value: "Tanya layanan website",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Halo Iqbal, saya tertarik untuk diskusi tentang pembuatan website. Boleh minta informasi lebih lanjut?"
  );

  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="scroll-mt-0 border-t border-white/10 bg-[#111111] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
              <span className="h-2 w-2 bg-[#c9ff57]" />
              Let's work together
            </p>

            <h2 className="max-w-5xl text-[clamp(3.2rem,9vw,8.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.085em]">
              Punya ide
              <br />
              <span className="text-white/35">untuk bisnis</span>
              <br />
              <span className="text-[#c9ff57]">lo?</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/60 sm:mt-10 sm:text-base">
              Ceritain kebutuhan bisnis dan website yang ingin lo
              bangun. Kita mulai dari diskusi sederhana, lalu tentukan
              solusi yang paling masuk akal untuk proyek lo.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex min-h-14 w-full items-center justify-between gap-5 bg-[#c9ff57] px-5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-white sm:mt-10 sm:w-auto sm:min-w-[290px] sm:px-6"
            >
              <span>Mulai diskusi via WhatsApp</span>
              <ArrowUpRight
                size={20}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <p className="mt-4 text-[10px] leading-5 text-white/35">
              Tanpa komitmen di awal. Kita bahas kebutuhan proyek lo
              terlebih dahulu.
            </p>
          </div>

          <div className="flex flex-col justify-between border-t border-white/15 pt-7 lg:border-t-0 lg:pt-0">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                What can we discuss?
              </p>

              <div className="mt-5">
                {contactItems.map((item) => (
                  <div
                    key={item.number}
                    className="grid grid-cols-[38px_minmax(0,1fr)] gap-3 border-b border-white/15 py-5 sm:grid-cols-[48px_minmax(0,1fr)]"
                  >
                    <span className="pt-1 text-xs tabular-nums text-[#c9ff57]">
                      / {item.number}
                    </span>

                    <div>
                      <p className="text-base font-medium tracking-tight sm:text-lg">
                        {item.value}
                      </p>
                      <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/35">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9 border border-white/15 p-5 sm:p-6 lg:mt-16">
              <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/45">
                <span className="h-2 w-2 bg-[#c9ff57]" />
                A good place to start
              </span>

              <p className="mt-4 max-w-sm text-xl font-medium leading-snug tracking-[-0.04em] sm:text-2xl">
                Nggak harus punya brief lengkap. Ide awal pun cukup
                untuk memulai percakapan.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#111318] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xs font-bold text-[#111318]">
            {brand.shortName}
          </span>
          <span className="text-sm font-semibold">
            {brand.name}<span className="text-[#c9ff57]">.</span>
          </span>
        </Link>
        <p className="text-xs leading-5 text-white/45">
          Independent web developer · Design with purpose, build with care.
        </p>
        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}

import React from "react";
import {
  Server,
  ShieldCheck,
  ClipboardCheck,
  Users,
  Headphones,
  Wallet,
} from "lucide-react";

const features = [
  { icon: Server, title: "Data Backup" },
  { icon: ShieldCheck, title: "Data Protection" },
  { icon: ClipboardCheck, title: "Quality Deliverance" },
  { icon: Users, title: "Dedicated Team" },
  { icon: Headphones, title: "Professional Support" },
  { icon: Wallet, title: "Affordable Pricing" },
];

/* Generic silhouette avatar — no real photo used to avoid misattribution. */
const Avatar = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0 rounded-full">
    <circle cx="32" cy="32" r="32" fill="#DDEDE6" />
    <circle cx="32" cy="26" r="12" fill="#2C8566" />
    <path d="M8 60c2-13 13-20 24-20s22 7 24 20" fill="#2C8566" />
  </svg>
);

export default function KeyFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#2C8566]">
      {/* top curved navy band */}
      <div className="relative">
        <svg
          viewBox="0 0 1280 60"
          preserveAspectRatio="none"
          className="block h-14 w-full text-[#0C2C50] sm:h-16"
        >
          <path
            d="M0,0 L1280,0 L1280,30 C960,55 320,55 0,30 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* faint wandering line, top-left */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-56 w-72 opacity-[0.15]"
        viewBox="0 0 300 220"
        fill="none"
      >
        <path
          d="M40 0c40 40-40 60 0 100s70 10 60 60-60 30-40 60"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>

      {/* dotted grid, top-right */}
      <svg
        className="pointer-events-none absolute right-8 top-8 h-24 w-48 opacity-40 sm:right-16"
        viewBox="0 0 200 100"
      >
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 18 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 11 + 4}
              cy={row * 11 + 4}
              r="1.4"
              fill="white"
            />
          ))
        )}
      </svg>

      {/* large soft blob, right side */}
      <svg
        className="pointer-events-none absolute -right-16 top-40 h-96 w-96 opacity-90"
        viewBox="0 0 400 400"
      >
        <path
          d="M320 60c50 40 70 110 50 170s-90 100-160 90-130-60-140-130 30-120 90-150 110-20 160 20z"
          fill="#5FB49B"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-10 sm:px-10 lg:px-14">
        {/* heading */}
        <div className="max-w-xl">
          <h2 className="text-[28px] font-bold leading-tight text-white sm:text-3xl">
            Our Key Features
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            We always use the most avant-garde technology to design and
            develop your website and application. We work to unfold your
            success.
          </p>
        </div>

        {/* feature cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {features.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-white px-3 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-9 w-9 items-center justify-center text-[#2C8566] transition-transform duration-300 group-hover:scale-110">
                <Icon size={30} strokeWidth={1.6} />
              </span>
              <span className="text-[13px] font-semibold leading-snug text-[#0C2C50]">
                {title}
              </span>
            </div>
          ))}
        </div>

        {/* bottom row: tagline + testimonial card */}
        <div className="relative mt-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <h3 className="text-2xl font-bold leading-snug text-white sm:text-[28px]">
            We're taking brands beyond
            <br className="hidden sm:block" /> their competition.
          </h3>

          <div className="relative z-10 rounded-2xl bg-white p-6 shadow-xl sm:p-7">
            <div className="flex items-start gap-4">
              <Avatar />
              <p className="text-[15px] font-semibold leading-snug text-[#0C2C50]">
                Our customers never have any problem with competition in
                their business
              </p>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-slate-500">
              Developing and designing a website application may be harder
              and more competitive for others but not for us. We are beyond
              the competition and suggest you do the same with our services.
              Our digital marketing and app development services give you
              the courage and wings to fly unlimited.
            </p>
          </div>
        </div>
      </div>

      {/* bottom curved navy band */}
      <svg
        viewBox="0 0 1280 60"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-14 w-full text-[#0C2C50] sm:h-16"
      >
        <path d="M0,30 C320,5 960,5 1280,30 L1280,60 L0,60 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
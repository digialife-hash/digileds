import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  Heart,
} from "lucide-react";

/* =========================
   SOCIAL ICONS
========================= */

const Facebook = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const Youtube = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

/* =========================
   DATA
========================= */

const columns = [
  {
    title: "Company",
    links: [
      "About Us",
      "Contact Us",
      "Why Choose Us",
      "Career",
      "Our Team",
      "Development Process",
      "Our Portfolio",
    ],
  },
  {
    title: "Services",
    links: [
      "Web Development",
      "Mobile App Development",
      "e-Commerce Development",
      "Digital Marketing",
      "Custom Software",
      "UI/UX Design",
      "Graphic & Branding",
    ],
  },
  {
    title: "Hire Resource",
    links: [
      "PHP Developer",
      "React Developer",
      "UI/UX Designer",
      "Digital Marketing",
      "Content Marketing",
      "Business Development",
      "Software Development",
    ],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

const contacts = [
  {
    icon: Phone,
    label: "Phone Number",
    value: "9211954915",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@digitalalife.com",
  },
  {
    icon: MapPin,
    label: "Office Location",
    value:
      "Singhal Tower, Labour chowk, Deepak Vihar, Khora Colony, Sector 58, Noida, Uttar Pradesh 201309",
  },
];

/* =========================
   FOOTER
========================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071D35] text-white">

      {/* =========================
          BACKGROUND EFFECTS
      ========================= */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#2C8566]/15 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#2C8566]/10 blur-[110px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0C2C50]/60 blur-[120px]" />

      {/* Decorative grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-10">

          {/* =========================
              BRAND
          ========================= */}

          <div>

            {/* Logo */}

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/10">

                <span className="text-lg font-black tracking-tight">
                  <span className="text-[#0C2C50]">D</span>
                  <span className="text-[#2C8566]">A</span>
                </span>

              </div>

              <div>

                <div className="text-[15px] font-bold tracking-[0.08em]">
                  DIGITAL
                  <span className="text-[#2C8566]">ALIFE</span>
                </div>

                <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">
                  Pvt. Ltd.
                </div>

              </div>

            </div>

            {/* Description */}

            <p className="mt-6 max-w-sm text-[14px] leading-7 text-white/55">
              Everyone wants to{" "}
              <span className="font-semibold text-[#4AAE85]">live</span> on
              top of the mountain, but all the happiness and growth occurs
              while you're climbing it.
            </p>

            {/* Social */}

            <div className="mt-7">

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Follow Us
              </p>

              <div className="flex gap-2">

                {socials.map(({ icon: Icon, label }) => (

                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-[#2C8566]/50 hover:bg-[#2C8566] hover:text-white hover:shadow-lg hover:shadow-[#2C8566]/20"
                  >
                    <Icon size={17} />
                  </a>

                ))}

              </div>

            </div>

          </div>

          {/* =========================
              LINK COLUMNS
          ========================= */}

          {columns.map((col) => (

            <div key={col.title}>

              <div className="mb-6 flex items-center gap-3">

                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                  {col.title}
                </h3>

                <span className="h-px w-8 bg-[#2C8566]/60" />

              </div>

              <ul className="space-y-3">

                {col.links.map((link) => (

                  <li key={link}>

                    <a
                      href="#"
                      className="group flex w-fit items-center gap-1.5 text-[14px] text-white/50 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >

                      <ChevronRight
                        size={13}
                        className="text-[#2C8566] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />

                      <span>{link}</span>

                    </a>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* =========================
            CONTACT SECTION
        ========================= */}

        <div className="mt-14 border-t border-white/10 pt-10">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.6fr_auto]">

            {contacts.map(({ icon: Icon, label, value }) => (

              <div
                key={label}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#2C8566]/30 hover:bg-white/[0.045]"
              >

                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C8566]/10 text-[#4AAE85] transition-colors duration-300 group-hover:bg-[#2C8566] group-hover:text-white">
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                      {label}
                    </p>

                    <p className="mt-1.5 break-words text-[13px] font-medium leading-5 text-white/75">
                      {value}
                    </p>

                  </div>

                </div>

              </div>

            ))}

            {/* Company profile */}

            <a
              href="#"
              className="group flex min-h-[74px] items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-bold text-[#0C2C50] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2C8566] hover:text-white hover:shadow-xl hover:shadow-[#2C8566]/20"
            >

              Company Profile

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </a>

          </div>

        </div>

      </div>

      {/* =========================
          BOTTOM BAR
      ========================= */}

      <div className="relative border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

          <p className="text-center text-[12px] text-white/35 md:text-left">
            © 2026 DigitalAlife Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-white/35">

            <a
              href="#"
              className="transition-colors hover:text-[#4AAE85]"
            >
              Refund Policy
            </a>

            <span className="h-1 w-1 rounded-full bg-white/15" />

            <a
              href="#"
              className="transition-colors hover:text-[#4AAE85]"
            >
              Terms & Conditions
            </a>

            <span className="h-1 w-1 rounded-full bg-white/15" />

            <a
              href="#"
              className="transition-colors hover:text-[#4AAE85]"
            >
              Privacy Policy
            </a>

          </div>

          <div className="hidden items-center gap-1.5 text-[11px] text-white/25 lg:flex">

            Made with
            <Heart
              size={11}
              className="fill-[#2C8566] text-[#2C8566]"
            />
            by DigitalAlife

          </div>

        </div>

      </div>

    </footer>
  );
}
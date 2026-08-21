import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

/* lucide-react no longer ships brand/social icons, so these are
   small inline SVGs kept visually consistent with lucide's style
   (24x24 viewBox, stroke-based, currentColor). */
const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

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
    title: "Service",
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0C2C50] text-white">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[#2C8566]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2C8566]/10 blur-3xl" />

      {/* signature: faint ascending "peaks" line referencing the brand copy */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full opacity-[0.07]"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,90 150,55 300,80 450,20 600,60 750,10 900,50 1050,25 1200,45"
          fill="none"
          stroke="#2C8566"
          strokeWidth="2"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <span className="font-serif text-lg font-extrabold tracking-tight">
                  <span className="text-[#0C2C50]">D</span>
                  <span className="text-[#2C8566]">A</span>
                </span>
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide">
                  <span className="text-white">DIGITAL</span>{" "}
                  <span className="text-[#2C8566]">ALIFE</span>
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/70">
              Everyone wants to{" "}
              <span className="font-medium text-[#2C8566]">live</span> on top
              of the mountain, but{" "}
              <span className="font-medium text-[#2C8566]">all</span> the
              happiness and growth occurs while you're climbing it.
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Follow Us
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                {socials.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2C8566] hover:bg-[#2C8566] hover:text-[#0C2C50]"
                  >
                    <Icon size={15} strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2C8566]">
                {col.title}
              </h4>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1.5 text-[14.5px] text-white/65 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#2C8566] transition-all duration-200 group-hover:w-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr_auto] lg:items-center">
          {contacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#2C8566]">
                <Icon size={17} strokeWidth={2} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/40">
                  {label}
                </p>
                <p className="mt-1 text-[14.5px] font-medium leading-snug text-white/90">
                  {value}
                </p>
              </div>
            </div>
          ))}

          <a
            href="#"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0C2C50] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
          >
            Company Profile
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:px-10 sm:text-left lg:px-14">
          <p className="text-[13px] text-white/50">
            Copyright &copy; 2026. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-white/50">
            <a href="#" className="transition-colors hover:text-[#2C8566]">
              Refund Policy
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="#" className="transition-colors hover:text-[#2C8566]">
              Terms &amp; Conditions
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="#" className="transition-colors hover:text-[#2C8566]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
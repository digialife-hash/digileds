import React from "react";
import {Link} from 'react-router-dom'
const services = [
    {
        path : '/services/web-development',
        number: "01",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 5h16v14H4z" />
                <path d="M8 9h8M8 13h5" />
            </svg>
        ),
        title: "Web Development",
        short: "Websites & Web Apps",
        description:
            "High-performance, scalable and conversion-focused websites and web applications built around your business goals.",
    },
    {
        number: "02",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="7" y="3" width="10" height="18" rx="2" />
                <path d="M10 6h4M11 18h2" />
            </svg>
        ),
        title: "Mobile App Development",
        short: "iOS & Android Apps",
        description:
            "Modern mobile experiences designed for performance, usability and long-term business growth across platforms.",
    },
    {
        number: "03",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
            </svg>
        ),
        title: "Software Development",
        short: "Custom Business Software",
        description:
            "Custom software solutions that automate workflows, improve productivity and solve complex business challenges.",
    },
    {
        number: "04",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="8" />
                <path d="M9 15l6-6M9 9h.01M15 15h.01" />
            </svg>
        ),
        title: "UI/UX Design",
        short: "Digital Experiences",
        description:
            "Clean, intuitive and engaging interfaces that make your digital products easier to use and impossible to ignore.",
    },
    {
        number: "05",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 17l4-5 4 3 5-7 3 4" />
                <path d="M4 20h16" />
            </svg>
        ),
        title: "Digital Marketing",
        short: "Growth & Performance",
        description:
            "Data-driven digital marketing strategies designed to increase visibility, generate leads and accelerate growth.",
    },
    {
        number: "06",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16v16H4z" />
                <circle cx="9" cy="9" r="2" />
                <path d="M20 15l-4-4-7 7" />
            </svg>
        ),
        title: "Graphic & Branding",
        short: "Brand Identity",
        description:
            "Distinctive visual identities, graphics and branding systems that make your business memorable and trustworthy.",
    },
];

function Services() {
    return (
        <section className="relative overflow-hidden bg-[#f7faf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#2f9e6f]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#0c2a4e]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-20">

                    <div>
                        <div className="mb-5 inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-[#2f9e6f]" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#2f9e6f]">
                                What We Do
                            </span>
                        </div>

                        <h2 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0c2a4e] sm:text-5xl lg:text-[56px]">
                            Technology that
                            <span className="relative ml-2 inline-block text-[#2f9e6f]">
                                moves business
                            </span>{" "}
                            forward.
                        </h2>
                    </div>

                    <div className="lg:pb-1">
                        <p className="max-w-2xl text-base leading-8 text-slate-500">
                            Digital Alife helps businesses transform ideas into
                            powerful digital products. From websites and mobile
                            applications to custom software and digital growth,
                            we build solutions designed for real-world impact.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-6">
                            <div>
                                <p className="text-2xl font-bold text-[#0c2a4e]">
                                    6+
                                </p>
                                <p className="text-xs text-slate-500">
                                    Core Services
                                </p>
                            </div>

                            <div className="h-10 w-px bg-slate-200" />

                            <div>
                                <p className="text-2xl font-bold text-[#0c2a4e]">
                                    360°
                                </p>
                                <p className="text-xs text-slate-500">
                                    Digital Solutions
                                </p>
                            </div>

                            <div className="h-10 w-px bg-slate-200" />

                            <div>
                                <p className="text-2xl font-bold text-[#0c2a4e]">
                                    100%
                                </p>
                                <p className="text-xs text-slate-500">
                                    Client Focused
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= SERVICES ================= */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#2f9e6f]/30 hover:shadow-[0_25px_60px_rgba(12,42,78,0.10)]"
                        >

                            {/* Hover gradient */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2f9e6f]/[0.04] via-transparent to-[#0c2a4e]/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Number */}
                            <div className="absolute right-6 top-5 text-5xl font-black tracking-tight text-slate-100 transition-colors duration-500 group-hover:text-[#2f9e6f]/10">
                                {service.number}
                            </div>

                            <div className="relative">

                                {/* Icon */}
                                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf7f1] text-[#2f9e6f] transition-all duration-500 group-hover:bg-[#2f9e6f] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#2f9e6f]/20">
                                    <div className="h-6 w-6">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Small category */}
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2f9e6f]">
                                    {service.short}
                                </p>

                                {/* Title */}
                                <h3 className="text-xl font-bold tracking-tight text-[#0c2a4e] transition-colors duration-300 group-hover:text-[#2f9e6f]">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    {service.description}
                                </p>

                                {/* Learn more */}
                                <div className="mt-7 flex items-center gap-2 text-xs font-bold text-[#0c2a4e] transition-all duration-300 group-hover:gap-3 group-hover:text-[#2f9e6f]">
                                   <Link to={service.path}> <span>Explore Service</span></Link>

                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M4 10h11" />
                                        <path d="M11 5l5 5-5 5" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#2f9e6f] transition-all duration-500 group-hover:w-full" />
                        </article>
                    ))}
                </div>

                {/* ================= CTA ================= */}
                <div className="relative mt-20 overflow-hidden rounded-3xl bg-[#0c2a4e] px-7 py-10 sm:px-10 lg:px-14 lg:py-12">

                    {/* CTA decorations */}
                    <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#2f9e6f]/20 blur-3xl" />
                    <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#2f9e6f]/10 blur-3xl" />

                    <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        <div className="max-w-2xl">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-7 bg-[#2f9e6f]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6ed0a5]">
                                    Let's Build Something Great
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                                Have an idea?
                                <span className="text-[#5fc998]">
                                    {" "}Let's turn it into reality.
                                </span>
                            </h3>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                                Talk to our experts and discover how the right
                                technology can help your business grow faster.
                            </p>
                        </div>

                        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                            <a
                                href="/quote"
                                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#2f9e6f] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-[#3caf7e] hover:shadow-[#2f9e6f]/20"
                            >
                                Get a Free Consultation

                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M4 10h11" />
                                    <path d="M11 5l5 5-5 5" />
                                </svg>
                            </a>

                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:border-[#2f9e6f] hover:bg-[#2f9e6f]/10"
                            >
                                Talk To Our Expert
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Services;
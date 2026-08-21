import React from "react";
import HeroHeading from "./HeroHeading";

function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0A1930]">
      {/* Background Video — hidden on small screens (mobile), shown from md breakpoint up.
          On mobile the section's own bg-[#0A1930] (brand navy) shows instead. */}
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/videos/hero1.mp4"
      />

      {/* Mobile-only fallback background: soft navy → green radial tint,
          matches the brand palette since there's no video here */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(46,158,109,0.14), transparent 60%), linear-gradient(180deg, #0A1930 0%, #071427 100%)",
        }}
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/45" /> */}

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#05060c]/70 via-transparent to-[#05060c]/90" /> */}

      {/* Side Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05060c]/70 via-transparent to-[#05060c]/60" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E9E6D]/15 blur-[100px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] md:blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 text-center sm:px-6">

        {/* Main Heading */}
        {/* <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Your{" "}
          <span className="bg-gradient-to-r from-[#3FBE8A] via-[#2E9E6D] to-[#1F7A54] bg-clip-text text-transparent">
            Trusted
          </span>
          <span className="block">Development Partner</span>
        </h1> */}

        <HeroHeading />

        {/* Description */}
        <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-300/90 sm:mt-7 sm:text-base sm:leading-7 md:text-lg">
          Digital Alife is a prominent Web-App development and digital
          marketing agency in India. We are a certified and trusted website
          design and development agency all over India. Millions of people
          are getting our services and reinforcing their brands with us.
        </p>

        {/* CTA Buttons */}
        <div className="z-[100] mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="/quote"
            className="w-full rounded-[13px] bg-[#2f9e6f] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_10px_25px_rgba(16,40,74,0.4)] transition hover:bg-[#0B1E38] sm:w-auto"
          >
            Get a Free Consultation
          </a>

          <a
            href="/contact"
            className="w-full rounded-[13px] border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-[#2E9E6D]/60 hover:bg-[#2E9E6D]/10 sm:w-auto"
          >
            Talk To Our Expert
          </a>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-6 flex flex-col items-center gap-3 text-slate-400 sm:bottom-10">
          <span className="text-[9px] uppercase tracking-[0.3em] sm:text-[10px]">
            Scroll to explore
          </span>

          <div className="flex h-9 w-5 justify-center rounded-full border border-white/30 p-1.5 sm:h-10 sm:w-6">
            <span className="h-2 w-1 animate-bounce rounded-full bg-[#2E9E6D]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
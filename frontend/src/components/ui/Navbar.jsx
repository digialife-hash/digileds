import React, { useEffect, useRef, useState } from "react";
function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  /* ================= SERVICES DATA ================= */

  const services = [
    { name: "Web Development", icon: "🌐", bg: "bg-cyan-100" },
    { name: "Mobile App Development", icon: "📱", bg: "bg-red-100" },
    { name: "e-Commerce", icon: "🛒", bg: "bg-lime-100" },
    { name: "Digital Marketing", icon: "🚀", bg: "bg-indigo-100" },
    { name: "Google SEO", icon: "🔍", bg: "bg-yellow-100" },
    { name: "Social Media Handling", icon: "📱", bg: "bg-pink-100" },
    { name: "Meta Ads", icon: "📣", bg: "bg-blue-100" },
    { name: "Google Ads", icon: "📊", bg: "bg-green-100" },
    { name: "WhatsApp Marketing", icon: "💬", bg: "bg-emerald-100" },
    { name: "Email Marketing", icon: "✉️", bg: "bg-orange-100" },
    { name: "Video Editing", icon: "🎬", bg: "bg-purple-100" },
    { name: "Custom Software", icon: "🧩", bg: "bg-violet-100" },
    { name: "UI/UX Design", icon: "🎨", bg: "bg-rose-100" },
    { name: "Graphics Design", icon: "✒️", bg: "bg-amber-100" },
  ];

  /* ================= CLOSE DROPDOWN OUTSIDE ================= */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }

      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target)
      ) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* ================= STICKY NAVBAR ON SCROLL ================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================= TOGGLE FUNCTIONS ================= */

  const toggleAbout = () => {
    setIsAboutOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsAboutOpen(false);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  /* ================= JSX ================= */

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`
          sticky top-0 z-[900] w-full px-3 transition-all duration-300
          ${isScrolled ? "pt-0" : "pt-2"}
        `}
      >
        <div
        style={{
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.12)
  `,
}}
          className={`
            flex min-h-[76px] w-full items-center justify-between
            bg-white
            rounded-[24px]
            px-6 py-3
            transition-all duration-300
            ${
              isScrolled
                ? " shadow-[0_8px_24px_rgba(15,40,74,0.14)]"
                : "rounded-[24px] text-white shadow-[0_8px_24px_rgba(15,40,74,0.10)]"
            }
          `}
        >
          {/* ================= LOGO ================= */}

          <div className="flex items-center gap-3">
            <div
            style={{overflow:'hidden'}}
              className="
                flex h-12 w-50 items-center justify-center
               
              "
            >
              {/* <div className="flex items-center text-[21px] font-extrabold leading-none">
                <span className="italic text-[#075985]">D</span>
                <span className="italic text-[#374151]">A</span>
              </div> */}
              <img src="https://digitalalife.com/includes/brand/logo-dark.png?v=1771691019" alt="not found img logo " />
            </div>

            {/* <h2 className="text-[23px] font-semibold tracking-tight text-[#7657f6]">
              Digileads
            </h2> */}
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <div className="hidden items-center gap-5 lg:flex">

            {/* HOME */}

            <a
              href="/"
              className="
                rounded-xl px-3 py-2
                text-sm font-medium
                text-[#334155]
                transition
                hover:text-[#2E9E6D]
              "
            >
              Home
            </a>

            {/* =================================================
                COMPANY
            ================================================= */}

            <div ref={aboutRef} className="relative">
              <button
                type="button"
                onClick={toggleAbout}
                className={`
                  flex items-center gap-1.5
                  rounded-xl px-3 py-2
                  text-sm font-medium
                  transition
                  ${
                    isAboutOpen
                      ? "text-[#2E9E6D]"
                      : "text-[#334155] hover:text-[#2E9E6D]"
                  }
                `}
              >
                Company

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`
                    transition-transform duration-300
                    ${isAboutOpen ? "rotate-180" : ""}
                  `}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* COMPANY DROPDOWN */}

              <div
                className={`
                  absolute left-1/2 top-full mt-3
                  w-[280px]
                  -translate-x-1/2
                  origin-top
                  transition-all duration-300
                  ${
                    isAboutOpen
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
                  }
                `}
              >
                {/* Arrow */}

                <div
                  className="
                    absolute -top-1.5 left-1/2
                    h-3 w-3
                    -translate-x-1/2
                    rotate-45
                    bg-white
                  "
                />

                <div
                  className="
                    relative overflow-hidden
                    rounded-2xl
                    border border-slate-100
                    bg-white p-2
                    shadow-[0_15px_40px_rgba(15,23,42,0.18)]
                  "
                >
                  <div className="space-y-0.5">

                    {/* ABOUT US */}

                    <a
                      href="/about"
                      onClick={() => setIsAboutOpen(false)}
                      className="
                        group flex items-center gap-3
                        rounded-xl px-2.5 py-2
                        transition-all duration-200
                        hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex h-8 w-8 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-cyan-100
                          text-cyan-500
                          transition-all
                          group-hover:scale-110
                        "
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="2"
                          />

                          <circle
                            cx="12"
                            cy="9"
                            r="2.5"
                            fill="currentColor"
                          />

                          <path
                            d="M7.5 18C8.2 15.5 9.8 14 12 14C14.2 14 15.8 15.5 16.5 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <span
                        className="
                          flex-1
                          text-[14px] font-medium
                          text-slate-600
                          group-hover:text-[#2E9E6D]
                        "
                      >
                        About Us
                      </span>

                      <span
                        className="
                          text-[#2E9E6D]
                          opacity-0
                          transition-all
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      >
                        →
                      </span>
                    </a>

                    {/* WHY CHOOSE US */}

                    <a
                      href="/why-us"
                      onClick={() => setIsAboutOpen(false)}
                      className="
                        group flex items-center gap-3
                        rounded-xl px-2.5 py-2
                        transition-all duration-200
                        hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex h-8 w-8 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-red-100
                          text-red-500
                          transition-all
                          group-hover:scale-110
                        "
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 9V6C7 4.9 7.9 4 9 4H15C16.1 4 17 4.9 17 6V9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />

                          <rect
                            x="4"
                            y="8"
                            width="16"
                            height="11"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="2"
                          />

                          <path
                            d="M9 13H15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <span
                        className="
                          flex-1
                          text-[14px] font-medium
                          text-slate-600
                          group-hover:text-[#2E9E6D]
                        "
                      >
                        Why Choose Us
                      </span>

                      <span
                        className="
                          text-[#2E9E6D]
                          opacity-0
                          transition-all
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      >
                        →
                      </span>
                    </a>

                    {/* CAREERS */}

                    <a
                      href="/careers"
                      onClick={() => setIsAboutOpen(false)}
                      className="
                        group flex items-center gap-3
                        rounded-xl px-2.5 py-2
                        transition-all duration-200
                        hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex h-8 w-8 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-green-100
                          text-green-600
                          transition-all
                          group-hover:scale-110
                        "
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="2"
                          />

                          <path
                            d="M9 12L11 14L15 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <span
                        className="
                          flex-1
                          text-[14px] font-medium
                          text-slate-600
                          group-hover:text-[#2E9E6D]
                        "
                      >
                        Digital Alife Career
                      </span>

                      <span
                        className="
                          text-[#2E9E6D]
                          opacity-0
                          transition-all
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      >
                        →
                      </span>
                    </a>

                    {/* DEVELOPMENT PROCESS */}

                    <a
                      href="/development-process"
                      onClick={() => setIsAboutOpen(false)}
                      className="
                        group flex items-center gap-3
                        rounded-xl px-2.5 py-2
                        transition-all duration-200
                        hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex h-8 w-8 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-indigo-100
                          text-[#10284A]
                          transition-all
                          group-hover:scale-110
                        "
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 4H18V20H6V4Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M9 8H15M9 12H15M9 16H13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <span
                        className="
                          flex-1
                          text-[14px] font-medium
                          text-slate-600
                          group-hover:text-[#2E9E6D]
                        "
                      >
                        Development Process
                      </span>

                      <span
                        className="
                          text-[#2E9E6D]
                          opacity-0
                          transition-all
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                SERVICES
            ================================================= */}

            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={toggleServices}
                className={`
                  flex items-center gap-1.5
                  rounded-xl px-3 py-2
                  text-sm font-medium
                  transition
                  ${
                    isServicesOpen
                      ? "text-[#2E9E6D]"
                      : "text-[#334155] hover:text-[#2E9E6D]"
                  }
                `}
              >
                Services

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`
                    transition-transform duration-300
                    ${isServicesOpen ? "rotate-180" : ""}
                  `}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* SERVICES DROPDOWN */}

              <div
                className={`
                  absolute left-1/2 top-full mt-3
                  w-[300px]
                  -translate-x-1/2
                  origin-top
                  transition-all duration-300
                  ${
                    isServicesOpen
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
                  }
                `}
              >
                {/* Arrow */}

                <div
                  className="
                    absolute -top-1.5 left-1/2
                    h-3 w-3
                    -translate-x-1/2
                    rotate-45
                    bg-white
                  "
                />

                <div
                  className="
                    relative max-h-[470px]
                    overflow-y-auto
                    rounded-2xl
                    border border-slate-100
                    bg-white p-2
                    shadow-[0_15px_40px_rgba(15,23,42,0.18)]
                  "
                >
                  <div className="">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={`/services/${service.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="
                          group flex items-center gap-3
                          rounded-xl px-2.5 py-1
                          transition-all duration-200
                          hover:bg-slate-50
                        "
                      >
                        <div
                          className={`
                            flex h-8 w-8 shrink-0
                            items-center justify-center
                            rounded-full
                            ${service.bg}
                            transition-all
                            group-hover:scale-110
                          `}
                        >
                          <span className="text-[15px]">
                            {service.icon}
                          </span>
                        </div>

                        <span
                          className="
                            flex-1
                            text-[13px] font-medium
                            text-slate-600
                            group-hover:text-[#2E9E6D]
                          "
                        >
                          {service.name}
                        </span>

                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="
                            -translate-x-1
                            text-[#2E9E6D]
                            opacity-0
                            transition-all
                            duration-200
                            group-hover:translate-x-0
                            group-hover:opacity-100
                          "
                        >
                          <path
                            d="M5 12H19M13 6L19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>

                  {/* CTA */}

                  <div className="mt-1.5 border-t border-slate-100 pt-1.5">
                    <a
                      href="/quote"
                      onClick={() => setIsServicesOpen(false)}
                      className="
                        flex items-center justify-between
                        rounded-lg
                        bg-[#EAF6F0]
                        px-3 py-2
                        text-[12px] font-semibold
                        text-[#227955]
                        transition
                        hover:bg-[#2E9E6D]
                        hover:text-white
                      "
                    >
                      <span>Need a custom solution?</span>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12H19M13 6L19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PRICING */}

            <a
              href="/pricing"
              className="
                rounded-xl px-3 py-2
                text-sm font-medium
                text-[#334155]
                transition
                hover:text-[#2E9E6D]
              "
            >
              Pricing
            </a>

           

            {/* CAREERS */}

            <a
              href="/careers"
              className="
                rounded-xl px-3 py-2
                text-sm font-medium
                text-[#334155]
                transition
                hover:text-[#2E9E6D]
              "
            >
              Careers
            </a>

            {/* LEAD APPLICATION */}

            <a
              href="/quote"
              className="
                rounded-xl
                bg-[#2E9E6D]
                px-5 py-2.5
                text-sm font-semibold
                text-white
                shadow-[0_5px_12px_rgba(46,158,109,0.25)]
                transition
                hover:bg-[#227955]
              "
            >
              Lead Application
            </a>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-2.5">

            {/* LOGIN */}

            <a
              href="https://digitalalife.in/login"
              className="
                rounded-xl
                border border-[#cdd8ea]
                bg-white
                px-4 py-2
                text-sm font-medium
                text-[#10284A]
                shadow-sm
                transition
                hover:bg-[#F3F6FB]
              "
            >
              Login
            </a>

            {/* REQUEST FREE QUOTE */}

            <a
              href="https://digitalalife.in/contact.php"
              className="
                rounded-xl
                bg-[#10284A]
                px-4 py-2
                text-sm font-semibold
                text-white
                shadow-[0_5px_12px_rgba(16,40,74,0.25)]
                transition
                hover:bg-[#0B1E38]
              "
            >
              Request Free Quote
            </a>

            {/* CONTACT CIRCLE */}

            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-[#10284A]
                shadow-[0_5px_12px_rgba(16,40,74,0.25)]
                transition-all duration-200
                hover:scale-105
                hover:bg-[#0B1E38]
              "
              aria-label="Open Contact"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 10.5C21 15.2 17 19 12 19C10.8 19 9.7 18.8 8.7 18.4L4 20L5.6 15.7C4.6 14.2 4 12.4 4 10.5C4 5.8 8 2 12.5 2C17.5 2 21 5.8 21 10.5Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <circle cx="8.5" cy="10.5" r="1" fill="white" />
                <circle cx="12.5" cy="10.5" r="1" fill="white" />
                <circle cx="16.5" cy="10.5" r="1" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          CONTACT OVERLAY
      ===================================================== */}

      <div
        onClick={closeContact}
        className={`
          fixed inset-0
          z-[9998]
          bg-black/40
          backdrop-blur-[2px]
          transition-all duration-500
          ${
            isContactOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          CONTACT SIDEBAR
      ===================================================== */}

      <aside
        className={`
          fixed
          right-0 top-0
          z-[9999]
          h-screen
          w-full sm:w-[430px]
          bg-white
          shadow-[-10px_0_40px_rgba(0,0,0,0.15)]
          transition-transform
          duration-500
          ease-out
          ${
            isContactOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="h-full overflow-y-auto">

          {/* SIDEBAR HEADER */}

          <div
            className="
              sticky top-0 z-10
              flex items-center justify-between
              border-b border-slate-100
              bg-white
              px-6 py-5
            "
          >
            {/* LOGO */}

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-3xl font-black italic text-[#10284A]">
                  D
                </span>

                <span className="-ml-2 text-3xl font-black italic text-[#2E9E6D]">
                  A
                </span>
              </div>

              <div className="leading-none">
                <h2 className="text-[15px] font-extrabold tracking-wide text-[#111827]">
                  DIGITAL{" "}
                  <span className="text-[#2E9E6D]">
                    ALIFE
                  </span>
                </h2>

                <p className="text-center text-[8px] font-semibold text-slate-500">
                  Pvt Ltd
                </p>
              </div>
            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeContact}
              className="
                group
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border-2 border-[#bfe3d2]
                bg-white
                transition-all duration-300
                hover:rotate-90
                hover:bg-[#EAF6F0]
              "
              aria-label="Close Contact"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* SIDEBAR CONTENT */}

          <div className="px-6 py-8">

            {/* INTRO */}

            <div className="mb-9">
              <span
                className="
                  mb-3 inline-flex
                  items-center gap-2
                  rounded-full
                  bg-[#EAF6F0]
                  px-3 py-1
                  text-xs font-semibold
                  text-[#227955]
                "
              >
                <span
                  className="
                    h-1.5 w-1.5
                    animate-pulse
                    rounded-full
                    bg-[#2E9E6D]
                  "
                />

                Contact Us
              </span>

              <h2 className="text-2xl font-bold text-[#10284A]">
                Get In Touch
              </h2>

              <p className="mt-3 text-[16px] leading-7 text-slate-500">
                For any enquiries, or just to say hello, get in touch and
                contact us.
              </p>
            </div>

            {/* PHONE */}

            <div className="mb-8">
              <p className="mb-3 text-[15px] text-slate-500">
                We're Available 24/7. Call Now.
              </p>

              <div className="space-y-3">

                <a
                  href="tel:9211954915"
                  className="
                    group -mx-2
                    flex items-center gap-4
                    rounded-xl p-2
                    transition
                    hover:bg-[#F0F4FA]
                  "
                >
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-xl
                      bg-[#EAF0FA]
                      text-[#10284A]
                      transition
                      group-hover:bg-[#10284A]
                      group-hover:text-white
                    "
                  >
                    ☎
                  </div>

                  <span className="text-[15px] font-medium text-[#172033]">
                    9211954915
                  </span>
                </a>

                <a
                  href="tel:7678165464"
                  className="
                    group -mx-2
                    flex items-center gap-4
                    rounded-xl p-2
                    transition
                    hover:bg-[#EAF6F0]
                  "
                >
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-xl
                      bg-[#EAF6F0]
                      text-[#2E9E6D]
                      transition
                      group-hover:bg-[#2E9E6D]
                      group-hover:text-white
                    "
                  >
                    ☎
                  </div>

                  <span className="text-[15px] font-medium text-[#172033]">
                    7678165464
                  </span>
                </a>
              </div>
            </div>

            {/* EMAIL */}

            <div className="mb-8">
              <p className="mb-3 text-[15px] text-slate-500">
                Send Us an Email:
              </p>

              <a
                href="mailto:info@digitalalife.com"
                className="
                  group -mx-2
                  flex items-center gap-4
                  rounded-xl p-2
                  transition
                  hover:bg-[#F0F4FA]
                "
              >
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-[#EAF0FA]
                    text-[#10284A]
                    transition
                    group-hover:bg-[#10284A]
                    group-hover:text-white
                  "
                >
                  ✉
                </div>

                <span className="text-[15px] font-medium text-[#172033]">
                  info@digitalalife.com
                </span>
              </a>
            </div>

            {/* SKYPE */}

            <div className="mb-8">
              <p className="mb-3 text-[15px] text-slate-500">
                Chat on Skype:
              </p>

              <a
                href="skype:live:.cid.f9a5dacb1a15fbc4?chat"
                className="
                  group -mx-2
                  flex items-center gap-4
                  rounded-xl p-2
                  transition
                  hover:bg-sky-50
                "
              >
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-sky-50
                    text-sky-600
                    transition
                    group-hover:bg-sky-600
                    group-hover:text-white
                  "
                >
                  <span className="font-bold">
                    S
                  </span>
                </div>

                <span className="break-all text-[15px] font-medium text-[#172033]">
                  live:.cid.f9a5dacb1a15fbc4
                </span>
              </a>
            </div>

            {/* SOCIAL MEDIA */}

            <div className="mb-8">
              <p className="mb-4 text-[15px] text-slate-500">
                Follow Us
              </p>

              <div className="flex gap-3">

                {/* FACEBOOK */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-slate-100
                    text-slate-600
                    transition
                    hover:-translate-y-1
                    hover:bg-[#10284A]
                    hover:text-white
                  "
                >
                  <b>f</b>
                </a>

                {/* INSTAGRAM */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-slate-100
                    text-slate-600
                    transition
                    hover:-translate-y-1
                    hover:bg-[#2E9E6D]
                    hover:text-white
                  "
                >
                  <b>◎</b>
                </a>

                {/* LINKEDIN */}

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-slate-100
                    text-slate-600
                    transition
                    hover:-translate-y-1
                    hover:bg-[#10284A]
                    hover:text-white
                  "
                >
                  <b>in</b>
                </a>

                {/* WHATSAPP */}

                <a
                  href="https://wa.me/7678165464"
                  aria-label="WhatsApp"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-slate-100
                    text-slate-600
                    transition
                    hover:-translate-y-1
                    hover:bg-[#2E9E6D]
                    hover:text-white
                  "
                >
                  <b>◉</b>
                </a>
              </div>
            </div>

            {/* BOTTOM CTA */}

            <div
              className="
                rounded-2xl
                border border-[#d6ebe0]
                bg-gradient-to-br
                from-[#EAF6F0]
                to-[#F5FAF8]
                p-5
              "
            >
              <h3 className="text-[16px] font-bold text-[#172033]">
                Need Help?
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Our team is ready to help you with your enquiry.
              </p>

              <a
                href="/quote"
                className="
                  mt-4 inline-flex
                  items-center gap-2
                  rounded-xl
                  bg-[#2E9E6D]
                  px-5 py-3
                  text-sm font-semibold
                  text-white
                  shadow-lg shadow-emerald-100
                  transition
                  hover:bg-[#227955]
                "
              >
                Lead Application

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
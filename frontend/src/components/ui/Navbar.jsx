import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

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
    { name: "UI UX Design", icon: "🎨", bg: "bg-rose-100" },
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

  // Keep the navigation usable on tablets: the full desktop navigation needs
  // more horizontal space than a typical 1024px screen provides.
  useEffect(() => {
    const handleViewportChange = () => {
      if (window.innerWidth >= 1280) {
        closeMobileMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        setIsContactOpen(false);
      }
    };

    window.addEventListener("resize", handleViewportChange);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleViewportChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ================= STICKY NAVBAR ================= */

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileCompanyOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className={`
          ${isScrolled ? "sticky" : "absolute"}
          top-0
          z-[900]
          w-full
          px-3
          transition-all
          duration-300
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
            relative
            flex
            min-h-[76px]
            w-full
            items-center
            justify-between
            rounded-[24px]
            bg-white
            px-4
            py-3
            sm:px-6
            transition-all
            duration-300
            ${
              isScrolled
                ? "shadow-[0_8px_24px_rgba(15,40,74,0.14)]"
                : "text-white shadow-[0_8px_24px_rgba(15,40,74,0.10)]"
            }
          `}
        >
          {/* ================= LOGO ================= */}

          <div className="flex min-w-0 items-center gap-3">
            <div
              style={{ overflow: "hidden" }}
              className="
                flex
                h-12
                w-[150px]
                sm:w-[200px]
                items-center
                justify-start
              "
            >
              <img
                src="https://digitalalife.com/includes/brand/logo-dark.png?v=1771691019"
                alt="Digital Alife"
                className="
                  h-auto
                  max-h-12
                  w-auto
                  max-w-full
                  object-contain
                "
              />
            </div>
          </div>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center gap-5 xl:flex">

            {/* HOME */}

            <a
              href="/"
              className="
                rounded-xl
                px-3
                py-2
                text-sm
                font-medium
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
                  flex
                  items-center
                  gap-1.5
                  rounded-xl
                  px-3
                  py-2
                  text-sm
                  font-medium
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
                    transition-transform
                    duration-300
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
                  absolute
                  left-1/2
                  top-full
                  mt-3
                  w-[280px]
                  -translate-x-1/2
                  origin-top
                  transition-all
                  duration-300
                  ${
                    isAboutOpen
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible pointer-events-none -translate-y-2 scale-95 opacity-0"
                  }
                `}
              >
                <div
                  className="
                    absolute
                    -top-1.5
                    left-1/2
                    h-3
                    w-3
                    -translate-x-1/2
                    rotate-45
                    bg-white
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-2
                    shadow-[0_15px_40px_rgba(15,23,42,0.18)]
                  "
                >
                  <div className="space-y-0.5">

                    {/* ABOUT */}

                    <a
                      href="/about"
                      onClick={() => setIsAboutOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-2.5
                        py-2
                        transition-all
                        duration-200
                        hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
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
                          text-[14px]
                          font-medium
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
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-2.5
                        py-2
                        transition-all
                        duration-200
                        hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
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
                          text-[14px]
                          font-medium
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
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-2.5
                        py-2
                        transition-all
                        duration-200
                        hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
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
                          text-[14px]
                          font-medium
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
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-2.5
                        py-2
                        transition-all
                        duration-200
                        hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
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
                          text-[14px]
                          font-medium
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
                  flex
                  items-center
                  gap-1.5
                  rounded-xl
                  px-3
                  py-2
                  text-sm
                  font-medium
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
                    transition-transform
                    duration-300
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
                  absolute
                  left-1/2
                  top-full
                  mt-3
                  w-[300px]
                  -translate-x-1/2
                  origin-top
                  transition-all
                  duration-300
                  ${
                    isServicesOpen
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible pointer-events-none -translate-y-2 scale-95 opacity-0"
                  }
                `}
              >

                <div
                  className="
                    absolute
                    -top-1.5
                    left-1/2
                    h-3
                    w-3
                    -translate-x-1/2
                    rotate-45
                    bg-white
                  "
                />

                <div
                  className="
                    relative
                    max-h-[470px]
                    overflow-y-auto
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-2
                    shadow-[0_15px_40px_rgba(15,23,42,0.18)]
                  "
                >

                  <div>
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={`/services/${service.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-2.5
                          py-1
                          transition-all
                          duration-200
                          hover:bg-slate-50
                        "
                      >

                        <div
                          className={`
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
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
                            text-[13px]
                            font-medium
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
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        bg-[#EAF6F0]
                        px-3
                        py-2
                        text-[12px]
                        font-semibold
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
                rounded-xl
                px-3
                py-2
                text-sm
                font-medium
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
                rounded-xl
                px-3
                py-2
                text-sm
                font-medium
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
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_5px_12px_rgba(46,158,109,0.25)]
                transition
                hover:bg-[#227955]
              "
            >
              Lead Application
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            className="
              ml-auto
              flex
              h-11
              w-11
              shrink-0
              xl:hidden
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              text-[#10284A]
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#F3F6FB]
              active:scale-95
            "
          >
            {isMobileMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          {/* =================================================
              RIGHT SIDE DESKTOP
          ================================================= */}

          <div className="hidden items-center gap-2.5 xl:flex">

            {/* LOGIN */}

            <a
              href="https://digitalalife.in/login"
              className="
                rounded-xl
                border
                border-[#cdd8ea]
                bg-white
                px-4
                py-2
                text-sm
                font-medium
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
                px-4
                py-2
                text-sm
                font-semibold
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
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#10284A]
                shadow-[0_5px_12px_rgba(16,40,74,0.25)]
                transition-all
                duration-200
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

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          className={`
            absolute
            left-0
            right-0
            top-[calc(100%+8px)]
            z-[1000]
            xl:hidden

            overflow-hidden
            rounded-[24px]

            border
            border-white/70

            bg-white/95

            shadow-[0_20px_60px_rgba(15,23,42,0.18)]

            backdrop-blur-2xl

            transition-all
            duration-500
            origin-top

            ${
              isMobileMenuOpen
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible pointer-events-none -translate-y-3 scale-95 opacity-0"
            }
          `}
        >
          <div
            className="
              max-h-[calc(100vh-110px)]
              overflow-y-auto
              p-3
            "
          >

            {/* HOME */}

            <a
              href="/"
              onClick={closeMobileMenu}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                text-sm
                font-semibold
                text-[#334155]
                transition
                hover:bg-[#EAF6F0]
                hover:text-[#2E9E6D]
              "
            >
              <span>Home</span>

              <span className="text-[#2E9E6D]">
                →
              </span>
            </a>

            {/* COMPANY */}

            <div className="border-t border-slate-100">

              <button
                type="button"
                onClick={() =>
                  setIsMobileCompanyOpen((prev) => !prev)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#334155]
                  transition
                  hover:bg-slate-50
                "
              >
                <span>Company</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`
                    transition-transform
                    duration-300
                    ${
                      isMobileCompanyOpen
                        ? "rotate-180 text-[#2E9E6D]"
                        : ""
                    }
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

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    isMobileCompanyOpen
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div
                  className="
                    mb-2
                    ml-2
                    space-y-1
                    border-l-2
                    border-[#EAF6F0]
                    pl-3
                  "
                >

                  <a
                    href="/about"
                    onClick={closeMobileMenu}
                    className="
                      block
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      text-slate-500
                      hover:bg-[#EAF6F0]
                      hover:text-[#2E9E6D]
                    "
                  >
                    About Us
                  </a>

                  <a
                    href="/why-us"
                    onClick={closeMobileMenu}
                    className="
                      block
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      text-slate-500
                      hover:bg-[#EAF6F0]
                      hover:text-[#2E9E6D]
                    "
                  >
                    Why Choose Us
                  </a>

                  <a
                    href="/careers"
                    onClick={closeMobileMenu}
                    className="
                      block
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      text-slate-500
                      hover:bg-[#EAF6F0]
                      hover:text-[#2E9E6D]
                    "
                  >
                    Digital Alife Career
                  </a>

                  <a
                    href="/development-process"
                    onClick={closeMobileMenu}
                    className="
                      block
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      text-slate-500
                      hover:bg-[#EAF6F0]
                      hover:text-[#2E9E6D]
                    "
                  >
                    Development Process
                  </a>

                </div>
              </div>

            </div>

            {/* SERVICES */}

            <div className="border-t border-slate-100">

              <button
                type="button"
                onClick={() =>
                  setIsMobileServicesOpen((prev) => !prev)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#334155]
                  transition
                  hover:bg-slate-50
                "
              >
                <span>Services</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`
                    transition-transform
                    duration-300
                    ${
                      isMobileServicesOpen
                        ? "rotate-180 text-[#2E9E6D]"
                        : ""
                    }
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

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    isMobileServicesOpen
                      ? "max-h-[650px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div
                  className="
                    mb-2
                    ml-2
                    max-h-[430px]
                    overflow-y-auto
                    border-l-2
                    border-[#EAF6F0]
                    pl-3
                  "
                >

                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={`/services/${service.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={closeMobileMenu}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2.5
                        text-sm
                        text-slate-500
                        transition
                        hover:bg-[#EAF6F0]
                        hover:text-[#2E9E6D]
                      "
                    >

                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          ${service.bg}
                          text-xs
                        `}
                      >
                        {service.icon}
                      </span>

                      <span>
                        {service.name}
                      </span>

                    </a>
                  ))}

                </div>
              </div>

            </div>

            {/* PRICING */}

            <a
              href="/pricing"
              onClick={closeMobileMenu}
              className="
                flex
                items-center
                justify-between
                border-t
                border-slate-100
                rounded-xl
                px-4
                py-3
                text-sm
                font-semibold
                text-[#334155]
                transition
                hover:bg-[#EAF6F0]
                hover:text-[#2E9E6D]
              "
            >
              <span>Pricing</span>

              <span className="text-[#2E9E6D]">
                →
              </span>
            </a>

            {/* CAREERS */}

            <a
              href="/careers"
              onClick={closeMobileMenu}
              className="
                flex
                items-center
                justify-between
                border-t
                border-slate-100
                rounded-xl
                px-4
                py-3
                text-sm
                font-semibold
                text-[#334155]
                transition
                hover:bg-[#EAF6F0]
                hover:text-[#2E9E6D]
              "
            >
              <span>Careers</span>

              <span className="text-[#2E9E6D]">
                →
              </span>
            </a>

            {/* LOGIN */}

            <a
              href="https://digitalalife.in/login"
              onClick={closeMobileMenu}
              className="
                mt-2
                flex
                items-center
                justify-center
                rounded-xl
                border
                border-[#cdd8ea]
                bg-white
                px-4
                py-3
                text-sm
                font-semibold
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
              onClick={closeMobileMenu}
              className="
                mt-2
                flex
                items-center
                justify-center
                rounded-xl
                bg-[#10284A]
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(16,40,74,0.20)]
                transition
                hover:bg-[#0B1E38]
              "
            >
              Request Free Quote
            </a>

            {/* LEAD APPLICATION */}

            <a
              href="/quote"
              onClick={closeMobileMenu}
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#2E9E6D]
                px-4
                py-3
                text-sm
                font-bold
                text-white
                shadow-[0_8px_20px_rgba(46,158,109,0.22)]
                transition
                hover:bg-[#227955]
              "
            >
              Lead Application

              <svg
                width="16"
                height="16"
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

            {/* CONTACT */}

            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                setIsContactOpen(true);
              }}
              className="
                mt-2
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                text-sm
                font-semibold
                text-[#10284A]
                transition
                hover:bg-slate-50
              "
            >
              Contact Us

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 10.5C21 15.2 17 19 12 19C10.8 19 9.7 18.8 8.7 18.4L4 20L5.6 15.7C4.6 14.2 4 12.4 4 10.5C4 5.8 8 2 12.5 2C17.5 2 21 5.8 21 10.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <circle
                  cx="8.5"
                  cy="10.5"
                  r="1"
                  fill="currentColor"
                />

                <circle
                  cx="12.5"
                  cy="10.5"
                  r="1"
                  fill="currentColor"
                />

                <circle
                  cx="16.5"
                  cy="10.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* =====================================================
          CONTACT OVERLAY
      ====================================================== */}

      <div
        onClick={closeContact}
        className={`
          fixed
          inset-0
          z-[9998]
          bg-black/40
          backdrop-blur-[2px]
          transition-all
          duration-500
          ${
            isContactOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          CONTACT SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[9999]
          h-screen
          w-full
          sm:w-[430px]
          overflow-hidden
          border-l
          border-white/70
          bg-gradient-to-br
          from-white/80
          via-white/65
          to-emerald-50/45
          shadow-[-30px_0_90px_rgba(15,23,42,0.20)]
          backdrop-blur-[30px]
          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          ${
            isContactOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
        `}
      >

        {/* =================================================
            AMBIENT BACKGROUND
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-28
            -top-28
            h-80
            w-80
            rounded-full
            bg-emerald-400/20
            blur-[90px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-[28%]
            h-80
            w-80
            rounded-full
            bg-blue-400/10
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-16
            h-72
            w-72
            rounded-full
            bg-emerald-300/20
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[30%]
            top-[10%]
            h-40
            w-40
            rounded-full
            bg-white/80
            blur-[80px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#10284A_1px,transparent_1px),linear-gradient(to_bottom,#10284A_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />

        {/* =================================================
            MAIN SCROLL CONTAINER
        ================================================== */}

        <div
          className="
            relative
            h-full
            overflow-y-auto
            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-slate-300/40
          "
        >

          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              sticky
              top-0
              z-30
              flex
              items-center
              justify-between
              border-b
              border-white/70
              bg-white/55
              px-6
              py-5
              shadow-[0_8px_30px_rgba(15,23,42,0.04)]
              backdrop-blur-[28px]
            "
          >

            {/* LOGO */}

            <div className="flex items-center">
              <img
                src="https://digitalalife.com/includes/brand/logo-dark.png?v=1771691019"
                alt="Digital Alife"
                className="
                  h-15
                  w-auto
                  object-contain
                  drop-shadow-[0_4px_10px_rgba(15,23,42,0.08)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              />
            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeContact}
              aria-label="Close Contact"
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/80
                bg-white/60
                text-[#10284A]
                shadow-[0_8px_25px_rgba(15,23,42,0.08)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:rotate-90
                hover:scale-105
                hover:border-emerald-200
                hover:bg-emerald-50/80
                hover:text-[#2E9E6D]
                hover:shadow-[0_12px_30px_rgba(46,158,109,0.16)]
                active:scale-95
              "
            >

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/70
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <svg
                className="relative"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </button>

          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative px-6 py-8">

            {/* =================================================
                INTRO
            ================================================== */}

            <div className="mb-9">

              <span
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-200/70
                  bg-gradient-to-r
                  from-emerald-50/90
                  to-white/70
                  px-4
                  py-1.5
                  text-xs
                  font-bold
                  text-[#227955]
                  shadow-[0_6px_20px_rgba(46,158,109,0.08)]
                  backdrop-blur-xl
                "
              >

                <span className="relative flex h-2 w-2">

                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-[#2E9E6D]
                      shadow-[0_0_10px_rgba(46,158,109,0.7)]
                    "
                  />

                </span>

                Contact Us

              </span>

              <h2
                className="
                  text-3xl
                  font-black
                  tracking-[-0.035em]
                  text-[#10284A]
                "
              >
                Get In{" "}

                <span
                  className="
                    bg-gradient-to-r
                    from-[#2E9E6D]
                    to-emerald-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Touch
                </span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-[360px]
                  text-[15px]
                  leading-7
                  text-slate-500
                "
              >
                For any enquiries, or just to say hello, get in touch and
                contact us.
              </p>

              <div className="mt-5 flex items-center gap-2">

                <span
                  className="
                    h-1
                    w-10
                    rounded-full
                    bg-gradient-to-r
                    from-[#2E9E6D]
                    to-emerald-400
                  "
                />

                <span className="h-1 w-2 rounded-full bg-emerald-300" />

                <span className="h-1 w-1 rounded-full bg-blue-300" />

              </div>

            </div>

            {/* =================================================
                PHONE
            ================================================== */}

            <div className="mb-8">

              <p
                className="
                  mb-4
                  text-[13px]
                  font-semibold
                  text-slate-500
                "
              >
                We're Available 24/7.{" "}
                <span className="text-[#2E9E6D]">
                  Call Now.
                </span>
              </p>

              <div className="space-y-3">

                {/* PHONE 1 */}

                <a
                  href="tel:9211954915"
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/55
                    p-3.5
                    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-emerald-200/70
                    hover:bg-white/80
                    hover:shadow-[0_20px_45px_rgba(16,185,129,0.12)]
                  "
                >

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-[120%]
                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-transparent
                      transition-transform
                      duration-1000
                      group-hover:translate-x-[120%]
                    "
                  />

                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[3px]
                      bg-gradient-to-b
                      from-emerald-400
                      to-emerald-600
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/80
                      bg-gradient-to-br
                      from-emerald-50
                      via-white
                      to-blue-50
                      text-[#10284A]
                      shadow-[0_8px_20px_rgba(15,23,42,0.08)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                      group-hover:bg-[#10284A]
                      group-hover:text-white
                    "
                  >
                    <span className="text-lg">
                      ☎
                    </span>
                  </div>

                  <div className="relative z-10">

                    <span
                      className="
                        block
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                      "
                    >
                      Phone
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[15px]
                        font-bold
                        tracking-wide
                        text-[#172033]
                      "
                    >
                      9211954915
                    </span>

                  </div>

                  <svg
                    className="
                      relative
                      z-10
                      ml-auto
                      -translate-x-2
                      opacity-0
                      text-[#2E9E6D]
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                    width="18"
                    height="18"
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

                {/* WHATSAPP */}

                <a
                  href="https://wa.me/917678165464"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/55
                    p-3.5
                    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-emerald-200/70
                    hover:bg-white/80
                    hover:shadow-[0_20px_45px_rgba(16,185,129,0.12)]
                  "
                >

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-[120%]
                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-transparent
                      transition-transform
                      duration-1000
                      group-hover:translate-x-[120%]
                    "
                  />

                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[3px]
                      bg-gradient-to-b
                      from-emerald-400
                      to-emerald-600
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/80
                      bg-gradient-to-br
                      from-emerald-50
                      via-white
                      to-blue-50
                      text-[#2E9E6D]
                      shadow-[0_8px_20px_rgba(46,158,109,0.10)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                      group-hover:bg-[#2E9E6D]
                      group-hover:text-white
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.478-8.413" />
                    </svg>
                  </div>

                  <div className="relative z-10">

                    <span
                      className="
                        block
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                      "
                    >
                      WhatsApp
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[15px]
                        font-bold
                        tracking-wide
                        text-[#172033]
                      "
                    >
                      7678165464
                    </span>

                  </div>

                  <svg
                    className="
                      relative
                      z-10
                      ml-auto
                      -translate-x-2
                      opacity-0
                      text-[#2E9E6D]
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                    width="18"
                    height="18"
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

            {/* =================================================
                EMAIL
            ================================================== */}

            <div className="mb-8">

              <p
                className="
                  mb-4
                  text-[13px]
                  font-semibold
                  text-slate-500
                "
              >
                Send Us an Email:
              </p>

              <a
                href="mailto:info@digitalalife.com"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/55
                  p-3.5
                  shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-blue-200/60
                  hover:bg-white/80
                  hover:shadow-[0_20px_45px_rgba(37,99,235,0.10)]
                "
              >

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-[120%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/70
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-[120%]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/80
                    bg-gradient-to-br
                    from-blue-50
                    via-white
                    to-emerald-50
                    text-[#10284A]
                    shadow-[0_8px_20px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:-rotate-6
                    group-hover:bg-[#10284A]
                    group-hover:text-white
                  "
                >
                  <span className="text-lg">
                    ✉
                  </span>
                </div>

                <div className="relative z-10 min-w-0">

                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-slate-400
                    "
                  >
                    Email
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      truncate
                      text-[15px]
                      font-bold
                      text-[#172033]
                    "
                  >
                    info@digitalalife.com
                  </span>

                </div>

                <svg
                  className="
                    relative
                    z-10
                    ml-auto
                    -translate-x-2
                    opacity-0
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                  width="18"
                  height="18"
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

            {/* =================================================
                SKYPE
            ================================================== */}

            <div className="mb-8">

              <p
                className="
                  mb-4
                  text-[13px]
                  font-semibold
                  text-slate-500
                "
              >
                Chat on Skype:
              </p>

              <a
                href="skype:live:.cid.f9a5dacb1a15fbc4?chat"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/55
                  p-3.5
                  shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-sky-200/70
                  hover:bg-white/80
                  hover:shadow-[0_20px_45px_rgba(14,165,233,0.10)]
                "
              >

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-[120%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/70
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-[120%]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/80
                    bg-gradient-to-br
                    from-sky-50
                    via-white
                    to-blue-50
                    text-sky-600
                    shadow-[0_8px_20px_rgba(14,165,233,0.10)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:bg-sky-600
                    group-hover:text-white
                  "
                >
                  <span className="font-black">
                    S
                  </span>
                </div>

                <div className="relative z-10 min-w-0">

                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-slate-400
                    "
                  >
                    Skype
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      break-all
                      text-[14px]
                      font-bold
                      text-[#172033]
                    "
                  >
                    live:.cid.f9a5dacb1a15fbc4
                  </span>

                </div>

                <svg
                  className="
                    relative
                    z-10
                    ml-auto
                    -translate-x-2
                    opacity-0
                    text-sky-600
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                  width="18"
                  height="18"
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

            {/* =================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="mb-9">

              <p
                className="
                  mb-4
                  text-[13px]
                  font-semibold
                  text-slate-500
                "
              >
                Follow Us
              </p>

              <div className="flex gap-3">

                {/* FACEBOOK */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    group
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/55
                    text-[#10284A]
                    shadow-[0_8px_25px_rgba(15,23,42,0.07)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-105
                    hover:border-[#10284A]
                    hover:bg-[#10284A]
                    hover:text-white
                  "
                >

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <b className="relative text-lg">
                    f
                  </b>

                </a>

                {/* INSTAGRAM */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    group
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/55
                    text-[#2E9E6D]
                    shadow-[0_8px_25px_rgba(15,23,42,0.07)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-105
                    hover:border-[#2E9E6D]
                    hover:bg-[#2E9E6D]
                    hover:text-white
                  "
                >

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <b className="relative text-xl">
                    ◎
                  </b>

                </a>

                {/* LINKEDIN */}

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    group
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/55
                    text-[#10284A]
                    shadow-[0_8px_25px_rgba(15,23,42,0.07)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-105
                    hover:border-[#10284A]
                    hover:bg-[#10284A]
                    hover:text-white
                  "
                >

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <b className="relative text-sm">
                    in
                  </b>

                </a>

                {/* WHATSAPP */}

                <a
                  href="https://wa.me/917678165464"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="
                    group
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/55
                    text-[#2E9E6D]
                    shadow-[0_8px_25px_rgba(15,23,42,0.07)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-105
                    hover:border-[#2E9E6D]
                    hover:bg-[#2E9E6D]
                    hover:text-white
                    hover:shadow-[0_15px_35px_rgba(46,158,109,0.28)]
                  "
                >

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative h-6 w-6"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.478-8.413" />
                  </svg>

                </a>

              </div>
            </div>

            {/* =================================================
                PREMIUM CTA
            ================================================== */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/70
                bg-gradient-to-br
                from-white/75
                via-emerald-50/65
                to-emerald-100/40
                p-6
                shadow-[0_20px_60px_rgba(46,158,109,0.12)]
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-1
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-36
                  w-36
                  rounded-full
                  bg-emerald-300/25
                  blur-[45px]
                  transition-transform
                  duration-700
                  group-hover:scale-150
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -left-10
                  h-32
                  w-32
                  rounded-full
                  bg-blue-300/15
                  blur-[45px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/50
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-full
                "
              />

              <div className="relative">

                <div
                  className="
                    mb-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-200/70
                    bg-white/60
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#2E9E6D]
                    backdrop-blur-xl
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-[#2E9E6D]
                      shadow-[0_0_10px_rgba(46,158,109,0.7)]
                    "
                  />

                  Let's Work Together

                </div>

                <h3
                  className="
                    text-xl
                    font-black
                    tracking-tight
                    text-[#10284A]
                  "
                >
                  Need Help?
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[320px]
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Our team is ready to help you with your enquiry.
                </p>

                <a
                  href="/quote"
                  className="
                    group/cta
                    relative
                    mt-5
                    inline-flex
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#2E9E6D]
                    to-[#227955]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_25px_rgba(46,158,109,0.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    active:translate-y-0
                    active:scale-[0.98]
                  "
                >

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover/cta:translate-x-full
                    "
                  />

                  <span className="relative">
                    Lead Application
                  </span>

                  <svg
                    className="
                      relative
                      transition-transform
                      duration-300
                      group-hover/cta:translate-x-1
                    "
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

            <div className="h-10" />

          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;

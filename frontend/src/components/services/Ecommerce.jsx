import React from "react";
import {
    ArrowRight,
    Phone,
    Star,
    Plus,
    ShoppingCart,
    Package,
    CreditCard,
    Boxes,
    Store,
    Smartphone,
    Zap,
    Search,
    Layers,
    Wallet,
    RefreshCw,
    ShieldCheck,
    ClipboardList,
    Palette,
    Code2,
    CheckCircle2,
    Rocket,
} from "lucide-react";

const NAVY = "#0C2C50";
const GREEN = "#2E9E6D";
const GREEN_LIGHT = "#4CBB8E";
const MIST = "#f7faf9";

const services = [
    {
        title: "Product Catalog & Storefront",
        icon: Store,
        desc: "A clean, fast storefront that makes browsing effortless — organized categories, rich product pages, and search that actually helps customers find what they want.",
    },
    {
        title: "Secure Payment Integration",
        icon: CreditCard,
        desc: "Cards, UPI, wallets, and net banking wired up with trusted payment gateways, so every checkout feels safe and completes without friction.",
    },
    {
        title: "Cart & Checkout Optimization",
        icon: ShoppingCart,
        desc: "A streamlined cart and a short, distraction-free checkout flow designed to reduce drop-offs and turn more visits into completed orders.",
    },
    {
        title: "Inventory & Order Management",
        icon: Boxes,
        desc: "A dashboard that keeps stock, pricing, and order status in sync in real time, so you're never selling something you don't have.",
    },
    {
        title: "Multi-vendor Marketplace",
        icon: Package,
        desc: "Need more than a single store? We build marketplace platforms with vendor onboarding, commission handling, and separate seller dashboards.",
    },
    {
        title: "Mobile Commerce",
        icon: Smartphone,
        desc: "A fully responsive shopping experience, plus native or hybrid app options for stores that want a dedicated mobile presence.",
    },
];

const highlights = [
    { title: "Fast, distraction-free checkout", icon: Zap },
    { title: "Mobile-first storefront design", icon: Smartphone },
    { title: "SEO-optimized product pages", icon: Search },
    { title: "Scalable, future-proof architecture", icon: Layers },
    { title: "Multiple payment gateway support", icon: Wallet },
    { title: "Real-time inventory sync", icon: RefreshCw },
];

const platforms = [
    "Shopify", "WooCommerce", "Magento", "BigCommerce",
    "PrestaShop", "React", "Node.js", "Razorpay", "Stripe", "PayPal",
];

const process = [
    {
        n: "01",
        icon: ClipboardList,
        title: "Understand your catalog & customers",
        desc: "We start by learning your products, pricing model, and who you're selling to, so the store is built around real buying behavior.",
    },
    {
        n: "02",
        icon: Palette,
        title: "Design the shopping experience",
        desc: "Wireframes and UI for browsing, cart, and checkout — reviewed with you before a single line of code is written.",
    },
    {
        n: "03",
        icon: Code2,
        title: "Build and integrate",
        desc: "Storefront, payment gateways, and inventory systems are developed and connected end to end.",
    },
    {
        n: "04",
        icon: CheckCircle2,
        title: "Test every transaction path",
        desc: "Checkout, refunds, stock edge cases, and mobile flows are tested thoroughly before anything goes live.",
    },
    {
        n: "05",
        icon: Rocket,
        title: "Launch and support",
        desc: "We go live together, then stay on hand for updates, scaling, and any issues that come up post-launch.",
    },
];

/* ---------- Intro ---------- */
function IntroSection() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#eaf5f6] px-6 pb-16 pt-10 sm:px-10 lg:px-14 lg:pb-24 lg:pt-36">
                <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#2E9E6D]/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0C2C50]/5 blur-3xl" />
                <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#2E9E6D]">e-Commerce Development</p>
                        <h1 className="mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-[#0C2C50] sm:text-5xl lg:text-6xl">
                            Make your online store <span className="text-[#2E9E6D]">impossible to ignore.</span>
                        </h1>
                        <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                            We turn products, ideas and ambitious business goals into fast, beautiful commerce experiences that are built to sell.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a href="/quote" className="inline-flex items-center gap-2 rounded-xl bg-[#2E9E6D] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2E9E6D]/20 transition hover:-translate-y-0.5 hover:bg-[#227955]">
                                Get a free consultation <ArrowRight size={16} />
                            </a>
                            <span className="text-sm font-semibold text-[#0C2C50]">Strategy. Design. Growth.</span>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="absolute inset-8 rounded-[2.5rem] bg-white/70 blur-2xl" />
                        <img src="/uploads/app-mockup-2.webp" alt="Mobile e-commerce shopping experience" className="relative z-10 mx-auto h-auto max-h-[430px] w-full object-contain drop-shadow-[0_28px_30px_rgba(12,44,80,0.18)]" />
                        <div className="absolute bottom-3 left-2 z-20 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:left-8">
                            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">Designed to convert</p>
                            <p className="mt-1 text-sm font-bold text-[#0C2C50]">Every tap feels effortless.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
                    <div className="rounded-[2rem] bg-[#f1f7f5] p-8 sm:p-12">
                        <p className="text-7xl font-black tracking-[-.08em] text-[#2E9E6D]">360°</p>
                        <p className="mt-3 max-w-xs text-lg font-bold leading-snug text-[#0C2C50]">A complete commerce system, not just another website.</p>
                        <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-500"><span><strong className="block text-2xl text-[#0C2C50]">01</strong>Clear strategy</span><span><strong className="block text-2xl text-[#0C2C50]">02</strong>Smart design</span><span><strong className="block text-2xl text-[#0C2C50]">03</strong>Reliable build</span><span><strong className="block text-2xl text-[#0C2C50]">04</strong>Ongoing growth</span></div>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[.25em] text-[#2E9E6D]">Built around your business</p>
                        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#0C2C50] sm:text-4xl">Commerce made simple, dependable and ready for what comes next.</h2>
                        <p className="mt-5 max-w-2xl leading-8 text-slate-600">From catalog and payments to delivery and retention, we connect every part of your customer journey into one smooth experience.</p>
                        <div className="mt-8 flex flex-wrap gap-3">{["Conversion-first UX", "Secure checkout", "Scalable technology", "Real-time insights"].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-[#0C2C50]">{item}</span>)}</div>
                    </div>
                </div>
            </section>
        </>
    );
}

/* ---------- Services grid ---------- */
function ServicesSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-between gap-8 mb-14">
                    <h2
                        className="text-3xl md:text-4xl font-bold tracking-tight max-w-md leading-tight"
                        style={{ color: NAVY }}
                    >
                        Everything your <span style={{ color: GREEN }}>online store</span>{" "}
                        needs, in one build
                    </h2>
                    <p className="text-slate-500 text-[15px] leading-relaxed max-w-md">
                        From the first product listing to the final delivery update, we
                        build the full commerce stack — storefront, payments, inventory,
                        and everything in between.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => {
                        const Icon = s.icon;

                        return (
                            <div
                                key={s.title}
                                className="group rounded-2xl bg-white border border-slate-100 p-7 transition-all duration-300 hover:-translate-y-1"
                                style={{ boxShadow: "0 1px 2px rgba(12,44,80,0.05)" }}
                                onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    "0 20px 40px -18px rgba(12,44,80,0.2)")
                                }
                                onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    "0 1px 2px rgba(12,44,80,0.05)")
                                }
                            >
                                <div
                                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                                    style={{ background: MIST }}
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={1.75}
                                        color={GREEN}
                                    />
                                </div>

                                <h3
                                    className="text-lg font-bold mb-3"
                                    style={{ color: NAVY }}
                                >
                                    {s.title}
                                </h3>

                                <p className="text-slate-500 text-[13.5px] leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ---------- Highlights + platform marquee ---------- */
function HighlightsSection() {
    const track = [...platforms, ...platforms];
    return (
        <section className="py-20 px-6" style={{ background: MIST }}>
            <style>{`
        @keyframes platformMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .platform-track { animation: platformMarquee 22s linear infinite; }
        .platform-track:hover { animation-play-state: paused; }
      `}</style>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
                <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                        <ShieldCheck size={14} color={GREEN} />
                        <span
                            className="text-xs font-semibold tracking-[0.2em] uppercase"
                            style={{ color: GREEN }}
                        >
                            Built to convert
                        </span>
                    </div>
                    <h2
                        className="text-3xl md:text-[32px] font-bold tracking-tight leading-tight mb-5"
                        style={{ color: NAVY }}
                    >
                        A store that's fast, trustworthy, and easy to manage
                    </h2>
                    <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                        Every store we ship is built around the same core: it should be
                        effortless for customers to buy and just as effortless for you to
                        run.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((h) => {
                            const Icon = h.icon;

                            return (
                                <div key={h.title} className="flex items-center gap-3">
                                    <div
                                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                                        style={{ background: "white" }}
                                    >
                                        <Icon
                                            size={16}
                                            strokeWidth={1.75}
                                            color={GREEN}
                                        />
                                    </div>

                                    <h5
                                        className="text-[13.5px] font-semibold"
                                        style={{ color: NAVY }}
                                    >
                                        {h.title}
                                    </h5>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div
                    className="rounded-2xl overflow-hidden"
                    style={{ boxShadow: "0 24px 55px -24px rgba(12,44,80,0.25)" }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80"
                        alt="Online store product browsing on a laptop"
                        className="w-full h-[380px] object-cover"
                    />
                </div>
            </div>

            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6">
                Platforms & tools we work with
            </p>
            <div
                className="relative"
                style={{
                    maskImage:
                        "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                }}
            >
                <div className="relative w-full overflow-hidden">
                    <div className="platform-track flex w-max items-center gap-4">
                        {track.map((name, i) => {
  const Icon =
    name === "Shopify"
      ? Store
      : name === "WooCommerce"
      ? ShoppingCart
      : name === "Magento"
      ? Package
      : name === "BigCommerce"
      ? Store
      : name === "PrestaShop"
      ? Store
      : name === "React"
      ? Code2
      : name === "Node.js"
      ? Code2
      : name === "Razorpay"
      ? CreditCard
      : name === "Stripe"
      ? CreditCard
      : Wallet;

  return (
    <span
      key={`${name}-${i}`}
      className="flex-shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold"
      style={{ color: NAVY }}
    >
      <Icon
        size={30}
        strokeWidth={2}
        color={GREEN}
      />

      {name}
    </span>
  );
})}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Process ---------- */
function ProcessSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-xl mb-14">
                    <h2
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                        style={{ color: NAVY }}
                    >
                        How we build your store
                    </h2>
                    <p className="text-slate-500 text-[15px]">
                        A clear, five-step process from first conversation to a store
                        that's live and selling.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {process.map((p) => (
                        <div
                            key={p.n}
                            className="relative overflow-hidden rounded-2xl border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1"
                            style={{ background: MIST }}
                        >
                            <span
                                className="absolute -top-3 right-2 text-6xl font-extrabold select-none"
                                style={{ color: "rgba(12,44,80,0.06)" }}
                            >
                                {p.n}
                            </span>
                            <div
                                className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white"
                            >
                                <p.icon size={20} strokeWidth={1.75} color={GREEN} />
                            </div>
                            <h3
                                className="relative text-[15px] font-bold mb-2 leading-snug"
                                style={{ color: NAVY }}
                            >
                                {p.title}
                            </h3>
                            <p className="relative text-slate-500 text-[13px] leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- Trust cards ---------- */
function TrustSection() {
    const reviews = [
        { name: "AppFutura", note: "Reviewed by clients for dependable product and commerce delivery." },
        { name: "Upwork", note: "Trusted by growing businesses for thoughtful, high-quality builds." },
        { name: "GoodFirms", note: "Recognized for transparent process and measurable client outcomes." },
    ];

    return (
        <section className="bg-[#f7faf9] px-6 py-20 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[.25em] text-[#2E9E6D]">Built on trust</p>
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0C2C50] sm:text-4xl">A commerce partner you can count on.</h2>
                    <p className="mt-5 leading-7 text-slate-500">Clear communication, careful execution and a digital store that keeps getting better after launch.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {reviews.map((review) => (
                        <div key={review.name} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1 text-sm font-bold text-[#0C2C50]"><Star size={15} fill="#f59e0b" color="#f59e0b" /> 4.9/5</span>
                                <span className="text-lg font-black tracking-tight text-[#2E9E6D]">{review.name}</span>
                            </div>
                            <p className="mt-6 text-sm leading-7 text-slate-500">{review.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- CTA ---------- */
function CTASection() {
    return (
        <section className="px-6 pb-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <div
                    className="relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10"
                    style={{ background: NAVY }}
                >
                    <div
                        className="absolute top-6 right-8 opacity-70"
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
                            backgroundSize: "8px 8px",
                            width: "90px",
                            height: "60px",
                        }}
                    />
                    <div
                        className="absolute bottom-6 left-10 opacity-40"
                        style={{
                            backgroundImage: `radial-gradient(${GREEN_LIGHT}88 1px, transparent 1px)`,
                            backgroundSize: "10px 10px",
                            width: "70px",
                            height: "70px",
                        }}
                    />
                    <Plus size={18} className="absolute top-6 right-6 text-white/50" />
                    <Plus size={18} className="absolute bottom-6 left-6 text-white/30" />

                    <div className="relative max-w-lg">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug mb-4">
                            Ready to launch a store that sells itself?
                        </h2>
                        <p className="text-white/60 text-[15px]">
                            Tell us about your products and we'll map out the right build
                            for your budget and timeline.
                        </p>
                    </div>

                    <div className="relative flex flex-col items-start md:items-end gap-3 flex-shrink-0">
                        <a
                            href="contact.php"
                            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform duration-300 hover:scale-[1.04]"
                            style={{ background: GREEN, color: "white" }}
                        >
                            Get a free consultation
                            <ArrowRight size={16} />
                        </a>
                        <a
                            href="tel:9211954915"
                            className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                        >
                            <Phone size={14} />
                            Or call us: 9211954915
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Ecommerce() {
    return (
        <>
            <IntroSection />
            <ServicesSection />
            <HighlightsSection />
            <ProcessSection />
            <TrustSection />
            <CTASection />
        </>
    );
}
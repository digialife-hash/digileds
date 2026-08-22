import React from "react";
import {
  ArrowRight,
  Phone,
  Plus,
  LayoutTemplate,
  Globe,
  RefreshCw,
  ShoppingCart,
  Settings2,
  AppWindow,
  Home,
  Luggage,
  GraduationCap,
  Car,
  Calendar,
  ShoppingBag,
  Gamepad2,
  HeartPulse,
  PiggyBank,
  UtensilsCrossed,
  Layers,
  ShoppingBasket,
  Palette,
  UsersRound,
  Code2,
  Handshake,
  ShieldCheck,
  BadgeCheck,
  ClipboardList,
  Database,
  Rocket,
  Activity,
  LifeBuoy,
} from "lucide-react";

const NAVY = "#101E3B";
const GREEN = "#1E9C6B";
const GREEN_DEEP = "#146B4D";
const GREEN_LIGHT = "#3FC98D";
const MIST = "#F5F7FA";

const services = [
  {
    title: "Landing Page Development",
    icon: LayoutTemplate,
    desc: "Your landing page on your website should be most attractive, informative, and engaging; only then will you get real growth and success. We ensure all these features while creating landing pages for your website, ads, social media, and businesses.",
  },
  {
    title: "Static Website Development",
    icon: Globe,
    desc: "Your effective online presence is all that matters for your success. Get your static website developed with Digital Alife and feel the speed and performance of your website. Our static website development experts can assist you in the best way possible.",
  },
  {
    title: "Dynamic Website Development",
    icon: RefreshCw,
    desc: "Make your website refreshable with our excellent dynamic website development services. Dynamic websites will show fresh content every time your customers visit your website. It is the best way to keep your customers tied to your business website.",
  },
  {
    title: "E-commerce Development",
    icon: ShoppingCart,
    desc: "Digital Alife has mastered e-commerce website development. The experts behind Digital Alife have created e-commerce websites for almost every type of niche company. The e-commerce website developed by Digital Alife is at the top of many niches of the market today.",
  },
  {
    title: "CMS Web Development",
    icon: Settings2,
    desc: "Build your CMS website now and start managing your digital content. The CMS websites developed by us are incredibly functional and performance-driven. We know how to fulfil your CMS website needs and requirements through our CMS development.",
  },
  {
    title: "Web Portal Development",
    icon: AppWindow,
    desc: "Develop your web portal quickly with Digital Alife portal development services and add every imagined feature to your website. We have several years of experience in web portal design and development, which allow us to fulfil all your needs effortlessly.",
  },
];

const industries = [
  { label: "Real Estate", icon: Home },
  { label: "Transport", icon: Car },
  { label: "Game", icon: Gamepad2 },
  { label: "Restaurant", icon: UtensilsCrossed },
  { label: "Tour & Travels", icon: Luggage },
  { label: "Event", icon: Calendar },
  { label: "Healthcare", icon: HeartPulse },
  { label: "On-Demand", icon: Layers },
  { label: "Education", icon: GraduationCap },
  { label: "eCommerce", icon: ShoppingBag },
  { label: "Finance", icon: PiggyBank },
  { label: "Grocery", icon: ShoppingBasket },
];

const highlights = [
  { title: "Attractive and engaging website development", icon: Palette },
  { title: "Well-skilled and experienced team", icon: UsersRound },
  { title: "Competent coding and technical ability", icon: Code2 },
  { title: "Respect and gratitude for customers", icon: Handshake },
  { title: "Trusted by leading entrepreneurs", icon: ShieldCheck },
  { title: "A responsive and quality website", icon: BadgeCheck },
];

const process = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Understand the customer's needs",
    desc: "We strive to understand and analyse the needs of our customers and the service requirements they seek.",
  },
  {
    n: "02",
    icon: Database,
    title: "Collect required data & information",
    desc: "We gather all the information, data, and resources according to the needs of the clients and the requested service.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Execute the service",
    desc: "Now Digital Alife starts to build and execute your service. It is the most significant step, so it takes the most time.",
  },
  {
    n: "04",
    icon: Activity,
    title: "Check real-time work conditions",
    desc: "After execution, we now do real-time testing of the stability and profitability of your demanded service.",
  },
  {
    n: "05",
    icon: LifeBuoy,
    title: "Future maintenance and support",
    desc: "You'll have access to contact us and ask for your queries even after the completion of services.",
  },
];

/* ---------- Hero ---------- */
function DeviceMockup() {
  return (
    <div className="relative max-w-md mx-auto">
      <div
        className="rounded-2xl overflow-hidden border border-slate-200"
        style={{ boxShadow: "0 30px 60px -24px rgba(16,30,59,0.25)" }}
      >
        <div className="flex items-center gap-1.5 bg-[#EEF1F5] px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <div
          className="p-8 flex flex-col justify-center"
          style={{ background: `linear-gradient(150deg, ${NAVY}, #1C2C52)`, minHeight: 220 }}
        >
          <p className="text-white text-xl font-bold leading-snug mb-4">
            We craft digital products for business and user goals
          </p>
          <div className="flex gap-3">
            <span className="rounded-full px-4 py-1.5 text-xs font-semibold" style={{ background: GREEN, color: "white" }}>
              Get Started
            </span>
            <span className="rounded-full px-4 py-1.5 text-xs font-semibold border border-white/30 text-white">
              Contact Us
            </span>
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-8 -right-6 w-28 rounded-xl overflow-hidden border-4 border-white"
        style={{ boxShadow: "0 20px 40px -16px rgba(16,30,59,0.3)" }}
      >
        <div className="bg-[#EEF1F5] px-2 py-1.5" />
        <div className="p-3" style={{ background: MIST, minHeight: 160 }}>
          <div className="h-3 w-full rounded-full mb-2" style={{ background: GREEN, opacity: 0.7 }} />
          <div className="h-2 w-3/4 rounded-full bg-slate-300 mb-1.5" />
          <div className="h-2 w-2/3 rounded-full bg-slate-300 mb-3" />
          <div className="h-10 w-full rounded-lg" style={{ background: "#DCE1E8" }} />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1
            className="text-4xl md:text-[44px] font-bold tracking-tight leading-[1.12] mb-6"
            style={{ color: NAVY }}
          >
            Web Solutions To Accelerate Your Brand's Growth
          </h1>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-md">
            Creativity and dependability are firmly woven together at Digital
            Alife to produce high-quality website development services for
            startups, businesses, and entrepreneurs with our customer-first
            approach.
          </p>
          <a
            href="contact.php"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
            style={{ background: GREEN }}
          >
            Get a free consultation
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        <DeviceMockup />
      </div>
    </section>
  );
}

/* ---------- Services grid ---------- */
function ServicesSection() {
  return (
    <section className="py-20 px-6" style={{ background: `linear-gradient(150deg, ${GREEN_DEEP}, ${GREEN})` }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between gap-8 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-md leading-tight">
            We offer <span style={{ color: "#BFF3D9" }}>web solutions</span> to
            boost your growth and productivity
          </h2>
          <p className="text-white/75 text-[15px] leading-relaxed max-w-md">
            Digital Alife works extremely hard to develop the most attractive
            and engaging website for your business. We at Digital Alife also
            ensure the continuous development and stability of your business
            with our designed website.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 16px 40px -20px rgba(0,0,0,0.3)" }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: MIST }}
              >
                <s.icon size={22} strokeWidth={1.75} color={GREEN} />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: NAVY }}>
                {s.title}
              </h3>
              <p className="text-slate-500 text-[13.5px] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
function IndustriesSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {industries.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white/[0.04] border border-white/10 px-3 py-5 text-center transition-all duration-300 hover:bg-white/[0.08]"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: "rgba(63,201,141,0.15)" }}
              >
                <item.icon size={16} strokeWidth={1.75} color={GREEN_LIGHT} />
              </div>
              <p className="text-white/85 text-[12px] font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-5">
            Industries We Serve
          </h2>
          <p className="text-white/60 text-[15px] leading-relaxed">
            Digital Alife is not limited to any industry. Wherever you need
            us, we are available everywhere. We serve a wide range of
            industries and market specifications with our wide variety of
            website development services and skills.
          </p>
          <div className="h-px my-8 bg-white/15" />
          <p className="italic text-white/80 text-[15px] leading-relaxed mb-8">
            No need to wait longer to design and develop your website; we
            offer a minimum package to ensure that your budget does not stop
            you from flying.
          </p>
          <a
            href="contact.php"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
            style={{ background: GREEN }}
          >
            Get a free consultation
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Highlights + photo ---------- */
function HighlightsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2
            className="text-3xl md:text-[32px] font-bold tracking-tight leading-tight mb-8"
            style={{ color: NAVY }}
          >
            Experience the most scalable and stable website development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.04)" }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: MIST }}
                >
                  <h.icon size={18} strokeWidth={1.75} color={GREEN} />
                </div>
                <h4 className="text-[13.5px] font-semibold leading-snug" style={{ color: NAVY }}>
                  {h.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 24px 55px -24px rgba(16,30,59,0.3)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
            alt="Digital Alife team planning a project"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- How we work ---------- */
function ProcessSection() {
  return (
    <section className="py-20 px-6" style={{ background: MIST }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: NAVY }}>
            How We Work!
          </h2>
          <p className="text-slate-500 text-[15px]">
            Based on constant team discussion and market analytics, we have
            developed a well-structured process to align the company's
            mission, vision, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {process.map((p) => (
            <div
              key={p.n}
              className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.05)" }}
            >
              <span
                className="absolute -top-3 right-2 text-6xl font-extrabold select-none"
                style={{ color: "#EEF1F5" }}
              >
                {p.n}
              </span>
              <div
                className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: MIST }}
              >
                <p.icon size={20} strokeWidth={1.75} color={GREEN} />
              </div>
              <h3 className="relative text-[15px] font-bold mb-2 leading-snug" style={{ color: NAVY }}>
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
              backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
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
              Bring the most fabulous and innovative digital transformation to
              your business by hiring a Digital Alife expert.
            </h2>
            <p className="text-white/60 text-[15px]">
              Always be in touch with our most polite and understanding
              experts team.
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

export default function WebDevelopment() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <HighlightsSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
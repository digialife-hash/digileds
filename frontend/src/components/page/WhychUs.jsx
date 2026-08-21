import React from "react";
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  Search,
  BadgeCheck,
  TrendingUp,
  Smile,
  UsersRound,
  Headset,
  Layers,
  Zap,
  Palette,
  Cpu,
  Phone,
  Plus,
} from "lucide-react";

const NAVY = "#101E3B";
const NAVY_SOFT = "#182A50";
const GREEN = "#1E9C6B";
const GREEN_LIGHT = "#3FC98D";
const MIST = "#F5F7FA";

const features = [
  { title: "Search engine optimized services", icon: Search },
  { title: "No compromise on product quality", icon: BadgeCheck },
  { title: "High customers return ratio", icon: TrendingUp },
  { title: "Work for client satisfaction", icon: Smile },
  { title: "Client-centric approach", icon: UsersRound },
  { title: "Reliability and support system", icon: Headset },
  { title: "Progressive and scalable solution", icon: Layers },
  { title: "Fast and quality work", icon: Zap },
  { title: "Attractive and engaging designing", icon: Palette },
  { title: "Developed with the latest technologies", icon: Cpu },
];

const stats = [
  { value: "900+", label: "Happy Client" },
  { value: "2000+", label: "Project Submitted" },
  { value: "90%", label: "Repeat Customer" },
];

/* ---------- Hero ---------- */
function Hero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(125deg, rgba(230, 230, 230, 0.95), rgba(16,30,59,0.82)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }
        .blob-a { animation: floatBlob 9s ease-in-out infinite; }
        .blob-b { animation: floatBlob 11s ease-in-out infinite reverse; }
      `}</style>

      <div
        className="blob-a absolute -top-24 right-[-6rem] h-72 w-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${GREEN_LIGHT}55, transparent 70%)` }}
      />
      <div
        className="blob-b absolute bottom-[-8rem] left-[-4rem] h-80 w-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${GREEN}40, transparent 70%)` }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-32">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm border"
          style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.15)" }}
        >
          <span className="text-white/70 text-xs font-medium">Home</span>
          <ChevronRight size={12} className="text-white/40" />
          <span className="text-xs font-semibold" style={{ color: GREEN_LIGHT }}>
            Why choose us?
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl leading-[1.1]">
          <span className="text-white">Why Choose </span>
          <span
            style={{
              background: `linear-gradient(90deg, ${GREEN_LIGHT}, #7EE8B8)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital Alife
          </span>
        </h1>
        <p className="text-white/65 text-[16px] leading-relaxed max-w-lg mb-10">
          From the very beginning, we at Digital Alife have associated
          ourselves with the most cutting-edge technology, skills, and
          methodologies that help us in providing the best services to our
          clients.
        </p>
        <a
          href="contact.php"
          className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold overflow-hidden transition-transform duration-300 hover:scale-[1.04]"
          style={{ background: GREEN, color: "white" }}
        >
          <span className="relative">Get started</span>
          <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

/* ---------- illustrations ---------- */
function TeamStoryIllustration() {
  return (
    <svg viewBox="0 0 340 260" className="w-full h-auto max-w-md mx-auto">
      <ellipse cx="170" cy="230" rx="150" ry="20" fill={MIST} />
      <rect x="60" y="150" width="40" height="80" rx="4" fill="#C6CEDA" />
      <rect x="150" y="110" width="40" height="120" rx="4" fill={GREEN} opacity="0.85" />
      <rect x="240" y="170" width="40" height="60" rx="4" fill="#DCE1E8" />
      <circle cx="170" cy="90" r="16" fill="#F5B58A" />
      <rect x="152" y="106" width="36" height="50" rx="12" fill={NAVY} />
      <line x1="170" y1="106" x2="170" y2="40" stroke={GREEN} strokeWidth="4" strokeLinecap="round" />
      <polygon points="170,30 160,48 180,48" fill={GREEN_LIGHT} />
      <circle cx="90" cy="120" r="13" fill="#D98A5F" />
      <rect x="75" y="133" width="30" height="42" rx="10" fill="#3B4CB8" />
      <circle cx="255" cy="140" r="13" fill="#F0C29A" />
      <rect x="240" y="153" width="30" height="42" rx="10" fill="#D65D5D" />
    </svg>
  );
}

function GoalsIllustration() {
  return (
    <svg viewBox="0 0 320 300" className="w-full h-auto max-w-sm mx-auto">
      <circle cx="160" cy="150" r="140" fill={GREEN} opacity="0.1" />
      <rect x="60" y="200" width="46" height="60" rx="4" fill="#DCE1E8" />
      <rect x="120" y="160" width="46" height="100" rx="4" fill="#C6CEDA" />
      <rect x="180" y="110" width="46" height="150" rx="4" fill={GREEN} opacity="0.85" />
      <circle cx="203" cy="70" r="20" fill={GREEN_LIGHT} opacity="0.5" />
      <path d="M195 70 l6 6 12 -12" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="90" cy="180" r="12" fill="#F5B58A" />
      <rect x="76" y="192" width="28" height="40" rx="9" fill={NAVY} />
    </svg>
  );
}

/* ---------- Story section ---------- */
function StorySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="rounded-3xl p-10" style={{ background: MIST }}>
          <TeamStoryIllustration />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-6 rounded-full" style={{ background: GREEN }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GREEN }}>
              Our story
            </span>
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold tracking-tight leading-tight mb-6" style={{ color: NAVY }}>
            Digital Alife is building revolutionary digital solutions for
            their clients
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
            In our journey of 8 years, we have completed almost every type of
            project and continuously improved ourselves. The website,
            application, UI, and UX created by us have become the trend of
            the market today.
          </p>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            Many years of experience and skills make us the best digital
            marketing agency and website design and development agency in the
            market. We at Digital Alife take responsibility to deliver the
            best product.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats / Goals section ---------- */
function GoalsSection() {
  return (
    <section className="py-20 px-6" style={{ background: MIST }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-[32px] font-bold tracking-tight leading-tight mb-6" style={{ color: NAVY }}>
            Accomplish all your goals and mission with the Digital Alife
            digital solution
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-10">
            Digital Alife design and incredibly develop your website or
            application. We have the solution to your every digital problem.
            Digital Alife has a team of all the different services. Your
            website, application, or marketing campaign will be run only by
            the experts of the department.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: GREEN }}>
                  {s.value}
                </p>
                <p className="text-[13px] text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-10 border" style={{ borderColor: "rgba(30,156,107,0.15)" }}>
          <GoalsIllustration />
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature grid ---------- */
function FeatureGrid() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: NAVY }}>
            We work for our <span style={{ color: GREEN }}>client's satisfaction</span>
          </h2>
          <p className="text-slate-500 text-[15px]">
            Our customers aspire for the best digital services from us and we
            want to satisfy our clients 100%. This cycle goes on continuously.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white border border-slate-100 p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.05)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 40px -18px rgba(16,30,59,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(16,30,59,0.05)")}
            >
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                style={{ background: MIST }}
              >
                <f.icon size={20} strokeWidth={1.75} color={GREEN} />
              </div>
              <h5 className="text-[13.5px] font-semibold leading-snug" style={{ color: NAVY }}>
                {f.title}
              </h5>
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
    <section className="px-6 pb-20">
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
              Let's start putting an impact on the world with our massive and
              tremendous strategies for your business
            </h2>
            <p className="text-white/60 text-[15px]">
              Book your services now and get the opportunity to build real
              value for your customers.
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

export default function WhyChooseUs() {
  return (
    <div>
      <Hero />
      <StorySection />
      <GoalsSection />
      <FeatureGrid />
      <CTASection />
    </div>
  );
}
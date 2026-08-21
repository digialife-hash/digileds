import React from "react";
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const NAVY = "#101E3B";
const NAVY_SOFT = "#182A50";
const GREEN = "#1E9C6B";
const GREEN_LIGHT = "#3FC98D";
const MIST = "#F5F7FA";

const teamPoints = [
  {
    n: "1",
    text: "Digital Alife has the solution for your every digital needs",
  },
  {
    n: "2",
    text: "Discuss your idea and get consultancy free for your business",
  },
  {
    n: "3",
    text: "We deliver projects based on extensive analytics and data",
  },
  {
    n: "4",
    text: "Our team knows well to rank your website higher on SERPs",
  },
];

/* ---------- Hero ---------- */
function AboutHero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(125deg, rgba(218, 222, 230, 0.95), rgba(16,30,59,0.82)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80')`,
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
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-32">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm border"
          style={{
            background: "rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.15)",
          }}
        >
          <span className="text-white/70 text-xs font-medium">Home</span>
          <ChevronRight size={12} className="text-white/40" />
          <span className="text-xs font-semibold" style={{ color: GREEN_LIGHT }}>
            About Us
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl leading-[1.08]">
          <span className="text-white">About </span>
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
          Opening a door for new possibilities with tremendous skills and
          market knowledge in web app development and digital marketing. We
          at Digital Alife, know what you are exactly struggling from.
        </p>
        <a
          href="contact.php"
          className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold overflow-hidden transition-transform duration-300 hover:scale-[1.04]"
          style={{ background: GREEN, color: "white" }}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(90deg, ${GREEN}, ${GREEN_LIGHT})` }}
          />
          <span className="relative">Get started</span>
          <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

/* ---------- Team ---------- */
function TeamSection() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div
        className="absolute top-10 left-[-6rem] h-72 w-72 rounded-full blur-3xl pointer-events-none opacity-60"
        style={{ background: `radial-gradient(circle, ${MIST}, transparent 70%)` }}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start relative">
        <div className="lg:col-span-4">
          <div className="sticky top-8">
            <div className="relative">
              <div
                className="absolute -top-5 -left-5 h-full w-full rounded-2xl -z-10"
                style={{ background: `linear-gradient(135deg, ${GREEN}, ${GREEN_LIGHT})`, opacity: 0.15 }}
              />
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 24px 60px -24px rgba(16,30,59,0.35)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Digital Alife team meeting"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-5 py-4 flex items-center gap-3"
                style={{ boxShadow: "0 16px 40px -12px rgba(16,30,59,0.3)" }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                  style={{ background: "rgba(30,156,107,0.12)" }}
                >
                  <Sparkles size={18} color={GREEN} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none" style={{ color: NAVY }}>
                    Expert team
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Skilled &amp; qualified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-6 rounded-full" style={{ background: GREEN }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: GREEN }}
            >
              Who we are
            </span>
          </div>
          <h2
            className="text-3xl md:text-[36px] font-bold tracking-tight leading-tight mb-6"
            style={{ color: NAVY }}
          >
            Our talented and experienced team is waiting to offer you
            incredible services.
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
            Digital Alife has developed a team of the most intelligent and
            qualified experts. Everyone has years of experience and industry
            knowledge in their respective fields. It leads to the prosperous
            growth of both Digital Alife and its customers.
          </p>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-10">
            Digital Alife is here to deliver the best digital products that
            empower businesses to make their journey easier and faster. Our
            team can amaze you with their tremendous service delivery and
            polite behavior.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamPoints.map((p) => (
              <div
                key={p.n}
                className="group flex gap-4 rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.04)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 16px 32px -16px rgba(16,30,59,0.18)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 1px 2px rgba(16,30,59,0.04)")
                }
              >
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300"
                  style={{ background: MIST, color: GREEN }}
                >
                  {p.n}
                </span>
                <h5
                  className="text-[14.5px] font-semibold leading-snug pt-1.5"
                  style={{ color: NAVY }}
                >
                  {p.text}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- custom illustrations (original, not reproduced artwork) ---------- */
function MissionIllustration() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto max-w-sm mx-auto">
      <circle cx="230" cy="80" r="80" fill={GREEN} opacity="0.12" />
      <rect x="30" y="150" width="46" height="40" rx="4" fill="#DCE1E8" />
      <rect x="90" y="120" width="46" height="70" rx="4" fill="#C6CEDA" />
      <rect x="150" y="90" width="46" height="100" rx="4" fill={GREEN} opacity="0.85" />
      <circle cx="230" cy="60" r="16" fill="#F5B58A" />
      <rect x="214" y="76" width="32" height="46" rx="10" fill={NAVY} />
      <circle cx="180" cy="72" r="14" fill="#D98A5F" />
      <rect x="166" y="86" width="28" height="42" rx="9" fill="#3B4CB8" />
      <circle cx="270" cy="40" r="6" fill={GREEN_LIGHT} />
      <circle cx="60" cy="50" r="5" fill={GREEN_LIGHT} opacity="0.7" />
      <circle cx="100" cy="30" r="4" fill={GREEN_LIGHT} opacity="0.5" />
    </svg>
  );
}

function VisionIllustration() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto max-w-sm mx-auto">
      <circle cx="110" cy="110" r="90" fill={GREEN} opacity="0.1" />
      <path
        d="M40 190 L110 120 L160 155 L260 60"
        stroke={GREEN}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <polygon points="260,60 230,66 254,86" fill={GREEN} />
      <circle cx="150" cy="95" r="14" fill="#F5B58A" />
      <rect x="136" y="109" width="28" height="46" rx="10" fill={NAVY} />
      <rect x="150" y="118" width="34" height="8" rx="4" fill={GREEN_LIGHT} />
      <circle cx="70" cy="60" r="5" fill={GREEN_LIGHT} opacity="0.6" />
      <circle cx="280" cy="150" r="6" fill={GREEN_LIGHT} opacity="0.6" />
    </svg>
  );
}

/* ---------- Mission & Vision ---------- */
function MissionVisionRow({ eyebrow, heading, italic, body, illustration, reverse }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div
          className="inline-flex items-center gap-2 mb-4 rounded-full px-3.5 py-1.5"
          style={{ background: "rgba(30,156,107,0.1)" }}
        >
          <Sparkles size={13} color={GREEN} />
          <span
            className="text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: GREEN }}
          >
            {eyebrow}
          </span>
        </div>
        <h3
          className="text-3xl md:text-[32px] font-bold tracking-tight mb-4"
          style={{ color: NAVY }}
        >
          {heading}
        </h3>
        <p
          className="italic text-[16px] mb-4 font-medium leading-relaxed"
          style={{ color: NAVY_SOFT }}
        >
          {italic}
        </p>
        <p className="text-slate-500 text-[15px] leading-relaxed">{body}</p>
      </div>
      <div className="relative">
        <div
          className="absolute -inset-3 rounded-[2rem] blur-2xl opacity-40 -z-10"
          style={{ background: `linear-gradient(135deg, ${GREEN}, ${GREEN_LIGHT})` }}
        />
        <div
          className="rounded-3xl p-10 border"
          style={{ background: MIST, borderColor: "rgba(30,156,107,0.15)" }}
        >
          {illustration}
        </div>
      </div>
    </div>
  );
}

function MissionVisionSection() {
  return (
    <section className="py-20 px-6" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto space-y-20">
        <MissionVisionRow
          eyebrow="Our mission"
          heading="Our Mission"
          italic="Our mission is to bring real values and growth to our client's entrepreneurial journey"
          body="Since we started our journey as web-app developers and digital marketers, our mission was absolutely clear in our minds. Through Digital Alife, we are on the mission to develop the best websites and mobile applications which satisfy our clients to the inner core. We build products that really matter to our customers."
          illustration={<MissionIllustration />}
        />
        <MissionVisionRow
          eyebrow="Our vision"
          heading="Our Vision"
          italic="Digital Alife has the natural vision to grow the maximum businesses with its digital skills and experience"
          body="The vision of our company is extremely simple and straightforward. We want to touch the maximum number of businesses to grow their journey. Our skills and experience in website or application development are good enough to make a business profitable in minimum time. Digital Alife is in constant motion concerning its vision."
          illustration={<VisionIllustration />}
          reverse
        />
      </div>
    </section>
  );
}

export default function Abouts() {
  return (
    <div>
      <AboutHero />
      <TeamSection />
      <MissionVisionSection />
    </div>
  );
}
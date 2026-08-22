import React from "react";
import {
  ArrowRight,
  Star,
  DollarSign,
  Trophy,
  Factory,
  ShieldCheck,
  Lightbulb,
  Gauge,
  Apple,
  Smartphone,
  Globe,
  Layers,
  Atom,
  Server,
  Feather,
  Triangle,
  Coffee,
  Terminal,
  Flame,
  Cloud,
  PenTool,
  PenSquare,
  Bird,
} from "lucide-react";

const NAVY = "#101E3B";
const NAVY_SOFT = "#182A50";
const GREEN = "#1E9C6B";
const GREEN_LIGHT = "#3FC98D";
const MIST = "#F5F7FA";

const highlights = [
  { title: "Reduce the development cost", icon: DollarSign },
  { title: "Future-proof mobile apps", icon: ShieldCheck },
  { title: "Talent and skill overwhelmed", icon: Trophy },
  { title: "Creativity and innovative design", icon: Lightbulb },
  { title: "Quality and sustainable resources", icon: Factory },
  { title: "Efficient and performance-driven", icon: Gauge },
];

const techStack = [
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Flutter", icon: Feather },
  { name: "Swift", icon: Bird },
  { name: "Kotlin", icon: Triangle },
  { name: "Java", icon: Coffee },
  { name: "Python", icon: Terminal },
  { name: "Firebase", icon: Flame },
  { name: "AWS", icon: Cloud },
  { name: "Figma", icon: PenTool },
  { name: "Sketch", icon: PenSquare },
  { name: "Android", icon: Smartphone },
];

const services = [
  {
    title: "iOS App",
    icon: Apple,
    desc: "Irrespective of your business complications, we have accumulated the best technologies and resources to build your iOS application. Security, stability, and performance are the major points we focus on while building your most unique and creative iPhone app.",
  },
  {
    title: "Android App",
    icon: Smartphone,
    desc: "Are you searching for a robust Android app development agency? Digital Alife is here for you. We have built several Android apps successfully. All our customers are pretty happy and satisfied with our work. Allow us to bring a smile to your face too.",
  },
  {
    title: "Web App",
    icon: Globe,
    desc: "Digital Alife builds stunning and robust web apps which function just like an Android one. No need to make an application necessary for Android or iOS. Just develop an app that runs on the web and enjoys the same performance.",
  },
  {
    title: "Hybrid-Native App",
    icon: Layers,
    desc: "Digital Alife has years of experience and skills in developing hybrid-native apps. Hybrid-native apps are the best option for those with a relatively fixed budget. It works almost like a native application and uses a camera, notifications, etc., to work well.",
  },
];

const awards = [
  { platform: "AppFutura", rating: "4.9/5" },
  { platform: "Upwork", rating: "4.9/5" },
  { platform: "GoodFirms", rating: "4.9/5" },
];

/* ---------- app mockup image block ---------- */
function AppMockupImage({ src, alt, badge, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute -inset-8 rounded-full blur-3xl -z-10 opacity-50"
        style={{ background: `radial-gradient(circle, ${GREEN_LIGHT}, transparent 70%)` }}
      />
      <img
        src={src}
        alt={alt}
        className="relative w-full max-w-sm mx-auto drop-shadow-2xl"
      />
      {badge && (
        <div
          className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3"
          style={{ boxShadow: "0 16px 40px -14px rgba(16,30,59,0.3)" }}
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "rgba(30,156,107,0.12)" }}
          >
            <Star size={16} color={GREEN} fill={GREEN} />
          </div>
          <div>
            <p className="text-sm font-bold leading-none" style={{ color: NAVY }}>
              {badge}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="py-50 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1
            className="text-4xl md:text-[42px] font-bold tracking-tight leading-[1.14] mb-6"
            style={{ color: NAVY }}
          >
            We Develop Amazing iOS and Android Apps
          </h1>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-md">
            Make your every idea come true with the industry's best mobile
            app development company. We work for client satisfaction, and
            our clients work with us for a secure and trusted platform.
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
        <div className="flex justify-center">
          <AppMockupImage
            src="/uploads/app-mockup.webp"
            alt="Digital Alife mobile app screens"
            badge="4.9/5 rated"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Ratings strip ---------- */
function RatingsSection() {
  return (
    <section className="py-20 px-6" style={{ background: NAVY }}>
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          We have acquired everything to build your application
        </h2>
        <p className="text-white/60 text-[15px] max-w-2xl mx-auto">
          You will tell us your need, and we will make it a reality based on
          our skills, knowledge, experience, and teamwork.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {awards.map((a) => (
          <div
            key={a.platform}
            className="rounded-2xl bg-white p-7 text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <Star size={16} fill="#F5A524" color="#F5A524" />
              <span className="text-lg font-bold" style={{ color: NAVY }}>
                {a.rating}
              </span>
            </div>
            <p className="text-base font-bold mb-3" style={{ color: GREEN }}>
              {a.platform}
            </p>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              Reviewed by Goodfirms with 4.9/5 ratings based upon client
              reviews.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Feature + tech marquee ---------- */
function FeatureSection() {
  const track = [...techStack, ...techStack];
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <style>{`
        @keyframes techMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tech-track { animation: techMarquee 20s linear infinite; }
        .tech-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
        <div className="flex justify-center">
          <AppMockupImage
            src="/uploads/app-mockup-2.webp"
            alt="Digital Alife shopping app screens"
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-6 rounded-full" style={{ background: GREEN }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GREEN }}>
              Why Digital Alife
            </span>
          </div>
          <h2
            className="text-3xl md:text-[32px] font-bold tracking-tight leading-tight mb-5"
            style={{ color: NAVY }}
          >
            Your business needs a robust and fully functional mobile app to
            grow business
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
            We create all our mobile applications based on your creative
            ideas. We aim to present even the most complicated work by
            making it accessible through our application development.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ background: MIST }}
                >
                  <h.icon size={16} strokeWidth={1.75} color={GREEN} />
                </div>
                <h5 className="text-[13.5px] font-semibold" style={{ color: NAVY }}>
                  {h.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="tech-track flex w-max items-center gap-4">
          {track.map((t, i) => (
            <span
              key={`${t.name}-${i}`}
              className="flex flex-shrink-0 items-center gap-2.5 rounded-full border border-slate-200 pl-3 pr-5 py-2 transition-colors duration-300 hover:border-current"
              style={{ color: NAVY_SOFT }}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{ background: MIST }}
              >
                <t.icon size={30} color={GREEN} strokeWidth={1.75} />
              </span>
              <span className="text-sm font-semibold">{t.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services + CTA ---------- */
function ServicesSection() {
  return (
    <section className="py-20 px-6" style={{ background: MIST }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between gap-8 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-md leading-tight" style={{ color: NAVY }}>
            We serve every kind of <span style={{ color: GREEN }}>mobile app development</span> services
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-md">
            Now you do not need to wander separately for different mobile app
            development services. We develop every type of mobile
            application, whether it is Android, iOS, or something other.
            Build your mobile application now and enjoy continuous growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.05)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 40px -18px rgba(16,30,59,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(16,30,59,0.05)")}
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: MIST }}
              >
                <s.icon size={20} strokeWidth={1.75} color={GREEN} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>
                {s.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-3xl px-8 py-10 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "white", boxShadow: "0 20px 50px -24px rgba(16,30,59,0.2)" }}
        >
          <h3 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: NAVY }}>
            Hire Developers For Custom IT Solutions
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="contact.php"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
              style={{ background: GREEN }}
            >
              Get a free consultation
            </a>
            <a
              href="contact.php"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border transition-colors duration-300"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              Talk to our expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MobileAppDevelopment() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <RatingsSection />
      <ServicesSection />
    </div>
  );
}
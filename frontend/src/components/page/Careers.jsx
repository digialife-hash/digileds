import React from "react";
import {
  ChevronRight,
  ArrowRight,
  Clock,
  Award,
  Smile,
  UsersRound,
  PartyPopper,
  Umbrella,
  Crown,
  Handshake,
  Sprout,
  Target,
  Flame,
  Briefcase,
  MapPin,
  CalendarDays,
  Users,
} from "lucide-react";

const NAVY = "#101E3B";
const GREEN = "#1E9C6B";
const GREEN_LIGHT = "#3FC98D";
const MIST = "#F5F7FA";

const perks = [
  { label: "Flexible Timings", icon: Clock },
  { label: "Team Building", icon: UsersRound },
  { label: "Award for Best Performers", icon: Award },
  { label: "Celebrate all festivals", icon: PartyPopper },
  { label: "Good Work Culture", icon: Smile },
  { label: "Flexible Leave Policy", icon: Umbrella },
];

const expectations = [
  { label: "Positive Attitude", icon: Smile },
  { label: "Leadership Traits", icon: Crown },
  { label: "Excellent Team Player", icon: Handshake },
  { label: "Learn and Grow", icon: Sprout },
  { label: "High Goals", icon: Target },
  { label: "Self-Motivated", icon: Flame },
];

const jobs = [
  {
    title: "PHP Laravel Developer",
    experience: "1 to 3 years",
    positions: "3",
    location: "Noida, Uttar Pradesh, India",
    type: "In Office",
    date: "27-09-2022",
  },
  {
    title: "Android Developer",
    experience: "1 to 3 years",
    positions: "2",
    location: "Noida, Uttar Pradesh, India",
    type: "In Office",
    date: "27-07-2022",
  },
  {
    title: "Project Manager",
    experience: "1 to 3 years",
    positions: "1",
    location: "Noida, Uttar Pradesh, India",
    type: "Full Time",
    date: "27-09-2022",
  },
];

/* ---------- Hero ---------- */
function Hero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(125deg, rgba(236, 236, 238, 0.5), rgba(16,30,59,0.82)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80')`,
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
            Career
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl leading-[1.1]">
          <span className="text-white">Career and </span>
          <span
            style={{
              background: `linear-gradient(90deg, ${GREEN_LIGHT}, #7EE8B8)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Culture
          </span>
        </h1>
        <p className="text-white/65 text-[16px] leading-relaxed max-w-lg mb-10">
          Gain flexibility, reliability, and trust when working with Digital
          Alife. Digital Alife always maintain a high productivity culture in
          the office with learning, progress, and fun. Fulfill all your
          desires with Digital Alife.
        </p>
        <a
          href="#"
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

/* ---------- illustration ---------- */
function TeamIllustration() {
  return (
    <svg viewBox="0 0 340 280" className="w-full h-auto max-w-md mx-auto">
      <circle cx="170" cy="150" r="140" fill={GREEN} opacity="0.1" />
      <rect x="40" y="190" width="260" height="10" rx="5" fill="#E2E6ED" />
      <rect x="70" y="130" width="80" height="60" rx="6" fill="white" stroke="#E2E6ED" strokeWidth="2" />
      <rect x="190" y="130" width="80" height="60" rx="6" fill="white" stroke="#E2E6ED" strokeWidth="2" />
      <circle cx="110" cy="95" r="16" fill="#F5B58A" />
      <rect x="90" y="111" width="40" height="55" rx="12" fill={NAVY} />
      <circle cx="230" cy="95" r="16" fill="#D98A5F" />
      <rect x="210" y="111" width="40" height="55" rx="12" fill={GREEN} opacity="0.85" />
      <circle cx="170" cy="80" r="14" fill="#F0C29A" />
      <rect x="152" y="94" width="36" height="48" rx="11" fill="#3B4CB8" />
      <path d="M150 60 l10 -14 10 14" stroke={GREEN_LIGHT} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="245" cy="50" r="5" fill={GREEN_LIGHT} opacity="0.7" />
      <circle cx="90" cy="45" r="4" fill={GREEN_LIGHT} opacity="0.5" />
    </svg>
  );
}

/* ---------- Perks section ---------- */
function PerksSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-6 rounded-full" style={{ background: GREEN }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GREEN }}>
              Life at Digital Alife
            </span>
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold tracking-tight leading-tight mb-5" style={{ color: NAVY }}>
            Grab the opportunity to work with reverse
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-10">
            You can build a supportive community by working with Digital
            Alife. Each of our employees is a carrier of trust, learning, and
            a sense of respect. Digital Alife believes in working together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perks.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 rounded-xl border border-slate-100 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.04)" }}
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ background: MIST }}
                >
                  <p.icon size={18} strokeWidth={1.75} color={GREEN} />
                </div>
                <h5 className="text-[13.5px] font-semibold" style={{ color: NAVY }}>
                  {p.label}
                </h5>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl p-10" style={{ background: MIST }}>
          <TeamIllustration />
        </div>
      </div>
    </section>
  );
}

/* ---------- Expectations grid ---------- */
function ExpectationsSection() {
  return (
    <section className="py-20 px-6" style={{ background: MIST }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: NAVY }}>
            What do we expect from <span style={{ color: GREEN }}>your employees?</span>
          </h2>
          <p className="text-slate-500 text-[15px]">
            We look for an employee who does his work with utmost honesty and
            integrity and maintains the core values of our company.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {expectations.map((e) => (
            <div
              key={e.label}
              className="group rounded-2xl bg-white border border-slate-100 p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.05)" }}
              onMouseEnter={(ev) => (ev.currentTarget.style.boxShadow = "0 20px 40px -18px rgba(16,30,59,0.2)")}
              onMouseLeave={(ev) => (ev.currentTarget.style.boxShadow = "0 1px 2px rgba(16,30,59,0.05)")}
            >
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: MIST }}
              >
                <e.icon size={20} strokeWidth={1.75} color={GREEN} />
              </div>
              <h5 className="text-[14.5px] font-semibold" style={{ color: NAVY }}>
                {e.label}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Current openings ---------- */
function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-b-0">
      <span className="flex items-center gap-2 text-[13px] text-slate-400">
        <Icon size={14} />
        {label}
      </span>
      <span className="text-[13px] font-medium text-right" style={{ color: NAVY }}>
        {value}
      </span>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div
      className="group rounded-2xl bg-white border border-slate-100 p-7 transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.05)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 45px -20px rgba(16,30,59,0.22)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(16,30,59,0.05)")}
    >
      <h4 className="text-lg font-bold mb-5" style={{ color: NAVY }}>
        {job.title}
      </h4>
      <div>
        <DetailRow icon={Award} label="Required Experience" value={job.experience} />
        <DetailRow icon={Users} label="Number of Position" value={job.positions} />
        <DetailRow icon={MapPin} label="Job Location" value={job.location} />
        <DetailRow icon={Briefcase} label="Job Type" value={job.type} />
      </div>
      <div className="flex items-center justify-between mt-6 pt-1">
        <span className="flex items-center gap-1.5 text-[12px] text-slate-400">
          <CalendarDays size={13} />
          {job.date}
        </span>
        <a
          href="contact.php"
          className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
          style={{ background: GREEN }}
        >
          Apply Now
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

function OpeningsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: NAVY }}>
            Current <span style={{ color: GREEN }}>Openings</span>
          </h2>
          <p className="text-slate-500 text-[15px]">
            Collect the information about all the new job openings. Apply for
            the opportunities, we will go through your application and let
            you know your position at Digital Alife.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Careers() {
  return (
    <div>
      <Hero />
      <PerksSection />
      <ExpectationsSection />
      <OpeningsSection />
    </div>
  );
}
import React, { useState } from "react";
import {
  MapPin,
  Star,
  ArrowLeft,
  ArrowRight,
  Quote,
  Users,
} from "lucide-react";

const NAVY = "#101E3B";
const GREEN = "#1E9C6B";
const MIST = "#F5F7FA";

const testimonials = [
  {
    quote:
      "Developing and designing a website application may be harder and more competitive for others but not for us. We are beyond the competition and suggest you do the same with our services. Our digital marketing and app development services give you the courage and wings to fly unlimited.",
    name: "Mayank Goshwami",
    location: "Jaipur, Rajasthan",
  },
  {
    quote:
      "Digital Alife understood our brand from the first call and delivered a website that actually reflects what we do. Communication stayed clear through every stage, and the after-launch support has been just as reliable.",
    name: "Priya Sharma",
    location: "Noida, Uttar Pradesh",
  },
  {
    quote:
      "We came in with a tight deadline and an even tighter budget, and the team still managed to ship a clean, fast site without cutting corners. Would recommend them to any small business owner.",
    name: "Rohit Verma",
    location: "Delhi NCR",
  },
  {
    quote:
      "What stood out was how easily they explained technical decisions in plain language, so we always knew what we were paying for. The end product loads fast and looks great on mobile.",
    name: "Anjali Mehta",
    location: "Gurugram, Haryana",
  },
];

function OfficeIllustration() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-auto max-w-sm mx-auto">
      <rect x="10" y="120" width="300" height="8" rx="4" fill="#E7EAF0" />
      <rect x="40" y="80" width="90" height="42" rx="6" fill="#F0F2F6" />
      <rect x="50" y="88" width="34" height="22" rx="3" fill={GREEN} opacity="0.25" />
      <circle cx="65" cy="70" r="12" fill="#F5B58A" />
      <rect x="52" y="82" width="26" height="20" rx="6" fill="#3B4CB8" />
      <rect x="170" y="60" width="100" height="62" rx="8" fill="#F0F2F6" />
      <rect x="184" y="70" width="40" height="26" rx="3" fill={GREEN} opacity="0.3" />
      <circle cx="205" cy="52" r="13" fill="#D98A5F" />
      <rect x="190" y="65" width="30" height="22" rx="6" fill={NAVY} />
      <circle cx="250" cy="55" r="12" fill="#F5B58A" />
      <rect x="236" y="68" width="28" height="20" rx="6" fill="#D65D5D" />
      <ellipse cx="280" cy="122" rx="16" ry="6" fill="#E7EAF0" />
      <rect x="271" y="95" width="18" height="28" rx="4" fill="#8CBB6B" />
      <circle cx="280" cy="88" r="10" fill="#79A85C" />
    </svg>
  );
}

function RatingBadge({ platform, rating, color }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5"
      style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.05)" }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full flex-shrink-0"
        style={{ background: `${color}1A` }}
      >
        <Star size={16} color={color} fill={color} />
      </div>
      <div>
        <p className="text-sm font-semibold" style={{ color: NAVY }}>
          {platform}
        </p>
        <p className="text-[11px] text-slate-400">{rating} star rating</p>
      </div>
    </a>
  );
}

function OurOfficeLocation() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
            style={{ color: NAVY }}
          >
            Our office <span style={{ color: GREEN }}>location</span>
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
            You are warmly welcome to enter our office and discuss your
            future ideas with us. We will boost your business with our
            development and marketing services.
          </p>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            Digital Alife gives you tremendous wings to fly so that you can
            touch the highest growth of your business and industry.
          </p>
        </div>

        <div className="relative">
          <div
            className="rounded-2xl bg-white border border-slate-100 p-5 flex items-start gap-3 mb-6 max-w-sm ml-auto"
            style={{ boxShadow: "0 8px 24px -12px rgba(16,30,59,0.18)" }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full flex-shrink-0"
              style={{ background: "rgba(30,156,107,0.12)" }}
            >
              <MapPin size={18} color={GREEN} />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: NAVY }}>
              Singhal Tower, Labour chowk, Deepak Vihar, Khora Colony, Sector
              58, Noida, Uttar Pradesh 201309
            </p>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{ background: MIST }}
          >
            <OfficeIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function DotBackdrop() {
  const cols = 7;
  const rows = 6;
  const dots = Array.from({ length: cols * rows });
  return (
    <div
      className="absolute -left-6 -top-6 grid gap-2 opacity-60 -z-10"
      style={{ gridTemplateColumns: `repeat(${cols}, 5px)` }}
    >
      {dots.map((_, i) => (
        <span
          key={i}
          className="h-1 w-1 rounded-full"
          style={{ background: GREEN }}
        />
      ))}
    </div>
  );
}

function ReadMoreReviews() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const total = testimonials.length;
  const current = testimonials[index];
  const canCycle = total > 1;

  const go = (dir) => {
    if (!canCycle) return;
    setFading(true);
    setTimeout(() => {
      setIndex((i) => (i + dir + total) % total);
      setFading(false);
    }, 180);
  };

  return (
    <section className="py-20 px-6" style={{ background: MIST }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: NAVY }}
          >
            Read more <span style={{ color: GREEN }}>reviews</span>
          </h2>
          <p className="text-slate-500 text-[15px] mb-8">
            Read our reviews from all over the world.
          </p>
          <div className="flex flex-wrap gap-4">
            <RatingBadge platform="Google" rating="4.9" color="#4285F4" />
            <RatingBadge platform="Facebook" rating="4.7" color="#1877F2" />
          </div>
        </div>

        <div className="relative">
          <DotBackdrop />
          <div
            className="relative rounded-2xl bg-white p-8 transition-opacity duration-200"
            style={{
              boxShadow: "0 12px 32px -16px rgba(16,30,59,0.2)",
              opacity: fading ? 0 : 1,
            }}
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl mb-5"
              style={{ background: "rgba(30,156,107,0.12)" }}
            >
              <Quote size={20} color={GREEN} />
            </div>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
              {current.quote}
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full flex-shrink-0"
                style={{ background: "rgba(30,156,107,0.12)" }}
              >
                <Users size={18} color={GREEN} />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>
                  {current.name}
                </p>
                <p className="text-[13px] text-slate-400">
                  {current.location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 20 : 6,
                    background: i === index ? GREEN : "#D9DEE6",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                disabled={!canCycle}
                aria-label="Previous review"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border transition-colors duration-300"
                style={{
                  borderColor: canCycle ? "#E2E6ED" : "#EEF0F3",
                  color: canCycle ? NAVY : "#C7CCD6",
                  cursor: canCycle ? "pointer" : "not-allowed",
                }}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                disabled={!canCycle}
                aria-label="Next review"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300"
                style={{
                  background: canCycle ? NAVY : "#DDE3EA",
                  color: "white",
                  cursor: canCycle ? "pointer" : "not-allowed",
                }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OfficeAndReviews() {
  return (
    <div>
      <OurOfficeLocation />
      <ReadMoreReviews />
    </div>
  );
}
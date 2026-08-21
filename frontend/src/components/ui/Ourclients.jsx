import React from "react";
import { Star, RefreshCw, PiggyBank, Sunrise, Building2, Music } from "lucide-react";

const NAVY = "#101E3B";
const GREEN = "#1E9C6B";

const clients = [
  {
    name: "App Store",
    sub: "Review us on",
    icon: Star,
    iconColor: "#1E9C6B",
    textColor: NAVY,
  },
  {
    name: "Clutch Review",
    sub: null,
    icon: RefreshCw,
    iconColor: "#1F2937",
    textColor: "#1F2937",
  },
  {
    name: "Fino Finance",
    sub: null,
    icon: PiggyBank,
    iconColor: "#C2694F",
    textColor: "#C2694F",
  },
  {
    name: "Manu Sunrise",
    sub: null,
    icon: Sunrise,
    iconColor: "#3B4CB8",
    textColor: "#3B4CB8",
  },
  {
    name: "Nuvoko",
    sub: "Interior Designs",
    icon: Building2,
    iconColor: "#9333EA",
    textColor: "#9333EA",
  },
  {
    name: "Rockstar",
    sub: "Music Band",
    icon: Music,
    iconColor: "#F5A524",
    textColor: "#F5A524",
  },
];

function LogoBadge({ name, sub, icon: Icon, iconColor, textColor }) {
  return (
    <div className="flex flex-shrink-0 items-center gap-3 px-8">
      <Icon size={26} strokeWidth={1.75} color={iconColor} />
      <div className="whitespace-nowrap">
        {sub && (
          <p className="text-[10px] font-medium text-slate-400 leading-none mb-0.5">
            {sub}
          </p>
        )}
        <p
          className="text-lg font-bold tracking-tight leading-none"
          style={{ color: textColor }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

export default function OurClients() {
  const track = [...clients, ...clients, ...clients];
  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <style>{`
        @keyframes clientMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
        .client-track {
          animation: clientMarquee 22s linear infinite;
        }
        .client-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="lg:w-56 flex-shrink-0">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: NAVY }}
          >
            Our clients
          </h2>
          <span
            className="mt-3 inline-block h-1 w-10 rounded-full"
            style={{ background: GREEN }}
          />
        </div>

        <div
          className="relative flex-1 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="client-track flex w-max items-center">
            {track.map((c, i) => (
              <LogoBadge key={`${c.name}-${i}`} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
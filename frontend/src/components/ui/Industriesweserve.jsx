import React from "react";
import {
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
} from "lucide-react";

const NAVY = "#101E3B";
const NAVY_SOFT = "#182A50";
const GREEN = "#3FC98D";

const industries = [
  { label: "Real Estate", icon: Home },
  { label: "Tour & travels", icon: Luggage },
  { label: "Education", icon: GraduationCap },
  { label: "Transport", icon: Car },
  { label: "Event", icon: Calendar },
  { label: "eCommerce", icon: ShoppingBag },
  { label: "Game", icon: Gamepad2 },
  { label: "Healthcare", icon: HeartPulse },
  { label: "Finance", icon: PiggyBank },
  { label: "Restaurant", icon: UtensilsCrossed },
  { label: "On-demand", icon: Layers },
  { label: "Grocery", icon: ShoppingBasket },
];

function DotGrid() {
  const dots = Array.from({ length: 8 * 5 });
  return (
    <div
      className="hidden lg:grid absolute top-2 right-0 gap-2.5 opacity-40"
      style={{ gridTemplateColumns: "repeat(8, 4px)" }}
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

function IndustryPill({ label, icon: Icon }) {
  return (
    <div
      className="group flex items-center gap-3 rounded-full pr-6 pl-2 py-2 border transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: NAVY_SOFT,
        borderColor: "rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = GREEN)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
      }
    >
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300"
        style={{ background: "rgba(63,201,141,0.12)" }}
      >
        <Icon size={18} strokeWidth={1.75} color={GREEN} />
      </div>
      <p className="text-sm font-medium text-white whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

export default function IndustriesWeServe() {
  return (
    <section
      className="relative overflow-hidden py-20 px-6"
      style={{ background: NAVY }}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-wrap justify-between gap-10 mb-14">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Industries we serve
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed">
              We serve you with a broad range of web applications and digital
              marketing services, irrespective of your occupation and
              industry.
            </p>
          </div>
          <div className="relative flex-1 min-w-[160px]">
            <DotGrid />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((item) => (
            <IndustryPill key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
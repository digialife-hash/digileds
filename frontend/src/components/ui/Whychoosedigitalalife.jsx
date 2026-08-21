import React from "react";
import {
  ClipboardList,
  Wallet,
  Hourglass,
  UsersRound,
  AppWindow,
  Headset,
} from "lucide-react";

const NAVY = "#101E3B";
const GREEN = "#1E9C6B";
const MIST = "#F5F7FA";

const features = [
  {
    title: "Streamlined project management",
    icon: ClipboardList,
    offset: false,
  },
  {
    title: "Pocket friendly IT solutions",
    icon: Wallet,
    offset: true,
  },
  {
    title: "Project completion in given time",
    icon: Hourglass,
    offset: false,
  },
  {
    title: "Best experts are co-working",
    icon: UsersRound,
    offset: true,
  },
  {
    title: "User-friendly custom made apps",
    icon: AppWindow,
    offset: false,
  },
  {
    title: "24*7 customer support",
    icon: Headset,
    offset: true,
  },
];

function FeatureCard({ title, icon: Icon, offset }) {
  return (
    <div
      className={`group rounded-2xl bg-white border border-slate-100 p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
        offset ? "md:mt-8" : ""
      }`}
      style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.05)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 20px 40px -18px rgba(16,30,59,0.2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 1px 2px rgba(16,30,59,0.05)")
      }
    >
      <div
        className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
        style={{ background: MIST }}
      >
        <Icon size={22} strokeWidth={1.75} color={GREEN} />
      </div>
      <h5
        className="text-[14px] font-semibold leading-snug"
        style={{ color: NAVY }}
      >
        {title}
      </h5>
    </div>
  );
}

export default function WhyChooseDigitalAlife() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
            style={{ color: NAVY }}
          >
            Why <span style={{ color: GREEN }}>choose</span> Digital Alife?
          </h2>
          <h4
            className="text-lg font-semibold leading-relaxed mb-5"
            style={{ color: NAVY }}
          >
            Digital Alife not only works as a web developer and digital
            marketer for you, but it also acts as your lifelong partner.
          </h4>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            Digital Alife is the synonym of quality and excellence. We have
            made an extensive partnerships with renowned web-app development
            and digital marketing agencies in India. Our services are
            exclusive to empower you with the most advanced technologies. We
            work until our clients do not get complete satisfaction. Let us
            bring endless growth into your business with our website and
            application design and development services.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import {
  Database,
  Compass,
  PenTool,
  CheckCircle2,
  LifeBuoy,
  ArrowUpRight,
} from "lucide-react";

const NAVY = "#101E3B";
const GREEN = "#1E9C6B";
const MIST = "#F5F7FA";

/**
 * `image` paths point at your existing /uploads folder — keep those
 * files where they are (or adjust the path) and the cards will pick
 * up the real screenshots automatically.
 */
const projects = [
  {
    name: "P N J & Associates",
    tag: "CA",
    href: "https://easeyourtax.com/",
    image: "uploads/img_699d6d0849ec64.88750001.webp",
  },
  {
    name: "No1 Ambulance",
    tag: "Ambulance Service",
    href: "https://no1ambulance.com/index2.php",
    image: "uploads/img_699d6d5c191847.82653185.webp",
  },
  {
    name: "Laptech IT Solution",
    tag: "Laptop Reparing",
    href: "https://laptechitsolutions.in/",
    image: "uploads/img_699d5fe12033e3.31804057.webp",
  },
  {
    name: "Sabka Prayas Society",
    tag: "NGO",
    href: "https://www.sabkaprayassociety.org/",
    image: "uploads/img_699d617b9b2549.36922202.webp",
  },
  {
    name: "Dream Property Hub",
    tag: "Property",
    href: "https://dreampropertyhub.com/",
    image: "uploads/img_699d6262341107.97365213.webp",
  },
  {
    name: "Alley Printing",
    tag: "Printing Press",
    href: "https://www.alleyprinters.com/",
    image: "uploads/img_699d5f06a387e9.87841685.webp",
  },
];

const steps = [
  {
    n: "01",
    title: "Information accumulating",
    desc: "Digital Alife will collect all the data and information about your business and accumulate the required tools and resources.",
    icon: Database,
  },
  {
    n: "02",
    title: "Strategy and planning",
    desc: "Our team of experts will now prepare a proper strategy and plan to develop your website or application.",
    icon: Compass,
  },
  {
    n: "03",
    title: "Design and development",
    desc: "Your application or website will now start developing in this stage. We will formulate your user interface with advanced technologies.",
    icon: PenTool,
  },
  {
    n: "04",
    title: "Testing and execution",
    desc: "Designing and developing is not enough for our customers. We will test your project on our responsibility and execute it after your verification.",
    icon: CheckCircle2,
  },
  {
    n: "05",
    title: "Support & maintenance",
    desc: "Digital Alife makes a lifelong relationship with its clients. You will be able to contact and unravel your problems easily.",
    icon: LifeBuoy,
  },
];

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <span
        className="h-1.5 w-6 rounded-full"
        style={{ background: GREEN }}
      />
      <span
        className="text-xs font-semibold tracking-[0.2em] uppercase"
        style={{ color: GREEN }}
      >
        {children}
      </span>
    </div>
  );
}

function BrowserFrame({ project }) {
  const { name, image, href } = project;
  const domain = href.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  return (
    <div
      className="rounded-t-xl overflow-hidden border border-b-0 border-slate-200"
      style={{ background: "#E9EDF2" }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <div
          className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-slate-400"
          style={{ border: "0.5px solid #DCE1E8" }}
        >
          {domain}
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={`${name} website preview`}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl bg-white border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "0 1px 2px rgba(16,30,59,0.05)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 20px 40px -16px rgba(16,30,59,0.2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 1px 2px rgba(16,30,59,0.05)")
      }
    >
      <div className="relative">
        <BrowserFrame project={project} />
        <div className="pointer-events-none absolute inset-0 top-9 flex items-center justify-center bg-[#101E3B]/0 transition-colors duration-300 group-hover:bg-[#101E3B]/40">
          <span
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
            style={{ background: "white", color: NAVY }}
          >
            Visit site
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      <div className="border-t border-slate-100 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-[15px] font-semibold" style={{ color: NAVY }}>
              {project.name}
            </h3>
            <p className="text-[13px] font-medium" style={{ color: GREEN }}>
              {project.tag}
            </p>
          </div>
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300"
            style={{ background: MIST }}
          >
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:rotate-45"
              style={{ color: NAVY }}
            />
          </div>
        </div>
        <p className="mt-3 text-[12px] font-medium text-slate-400">
          Developed by Digital Alife Pvt. Ltd.
        </p>
      </div>
    </a>
  );
}

function StepCard({ step, index }) {
  const isLast = index === steps.length - 1;
  return (
    <div className="relative flex-1 min-w-[180px]">
      {!isLast && (
        <div
          className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px"
          style={{
            background:
              "repeating-linear-gradient(90deg, #CBD5E1 0, #CBD5E1 6px, transparent 6px, transparent 12px)",
          }}
        />
      )}
      <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center">
        <div className="relative flex-shrink-0">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-white font-semibold text-sm relative z-10"
            style={{ background: NAVY }}
          >
            {step.n}
          </div>
        </div>
        <div className="md:mt-5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg mb-3 md:mx-auto"
            style={{ background: "rgba(30,156,107,0.1)" }}
          >
            <step.icon size={45} color={GREEN} strokeWidth={1.75} />
          </div>
          <h4
            className="text-[15px] font-semibold mb-1.5"
            style={{ color: NAVY }}
          >
            {step.title}
          </h4>
          <p className="text-[13px] leading-relaxed text-slate-500 md:max-w-[190px] md:mx-auto">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DigitalAlifeShowcase() {
  return (
    <div style={{ background: MIST }} className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Recent work */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: NAVY }}
            >
              Our recent work
            </h2>
          </div>
          <a
            href="portfolio.php"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ background: NAVY }}
          >
            View all work
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        {/* How we work */}
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <SectionLabel>Our process</SectionLabel>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            style={{ color: NAVY }}
          >
            How we work
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-[15px]">
            A systematic, well-structured process that turns every project
            into a lasting relationship.
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-slate-100 p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-4">
            {steps.map((step, i) => (
              <StepCard key={step.n} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
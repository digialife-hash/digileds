import React from "react";
import {
  ChevronRight,
  ArrowRight,
  Ear,
  Database,
  NotebookPen,
  Code2,
  CheckCircle2,
  Server,
  LifeBuoy,
  Phone,
  Plus,
} from "lucide-react";

const NAVY = "#101E3B";
const GREEN = "#1E9C6B";
const GREEN_LIGHT = "#3FC98D";
const MIST = "#F5F7FA";

const steps = [
  {
    n: "01",
    icon: Ear,
    title: "Listening to your needs and requirements",
    desc: "We begin our work by listening to the needs of our clients. Each business retains its specialties and needs. So, we can not give the same solution to every client. We understand our client's business and ask them about their needs and requirements.",
  },
  {
    n: "02",
    icon: Database,
    title: "Collecting the Information",
    desc: "The team of experts begins with an in-depth exploration of your industry details to establish a strong foundation for your website or mobile application. We collect this information to analyze the UI required and the purposes and goals of your solution.",
  },
  {
    n: "03",
    icon: NotebookPen,
    title: "Creating plans & Strategies",
    desc: "Based on the collected data and information, our team prepares plans and strategies for creating your website and application. All these plans are of course discussed with you and once the confirmation is received, we move ahead.",
  },
  {
    n: "04",
    icon: Code2,
    title: "Start Coding/Implementation",
    desc: "Now that you have given the confirmation, our developer team starts coding to develop your website and application. This step is much more complicated. It takes the most time to complete as this is a very technical step.",
  },
  {
    n: "05",
    icon: CheckCircle2,
    title: "Testing and Quality Check",
    desc: "After your website and application are ready, now its quality is checked by our experts. Inside this, your product is checked for speed and performance. If we see any deficiency during testing, then we correct it again.",
  },
  {
    n: "06",
    icon: Server,
    title: "Server execution",
    desc: "This is the time to host your website and application on your server and experience real-time use. We will execute your application and website on your server and will rectify any problem during real-time testing.",
  },
  {
    n: "07",
    icon: LifeBuoy,
    title: "Post-service Support and Maintenance",
    desc: "Our services do not end here. You know our end-motive is to satisfy you completely. So we also give you a post-service solution. Within this, you can contact us to fix the problems or errors in your product for a limited time.",
  },
];

/* ---------- Hero ---------- */
function Hero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(125deg, rgba(249, 249, 249, 0.45), rgba(16,30,59,0.82)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80')`,
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
            How We Work
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl leading-[1.1]">
          <span className="text-white">Our Development </span>
          <span
            style={{
              background: `linear-gradient(90deg, ${GREEN_LIGHT}, #7EE8B8)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Process
          </span>
        </h1>
        <p className="text-white/65 text-[16px] leading-relaxed max-w-lg mb-10">
          We create an adequate plan and strategy before developing your
          website or application. We at Digital Alife make these plans and
          strategies by maintaining the goal, vision, and core integrity of
          our Digital Alife company.
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

/* ---------- Intro ---------- */
function Intro() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <h2
          className="lg:col-span-5 text-3xl md:text-[32px] font-bold tracking-tight leading-tight"
          style={{ color: NAVY }}
        >
          We start your project with a deep awareness of your needs and
          requirement
        </h2>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
            Our goal is to provide maximum benefit to our customers with our
            services. For this, it is most important that we recognize the
            actual necessities and prerequisites of our customer's journey.
          </p>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            We peacefully sit with our clients and ask for their requirements
            and expectations and then start working. We always take
            suggestions and ideas from our clients to produce the best
            result.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Timeline ---------- */
function StepRow({ step, index }) {
  const reverse = index % 2 === 1;
  const isLast = index === steps.length - 1;
  return (
    <div className="relative">
      {!isLast && (
        <div
          className="absolute left-1/2 top-16 hidden md:block w-px -translate-x-1/2"
          style={{
            height: "calc(100% + 2.5rem)",
            background:
              "repeating-linear-gradient(180deg, #CBEBDB 0, #CBEBDB 6px, transparent 6px, transparent 12px)",
          }}
        />
      )}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-10 relative ${
          reverse ? "" : ""
        }`}
      >
        <div className={reverse ? "md:order-2" : ""}>
          <div
            className="rounded-2xl p-8 flex items-center justify-center"
            style={{ background: MIST }}
          >
            <div
              className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white"
              style={{ boxShadow: "0 12px 30px -14px rgba(16,30,59,0.25)" }}
            >
              <step.icon size={36} strokeWidth={1.5} color={GREEN} />
            </div>
          </div>
        </div>
        <div className={reverse ? "md:order-1" : ""}>
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white mb-4 relative z-10"
            style={{ background: NAVY }}
          >
            {step.n}
          </span>
          <h3
            className="text-2xl font-bold tracking-tight mb-3"
            style={{ color: NAVY }}
          >
            {step.title}
          </h3>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function TimelineSection() {
  return (
    <section className="py-20 px-6" style={{ background: MIST }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: NAVY }}>
            How do we develop <span style={{ color: GREEN }}>your product?</span>
          </h2>
          <p className="text-slate-500 text-[15px]">
            Digital Alife has created its own systematic plan and strategy to
            serve its clients with digital services.
          </p>
        </div>

        <div className="divide-y divide-slate-200/70">
          {steps.map((step, i) => (
            <StepRow key={step.n} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTASection() {
  return (
    <section className="px-6 py-20 bg-white">
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
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug mb-3">
              Hire Developers For Custom IT Solutions
            </h3>
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

export default function DevelopmentProcess() {
  return (
    <div>
      <Hero />
      <Intro />
      <TimelineSection />
      <CTASection />
    </div>
  );
}
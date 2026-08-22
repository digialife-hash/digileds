import React from "react";
import {
  ArrowRight,
  Search,
  Mail,
  PenTool,
  Megaphone,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Globe,
  MousePointerClick,
  LineChart,
  CheckCircle2,
  Sparkles,
  Zap,
  Eye,
  UserPlus,
  DollarSign,
  RefreshCw,
  Smartphone,
  MessageCircle,
  FileText,
  Layers,
  Activity,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   COLORS
========================================================= */

const NAVY = "#0C2C50";
const GREEN = "#2E9E6D";
const GREEN_LIGHT = "#4CBB8E";
const MIST = "#F7FAF9";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Search Engine Optimization",
    short: "SEO",
    image:
      "/uploads/Search_Engine_Optimization.jpg",
    description:
      "Improve your Google visibility, attract high-intent visitors and build long-term organic traffic with a complete SEO strategy.",
    points: [
      "Technical SEO",
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
    ],
  },
  {
    number: "02",
    title: "Pay-Per-Click Advertising",
    short: "PPC",
    image:
      "/uploads/Advertising.jpg",
    description:
      "Reach customers exactly when they are searching for your products or services through carefully managed paid campaigns.",
    points: [
      "Google Ads",
      "Meta Ads",
      "Campaign Setup",
      "Performance Optimization",
    ],
  },
  {
    number: "03",
    title: "Social Media Marketing",
    short: "SOCIAL",
    image:
      "/uploads/Social_Media_Marketing.jpg",
    description:
      "Build a stronger social presence with content, campaigns and community strategies designed around your audience.",
    points: [
      "Social Strategy",
      "Content Planning",
      "Community Growth",
      "Campaign Management",
    ],
  },
  {
    number: "04",
    title: "Email Marketing",
    short: "EMAIL",
    image:
      "/uploads/EmailMarketing.jpg",
    description:
      "Turn subscribers into customers through personalized campaigns, automated journeys and smart retention strategies.",
    points: [
      "Email Campaigns",
      "Automation",
      "Lead Nurturing",
      "Customer Retention",
    ],
  },
  {
    number: "05",
    title: "Content Marketing",
    short: "CONTENT",
    image:
      "/uploads/ContentMarketing.jpg",
    description:
      "Create valuable content that answers customer questions, builds authority and supports your SEO and conversion goals.",
    points: [
      "Blog Strategy",
      "Website Content",
      "Creative Copy",
      "Content Distribution",
    ],
  },
  {
    number: "06",
    title: "Analytics & CRO",
    short: "ANALYTICS",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85",
    description:
      "Understand what your visitors do and continuously improve your campaigns, landing pages and conversion funnel.",
    points: [
      "Google Analytics",
      "Conversion Tracking",
      "A/B Testing",
      "Funnel Optimization",
    ],
  },
];

/* =========================================================
   ADDITIONAL SERVICES
========================================================= */

const additionalServices = [
  {
    icon: Target,
    title: "Lead Generation",
    text: "Build campaigns and landing experiences that turn visitors into qualified leads.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
  {
    icon: RefreshCw,
    title: "Retargeting",
    text: "Reconnect with people who visited your website but weren't ready to convert.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    text: "Reach customers where they spend a large part of their digital time — on mobile.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    icon: MessageCircle,
    title: "Online Reputation",
    text: "Strengthen trust through reviews, brand communication and reputation management.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    text: "Create focused landing experiences designed around specific campaigns and conversions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: Layers,
    title: "Marketing Automation",
    text: "Connect repetitive marketing tasks into smarter automated customer journeys.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];

/* =========================================================
   HERO
========================================================= */

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-12 sm:px-10 lg:px-14 lg:pb-28 lg:pt-32"
      style={{ background: "#EAF5F6" }}
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full blur-3xl"
        style={{ background: `${GREEN}18` }}
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full blur-3xl"
        style={{ background: `${NAVY}07` }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 shadow-sm">
            <Sparkles size={14} color={GREEN} />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: GREEN }}
            >
              Digital Marketing
            </span>
          </div>

          <h1
            className="max-w-2xl text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-[62px]"
            style={{ color: NAVY }}
          >
           Boost your business 
            <br />
            <span style={{ color: GREEN }}>growth with digital marketing</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            We help businesses grow online with SEO, paid advertising, social
            media, content and data-driven marketing strategies that turn
            attention into real customers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/quote"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1"
              style={{
                background: GREEN,
                boxShadow: `0 18px 40px ${GREEN}35`,
              }}
            >
              Start growing
              <ArrowRight size={17} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5"
              style={{ color: NAVY }}
            >
              Explore services
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3">
            {[
              "SEO",
              "Google Ads",
              "Social Media",
              "Email",
              "Content",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-slate-500"
              >
                <CheckCircle2 size={14} color={GREEN} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative mx-auto w-full max-w-xl">
          <div
            className="absolute inset-5 rounded-[3rem] blur-3xl"
            style={{ background: `${GREEN}20` }}
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-2xl sm:p-5">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src="/uploads/social.jpg"
                alt="Digital marketing campaign"
                className="h-[330px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C50]/80 via-[#0C2C50]/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/60">
                      Growth marketing
                    </p>

                    <h3 className="mt-1 text-xl font-black text-white">
                      Strategy that moves numbers.
                    </h3>
                  </div>

                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: GREEN }}
                  >
                    <TrendingUp size={20} color="white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mini metrics */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#F7FAF9] p-3">
                <Search size={15} color={GREEN} />

                <p
                  className="mt-2 text-lg font-black"
                  style={{ color: NAVY }}
                >
                  +68%
                </p>

                <p className="text-[9px] text-slate-400">
                  Organic traffic
                </p>
              </div>

              <div className="rounded-xl bg-[#F7FAF9] p-3">
                <MousePointerClick size={15} color={GREEN} />

                <p
                  className="mt-2 text-lg font-black"
                  style={{ color: NAVY }}
                >
                  4.8x
                </p>

                <p className="text-[9px] text-slate-400">
                  Average ROAS
                </p>
              </div>

              <div className="rounded-xl bg-[#F7FAF9] p-3">
                <UserPlus size={15} color={GREEN} />

                <p
                  className="mt-2 text-lg font-black"
                  style={{ color: NAVY }}
                >
                  +42%
                </p>

                <p className="text-[9px] text-slate-400">
                  Qualified leads
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:block md:-left-8">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ background: `${GREEN}12` }}
              >
                <TrendingUp size={17} color={GREEN} />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Campaign growth
                </p>

                <p
                  className="mt-0.5 text-sm font-black"
                  style={{ color: NAVY }}
                >
                  +32.8%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS
========================================================= */

function StatsSection() {
  const stats = [
    {
      icon: Eye,
      value: "2.8M+",
      label: "Monthly impressions",
    },
    {
      icon: MousePointerClick,
      value: "68K+",
      label: "Website visits",
    },
    {
      icon: UserPlus,
      value: "8.9K+",
      label: "Qualified leads",
    },
    {
      icon: DollarSign,
      value: "4.8x",
      label: "Average ROAS",
    },
  ];

  return (
    <section className="bg-white px-6 py-14 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-[#F7FAF9] lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={`p-6 sm:p-8 ${
                index !== 3 ? "border-slate-200 lg:border-r" : ""
              } ${
                index < 2 ? "border-b lg:border-b-0" : ""
              }`}
            >
              <Icon size={19} color={GREEN} />

              <p
                className="mt-4 text-2xl font-black sm:text-3xl"
                style={{ color: NAVY }}
              >
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =========================================================
   INTRO
========================================================= */

function IntroSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        {/* IMAGE */}
        <div className="relative order-2 lg:order-1">
          <div
            className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl"
            style={{ background: `${GREEN}10` }}
          />

          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/uploads/a.jpg"
              alt="Digital marketing strategy meeting"
              className="h-[430px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C50]/70 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/60">
                The goal
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                More visibility. More leads. More revenue.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-1 lg:order-2">
          <p
            className="text-xs font-bold uppercase tracking-[.25em]"
            style={{ color: GREEN }}
          >
            Digital growth strategy
          </p>

          <h2
            className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl"
            style={{ color: NAVY }}
          >
            Marketing that connects attention with business results.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Getting traffic is only the beginning. A good digital marketing
            strategy connects your website, search visibility, advertising,
            social presence, content and customer communication into one
            consistent growth system.
          </p>

          <p className="mt-4 leading-8 text-slate-500">
            We focus on the metrics that actually matter — qualified traffic,
            leads, conversions, customer acquisition and revenue.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Increase brand visibility",
              "Generate qualified leads",
              "Improve search rankings",
              "Reduce acquisition costs",
              "Build customer relationships",
              "Track measurable results",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F7FAF9] px-4 py-3"
              >
                <CheckCircle2 size={16} color={GREEN} />

                <span
                  className="text-sm font-semibold"
                  style={{ color: NAVY }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICES
========================================================= */

function ServicesSection() {
  return (
    <section
      id="services"
      className="px-6 py-20 sm:px-10 lg:px-14"
      style={{ background: MIST }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p
              className="text-xs font-bold uppercase tracking-[.25em]"
              style={{ color: GREEN }}
            >
              What we do
            </p>

            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: NAVY }}
            >
              Complete digital marketing services.
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-500">
              From getting discovered on Google to converting visitors and
              retaining customers, we cover the essential parts of modern
              digital marketing.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 sm:flex">
            <Activity size={14} color={GREEN} />

            <span className="text-xs font-bold text-slate-500">
              Performance focused
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_-25px_rgba(12,44,80,0.28)]"
            >
              {/* CARD IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C50]/80 via-[#0C2C50]/10 to-transparent" />

                <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#0C2C50]/50 px-3 py-1 text-[10px] font-black text-white backdrop-blur-md">
                  {service.number}
                </span>

                <span
                  className="absolute bottom-4 left-4 rounded-full px-3 py-1 text-[9px] font-black tracking-[.18em] text-white"
                  style={{ background: GREEN }}
                >
                  {service.short}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="p-7">
                <h3
                  className="text-xl font-bold"
                  style={{ color: NAVY }}
                >
                  {service.title}
                </h3>

                <p className="mt-3 text-[13.5px] leading-7 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500"
                    >
                      <CheckCircle2
                        size={12}
                        color={GREEN}
                        strokeWidth={2.2}
                      />

                      {point}
                    </div>
                  ))}
                </div>

                <div
                  className="mt-6 flex items-center gap-2 text-xs font-bold"
                  style={{ color: GREEN }}
                >
                  Explore service

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ADDITIONAL SERVICES
========================================================= */

function MoreServicesSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p
            className="text-xs font-bold uppercase tracking-[.25em]"
            style={{ color: GREEN }}
          >
            More ways to grow
          </p>

          <h2
            className="mt-4 text-3xl font-bold sm:text-4xl"
            style={{ color: NAVY }}
          >
            Everything around the campaign matters too.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            We look beyond individual campaigns and build the supporting
            digital experiences that help marketing perform better.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {additionalServices.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C50]/75 to-transparent" />

                  <div
                    className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: GREEN }}
                  >
                    <Icon size={18} color="white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="font-bold"
                    style={{ color: NAVY }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FUNNEL
========================================================= */

function FunnelSection() {
  const funnel = [
    {
      icon: Eye,
      title: "Awareness",
      text: "People discover your brand",
      width: "100%",
    },
    {
      icon: Search,
      title: "Interest",
      text: "They search and explore",
      width: "82%",
    },
    {
      icon: Users,
      title: "Consideration",
      text: "They compare and evaluate",
      width: "64%",
    },
    {
      icon: MousePointerClick,
      title: "Conversion",
      text: "They take action",
      width: "45%",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      text: "They return and recommend",
      width: "31%",
    },
  ];

  return (
    <section
      className="overflow-hidden px-6 py-20 sm:px-10 lg:px-14"
      style={{ background: NAVY }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&q=85"
              alt="Digital marketing analytics dashboard"
              className="h-[470px] w-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C50] via-[#0C2C50]/30 to-transparent" />
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p
              className="text-[9px] font-bold uppercase tracking-[.2em]"
              style={{ color: GREEN_LIGHT }}
            >
              Customer journey
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              From first impression to loyal customer.
            </h3>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p
            className="text-xs font-bold uppercase tracking-[.25em]"
            style={{ color: GREEN_LIGHT }}
          >
            Full customer journey
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Marketing isn't just about clicks.
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-white/60">
            We look at the entire journey — how people discover your brand,
            why they trust it, what makes them convert and what brings them
            back.
          </p>

          <div className="mt-8 space-y-3">
            {funnel.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div
                    className="absolute bottom-0 left-0 top-0 opacity-10"
                    style={{
                      width: item.width,
                      background: GREEN_LIGHT,
                    }}
                  />

                  <div className="relative flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${GREEN}20` }}
                    >
                      <Icon size={18} color={GREEN_LIGHT} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        {item.text}
                      </p>
                    </div>

                    <span
                      className="text-xs font-black"
                      style={{ color: GREEN_LIGHT }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ANALYTICS
========================================================= */

function AnalyticsSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1100&q=85"
              alt="Digital marketing analytics"
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C50]/80 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/60">
                    Performance dashboard
                  </p>

                  <p className="mt-1 text-xl font-black text-white">
                    Decisions backed by data.
                  </p>
                </div>

                <BarChart3 size={26} color={GREEN_LIGHT} />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[.25em]"
              style={{ color: GREEN }}
            >
              Data & analytics
            </p>

            <h2
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl"
              style={{ color: NAVY }}
            >
              Stop guessing. Start optimizing.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Every marketing channel generates data. We turn that data into
              useful insights so you know what's working, what's wasting money
              and where the next opportunity is.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: BarChart3,
                  title: "Campaign reporting",
                  text: "Clear reports that show performance and progress.",
                },
                {
                  icon: Activity,
                  title: "Conversion tracking",
                  text: "Understand which campaigns actually generate results.",
                },
                {
                  icon: TrendingUp,
                  title: "Continuous optimization",
                  text: "Use real performance data to improve every campaign.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-slate-100 p-4"
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${GREEN}10` }}
                    >
                      <Icon size={17} color={GREEN} />
                    </div>

                    <div>
                      <h3
                        className="text-sm font-bold"
                        style={{ color: NAVY }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

function ProcessSection() {
  const process = [
    {
      number: "01",
      title: "Discover",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
      text: "Understand your business, audience, competitors and current digital presence.",
    },
    {
      number: "02",
      title: "Strategize",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&q=80",
      text: "Build a channel strategy around your goals, budget and customer journey.",
    },
    {
      number: "03",
      title: "Create",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=700&q=80",
      text: "Develop campaigns, content, landing pages and creatives.",
    },
    {
      number: "04",
      title: "Launch",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
      text: "Launch campaigns with proper tracking and measurable objectives.",
    },
    {
      number: "05",
      title: "Optimize",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
      text: "Analyze results, test new ideas and continuously improve performance.",
    },
  ];

  return (
    <section
      className="px-6 py-20 sm:px-10 lg:px-14"
      style={{ background: MIST }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p
            className="text-xs font-bold uppercase tracking-[.25em]"
            style={{ color: GREEN }}
          >
            Our process
          </p>

          <h2
            className="mt-4 text-3xl font-bold sm:text-4xl"
            style={{ color: NAVY }}
          >
            A smarter way to grow online.
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-slate-500">
            Strategy first. Data always. Continuous improvement throughout.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {process.map((item) => (
            <div
              key={item.number}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* PROCESS IMAGE */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C50]/80 to-transparent" />

                <span className="absolute right-3 top-3 rounded-full bg-white/20 px-2.5 py-1 text-[9px] font-black text-white backdrop-blur">
                  {item.number}
                </span>
              </div>

              <div className="p-5">
                <h3
                  className="font-bold"
                  style={{ color: NAVY }}
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function CTASection() {
  return (
    <section className="bg-white px-6 pb-20 pt-6 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-[2rem]"
          style={{ background: NAVY }}
        >
          {/* CTA IMAGE */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80"
              alt=""
              className="h-full w-full object-cover opacity-20"
            />

            <div className="absolute inset-0 bg-[#0C2C50]/85" />
          </div>

          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: `${GREEN}35` }}
          />

          <div className="relative px-8 py-14 md:px-14 md:py-16">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
              <div className="max-w-xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Sparkles size={14} color={GREEN_LIGHT} />

                  <span className="text-[10px] font-bold uppercase tracking-[.2em] text-white/70">
                    Let's grow together
                  </span>
                </div>

                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Ready to make your brand impossible to ignore?
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  Tell us about your business and your goals. We'll help you
                  build a digital marketing strategy focused on real growth.
                </p>
              </div>

              <div className="relative flex flex-col items-start gap-3 md:items-end">
                <a
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:scale-[1.04]"
                  style={{ background: GREEN }}
                >
                  Get a free consultation
                  <ArrowRight size={16} />
                </a>

                <span className="text-xs text-white/40">
                  SEO • PPC • Social • Content • Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function DigitalMarketing() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />

      <StatsSection />

      <IntroSection />

      <ServicesSection />

      <MoreServicesSection />

      <FunnelSection />

      <AnalyticsSection />

      <ProcessSection />

      <CTASection />
    </main>
  );
}
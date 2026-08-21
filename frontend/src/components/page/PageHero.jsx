import { Link } from "react-router-dom";

export default function PageHero({ eyebrow = "Digital Alife", title, description, action = "Get a Free Consultation" }) {
  return (
    <section className="relative overflow-hidden bg-[#0C2C50] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-28">
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#2E9E6D]/25 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#72d3aa]">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">{description}</p>
        {action && <Link to="/quote" className="mt-9 inline-flex rounded-xl bg-[#2E9E6D] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#227955]">{action}</Link>}
      </div>
    </section>
  );
}

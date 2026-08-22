import PageHero from "../page/PageHero";

export default function CustomSoftware() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Custom Software"
        description="Purpose-built software that streamlines workflows and solves the challenges unique to your business."
      />
      <section className="bg-[#f7faf9] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#2E9E6D]">Custom Software</p>
          <h2 className="mt-4 text-3xl font-bold text-[#0C2C50] sm:text-4xl">Software shaped around how you work.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">We turn complex workflows into dependable software that improves productivity and visibility.</p>
        </div>
      </section>
    </>
  );
}

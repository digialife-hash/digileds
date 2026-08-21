import React from "react";

function Abouts() {
  return (
    <section className="min-h-screen bg-[#f8fafc] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            About Us
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We Turn Ideas Into
            <span className="block bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            We help businesses transform their ideas into modern, scalable,
            and impactful digital solutions. Our focus is on clean design,
            powerful technology, and experiences that create real value.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">5+</h3>
              <p className="mt-1 text-sm text-slate-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">100+</h3>
              <p className="mt-1 text-sm text-slate-500">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[40px] bg-orange-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-3 shadow-[0_25px_80px_rgba(15,40,74,0.12)] backdrop-blur-xl">
            <div className="flex aspect-square items-center justify-center rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-orange-500">
              <span className="text-7xl font-bold text-white/90">
                A
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Abouts;
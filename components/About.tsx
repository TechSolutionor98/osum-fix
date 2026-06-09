"use client";

import Image from "next/image";

export default function About() {
  const reasons = [
    {
      title: "PREMIUM DURABILITY",
      description: "All our products (from switches to heavy-duty inverters) are manufactured with high-grade, heat-resistant components ensuring years of smooth operations."
    },
    {
      title: "CERTIFIED SAFETY FIRST",
      description: "Safety is our core foundation. Every single fuse, changeover, and battery unit goes through strict multi-phase quality inspections and complies with international safety standards."
    },
    {
      title: "SMART ENERGY SAVING",
      description: "Engineered using state-of-the-art power distribution topologies to minimize voltage drops, maximize efficiency, and lower overall utility consumption."
    },
    {
      title: "UNMATCHED SUPPORT",
      description: "Voltaria Global provides direct, round-the-clock technical helpline support and replacement warranties on all our electrical appliances and parts."
    }
  ];

  return (
    <>
      {/* Section 1: Who We Are */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-red-600 font-bold tracking-widest uppercase text-sm block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-tight">
                Your Trusted Partner for Premium Electrical Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Voltaria Global is an international engineering company dedicated to providing premium-grade power solutions. We design, manufacture, and distribute cutting-edge electrical items tailored for modern residential setups and heavy-duty industrial systems.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                From residential fans that deliver optimal airflow to high-capacity changeovers and smart hybrid inverters, our mission is to deliver uninterrupted power, optimal safety, and peak efficiency to properties worldwide.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              {/* Visual branding showcase with image */}
              <div className="relative z-10 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                <Image
                  src="/images/about-office.png"
                  alt="Voltaria Global Office and Engineering"
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700"
                />
                
                {/* Visual branding tag overlays */}
              

                {/* Bottom elegant dark gradient overlay card */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12 flex flex-col justify-end text-white z-10">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Voltaria (Full-Width Red Background Section) */}
      <section className="py-24 bg-[#E7050F] text-white relative overflow-hidden">
        {/* Subtle design detail: radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto relative z-10">
            <span className="text-white/80 font-bold tracking-widest uppercase text-sm block mb-3">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Why Voltaria Global?
            </h2>
            <p className="mt-4 text-white/90 text-sm md:text-base leading-relaxed">
              We design and construct top-tier power accessories. Here is why clients rely on our engineering across global regions.
            </p>
          </div>

          {/* Business Impact Counts using premium solid white cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 relative z-10">
            <div className="bg-white p-8 rounded-2xl text-left shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black text-[#E7050F] tracking-tight">50000+</div>
              <div className="text-sm font-bold text-zinc-800 mt-2">Dealer</div>
            </div>
            <div className="bg-white p-8 rounded-2xl text-left shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black text-[#E7050F] tracking-tight">10 Mn+</div>
              <div className="text-sm font-bold text-zinc-800 mt-2">Customers</div>
            </div>
            <div className="bg-white p-8 rounded-2xl text-left shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black text-[#E7050F] tracking-tight">100+</div>
              <div className="text-sm font-bold text-zinc-800 mt-2">Products</div>
            </div>
          </div>

          {/* Reasons Grid with clean solid white cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {reasons.map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white text-zinc-800 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex gap-6"
              >
                {/* Visual Bullet Dot */}
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E7050F] flex items-center justify-center flex-shrink-0 font-bold font-mono">
                  {`0${index + 1}`}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-950 tracking-wider uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

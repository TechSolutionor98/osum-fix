"use client";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Cutting-Edge Technologies",
      description: "As markets evolve, Voltaria Global remains focused on innovation and emerging technologies. By continuously expanding our product portfolio and adapting to industry advancements, we help businesses stay competitive in a rapidly changing marketplace."
    },
    {
      title: "Trusted Distribution Network",
      description: "With a growing network of business partners and customers, Voltaria Global has established itself as a trusted name in electrical product distribution. Our commitment to professionalism, reliability, and service excellence continues to strengthen our reputation across the industry."
    },
    {
      title: "Quality Products",
      description: "Quality remains at the core of everything we distribute. Every product category is selected with a focus on reliability, performance, and customer satisfaction, helping businesses confidently serve their markets."
    },
    {
      title: "Business Partnership Focus",
      description: "Voltaria Global values long-term business relationships built on trust, consistency, and mutual growth. Our approach extends beyond transactions, creating partnerships that support sustainable success for retailers, dealers, wholesalers, and commercial buyers."
    },
    {
      title: "Fast Inquiry Response",
      description: "In a fast-moving industry, timely communication matters. Our team is committed to providing prompt responses, accurate information, and efficient support to help businesses make informed decisions without unnecessary delays."
    },
    {
      title: "Reliable Supply Chain",
      description: "A dependable supply chain is the foundation of every successful business. Voltaria Global maintains efficient sourcing, inventory management, and distribution processes to ensure uninterrupted product availability across multiple markets."
    }
  ];

  return (
    <section className="py-24 bg-[#E7050F] text-white relative overflow-hidden">
      {/* Subtle design detail: radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto relative z-10">
          <span className="text-white/80 font-bold tracking-widest uppercase text-sm block mb-3">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">Why Industry Professionals Choose Voltaria Global?</h2>
          <p className="mt-4 text-white/90 text-sm md:text-base leading-relaxed">Voltaria Global combines industry expertise, dependable distribution, and a commitment to excellence to support businesses operating at every scale. Our reputation is built on reliability, consistency, and the ability to deliver value where it matters most.</p>
        </div>

        {/* Business Impact Counts using premium solid white cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 relative z-10">
          <div className="bg-white p-8 rounded-2xl text-left shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-black text-[#E7050F] tracking-tight">5,000+</div>
            <div className="text-sm font-bold text-zinc-800 mt-2">Dealers</div>
          </div>
          <div className="bg-white p-8 rounded-2xl text-left shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-black text-[#E7050F] tracking-tight">1 Mn+</div>
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
  );
}

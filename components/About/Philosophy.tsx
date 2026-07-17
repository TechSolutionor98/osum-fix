import { getCmsVal } from "@/lib/api-helper";
import { Rocket, Eye, Handshake, Brain, Zap, Heart } from "lucide-react";

interface PhilosophyProps {
  cms?: any;
}

export default function Philosophy({ cms }: PhilosophyProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#fefaef] via-[#e2f2f1] to-[#cdeae8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B2C3D] mb-4">
            {t("Our Purpose & Values")}
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            {t("We are driven by a simple goal: to redefine technical maintenance through innovation, transparency, and uncompromised quality.")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Our Mission */}
          <div className="md:col-span-8 bg-transparent rounded-3xl p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 max-w-lg">
              <Rocket className="text-[#E46704] w-12 h-12 mb-6" />
              <h3 className="text-3xl font-extrabold text-[#0B2C3D] mb-4">{t("Our Mission")}</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                {t("To deliver reliable, affordable, and high-quality technical services with a focus on customer satisfaction and technological efficiency, ensuring every property we touch is maintained to the highest standards.")}
              </p>
            </div>
            <div className="mt-12 relative z-10">
              <button className="font-bold text-[#E46704] uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                {t("LEARN MORE")} <span className="text-xl">→</span>
              </button>
            </div>
          </div>
          
          {/* Our Vision */}
          <div className="md:col-span-4 bg-[#E46704] text-white rounded-3xl p-10 md:p-12 flex flex-col justify-between group overflow-hidden relative shadow-xl">
            <div className="relative z-10">
              <Eye className="text-white w-12 h-12 mb-6" />
              <h3 className="text-3xl font-extrabold text-white mb-4">{t("Our Vision")}</h3>
              <p className="text-white/90 text-base font-medium leading-relaxed">
                {t("To become the UAE's most trusted partner for technical solutions, known for our precision and customer-centric approach.")}
              </p>
            </div>
            <div className="mt-12 h-24 flex items-end relative z-10">
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-white transition-all duration-1000 group-hover:w-full"></div>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:-translate-y-2 transition-transform duration-300">
              <Handshake className="text-[#E46704] w-10 h-10 mb-5" />
              <h4 className="text-xl font-bold text-[#0B2C3D] mb-3">{t("Integrity")}</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {t("We believe in transparent pricing and honest communication at every step.")}
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:-translate-y-2 transition-transform duration-300">
              <Brain className="text-[#E46704] w-10 h-10 mb-5" />
              <h4 className="text-xl font-bold text-[#0B2C3D] mb-3">{t("Expertise")}</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {t("Continuous training ensures our team is always at the cutting edge of industry standards.")}
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:-translate-y-2 transition-transform duration-300">
              <Zap className="text-[#E46704] w-10 h-10 mb-5" />
              <h4 className="text-xl font-bold text-[#0B2C3D] mb-3">{t("Efficiency")}</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {t("Time is luxury. We optimize every workflow to deliver results faster than competitors.")}
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:-translate-y-2 transition-transform duration-300">
              <Heart className="text-[#E46704] w-10 h-10 mb-5" />
              <h4 className="text-xl font-bold text-[#0B2C3D] mb-3">{t("Care")}</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {t("We treat every home and office with the same respect as if it were our own.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { getCmsVal } from "@/lib/api-helper";
import { ShieldCheck, HardHat, Recycle } from "lucide-react";
import Image from "next/image";

interface CommitmentProps {
  cms?: any;
}

export default function Commitment({ cms }: CommitmentProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-16 md:py-20 bg-blue-50/50 overflow-hidden relative">
      {/* Right half pure white background */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-3 block">{t("Our Standard")}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--dark)] mb-6 leading-tight tracking-tight">
              {t("Uncompromising Commitment to Safety & Quality")}
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              {t("At OsumFix, we believe that there are no shortcuts to excellence. We adhere strictly to UAE safety guidelines and use only premium, certified materials for all our maintenance and repair works.")}
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                  <ShieldCheck size={28} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--dark)] mb-2">{t("Licensed & Insured")}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Complete peace of mind knowing that every technician entering your property is fully vetted, licensed, and comprehensively insured against liabilities.")}</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                  <HardHat size={28} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--dark)] mb-2">{t("Strict Safety Protocols")}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("From on-site hazard assessments to wearing proper protective equipment (PPE), safety is deeply ingrained in our daily operational culture.")}</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                  <Recycle size={28} className="text-green-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--dark)] mb-2">{t("Eco-Friendly Practices")}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("We strive to minimize our environmental footprint by using sustainable materials, safe disposal methods, and energy-efficient solutions wherever possible.")}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 flex flex-col gap-10">
             {/* Top Image Card (Safety Protocols) */}
             <div className="relative w-full aspect-[16/10] rounded-3xl border border-slate-100 z-10 shadow-[0_20px_50px_rgb(0,0,0,0.08)] bg-white p-3 group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                   <Image src={t("/images/about/safety.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt={t("Quality Commitment")} />
                </div>
             </div>
             
             {/* Bottom Image Card (Quality Assurance) */}
             <div className="relative w-full aspect-[16/10] rounded-3xl border border-slate-100 z-10 shadow-[0_20px_50px_rgb(0,0,0,0.08)] bg-white p-3 group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                   <Image src={t("/images/about/quality.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt={t("Safety Standard")} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

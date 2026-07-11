import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";
import { CheckCircle2, Target, Eye, Users } from "lucide-react";

interface PhilosophyProps {
  cms?: any;
}

export default function Philosophy({ cms }: PhilosophyProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <SectionTitle
            subtitle={t("Our Philosophy")}
            title={t("Driven by Excellence")}
            description={t("Our core principles guide every project we undertake, ensuring maximum value for our clients.")}
            centered
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Card 1: Mission */}
          <div className="bg-white p-10 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border-t-[6px] border-t-[#0f2e4a] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-3xl font-extrabold text-[#0f2e4a] mb-6 tracking-tight">{t("Our Mission")}</h3>
            <p className="text-slate-600 text-base leading-relaxed font-medium">{t("To provide prompt, professional, and reliable technical services that enhance the safety, comfort, and value of our clients' properties across the UAE.")}</p>
          </div>
          
          {/* Card 2: Vision (Pushed down) */}
          <div className="bg-white p-10 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border-t-[6px] border-t-[#d95d1e] md:mt-20 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-3xl font-extrabold text-[#d95d1e] mb-6 tracking-tight">{t("Our Vision")}</h3>
            <p className="text-slate-600 text-base leading-relaxed font-medium">{t("To be the leading technical services company in the Middle East, recognized for our exceptional quality, continuous innovation, and customer-centric approach.")}</p>
          </div>

          {/* Card 3: Core Values (Pushed further down) */}
          <div className="bg-white p-10 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border-t-[6px] border-t-[#d95d1e] md:mt-40 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-3xl font-extrabold text-[#d95d1e] mb-6 tracking-tight">{t("Core Values")}</h3>
            <ul className="space-y-5 text-slate-600 text-base font-medium">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d95d1e] mt-2 shrink-0"></span>
                <span>{t("Integrity & Transparency")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d95d1e] mt-2 shrink-0"></span>
                <span>{t("Excellence in Execution")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d95d1e] mt-2 shrink-0"></span>
                <span>{t("Customer Satisfaction")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d95d1e] mt-2 shrink-0"></span>
                <span>{t("Safety First Approach")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";
import { CheckCircle2, Target, Eye, Users } from "lucide-react";

interface PhilosophyProps {
  cms?: any;
}

export default function Philosophy({ cms }: PhilosophyProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle
            subtitle={t("Our Philosophy")}
            title={t("Driven by Excellence")}
            description={t("Our core principles guide every project we undertake, ensuring maximum value for our clients.")}
            centered
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] transition-colors">
              <Target size={40} className="text-[var(--primary)] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--dark)] mb-4">{t("Our Mission")}</h3>
            <p className="text-slate-600 leading-relaxed">{t("To provide prompt, professional, and reliable technical services that enhance the safety, comfort, and value of our clients' properties across the UAE.")}</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-20 h-20 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8 group-hover:bg-[var(--secondary)] transition-colors">
              <Eye size={40} className="text-[var(--secondary)] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--dark)] mb-4">{t("Our Vision")}</h3>
            <p className="text-slate-600 leading-relaxed">{t("To be the leading technical services company in the Middle East, recognized for our exceptional quality, continuous innovation, and customer-centric approach.")}</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:bg-[var(--accent)] transition-colors">
              <Users size={40} className="text-[var(--accent)] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--dark)] mb-4">{t("Core Values")}</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-[var(--primary)]" /> {t("Integrity & Transparency")}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-[var(--primary)]" /> {t("Excellence in Execution")}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-[var(--primary)]" /> {t("Customer Satisfaction")}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-[var(--primary)]" /> {t("Safety First Approach")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

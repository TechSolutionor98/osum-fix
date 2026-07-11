import { getCmsVal } from "@/lib/api-helper";
import { Users, Briefcase, Award, CheckCircle } from "lucide-react";

interface StatsProps {
  cms?: any;
}

export default function Stats({ cms }: StatsProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-slate-100">
          
          <div className="flex flex-col items-center justify-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-[var(--primary)]">
              <Award size={32} />
            </div>
            <h4 className="text-4xl md:text-5xl font-extrabold text-[var(--dark)] mb-2 tracking-tight">15<span className="text-[var(--primary)]">+</span></h4>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-xs md:text-sm">{t("Years Experience")}</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 text-[var(--secondary)]">
              <Briefcase size={32} />
            </div>
            <h4 className="text-4xl md:text-5xl font-extrabold text-[var(--dark)] mb-2 tracking-tight">500<span className="text-[var(--secondary)]">+</span></h4>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-xs md:text-sm">{t("Projects Completed")}</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 text-[var(--accent)]">
              <Users size={32} />
            </div>
            <h4 className="text-4xl md:text-5xl font-extrabold text-[var(--dark)] mb-2 tracking-tight">50<span className="text-[var(--accent)]">+</span></h4>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-xs md:text-sm">{t("Expert Technicians")}</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-green-600">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-4xl md:text-5xl font-extrabold text-[var(--dark)] mb-2 tracking-tight">100<span className="text-green-600">%</span></h4>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-xs md:text-sm">{t("Client Satisfaction")}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

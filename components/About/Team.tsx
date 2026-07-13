import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";
import { UserCog, Wrench, HeadphonesIcon } from "lucide-react";

interface TeamProps {
  cms?: any;
}

export default function Team({ cms }: TeamProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle
            subtitle={t("Our People")}
            title={t("The Team Behind the Excellence")}
            description={t("Our success is built on the expertise, dedication, and professionalism of our diverse departments working together.")}
            centered
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-[var(--secondary)] shadow-lg">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 -translate-y-2 border border-slate-100">
              <Wrench size={32} className="text-[var(--primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--dark)] mb-3">{t("Field Operations")}</h3>
            <p className="text-slate-600 leading-relaxed text-sm font-medium">
              {t("Our certified technicians and engineers form the backbone of OsumFix. With rigorous training and years of hands-on experience in the UAE, they ensure every technical issue is resolved efficiently and durably.")}
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 border border-[var(--secondary)] shadow-lg">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 -translate-y-2 border border-slate-100">
              <UserCog size={32} className="text-[var(--secondary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--dark)] mb-3">{t("Quality Assurance")}</h3>
            <p className="text-slate-600 leading-relaxed text-sm font-medium">
              {t("Dedicated to maintaining our high standards, our QA team inspects workflows, materials, and finished projects to guarantee that every service meets strict local regulations and exceeds client expectations.")}
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 border border-[var(--accent)] shadow-lg">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 -translate-y-2 border border-slate-100">
              <HeadphonesIcon size={32} className="text-[var(--accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--dark)] mb-3">{t("Customer Support")}</h3>
            <p className="text-slate-600 leading-relaxed text-sm font-medium">
              {t("Available around the clock, our friendly support team ensures seamless communication. From booking appointments to emergency dispatch, they prioritize your convenience and absolute peace of mind.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

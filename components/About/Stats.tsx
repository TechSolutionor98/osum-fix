import { getCmsVal } from "@/lib/api-helper";

interface StatsProps {
  cms?: any;
}

export default function Stats({ cms }: StatsProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-24 bg-[#0D4B42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-black text-[#FFB700]">{t("500+")}</p>
            <p className="font-bold text-white/80 uppercase tracking-widest text-sm md:text-base">{t("Expert Professionals")}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-black text-[#FFB700]">{t("25K+")}</p>
            <p className="font-bold text-white/80 uppercase tracking-widest text-sm md:text-base">{t("Happy Customers")}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-black text-[#FFB700]">{t("15+")}</p>
            <p className="font-bold text-white/80 uppercase tracking-widest text-sm md:text-base">{t("Service Categories")}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-black text-[#FFB700]">{t("24/7")}</p>
            <p className="font-bold text-white/80 uppercase tracking-widest text-sm md:text-base">{t("Emergency Support")}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

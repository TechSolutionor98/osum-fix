import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";

interface WhoWeAreProps {
  cms?: any;
}

export default function WhoWeAre({ cms }: WhoWeAreProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle={t("Who We Are")}
              title={t("Dubai's Most Trusted Technical Services Provider")}
              description={t("At OsumFix Technical Services LLC, we are committed to delivering top-tier maintenance, installation, and repair services to residential, commercial, and industrial properties across Dubai.")}
            />
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t("With a deep understanding of the unique climate and structural requirements in the UAE, our team of certified professionals ensures that every job is done right the first time. From emergency plumbing and electrical faults to comprehensive annual maintenance contracts, we are the one-stop solution for all your technical needs.")}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <h4 className="text-4xl font-black text-[var(--primary)] mb-2">{t("500+")}</h4>
                <p className="text-slate-600 font-medium">{t("Projects Completed")}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <h4 className="text-4xl font-black text-[var(--primary)] mb-2">{t("100%")}</h4>
                <p className="text-slate-600 font-medium">{t("Client Satisfaction")}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -z-10 transform rotate-3"></div>
            <div className="space-y-4 pt-10">
              <div className="bg-slate-200 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative">
                <Image src={t("/images/about-1.jpg")} alt="Technician working" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-200 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative">
                <Image src={t("/images/about-2.jpg")} alt="Electrician at work" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

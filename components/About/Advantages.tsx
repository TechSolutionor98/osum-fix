import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";
import { Shield, Clock, Wrench } from "lucide-react";

interface AdvantagesProps {
  cms?: any;
}

export default function Advantages({ cms }: AdvantagesProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 bg-gradient-to-b from-[#fefaef] to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] rounded-3xl transform -rotate-3 -z-10 opacity-20"></div>
            <Image src={t("/images/about-advantages.png")} alt="Why Choose Us" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover rounded-3xl shadow-lg" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionTitle
              subtitle={t("Our Advantages")}
              title={t("Why OsumFix Stands Out")}
              description={t("We don't just fix problems; we provide lasting solutions. Here is why hundreds of clients in Dubai choose us for their property maintenance.")}
            />

            <div className="space-y-8 mt-10">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Shield size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--dark)] mb-2">{t("Licensed & Insured")}</h4>
                  <p className="text-slate-600">{t("Fully compliant with UAE regulations. Our team operates with complete safety protocols and insurance coverage.")}</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--dark)] mb-2">{t("24/7 Availability")}</h4>
                  <p className="text-slate-600">{t("Emergencies don't wait for business hours. We offer round-the-clock emergency response for critical failures.")}</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Wrench size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--dark)] mb-2">{t("Expert Technicians")}</h4>
                  <p className="text-slate-600">{t("Our engineers and technicians undergo rigorous training and hold extensive experience in their respective fields.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

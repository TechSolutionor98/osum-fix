"use client";

import Image from "next/image";
import { getCmsVal } from "@/lib/api-helper";

export default function WhoWeAre({ cms }: { cms?: any }) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm block">{t(`WHO WE  ARE`)}</span>
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-tight">
              {t("A Leading Force in Electrical Product Distribution")}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {t("Voltaria Global is a growing distribution company specializing in quality electrical products for retailers, wholesalers, contractors, and commercial buyers. Through reliable supply networks, industry expertise, and a commitment to excellence, we continue to support businesses with dependable solutions that drive long-term  success.")}
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            {/* Visual branding showcase with image */}
            <div className="relative z-10 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image
                src={t("/images/about-office.png")}
                alt={t("Voltaria Global Office and Engineering")}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700"
              />

              {/* Bottom elegant dark gradient overlay card */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12 flex flex-col justify-end text-white z-10">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

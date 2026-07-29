"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin, CheckCircle, Clock, ShieldCheck, ThumbsUp, Star } from "lucide-react";
import { getCmsVal } from "@/lib/api-helper";

interface HeroProps {
  cms?: any;
}

export default function Hero({ cms }: HeroProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] pt-24 md:pt-32 flex items-center md:items-end overflow-hidden bg-gradient-to-br from-[#fefaef] to-[#cdeae8]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 lg:gap-12 h-full">
          
          {/* Left Content */}
          <div className="w-full md:w-[55%] lg:w-[60%] text-left pb-12 md:pb-24 pt-10 md:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2C3D] leading-[1.2] mb-6 max-w-2xl">
              <span className="text-[#E46704]">OsumFix</span> {t("Professional Maintenance & Repair Solutions.")}
            </h1>

            <p className="text-base md:text-lg text-slate-700 mb-8 max-w-lg leading-relaxed font-medium">
              {t("Professional. Reliable. Affordable.")} <br />
              {t("Your comfort is our priority.")}
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-8 w-full sm:w-fit">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                <div className="bg-teal-50 p-1.5 sm:p-2 rounded-full shrink-0">
                  <CheckCircle className="w-4 h-4 sm:w-[22px] sm:h-[22px] text-[#0D4B42]" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-[#0B2C3D] leading-tight max-w-[85px] sm:max-w-[110px] break-words">{t("Trusted Professionals")}</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                <div className="bg-amber-50 p-1.5 sm:p-2 rounded-full shrink-0">
                  <Clock className="w-4 h-4 sm:w-[22px] sm:h-[22px] text-[#E46704]" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-[#0B2C3D] leading-tight max-w-[85px] sm:max-w-[110px] break-words">{t("On-Time Service")}</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                <div className="bg-teal-50 p-1.5 sm:p-2 rounded-full shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-[22px] sm:h-[22px] text-[#0D4B42]" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-[#0B2C3D] leading-tight max-w-[85px] sm:max-w-[110px] break-words">{t("Secure Payments")}</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                <div className="bg-amber-50 p-1.5 sm:p-2 rounded-full shrink-0">
                  <ThumbsUp className="w-4 h-4 sm:w-[22px] sm:h-[22px] text-[#E46704]" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-[#0B2C3D] leading-tight max-w-[85px] sm:max-w-[110px] break-words">{t("Satisfaction Guaranteed")}</span>
              </div>
            </div>
          </div>

          {/* Right Content / Image */}
          <div className="w-full md:w-[45%] lg:w-[40%] relative flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[500px] aspect-[3/4] md:aspect-auto md:h-[600px] z-10 shrink-0">
              <Image
                src={t("/images/hro.png")} 
                alt="Professional Handyman Maintenance Services in Dubai"
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 450px, 500px"
                priority
                // @ts-ignore
                fetchPriority="high"
                quality={80}
                className="object-contain object-bottom drop-shadow-2xl"
              />
              
              {/* Floating Review Badge */}
              <div className="absolute bottom-6 right-0 md:-right-4 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl sm:text-2xl font-bold text-slate-800">4.9</span>
                  <Star size={18} className="fill-[#FFB700] text-[#FFB700]" />
                </div>
                <p className="text-xs font-medium text-slate-500 mb-2">Customer Rating</p>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><Image src={"/images/about-1.png"} alt="user rating" width={32} height={32} sizes="32px" className="object-cover" /></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><Image src={"/images/about-2.png"} alt="user rating" width={32} height={32} sizes="32px" className="object-cover" /></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><Image src={"/images/about-man.png"} alt="user rating" width={32} height={32} sizes="32px" className="object-cover" /></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

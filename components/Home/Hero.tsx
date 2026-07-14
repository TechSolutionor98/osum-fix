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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2C3D] leading-[1.2] mb-6"
            >
              <span className="block">{t("OsumFix Professional")}</span>
              <span className="block">{t("Maintenance & Repair")}</span>
              <span className="block text-[#E46704]">{t("Solutions.")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-700 mb-8 max-w-lg leading-relaxed font-medium"
            >
              {t("Professional. Reliable. Affordable.")} <br />
              {t("Your comfort is our priority.")}
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 w-full sm:w-fit"
            >
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                <div className="bg-teal-50 p-2 rounded-full">
                  <CheckCircle size={22} className="text-[#0D4B42]" />
                </div>
                <span className="text-sm font-bold text-[#0B2C3D] leading-tight">Trusted<br />Professionals</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                <div className="bg-amber-50 p-2 rounded-full">
                  <Clock size={22} className="text-[#E46704]" />
                </div>
                <span className="text-sm font-bold text-[#0B2C3D] leading-tight">On-Time<br />Service</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                <div className="bg-teal-50 p-2 rounded-full">
                  <ShieldCheck size={22} className="text-[#0D4B42]" />
                </div>
                <span className="text-sm font-bold text-[#0B2C3D] leading-tight">Secure<br />Payments</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                <div className="bg-amber-50 p-2 rounded-full">
                  <ThumbsUp size={22} className="text-[#E46704]" />
                </div>
                <span className="text-sm font-bold text-[#0B2C3D] leading-tight">Satisfaction<br />Guaranteed</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content / Image */}
          <div className="w-full md:w-[45%] lg:w-[40%] relative flex justify-center md:justify-end mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[300px] h-[400px] md:w-[500px] md:h-[600px] z-10"
            >
              {/* Replace with the handyman image from the theme */}
              <Image
                src={t("/images/hro.png")} 
                alt="Professional Handyman"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
              
              {/* Floating Review Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 right-0 md:-right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-slate-800">4.9</span>
                  <Star size={20} className="fill-[#FFB700] text-[#FFB700]" />
                </div>
                <p className="text-xs font-medium text-slate-500 mb-2">Customer Rating</p>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><Image src="/images/about-1.png" alt="user" width={32} height={32} className="object-cover" /></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><Image src="/images/about-2.png" alt="user" width={32} height={32} className="object-cover" /></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><Image src="/images/about-man.png" alt="user" width={32} height={32} className="object-cover" /></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

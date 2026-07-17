"use client";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";
import { motion } from "framer-motion";

interface WhoWeAreProps {
  cms?: any;
}

export default function WhoWeAre({ cms }: WhoWeAreProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 pt-35 bg-gradient-to-br from-[#cdeae8] via-[#e2f2f1] to-[#fefaef] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white hover:shadow-xl hover:-translate-y-1 transition-all shadow-sm">
                <h4 className="text-4xl font-black text-[#E46704] mb-2">{t("500+")}</h4>
                <p className="text-slate-600 font-medium">{t("Projects Completed")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white hover:shadow-xl hover:-translate-y-1 transition-all shadow-sm">
                <h4 className="text-4xl font-black text-[#E46704] mb-2">{t("100%")}</h4>
                <p className="text-slate-600 font-medium">{t("Client Satisfaction")}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative" style={{ perspective: "1000px" }}>
            <div className="absolute -inset-4 bg-[#E46704] rounded-[3rem] -z-10 transform rotate-3 shadow-2xl"></div>
            
            <div className="space-y-4 pt-10">
              <motion.div 
                animate={{ 
                  y: [0, -30, 0],
                  rotateX: [0, 8, 0],
                  rotateY: [0, 8, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-slate-200 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative border-4 border-white/50"
              >
                <Image src={t("/images/about-1.png")} alt="Technician working" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <motion.div 
                animate={{ 
                  y: [0, 30, 0],
                  rotateX: [0, -8, 0],
                  rotateY: [0, -8, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-slate-200 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative border-4 border-white/50"
              >
                <Image src={t("/images/about-2.png")} alt="Electrician at work" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

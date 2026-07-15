"use client";

import { motion } from "framer-motion";
import { getCmsVal } from "@/lib/api-helper";
import OrbitalServices from "./OrbitalServices";

interface WhyChooseUsProps {
  cms?: any;
}

export default function WhyChooseUs({ cms }: WhyChooseUsProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-[42px] font-extrabold text-[#0B2C3D] leading-[1.2] mb-10"
            >
              {t("Resolution in")} <br />
              <span className="text-[#E46704]">{t("3 Simple Steps")}</span>
            </motion.h2>

            <div className="relative w-full max-w-lg mt-8 lg:mt-12 mx-auto lg:mx-0 pr-4 sm:pr-0">
              {/* Grid background lines */}
              <div className="absolute inset-0 grid grid-cols-3 z-0 pointer-events-none pb-4">
                <div className="border-r border-slate-200"></div>
                <div className="border-r border-slate-200"></div>
                <div></div>
              </div>
              
              <div className="relative z-10 flex flex-col w-full">
                {/* Headers */}
                <div className="grid grid-cols-3 mb-6">
                  <div className="text-center text-[10px] md:text-xs font-bold text-slate-400 tracking-widest uppercase">{t("Step 1")}</div>
                  <div className="text-center text-[10px] md:text-xs font-bold text-slate-400 tracking-widest uppercase">{t("Step 2")}</div>
                  <div className="text-center text-[10px] md:text-xs font-bold text-slate-400 tracking-widest uppercase">{t("Step 3")}</div>
                </div>
                
                {/* Row 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative py-5 border-t border-slate-200"
                >
                  <div className="w-[85%] md:w-[50%] bg-[#E46704] text-white rounded-full py-3 px-6 transform hover:-translate-y-1 transition-all cursor-default">
                    <h4 className="font-extrabold text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">{t("Choose Your Service")}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 mt-4 max-w-[85%] md:max-w-[45%] pl-4 border-l-2 border-[#E46704] leading-relaxed ml-4">
                    {t("Select from our wide range of technical offerings through our app or website.")}
                  </p>
                </motion.div>

                {/* Row 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative py-5 border-t border-slate-200"
                >
                  <div className="w-[85%] md:w-[50%] ml-[10%] md:ml-[25%] bg-white text-[#0B2C3D] border border-slate-200 rounded-full py-3 px-6 transform hover:-translate-y-1 transition-all cursor-default relative z-10">
                    <h4 className="font-extrabold text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">{t("Schedule & Track")}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 mt-4 max-w-[85%] md:max-w-[45%] pl-4 border-l-2 border-[#0B2C3D] leading-relaxed ml-[10%] md:ml-[25%] relative left-4">
                    {t("Pick a convenient time slot and track your technician's arrival in real-time.")}
                  </p>
                </motion.div>

                {/* Row 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative py-5 border-t border-slate-200"
                >
                  <div className="w-[85%] md:w-[50%] ml-[15%] md:ml-[50%] bg-[#0D4B42] text-white rounded-full py-3 px-6 transform hover:-translate-y-1 transition-all cursor-default relative z-10">
                    <h4 className="font-extrabold text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">{t("Sit Back & Relax")}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 mt-4 max-w-[85%] md:max-w-[45%] pl-4 border-l-2 border-[#0D4B42] leading-relaxed ml-[15%] md:ml-[50%] relative left-4">
                    {t("Expert resolution delivered with a satisfaction guarantee. Pay after the job is done.")}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Section: Orbital Services */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <OrbitalServices cms={cms} />
          </div>
          
        </div>
      </div>
    </section>
  );
}

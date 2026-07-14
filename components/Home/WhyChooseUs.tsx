"use client";

import { motion } from "framer-motion";
import { getCmsVal } from "@/lib/api-helper";

interface WhyChooseUsProps {
  cms?: any;
}

export default function WhyChooseUs({ cms }: WhyChooseUsProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 bg-white overflow-hidden">
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

            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#0D4B42] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                <div>
                  <h4 className="font-extrabold text-[#0B2C3D] text-[24px] mb-2">{t("Choose Your Service")}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {t("Select from our wide range of technical offerings through our app or website.")}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#0D4B42] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                <div>
                  <h4 className="font-extrabold text-[#0B2C3D] text-[24px] mb-2">{t("Schedule & Track")}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {t("Pick a convenient time slot and track your technician's arrival in real-time.")}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#0D4B42] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">3</div>
                <div>
                  <h4 className="font-extrabold text-[#0B2C3D] text-[24px] mb-2">{t("Sit Back & Relax")}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {t("Expert resolution delivered with a satisfaction guarantee. Pay after the job is done.")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                className="relative z-10 w-full rounded-[48px] border-4 border-white shadow-xl" 
                alt={t("OsumFix mobile app interface")} 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD55kWqSEeRBujP8igboSCInvZhCbP_6k9Qtk3JSbAw7UO90gzttSlCxpv5Bc-hlIQBE9Qaxegj6WtlIIUot-D4_AYkW9hjT1RWikVpaF8ZLlSTHo-RByAg8M4x362HWcaO6BuO7oAMN1VguFrruASexaT9ynNZi83KsdJcULG2kom4gUlrIEq2aQ4YR0_Ghxy-wWSTFlgc6R8R_-YbNy7tetbRlgTSzBXmqriD_vHpzi8u84b-kMPdpSXNXVXI8C1WWiKiN4iLTY4" 
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

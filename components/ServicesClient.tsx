"use client";

import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicesClientProps {
  services: any[];
  dict: Record<string, string>;
}

export default function ServicesClient({ services, dict }: ServicesClientProps) {
  const [activeFilter, setActiveFilter] = useState("All Services");

  const categories = ["All Services", "AC", "Electrical", "Plumbing", "Painting", "Masonry", "Carpentry", "Steel Fixing", "Interior", "Ceiling", "Handyman"];

  const filteredServices = activeFilter === "All Services"
    ? services
    : services.filter(s => s.categoryFilter === activeFilter);

  const t = (key: string) => dict[key] || key;

  return (
    <div className="bg-gradient-to-b from-[#cdeae8] via-[#fefaef] to-[#cdeae8] min-h-screen pt-32 pb-24 text-[#0B2C3D]">
      {/* Hero / Section Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-[#0B2C3D] mb-6 tracking-tight"
        >
          {t("Our Services")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#6B7677] max-w-2xl mx-auto text-lg"
        >
          {t("Comprehensive technical solutions tailored for premium residences and commercial properties across Dubai. Reliable, certified, and available 24/7.")}
        </motion.p>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-sm border ${activeFilter === cat
                  ? "bg-[#0B2C3D] text-white border-[#0B2C3D] shadow-md shadow-[#0B2C3D]/20 scale-105"
                  : "bg-white/60 hover:bg-white text-[#163235] border-white hover:border-[#cdeae8] shadow-sm hover:shadow scale-100"
                }`}
            >
              {t(cat)}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              // We want to insert the Promo Box after the 4th item (index 3), but only if "All Services" is selected to not ruin the layout
              const showPromo = activeFilter === "All Services" && index === 4;

              return (
                <React.Fragment key={service.slug}>
                  {showPromo && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="lg:col-span-2 bg-gradient-to-br from-[#163235] to-[#0d1e20] rounded-xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-lg"
                    >
                      <div className="relative z-10">
                        <span className="bg-[#CDEAE8] text-[#163235] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 inline-block">
                          {t("Annual Package")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                          {t("Total Home Care")}
                        </h2>
                        <p className="text-[#CDEAE8]/80 text-lg max-w-md mb-8">
                          {t("Unlimited call-outs and priority response for one low monthly fee. Secure your peace of mind.")}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                          {[
                            t("24/7 Priority Support"),
                            t("Free Parts Replacement"),
                            t("Bi-annual AC Servicing"),
                            t("No Hidden Call-out Fees")
                          ].map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-white/90 font-medium">
                              <CheckCircle2 className="w-5 h-5 text-[#CDEAE8]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="bg-[#F5B52E] text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#d99f24] transition-colors">
                          {t("Learn More")}
                        </button>
                      </div>
                      {/* Abstract Background Shape */}
                      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-[#CDEAE8]/10 rounded-full blur-3xl group-hover:bg-[#CDEAE8]/20 transition-all duration-500"></div>
                    </motion.div>
                  )}

                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                </React.Fragment>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getCmsVal } from "@/lib/api-helper";

interface CTAProps {
  cms?: any;
}

const RINGS = [
  { w: 540, h: 120 }, // Ring 0 (Inner)
  { w: 660, h: 240 }, // Ring 1
  { w: 780, h: 360 }, // Ring 2
  { w: 900, h: 480 }, // Ring 3 (Outer)
];

const AVAILABLE_POSITIONS = [
  // Ring 1 positions (w: 660, h: 240)
  { x: 0, y: -120 }, { x: 330, y: 0 }, { x: 0, y: 120 }, { x: -330, y: 0 },
  { x: 100, y: -120 }, { x: -100, y: -120 }, { x: 100, y: 120 }, { x: -100, y: 120 },

  // Ring 2 positions (w: 780, h: 360)
  { x: 180, y: -180 }, { x: 180, y: 180 }, { x: -180, y: -180 }, { x: -180, y: 180 },
  { x: 390, y: 0 }, { x: -390, y: 0 }, { x: 0, y: -180 }, { x: 0, y: 180 },

  // Ring 3 positions (w: 900, h: 480)
  { x: 150, y: -240 }, { x: -150, y: -240 }, { x: 450, y: 0 }, { x: -450, y: 0 },
  { x: 150, y: 240 }, { x: -150, y: 240 }, { x: 250, y: -240 }, { x: -250, y: -240 }
];

const LOCATIONS = [
  { name: "Dubai", title: "Primary Hub", icon: "apartment", delay: 0.1 },
  { name: "Abu Dhabi", title: "Capital Center", icon: "business", delay: 0.2 },
  { name: "Sharjah", title: "Service Hub", icon: "store", delay: 0.3 },
  { name: "Ajman", title: "Support Hub", icon: "support_agent", delay: 0.4 },
  { name: "Umm Al Quwain", title: "Local Center", icon: "holiday_village", delay: 0.5 },
  { name: "Ras Al Khaimah", title: "Service Office", icon: "maps_home_work", delay: 0.6 },
  { name: "Fujairah", title: "Regional Hub", icon: "location_city", delay: 0.7 },
];

export default function CTA({ cms }: CTAProps) {
  const t = (val: string) => getCmsVal(cms, val);
  
  const [positions, setPositions] = useState(AVAILABLE_POSITIONS.slice(0, 7));

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => {
        // Shuffle the available positions to randomly pick 7 new ones
        const shuffled = [...AVAILABLE_POSITIONS].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 7);
      });
    }, 5000); // Float to a new ring every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#cdeae8] to-[#fefaef] min-h-[600px] flex items-center justify-center">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B2C3D] tracking-tight mb-4">
            {t("Professional Services Across the UAE")}
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            {t("Expert maintenance teams actively serving all 7 Emirates.")}
          </p>
        </motion.div>

        {/* Main Node Graph Container */}
        <div className="relative w-full h-[520px] flex items-center justify-center overflow-visible">
          
          {/* Render Concentric Capsule Rings */}
          {RINGS.map((ring, idx) => (
            <motion.div
              key={`ring-${idx}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
              className="absolute border border-[#0B2C3D]/20 rounded-[50px] md:rounded-[90px] pointer-events-none"
              style={{
                width: `${ring.w}px`,
                height: `${ring.h}px`,
              }}
            />
          ))}

          {/* Render Location Nodes */}
          {LOCATIONS.map((loc, i) => {
            const pos = positions[i] || AVAILABLE_POSITIONS[i];
            
            return (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, scale: 0, left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: loc.delay + 0.5 },
                  scale: { duration: 0.6, delay: loc.delay + 0.5, type: "spring", bounce: 0.4 },
                  left: { duration: 3, ease: "easeInOut" },
                  top: { duration: 3, ease: "easeInOut" }
                }}
                className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer"
              >
                {/* Node Icon Circle */}
                <div className="w-14 h-14 bg-[#0B2C3D] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-[#0B2C3D]/20 group-hover:border-[#E46704] group-hover:scale-110 relative group-hover:bg-[#E46704]">
                  <span className="material-symbols-outlined text-2xl text-white transition-colors relative z-10">
                    {loc.icon}
                  </span>
                </div>
                
                {/* Text Label */}
                <div className="mt-3 text-center transition-all duration-300 group-hover:-translate-y-1">
                  <h4 className="text-[#0B2C3D] font-bold text-sm whitespace-nowrap">{t(loc.name)}</h4>
                  <p className="text-slate-500 font-medium text-[10px] uppercase tracking-wider">{t(loc.title)}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Center CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.5 }}
            className="absolute z-30"
          >
            <Link
              href="#request-quote"
              onClick={() => {
                window.location.hash = "request-quote";
              }}
              className="bg-[#E46704] hover:bg-[#c45600] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-extrabold transition-all shadow-xl flex items-center justify-center gap-3 text-lg md:text-xl group"
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl transition-transform group-hover:scale-110">engineering</span>
              {t("Book a Service")}
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

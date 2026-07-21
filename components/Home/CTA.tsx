"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { getCmsVal } from "@/lib/api-helper";

interface CTAProps {
  cms?: any;
}

const RINGS = [
  { w: 400, h: 100 }, // Ring 0 (Inner)
  { w: 520, h: 180 }, // Ring 1
  { w: 640, h: 260 }, // Ring 2
  { w: 760, h: 340 }, // Ring 3 (Outer)
];

// 7 distinct, non-overlapping zones (each zone has coordinates for Ring 1, 2, and 3)
const ZONES = [
  // 0: Far Left
  [ { x: -260, y: 0 }, { x: -320, y: 0 }, { x: -380, y: 0 } ],
  // 1: Far Right
  [ { x: 260, y: 0 }, { x: 320, y: 0 }, { x: 380, y: 0 } ],
  // 2: Top Left
  [ { x: -120, y: -90 }, { x: -120, y: -130 }, { x: -120, y: -170 } ],
  // 3: Top Right
  [ { x: 120, y: -90 }, { x: 120, y: -130 }, { x: 120, y: -170 } ],
  // 4: Bottom Left
  [ { x: -120, y: 90 }, { x: -120, y: 130 }, { x: -120, y: 170 } ],
  // 5: Bottom Right
  [ { x: 120, y: 90 }, { x: 120, y: 130 }, { x: 120, y: 170 } ],
  // 6: Top Center
  [ { x: 0, y: -90 }, { x: 0, y: -130 }, { x: 0, y: -170 } ],
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
  
  // Assign each location to a unique zone initially with deterministic ring index for SSR hydration
  const [assignments, setAssignments] = useState(() => 
    LOCATIONS.map((_, i) => ({ zoneIndex: i, ringIndex: i % 3 }))
  );
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredRef = useRef<number | null>(null);
  
  useEffect(() => {
    hoveredRef.current = hoveredIndex;
  }, [hoveredIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssignments((prev) => {
        const next = [...prev];
        const hIndex = hoveredRef.current;
        
        // Find which zone is locked by the hovered item
        const lockedZone = hIndex !== null ? prev[hIndex].zoneIndex : -1;
        
        // Get all free zones
        const freeZones = [0, 1, 2, 3, 4, 5, 6].filter(z => z !== lockedZone);
        // Shuffle free zones
        freeZones.sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < next.length; i++) {
          if (i === hIndex) continue; // Hovered item stays exactly where it is
          
          next[i] = {
            zoneIndex: freeZones.pop()!,
            ringIndex: Math.floor(Math.random() * 3) // Pick a random ring (1, 2, or 3)
          };
        }
        return next;
      });
    }, 5000); // Float to a new ring every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#cdeae8] to-[#fefaef] min-h-[480px] flex items-center justify-center">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-9 md:mb-9"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B2C3D] tracking-tight mb-3">
            {t("Professional Services Across the UAE")}
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            {t("Expert maintenance teams actively serving all 7 Emirates.")}
          </p>
        </motion.div>

        {/* Main Node Graph Container */}
        <div className="relative w-full h-[600px] lg:h-[380px] flex items-center justify-center overflow-visible graph-vars">
          <style>{`
            .graph-vars {
              --graph-scale-x: 0.42;
              --graph-scale-y: 1.5;
            }
            @media (min-width: 640px) {
              .graph-vars {
                --graph-scale-x: 0.65;
                --graph-scale-y: 1.2;
              }
            }
            @media (min-width: 1024px) {
              .graph-vars {
                --graph-scale-x: 1;
                --graph-scale-y: 1;
              }
            }
          `}</style>
          
          {/* Render Concentric Capsule Rings */}
          {RINGS.map((ring, idx) => (
            <motion.div
              key={`ring-${idx}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
              className="absolute border border-[#0B2C3D]/20 rounded-[120px] md:rounded-[90px] pointer-events-none"
              style={{
                width: `calc(${ring.w}px * var(--graph-scale-x))`,
                height: `calc(${ring.h}px * var(--graph-scale-y))`,
              }}
            />
          ))}

          {/* Render Location Nodes */}
          {LOCATIONS.map((loc, i) => {
            const assignment = assignments[i];
            const pos = ZONES[assignment.zoneIndex][assignment.ringIndex];
            
            return (
              <motion.div
                key={loc.name}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, scale: 0, left: `calc(50% + calc(${pos.x}px * var(--graph-scale-x)))`, top: `calc(50% + calc(${pos.y}px * var(--graph-scale-y)))` }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  left: `calc(50% + calc(${pos.x}px * var(--graph-scale-x)))`,
                  top: `calc(50% + calc(${pos.y}px * var(--graph-scale-y)))`
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
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0B2C3D] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-[#0B2C3D]/20 group-hover:border-[#E46704] group-hover:scale-110 relative group-hover:bg-[#E46704]">
                  <span className="material-symbols-outlined text-xl md:text-2xl text-white transition-colors relative z-10">
                    {loc.icon}
                  </span>
                </div>
                
                {/* Text Label */}
                <div className="mt-1.5 text-center transition-all duration-300 group-hover:-translate-y-0.5">
                  <h4 className="text-[#0B2C3D] font-bold text-xs md:text-sm whitespace-nowrap">{t(loc.name)}</h4>
                  <p className="text-slate-500 font-medium text-[9px] md:text-[10px] uppercase tracking-wider">{t(loc.title)}</p>
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
              className="bg-[#E46704] hover:bg-[#c45600] text-white px-5 md:px-12 py-2.5 md:py-5 rounded-full font-extrabold transition-all shadow-xl flex items-center justify-center gap-1.5 md:gap-3 text-xs md:text-xl group"
            >
              <span className="material-symbols-outlined text-base md:text-3xl transition-transform group-hover:scale-110">engineering</span>
              {t("Book a Service")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { getCmsVal } from "@/lib/api-helper";
import Link from "next/link";

interface OrbitalServicesProps {
  cms?: any;
}

export default function OrbitalServices({ cms }: OrbitalServicesProps) {
  const t = (val: string) => getCmsVal(cms, val);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    { title: "AC Service", icon: "ac_unit", slug: "ac-work" },
    { title: "Plumbing", icon: "plumbing", slug: "plumbing-work" },
    { title: "Electrical", icon: "bolt", slug: "electrical-work" },
    { title: "Cleaning", icon: "cleaning_services", slug: "cleaning-services" },
    { title: "Painting", icon: "format_paint", slug: "painting-work" },
    { title: "Carpentry", icon: "carpenter", slug: "carpentry-work" },
    { title: "Pest Control", icon: "pest_control", slug: "pest-control" },
    { title: "Handyman", icon: "handyman", slug: "handyman-services" }
  ];

  return (
    <div
      className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-slate-100 flex items-center justify-center mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredIndex(null);
      }}
    >
      {/* Decorative Rings */}
      <div className="absolute inset-[15%] rounded-full border border-slate-200/40 pointer-events-none"></div>
      <div className="absolute inset-[30%] rounded-full border border-slate-200/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full pointer-events-none"></div>

      {/* Orbiting Container */}
      <div
        className={`absolute inset-0 rounded-full animate-[spin_30s_linear_infinite]`}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {services.map((service, i) => {
          const angle = (i * 360) / services.length;

          return (
            <div
              key={service.slug}
              className="absolute inset-0 pointer-events-none"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              {/* Item container at the top edge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                {/* 1. Counter rotate against the continuous 30s spin */}
                <div 
                  className="animate-[spin_30s_linear_infinite_reverse]"
                  style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                  onMouseEnter={() => {
                    setHoveredIndex(i);
                    setIsPaused(true);
                  }}
                >
                  {/* 2. Counter rotate against the static positioning angle so it stays perfectly upright */}
                  <div 
                    className="relative flex flex-col items-center w-20 md:w-24"
                    style={{ transform: `rotate(-${angle}deg)` }}
                  >
                    {/* Icon Circle Wrapper to reserve layout space while scaling */}
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border border-slate-200 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        hoveredIndex === i ? 'scale-125 border-[#E46704] bg-[#E46704]' : 'bg-white hover:scale-110 hover:border-[#E46704]/50'
                      }`}>
                        <span className={`material-symbols-outlined text-2xl md:text-3xl transition-all duration-300 ${
                          hoveredIndex === i ? 'text-white scale-[0.8]' : 'text-[#E46704] scale-100'
                        }`}>
                          {service.icon}
                        </span>
                      </div>
                    </div>
                    
                    {/* Label below */}
                    <span className={`mt-2 md:mt-3 text-[11px] md:text-xs font-extrabold whitespace-nowrap transition-colors duration-300 text-center ${
                      hoveredIndex === i ? 'text-[#E46704]' : 'text-[#0B2C3D]'
                    }`}>
                      {t(service.title)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Content Bubble */}
      <div className="relative z-10 w-44 h-44 md:w-56 md:h-56 rounded-full bg-[#0B2C3D] flex flex-col items-center justify-center text-center p-4 md:p-6 transition-all duration-300 border-[6px] border-white/50">
        {hoveredIndex !== null ? (
          <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-[#E46704] mb-2">{services[hoveredIndex].icon}</span>
            <h4 className="text-white font-bold text-base md:text-lg leading-tight mb-2">{t(services[hoveredIndex].title)}</h4>
            <Link
              href={`/services/${services[hoveredIndex].slug}`}
              className="text-[10px] md:text-xs text-white bg-[#E46704] px-3 py-1.5 rounded-full font-bold hover:bg-[#c45600] transition-colors"
            >
              {t("View Details")}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center animate-in fade-in duration-500">
            <span className="material-symbols-outlined text-4xl md:text-5xl text-[#E46704] mb-2 opacity-90">home_repair_service</span>
            <h3 className="text-white font-extrabold text-base md:text-xl uppercase tracking-wider">{t("Our Services")}</h3>
            <p className="text-slate-300 text-xs md:text-sm mt-2 font-medium">{t("Explore our offerings")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

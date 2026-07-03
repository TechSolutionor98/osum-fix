"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  breadcrumb: { label: string; href: string }[];
  bgImage?: string;
}

export default function PageBanner({ 
  title, 
  breadcrumb, 
  bgImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop" 
}: PageBannerProps) {
  return (
    <section className="relative pt-44 pb-32 md:pt-52 md:pb-36 bg-slate-950 overflow-hidden flex items-center justify-center border-b border-slate-900">
      {/* Dynamic Background with Grid Overlay & Glow */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-25 scale-105 filter blur-[1px]"
        />
        {/* Radial color glow and linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,187,226,0.15)_0%,transparent_60%)]"></div>
      </div>

      {/* Modern Grid Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* Glowing Decorative Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mb-8 shadow-[0_0_15px_rgba(0,187,226,0.5)]"
        ></motion.div>

        {/* Large Premium Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300 drop-shadow-sm">
            {title}
          </span>
        </motion.h1>
        
        {/* Glassmorphic Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center space-x-2 text-xs md:text-sm text-slate-300 bg-white/[0.03] backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
        >
          <Link href="/" className="flex items-center gap-1.5 hover:text-[var(--secondary)] text-slate-400 hover:text-white transition-colors font-medium">
            <Home size={14} className="opacity-80" />
            <span>Home</span>
          </Link>
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight size={14} className="text-slate-600" />
              {index === breadcrumb.length - 1 ? (
                <span className="text-[var(--secondary)] font-semibold">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors font-medium">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

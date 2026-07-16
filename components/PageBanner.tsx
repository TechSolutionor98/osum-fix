"use client";

import Image from "next/image";
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
  bgImage = "/images/page-banner-bg.jpg"
}: PageBannerProps) {
  return (
    <section className="relative pt-44 pb-32 md:pt-52 md:pb-36 bg-gradient-to-b from-[#cdeae8] via-[#e2f2f1] to-[#fefaef] overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* Glowing Decorative Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1.5 bg-[#0B2C3D] rounded-full mb-8 shadow-sm"
        ></motion.div>

        {/* Large Premium Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#0B2C3D] mb-8 tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Glassmorphic Breadcrumbs for Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center space-x-2 text-xs md:text-sm text-[#0B2C3D] bg-white/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/60 shadow-sm hover:bg-white/70 transition-all duration-300"
        >
          <Link href="/" className="flex items-center gap-1.5 text-slate-500 hover:text-[#0B2C3D] transition-colors font-medium">
            <Home size={14} className="opacity-80" />
            <span>Home</span>
          </Link>
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight size={14} className="text-slate-400" />
              {index === breadcrumb.length - 1 ? (
                <span className="text-[#E46704] font-semibold">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-slate-500 hover:text-[#0B2C3D] transition-colors font-medium">
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

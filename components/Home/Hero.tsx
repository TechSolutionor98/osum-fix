"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { getCmsVal } from "@/lib/api-helper";

interface HeroProps {
  cms?: any;
}

export default function Hero({ cms }: HeroProps) {
  const t = (val: string) => getCmsVal(cms, val);

  // Dynamically build the animated characters list from parsed title
  const mainTitleText = t(" Professional Maintenance & Repair Solutions.");
  const titleParts = mainTitleText.split("Solutions.");
  const firstPart = titleParts[0] || " Professional Maintenance & Repair ";
  const secondPart = mainTitleText.includes("Solutions.") ? "Solutions." : "";

  const titleCharacters = [
    ...(firstPart.split("").map((c: string) => ({ char: c, isAccent: false }))),
    ...(secondPart.split("").map((c: string) => ({ char: c, isAccent: true })))
  ];

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" as any }
    },
  };

  return (
    <section className="relative h-[500px] md:h-[550px] flex items-center overflow-hidden pt-16 bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 to-slate-900/80 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wider mb-4 border border-white/30 backdrop-blur-sm">
            {t("DUBAI'S PREMIER TECHNICAL SERVICES")}
          </span>

          <motion.h1
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            <span>{t("OsumFix")}</span>
            {titleCharacters.map((item, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={item.isAccent ? "text-[var(--secondary)]" : ""}
              >
                {item.char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-sm md:text-base text-slate-200 mb-6 max-w-xl leading-relaxed">
            {t("OsumFix delivers premium technical services for residential and commercial properties across Dubai. Reliable, fast, and guaranteed quality.")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-start">
            <Link
              href="/services"
              className="bg-[var(--secondary)] hover:bg-[#173A5A] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg text-center flex items-center justify-center text-sm gap-2"
            >
              {t("Explore Services")} <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-50 text-[var(--dark)] px-6 py-3 rounded-full font-semibold transition-all shadow-lg text-center flex items-center justify-center text-sm gap-2"
            >
              {t("Contact Us")} <PhoneCall size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

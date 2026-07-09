"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { getCmsVal } from "@/lib/api-helper";

interface HeroProps {
  cms?: any;
}

export default function Hero({ cms }: HeroProps) {
  const t = (val: string) => getCmsVal(cms, val);

  // Define translation strings in the exact top-to-bottom visual layout order:

  // 1. Top small badge
  const badgeText = t("DUBAI'S PREMIER TECHNICAL SERVICES");

  // 2. Brand name/logo title
  const brandText = t("OsumFix");

  // 3. Main heading suffix text
  const mainTitleText = t(" Professional Maintenance & Repair Solutions.");

  // 4. Description paragraph
  const descriptionText = t("OsumFix delivers premium technical services for residential and commercial properties across Dubai. Reliable, fast, and guaranteed quality.");

  // 5. CTA 1 (Explore Services)
  const exploreBtnText = t("Explore Services");

  // 6. CTA 2 (Contact Us)
  const contactBtnText = t("Contact Us");

  // 7. Hero Background Image
  const heroBgImage = t("/images/heroset.png");

  // Split and prepare characters for the animation
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
    <section
      className="relative h-[500px] md:h-[550px] flex items-center overflow-hidden pt-16 bg-slate-900"
    >
      <Image
        src={heroBgImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wider mb-4 border border-white/30 backdrop-blur-sm">
            {badgeText}
          </span>

          <motion.h1
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            <span>{brandText}</span>
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
            {descriptionText}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-start">
            <Link
              href="/services"
              className="bg-[var(--secondary)] hover:bg-[#173A5A] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg text-center flex items-center justify-center text-sm gap-2"
            >
              {exploreBtnText} <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-50 text-[var(--dark)] px-6 py-3 rounded-full font-semibold transition-all shadow-lg text-center flex items-center justify-center text-sm gap-2"
            >
              {contactBtnText} <PhoneCall size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

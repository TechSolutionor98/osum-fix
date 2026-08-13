"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const QuoteForm = dynamic(() => import("@/components/RequestQuote/QuoteForm"), {
  ssr: false,
});

export default function HomeQuoteSection() {
  return (
    <section className="pb-10 pt-4 md:pb-16 md:pt-8 relative overflow-hidden bg-gradient-to-b from-[#fefaef] to-[#cdeae8]" id="home-quote">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[#0B2C3D] tracking-tight mb-3"
          >
            Get a Free Quote Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-base md:text-lg max-w-2xl mx-auto"
          >
            Fill out the form below and we&apos;ll get back to you within 60 minutes.
          </motion.p>
        </div>

        {/* 3-Column Layout: Left Image + Center Form (Original Colors) + Right Image */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 xl:gap-8">
          
          {/* Left Image: Worried Customer (Pure Original, No Shadow/Border) */}
          <div className="hidden  lg:block w-full max-w-[320px] xl:max-w-[360px] h-[530px] relative rounded-3xl overflow-hidden shrink-0">
            <Image
              src="/images/latestleft.png"
              alt="Facing an Issue"
              fill
              sizes="(max-width: 1280px) 320px, 360px"
              className="bg-cover"
              priority
            />
          </div>

          {/* Center: Original Form Card with Gradient & Glows preserved */}
          <div className="w-full max-w-[540px] rounded-3xl bg-gradient-to-br from-[#d1ecea] via-[#eef6f5] to-[#ffe3c7] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/80 p-6 sm:p-8 relative overflow-hidden flex flex-col shrink-0">
            {/* Subtle decorative glows for the orange/blue theme combo */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#e36704]/15 rounded-full blur-[70px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B2C3D]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <QuoteForm />
            </div>
          </div>

          {/* Right Image: Happy Customer Handshake (Pure Original, No Shadow/Border) */}
          <div className="hidden lg:block w-full max-w-[320px] xl:max-w-[360px] h-[530px] relative rounded-3xl overflow-hidden shrink-0">
            <Image
              src="/images/latestright.png"
              alt="Problem Solved"
              fill
              sizes="(max-width: 1280px) 320px, 360px"
              className="object-cover object-center"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}

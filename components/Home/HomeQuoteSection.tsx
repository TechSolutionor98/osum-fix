"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import QuoteForm from "@/components/RequestQuote/QuoteForm";

export default function HomeQuoteSection() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="pb-10 pt-2 md:pb-16 md:pt-4 relative overflow-hidden bg-gradient-to-b from-[#fefaef] to-[#cdeae8]" id="home-quote">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[#0B2C3D] tracking-tight mb-4"
          >
            Get a Free Quote Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-lg max-w-2xl mx-auto"
          >
            Fill out the form below and we'll get back to you within 60 minutes.
          </motion.p>
        </div>

        <div className="w-full max-w-[820px] mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col md:flex-row relative h-auto md:h-[85vh] max-h-none md:max-h-[750px]">

          {/* Image Side */}
          <div className="hidden md:flex w-full md:w-1/2 bg-slate-900 relative min-h-[250px] md:min-h-0 flex-col justify-end p-8">
            <Image
              src="/images/about-2.png"
              alt="Technical Service Quote"
              fill
              sizes="50vw"
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).srcset = "";
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3D]/90 via-[#0B2C3D]/20 to-transparent"></div>

            <div className="relative z-10">
              <h3 className="text-white text-3xl font-extrabold mb-1 drop-shadow-lg">Premium Service</h3>
              <p className="text-[#d1ecea] font-medium text-lg drop-shadow-md mb-8">Dubai's Trusted Experts</p>

              {/* Step indicator */}
              <div className="flex gap-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentStep >= step ? "w-10 bg-[#E46704]" : "w-4 bg-white/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-[#d1ecea] via-[#eef6f5] to-[#ffe3c7] relative overflow-visible md:overflow-y-auto scrollbar-hide flex flex-col">
            {/* Subtle decorative glows for the orange/blue theme combo */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#e36704]/15 rounded-full blur-[70px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B2C3D]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <QuoteForm onStepChange={(step) => setCurrentStep(step)} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

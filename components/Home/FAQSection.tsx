"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      q: "What technical services does OsumFix provide in Dubai?",
      a: "OsumFix is a comprehensive technical services provider specializing in AC Repair & Maintenance, Plumbing, Electrical Work, Handyman Services, and general home maintenance solutions across all major areas in Dubai."
    },
    {
      q: "Do you offer emergency or same-day repair services?",
      a: "Yes, we understand that technical issues can arise unexpectedly. We provide prompt same-day and emergency maintenance services. You can contact us via our Direct Help Desk or WhatsApp for immediate assistance."
    },
    {
      q: "Are your technicians licensed and experienced?",
      a: "Absolutely. Our entire team consists of highly trained, certified, and experienced professionals who adhere to the highest safety and quality standards in Dubai."
    },
    {
      q: "Which areas and communities in Dubai do you cover?",
      a: "We serve all major communities in Dubai, including Dubai Marina, Downtown Dubai, Palm Jumeirah, JLT (Jumeirah Lake Towers), Al Barsha, Arabian Ranches, Business Bay, Jumeirah, Meydan, and Mirdif."
    },
    {
      q: "How can I get an instant quote for a service?",
      a: "Getting a quote is incredibly easy! You can click the 'Instant Quote via WhatsApp' button on our website to chat directly with our customer care representatives, or you can call our support desk."
    },
    {
      q: "Do you provide warranties on your repair work?",
      a: "Yes, we stand behind the quality of our work. All our repair and maintenance services come with a service warranty to ensure your complete peace of mind."
    }
  ];

  return (
    <section className="pt-16 pb-24 bg-gradient-to-b from-[#fefaef] to-[#cdeae8] relative">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2.5 sm:p-3 bg-teal-50 rounded-full mb-3 sm:mb-4 text-[#0D4B42]">
            <MessageCircleQuestion className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0D4B42] uppercase mb-2 sm:mb-3 block">Got Questions?</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0B2C3D] tracking-tight leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D4B42] to-[#FFB700]">Questions</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium px-2">
            Find quick answers to common questions about our technical services, coverage areas, and booking processes.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`border border-[#E46704] bg-white rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "shadow-md ring-1 ring-[#E46704]" 
                    : "shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none rounded-2xl"
                >
                  <h3 className={`font-bold text-sm sm:text-base md:text-lg transition-colors pr-2 sm:pr-8 ${isOpen ? "text-[#0D4B42]" : "text-[#0B2C3D]"}`}>
                    {faq.q}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-[#FFB700] text-slate-900 rotate-180 shadow-md" : "bg-slate-50 text-slate-400 border border-slate-200 hover:bg-slate-100"
                  }`}>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ${isOpen ? "stroke-[2.5px]" : ""}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white rounded-b-2xl"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-4 sm:pt-5 border-t border-slate-100 mx-2 sm:mx-6 mt-1">
                        <p className="text-slate-600 leading-relaxed font-medium text-xs sm:text-sm md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

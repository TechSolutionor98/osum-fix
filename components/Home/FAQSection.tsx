"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--dark)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-3 block">Got Questions?</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--dark)] tracking-tight">
            Frequently Asked <span className="text-[var(--primary)]">Questions</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto">
            Find quick answers to common questions about our technical services, coverage areas, and booking processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-white border-[var(--primary)]/30 shadow-lg shadow-[var(--primary)]/5" 
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className={`font-bold text-lg transition-colors ${isOpen ? "text-[var(--primary)]" : "text-[var(--dark)]"}`}>
                    {faq.q}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? "bg-[var(--primary)] text-white rotate-180" : "bg-white text-slate-400 border border-slate-200"
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

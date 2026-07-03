"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Yes, we provide 24/7 emergency services for critical issues like major plumbing leaks, electrical failures, and complete AC breakdowns in Dubai."
  },
  {
    question: "Are your technicians certified?",
    answer: "Absolutely. All our technicians are fully trained, certified, and experienced in their respective fields to ensure the highest quality of work and safety compliance."
  },
  {
    question: "Do you charge a call-out fee?",
    answer: "We have a standard call-out fee which covers the technician's visit and initial diagnosis. However, this fee is often waived if you proceed with the major repair work with us."
  },
  {
    question: "What is included in an Annual Maintenance Contract (AMC)?",
    answer: "Our AMCs are customizable but typically include scheduled preventative maintenance for AC systems, plumbing checks, electrical system inspections, and priority response times for emergencies."
  },
  {
    question: "Do you provide materials or should I buy them?",
    answer: "We can provide all necessary materials and spare parts, sourcing them from trusted suppliers. However, if you prefer to purchase your own specific fixtures (like light fittings or taps), we are happy to install them for you."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title="Frequently Asked Questions" 
          breadcrumb={[{ label: "FAQ", href: "/faq" }]} 
        />
        
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Common Queries"
              title="Find Your Answers Here"
              centered
            />
            
            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-lg text-[var(--dark)] pr-8">{faq.question}</span>
                    <span className="text-[var(--primary)] shrink-0">
                      {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Monitor } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface StickySidebarProps {
  sections: Section[];
}

export default function StickySidebar({ sections }: StickySidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll Spy & Visibility Logic
    const handleScroll = () => {
      if (sections.length === 0) return;

      const firstEl = document.getElementById(sections[0].id);
      const lastEl = document.getElementById(sections[sections.length - 1].id);

      if (firstEl && lastEl) {
        const firstRect = firstEl.getBoundingClientRect();
        const lastRect = lastEl.getBoundingClientRect();

        // Show sidebar if the first element is entering the viewport
        // and hide if we scroll past the end of the last element
        const isPastStart = firstRect.top < window.innerHeight;
        const isBeforeEnd = lastRect.bottom > 0;

        setIsVisible(isPastStart && isBeforeEnd);
      }

      // Determine active section based on scroll position
      let currentActive = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is currently in the top half of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = section.id;
            break;
          }
        }
      }

      // Fallback: If no section is exactly in the middle, find the closest one
      if (!currentActive) {
        let minDistance = Infinity;
        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top - window.innerHeight / 2);
            if (distance < minDistance) {
              minDistance = distance;
              currentActive = section.id;
            }
          }
        }
      }

      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Account for any fixed headers
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-[60]"
        >
          <motion.div
            animate={{ width: isOpen ? 260 : 56 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-[28px] py-6 flex flex-col items-start overflow-hidden border-2 border-orange-500"
          >
            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex justify-center items-center transition-all duration-300 mb-6 shrink-0 ${
                isOpen 
                  ? "w-[218px] mx-[21px] h-10 rounded-full bg-orange-50 text-orange-500 border border-orange-200 hover:bg-orange-500 hover:text-white" 
                  : "w-[56px] mx-0 h-10 bg-transparent text-orange-500 hover:text-orange-600 border border-transparent"
              }`}
              title={isOpen ? "Collapse" : "Expand"}
            >
              {isOpen ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </button>

            {/* Navigation Items */}
            <div className="flex flex-col w-full gap-5 my-4 flex-grow justify-center relative">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center gap-4 transition-colors text-left px-[21px]"
                    title={!isOpen ? section.label : ""}
                  >
                    <div
                      className={`shrink-0 w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-orange-500" : "bg-slate-200 hover:bg-slate-300"
                      }`}
                    />
                    <AnimatePresence>
                      {isOpen && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className={`whitespace-nowrap text-[15px] ${
                            isActive ? "text-orange-500 font-bold" : "text-slate-500 hover:text-slate-700"
                          }`}
                        >
                          {section.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Footer Icon */}
            <div className="mt-6 pt-6 border-t border-orange-500 w-[30px] mx-[13px] flex justify-center shrink-0">
              <Monitor size={18} className="text-orange-500" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

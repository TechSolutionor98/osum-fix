"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteForm from "./QuoteForm";

export default function GlobalQuoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#request-quote") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Check hash on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (window.location.hash === "#request-quote") {
      window.history.pushState({}, document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6 w-screen h-screen">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Card container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-sm shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-50 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Scrollable Form Body */}
            <div className="overflow-y-auto overflow-x-hidden px-8 md:px-12 py-6 md:py-8 flex-grow">
              <QuoteForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

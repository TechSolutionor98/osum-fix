"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteForm from "./QuoteForm";

export default function GlobalQuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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
            initial={{ opacity: 0, scale: 0.9, rotateX: 10, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: -10, y: -40 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/50 overflow-hidden z-10 h-[85vh] max-h-[750px] flex flex-col md:block"
            style={{ perspective: "1200px" }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/50 backdrop-blur-md hover:bg-white text-slate-500 hover:text-[#e36704] transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <X size={20} />
            </button>

            {/* Mobile View: Stacked (Hidden on MD and up) */}
            <div className="md:hidden flex flex-col h-full overflow-y-auto bg-gradient-to-br from-[#f5f6ed] to-[#d1ecea]">
               <div className="w-full bg-gradient-to-br from-[#e36704] to-[#cc5803] p-8 text-white flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold mb-2">Premium Service</h3>
                  <p className="font-medium opacity-90">Dubai's Trusted Technical Experts</p>
               </div>
               <div className="p-6">
                 <QuoteForm onStepChange={(step) => setCurrentStep(step)} />
               </div>
            </div>

            {/* Desktop View: 3D Sliding Panels */}
            <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden rounded-3xl">
              
              {/* Dynamic seamlessly blended background */}
              <motion.div 
                animate={{
                  backgroundPosition: currentStep % 2 === 0 ? "100% 50%" : "0% 50%"
                }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
                className="absolute inset-0 w-full h-full"
                style={{
                  background: "linear-gradient(to right, #e36704 0%, #c25602 15%, #f5f6ed 25%, #d1ecea 50%, #f5f6ed 75%, #c25602 85%, #e36704 100%)",
                  backgroundSize: "200% 100%"
                }}
              />

              {/* Global Floating Texture & Blur Elements */}
              <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/pattern-bg.png')] bg-cover mix-blend-overlay"></div>
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-white rounded-full blur-[120px] opacity-30"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-300 rounded-full blur-[120px] opacity-20"></div>
              </div>
              {/* Form Panel (White/Gradient Area) */}
              <motion.div 
                animate={{ 
                  x: currentStep % 2 === 0 ? "0%" : "66.666667%"
                }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
                className="absolute top-0 left-0 w-3/5 h-full overflow-y-auto overflow-x-hidden px-10 py-8 z-10 scrollbar-hide"
                style={{ transformOrigin: "right center", scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style dangerouslySetInnerHTML={{__html: `
                  .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                  }
                `}} />
                <QuoteForm onStepChange={(step) => setCurrentStep(step)} />
              </motion.div>

              {/* Colored Image/Visual Panel */}
              <motion.div 
                animate={{ 
                  x: currentStep % 2 === 0 ? "150%" : "0%"
                }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
                className="absolute top-0 left-0 w-2/5 h-full items-center justify-center p-10 z-20 flex flex-col"
                style={{ transformOrigin: currentStep % 2 === 0 ? "left center" : "right center" }}
              >

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 relative group"
                  >
                    <img 
                      src="/images/about-2.png" 
                      alt="Technical Services" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 z-20">
                      <h3 className="text-white text-3xl font-extrabold mb-1 drop-shadow-lg">Premium Service</h3>
                      <p className="text-[#d1ecea] font-medium text-lg drop-shadow-md">Dubai's Trusted Experts</p>
                    </div>
                  </motion.div>
                  

                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

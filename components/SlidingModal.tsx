"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface SlidingModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: "blue" | "orange"; // Added theme option for amazing flexibility!
}

export default function SlidingModal({ isOpen, onClose, theme = "blue" }: SlidingModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  // Dynamic theme gradients
  const gradientClass = theme === "blue" 
    ? "from-[#1e3a8a] via-[#2563eb] to-[#3b82f6]" 
    : "from-orange-500 via-orange-400 to-amber-500";
    
  const buttonClass = theme === "blue"
    ? "bg-[#06b6d4] hover:bg-[#0891b2] shadow-cyan-500/30"
    : "bg-orange-500 hover:bg-orange-600 shadow-orange-500/30";

  const textClass = theme === "blue" ? "text-[#1e3a8a]" : "text-orange-600";
  const toggleBgClass = theme === "blue" ? "bg-blue-500" : "bg-orange-500";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-[900px] h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden flex">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-black/5 hover:bg-black/10 rounded-full text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* ----------------- FORM CONTAINER ----------------- */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-white z-10"
          initial={false}
          animate={{ x: isLogin ? "100%" : "0%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Sign In Form */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-white"
            initial={false}
            animate={{ 
              opacity: isLogin ? 1 : 0, 
              zIndex: isLogin ? 20 : 0,
              x: isLogin ? "0%" : "20%" 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className={`text-4xl font-bold mb-8 ${textClass}`}>Welcome!</h2>
            <div className="w-full space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="YOUR E-MAIL"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="YOUR PASSWORD"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center justify-between px-2 text-sm text-gray-500">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-2" />
                  Remember my password
                </label>
                <a href="#" className="text-gray-500 hover:underline hover:text-blue-600">Forgot your password?</a>
              </div>
              <div className="pt-6 flex justify-center">
                <button 
                  onClick={() => setIsLogin(false)} // Simulating submit -> switch for demo
                  className={`px-12 py-3 text-white font-semibold rounded-full shadow-lg transform transition-transform hover:scale-105 ${buttonClass}`}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </motion.div>

          {/* Patient Form */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-white"
            initial={false}
            animate={{ 
              opacity: isLogin ? 0 : 1, 
              zIndex: isLogin ? 0 : 20,
              x: isLogin ? "-20%" : "0%"
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${textClass}`}>Define your patient</h2>
            
            <div className="w-full space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Versalin</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-medium">RR</span>
                  <div className={`w-12 h-6 ${toggleBgClass} rounded-full relative cursor-pointer shadow-inner`}>
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">FIRST LINE</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Age</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-medium">&lt;65 YEARS</span>
                  <div className={`w-12 h-6 ${toggleBgClass} rounded-full relative cursor-pointer shadow-inner`}>
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">&ge;65 YEARS</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Dose</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-medium">&lt;800 MG</span>
                  <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer shadow-inner">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">&gt;800 MG</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">ADV</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-medium">NO MUTATION</span>
                  <div className={`w-12 h-6 ${toggleBgClass} rounded-full relative cursor-pointer shadow-inner`}>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">MUTATION</span>
                </div>
              </div>
              
              <div className={`${toggleBgClass} text-white rounded-full py-2 px-6 flex justify-between text-xs font-semibold shadow-md`}>
                <label className="flex items-center cursor-pointer"><input type="radio" name="mut" className="mr-2" defaultChecked/> WVDB BETA</label>
                <label className="flex items-center cursor-pointer"><input type="radio" name="mut" className="mr-2" /> MYOD1</label>
                <label className="flex items-center cursor-pointer"><input type="radio" name="mut" className="mr-2" /> BDE-DPB</label>
              </div>

              <div className="pt-6 flex justify-center">
                <button 
                  onClick={() => setIsLogin(true)} // Submit
                  className={`px-12 py-3 text-white font-semibold rounded-full shadow-lg transform transition-transform hover:scale-105 ${buttonClass}`}
                >
                  START
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ----------------- OVERLAY CONTAINER ----------------- */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full z-20 overflow-hidden pointer-events-none rounded-2xl"
          initial={false}
          animate={{ x: isLogin ? "0%" : "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.div
            className={`absolute top-0 left-0 w-[200%] h-full flex bg-gradient-to-br ${gradientClass} text-white`}
            initial={false}
            animate={{ x: isLogin ? "0%" : "-50%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* Left Overlay (Visible when form is right) */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-12 text-center pointer-events-auto relative">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-20 left-10 w-8 h-8 rounded-full border-4 border-white/30"></div>
                <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full border-4 border-white/30"></div>
                <div className="absolute top-1/3 right-20 w-4 h-4 bg-white/40 rounded-full"></div>
              </div>
              
              <div className="z-10 flex flex-col items-center">
                <div className="w-48 h-48 mb-8 relative">
                   <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center shadow-2xl">
                      <span className="text-white font-medium">Illustration</span>
                   </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">New Here?</h3>
                <p className="text-white/80 mb-8 font-light leading-relaxed">
                  Sign up and discover a great amount of new opportunities!
                </p>
                <button
                  onClick={() => setIsLogin(false)}
                  className="px-10 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-colors"
                >
                  Create Account
                </button>
              </div>
            </div>

            {/* Right Overlay (Visible when form is left) */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-12 text-center pointer-events-auto relative">
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 right-10 w-10 h-10 rounded-full border-4 border-white/30"></div>
                <div className="absolute bottom-32 left-10 w-6 h-6 rounded-full border-4 border-white/30"></div>
                <div className="absolute top-1/2 left-20 w-4 h-4 bg-white/40 rounded-full"></div>
              </div>

              <div className="z-10 flex flex-col items-center">
                 <div className="w-48 h-48 mb-8 relative">
                   <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center shadow-2xl">
                      <span className="text-white font-medium">Illustration</span>
                   </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">One of us?</h3>
                <p className="text-white/80 mb-8 font-light leading-relaxed">
                  If you already have an account, just sign in. We&apos;ve missed you!
                </p>
                <button
                  onClick={() => setIsLogin(true)}
                  className="px-10 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-colors"
                >
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

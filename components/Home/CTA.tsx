"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { getCmsVal } from "@/lib/api-helper";

interface CTAProps {
  cms?: any;
}

export default function CTA({ cms }: CTAProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#cdeae8] to-[#fefaef]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0D4B42] rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden border-4 border-[#FFB700]/20 text-center"
        >

          
          {/* Animated glowing orbs inside the card */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E46704] rounded-full blur-[120px] mix-blend-screen pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B2C3D] rounded-full blur-[120px] mix-blend-screen pointer-events-none"
          />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {t("Need Professional Maintenance Services in Dubai?")}
            </h2>
            <p className="text-teal-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              {t("Contact us today for a free consultation and quote. Our experts are ready to solve your technical issues quickly and efficiently.")}
            </p>

            <div className="flex flex-wrap flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="#request-quote"
                onClick={() => {
                  window.location.hash = "request-quote";
                }}
                className="bg-[#FFB700] hover:bg-[#E5A400] text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-[0_0_20px_rgba(255,183,0,0.4)] hover:-translate-y-1 w-full sm:w-auto flex justify-center text-lg"
              >
                {t("Get a Free Quote")}
              </Link>
              
              <a
                href="tel:+971567910188"
                className="bg-white/10 hover:bg-white/20 border-2 border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-3 hover:-translate-y-1 w-full sm:w-auto text-lg"
              >
                <PhoneCall size={22} className="text-[#FFB700]" /> {t("Call 056 7910188")}
              </a>
              
              <a
                href="https://wa.me/971551519540"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 hover:-translate-y-1 w-full sm:w-auto text-lg"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/></svg>
                {t("WhatsApp")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

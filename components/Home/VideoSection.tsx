"use client";

import { motion } from "framer-motion";
import { getCmsVal } from "@/lib/api-helper";

interface VideoSectionProps {
  cms?: any;
}

export default function VideoSection({ cms }: VideoSectionProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-b from-[#cdeae8] to-[#fefaef]">
      {/* Decorative Background Patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-bold tracking-widest text-[#E46704] uppercase mb-4 block">
            {t("See Us In Action")}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B2C3D] tracking-tight mb-6">
            {t("Experience The OsumFix Difference")}
          </h2>
          <p className="text-slate-600 font-medium text-lg">
            {t("Watch how our expert technicians handle complex maintenance challenges with precision and care.")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full mx-auto rounded-[2rem] overflow-hidden relative border-[8px] border-white bg-slate-900 group"
        >
          {/* Removed overlay to show pure video color */}
          <video
            className="w-full aspect-video object-cover pointer-events-none transform transition-transform duration-1000 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            poster={t("https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop")}
          >
            <source src="/video/Untitled.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}

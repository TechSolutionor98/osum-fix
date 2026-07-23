"use client";

import { motion } from "framer-motion";
import { getCmsVal } from "@/lib/api-helper";
import { Play } from "lucide-react";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: "600",
  subsets: ["latin"],
});

interface VideoSectionProps {
  cms?: any;
}

export default function VideoSection({ cms }: VideoSectionProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <>

      <section className="pt-10 pb-24 relative overflow-x-clip bg-[#0a121e]">
        {/* Background ambient glows */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.2]">
                {t("Experience The")} <br />
                <span className="relative inline-block mt-2 px-2 mr-2">
                  <span className="relative z-10">{t("OsumFix")}</span>
                  {/* Cyan drawn circle */}
                  <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-cyan-500 pointer-events-none z-0" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path
                      d="M10,20 C10,0 90,0 90,20 C90,40 10,40 15,20 C20,0 80,0 80,20"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </span>
                {t("Difference")}
              </h2>

              <p className="text-slate-400 font-medium text-lg mb-12 max-w-lg">
                {t("Watch how our expert technicians handle complex maintenance challenges with precision and care.")}
              </p>

              {/* Action Button Area */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

                {/* Handwritten Arrow & Text */}
                <div className="flex items-end gap-3 text-white/90">
                  <span className={`${caveat.className} text-3xl rotate-[-5deg] mb-3`}>
                    {t("Why Choose Osumfix")}
                  </span>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-2 opacity-80">
                    <path d="M5,35 Q20,35 35,15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M28,14 L36,14 L34,22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Discover Us Button */}
                <Link 
                  href="/services"
                  className="bg-[#E46704] hover:bg-[#c95b03] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 text-lg group"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={14} className="fill-white ml-0.5" />
                  </div>
                  {t("Discover Us")}
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-video flex items-center justify-center lg:translate-x-10 mt-10 lg:mt-0"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-10">
                <video
                  className="w-full h-full object-cover pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/video/Untitled.mp4" type="video/mp4" />
                  <track kind="captions" srcLang="en" label="English" default />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </>
  );
}

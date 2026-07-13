"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";

interface VideoSectionProps {
  cms?: any;
}

export default function VideoSection({ cms }: VideoSectionProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={t("See Us In Action")}
          title={t("Experience The OsumFix Difference")}
          description={t("Watch how our expert technicians handle complex maintenance challenges with precision and care.")}
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 w-full mx-auto rounded-3xl overflow-hidden  relative border-4 border-white bg-slate-900"
        >
          <video
            className="w-full aspect-video object-cover pointer-events-none"
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

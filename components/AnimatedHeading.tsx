"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function AnimatedHeading({ subtitle, title, description }: AnimatedHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-slate-500 mt-4"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

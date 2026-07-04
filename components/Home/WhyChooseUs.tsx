"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";

interface WhyChooseUsProps {
  cms?: any;
}

export default function WhyChooseUs({ cms }: WhyChooseUsProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle={t("Why Choose OsumFix")}
              title={t("We Build Trust Through Quality Work")}
              description={t("With years of experience in the Dubai market, we understand the high standards our clients expect. Our team of certified professionals is dedicated to exceeding those expectations.")}
            />

            <div className="space-y-6 mt-8">
              {[
                t("Certified & Experienced Technicians"),
                t("24/7 Emergency Support"),
                t("Transparent Pricing & No Hidden Fees"),
                t("Guaranteed Satisfaction")
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary)] shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-lg font-medium text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/about" className="text-[var(--primary)] font-semibold flex items-center gap-2 hover:text-[var(--secondary)] transition-colors">
                {t("More About Us")} <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Image Placeholder */}
            <div className="aspect-[4/5] rounded-2xl bg-slate-200 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 flex items-center justify-center">
                <span className="text-slate-400 font-medium">{t("Professional Team Image")}</span>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--dark)] text-xl">{t("100%")}</h4>
                  <p className="text-sm text-slate-500 font-medium">{t("Quality Guarantee")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

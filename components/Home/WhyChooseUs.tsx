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

  // Left column texts in visual order
  const subtitleText = t("Why Choose OsumFix");
  const titleText = t("We Build Trust Through Quality Work");
  const descriptionText = t("With years of experience in the Dubai market, we understand the high standards our clients expect. Our team of certified professionals is dedicated to exceeding those expectations.");
  const checkItem1 = t("Certified & Experienced Technicians");
  const checkItem2 = t("24/7 Emergency Support");
  const checkItem3 = t("Transparent Pricing & No Hidden Fees");
  const checkItem4 = t("Guaranteed Satisfaction");
  const learnMoreText = t("More About Us");

  // Right column image details
  const teamImage = t("/images/why-choose-us.png");
  const teamImageAlt = t("Professional Team Image");

  // Quality floating badge texts
  const qualityPercentText = t("100%");
  const qualityLabelText = t("Quality Guarantee");

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle={subtitleText}
              title={titleText}
              description={descriptionText}
              className="mb-4"
            />

            <div className="space-y-4 mt-4">
              {[
                checkItem1,
                checkItem2,
                checkItem3,
                checkItem4
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

            <div className="mt-6">
              <Link href="/about" className="text-[var(--primary)] font-semibold flex items-center gap-2 hover:text-[var(--secondary)] transition-colors">
                {learnMoreText} <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Live CMS Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl bg-slate-100">
              <img 
                src={teamImage} 
                alt={teamImageAlt} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--dark)] text-xl">{qualityPercentText}</h4>
                  <p className="text-sm text-slate-500 font-medium">{qualityLabelText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

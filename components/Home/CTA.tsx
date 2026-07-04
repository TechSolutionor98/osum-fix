"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { getCmsVal } from "@/lib/api-helper";

interface CTAProps {
  cms?: any;
}

export default function CTA({ cms }: CTAProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--primary)]"></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {t("Need Professional Maintenance Services in Dubai?")}
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          {t("Contact us today for a free consultation and quote. Our experts are ready to solve your technical issues quickly and efficiently.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg animate-bounce"
          >
            {t("Get a Free Quote")}
          </Link>
          <a
            href="tel:+971501234567"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall size={20} /> {t("Call +971 50 123 4567")}
          </a>
        </div>
      </div>
    </section>
  );
}

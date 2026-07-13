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
        <div className="flex flex-wrap flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#request-quote"
            onClick={() => {
              window.location.hash = "request-quote";
            }}
            className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg cursor-pointer"
          >
            {t("Get a Free Quote")}
          </Link>
          <a
            href="tel:+971567910188"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall size={20} /> {t("Call 056 7910188")}
          </a>
          <a
            href="https://wa.me/971551519540"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/></svg>
            {t("WhatsApp")}
          </a>
        </div>
      </div>
    </section>
  );
}

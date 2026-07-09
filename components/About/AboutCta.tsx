import Link from "next/link";
import { getCmsVal } from "@/lib/api-helper";
import { PhoneCall } from "lucide-react";

interface AboutCtaProps {
  cms?: any;
}

export default function AboutCta({ cms }: AboutCtaProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--primary)]"></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {t("Ready to Experience Premium Service?")}
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          {t("Join hundreds of satisfied property owners in Dubai. Let OsumFix handle your technical maintenance with unmatched professionalism.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg"
          >
            {t("Contact Us Today")}
          </Link>
          <a
            href="tel:+971551519540"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall size={20} /> {t("Call 055 1519540 / 056 7910188")}
          </a>
        </div>
      </div>
    </section>
  );
}

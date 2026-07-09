import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
  features?: string[];
}

export default function ServiceCard({ title, description, slug, icon, features }: ServiceCardProps) {
  return (
    <div className="bg-[#FBFCFF] rounded-none p-8 shadow-sm border border-slate-200 transition-all duration-300 flex flex-col h-full">
      <div className="w-12 h-12 rounded bg-slate-100 text-[var(--primary)] flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
        {title}
      </h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className="mb-8 space-y-3 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-700">
              <CheckCircle2 size={16} className="text-[var(--primary)] mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/services/${slug}`}
        className="mt-auto flex items-center justify-between text-[var(--secondary)] font-bold text-sm hover:opacity-80 transition-opacity"
      >
        <span>Book Now</span>
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, slug, icon }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-16 h-16 rounded-xl bg-blue-50 text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[var(--dark)] mb-3 group-hover:text-[var(--primary)] transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 mb-6 line-clamp-3">
        {description}
      </p>
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center text-[var(--primary)] font-medium hover:text-[var(--secondary)] transition-colors"
      >
        Read More <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
}

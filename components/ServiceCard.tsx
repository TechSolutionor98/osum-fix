import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";

interface ServiceCardProps {
  title: string | any;
  description: string | any;
  slug: string;
  icon: React.ReactNode;
  features?: any[];
  image?: string | any;
  isWide?: boolean;
}

export default function ServiceCard({ title, description, slug, icon, features, image, isWide }: ServiceCardProps) {
  if (isWide) {
    return (
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-none p-8 shadow-sm border border-slate-200 transition-all duration-300 flex flex-col w-full">
        {image && (
          <div className="w-full mb-6 flex justify-center">
            <Image src={image} alt="Service Image" width={800} height={500} className="w-full h-auto object-contain" />
          </div>
        )}
        <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
          {title}
        </h3>
        <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-5xl">
          {description}
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-auto pt-2 border-t border-transparent">
          {features && features.length > 0 && (
            <ul className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-[var(--primary)] mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          
          <Link
            href={`/services/${slug}`}
            className="flex items-center justify-center bg-[var(--primary)] text-white px-6 py-3 font-semibold text-sm hover:bg-[var(--dark)] transition-colors gap-4 w-fit rounded-sm"
          >
            <span className="flex flex-col items-start leading-snug">
              <span>Schedule</span>
              <span>Expert Help</span>
            </span>
            <Calendar size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-none p-8 shadow-sm border border-slate-200 transition-all duration-300 flex flex-col h-full">
      {image && (
        <div className="w-full mb-6 flex justify-center">
          <Image src={image} alt="Service Image" width={600} height={400} className="w-full h-auto object-contain" />
        </div>
      )}
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

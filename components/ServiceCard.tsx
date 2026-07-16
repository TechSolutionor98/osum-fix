import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string | any;
  description: string | any;
  slug: string;
  icon: React.ReactNode;
  image?: string | any;
  categoryName?: string;
  price?: string;
  badge?: {
    text: string;
    variant: "primary" | "error" | "default";
  };
}

export default function ServiceCard({ title, description, slug, icon, image, categoryName, badge }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative z-10">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        )}
        {badge && (
          <div className={`absolute top-4 ${badge.variant === 'error' ? 'right-4 bg-red-500 text-white' : 'left-4 bg-[#CDEAE8] text-[#163235]'} backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest`}>
            {badge.text}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <div className="text-[#F5B52E] flex items-center justify-center">
            {icon}
          </div>
          <span className="text-xs font-semibold text-[#6B7677] uppercase tracking-tighter">
            {categoryName || "Maintenance"}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[#163235] mb-2">
          {title}
        </h3>
        <p className="text-[#6B7677] text-sm mb-6 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-end items-center pt-4 border-t border-slate-100 mt-auto">
          <Link
            href={`/services/${slug}`}
            className="text-[#163235] hover:text-[#F5B52E] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            View Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

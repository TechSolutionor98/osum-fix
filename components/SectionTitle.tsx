import { ReactNode } from "react";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-slate-600 max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
      <div
        className={`w-20 h-1 bg-[var(--secondary)] mt-6 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

'use client';

import Link from 'next/link';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

interface Socials {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

interface AppointmentLink {
  id: string;
  name: string;
  url: string;
  description?: string;
  profileImage?: string;
  category?: string;
  socials?: Socials;
  active?: boolean;
}

export default function AppointmentSection({ links = [] }: { links: AppointmentLink[] }) {
  // Only render the section if there are active appointment links in the database
  const activeLinks = links.filter(l => l.active !== false);
  if (!activeLinks || activeLinks.length === 0) return null;

  return (
    <section className="w-full px-6 py-16 text-center bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 text-red-600 mb-4 shadow-sm">
            <FiCalendar size={26} />
          </div>
          <h2 className="text-3xl font-black text-black uppercase tracking-tight leading-tight">
            Book an Appointment
          </h2>
          <p className="text-sm text-gray-500 mt-3 max-w-md leading-relaxed">
            Ready to schedule a meeting with our team? View our calendar slots to book a session directly with our experts.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-16 bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-red-600" />
            <div className="h-px w-16 bg-gray-200" />
          </div>
        </div>

        {/* Premium Navigation Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/appointments"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm uppercase tracking-widest active:scale-[0.98]"
          >
            <FiCalendar size={16} />
            <span>Book an Appointment Slot</span>
            <FiArrowRight size={15} className="ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}

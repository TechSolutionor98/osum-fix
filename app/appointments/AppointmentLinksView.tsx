'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

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

export default function AppointmentLinksView({ links = [] }: { links: AppointmentLink[] }) {
  // Only show active slots to clients
  const activeLinks = links.filter(l => l.active !== false);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique departments/categories
  const categoriesSet = new Set<string>();
  activeLinks.forEach(l => {
    if (l.category && l.category.trim()) {
      categoriesSet.add(l.category.trim());
    } else {
      categoriesSet.add('General');
    }
  });
  const categoriesList = ['All', ...Array.from(categoriesSet).sort((a, b) => a.localeCompare(b))];

  // Filter links by category
  const filteredLinks = selectedCategory === 'All'
    ? activeLinks
    : activeLinks.filter(l => {
        const cat = l.category?.trim() || 'General';
        return cat.toLowerCase() === selectedCategory.toLowerCase();
      });

  // Handle direct navigation to calendar slot
  const handleCardClick = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="py-16 px-6 text-left max-w-7xl mx-auto">
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors cursor-pointer"
        >
          ← Back to Contact
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-red-600 mb-6 shadow-md">
          <FiCalendar size={28} />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-tight">
          Book an Appointment
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mt-3 leading-relaxed">
          Connect directly with our departments and experts. Select a department below and click a card to book a calendar slot instantly.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
          <FiClock size={14} className="text-red-600" />
          <span>Redirects to Google Calendar booking slots</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      {activeLinks.length > 0 && categoriesList.length > 2 && (
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex flex-wrap gap-2 justify-center border-b border-gray-100 pb-6">
            {categoriesList.map(cat => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-red-600 text-white border-red-600 shadow-sm'
                      : 'bg-white text-gray-550 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Profile Directory Cards Grid */}
      <div className="max-w-6xl mx-auto">
        {activeLinks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-lg max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 text-gray-400 mb-4">
              <FiCalendar size={28} />
            </div>
            <p className="text-gray-900 font-bold uppercase tracking-wider">No appointment slots available.</p>
            <p className="text-gray-400 text-xs mt-1">Please check back later or contact us directly.</p>
          </div>
        ) : filteredLinks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-lg max-w-lg mx-auto">
            <p className="text-gray-900 font-bold uppercase tracking-wider">No slots found under this department.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-xs font-extrabold text-red-600 hover:text-red-700 uppercase tracking-widest cursor-pointer border-0 bg-transparent"
            >
              Show All Departments
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => handleCardClick(link.url)}
                className="group p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-red-600 transition-all duration-300 relative flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute left-0 top-0 w-1.5 h-full bg-red-600 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Photo & Identity Header */}
                  <div className="flex gap-4 items-start mb-4">
                    {/* Profile Photo */}
                    <div className="shrink-0">
                      {link.profileImage ? (
                        <img
                          src={link.profileImage}
                          alt={link.name}
                          className="w-14 h-14 rounded-2xl object-cover border border-gray-100 bg-gray-50 shadow-xs"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold">
                          {link.name ? link.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'AP'}
                        </div>
                      )}
                    </div>

                    {/* Name & Dept Badge */}
                    <div className="space-y-1 text-left">
                      <h2 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                        {link.name}
                      </h2>
                      <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest bg-red-50 text-red-600 border border-red-600/10 px-2.5 py-1 rounded-md">
                        {link.category || 'General'}
                      </span>
                    </div>
                  </div>

                  {/* Description / Bio */}
                  {link.description ? (
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 text-left font-medium">
                      {link.description}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-400 italic mb-4 text-left font-medium">
                      Schedule a direct meeting block using the booking link below.
                    </p>
                  )}
                </div>

                {/* Footer block (Socials + Button) */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
                  {/* Social Profile Shortcuts */}
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {link.socials?.linkedin && (
                      <a
                        href={link.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-blue-50 text-[#0077b5] border border-blue-100 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] flex items-center justify-center transition-all"
                        title="LinkedIn Profile"
                      >
                        <FaLinkedinIn size={11} />
                      </a>
                    )}
                    {link.socials?.twitter && (
                      <a
                        href={link.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-sky-50 text-[#1da1f2] border border-sky-100 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] flex items-center justify-center transition-all"
                        title="Twitter Profile"
                      >
                        <FaTwitter size={11} />
                      </a>
                    )}
                    {link.socials?.facebook && (
                      <a
                        href={link.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-indigo-50 text-[#1877f2] border border-indigo-100 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] flex items-center justify-center transition-all"
                        title="Facebook Profile"
                      >
                        <FaFacebookF size={11} />
                      </a>
                    )}
                    {link.socials?.instagram && (
                      <a
                        href={link.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-pink-50 text-[#e1306c] border border-pink-100 hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c] flex items-center justify-center transition-all"
                        title="Instagram Profile"
                      >
                        <FaInstagram size={11} />
                      </a>
                    )}
                  </div>

                  {/* Action Link Trigger */}
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-red-600 group-hover:text-red-700 transition-colors uppercase tracking-widest">
                    <span>Book Slot</span>
                    <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer disclaimer */}
      {activeLinks.length > 0 && (
        <p className="text-center text-xs text-gray-400 mt-16 font-medium">
          You will be redirected to Google Calendar to complete your booking.
        </p>
      )}
    </div>
  );
}

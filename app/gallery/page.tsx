"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";

const galleryImages = [
  { id: 1, category: "Electrical" },
  { id: 2, category: "Plumbing" },
  { id: 3, category: "HVAC" },
  { id: 4, category: "Painting" },
  { id: 5, category: "Renovation" },
  { id: 6, category: "Electrical" },
  { id: 7, category: "Plumbing" },
  { id: 8, category: "Painting" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title="Gallery" 
          breadcrumb={[{ label: "Gallery", href: "/gallery" }]} 
        />
        
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Our Work"
              title="A Glimpse into Our Expertise"
              centered
            />
            
            {/* Filters */}
            <div className="flex justify-center gap-3 mt-8 mb-12 flex-wrap">
              {["All", "Electrical", "Plumbing", "HVAC", "Painting", "Renovation"].map(category => (
                <button 
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                    filter === category 
                      ? "bg-[var(--primary)] text-white" 
                      : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((img) => (
                <div key={img.id} className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group cursor-pointer shadow-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium">
                    Image {img.id}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold tracking-wider uppercase">{img.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

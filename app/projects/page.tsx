import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  { id: 1, title: "Villa Complete Renovation", category: "Renovation", location: "Jumeirah" },
  { id: 2, title: "Commercial HVAC Installation", category: "HVAC", location: "Business Bay" },
  { id: 3, title: "Office Gypsum Partitioning", category: "Interior", location: "Downtown Dubai" },
  { id: 4, title: "Residential Plumbing Overhaul", category: "Plumbing", location: "Dubai Marina" },
  { id: 5, title: "Apartment Painting Project", category: "Painting", location: "JVC" },
  { id: 6, title: "Annual Maintenance Contract", category: "AMC", location: "Palm Jumeirah" },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title="Our Projects" 
          breadcrumb={[{ label: "Projects", href: "/projects" }]} 
        />
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Featured Work"
              title="Delivering Excellence in Every Job"
              description="Browse through some of our recently completed projects across Dubai. We take pride in the quality of our craftsmanship."
              centered
            />
            
            <div className="flex justify-center gap-4 mt-8 mb-12 flex-wrap">
              <button className="px-6 py-2 rounded-full bg-[var(--primary)] text-white font-medium text-sm">All</button>
              <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium text-sm transition-colors">HVAC</button>
              <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium text-sm transition-colors">Plumbing</button>
              <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium text-sm transition-colors">Renovation</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                      Project Image Placeholder
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[var(--primary)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--primary)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-[var(--secondary)] tracking-wider uppercase">{project.category}</span>
                      <span className="text-xs text-slate-500">{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--dark)] group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>
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

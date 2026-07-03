import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Briefcase, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    { title: "Senior Electrician", type: "Full-Time", location: "Dubai" },
    { title: "HVAC Technician", type: "Full-Time", location: "Dubai" },
    { title: "Plumber", type: "Full-Time", location: "Dubai" },
    { title: "Sales Executive", type: "Full-Time", location: "Dubai" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title="Careers" 
          breadcrumb={[{ label: "Careers", href: "/careers" }]} 
        />
        
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Join Our Team"
              title="Build Your Career With OsumFix"
              description="We are always looking for talented, dedicated, and skilled professionals to join our growing team in Dubai."
              centered
            />
            
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-6 flex items-center gap-2">
                <Briefcase className="text-[var(--primary)]" /> Open Positions
              </h3>
              
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:border-[var(--primary)] transition-colors">
                    <div className="mb-4 sm:mb-0">
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-1">{job.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="bg-blue-50 text-[var(--primary)] px-3 py-1 rounded-full font-medium">{job.type}</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2.5 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-semibold flex items-center gap-2 group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 bg-[var(--dark)] p-8 rounded-3xl text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Don't see a suitable role?</h3>
                <p className="text-slate-300 mb-6">Send your CV to our HR department and we'll keep you in mind for future opportunities.</p>
                <a href="mailto:hr@osumfix.ae" className="inline-block bg-[var(--primary)] hover:bg-[var(--secondary)] px-8 py-3 rounded-full font-bold transition-colors">
                  Email HR Department
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Maktoum",
    role: "Homeowner, Jumeirah",
    text: "OsumFix completely revamped our villa's electrical system. Their team was professional, timely, and the quality of work was outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Office Manager, Business Bay",
    text: "We use OsumFix for our office's annual maintenance. They are always quick to respond to emergencies and their preventative maintenance has saved us a lot of trouble.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammad Tariq",
    role: "Restaurant Owner",
    text: "The plumbing team at OsumFix resolved a major issue at our restaurant in record time. Highly recommend their services.",
    rating: 5,
  },
  {
    id: 4,
    name: "Elena Petrova",
    role: "Apartment Resident, Dubai Marina",
    text: "I hired them for painting and handyman work before moving in. The apartment looks brand new. Very clean and precise work.",
    rating: 4,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title="Testimonials" 
          breadcrumb={[{ label: "Testimonials", href: "/testimonials" }]} 
        />
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Client Reviews"
              title="What People Say About Us"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100">
                  <Quote className="absolute top-8 right-8 text-[var(--secondary)]/20" size={64} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonial.rating ? "text-[var(--accent)] fill-[var(--accent)]" : "text-slate-300"} 
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 relative z-10 leading-relaxed text-lg italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--dark)]">{testimonial.name}</h4>
                      <p className="text-sm text-[var(--primary)]">{testimonial.role}</p>
                    </div>
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { CheckCircle2, Target, Eye, Users, Shield, Clock, Wrench, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="About OsumFix"
          breadcrumb={[{ label: "About Us", href: "/about" }]}
        />

        {/* Who We Are Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle
                  subtitle="Who We Are"
                  title="Dubai's Most Trusted Technical Services Provider"
                  description="At OsumFix Technical Services LLC, we are committed to delivering top-tier maintenance, installation, and repair services to residential, commercial, and industrial properties across Dubai."
                />
                <p className="text-slate-600 mb-6 leading-relaxed">
                  With a deep understanding of the unique climate and structural requirements in the UAE, our team of certified professionals ensures that every job is done right the first time. From emergency plumbing and electrical faults to comprehensive annual maintenance contracts, we are the one-stop solution for all your technical needs.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="text-4xl font-black text-[var(--primary)] mb-2">500+</h4>
                    <p className="text-slate-600 font-medium">Projects Completed</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="text-4xl font-black text-[var(--primary)] mb-2">100%</h4>
                    <p className="text-slate-600 font-medium">Client Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -z-10 transform rotate-3"></div>
                <div className="space-y-4 pt-10">
                  <div className="bg-slate-200 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" alt="Technician working" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-200 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop" alt="Electrician at work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionTitle
                subtitle="Our Philosophy"
                title="Driven by Excellence"
                description="Our core principles guide every project we undertake, ensuring maximum value for our clients."
                centered
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] transition-colors">
                  <Target size={40} className="text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark)] mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">To provide prompt, professional, and reliable technical services that enhance the safety, comfort, and value of our clients' properties across the UAE.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-20 h-20 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8 group-hover:bg-[var(--secondary)] transition-colors">
                  <Eye size={40} className="text-[var(--secondary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark)] mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">To be the leading technical services company in the Middle East, recognized for our exceptional quality, continuous innovation, and customer-centric approach.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:bg-[var(--accent)] transition-colors">
                  <Users size={40} className="text-[var(--accent)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark)] mb-4">Core Values</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-[var(--primary)]" /> Integrity & Transparency</li>
                  <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-[var(--primary)]" /> Excellence in Execution</li>
                  <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-[var(--primary)]" /> Customer Satisfaction</li>
                  <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={20} className="text-[var(--primary)]" /> Safety First Approach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] rounded-3xl transform -rotate-3 -z-10 opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop" alt="Why Choose Us" className="w-full h-[600px] object-cover rounded-3xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <SectionTitle
                  subtitle="Our Advantages"
                  title="Why OsumFix Stands Out"
                  description="We don't just fix problems; we provide lasting solutions. Here is why hundreds of clients in Dubai choose us for their property maintenance."
                />

                <div className="space-y-8 mt-10">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary)] shrink-0">
                      <Shield size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">Licensed & Insured</h4>
                      <p className="text-slate-600">Fully compliant with UAE regulations. Our team operates with complete safety protocols and insurance coverage.</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary)] shrink-0">
                      <Clock size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">24/7 Availability</h4>
                      <p className="text-slate-600">Emergencies don't wait for business hours. We offer round-the-clock emergency response for critical failures.</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary)] shrink-0">
                      <Wrench size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">Expert Technicians</h4>
                      <p className="text-slate-600">Our engineers and technicians undergo rigorous training and hold extensive experience in their respective fields.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--primary)]"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Premium Service?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied property owners in Dubai. Let OsumFix handle your technical maintenance with unmatched professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg"
              >
                Contact Us Today
              </Link>
              <a
                href="tel:+971501234567"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={20} /> Call +971 50 123 4567
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

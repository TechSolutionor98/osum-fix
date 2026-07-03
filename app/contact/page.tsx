"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title="Contact Us" 
          breadcrumb={[{ label: "Contact", href: "/contact" }]} 
        />
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <SectionTitle 
                  subtitle="Get In Touch"
                  title="We're Here to Help"
                  description="Have a question or need emergency assistance? Contact our team anytime."
                />
                
                <div className="space-y-8 mt-10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--primary)] shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">Office Address</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Office 405, Business Bay,<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--primary)] shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">Phone</h4>
                      <p className="text-slate-600 mb-1">+971 50 123 4567</p>
                      <p className="text-sm text-slate-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--primary)] shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">Email</h4>
                      <p className="text-slate-600">info@osumfix.ae</p>
                      <p className="text-slate-600">support@osumfix.ae</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-[var(--dark)] mb-6">Send Us a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white" 
                        placeholder="+971 50 000 0000"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white">
                        <option value="">Select a service</option>
                        <option value="electrical">Electrical</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="hvac">HVAC Maintenance</option>
                        <option value="painting">Painting</option>
                        <option value="handyman">Handyman</option>
                        <option value="amc">Annual Maintenance Contract (AMC)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Property Location (Dubai)</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white" 
                        placeholder="e.g., Jumeirah, Business Bay"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white" 
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-20 w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                <MapPin size={48} className="mb-4 text-slate-300" />
                <span className="font-medium">Google Map Integration Placeholder</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

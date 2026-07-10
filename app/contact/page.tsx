"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceRequired: "",
    propertyLocation: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [hasActiveAppointments, setHasActiveAppointments] = useState(false);

  useEffect(() => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => {
        const activeLinks = (data?.links || []).filter((l: any) => l.active !== false);
        if (activeLinks.length > 0) {
          setHasActiveAppointments(true);
        }
      })
      .catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    try {
      const res = await fetch("/api/contact-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
      
      setSubmitted(true);
      setFormData({ name: "", phone: "", serviceRequired: "", propertyLocation: "", email: "", message: "" });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                        office NO4-173 Al Khabeesi Building,<br />
                        Deira Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--primary)] shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">Phone</h4>
                      <p className="text-slate-600 mb-1">055 1519540 / 056 7910188</p>
                      <p className="text-sm text-slate-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--primary)] shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">Email</h4>
                      <p className="text-slate-600">work@osumfix.com</p>
                     
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-[var(--dark)] mb-6">Send Us a Message</h3>
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-[var(--dark)]">Message Sent!</h4>
                    <p className="text-slate-600">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {errorMsg && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm">{errorMsg}</div>}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white"
                          placeholder="+971 50 000 0000"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                        <select 
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="ac-work">AC Work</option>
                          <option value="electrical-work">Electrical Work</option>
                          <option value="plumbing-work">Plumbing Work</option>
                          <option value="painting-work">Painting Work</option>
                          <option value="masonry-work">Masonry Work</option>
                          <option value="carpentry-work">Carpentry Work</option>
                          <option value="steel-fixing">Steel Fixing</option>
                          <option value="interior-designing">Interior Designing</option>
                          <option value="ceiling-gypsum">Ceiling & Gypsum</option>
                          <option value="handyman-services">Handyman Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Property Location (Dubai)</label>
                        <input
                          type="text"
                          value={formData.propertyLocation}
                          onChange={(e) => setFormData({...formData, propertyLocation: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white"
                          placeholder="e.g., Jumeirah, Business Bay"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all bg-white resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Appointments CTA */}
            {hasActiveAppointments && (
              <div className="mt-24 max-w-4xl mx-auto text-center bg-white p-12 sm:p-14 rounded-[2rem] border border-slate-100 shadow-[0_2px_40px_rgba(0,0,0,0.02)]">
                <h3 className="text-[28px] sm:text-3xl font-bold text-[#111827] mb-3">Prefer to Schedule a Visit?</h3>
                <p className="text-slate-500 mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                  Explore our available appointment options and directly book a technician for a time that suits you best.
                </p>
                <a 
                  href="/appointments" 
                  className="inline-flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-[#0f172a] text-white px-8 py-3.5 rounded-xl font-medium transition-colors"
                >
                  View Appointment Links
                  <ArrowRight size={18} />
                </a>
              </div>
            )}

            {/* Map */}
            <div className="mt-24 w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-inner">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=Al%20Khabeesi%20Building%20Deira%20Dubai%20UAE&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

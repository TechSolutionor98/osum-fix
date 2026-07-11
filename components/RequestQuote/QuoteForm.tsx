"use client";

import { useState } from "react";
import { Send, CheckCircle, Star } from "lucide-react";

export default function QuoteForm({ address, setAddress }: { address?: string, setAddress?: (val: string) => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "AC Work", "Electrical Work", "Plumbing Work", "Painting Work", 
    "Masonry Work", "Carpentry Work", "Steel Fixing", 
    "Interior Designing", "Ceiling & Gypsum", "Handyman Services"
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select a service required.");
      return;
    }
    
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: selectedService,
      location: address || "",
      propertyType: formData.get("propertyType") as string,
      details: formData.get("details") as string,
    };

    try {
      const res = await fetch("/api/quote-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setSelectedService("");
        if (setAddress) setAddress("");
      } else {
        alert("Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-slate-100 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-500 w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-[var(--dark)] mb-4">Request Sent Successfully!</h3>
        <p className="text-slate-600 mb-8">
          Thank you for requesting a quote. Our team will get back to you within 60 minutes during business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-50 pointer-events-none -mr-32 -mt-32"></div>

      <div className="mb-10 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] mb-4 tracking-tight">Free Home Maintenance & Repair Estimate</h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Get your free*, no-obligation maintenance or repair service estimate today. Whether it’s AC servicing, plumbing, electrical work, or handyman tasks, our Dubai-based team provides transparent, reliable pricing with no hidden costs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
        
        {/* Personal Details Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--primary)] border-b border-slate-100 pb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] flex items-center justify-center text-sm">1</span> 
            Your Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
              <input type="text" name="firstName" required className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Enter your first name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
              <input type="text" name="lastName" required className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Enter your last name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
              <input type="email" name="email" required className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Enter your email address" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
              <input type="tel" name="phone" required className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Enter your phone number" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Service Location (Dubai Community) *</label>
              <input 
                type="text" 
                required 
                name="location"
                value={address || ""}
                onChange={(e) => setAddress && setAddress(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white" 
                placeholder="Type your area or select from the map" 
              />
            </div>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--primary)] border-b border-slate-100 pb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] flex items-center justify-center text-sm">2</span> 
            Service Requirements
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-4">What service do you require? *</label>
            <div className="flex flex-wrap gap-3">
              {services.map((srv) => (
                <button
                  key={srv}
                  type="button"
                  onClick={() => setSelectedService(srv)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all border ${
                    selectedService === srv 
                    ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-md" 
                    : "bg-white border-slate-200 text-slate-600 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  }`}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Property Type *</label>
              <select name="propertyType" required className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-700">
                <option value="">Select property type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa / Townhouse</option>
                <option value="office">Office</option>
                <option value="commercial">Commercial Building</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Any details to share? *</label>
              <textarea name="details" required rows={4} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Please describe the issue or project in detail..."></textarea>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <button disabled={isSubmitting} type="submit" className="w-full bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-8 py-4.5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
            {isSubmitting ? "Submitting..." : <><Send size={20} /> Request Your Free Quote</>}
          </button>
          
          <div className="text-center mt-6 space-y-3">
            <p className="text-green-600 font-medium text-sm">
              Our team will get back to you within 60 minutes during business hours.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-3xl mx-auto">
              *Free estimates are available for many jobs. In some cases, a site visit may be needed to assess the work properly, and this will incur a fee. If you proceed with the job, that fee will be deducted from the final cost.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

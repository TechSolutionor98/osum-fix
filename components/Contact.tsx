"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-red-600 font-bold tracking-widest uppercase text-sm block mb-3">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-tight">
                Connect with our Engineers
              </h2>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                Whether you need a custom solar microgrid layout or a standard residential PV package, our consulting engineers are ready to support your setup.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest">Global HQ</h4>
                  <p className="text-sm text-gray-600 mt-1">Stadthausbrücke 8, 20355 Hamburg, Germany</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest">Call Center</h4>
                  <p className="text-sm text-gray-600 mt-1">+49 (0) 40 1234-5678</p>
                  <p className="text-xs text-gray-400 mt-0.5">Mon - Fri: 8:00 AM - 6:00 PM CET</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest">Support Desk</h4>
                  <p className="text-sm text-gray-600 mt-1">support@voltariaglobal.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 w-full bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center scale-110 animate-bounce">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-950 uppercase tracking-wide">
                  Message Transmitted!
                </h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  Thank you for connecting. A representative from our project engineering desk will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-gray-950 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all text-black font-medium"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-950 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all text-black font-medium"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-950 uppercase tracking-widest">
                    Project Type / Interest
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all text-black font-medium appearance-none"
                  >
                    <option>Residential Installation</option>
                    <option>Commercial Grid Solutions</option>
                    <option>Battery Storage & Storage Vaults</option>
                    <option>Other Corporate Inquiry</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-gray-950 uppercase tracking-widest">
                    Detailed Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Provide details about your average energy consumption, property size, or custom microgrid requirements..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all text-black font-medium resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-red-700 active:scale-[0.99] transition-all shadow-md hover:shadow-lg text-sm"
                >
                  Transmit Request
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

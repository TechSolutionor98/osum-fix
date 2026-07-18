"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle, ArrowLeft, ArrowRight, User, Mail, Phone, MapPin, Building, MessageSquare, AlertCircle, ChevronDown, Map, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface QuoteFormProps {
  onStepChange?: (step: number) => void;
}

export default function QuoteForm({ onStepChange }: QuoteFormProps = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");
  const [customPropertyType, setCustomPropertyType] = useState("");
  const [phoneType, setPhoneType] = useState("mobile"); // "mobile" or "landline"
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (8:00 AM - 12:00 PM)");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    emirate: "Dubai",
    propertyType: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Notify parent of step changes for animation
  useEffect(() => {
    onStepChange?.(currentStep);
  }, [currentStep, onStepChange]);

  const services = [
    "AC Work", "Electrical Work", "Plumbing Work", "Painting Work", 
    "Masonry Work", "Carpentry Work", "Steel Fixing", 
    "Interior Designing", "Ceiling & Gypsum", "Handyman Services",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg(null); // Clear error on edit
  };

  const handleNext = async () => {
    setErrorMsg(null);
    if (currentStep === 1) {
      if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
        setErrorMsg("Please fill in all personal details.");
        return;
      }
      if (!formData.email.includes("@")) {
        setErrorMsg("Please enter a valid email address.");
        return;
      }
      
      // Enforce UAE phone/landline rules
      if (phoneType === "mobile") {
        if (phoneNumber.length !== 10) {
          setErrorMsg("Mobile number must be exactly 10 digits (e.g. 0501234567).");
          return;
        }
        if (!phoneNumber.startsWith("05")) {
          setErrorMsg("Mobile number must start with '05' (e.g. 050, 052, 054, 055, 056, 058).");
          return;
        }
      } else {
        if (phoneNumber.length !== 9) {
          setErrorMsg("Landline number must be exactly 9 digits (e.g. 041234567).");
          return;
        }
        if (!phoneNumber.startsWith("0")) {
          setErrorMsg("Landline number must start with '0' followed by the area code (e.g. 04 for Dubai, 02 for Abu Dhabi).");
          return;
        }
      }

      // Capture Lead Data as a Contact Submission
      setIsSubmitting(true);
      try {
        const formattedPhone = phoneNumber.startsWith("0") 
          ? `+971 ${phoneNumber.slice(1)}` 
          : `+971 ${phoneNumber}`;
        
        await fetch("/api/contact-submissions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formattedPhone,
            message: "Partial Quote Request (Lead Capture from Step 1)",
            serviceRequired: "Pending completion",
            propertyLocation: "Pending completion"
          }),
        });
      } catch (err) {
        console.error("Failed to capture lead", err);
      } finally {
        setIsSubmitting(false);
      }

      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedService) {
        setErrorMsg("Please select a service.");
        return;
      }
      if (selectedService === "Other" && !customService.trim()) {
        setErrorMsg("Please specify the service you require.");
        return;
      }
      if (!formData.location.trim()) {
        setErrorMsg("Please specify your service location.");
        return;
      }
      if (!formData.emirate) {
        setErrorMsg("Please select your Emirate.");
        return;
      }
      if (!formData.propertyType) {
        setErrorMsg("Please select your property type.");
        return;
      }
      if (formData.propertyType === "other" && !customPropertyType.trim()) {
        setErrorMsg("Please specify your property type.");
        return;
      }
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setErrorMsg(null);
    if (currentStep > 2) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!preferredDate) {
      setErrorMsg("Please select a preferred date.");
      return;
    }
    if (!preferredTime) {
      setErrorMsg("Please select a preferred time slot.");
      return;
    }
    if (!formData.details.trim()) {
      setErrorMsg("Please add some details about your requirements.");
      return;
    }

    // Format phone to standard +971 format
    const formattedPhone = phoneNumber.startsWith("0") 
      ? `+971 ${phoneNumber.slice(1)}` 
      : `+971 ${phoneNumber}`;

    const formattedDetails = `[Date: ${preferredDate} | Time: ${preferredTime}]\n\n${formData.details.trim()}`;

    setIsSubmitting(true);
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formattedPhone,
      service: selectedService === "Other" ? customService.trim() : selectedService,
      location: `${formData.location.trim()}, ${formData.emirate}`,
      propertyType: formData.propertyType === "other" ? customPropertyType.trim() : formData.propertyType,
      details: formattedDetails,
    };

    try {
      const res = await fetch("/api/quote-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          location: "",
          emirate: "Dubai",
          propertyType: "",
          details: ""
        });
        setPhoneType("mobile");
        setPhoneNumber("");
        setSelectedService("");
        setCustomService("");
        setCustomPropertyType("");
        setPreferredDate("");
        setPreferredTime("Morning (8:00 AM - 12:00 PM)");
        setCurrentStep(1);
      } else {
        setErrorMsg("Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center max-w-2xl mx-auto py-8">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-500 w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-[var(--dark)] mb-4">Request Sent Successfully!</h3>
        <p className="text-slate-600 mb-8">
          Thank you for requesting a quote. Our team will get back to you within 60 minutes during business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-[#e36704] hover:bg-[#c25602] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {/* Form wrapper */}
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        
        {/* STEP 1: Personal Details */}
        {currentStep === 1 && (
          <div className="space-y-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] mb-0.5 tracking-tight flex items-center gap-3">
                <User size={28} className="text-[#e36704]" />
                Your Contact Details
              </h2>
              <p className="text-slate-400 text-xs">Please provide your contact details so we can get in touch with you.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-0.5">First Name *</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e36704] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-800" 
                  placeholder="Enter your first name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-0.5">Last Name *</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e36704] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-800" 
                  placeholder="Enter your last name" 
                />
              </div>
              <div>
                <div className="h-8 flex items-center mb-0.5">
                  <label className="block text-sm font-medium text-slate-700">Email Address *</label>
                </div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e36704] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-800 text-sm font-semibold" 
                  placeholder="Enter your email address" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Phone Number *</label>
                
                {/* Premium Segmented Control Centered */}
                <div className="flex justify-center mb-4">
                  <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-semibold w-full max-w-[320px]">
                    <button
                      type="button"
                      onClick={() => {
                        setPhoneType("mobile");
                        setPhoneNumber("");
                      }}
                      className={`flex-1 py-2 rounded-lg transition-all cursor-pointer text-center ${
                        phoneType === "mobile" 
                          ? "bg-[#e36704] text-white shadow-md font-bold" 
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Mobile (10d)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPhoneType("landline");
                        setPhoneNumber("");
                      }}
                      className={`flex-1 py-2 rounded-lg transition-all cursor-pointer text-center ${
                        phoneType === "landline" 
                          ? "bg-[#e36704] text-white shadow-md font-bold" 
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Landline (9d)
                    </button>
                  </div>
                </div>

                <div className="flex items-stretch rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[#e36704] focus-within:border-transparent focus-within:bg-white overflow-hidden transition-all">
                  <div className="px-4 bg-slate-100/70 border-r border-slate-200 text-slate-500 font-bold text-sm select-none flex items-center justify-center">
                    +971
                  </div>
                  <input 
                    type="tel" 
                    required 
                    maxLength={phoneType === "mobile" ? 10 : 9}
                    value={phoneNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setPhoneNumber(val);
                    }}
                    className="flex-grow px-4 py-2 focus:outline-none text-slate-800 font-semibold tracking-wider text-sm bg-transparent" 
                    placeholder={phoneType === "mobile" ? "0501234567" : "041234567"} 
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Service & Location */}
        {currentStep === 2 && (
          <div className="space-y-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] mb-0.5 tracking-tight flex items-center gap-3">
                <MapPin size={28} className="text-[#e36704]" />
                Service Requirements & Location
              </h2>
              <p className="text-slate-400 text-xs">Select your service, choose the location and property type.</p>
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">What service do you require? *</label>
              <div className="flex flex-wrap gap-2.5">
                {services.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => {
                      setSelectedService(srv);
                      setErrorMsg(null);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                      selectedService === srv 
                      ? "bg-[#e36704] border-[#e36704] text-white shadow-md" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-[#e36704] hover:text-[#e36704]"
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>

              {/* Custom specify input for 'Other' option */}
              {selectedService === "Other" && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3"
                >
                  <label className="block text-xs font-semibold text-slate-500 mb-0.5.5">Specify Service *</label>
                  <input 
                    type="text" 
                    required 
                    value={customService}
                    onChange={(e) => {
                      setCustomService(e.target.value);
                      setErrorMsg(null);
                    }}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e36704] focus:border-transparent bg-slate-50 focus:bg-white text-slate-800 text-sm font-semibold" 
                    placeholder="Enter the service type" 
                  />
                </motion.div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-0.5">Emirate (State) *</label>
                <div className="relative flex items-center">
                  <Map size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
                  <select 
                    name="emirate" 
                    value={formData.emirate}
                    onChange={handleChange}
                    required 
                    className="w-full pl-11 pr-10 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e36704] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-700 font-semibold appearance-none cursor-pointer text-sm"
                  >
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Umm Al Quwain">Umm Al Quwain</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    <option value="Fujairah">Fujairah</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-0.5">Service Location (Community / Area) *</label>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[#e36704] focus-within:border-transparent focus-within:bg-white overflow-hidden transition-all">
                  <MapPin size={18} className="text-slate-400 ml-4 shrink-0" />
                  <input 
                    type="text" 
                    required 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    autoComplete="off"
                    className="w-full px-3 py-2 focus:outline-none text-slate-800 bg-transparent text-sm font-semibold" 
                    placeholder="Enter Your  (Community / Area).." 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-0.5">Property Type *</label>
                <div className="relative flex items-center">
                  <Building size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
                  <select 
                    name="propertyType" 
                    value={formData.propertyType}
                    onChange={handleChange}
                    required 
                    className="w-full pl-11 pr-10 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e36704] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-700 font-semibold appearance-none cursor-pointer text-sm"
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa / Townhouse</option>
                    <option value="office">Office</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 text-slate-400 pointer-events-none" />
                </div>

                {/* Custom specify input for 'Other' Property Type */}
                {formData.propertyType === "other" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3"
                  >
                    <label className="block text-xs font-semibold text-slate-500 mb-0.5.5">Specify Property Type *</label>
                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[#e36704] focus-within:border-transparent focus-within:bg-white overflow-hidden transition-all">
                      <Building size={16} className="text-slate-400 ml-4 shrink-0" />
                      <input 
                        type="text" 
                        required 
                        value={customPropertyType}
                        onChange={(e) => {
                          setCustomPropertyType(e.target.value);
                          setErrorMsg(null);
                        }}
                        className="w-full px-3 py-2 focus:outline-none text-slate-800 bg-transparent text-sm font-semibold" 
                        placeholder="e.g. Warehouse, Penthouse, Retail Shop" 
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Details & Submit */}
        {currentStep === 3 && (
          <div className="space-y-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] mb-0.5 tracking-tight flex items-center gap-3">
                <MessageSquare size={28} className="text-[#e36704]" />
                Appointment Schedule & Details
              </h2>
              <p className="text-slate-400 text-xs">Choose your preferred date, time slot, and explain the requirements in detail.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-0.5">Preferred Date *</label>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[#e36704] focus-within:border-transparent focus-within:bg-white overflow-hidden transition-all">
                  <Calendar size={18} className="text-slate-400 ml-4 shrink-0 pointer-events-none" />
                  <input 
                    type="date" 
                    required 
                    min={new Date().toISOString().split("T")[0]}
                    value={preferredDate}
                    onChange={(e) => {
                      setPreferredDate(e.target.value);
                      setErrorMsg(null);
                    }}
                    className="w-full px-3 py-2 focus:outline-none text-slate-800 bg-transparent text-sm font-semibold cursor-pointer"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-0.5">Preferred Time Slot *</label>
                <div className="relative flex items-center">
                  <Clock size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
                  <select 
                    required 
                    value={preferredTime}
                    onChange={(e) => {
                      setPreferredTime(e.target.value);
                      setErrorMsg(null);
                    }}
                    className="w-full pl-11 pr-10 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e36704] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-700 font-semibold appearance-none cursor-pointer text-sm"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    <option value="Any Time (8:00 AM - 8:00 PM)">Any Time (8:00 AM - 8:00 PM)</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-0.5">Describe Your Requirements *</label>
              <textarea 
                name="details" 
                value={formData.details}
                onChange={handleChange}
                required 
                rows={5} 
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e36704] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-800" 
                placeholder="Describe the issue, work scope, or any other preferences in detail..."
              ></textarea>
            </div>
          </div>
        )}

        {/* Error Message Notification Banner */}
        {errorMsg && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-3 text-xs font-semibold shadow-sm mt-4"
          >
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div className="flex-grow">
              {errorMsg}
            </div>
            <button 
              type="button" 
              onClick={() => setErrorMsg(null)}
              className="text-red-400 hover:text-red-700 shrink-0 font-bold text-sm cursor-pointer"
            >
              &times;
            </button>
          </motion.div>
        )}

        {/* Step Control Buttons */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-3 relative">
          {currentStep > 2 && (
            <button
              type="button"
              onClick={handleBack}
              className="absolute left-0 flex items-center gap-2 px-5 py-3 border border-slate-300 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50 transition cursor-pointer"
            >
              <ArrowLeft size={16} /> Back
            </button>
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleNext}
              className="flex items-center justify-center gap-2 bg-[#e36704] hover:bg-[#c25602] text-white px-12 py-3.5 rounded-xl font-bold text-[15px] transition-all shadow-md mx-auto cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto min-w-[200px]"
            >
              {isSubmitting ? "Submitting..." : currentStep === 1 ? "Submit" : "Continue"} <ArrowRight size={18} />
            </button>
          ) : (
            <button 
              disabled={isSubmitting} 
              type="submit" 
              className="flex items-center justify-center gap-2 bg-[#e36704] hover:bg-[#c25602] text-white px-12 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl mx-auto disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer w-full sm:w-auto min-w-[200px]"
            >
              {isSubmitting ? "Submitting..." : <><Send size={18} /> Submit Request</>}
            </button>
          )}
        </div>
        

      </form>
    </div>
  );
}

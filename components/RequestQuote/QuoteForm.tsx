"use client";

import { useState } from "react";
import { Send, CheckCircle, ArrowLeft, ArrowRight, User, Mail, Phone, MapPin, Building, MessageSquare, AlertCircle, ChevronDown, Map, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteForm() {
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

  const handleNext = () => {
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
    if (currentStep > 1) {
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
      <div className="absolute  top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-50 pointer-events-none -mr-32 -mt-32"></div>

      <div className="mb-10 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] mb-4 tracking-tight">Request Quote</h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Free Home Maintenance & Repair Estimate. Get your free*, no-obligation maintenance or repair service estimate today.        </p>
      </div>

      {/* Step Indicator Progress Bar */}
      <div className="max-w-md mx-auto  mb-10 relative z-10">
        <div className="flex items-center justify-between relative">
          {/* Progress Line Behind Circles */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-[var(--primary)] transition-all duration-300 z-0"
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          ></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center  z-10">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
              currentStep > 1 
                ? "bg-green-500 text-white" 
                : currentStep === 1 
                  ? "bg-[var(--primary)] text-white ring-4 ring-blue-100" 
                  : "bg-slate-100 text-slate-400 border border-slate-200"
            }`}>
              {currentStep > 1 ? <CheckCircle size={16} /> : "1"}
            </div>
            <span className="text-xs font-semibold mt-2 text-slate-600 bg-white px-2">Details</span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center z-10">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
              currentStep > 2 
                ? "bg-green-500 text-white" 
                : currentStep === 2 
                  ? "bg-[var(--primary)] text-white ring-4 ring-blue-100" 
                  : "bg-slate-100 text-slate-400 border border-slate-200"
            }`}>
              {currentStep > 2 ? <CheckCircle size={16} /> : "2"}
            </div>
            <span className="text-xs font-semibold mt-2 text-slate-600 bg-white px-2">Service & Location</span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center z-10">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
              currentStep === 3 
                ? "bg-[var(--primary)] text-white ring-4 ring-blue-100" 
                : "bg-slate-100 text-slate-400 border border-slate-200"
            }`}>
              3
            </div>
            <span className="text-xs font-semibold mt-2 text-slate-600 bg-white px-2">Describe</span>
          </div>
        </div>
      </div>

      {/* Form wrapper */}
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        
        {/* STEP 1: Personal Details */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[var(--primary)] pb-2 flex items-center gap-2">
                <User size={20} className="text-[var(--secondary)]" />
                Your Contact Details
              </h3>
              <p className="text-slate-400 text-xs">Please provide your contact details so we can get in touch with you.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-800" 
                  placeholder="Enter your first name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-800" 
                  placeholder="Enter your last name" 
                />
              </div>
              <div>
                <div className="h-8 flex items-center mb-2">
                  <label className="block text-sm font-medium text-slate-700">Email Address *</label>
                </div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-800 text-sm font-semibold" 
                  placeholder="Enter your email address" 
                />
              </div>
              <div>
                <div className="h-8 flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-slate-700">Phone Number *</label>
                  
                  {/* Premium Segmented Control */}
                  <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px] font-semibold">
                    <button
                      type="button"
                      onClick={() => {
                        setPhoneType("mobile");
                        setPhoneNumber("");
                      }}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        phoneType === "mobile" 
                          ? "bg-white text-[var(--primary)] shadow-sm font-bold" 
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
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        phoneType === "landline" 
                          ? "bg-white text-[var(--primary)] shadow-sm font-bold" 
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Landline (9d)
                    </button>
                  </div>
                </div>

                <div className="flex items-stretch rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[var(--primary)] focus-within:border-transparent focus-within:bg-white overflow-hidden transition-all">
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
                    className="flex-grow px-4 py-3.5 focus:outline-none text-slate-800 font-semibold tracking-wider text-sm bg-transparent" 
                    placeholder={phoneType === "mobile" ? "0501234567" : "041234567"} 
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Service & Location */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[var(--primary)] pb-2 flex items-center gap-2">
                <MapPin size={20} className="text-[var(--secondary)]" />
                Service Requirements & Location
              </h3>
              <p className="text-slate-400 text-xs">Select your service, choose the location and property type.</p>
            </div>
            
            <div className="space-y-4">
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
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                      selectedService === srv 
                      ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-md" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-[var(--primary)] hover:text-[var(--primary)]"
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
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Specify Service *</label>
                  <input 
                    type="text" 
                    required 
                    value={customService}
                    onChange={(e) => {
                      setCustomService(e.target.value);
                      setErrorMsg(null);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-slate-50 focus:bg-white text-slate-800 text-sm font-semibold" 
                    placeholder="Enter the service type" 
                  />
                </motion.div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Emirate (State) *</label>
                <div className="relative flex items-center">
                  <Map size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
                  <select 
                    name="emirate" 
                    value={formData.emirate}
                    onChange={handleChange}
                    required 
                    className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-700 font-semibold appearance-none cursor-pointer text-sm"
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Location (Community / Area) *</label>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[var(--primary)] focus-within:border-transparent focus-within:bg-white overflow-hidden transition-all">
                  <MapPin size={18} className="text-slate-400 ml-4 shrink-0" />
                  <input 
                    type="text" 
                    required 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    autoComplete="off"
                    className="w-full px-3 py-3.5 focus:outline-none text-slate-800 bg-transparent text-sm font-semibold" 
                    placeholder="Enter Your  (Community / Area).." 
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Type *</label>
                <div className="relative flex items-center">
                  <Building size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
                  <select 
                    name="propertyType" 
                    value={formData.propertyType}
                    onChange={handleChange}
                    required 
                    className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-700 font-semibold appearance-none cursor-pointer text-sm"
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
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Specify Property Type *</label>
                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[var(--primary)] focus-within:border-transparent focus-within:bg-white overflow-hidden transition-all">
                      <Building size={16} className="text-slate-400 ml-4 shrink-0" />
                      <input 
                        type="text" 
                        required 
                        value={customPropertyType}
                        onChange={(e) => {
                          setCustomPropertyType(e.target.value);
                          setErrorMsg(null);
                        }}
                        className="w-full px-3 py-2.5 focus:outline-none text-slate-800 bg-transparent text-sm font-semibold" 
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
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[var(--primary)] pb-2 flex items-center gap-2">
                <MessageSquare size={20} className="text-[var(--secondary)]" />
                Appointment Schedule & Details
              </h3>
              <p className="text-slate-400 text-xs">Choose your preferred date, time slot, and explain the requirements in detail.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[var(--primary)] focus-within:border-transparent focus-within:bg-white overflow-hidden transition-all">
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
                    className="w-full px-3 py-3.5 focus:outline-none text-slate-800 bg-transparent text-sm font-semibold cursor-pointer"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time Slot *</label>
                <div className="relative flex items-center">
                  <Clock size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
                  <select 
                    required 
                    value={preferredTime}
                    onChange={(e) => {
                      setPreferredTime(e.target.value);
                      setErrorMsg(null);
                    }}
                    className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-700 font-semibold appearance-none cursor-pointer text-sm"
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
              <label className="block text-sm font-medium text-slate-700 mb-2">Describe Your Requirements *</label>
              <textarea 
                name="details" 
                value={formData.details}
                onChange={handleChange}
                required 
                rows={5} 
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-800" 
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
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50 transition cursor-pointer"
            >
              <ArrowLeft size={16} /> Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md ml-auto cursor-pointer"
            >
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button 
              disabled={isSubmitting} 
              type="submit" 
              className="flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl ml-auto disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : <><Send size={18} /> Request Your Free Quote</>}
            </button>
          )}
        </div>
        
        {/* Sub-note message */}
        <div className="text-center mt-6 space-y-3 pt-2 border-t border-slate-50">
          <p className="text-green-600 font-medium text-xs">
            Our team will get back to you within 60 minutes during business hours.
          </p>
          <p className="text-slate-400 text-[10px] leading-relaxed max-w-3xl mx-auto">
            *Free estimates are available for many jobs. In some cases, a site visit may be needed to assess the work properly, and this will incur a fee. If you proceed with the job, that fee will be deducted from the final cost.
          </p>
        </div>
      </form>
    </div>
  );
}

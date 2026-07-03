import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Clock, 
  Wrench, 
  Wind, 
  Zap,
  Droplets,
  Paintbrush,
  Palette,
  Hammer,
  Check, 
  AlertTriangle, 
  Layers, 
  Sparkles, 
  Layout, 
  Phone, 
  Calendar,
  ChevronDown
} from "lucide-react";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Format title from slug
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const formattedTitle = title.endsWith('Services') || title === 'Amc' ? title : `${title} Services`;

  const isAcWork = slug === "ac-work";

  if (isAcWork) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="AC Repair & Maintenance Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "AC Work", href: "/services/ac-work" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    AC Repair & Maintenance Services
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Professional AC Repair & Maintenance Services in Dubai & UAE
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Your air conditioning system works harder than almost any other appliance in the UAE climate. Without regular maintenance, dust buildup, clogged filters, low refrigerant levels, and worn-out components can reduce cooling performance, increase electricity bills, and shorten the life of your AC.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide reliable AC repair, maintenance, servicing, and installation solutions for homes, apartments, villas, offices, retail stores, and commercial properties. Our certified technicians use professional equipment and proven service procedures to keep your AC system running efficiently throughout the year.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Whether your AC is not cooling, making unusual noises, leaking water, or simply requires routine maintenance, our team is ready to help with fast response times and quality workmanship.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Wind size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Choosing the right AC maintenance company is essential for the long-term performance of your cooling system.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Experienced & Certified", desc: "Our skilled professionals have extensive experience servicing all major AC brands and cooling systems.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Fast Response Across Dubai", desc: "We understand how uncomfortable AC problems can be. We aim to provide quick appointments and efficient service.", icon: <Clock size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Honest & Transparent Pricing", desc: "No hidden charges. We explain the issue clearly and agree on the cost before starting any repair work.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Advanced Equipment", desc: "We use professional testing tools and modern servicing equipment to ensure accurate diagnosis and effective repairs.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "Quality Workmanship", desc: "Every service is completed with absolute attention to detail to maximize cooling performance and system reliability.", icon: <Sparkles className="text-white" />, gradient: "from-pink-500 to-rose-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: 14-Step Maintenance Process (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Method
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Complete AC Maintenance Service
                </h2>
                <p className="text-slate-500 mt-4">
                  Regular maintenance helps prevent unexpected breakdowns while improving cooling efficiency and reducing energy consumption.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Complete System Inspection", desc: "Our technicians inspect the indoor and outdoor units to identify any signs of wear, damage, or performance issues." },
                  { title: "Air Filter Cleaning", desc: "Dirty filters reduce airflow and cooling efficiency. We clean or replace filters whenever required." },
                  { title: "Cooling Performance Testing", desc: "We measure cooling output to ensure your AC is delivering optimal performance." },
                  { title: "Thermostat Inspection", desc: "We verify thermostat accuracy and proper temperature control." },
                  { title: "Evaporator Coil Cleaning", desc: "Cleaning the evaporator improves airflow and increases cooling efficiency." },
                  { title: "Condenser Inspection", desc: "Outdoor condenser units are checked for dirt, damage, and airflow restrictions." },
                  { title: "Drain Line Cleaning", desc: "Blocked drain lines often cause water leakage. We inspect and clean the drainage system thoroughly." },
                  { title: "Refrigerant Level Check", desc: "Low refrigerant can reduce cooling and damage the compressor. We inspect gas levels and recommend recharge if required." },
                  { title: "Electrical Safety Inspection", desc: "We inspect wiring, terminals, breakers, capacitors, and electrical connections for safety and reliability." },
                  { title: "Fan Motor Inspection", desc: "Both indoor and outdoor fan motors are tested for smooth operation." },
                  { title: "Airflow Testing", desc: "We ensure balanced airflow throughout your rooms for maximum comfort." },
                  { title: "Noise & Vibration Check", desc: "Any unusual sounds or vibrations are inspected to prevent future failures." },
                  { title: "Final Performance Testing", desc: "Before completing the job, we perform a complete operational test to ensure everything is functioning correctly." },
                  { title: "Service Report & Recommendations", desc: "Our technician explains the condition of your AC and recommends any future maintenance if needed." }
                ].map((step, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white text-sm font-bold flex items-center justify-center shrink-0 shadow-md">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--dark)] text-base mb-1">{step.title}</h4>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>



          {/* Section 5: Repairs & Sectors (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,187,226,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">Our Services</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    AC Repair Services We Provide
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our technicians are equipped to diagnose and repair almost every common AC problem on the spot.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "AC Not Cooling", "AC Water Leakage", "Gas Refilling", "Compressor Repair",
                    "Thermostat Repair", "Fan Motor Replacement", "Capacitor Replacement",
                    "PCB Repair", "Electrical Fault Repair", "Airflow Problems", "Strange Noise Repair",
                    "Emergency AC Repair", "AC Installation", "AC Relocation", "AC Duct Inspection"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial AC Solutions</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We provide complete AC services for all sectors across Dubai. No project is too small or too large.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {["Apartments", "Villas", "Offices", "Restaurants", "Retail Shops", "Warehouses", "Commercial Buildings", "Hotels", "Clinics", "Schools"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Bookings & Service Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Workflow
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Service Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { step: "1", title: "Book Appointment", desc: "Choose a convenient date and time." },
                  { step: "2", title: "Professional Inspection", desc: "Our technician performs a complete system diagnosis." },
                  { step: "3", title: "Detailed Explanation", desc: "We explain the issue and provide transparent pricing." },
                  { step: "4", title: "Repair & Maintenance", desc: "Our team completes the work using quality tools." },
                  { step: "5", title: "Final Testing", desc: "We thoroughly test your AC before leaving." },
                  { step: "6", title: "Customer Satisfaction", desc: "We ensure your cooling system is operating at its best." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-sm mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "How often should I service my AC?", a: "We recommend servicing every 4 to 6 months depending on usage and environment to prevent sudden breakdowns and maintain cooling efficiency." },
                  { q: "Do you provide emergency AC repair?", a: "Yes. Our team responds quickly to urgent AC repair requests across Dubai to ensure comfort in peak summer weather." },
                  { q: "Which AC brands do you repair?", a: "We service most major brands including split, ducted, cassette, central, package, and VRF/VRV systems." },
                  { q: "Do you provide gas refilling?", a: "Yes, we inspect the system first to identify the leak cause, repair it, and then refill the refrigerant gas to optimal pressure." },
                  { q: "Do you offer annual maintenance contracts (AMC)?", a: "Yes. We provide customized preventative AMC maintenance plans for both residential and commercial properties." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 8: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site AC technical services in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Need a quick repair or a consultation? Chat with our customer care representatives on WhatsApp for instant assistance.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "Electrical Work", slug: "electrical-work" },
                  { name: "Plumbing Work", slug: "plumbing-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Restore Your Cooling Performance?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your AC service today and experience reliable cooling, professional workmanship, and exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isElectricalWork = slug === "electrical-work";

  if (isElectricalWork) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="Electrical Repair & Installation Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "Electrical Work", href: "/services/electrical-work" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    PROFESSIONAL ELECTRICAL SERVICES IN DUBAI
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Reliable Electrical Repair, Installation & Maintenance Services
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Electrical systems are the backbone of every home and business. Whether it's a minor repair, a complete installation, or routine maintenance, electrical work should always be handled by experienced professionals to ensure safety, efficiency, and long-term reliability.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide professional electrical services across Dubai for residential and commercial properties. Our qualified electricians diagnose problems quickly, perform safe repairs, and deliver quality workmanship using industry-standard tools and high-quality materials.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    From faulty sockets and lighting installations to complete electrical troubleshooting, we ensure every job is completed safely, efficiently, and to the highest standards.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Zap size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Trusted Electrical Experts You Can Rely On
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Certified & Skilled Electricians", desc: "Our experienced technicians are trained to handle all types of residential and commercial electrical systems safely and professionally.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Fast Response Across Dubai", desc: "We understand electrical issues can happen anytime. Our team responds quickly to minimize downtime and inconvenience.", icon: <Clock size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Transparent Pricing", desc: "No hidden charges. We provide clear quotations before starting any work so you know the exact cost.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Safe & Professional Workmanship", desc: "Every repair and installation follows strict UAE safety standards for complete peace of mind.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "Quality Materials Only", desc: "We use reliable electrical components and trusted brands to ensure long-lasting performance and prevent safety hazards.", icon: <Sparkles size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: "Customer Satisfaction", desc: "Our goal is to deliver dependable service with quality you can trust, backed by our satisfaction guarantee.", icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Electrical Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Electrical Services
                </h2>
                <p className="text-slate-500 mt-4">
                  We provide complete electrical solutions for homes, villas, apartments, offices, restaurants, retail stores, warehouses, and commercial buildings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Electrical Repairs",
                    items: ["Power Failure Troubleshooting", "Circuit Breaker Repairs", "Electrical Fault Diagnosis", "Wiring Repairs", "Socket Repairs", "Switch Repairs"]
                  },
                  {
                    title: "Electrical Installations",
                    items: ["New Power Sockets", "Switch Installation", "Lighting & LED Upgrade", "Ceiling Lights & Chandeliers", "Outdoor Lighting", "Garden Lighting"]
                  },
                  {
                    title: "Electrical Maintenance",
                    items: ["Electrical Safety Inspection", "Wiring Inspection", "Distribution Board Inspection", "Load Testing", "Preventive Maintenance"]
                  },
                  {
                    title: "Additional Services",
                    items: ["Fan & Exhaust Fan Install", "Door Bell Installation", "Water Heater Connection", "Electrical Panel Upgrades", "Appliance Power Connection"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[var(--dark)] text-lg mb-6 pb-2 border-b border-slate-200">{cat.title}</h4>
                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-3 text-slate-700 text-sm font-medium items-start">
                          <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>



          {/* Section 5: Emergency & Sectors (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-amber-500 font-bold uppercase tracking-wider text-xs">Emergency Helpline 24/7</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Emergency Electrical Services
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Electrical emergencies require immediate attention. We respond quickly to restore safety and minimize disruption.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "Complete Power Failure", "Burning Smells", "Sparking Switches", "Tripping Breakers",
                    "Electrical Short Circuits", "Emergency Lighting Failure", "Faulty Distribution Boards",
                    "Loose Exposed Wires", "Voltage Fluctuation", "Water Leaked in Outlets"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-amber-500/20 hover:border-amber-500/40 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-200">
                      ⚠️ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial Electrical Services</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We proudly serve all commercial, retail, residential, and corporate sectors in Dubai:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {["Apartments", "Villas", "Townhouses", "Offices", "Restaurants & Cafes", "Retail Shops", "Warehouses", "Hotels", "Clinics", "Schools", "Commercial Buildings"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Bookings & Service Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Electrical Service Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {[
                  { step: "1", title: "Service Booking", desc: "Schedule your appointment at preferred time." },
                  { step: "2", title: "Complete Inspection", desc: "Detailed assessment of your electrical system." },
                  { step: "3", title: "Fault Diagnosis", desc: "Identify exact cause using testing equipment." },
                  { step: "4", title: "Transparent Quotation", desc: "Detailed work and pricing before repairs begin." },
                  { step: "5", title: "Safe Execution", desc: "Technicians complete the work safely using quality parts." },
                  { step: "6", title: "Safety Testing", desc: "Components are thoroughly tested before completion." },
                  { step: "7", title: "Final Quality Check", desc: "Everything is verified to work perfectly before leaving." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-xs sm:text-sm mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Do you provide emergency electrical services?", a: "Yes. Our team is equipped and ready to resolve urgent electrical repairs across Dubai at any time." },
                  { q: "Can you install new lighting fixtures?", a: "Yes. We install all kinds of indoor, outdoor, decorative, chandeliers, and energy-efficient LED lighting systems." },
                  { q: "Do you repair electrical wiring?", a: "Absolutely. We perform complete wiring diagnostics, fault finding, and safe repairs of damaged or overloaded wires." },
                  { q: "Can you replace switches and sockets?", a: "Yes. We replace broken, burnt, or faulty switches, power outlets, sockets, and distribution boxes." },
                  { q: "Do you provide electrical safety inspections?", a: "Yes. We inspect the wiring, load distribution, breakers, and safety terminals to verify code compliance and prevent failures." },
                  { q: "Do you work with residential and commercial properties?", a: "Yes. We provide complete electrical solutions for both homes, villas, apartments, and commercial facilities." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 8: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site Electrical technical services in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Need a quick repair or a consultation? Chat with our customer care representatives on WhatsApp for instant assistance.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "AC Work", slug: "ac-work" },
                  { name: "Plumbing Work", slug: "plumbing-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Safe-Power Your Home?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your electrical inspection or repair today. Enjoy safe, efficient, and professional technical services with OsumFix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isPlumbingWork = slug === "plumbing-work";

  if (isPlumbingWork) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="Plumbing Repair & Installation Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "Plumbing Work", href: "/services/plumbing-work" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    PROFESSIONAL PLUMBING SERVICES IN DUBAI
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Reliable Plumbing Repair, Installation & Maintenance Services
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    A properly functioning plumbing system is essential for the comfort, safety, and hygiene of every home and business. Even a small leak or blocked drain can quickly turn into a costly problem if not repaired on time.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide professional plumbing services across Dubai, delivering fast, reliable, and long-lasting solutions for residential and commercial properties. From emergency plumbing repairs to complete installations and routine maintenance, our experienced plumbers ensure every job is completed with precision and care.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Whether you're dealing with leaking pipes, clogged drains, water heater issues, or bathroom renovations, OsumFix is your trusted plumbing partner.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Droplets size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Trusted Plumbing Experts for Every Property
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Experienced & Skilled Plumbers", desc: "Our trained professionals have extensive experience handling all types of residential and commercial plumbing systems.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Fast Response Across Dubai", desc: "We understand that plumbing issues can't wait. Our team responds quickly to minimize damage and restore your water system.", icon: <Clock size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Honest & Transparent Pricing", desc: "No hidden charges. We provide clear quotations and explanations before starting any plumbing work.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Quality Materials & Spare Parts", desc: "We use durable plumbing materials and trusted brands to ensure reliable, long-lasting repairs and installations.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "Reliable Workmanship", desc: "Every repair and installation is completed according to professional standards with rigorous attention to detail.", icon: <Sparkles size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: "Customer Satisfaction Focus", desc: "Your comfort, property safety, and peace of mind are always our highest priorities.", icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Plumbing Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Divisions
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Plumbing Services
                </h2>
                <p className="text-slate-500 mt-4">
                  We provide complete plumbing solutions for homes, apartments, villas, offices, restaurants, hotels, and commercial properties.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Plumbing Repairs",
                    items: ["Water Leak Repair", "Pipe Leak Repair", "Burst Pipe Repair", "Tap & Faucet Repair", "Toilet & Flush Repair", "Shower & Valve Repair"]
                  },
                  {
                    title: "Drainage Services",
                    items: ["Drain Cleaning", "Blocked Drain Repair", "Kitchen Drain Unblock", "Bathroom Drain Clean", "Floor Drain Cleaning", "Sewer Line Inspection"]
                  },
                  {
                    title: "Water Heater Services",
                    items: ["Water Heater Installation", "Water Heater Repair", "Water Heater Replace", "Thermostat Replacement", "Heating Element Fix"]
                  },
                  {
                    title: "Plumbing Installs",
                    items: ["Bathroom Plumbing", "Kitchen Plumbing", "Sink & Toilet Install", "Wash Basin Fitting", "Shower Mixer Install", "Water Pump Installation"]
                  },
                  {
                    title: "Preventive Care",
                    items: ["Plumbing Inspection", "Leak Detection Scan", "Pipe Condition Check", "Water Pressure Testing", "Routine Maintenance"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[var(--dark)] text-base mb-6 pb-2 border-b border-slate-200">{cat.title}</h4>
                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-2.5 text-slate-700 text-xs sm:text-sm font-medium items-start">
                          <CheckCircle2 size={14} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>



          {/* Section 5: Emergency Support & Sectors (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">24/7 Emergency Support</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Emergency Plumbing Services
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Some plumbing issues require immediate attention to prevent structural flooding. Our emergency plumbers are ready to assist.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "Burst Pipes", "Major Water Leaks", "Overflowing Toilets", "Blocked Sewer Lines",
                    "Water Heater Failures", "Flooding Emergencies", "Sudden Water Supply Problems",
                    "Water Pump Failures", "Concealed Slab Leakage", "Drain Overflowing"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-sky-500/20 hover:border-sky-500/40 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-200">
                      💧 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial Plumbing Services</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We serve all kinds of properties and commercial establishments in Dubai:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {["Apartments", "Villas", "Townhouses", "Offices", "Restaurants & Cafes", "Retail Shops", "Warehouses", "Hotels", "Clinics", "Schools", "Commercial Buildings"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Bookings & Service Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Workflow
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Plumbing Service Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {[
                  { step: "1", title: "Schedule Booking", desc: "Book appointment through phone or WhatsApp." },
                  { step: "2", title: "System Inspection", desc: "Plumber performs inspection to find root cause." },
                  { step: "3", title: "Accurate Diagnosis", desc: "Locate leaks or blockages using specialized tools." },
                  { step: "4", title: "Transparent Quote", desc: "Receive upfront pricing before starting any work." },
                  { step: "5", title: "Safe Repair", desc: "Plumbers complete work efficiently using quality materials." },
                  { step: "6", title: "Performance Testing", desc: "Test the system to ensure everything operates correctly." },
                  { step: "7", title: "Final Quality Check", desc: "Verify plumbing is working safely and efficiently." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-xs sm:text-sm mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Do you provide emergency plumbing services?", a: "Yes. We offer fast-response emergency plumbing repairs across Dubai for burst pipes, flooding, or heater failures." },
                  { q: "Can you repair leaking pipes?", a: "Absolutely. We repair all types of leaks, including concealed slab leaks, ceiling leaks, and visible pipe damages." },
                  { q: "Do you install water heaters?", a: "Yes. We install, repair, replace, and service all major brands of residential and commercial water heaters." },
                  { q: "Can you unblock kitchen and bathroom drains?", a: "Yes. Our plumbers use professional unblocking machinery and pressure rods to clear clogged drains safely." },
                  { q: "Do you provide plumbing services for commercial properties?", a: "Yes. We service offices, restaurants, hotels, warehouses, clinics, retail shops, and commercial buildings." },
                  { q: "How often should plumbing systems be inspected?", a: "We recommend a professional plumbing inspection at least once a year to scan for silent leaks, blockages, and wear before they cause severe damage." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 8: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site plumbing services in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Need a quick repair or a consultation? Chat with our customer care representatives on WhatsApp for instant assistance.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "AC Work", slug: "ac-work" },
                  { name: "Electrical Work", slug: "electrical-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Restore Your Plumbing?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your plumbing service or scan leaks today. Enjoy professional, clean, and reliable technical services with OsumFix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isPaintingWork = slug === "painting-work";

  if (isPaintingWork) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="Painting Repair & Finishing Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "Painting Work", href: "/services/painting-work" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    PROFESSIONAL PAINTING SERVICES IN DUBAI
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Transform Your Home & Office with Expert Painting Solutions
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    A fresh coat of paint does more than improve appearance—it enhances your property's value, protects surfaces, and creates a clean, welcoming environment. Whether you're renovating your home, refreshing your office, or preparing a property for handover, professional painting makes all the difference.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide high-quality interior and exterior painting services across Dubai. Our experienced painters deliver smooth finishes, clean workmanship, and long-lasting results using premium paints and professional techniques.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    From a single room to complete villas, apartments, offices, and commercial buildings, we complete every project with precision, efficiency, and attention to detail.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Paintbrush size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Professional Painting You Can Trust
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Experienced Painting Professionals", desc: "Our skilled painters are trained to deliver clean, even finishes with attention to every detail.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Premium Quality Materials", desc: "We use high-quality paints and trusted brands to ensure vibrant colors, excellent coverage, and long-lasting durability.", icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Clean & Hassle-Free Service", desc: "We carefully protect your furniture, floors, doors, windows, and fixtures before painting and leave your space clean after completion.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Affordable & Transparent Pricing", desc: "Receive clear quotations with no hidden charges, whether it's a single room or a full property repaint.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "Timely Project Completion", desc: "We work efficiently to complete projects on schedule while maintaining the highest quality standards.", icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: "Customer Satisfaction Guaranteed", desc: "Our goal is to deliver results that exceed your expectations and give your property a fresh new look.", icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Painting Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Painting Services
                </h2>
                <p className="text-slate-500 mt-4">
                  We provide complete residential and commercial painting solutions, custom-suited for Dubai properties.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Interior Painting",
                    items: ["Living Rooms", "Bedrooms", "Kitchens & Bathrooms", "Hallways & Ceilings", "Feature Walls", "Accent Wall repaints"]
                  },
                  {
                    title: "Exterior Painting",
                    items: ["Villa Exterior Painting", "Building Exterior Painting", "Boundary Walls", "Balconies", "Boundary Fences", "Outdoor Structures"]
                  },
                  {
                    title: "Residential Painting",
                    items: ["Apartment Repainting", "Villa Painting Services", "Townhouse Repainting", "New Home Handover Prep", "Property Renovations"]
                  },
                  {
                    title: "Commercial Painting",
                    items: ["Corporate Offices", "Retail Shops & Outlets", "Restaurants & Cafes", "Hotels & Showrooms", "Warehouses & Clinics"]
                  },
                  {
                    title: "Decorative Finishes",
                    items: ["Accent Walls", "Texture Finishes", "Feature Wall Designs", "Custom Color Styling", "Staircases & Fences"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[var(--dark)] text-base mb-6 pb-2 border-b border-slate-200">{cat.title}</h4>
                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-2.5 text-slate-700 text-xs sm:text-sm font-medium items-start">
                          <CheckCircle2 size={14} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Painting Specialties We Offer (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">Services We Offer</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Painting Specialties & Surface Care
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our experienced painters handle projects of all sizes. Proper surface preparation, premium materials, and expert application ensure a finish that looks beautiful and lasts.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "Full Home Painting", "Apartment Painting", "Villa Painting", "Office Painting",
                    "Ceiling Painting", "Wall Repainting", "Interior Wall Painting", "Exterior Wall Painting",
                    "Door Painting", "Window Frame Painting", "Wooden Surface Painting", "Metal Surface Painting",
                    "Fence Painting", "Staircase Painting", "Touch-Up Painting", "Move-In / Move-Out Painting"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-indigo-500/20 hover:border-indigo-500/40 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-200">
                      🎨 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial Painting Solutions</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We proudly serve all commercial, retail, residential, and corporate sectors in Dubai:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {["Apartments", "Villas", "Townhouses", "Offices", "Restaurants & Cafes", "Retail Shops", "Warehouses", "Hotels", "Clinics", "Schools", "Commercial Buildings"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Painting Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Workflow
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Painting Service Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {[
                  { step: "1", title: "Site Inspection", desc: "We assess the project and recommend the best painting solution." },
                  { step: "2", title: "Surface Prep", desc: "Walls are cleaned, cracks repaired, and surfaces sanded smoothly." },
                  { step: "3", title: "Protection", desc: "Floors, furniture, doors, and fixtures are fully protected." },
                  { step: "4", title: "Primer Application", desc: "Primer is applied to improve paint adhesion and durability." },
                  { step: "5", title: "Painting", desc: "Multiple even coats are applied using professional tools." },
                  { step: "6", title: "Final Inspection", desc: "Every wall and painted surface is checked for a flawless result." },
                  { step: "7", title: "Clean-up & Handover", desc: "We remove all covers, clean up, and hand over a beautiful space." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-xs sm:text-sm mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Do you provide both interior and exterior painting?", a: "Yes. We offer complete interior and exterior painting services for residential and commercial properties." },
                  { q: "Can you help choose paint colors?", a: "Yes. Our team can recommend suitable colors and finishes based on your property's style and lighting." },
                  { q: "Do you provide paint, or should I purchase it?", a: "We can supply high-quality paints or work with the paint brand of your choice." },
                  { q: "How long does a painting project take?", a: "Project duration depends on the size and condition of the property. We always aim to complete work within the agreed timeline." },
                  { q: "Do you protect furniture and flooring before painting?", a: "Absolutely. We cover furniture, floors, doors, windows, and fixtures to keep your property clean and protected." },
                  { q: "Do you offer painting services for offices and commercial spaces?", a: "Yes. We handle projects of all sizes, from homes and apartments to offices, retail shops, hotels, and commercial buildings." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site painting services in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Need a quick repaint or a consultation? Chat with our customer care representatives on WhatsApp for instant assistance.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "AC Work", slug: "ac-work" },
                  { name: "Electrical Work", slug: "electrical-work" },
                  { name: "Plumbing Work", slug: "plumbing-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Transform Your Walls?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your painting consultation today. Enjoy smooth, clean, and reliable painting technical services with OsumFix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isMasonryWork = slug === "masonry-work";

  if (isMasonryWork) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="Masonry & Civil Works Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "Masonry Work", href: "/services/masonry-work" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    PROFESSIONAL MASONRY & CIVIL WORK SERVICES
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Reliable Masonry, Brickwork, Plastering & Tile Installation Services
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Strong construction starts with quality masonry work. Whether you're renovating a home, repairing damaged walls, installing new tiles, or building partition walls, professional workmanship is essential for long-lasting results.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide complete masonry and civil maintenance services across Dubai for residential and commercial properties. Our experienced masons deliver precise workmanship using quality materials to ensure every project is durable, safe, and finished to the highest standards.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    From minor repairs to complete renovation work, we help improve the strength, appearance, and value of your property.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Hammer size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Trusted Masonry & Civil Work Specialists
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Skilled & Experienced Masons", desc: "Our team has extensive experience handling all types of masonry repairs, plastering, tile work, and civil maintenance projects.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Quality Workmanship", desc: "We pay attention to every detail to ensure smooth finishes, accurate alignment, and long-lasting construction.", icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Premium Materials Only", desc: "We use quality cement, blocks, adhesives, grout, and finishing materials for durable and safe civil results.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Affordable & Transparent Pricing", desc: "Receive clear, upfront quotations with no hidden charges before any masonry or concrete work begins.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "On-Time Project Completion", desc: "We complete masonry and tile installations efficiently while maintaining the highest quality standards.", icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: "Customer Satisfaction", desc: "Every project is completed with extreme professionalism, reliability, and customer satisfaction in mind.", icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Masonry & Civil Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Masonry & Civil Work Services
                </h2>
                <p className="text-slate-500 mt-4">
                  We provide complete masonry solutions for homes, villas, apartments, offices, retail spaces, and commercial buildings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Brick & Block Work",
                    items: ["Brick Wall Construction", "Block Wall Installation", "Boundary Wall Construction", "Partition Wall Installation", "Wall Extensions"]
                  },
                  {
                    title: "Plastering Services",
                    items: ["Internal Wall Plastering", "External Wall Plastering", "Ceiling Plaster Repair", "Crack Filling & Wall Repair", "Surface Leveling"]
                  },
                  {
                    title: "Tile Install & Repair",
                    items: ["Floor Tile Installation", "Wall Tile Installation", "Tile Replacement", "Bathroom Tile Install", "Kitchen Tile Install", "Tile Grouting & Finishing"]
                  },
                  {
                    title: "Concrete Works",
                    items: ["Concrete Repair", "Floor Screeding", "Concrete Slab Repair", "Cement Construction", "Minor Civil Repairs"]
                  },
                  {
                    title: "Renovation Services",
                    items: ["Bathroom Renovation", "Kitchen Renovation", "Wall Alterations", "Door & Window Adjustments", "Structural Repair (Non-Major)"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[var(--dark)] text-base mb-6 pb-2 border-b border-slate-200">{cat.title}</h4>
                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-2.5 text-slate-700 text-xs sm:text-sm font-medium items-start">
                          <CheckCircle2 size={14} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Masonry Problems We Solve (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-amber-500 font-bold uppercase tracking-wider text-xs">Masonry Problems We Solve</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Civil Maintenance & Structural Repair
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Over time, walls, plaster, flooring, and concrete surfaces develop cracks and moisture damage. Our team regularly repairs and restores these issues efficiently.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "Cracked Walls", "Damaged Plaster", "Broken Floor Tiles", "Loose Tiles",
                    "Wall Surface Damage", "Water-Damaged Walls", "Uneven Floors", "Cement Cracks",
                    "Boundary Wall Damage", "Ceiling Cracks", "Tile Grout Damage", "Small Civil Repairs",
                    "Holes in Concrete", "Plaster Peeling", "Screed Leveling Issues", "Alteration Prep Work"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-amber-500/20 hover:border-amber-500/40 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-200">
                      🧱 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial Masonry Solutions</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We proudly serve all commercial, retail, residential, and corporate properties in Dubai:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {["Apartments", "Villas", "Townhouses", "Offices", "Restaurants & Cafes", "Retail Shops", "Warehouses", "Hotels", "Clinics", "Schools", "Commercial Buildings"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Masonry Service Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Masonry Service Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: "1", title: "Site Inspection", desc: "We assess the project and understand your detailed requirements." },
                  { step: "2", title: "Material Planning", desc: "We recommend suitable high-quality materials based on budget." },
                  { step: "3", title: "Surface Prep", desc: "Existing surfaces are cleaned, repaired, and leveled for base prep." },
                  { step: "4", title: "Execution", desc: "Skilled masons complete the brick, plaster, or tile work with precision." },
                  { step: "5", title: "Quality Check", desc: "We inspect every detail to ensure a clean, smooth, and durable finish." },
                  { step: "6", title: "Cleaning & Handover", desc: "The work area is cleaned thoroughly before final handover." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-xs sm:text-sm mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Do you provide wall repair services?", a: "Yes. We repair cracked, damaged, water-affected, and crumbling walls using professional repair methods and quality fillers." },
                  { q: "Can you install floor and wall tiles?", a: "Absolutely. We install, replace, and repair all types of ceramic, porcelain, marble, granite, and stone tiles." },
                  { q: "Do you provide plastering services?", a: "Yes. We offer complete internal and external plastering and wall leveling for residential and commercial properties." },
                  { q: "Can you build partition walls?", a: "Yes. We construct brick and block partition walls for room extensions, divisions, or shop separations." },
                  { q: "Do you handle small renovation projects?", a: "Yes. We provide bathroom renovations, kitchen modifications, wall alterations, screeding, and general civil maintenance." },
                  { q: "Do you work on commercial properties?", a: "Yes. We serve offices, retail shops, hotels, restaurants, warehouses, and commercial buildings across Dubai." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site civil maintenance services in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Need quick masonry repair or partition walls? Chat with our customer care representatives on WhatsApp for instant assistance.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "AC Work", slug: "ac-work" },
                  { name: "Electrical Work", slug: "electrical-work" },
                  { name: "Plumbing Work", slug: "plumbing-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Build or Repair Your Walls?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your masonry or civil work consultation today. Enjoy precise, reliable, and solid civil services with OsumFix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isCarpentryWork = slug === "carpentry-work";

  if (isCarpentryWork) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="Carpentry & Woodwork Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "Carpentry Work", href: "/services/carpentry-work" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    PROFESSIONAL CARPENTRY WORK SERVICES IN DUBAI
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Custom Carpentry, Woodwork & Interior Fit-Out Solutions
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Quality carpentry is more than just building furniture—it's about creating practical, stylish, and durable spaces that enhance your home or business. Whether you need custom cabinets, wardrobes, office furniture, wooden flooring, or complete interior woodwork, expert craftsmanship makes all the difference.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide professional carpentry services across Dubai for residential and commercial properties. Our experienced carpenters combine skilled workmanship with modern design to deliver customized woodwork solutions that match your space, style, and budget.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    From small repairs to complete fit-out projects, we ensure every detail is crafted with precision, using quality materials and professional finishing techniques.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Hammer size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Skilled Carpentry Professionals You Can Trust
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Experienced Craftsmen", desc: "Our carpenters have years of experience handling custom furniture, interior woodwork, renovations, and commercial fit-out projects.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Custom-Made Solutions", desc: "Every project is designed according to your space, measurements, style preferences, and functional requirements.", icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Premium Materials Only", desc: "We use high-quality wood, MDF, plywood, laminates, veneers, and durable hardware for long-lasting performance.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Transparent Pricing", desc: "Receive a detailed, upfront quotation with no hidden charges before any carpentry fabrication or repair begins.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "Timely Project Completion", desc: "We complete custom furniture fabrications and onsite installations efficiently within the agreed timeline.", icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: "Customer Satisfaction", desc: "We focus heavily on quality, meticulous attention to detail, and delivering carpentry results that exceed expectations.", icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Carpentry Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Carpentry Services
                </h2>
                <p className="text-slate-500 mt-4">
                  We provide complete residential and commercial carpentry solutions throughout Dubai.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Custom Furniture & Fit-Out",
                    items: ["Custom Wardrobes", "TV Wall Units & Stands", "Study Tables & Desks", "Storage Cabinets", "Shoe Cabinets & Shelving", "Bookshelves & Display Units"]
                  },
                  {
                    title: "Kitchen Carpentry",
                    items: ["Cabinet Installation", "Custom Kitchen Cabinets", "Smart Storage Solutions", "Cabinet Door Replacement", "Cabinet Repairs & Hinges"]
                  },
                  {
                    title: "Doors, Partitions & Panels",
                    items: ["Wooden Door Installation", "Door Frame Fitting", "Sliding Door Installation", "Wooden Partitions", "Wall Paneling & Cladding", "Decorative Wood Panels"]
                  },
                  {
                    title: "Flooring & Furniture Repairs",
                    items: ["Wooden Flooring Install", "Laminate & Vinyl Flooring", "Skirting Installation", "Wardrobe & Drawer Repair", "Door Realignment", "Hinge & Handle Replacement"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[var(--dark)] text-lg mb-6 pb-2 border-b border-slate-200">{cat.title}</h4>
                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-3 text-slate-700 text-sm font-medium items-start">
                          <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Carpentry Specialties (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-amber-500 font-bold uppercase tracking-wider text-xs">Custom Carpentry Solutions</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Custom Furniture Design & Fit-Out Specialties
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our team specializes in designing, fabricating, and restoring premium woodwork. We handle projects of all scales with detailed material planning and smooth finishes.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "Custom Furniture Design", "Wardrobe Installation", "Kitchen Cabinet Installation", "Wooden Door Installation",
                    "Office Furniture Setup", "TV Wall Units", "Shelving Systems", "Storage Solutions",
                    "Wooden Flooring", "Wall Paneling", "Wooden Partitions", "Reception Counters",
                    "Display Units", "Shop Fit-Out", "Office Renovation", "Furniture Repair & Restoration"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-amber-500/20 hover:border-amber-500/40 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-200">
                      🪚 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial Carpentry</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We serve all corporate, retail, residential, and educational sectors across Dubai:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {["Apartments", "Villas", "Townhouses", "Offices", "Restaurants & Cafes", "Retail Shops", "Warehouses", "Hotels", "Clinics", "Schools", "Commercial Buildings"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Carpentry Service Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Workflow
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Carpentry Service Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: "1", title: "Consultation & Visit", desc: "We visit your property to understand requirements and take measurements." },
                  { step: "2", title: "Design & Planning", desc: "Discuss layouts, materials, colors, and functionalities for the best option." },
                  { step: "3", title: "Quotation & Approval", desc: "Receive a transparent and detailed quote before fabrications begin." },
                  { step: "4", title: "Fabrication & Install", desc: "Skilled carpenters manufacture and install every component with precision." },
                  { step: "5", title: "Final Inspection", desc: "Carefully inspect every detail to ensure quality and flawless finish." },
                  { step: "6", title: "Clean-Up & Handover", desc: "Area is cleaned and project handed over after your final approval." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-xs sm:text-sm mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Do you build custom furniture?", a: "Yes. We design and build custom wardrobes, TV units, study tables, kitchen cabinets, and corporate display units according to your sizing, layout, material, and finishing preferences." },
                  { q: "Do you install kitchen cabinets?", a: "Absolutely. We provide complete cabinet layouts, customized installation, shelf additions, door replacement, and hinge realignments." },
                  { q: "Can you repair damaged furniture?", a: "Yes. We repair loose hinge alignments, broken drawer runners, cracked wooden surfaces, doors, and sagged wardrobes." },
                  { q: "Do you provide office fit-out services?", a: "Yes. We handle office furniture, workstations, partitions, reception counters, shelving, and complete interior fit-out projects." },
                  { q: "Which materials do you use?", a: "We work with solid wood, commercial plywood, MDF, acrylic sheets, laminates, natural veneers, and premium hardware depending on project requirements." },
                  { q: "Do you provide site visits before starting work?", a: "Yes. Our team visits the site to inspect, measure, and align requirements to offer a detailed quote before starting." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site carpentry services in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Need custom furniture or cabinet repairs? Chat with our customer care representatives on WhatsApp for instant assistance.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "AC Work", slug: "ac-work" },
                  { name: "Electrical Work", slug: "electrical-work" },
                  { name: "Plumbing Work", slug: "plumbing-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Bring Your Ideas to Life?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your carpentry site visit or consultation today. Enjoy custom design, premium wood, and reliable fit-outs with OsumFix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isSteelFixing = slug === "steel-fixing";

  if (isSteelFixing) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="Steel Fixing & Reinforcement Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "Steel Fixing", href: "/services/steel-fixing" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    PROFESSIONAL STEEL FIXING SERVICES IN DUBAI
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Reliable Reinforcement Steel Fixing & Structural Support Solutions
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Steel fixing is one of the most important stages of any construction or renovation project. Properly installed reinforcement steel provides the strength, stability, and durability needed to support concrete structures safely and efficiently.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide professional steel fixing services across Dubai for residential, commercial, and industrial projects. Our experienced steel fixers work with precision and attention to detail, ensuring every reinforcement structure meets project specifications and industry standards.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Whether you require reinforcement for foundations, slabs, columns, beams, staircases, or structural extensions, our skilled team delivers dependable workmanship and high-quality results.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Layers size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Professional Steel Fixing Experts You Can Trust
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Experienced Steel Fixers", desc: "Our skilled team has extensive experience handling reinforcement steel work for projects of all sizes.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Accurate Installation", desc: "We follow approved drawings and reinforcement specifications to ensure precise placement and structural integrity.", icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Quality Materials Only", desc: "We work with high-quality reinforcement steel and reliable fixing accessories for maximum durability.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Safe Working Practices", desc: "Every project is carried out with strict attention to workplace safety and construction standards.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "Timely Project Completion", desc: "We understand construction schedules and complete work efficiently without compromising quality.", icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: "Customer Satisfaction", desc: "We focus on delivering reliable workmanship, transparent communication, and long-lasting results.", icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Steel Fixing Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Steel Fixing Services
                </h2>
                <p className="text-slate-500 mt-4">
                  We provide complete reinforcement steel solutions for residential, commercial, and industrial construction projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Reinforcement Steel",
                    items: ["Foundation Steel Fixing", "Footing Reinforcement", "Slab Reinforcement", "Beam Reinforcement", "Column Reinforcement", "Roof Slab Reinforcement"]
                  },
                  {
                    title: "Structural Steel",
                    items: ["Retaining Wall Reinforcement", "Staircase Reinforcement", "Concrete Frame Reinforcement", "Structural Extension Work", "Reinforced Concrete Prep"]
                  },
                  {
                    title: "Steel Fabrication",
                    items: ["Steel Cutting & Tying", "Steel Bending Work", "Reinforcement Assembly", "Bar Placement Alignment", "Accurate Spacer Checks"]
                  },
                  {
                    title: "Civil Support Services",
                    items: ["Villa Structural Fixing", "Building Reinforcement", "Boundary Wall Reinforcement", "Floor Mesh Reinforcement", "Concrete Preparation Tying"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[var(--dark)] text-lg mb-6 pb-2 border-b border-slate-200">{cat.title}</h4>
                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-3 text-slate-700 text-sm font-medium items-start">
                          <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Specialties We Provide (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-amber-500 font-bold uppercase tracking-wider text-xs">Solutions We Provide</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Reinforcement Solutions We Provide
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Steel reinforcement forms the backbone of concrete structures. We install slabs, walls, columns, staircases, and extensions safely.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "Foundation Reinforcement", "Beam Steel Fixing", "Column Steel Fixing", "Roof Reinforcement",
                    "Concrete Slab Reinforcement", "Staircase Steel Work", "Wall Reinforcement", "Structural Extensions",
                    "Retaining Wall Reinforcement", "Villa Construction Steel", "Building Structural Steel", "Industrial Projects"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-amber-500/20 hover:border-amber-500/40 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-200">
                      ⛓️ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial Properties</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We serve all construction sites, extensions, and commercial properties in Dubai:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {["Apartments", "Villas", "Townhouses", "Offices", "Restaurants & Cafes", "Retail Shops", "Warehouses", "Hotels", "Clinics", "Schools", "Commercial Buildings"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Steel Fixing Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Steel Fixing Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { step: "1", title: "Project Assessment", desc: "We review detailed project drawings and inspect site conditions before starting." },
                  { step: "2", title: "Material Preparation", desc: "Steel reinforcement bars are measured, cut, and bent according to design specifications." },
                  { step: "3", title: "Reinforcement Installation", desc: "Our skilled steel fixers accurately tie and position reinforcement bars securely." },
                  { step: "4", title: "Quality Inspection", desc: "Every section is checked for spacing, alignment, tying, and structural accuracy." },
                  { step: "5", title: "Final Approval", desc: "The completed reinforcement framework is approved and prepared for concrete pouring." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-base mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "What is steel fixing?", a: "Steel fixing is the process of positioning, tying, and securing steel reinforcement bars (rebar) inside concrete forms before pouring concrete, which provides the structural strength." },
                  { q: "Do you provide steel fixing for residential projects?", a: "Yes. We offer complete reinforcement fixing services for villas, townhouses, extensions, and custom residential foundations." },
                  { q: "Can you work on commercial construction sites?", a: "Absolutely. We carry out reinforcement tying and structural extensions for commercial buildings, offices, retail shops, and warehouses." },
                  { q: "Do you follow engineering drawings?", a: "Yes. Our team strictly follows the structural engineering drawings, bar schedules, concrete cover specs, and spacing details." },
                  { q: "Do you provide reinforcement for slabs, beams, and columns?", a: "Yes. We reinforce foundations, columns, beam grids, roof slabs, retaining walls, concrete frames, and structural stairs." },
                  { q: "Do you provide site inspections?", a: "Yes. We perform pre-inspections to check spacing and alignments before pouring concrete to guarantee a safe build." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site steel fixing reinforcement services in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Need custom reinforcement work or steel tying? Chat with our customer care representatives on WhatsApp for instant assistance.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "AC Work", slug: "ac-work" },
                  { name: "Electrical Work", slug: "electrical-work" },
                  { name: "Plumbing Work", slug: "plumbing-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Build Strong Foundations?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your steel fixing site visit or consultation today. Enjoy high-quality reinforcement, precise placement, and reliable civil structures with OsumFix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isInteriorDesigning = slug === "interior-designing";

  if (isInteriorDesigning) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="Interior Designing Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "Interior Designing", href: "/services/interior-designing" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    PROFESSIONAL INTERIOR DESIGNING SERVICES IN DUBAI
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Creative Interior Design & Space Transformation Solutions
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Every space has the potential to be beautiful, functional, and inspiring. Whether you're designing a new home, renovating an office, or upgrading a commercial property, the right interior design creates comfort, improves functionality, and reflects your unique style.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide professional interior designing services across Dubai, offering complete design, renovation, and fit-out solutions for residential and commercial properties. Our experienced designers combine creativity with practical planning to transform ordinary spaces into elegant, functional environments that suit your lifestyle and business needs.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    From concept development to project completion, we focus on quality craftsmanship, premium materials, and attention to every detail.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Palette size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Interior Design Experts You Can Trust
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Creative & Experienced Designers", desc: "Our interior designers work closely with clients to create personalized spaces that combine beauty, comfort, and functionality.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Customized Design Solutions", desc: "Every project is tailored to your preferences, budget, and property layout to ensure a unique, personal result.", icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "End-to-End Management", desc: "We handle everything from initial design consultations and material selection to execution and final finishing.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Premium Materials & Finishes", desc: "We use high-quality materials, modern finishes, and trusted suppliers to deliver exceptionally long-lasting interiors.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "Transparent Pricing", desc: "Receive a detailed, itemized quotation with clear pricing before any project preparation or execution begins.", icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: "On-Time Project Delivery", desc: "We complete interior transformations according to agreed timelines while maintaining the highest quality standards.", icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Interior Designing Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Interior Designing Services
                </h2>
                <p className="text-slate-500 mt-4">
                  We provide complete interior design and renovation solutions for homes, offices, and commercial spaces.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Residential Design",
                    items: ["Apartment Interior Design", "Villa Interior Design", "Bedroom Design & Layouts", "Living Room Makeovers", "Dining Area Styling", "Balcony Landscaping"]
                  },
                  {
                    title: "Commercial Design",
                    items: ["Office Interior Layouts", "Retail Shop Design", "Restaurant & Café Styling", "Salon & Spa Interior Design", "Clinic Interior Setups", "Hotel & Showroom Designs"]
                  },
                  {
                    title: "Space & Fit-Out",
                    items: ["Space Layout Planning", "Complete Interior Renovation", "Office Fit-Out Execution", "Home Remodeling Solutions", "Partition Wall Design", "Ceiling Layouts"]
                  },
                  {
                    title: "Decorative Solutions",
                    items: ["Gypsum False Ceilings", "Feature Wall Construction", "Decorative Wall Panels", "Architectural Lighting", "Wallpaper Installation", "Wooden Wall Cladding"]
                  },
                  {
                    title: "Custom Furniture",
                    items: ["Custom Furniture Crafting", "Sleek TV Units", "Modular Wardrobes", "Kitchen Cabinets", "Office Workstations", "Smart Storage Solutions"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[var(--dark)] text-base mb-6 pb-2 border-b border-slate-200">{cat.title}</h4>
                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-2.5 text-slate-700 text-xs sm:text-sm font-medium items-start">
                          <CheckCircle2 size={14} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Design Solutions We Offer (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-amber-500 font-bold uppercase tracking-wider text-xs">Solutions We Offer</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Complete Fit-Out & Renovation Solutions
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A thoughtfully designed interior improves more than appearance—it enhances comfort, productivity, organization, and overall quality of life.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "Home Interior Design", "Office Interior Design", "Villa Renovation", "Apartment Renovation",
                    "Space Planning", "Interior Fit-Out", "Kitchen Design", "Bathroom Remodeling",
                    "Ceiling Design", "Lighting Design", "Feature Walls", "Wooden Flooring",
                    "Custom Furniture", "Wardrobe Design", "Office Workstations", "Reception Areas",
                    "Retail Interiors", "Commercial Renovations"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-amber-500/20 hover:border-amber-500/40 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-200">
                      ✨ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial Styling</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We serve all residential, retail, corporate, and leisure spaces in Dubai:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {["Apartments", "Villas", "Townhouses", "Offices", "Restaurants & Cafes", "Retail Shops", "Warehouses", "Hotels", "Clinics", "Salons", "Schools", "Commercial Buildings"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Design Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Workflow
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Interior Design Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: "1", title: "Consultation", desc: "We discuss your ideas, detailed layout requirements, style preferences, and budget." },
                  { step: "2", title: "Site Visit", desc: "Our design team visits the property to assess the space and take measurements." },
                  { step: "3", title: "Design Planning", desc: "We prepare layout concepts, color schemes, material ideas, and space plans." },
                  { step: "4", title: "Quote & Approval", desc: "We provide an itemized, transparent quotation for fabrication and materials." },
                  { step: "5", title: "Project Execution", desc: "Our skilled team carries out the layout renovations under professional site management." },
                  { step: "6", title: "Styling & Handover", desc: "We complete final styling and inspect details before project handover." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-xs sm:text-sm mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Do you provide complete interior design services?", a: "Yes. We offer complete space planning, concept design, renovation, carpentry, and fit-out execution solutions for residential and commercial spaces." },
                  { q: "Can you redesign a single room?", a: "Absolutely. Whether it's one master bedroom, a kitchen remodeling, a reception counter, or an entire commercial layout, we take up projects of all sizes." },
                  { q: "Do you help select materials and colors?", a: "Yes. We guide you in choosing custom color palettes, flooring materials, ceiling designs, wood selections, lighting, and furniture finishes." },
                  { q: "Do you manage the entire project?", a: "Yes. From consultation, site visits, and quotes, up to execution, custom fabrications, installation, and cleanup, we manage the entire lifecycle." },
                  { q: "Do you offer office interior design?", a: "Yes. We design and build modern workstations, reception areas, meeting rooms, acoustic glass partitions, and ergonomic commercial layouts." },
                  { q: "Can you customize furniture?", a: "Yes. We specialize in custom wardrobes, shoe cabinets, TV media units, vanity counters, storage shelves, and office reception desks." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site design consultancies and renovations in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Want to schedule an interior design consultation or get layout quotes? Chat with our team on WhatsApp.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "AC Work", slug: "ac-work" },
                  { name: "Electrical Work", slug: "electrical-work" },
                  { name: "Plumbing Work", slug: "plumbing-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Transform Your Space?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your interior design consultation or site visit today. Create spaces that reflect your style with OsumFix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isCeilingGypsum = slug === "ceiling-gypsum";

  if (isCeilingGypsum) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner 
            title="Gypsum Ceiling & Partition Services" 
            breadcrumb={[
              { label: "Services", href: "/services" },
              { label: "Ceiling & Gypsum", href: "/services/ceiling-gypsum" }
            ]} 
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    PROFESSIONAL GYPSUM CEILING & PARTITION SERVICES
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">
                    Modern Gypsum Ceiling, Partition & Interior Finishing Solutions
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    A well-designed gypsum ceiling or partition can completely transform the appearance and functionality of any residential or commercial space. Whether you're renovating your home, designing a modern office, or upgrading a retail space, professional gypsum work adds elegance, improves space utilization, and enhances interior aesthetics.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    At <span className="font-semibold text-[var(--primary)]">OsumFix</span>, we provide complete gypsum ceiling and partition services across Dubai. Our experienced team specializes in false ceilings, decorative ceiling designs, gypsum partitions, office layouts, and custom interior finishing using premium materials and modern installation techniques.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    From simple ceiling installations to complete interior fit-out projects, we deliver durable craftsmanship with exceptional attention to detail.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
                    <div className="text-slate-400 font-semibold text-center p-6 z-20">
                      <Layout size={48} className="mx-auto text-[var(--primary)] mb-4" />
                      Service Detail Hero Image Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Why OsumFix
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Why Choose OsumFix?
                </h2>
                <p className="text-slate-500 mt-4">
                  Dubai's Trusted Gypsum Ceiling Specialists
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Experienced Installation Team", desc: "Our skilled gypsum specialists have extensive experience handling residential, commercial, and office ceiling projects.", icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: "Modern Custom Designs", desc: "We create customized ceiling and partition designs that perfectly match your interior style and project requirements.", icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Premium Quality Materials", desc: "We use durable gypsum boards, quality framing materials, and reliable finishing products to ensure long-lasting performance.", icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: "Clean & Professional Installation", desc: "Every project is completed with careful planning, precise installation, and a clean, safe working environment.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: "Affordable & Transparent Pricing", desc: "Receive detailed itemized quotations with clear, honest pricing and absolutely no hidden costs.", icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: "Customer Satisfaction", desc: "Our goal is to deliver stylish, beautiful interiors with professional workmanship and highly reliable project delivery.", icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100/80 hover:shadow-md transition-shadow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Gypsum Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Gypsum Ceiling & Partition Services
                </h2>
                <p className="text-slate-500 mt-4">
                  We provide complete gypsum solutions for homes, offices, villas, apartments, retail shops, and commercial buildings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Ceiling Installation",
                    items: ["False Ceiling Installation", "Suspended Ceiling Systems", "Decorative Ceiling Designs", "Cove Ceiling Design", "Multi-Level Ceiling Layouts", "Modern Ceiling Concepts"]
                  },
                  {
                    title: "Partition Services",
                    items: ["Office Gypsum Partitions", "Residential Room Dividers", "Meeting Room Walls", "Retail Shop Dividers", "Privacy Partition Walls", "Sound-Reducing Partitions"]
                  },
                  {
                    title: "Interior Finishing",
                    items: ["Ceiling Lighting Preparation", "LED Cove Lighting Design", "Decorative Wall Panels", "Feature Ceiling Layouts", "Bulkhead Ceiling Install", "Gypsum Board Cornices"]
                  },
                  {
                    title: "Repair & Maintenance",
                    items: ["Ceiling Crack Repair", "Water Damage Remediation", "Gypsum Board Replacement", "Ceiling Leveling & Plastering", "Partition Wall Repair", "Surface Joint Finishing"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[var(--dark)] text-lg mb-6 pb-2 border-b border-slate-200">{cat.title}</h4>
                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-3 text-slate-700 text-sm font-medium items-start">
                          <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Gypsum Specialties (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-amber-500 font-bold uppercase tracking-wider text-xs">Solutions We Offer</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Modern Gypsum Ceilings & Custom Partitions
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    False ceilings neatly hide wiring, ductwork, and lighting installations for a cleaner, modern finish while partitions divide spaces efficiently.
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    "False Ceiling Installation", "Decorative Ceiling Design", "Gypsum Partition Walls", "Office Partitions",
                    "Commercial Ceiling Systems", "Villa Ceiling Design", "Apartment Ceiling Installation", "Gypsum Bulkheads",
                    "TV Feature Walls", "Ceiling Renovation", "Ceiling Repair", "LED Ceiling Preparation",
                    "Sound-Reducing Partitions", "Interior Ceiling Finishing", "Custom Gypsum Designs"
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white/5 border border-amber-500/20 hover:border-amber-500/40 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-200">
                      📐 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold">Residential & Commercial Sectors</h3>
                  <p className="text-slate-400 text-sm mt-3">
                    We serve all residential, office, and commercial properties in Dubai:
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {["Apartments", "Villas", "Townhouses", "Offices", "Restaurants & Cafes", "Retail Shops", "Warehouses", "Hotels", "Clinics", "Salons", "Schools", "Commercial Buildings"].map((sec, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center hover:bg-white/[0.05] transition-all">
                      <span className="text-sm font-semibold text-slate-200">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Gypsum Work Process (Slate-50 Background) */}
          <section className="py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Our Installation Steps
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Our Gypsum Work Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: "1", title: "Consultation", desc: "We visit your property to understand design preferences and measure the space." },
                  { step: "2", title: "Design & Layout", desc: "We prepare structural frame layouts and select appropriate gypsum materials." },
                  { step: "3", title: "Material Prep", desc: "Premium gypsum boards, metal frames, and accessories are cut and prepared." },
                  { step: "4", title: "Installation", desc: "Our technicians build the framing structure and mount panels with precise alignments." },
                  { step: "5", title: "Finishing Work", desc: "Joint filling, tape mesh application, sanding, and plaster leveling are completed." },
                  { step: "6", title: "Final Handover", desc: "We complete meticulous styling checks and clean up the work area before handover." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-[var(--dark)] text-xs sm:text-sm mb-2">{p.title}</h4>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Do you install false ceilings?", a: "Yes. We offer complete false ceiling systems (both decorative gypsum boards and ceiling tile grid structures) for residential and commercial buildings." },
                  { q: "Can you design custom gypsum ceilings?", a: "Absolutely. We customize modern LED cove layouts, multi-level gypsum bulkheads, borders, and contemporary designs." },
                  { q: "Do you install office partitions?", a: "Yes. We install sound-reducing gypsum partition walls for office cabins, store partitions, clinics, and meeting rooms." },
                  { q: "Can you repair damaged gypsum ceilings?", a: "Yes. We repair cracks, restore sagged frames, replace sections affected by water leaks, and plaster uneven surfaces." },
                  { q: "Do you provide complete interior finishing?", a: "Yes. We offer gypsum ceilings, partitions, decorative wall features, custom lighting preparation, and support services." },
                  { q: "Do you provide site inspections?", a: "Yes. Our team inspects your property, takes exact measurements, explains layouts, and details a quote before commencing work." }
                ].map((faq, idx) => (
                  <details key={idx} className="group border border-slate-150 rounded-2xl p-5 bg-slate-50/50 open:bg-white transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-base md:text-lg text-[var(--dark)] cursor-pointer list-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-slate-400 ml-4">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Areas We Serve & WhatsApp (Emerald/Light Blue theme) */}
          <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] border-b pb-4">Areas We Serve in Dubai</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide fast response times and expert on-site gypsum ceiling & partition services in all major communities, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT (Jumeirah Lake Towers)", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Instant Quote via WhatsApp</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Need modern false ceilings or sound-reducing office partitions? Chat with our customer care representatives on WhatsApp.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Send Instant WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">Explore Our Other Services</h3>
                <p className="text-slate-500 text-sm mt-3">We are Dubai's trusted one-stop provider for all home and building technical solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "AC Work", slug: "ac-work" },
                  { name: "Electrical Work", slug: "electrical-work" },
                  { name: "Plumbing Work", slug: "plumbing-work" },
                  { name: "Painting Work", slug: "painting-work" },
                  { name: "Masonry Work", slug: "masonry-work" },
                  { name: "Carpentry Work", slug: "carpentry-work" },
                  { name: "Steel Fixing", slug: "steel-fixing" },
                  { name: "Interior Designing", slug: "interior-designing" },
                  { name: "Ceiling & Gypsum", slug: "ceiling-gypsum" },
                  { name: "Handyman Services", slug: "handyman-services" }
                ].map((s, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${s.slug}`}
                    className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[var(--primary)] hover:shadow-md p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300"
                  >
                    <span className="font-bold text-[var(--dark)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-[var(--primary)] font-medium inline-flex items-center mt-4">
                      View Service <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Ready to Transform Your Ceilings & Partitions?</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
                Book your false ceiling consultation or site visit today. Enjoy smooth, durable, and modern gypsum finishing with OsumFix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base">
                  Request Callback
                </Link>
                <a href="tel:+971501234567" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
                  Call +971 50 123 4567
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  // Fallback dynamic rendering for other services
  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title={formattedTitle} 
          breadcrumb={[
            { label: "Services", href: "/services" },
            { label: formattedTitle, href: `/services/${slug}` }
          ]} 
        />
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Keep Banner Image Placeholder */}
                <div className="aspect-[21/9] bg-slate-200 rounded-3xl overflow-hidden relative shadow-md">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                    Service Detail Hero Image Placeholder
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold text-[var(--dark)] mb-6">Overview</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      At OsumFix Technical Services, our {formattedTitle.toLowerCase()} are designed to meet the highest standards of quality and safety. We understand that issues can cause significant disruption to your daily life or business operations. That's why our certified technicians are trained to identify and resolve problems quickly and efficiently.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Whether it's a minor repair, a major installation, or routine maintenance, we use the latest tools and techniques to ensure long-lasting results. We pride ourselves on transparent pricing, clear communication, and leaving your premises clean and tidy after the work is done.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <h3 className="text-2xl font-bold text-[var(--dark)] mb-6">Key Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <li className="flex gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="text-[var(--primary)] shrink-0" /> Certified Professionals
                      </li>
                      <li className="flex gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="text-[var(--primary)] shrink-0" /> 100% Satisfaction Guarantee
                      </li>
                      <li className="flex gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="text-[var(--primary)] shrink-0" /> Fast Response Time
                      </li>
                      <li className="flex gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="text-[var(--primary)] shrink-0" /> Quality Materials Used
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-[var(--dark)] mb-6">Our Process</h2>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                      {[
                        { title: "Inspection & Diagnosis", desc: "We thoroughly assess the situation to identify the root cause." },
                        { title: "Transparent Quote", desc: "You receive a detailed breakdown of costs before any work begins." },
                        { title: "Execution", desc: "Our technicians perform the work efficiently and safely." },
                        { title: "Final Testing", desc: "We rigorously test the completed work to ensure everything functions perfectly." }
                      ].map((step, idx) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--primary)] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            {idx + 1}
                          </div>
                          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-[var(--dark)] text-lg mb-2">{step.title}</h4>
                            <p className="text-slate-600 text-sm">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Related Services */}
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-bold text-[var(--dark)] mb-6 border-b pb-4">Other Services</h3>
                  <ul className="space-y-4">
                    {["AC Work", "Electrical Work", "Plumbing Work", "Painting Work", "Masonry Work", "Carpentry Work", "Steel Fixing", "Interior Designing", "Ceiling & Gypsum", "Handyman Services"].map((s, idx) => {
                      const linkSlug = s.toLowerCase().replace(' & ', '-').replace(' ', '-');
                      if (linkSlug === slug) return null;
                      return (
                        <li key={idx}>
                          <Link href={`/services/${linkSlug}`} className="flex items-center justify-between text-slate-600 hover:text-[var(--primary)] font-medium group transition-colors">
                            {s}
                            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-[var(--dark)] p-8 rounded-3xl text-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--primary)]/20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Need Help Now?</h3>
                    <p className="text-slate-300 mb-6 text-sm">Our emergency response team is available 24/7 across Dubai.</p>
                    <a href="tel:+971501234567" className="block w-full bg-[var(--primary)] hover:bg-[var(--secondary)] py-3 rounded-full font-bold transition-colors mb-4 flex items-center justify-center gap-2">
                      <Phone size={18} /> +971 50 123 4567
                    </a>
                    <Link href="/contact" className="block w-full bg-white text-[var(--dark)] hover:bg-slate-100 py-3 rounded-full font-bold transition-colors flex items-center justify-center gap-2">
                      <Calendar size={18} /> Book a Service
                    </Link>
                  </div>
                </div>

                {/* WhatsApp Instant Quote */}
                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100/80">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg">Instant Quote</h4>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Have a query or need an instant quote? WhatsApp us directly for quick booking and support.
                  </p>
                  <a 
                    href="https://wa.me/971501234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-3 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Service Areas Card */}
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-bold text-[var(--dark)] mb-4 border-b pb-4">Areas We Serve</h3>
                  <p className="text-slate-600 text-sm mb-4">We provide prompt, professional technical services across Dubai, including:</p>
                  <ul className="grid grid-cols-2 gap-2 text-slate-700 font-medium text-xs sm:text-sm">
                    {["Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JLT", "Al Barsha", "Arabian Ranches", "Business Bay", "Jumeirah", "Meydan", "Mirdif"].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check size={14} className="text-[var(--primary)] shrink-0" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

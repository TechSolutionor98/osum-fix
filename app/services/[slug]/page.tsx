import Image from "next/image";
import { getCmsVal } from "@/lib/api-helper";
import { getPublishedContent } from "@/lib/cms-service";
export const dynamic = 'force-dynamic';
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
  const cms = await getPublishedContent(`/services/${slug}`);
  const t = (val: any) => getCmsVal(cms, val);

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
              { label: t("Services"), href: "/services" },
              { label: t("AC Work"), href: "/services/ac-work" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("AC Repair & Maintenance Services")}</span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--dark)] tracking-tight leading-[1.1]">{t("Professional AC Repair & Maintenance in Dubai")}</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">{t("Your air conditioning system works harder than almost any other appliance in the UAE climate. Regular maintenance prevents unexpected breakdowns and keeps energy bills low.")}</p>
                  <p className="text-slate-600 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, our certified technicians use professional equipment and proven procedures for homes, villas, and commercial properties. From basic servicing to complex compressor repairs, we guarantee fast response times and absolute quality.") }}></p>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link href="/contact" className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md flex items-center gap-2">
                      Book AC Service <ArrowRight size={18} />
                    </Link>
                    <a href="tel:+971551519540" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2">
                      <Phone size={18} /> {t("Call Now")}
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/ac_hero.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Professional AC Repair Technician")} priority />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                        <Shield size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--dark)]">{t("Guaranteed Service")}</h4>
                        <p className="text-sm text-slate-500">{t("Certified Professionals")}</p>
                      </div>
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
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Choosing the right AC maintenance company is essential for the long-term performance of your cooling system.")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Experienced & Certified"), desc: t("Our skilled professionals have extensive experience servicing all major AC brands and cooling systems."), icon: <Wrench size={26} /> },
                  { title: t("Fast Response Across Dubai"), desc: t("We understand how uncomfortable AC problems can be. We aim to provide quick appointments and efficient service."), icon: <Clock size={26} /> },
                  { title: t("Honest & Transparent Pricing"), desc: t("No hidden charges. We explain the issue clearly and agree on the cost before starting any repair work."), icon: <Shield size={26} /> },
                  { title: t("Advanced Equipment"), desc: t("We use professional testing tools and modern servicing equipment to ensure accurate diagnosis and effective repairs."), icon: <Layers size={26} /> },
                  { title: t("Quality Workmanship"), desc: t("Every service is completed with absolute attention to detail to maximize cooling performance and system reliability."), icon: <Sparkles size={26} /> }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our 3-Phase Maintenance Process */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm mb-3 block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full inline-block">{t("Our Methodology")}</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--dark)] tracking-tight">{t("Comprehensive 3-Phase AC Service")}</h2>
                <p className="text-slate-500 mt-6 text-lg leading-relaxed">{t("We go beyond a simple wash. Our thorough maintenance process ensures your AC operates at peak efficiency, saving energy and preventing future breakdowns.")}</p>
              </div>

              <div className="space-y-24">
                {/* Phase 1 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">01</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Inspection & Diagnosis")}</h3>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">{t("Before we clean, we thoroughly inspect your system to identify any hidden faults or performance drops.")}</p>
                    <ul className="space-y-4">
                      {[
                        t("Complete System Inspection (Indoor & Outdoor)"),
                        t("Cooling Performance & Airflow Testing"),
                        t("Thermostat Accuracy Check"),
                        t("Electrical Connections & Safety Verification"),
                        t("Refrigerant Level Check")
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/ac_inspection.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("AC Inspection")} />
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/ac_cleaning.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("AC Deep Cleaning")} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">02</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Deep Cleaning & Optimization")}</h3>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">{t("We perform a comprehensive deep clean of all critical components to restore maximum cooling efficiency and air quality.")}</p>
                    <ul className="space-y-4">
                      {[
                        t("Air Filter Cleaning & Replacement"),
                        t("Evaporator Coil Deep Cleaning"),
                        t("Condenser Coil Washing"),
                        t("Drain Line Flushing to prevent leaks"),
                        t("Fan Motor & Blade Cleaning")
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">03</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Final Testing & Handover")}</h3>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">{t("We never leave a job without ensuring everything works perfectly. We run complete performance tests to guarantee your comfort.")}</p>
                    <ul className="space-y-4">
                      {[
                        t("Noise & Vibration Check"),
                        t("Final Performance Testing"),
                        t("Balanced Airflow Verification"),
                        t("Detailed Service Report"),
                        t("Maintenance Recommendations")
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/ac_testing.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("AC Final Testing")} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Repairs & Sectors (Light Theme Accent block) */}
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Our Services")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("AC Repair Services We Provide")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Our technicians are equipped to diagnose and repair almost every common AC problem on the spot.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("AC Not Cooling"), t("AC Water Leakage"), t("Gas Refilling"), t("Compressor Repair"),
                    t("Thermostat Repair"), t("Fan Motor Replacement"), t("Capacitor Replacement"),
                    t("PCB Repair"), t("Electrical Fault Repair"), t("Airflow Problems"), t("Strange Noise Repair"),
                    t("Emergency AC Repair"), t("AC Installation"), t("AC Relocation"), t("AC Duct Inspection")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-700 cursor-default">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial AC Solutions")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We provide complete AC services for all sectors across Dubai. No project is too small or too large.")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[t("Apartments"), t("Villas"), t("Offices"), t("Restaurants"), t("Retail Shops"), t("Warehouses"), t("Commercial Buildings"), t("Hotels"), t("Clinics"), t("Schools")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Bookings & Service Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Workflow")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Service Process")}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 xl:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      { step: t("1"), title: t("Book Appointment"), desc: t("Choose a convenient date and time.") },
                      { step: t("2"), title: t("Professional Inspection"), desc: t("Our technician performs a complete system diagnosis.") },
                      { step: t("3"), title: t("Detailed Explanation"), desc: t("We explain the issue and provide transparent pricing.") },
                      { step: t("4"), title: t("Repair & Maintenance"), desc: t("Our team completes the work using quality tools.") },
                      { step: t("5"), title: t("Final Testing"), desc: t("We thoroughly test your AC before leaving.") },
                      { step: t("6"), title: t("Customer Satisfaction"), desc: t("We ensure your cooling system is operating at its best.") }
                    ].map((p, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow h-full">
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
                <div className="lg:col-span-5 xl:col-span-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                    <Image src={t("/images/services/ac_workflow.png")} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Workflow")} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("How often should I service my AC?"), a: t("We recommend servicing every 4 to 6 months depending on usage and environment to prevent sudden breakdowns and maintain cooling efficiency.") },
                  { q: t("Do you provide emergency AC repair?"), a: t("Yes. Our team responds quickly to urgent AC repair requests across Dubai to ensure comfort in peak summer weather.") },
                  { q: t("Which AC brands do you repair?"), a: t("We service most major brands including split, ducted, cassette, central, package, and VRF/VRV systems.") },
                  { q: t("Do you provide gas refilling?"), a: t("Yes, we inspect the system first to identify the leak cause, repair it, and then refill the refrigerant gas to optimal pressure.") },
                  { q: t("Do you offer annual maintenance contracts (AMC)?"), a: t("Yes. We provide customized preventative AMC maintenance plans for both residential and commercial properties.") }
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

          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Restore Your Cooling Performance?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your AC service today and experience reliable cooling, professional workmanship, and exceptional customer service.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
              { label: t("Services"), href: "/services" },
              { label: t("Electrical Work"), href: "/services/electrical-work" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL ELECTRICAL SERVICES IN DUBAI")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Reliable Electrical Repair, Installation & Maintenance Services")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Electrical systems are the backbone of every home and business. Whether it's a minor repair, a complete installation, or routine maintenance, electrical work should always be handled by experienced professionals to ensure safety, efficiency, and long-term reliability.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide professional electrical services across Dubai for residential and commercial properties. Our qualified electricians diagnose problems quickly, perform safe repairs, and deliver quality workmanship using industry-standard tools and high-quality materials.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("From faulty sockets and lighting installations to complete electrical troubleshooting, we ensure every job is completed safely, efficiently, and to the highest standards.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/electrical.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Trusted Electrical Experts You Can Rely On")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Certified & Skilled Electricians"), desc: t("Our experienced technicians are trained to handle all types of residential and commercial electrical systems safely and professionally."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("Fast Response Across Dubai"), desc: t("We understand electrical issues can happen anytime. Our team responds quickly to minimize downtime and inconvenience."), icon: <Clock size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("Transparent Pricing"), desc: t("No hidden charges. We provide clear quotations before starting any work so you know the exact cost."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Safe & Professional Workmanship"), desc: t("Every repair and installation follows strict UAE safety standards for complete peace of mind."), icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("Quality Materials Only"), desc: t("We use reliable electrical components and trusted brands to ensure long-lasting performance and prevent safety hazards."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("Customer Satisfaction"), desc: t("Our goal is to deliver dependable service with quality you can trust, backed by our satisfaction guarantee."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Electrical Services (Premium Alternating Layout) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Expertise")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Electrical Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide complete electrical solutions for homes, villas, apartments, offices, restaurants, retail stores, warehouses, and commercial buildings.")}</p>
              </div>

              <div className="space-y-16 lg:space-y-24">
                {/* Repairs */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">01</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Electrical Repairs")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Power Failure Troubleshooting"), t("Circuit Breaker Repairs"), t("Electrical Fault Diagnosis"), t("Wiring Repairs"), t("Socket Repairs"), t("Switch Repairs")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/electrical_repairs.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Electrical Repairs")} />
                    </div>
                  </div>
                </div>

                {/* Installations */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/electrical_installations.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Electrical Installations")} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">02</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Electrical Installations")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("New Power Sockets"), t("Switch Installation"), t("Lighting & LED Upgrade"), t("Ceiling Lights & Chandeliers"), t("Outdoor Lighting"), t("Garden Lighting")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Maintenance */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">03</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Electrical Maintenance")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Electrical Safety Inspection"), t("Wiring Inspection"), t("Distribution Board Inspection"), t("Load Testing"), t("Preventive Maintenance")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/electrical_maintenance.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Electrical Maintenance")} />
                    </div>
                  </div>
                </div>
                
                {/* Additional */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/electrical.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Additional Services")} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">04</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Additional Services")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Fan & Exhaust Fan Install"), t("Door Bell Installation"), t("Water Heater Connection"), t("Electrical Panel Upgrades"), t("Appliance Power Connection")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>



          {/* Section 5: Emergency & Sectors (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Emergency Helpline 24/7")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Emergency Electrical Services")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Electrical emergencies require immediate attention. We respond quickly to restore safety and minimize disruption.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("Complete Power Failure"), t("Burning Smells"), t("Sparking Switches"), t("Tripping Breakers"),
                    t("Electrical Short Circuits"), t("Emergency Lighting Failure"), t("Faulty Distribution Boards"),
                    t("Loose Exposed Wires"), t("Voltage Fluctuation"), t("Water Leaked in Outlets")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-700 cursor-default">
                      ⚠️ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Electrical Services")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We proudly serve all commercial, retail, residential, and corporate sectors in Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Bookings & Service Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Workflow")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Electrical Service Process")}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 xl:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      { step: t("1"), title: t("Service Booking"), desc: t("Schedule your appointment at preferred time.") },
                      { step: t("2"), title: t("Complete Inspection"), desc: t("Detailed assessment of your electrical system.") },
                      { step: t("3"), title: t("Fault Diagnosis"), desc: t("Identify exact cause using testing equipment.") },
                      { step: t("4"), title: t("Transparent Quotation"), desc: t("Detailed work and pricing before repairs begin.") },
                      { step: t("5"), title: t("Safe Execution"), desc: t("Technicians complete the work safely using quality parts.") },
                      { step: t("6"), title: t("Safety Testing"), desc: t("Components are thoroughly tested before completion.") },
                      { step: t("7"), title: t("Final Quality Check"), desc: t("Everything is verified to work perfectly before leaving.") }
                    ].map((p, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow h-full">
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
                <div className="lg:col-span-5 xl:col-span-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/electrical.png")} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Workflow")} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("Do you provide emergency electrical services?"), a: t("Yes. Our team is equipped and ready to resolve urgent electrical repairs across Dubai at any time.") },
                  { q: t("Can you install new lighting fixtures?"), a: t("Yes. We install all kinds of indoor, outdoor, decorative, chandeliers, and energy-efficient LED lighting systems.") },
                  { q: t("Do you repair electrical wiring?"), a: t("Absolutely. We perform complete wiring diagnostics, fault finding, and safe repairs of damaged or overloaded wires.") },
                  { q: t("Can you replace switches and sockets?"), a: t("Yes. We replace broken, burnt, or faulty switches, power outlets, sockets, and distribution boxes.") },
                  { q: t("Do you provide electrical safety inspections?"), a: t("Yes. We inspect the wiring, load distribution, breakers, and safety terminals to verify code compliance and prevent failures.") },
                  { q: t("Do you work with residential and commercial properties?"), a: t("Yes. We provide complete electrical solutions for both homes, villas, apartments, and commercial facilities.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Safe-Power Your Home?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your electrical inspection or repair today. Enjoy safe, efficient, and professional technical services with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
              { label: t("Services"), href: "/services" },
              { label: t("Plumbing Work"), href: "/services/plumbing-work" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL PLUMBING SERVICES IN DUBAI")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Reliable Plumbing Repair, Installation & Maintenance Services")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("A properly functioning plumbing system is essential for the comfort, safety, and hygiene of every home and business. Even a small leak or blocked drain can quickly turn into a costly problem if not repaired on time.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide professional plumbing services across Dubai, delivering fast, reliable, and long-lasting solutions for residential and commercial properties. From emergency plumbing repairs to complete installations and routine maintenance, our experienced plumbers ensure every job is completed with precision and care.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Whether you're dealing with leaking pipes, clogged drains, water heater issues, or bathroom renovations, OsumFix is your trusted plumbing partner.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/plumbing.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Trusted Plumbing Experts for Every Property")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Experienced & Skilled Plumbers"), desc: t("Our trained professionals have extensive experience handling all types of residential and commercial plumbing systems."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("Fast Response Across Dubai"), desc: "We understand that plumbing issues can't wait. Our team responds quickly to minimize damage and restore your water system.", icon: <Clock size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("Honest & Transparent Pricing"), desc: t("No hidden charges. We provide clear quotations and explanations before starting any plumbing work."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Quality Materials & Spare Parts"), desc: t("We use durable plumbing materials and trusted brands to ensure reliable, long-lasting repairs and installations."), icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("Reliable Workmanship"), desc: t("Every repair and installation is completed according to professional standards with rigorous attention to detail."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("Customer Satisfaction Focus"), desc: t("Your comfort, property safety, and peace of mind are always our highest priorities."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Plumbing Services (Premium Alternating Layout) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Divisions")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Plumbing Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide complete plumbing solutions for homes, apartments, villas, offices, restaurants, hotels, and commercial properties.")}</p>
              </div>

              <div className="space-y-16 lg:space-y-24">
                {/* 1 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">01</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Plumbing Repairs")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Water Leak Repair"), t("Pipe Leak Repair"), t("Burst Pipe Repair"), t("Tap & Faucet Repair"), t("Toilet & Flush Repair"), t("Shower & Valve Repair")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/plumbing_repairs.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Plumbing Repairs")} />
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/plumbing.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Drainage Services")} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">02</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Drainage Services")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Drain Cleaning"), t("Blocked Drain Repair"), t("Kitchen Drain Unblock"), t("Bathroom Drain Clean"), t("Floor Drain Cleaning"), t("Sewer Line Inspection")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">03</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Water Heater Services")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Water Heater Installation"), t("Water Heater Repair"), t("Water Heater Replace"), t("Thermostat Replacement"), t("Heating Element Fix")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/plumbing.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Water Heater Services")} />
                    </div>
                  </div>
                </div>
                
                {/* 4 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/plumbing.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Plumbing Installs")} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">04</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Plumbing Installs")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Bathroom Plumbing"), t("Kitchen Plumbing"), t("Sink & Toilet Install"), t("Wash Basin Fitting"), t("Shower Mixer Install"), t("Water Pump Installation")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 5 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">05</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Preventive Care")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Plumbing Inspection"), t("Leak Detection Scan"), t("Pipe Condition Check"), t("Water Pressure Testing"), t("Routine Maintenance")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/plumbing.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Preventive Care")} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>



          {/* Section 5: Emergency Support & Sectors (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("24/7 Emergency Support")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Emergency Plumbing Services")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Some plumbing issues require immediate attention to prevent structural flooding. Our emergency plumbers are ready to assist.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("Burst Pipes"), t("Major Water Leaks"), t("Overflowing Toilets"), t("Blocked Sewer Lines"),
                    t("Water Heater Failures"), t("Flooding Emergencies"), t("Sudden Water Supply Problems"),
                    t("Water Pump Failures"), t("Concealed Slab Leakage"), t("Drain Overflowing")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/30 hover:bg-blue-50/50 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-700 shadow-sm">
                      💧 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Plumbing Services")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We serve all kinds of properties and commercial establishments in Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Bookings & Service Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Workflow")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Plumbing Service Process")}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 xl:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      { step: t("1"), title: t("Schedule Booking"), desc: t("Book appointment through phone or WhatsApp.") },
                      { step: t("2"), title: t("System Inspection"), desc: t("Plumber performs inspection to find root cause.") },
                      { step: t("3"), title: t("Accurate Diagnosis"), desc: t("Locate leaks or blockages using specialized tools.") },
                      { step: t("4"), title: t("Transparent Quote"), desc: t("Receive upfront pricing before starting any work.") },
                      { step: t("5"), title: t("Safe Repair"), desc: t("Plumbers complete work efficiently using quality materials.") },
                      { step: t("6"), title: t("Performance Testing"), desc: t("Test the system to ensure everything operates correctly.") },
                      { step: t("7"), title: t("Final Quality Check"), desc: t("Verify plumbing is working safely and efficiently.") }
                    ].map((p, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow h-full">
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
                <div className="lg:col-span-5 xl:col-span-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/plumbing.png")} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Workflow")} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("Do you provide emergency plumbing services?"), a: t("Yes. We offer fast-response emergency plumbing repairs across Dubai for burst pipes, flooding, or heater failures.") },
                  { q: t("Can you repair leaking pipes?"), a: t("Absolutely. We repair all types of leaks, including concealed slab leaks, ceiling leaks, and visible pipe damages.") },
                  { q: t("Do you install water heaters?"), a: t("Yes. We install, repair, replace, and service all major brands of residential and commercial water heaters.") },
                  { q: t("Can you unblock kitchen and bathroom drains?"), a: t("Yes. Our plumbers use professional unblocking machinery and pressure rods to clear clogged drains safely.") },
                  { q: t("Do you provide plumbing services for commercial properties?"), a: t("Yes. We service offices, restaurants, hotels, warehouses, clinics, retail shops, and commercial buildings.") },
                  { q: t("How often should plumbing systems be inspected?"), a: t("We recommend a professional plumbing inspection at least once a year to scan for silent leaks, blockages, and wear before they cause severe damage.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Restore Your Plumbing?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your plumbing service or scan leaks today. Enjoy professional, clean, and reliable technical services with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
              { label: t("Services"), href: "/services" },
              { label: t("Painting Work"), href: "/services/painting-work" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL PAINTING SERVICES IN DUBAI")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Transform Your Home & Office with Expert Painting Solutions")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("A fresh coat of paint does more than improve appearance—it enhances your property's value, protects surfaces, and creates a clean, welcoming environment. Whether you're renovating your home, refreshing your office, or preparing a property for handover, professional painting makes all the difference.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide high-quality interior and exterior painting services across Dubai. Our experienced painters deliver smooth finishes, clean workmanship, and long-lasting results using premium paints and professional techniques.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("From a single room to complete villas, apartments, offices, and commercial buildings, we complete every project with precision, efficiency, and attention to detail.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/painting.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Professional Painting You Can Trust")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Experienced Painting Professionals"), desc: t("Our skilled painters are trained to deliver clean, even finishes with attention to every detail."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("Premium Quality Materials"), desc: t("We use high-quality paints and trusted brands to ensure vibrant colors, excellent coverage, and long-lasting durability."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("Clean & Hassle-Free Service"), desc: t("We carefully protect your furniture, floors, doors, windows, and fixtures before painting and leave your space clean after completion."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Affordable & Transparent Pricing"), desc: "Receive clear quotations with no hidden charges, whether it's a single room or a full property repaint.", icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("Timely Project Completion"), desc: t("We work efficiently to complete projects on schedule while maintaining the highest quality standards."), icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("Customer Satisfaction Guaranteed"), desc: t("Our goal is to deliver results that exceed your expectations and give your property a fresh new look."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Painting Services (Premium Alternating Layout) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Expertise")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Painting Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide complete residential and commercial painting solutions, custom-suited for Dubai properties.")}</p>
              </div>

              <div className="space-y-16 lg:space-y-24">
                {/* 1 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">01</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Interior Painting")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Living Rooms"), t("Bedrooms"), t("Kitchens & Bathrooms"), t("Hallways & Ceilings"), t("Feature Walls"), t("Accent Wall repaints")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/painting.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Interior Painting")} />
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/painting.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Exterior Painting")} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">02</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Exterior Painting")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Villa Exterior Painting"), t("Building Exterior Painting"), t("Boundary Walls"), t("Balconies"), t("Boundary Fences"), t("Outdoor Structures")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">03</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Residential Painting")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Apartment Repainting"), t("Villa Painting Services"), t("Townhouse Repainting"), t("New Home Handover Prep"), t("Property Renovations")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/painting.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Residential Painting")} />
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/painting.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Commercial Painting")} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">04</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Commercial Painting")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Corporate Offices"), t("Retail Shops & Outlets"), t("Restaurants & Cafes"), t("Hotels & Showrooms"), t("Warehouses & Clinics")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 5 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-xl flex items-center justify-center border border-blue-100">05</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)]">{t("Decorative Finishes")}</h3>
                    </div>
                    <ul className="space-y-4">
                      {[t("Accent Walls"), t("Texture Finishes"), t("Feature Wall Designs"), t("Custom Color Styling"), t("Staircases & Fences")].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-[var(--primary)]/30">
                          <CheckCircle2 size={22} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                      <Image src={t("/images/services/painting.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Decorative Finishes")} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section 4: Painting Specialties We Offer (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Services We Offer")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Painting Specialties & Surface Care")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Our experienced painters handle projects of all sizes. Proper surface preparation, premium materials, and expert application ensure a finish that looks beautiful and lasts.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("Full Home Painting"), t("Apartment Painting"), t("Villa Painting"), t("Office Painting"),
                    t("Ceiling Painting"), t("Wall Repainting"), t("Interior Wall Painting"), t("Exterior Wall Painting"),
                    t("Door Painting"), t("Window Frame Painting"), t("Wooden Surface Painting"), t("Metal Surface Painting"),
                    t("Fence Painting"), t("Staircase Painting"), t("Touch-Up Painting"), t("Move-In / Move-Out Painting")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/30 hover:bg-blue-50/50 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-slate-700 shadow-sm">
                      🎨 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Painting Solutions")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We proudly serve all commercial, retail, residential, and corporate sectors in Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Painting Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Workflow")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Painting Service Process")}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 xl:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      { step: t("1"), title: t("Site Inspection"), desc: t("We assess the project and recommend the best painting solution.") },
                      { step: t("2"), title: t("Surface Prep"), desc: t("Walls are cleaned, cracks repaired, and surfaces sanded smoothly.") },
                      { step: t("3"), title: t("Protection"), desc: t("Floors, furniture, doors, and fixtures are fully protected.") },
                      { step: t("4"), title: t("Primer Application"), desc: t("Primer is applied to improve paint adhesion and durability.") },
                      { step: t("5"), title: t("Painting"), desc: t("Multiple even coats are applied using professional tools.") },
                      { step: t("6"), title: t("Final Inspection"), desc: t("Every wall and painted surface is checked for a flawless result.") },
                      { step: t("7"), title: t("Clean-up & Handover"), desc: t("We remove all covers, clean up, and hand over a beautiful space.") }
                    ].map((p, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow h-full">
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
                <div className="lg:col-span-5 xl:col-span-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/painting.png")} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Workflow")} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: FAQs (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("Do you provide both interior and exterior painting?"), a: t("Yes. We offer complete interior and exterior painting services for residential and commercial properties.") },
                  { q: t("Can you help choose paint colors?"), a: "Yes. Our team can recommend suitable colors and finishes based on your property's style and lighting." },
                  { q: t("Do you provide paint, or should I purchase it?"), a: t("We can supply high-quality paints or work with the paint brand of your choice.") },
                  { q: t("How long does a painting project take?"), a: t("Project duration depends on the size and condition of the property. We always aim to complete work within the agreed timeline.") },
                  { q: t("Do you protect furniture and flooring before painting?"), a: t("Absolutely. We cover furniture, floors, doors, windows, and fixtures to keep your property clean and protected.") },
                  { q: t("Do you offer painting services for offices and commercial spaces?"), a: t("Yes. We handle projects of all sizes, from homes and apartments to offices, retail shops, hotels, and commercial buildings.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Transform Your Walls?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your painting consultation today. Enjoy smooth, clean, and reliable painting technical services with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
              { label: t("Services"), href: "/services" },
              { label: t("Masonry Work"), href: "/services/masonry-work" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL MASONRY & CIVIL WORK SERVICES")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Reliable Masonry, Brickwork, Plastering & Tile Installation Services")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Strong construction starts with quality masonry work. Whether you're renovating a home, repairing damaged walls, installing new tiles, or building partition walls, professional workmanship is essential for long-lasting results.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide complete masonry and civil maintenance services across Dubai for residential and commercial properties. Our experienced masons deliver precise workmanship using quality materials to ensure every project is durable, safe, and finished to the highest standards.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("From minor repairs to complete renovation work, we help improve the strength, appearance, and value of your property.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/masonry.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Trusted Masonry & Civil Work Specialists")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Skilled & Experienced Masons"), desc: t("Our team has extensive experience handling all types of masonry repairs, plastering, tile work, and civil maintenance projects."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("Quality Workmanship"), desc: t("We pay attention to every detail to ensure smooth finishes, accurate alignment, and long-lasting construction."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("Premium Materials Only"), desc: t("We use quality cement, blocks, adhesives, grout, and finishing materials for durable and safe civil results."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Affordable & Transparent Pricing"), desc: t("Receive clear, upfront quotations with no hidden charges before any masonry or concrete work begins."), icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("On-Time Project Completion"), desc: t("We complete masonry and tile installations efficiently while maintaining the highest quality standards."), icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("Customer Satisfaction"), desc: t("Every project is completed with extreme professionalism, reliability, and customer satisfaction in mind."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Masonry & Civil Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Expertise")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Masonry & Civil Work Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide complete masonry solutions for homes, villas, apartments, offices, retail spaces, and commercial buildings.")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: t("Brick & Block Work"),
                    items: [t("Brick Wall Construction"), t("Block Wall Installation"), t("Boundary Wall Construction"), t("Partition Wall Installation"), t("Wall Extensions")]
                  },
                  {
                    title: t("Plastering Services"),
                    items: [t("Internal Wall Plastering"), t("External Wall Plastering"), t("Ceiling Plaster Repair"), t("Crack Filling & Wall Repair"), t("Surface Leveling")]
                  },
                  {
                    title: t("Tile Install & Repair"),
                    items: [t("Floor Tile Installation"), t("Wall Tile Installation"), t("Tile Replacement"), t("Bathroom Tile Install"), t("Kitchen Tile Install"), t("Tile Grouting & Finishing")]
                  },
                  {
                    title: t("Concrete Works"),
                    items: [t("Concrete Repair"), t("Floor Screeding"), t("Concrete Slab Repair"), t("Cement Construction"), t("Minor Civil Repairs")]
                  },
                  {
                    title: t("Renovation Services"),
                    items: [t("Bathroom Renovation"), t("Kitchen Renovation"), t("Wall Alterations"), t("Door & Window Adjustments"), t("Structural Repair (Non-Major)")]
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
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Masonry Problems We Solve")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Civil Maintenance & Structural Repair")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Over time, walls, plaster, flooring, and concrete surfaces develop cracks and moisture damage. Our team regularly repairs and restores these issues efficiently.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("Cracked Walls"), t("Damaged Plaster"), t("Broken Floor Tiles"), t("Loose Tiles"),
                    t("Wall Surface Damage"), t("Water-Damaged Walls"), t("Uneven Floors"), t("Cement Cracks"),
                    t("Boundary Wall Damage"), t("Ceiling Cracks"), t("Tile Grout Damage"), t("Small Civil Repairs"),
                    t("Holes in Concrete"), t("Plaster Peeling"), t("Screed Leveling Issues"), t("Alteration Prep Work")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-700 cursor-default">
                      🧱 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Masonry Solutions")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We proudly serve all commercial, retail, residential, and corporate properties in Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Masonry Service Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Process")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Masonry Service Process")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: t("1"), title: t("Site Inspection"), desc: t("We assess the project and understand your detailed requirements.") },
                  { step: t("2"), title: t("Material Planning"), desc: t("We recommend suitable high-quality materials based on budget.") },
                  { step: t("3"), title: t("Surface Prep"), desc: t("Existing surfaces are cleaned, repaired, and leveled for base prep.") },
                  { step: t("4"), title: t("Execution"), desc: t("Skilled masons complete the brick, plaster, or tile work with precision.") },
                  { step: t("5"), title: t("Quality Check"), desc: t("We inspect every detail to ensure a clean, smooth, and durable finish.") },
                  { step: t("6"), title: t("Cleaning & Handover"), desc: t("The work area is cleaned thoroughly before final handover.") }
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
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("Do you provide wall repair services?"), a: t("Yes. We repair cracked, damaged, water-affected, and crumbling walls using professional repair methods and quality fillers.") },
                  { q: t("Can you install floor and wall tiles?"), a: t("Absolutely. We install, replace, and repair all types of ceramic, porcelain, marble, granite, and stone tiles.") },
                  { q: t("Do you provide plastering services?"), a: t("Yes. We offer complete internal and external plastering and wall leveling for residential and commercial properties.") },
                  { q: t("Can you build partition walls?"), a: t("Yes. We construct brick and block partition walls for room extensions, divisions, or shop separations.") },
                  { q: t("Do you handle small renovation projects?"), a: t("Yes. We provide bathroom renovations, kitchen modifications, wall alterations, screeding, and general civil maintenance.") },
                  { q: t("Do you work on commercial properties?"), a: t("Yes. We serve offices, retail shops, hotels, restaurants, warehouses, and commercial buildings across Dubai.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Build or Repair Your Walls?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your masonry or civil work consultation today. Enjoy precise, reliable, and solid civil services with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
              { label: t("Services"), href: "/services" },
              { label: t("Carpentry Work"), href: "/services/carpentry-work" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL CARPENTRY WORK SERVICES IN DUBAI")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Custom Carpentry, Woodwork & Interior Fit-Out Solutions")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Quality carpentry is more than just building furniture—it's about creating practical, stylish, and durable spaces that enhance your home or business. Whether you need custom cabinets, wardrobes, office furniture, wooden flooring, or complete interior woodwork, expert craftsmanship makes all the difference.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide professional carpentry services across Dubai for residential and commercial properties. Our experienced carpenters combine skilled workmanship with modern design to deliver customized woodwork solutions that match your space, style, and budget.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("From small repairs to complete fit-out projects, we ensure every detail is crafted with precision, using quality materials and professional finishing techniques.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/carpentry.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Skilled Carpentry Professionals You Can Trust")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Experienced Craftsmen"), desc: t("Our carpenters have years of experience handling custom furniture, interior woodwork, renovations, and commercial fit-out projects."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("Custom-Made Solutions"), desc: t("Every project is designed according to your space, measurements, style preferences, and functional requirements."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("Premium Materials Only"), desc: t("We use high-quality wood, MDF, plywood, laminates, veneers, and durable hardware for long-lasting performance."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Transparent Pricing"), desc: t("Receive a detailed, upfront quotation with no hidden charges before any carpentry fabrication or repair begins."), icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("Timely Project Completion"), desc: t("We complete custom furniture fabrications and onsite installations efficiently within the agreed timeline."), icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("Customer Satisfaction"), desc: t("We focus heavily on quality, meticulous attention to detail, and delivering carpentry results that exceed expectations."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Carpentry Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Expertise")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Carpentry Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide complete residential and commercial carpentry solutions throughout Dubai.")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: t("Custom Furniture & Fit-Out"),
                    items: [t("Custom Wardrobes"), t("TV Wall Units & Stands"), t("Study Tables & Desks"), t("Storage Cabinets"), t("Shoe Cabinets & Shelving"), t("Bookshelves & Display Units")]
                  },
                  {
                    title: t("Kitchen Carpentry"),
                    items: [t("Cabinet Installation"), t("Custom Kitchen Cabinets"), t("Smart Storage Solutions"), t("Cabinet Door Replacement"), t("Cabinet Repairs & Hinges")]
                  },
                  {
                    title: t("Doors, Partitions & Panels"),
                    items: [t("Wooden Door Installation"), t("Door Frame Fitting"), t("Sliding Door Installation"), t("Wooden Partitions"), t("Wall Paneling & Cladding"), t("Decorative Wood Panels")]
                  },
                  {
                    title: t("Flooring & Furniture Repairs"),
                    items: [t("Wooden Flooring Install"), t("Laminate & Vinyl Flooring"), t("Skirting Installation"), t("Wardrobe & Drawer Repair"), t("Door Realignment"), t("Hinge & Handle Replacement")]
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
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Custom Carpentry Solutions")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Custom Furniture Design & Fit-Out Specialties")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Our team specializes in designing, fabricating, and restoring premium woodwork. We handle projects of all scales with detailed material planning and smooth finishes.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("Custom Furniture Design"), t("Wardrobe Installation"), t("Kitchen Cabinet Installation"), t("Wooden Door Installation"),
                    t("Office Furniture Setup"), t("TV Wall Units"), t("Shelving Systems"), t("Storage Solutions"),
                    t("Wooden Flooring"), t("Wall Paneling"), t("Wooden Partitions"), t("Reception Counters"),
                    t("Display Units"), t("Shop Fit-Out"), t("Office Renovation"), t("Furniture Repair & Restoration")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-700 cursor-default">
                      🪚 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Carpentry")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We serve all corporate, retail, residential, and educational sectors across Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Carpentry Service Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Workflow")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Carpentry Service Process")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: t("1"), title: t("Consultation & Visit"), desc: t("We visit your property to understand requirements and take measurements.") },
                  { step: t("2"), title: t("Design & Planning"), desc: t("Discuss layouts, materials, colors, and functionalities for the best option.") },
                  { step: t("3"), title: t("Quotation & Approval"), desc: t("Receive a transparent and detailed quote before fabrications begin.") },
                  { step: t("4"), title: t("Fabrication & Install"), desc: t("Skilled carpenters manufacture and install every component with precision.") },
                  { step: t("5"), title: t("Final Inspection"), desc: t("Carefully inspect every detail to ensure quality and flawless finish.") },
                  { step: t("6"), title: t("Clean-Up & Handover"), desc: t("Area is cleaned and project handed over after your final approval.") }
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
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("Do you build custom furniture?"), a: t("Yes. We design and build custom wardrobes, TV units, study tables, kitchen cabinets, and corporate display units according to your sizing, layout, material, and finishing preferences.") },
                  { q: t("Do you install kitchen cabinets?"), a: t("Absolutely. We provide complete cabinet layouts, customized installation, shelf additions, door replacement, and hinge realignments.") },
                  { q: t("Can you repair damaged furniture?"), a: t("Yes. We repair loose hinge alignments, broken drawer runners, cracked wooden surfaces, doors, and sagged wardrobes.") },
                  { q: t("Do you provide office fit-out services?"), a: t("Yes. We handle office furniture, workstations, partitions, reception counters, shelving, and complete interior fit-out projects.") },
                  { q: t("Which materials do you use?"), a: t("We work with solid wood, commercial plywood, MDF, acrylic sheets, laminates, natural veneers, and premium hardware depending on project requirements.") },
                  { q: t("Do you provide site visits before starting work?"), a: t("Yes. Our team visits the site to inspect, measure, and align requirements to offer a detailed quote before starting.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Bring Your Ideas to Life?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your carpentry site visit or consultation today. Enjoy custom design, premium wood, and reliable fit-outs with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
              { label: t("Services"), href: "/services" },
              { label: t("Steel Fixing"), href: "/services/steel-fixing" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL STEEL FIXING SERVICES IN DUBAI")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Reliable Reinforcement Steel Fixing & Structural Support Solutions")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Steel fixing is one of the most important stages of any construction or renovation project. Properly installed reinforcement steel provides the strength, stability, and durability needed to support concrete structures safely and efficiently.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide professional steel fixing services across Dubai for residential, commercial, and industrial projects. Our experienced steel fixers work with precision and attention to detail, ensuring every reinforcement structure meets project specifications and industry standards.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Whether you require reinforcement for foundations, slabs, columns, beams, staircases, or structural extensions, our skilled team delivers dependable workmanship and high-quality results.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/steel.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Professional Steel Fixing Experts You Can Trust")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Experienced Steel Fixers"), desc: t("Our skilled team has extensive experience handling reinforcement steel work for projects of all sizes."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("Accurate Installation"), desc: t("We follow approved drawings and reinforcement specifications to ensure precise placement and structural integrity."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("Quality Materials Only"), desc: t("We work with high-quality reinforcement steel and reliable fixing accessories for maximum durability."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Safe Working Practices"), desc: t("Every project is carried out with strict attention to workplace safety and construction standards."), icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("Timely Project Completion"), desc: t("We understand construction schedules and complete work efficiently without compromising quality."), icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("Customer Satisfaction"), desc: t("We focus on delivering reliable workmanship, transparent communication, and long-lasting results."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Steel Fixing Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Expertise")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Steel Fixing Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide complete reinforcement steel solutions for residential, commercial, and industrial construction projects.")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: t("Reinforcement Steel"),
                    items: [t("Foundation Steel Fixing"), t("Footing Reinforcement"), t("Slab Reinforcement"), t("Beam Reinforcement"), t("Column Reinforcement"), t("Roof Slab Reinforcement")]
                  },
                  {
                    title: t("Structural Steel"),
                    items: [t("Retaining Wall Reinforcement"), t("Staircase Reinforcement"), t("Concrete Frame Reinforcement"), t("Structural Extension Work"), t("Reinforced Concrete Prep")]
                  },
                  {
                    title: t("Steel Fabrication"),
                    items: [t("Steel Cutting & Tying"), t("Steel Bending Work"), t("Reinforcement Assembly"), t("Bar Placement Alignment"), t("Accurate Spacer Checks")]
                  },
                  {
                    title: t("Civil Support Services"),
                    items: [t("Villa Structural Fixing"), t("Building Reinforcement"), t("Boundary Wall Reinforcement"), t("Floor Mesh Reinforcement"), t("Concrete Preparation Tying")]
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
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Solutions We Provide")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Reinforcement Solutions We Provide")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Steel reinforcement forms the backbone of concrete structures. We install slabs, walls, columns, staircases, and extensions safely.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("Foundation Reinforcement"), t("Beam Steel Fixing"), t("Column Steel Fixing"), t("Roof Reinforcement"),
                    t("Concrete Slab Reinforcement"), t("Staircase Steel Work"), t("Wall Reinforcement"), t("Structural Extensions"),
                    t("Retaining Wall Reinforcement"), t("Villa Construction Steel"), t("Building Structural Steel"), t("Industrial Projects")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-700 cursor-default">
                      ⛓️ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Properties")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We serve all construction sites, extensions, and commercial properties in Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Steel Fixing Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Process")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Steel Fixing Process")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { step: t("1"), title: t("Project Assessment"), desc: t("We review detailed project drawings and inspect site conditions before starting.") },
                  { step: t("2"), title: t("Material Preparation"), desc: t("Steel reinforcement bars are measured, cut, and bent according to design specifications.") },
                  { step: t("3"), title: t("Reinforcement Installation"), desc: t("Our skilled steel fixers accurately tie and position reinforcement bars securely.") },
                  { step: t("4"), title: t("Quality Inspection"), desc: t("Every section is checked for spacing, alignment, tying, and structural accuracy.") },
                  { step: t("5"), title: t("Final Approval"), desc: t("The completed reinforcement framework is approved and prepared for concrete pouring.") }
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
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("What is steel fixing?"), a: t("Steel fixing is the process of positioning, tying, and securing steel reinforcement bars (rebar) inside concrete forms before pouring concrete, which provides the structural strength.") },
                  { q: t("Do you provide steel fixing for residential projects?"), a: t("Yes. We offer complete reinforcement fixing services for villas, townhouses, extensions, and custom residential foundations.") },
                  { q: t("Can you work on commercial construction sites?"), a: t("Absolutely. We carry out reinforcement tying and structural extensions for commercial buildings, offices, retail shops, and warehouses.") },
                  { q: t("Do you follow engineering drawings?"), a: t("Yes. Our team strictly follows the structural engineering drawings, bar schedules, concrete cover specs, and spacing details.") },
                  { q: t("Do you provide reinforcement for slabs, beams, and columns?"), a: t("Yes. We reinforce foundations, columns, beam grids, roof slabs, retaining walls, concrete frames, and structural stairs.") },
                  { q: t("Do you provide site inspections?"), a: t("Yes. We perform pre-inspections to check spacing and alignments before pouring concrete to guarantee a safe build.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Build Strong Foundations?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your steel fixing site visit or consultation today. Enjoy high-quality reinforcement, precise placement, and reliable civil structures with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
              { label: t("Services"), href: "/services" },
              { label: t("Interior Designing"), href: "/services/interior-designing" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL INTERIOR DESIGNING SERVICES IN DUBAI")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Creative Interior Design & Space Transformation Solutions")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Every space has the potential to be beautiful, functional, and inspiring. Whether you're designing a new home, renovating an office, or upgrading a commercial property, the right interior design creates comfort, improves functionality, and reflects your unique style.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide professional interior designing services across Dubai, offering complete design, renovation, and fit-out solutions for residential and commercial properties. Our experienced designers combine creativity with practical planning to transform ordinary spaces into elegant, functional environments that suit your lifestyle and business needs.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("From concept development to project completion, we focus on quality craftsmanship, premium materials, and attention to every detail.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/interior.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Interior Design Experts You Can Trust")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Creative & Experienced Designers"), desc: t("Our interior designers work closely with clients to create personalized spaces that combine beauty, comfort, and functionality."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("Customized Design Solutions"), desc: t("Every project is tailored to your preferences, budget, and property layout to ensure a unique, personal result."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("End-to-End Management"), desc: t("We handle everything from initial design consultations and material selection to execution and final finishing."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Premium Materials & Finishes"), desc: t("We use high-quality materials, modern finishes, and trusted suppliers to deliver exceptionally long-lasting interiors."), icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("Transparent Pricing"), desc: t("Receive a detailed, itemized quotation with clear pricing before any project preparation or execution begins."), icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("On-Time Project Delivery"), desc: t("We complete interior transformations according to agreed timelines while maintaining the highest quality standards."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Interior Designing Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Expertise")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Interior Designing Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide complete interior design and renovation solutions for homes, offices, and commercial spaces.")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: t("Residential Design"),
                    items: [t("Apartment Interior Design"), t("Villa Interior Design"), t("Bedroom Design & Layouts"), t("Living Room Makeovers"), t("Dining Area Styling"), t("Balcony Landscaping")]
                  },
                  {
                    title: t("Commercial Design"),
                    items: [t("Office Interior Layouts"), t("Retail Shop Design"), t("Restaurant & Café Styling"), t("Salon & Spa Interior Design"), t("Clinic Interior Setups"), t("Hotel & Showroom Designs")]
                  },
                  {
                    title: t("Space & Fit-Out"),
                    items: [t("Space Layout Planning"), t("Complete Interior Renovation"), t("Office Fit-Out Execution"), t("Home Remodeling Solutions"), t("Partition Wall Design"), t("Ceiling Layouts")]
                  },
                  {
                    title: t("Decorative Solutions"),
                    items: [t("Gypsum False Ceilings"), t("Feature Wall Construction"), t("Decorative Wall Panels"), t("Architectural Lighting"), t("Wallpaper Installation"), t("Wooden Wall Cladding")]
                  },
                  {
                    title: t("Custom Furniture"),
                    items: [t("Custom Furniture Crafting"), t("Sleek TV Units"), t("Modular Wardrobes"), t("Kitchen Cabinets"), t("Office Workstations"), t("Smart Storage Solutions")]
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
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Solutions We Offer")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Complete Fit-Out & Renovation Solutions")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("A thoughtfully designed interior improves more than appearance—it enhances comfort, productivity, organization, and overall quality of life.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("Home Interior Design"), t("Office Interior Design"), t("Villa Renovation"), t("Apartment Renovation"),
                    t("Space Planning"), t("Interior Fit-Out"), t("Kitchen Design"), t("Bathroom Remodeling"),
                    t("Ceiling Design"), t("Lighting Design"), t("Feature Walls"), t("Wooden Flooring"),
                    t("Custom Furniture"), t("Wardrobe Design"), t("Office Workstations"), t("Reception Areas"),
                    t("Retail Interiors"), t("Commercial Renovations")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-700 cursor-default">
                      ✨ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Styling")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We serve all residential, retail, corporate, and leisure spaces in Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Salons"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Design Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Workflow")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Interior Design Process")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: t("1"), title: t("Consultation"), desc: t("We discuss your ideas, detailed layout requirements, style preferences, and budget.") },
                  { step: t("2"), title: t("Site Visit"), desc: t("Our design team visits the property to assess the space and take measurements.") },
                  { step: t("3"), title: t("Design Planning"), desc: t("We prepare layout concepts, color schemes, material ideas, and space plans.") },
                  { step: t("4"), title: t("Quote & Approval"), desc: t("We provide an itemized, transparent quotation for fabrication and materials.") },
                  { step: t("5"), title: t("Project Execution"), desc: t("Our skilled team carries out the layout renovations under professional site management.") },
                  { step: t("6"), title: t("Styling & Handover"), desc: t("We complete final styling and inspect details before project handover.") }
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
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("Do you provide complete interior design services?"), a: t("Yes. We offer complete space planning, concept design, renovation, carpentry, and fit-out execution solutions for residential and commercial spaces.") },
                  { q: t("Can you redesign a single room?"), a: "Absolutely. Whether it's one master bedroom, a kitchen remodeling, a reception counter, or an entire commercial layout, we take up projects of all sizes." },
                  { q: t("Do you help select materials and colors?"), a: t("Yes. We guide you in choosing custom color palettes, flooring materials, ceiling designs, wood selections, lighting, and furniture finishes.") },
                  { q: t("Do you manage the entire project?"), a: t("Yes. From consultation, site visits, and quotes, up to execution, custom fabrications, installation, and cleanup, we manage the entire lifecycle.") },
                  { q: t("Do you offer office interior design?"), a: t("Yes. We design and build modern workstations, reception areas, meeting rooms, acoustic glass partitions, and ergonomic commercial layouts.") },
                  { q: t("Can you customize furniture?"), a: t("Yes. We specialize in custom wardrobes, shoe cabinets, TV media units, vanity counters, storage shelves, and office reception desks.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Transform Your Space?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your interior design consultation or site visit today. Create spaces that reflect your style with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
              { label: t("Services"), href: "/services" },
              { label: t("Ceiling & Gypsum"), href: "/services/ceiling-gypsum" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL GYPSUM CEILING & PARTITION SERVICES")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Modern Gypsum Ceiling, Partition & Interior Finishing Solutions")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("A well-designed gypsum ceiling or partition can completely transform the appearance and functionality of any residential or commercial space. Whether you're renovating your home, designing a modern office, or upgrading a retail space, professional gypsum work adds elegance, improves space utilization, and enhances interior aesthetics.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide complete gypsum ceiling and partition services across Dubai. Our experienced team specializes in false ceilings, decorative ceiling designs, gypsum partitions, office layouts, and custom interior finishing using premium materials and modern installation techniques.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("From simple ceiling installations to complete interior fit-out projects, we deliver durable craftsmanship with exceptional attention to detail.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/gypsum.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Dubai's Trusted Gypsum Ceiling Specialists")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Experienced Installation Team"), desc: t("Our skilled gypsum specialists have extensive experience handling residential, commercial, and office ceiling projects."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("Modern Custom Designs"), desc: t("We create customized ceiling and partition designs that perfectly match your interior style and project requirements."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("Premium Quality Materials"), desc: t("We use durable gypsum boards, quality framing materials, and reliable finishing products to ensure long-lasting performance."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Clean & Professional Installation"), desc: t("Every project is completed with careful planning, precise installation, and a clean, safe working environment."), icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("Affordable & Transparent Pricing"), desc: t("Receive detailed itemized quotations with clear, honest pricing and absolutely no hidden costs."), icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("Customer Satisfaction"), desc: t("Our goal is to deliver stylish, beautiful interiors with professional workmanship and highly reliable project delivery."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Gypsum Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Expertise")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Gypsum Ceiling & Partition Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide complete gypsum solutions for homes, offices, villas, apartments, retail shops, and commercial buildings.")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: t("Ceiling Installation"),
                    items: [t("False Ceiling Installation"), t("Suspended Ceiling Systems"), t("Decorative Ceiling Designs"), t("Cove Ceiling Design"), t("Multi-Level Ceiling Layouts"), t("Modern Ceiling Concepts")]
                  },
                  {
                    title: t("Partition Services"),
                    items: [t("Office Gypsum Partitions"), t("Residential Room Dividers"), t("Meeting Room Walls"), t("Retail Shop Dividers"), t("Privacy Partition Walls"), t("Sound-Reducing Partitions")]
                  },
                  {
                    title: t("Interior Finishing"),
                    items: [t("Ceiling Lighting Preparation"), t("LED Cove Lighting Design"), t("Decorative Wall Panels"), t("Feature Ceiling Layouts"), t("Bulkhead Ceiling Install"), t("Gypsum Board Cornices")]
                  },
                  {
                    title: t("Repair & Maintenance"),
                    items: [t("Ceiling Crack Repair"), t("Water Damage Remediation"), t("Gypsum Board Replacement"), t("Ceiling Leveling & Plastering"), t("Partition Wall Repair"), t("Surface Joint Finishing")]
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
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Solutions We Offer")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Modern Gypsum Ceilings & Custom Partitions")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("False ceilings neatly hide wiring, ductwork, and lighting installations for a cleaner, modern finish while partitions divide spaces efficiently.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("False Ceiling Installation"), t("Decorative Ceiling Design"), t("Gypsum Partition Walls"), t("Office Partitions"),
                    t("Commercial Ceiling Systems"), t("Villa Ceiling Design"), t("Apartment Ceiling Installation"), t("Gypsum Bulkheads"),
                    t("TV Feature Walls"), t("Ceiling Renovation"), t("Ceiling Repair"), t("LED Ceiling Preparation"),
                    t("Sound-Reducing Partitions"), t("Interior Ceiling Finishing"), t("Custom Gypsum Designs")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-700 cursor-default">
                      📐 {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Sectors")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We serve all residential, office, and commercial properties in Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Salons"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Gypsum Work Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Installation Steps")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Gypsum Work Process")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: t("1"), title: t("Consultation"), desc: t("We visit your property to understand design preferences and measure the space.") },
                  { step: t("2"), title: t("Design & Layout"), desc: t("We prepare structural frame layouts and select appropriate gypsum materials.") },
                  { step: t("3"), title: t("Material Prep"), desc: t("Premium gypsum boards, metal frames, and accessories are cut and prepared.") },
                  { step: t("4"), title: t("Installation"), desc: t("Our technicians build the framing structure and mount panels with precise alignments.") },
                  { step: t("5"), title: t("Finishing Work"), desc: t("Joint filling, tape mesh application, sanding, and plaster leveling are completed.") },
                  { step: t("6"), title: t("Final Handover"), desc: t("We complete meticulous styling checks and clean up the work area before handover.") }
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
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("Do you install false ceilings?"), a: t("Yes. We offer complete false ceiling systems (both decorative gypsum boards and ceiling tile grid structures) for residential and commercial buildings.") },
                  { q: t("Can you design custom gypsum ceilings?"), a: t("Absolutely. We customize modern LED cove layouts, multi-level gypsum bulkheads, borders, and contemporary designs.") },
                  { q: t("Do you install office partitions?"), a: t("Yes. We install sound-reducing gypsum partition walls for office cabins, store partitions, clinics, and meeting rooms.") },
                  { q: t("Can you repair damaged gypsum ceilings?"), a: t("Yes. We repair cracks, restore sagged frames, replace sections affected by water leaks, and plaster uneven surfaces.") },
                  { q: t("Do you provide complete interior finishing?"), a: t("Yes. We offer gypsum ceilings, partitions, decorative wall features, custom lighting preparation, and support services.") },
                  { q: t("Do you provide site inspections?"), a: t("Yes. Our team inspects your property, takes exact measurements, explains layouts, and details a quote before commencing work.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Transform Your Ceilings & Partitions?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your false ceiling consultation or site visit today. Enjoy smooth, durable, and modern gypsum finishing with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isHandymanServices = slug === "handyman-services";

  if (isHandymanServices) {
    return (
      <>
        <Navbar />
        <main className="bg-white">
          <PageBanner
            title="Handyman Services"
            breadcrumb={[
              { label: t("Services"), href: "/services" },
              { label: t("Handyman Services"), href: "/services/handyman-services" }
            ]}
          />

          {/* Section 1: Overview & Hero Image (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 xl:col-span-7 space-y-6">
                  <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm px-3 py-1 rounded-full bg-blue-50 border border-blue-100">{t("PROFESSIONAL HANDYMAN SERVICES IN DUBAI")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)] tracking-tight">{t("Reliable Home Maintenance & Installation Solutions by OsumFix")}</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Every home and workplace requires regular maintenance, repairs, and installations to remain functional, comfortable, and well-organized. From mounting a TV and assembling furniture to installing shelves, curtains, mirrors, and fixtures, small tasks can quickly become time-consuming without the right tools and expertise.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t("At <span class=\"font-semibold text-[var(--primary)]\">OsumFix</span>, we provide professional handyman services across Dubai for residential and commercial properties. Our skilled technicians handle a wide range of repair, installation, and maintenance tasks with precision, efficiency, and attention to detail.")}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{t("Whether you are moving into a new property, upgrading your interiors, or simply tackling your maintenance checklist, OsumFix is your trusted partner for hassle-free handyman solutions.")}</p>
                </div>
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200 group">
                    <Image src={t("/images/services/handyman.png")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt={t("Service Hero Image")} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why Choose Us (Light Blue-Grey Background) */}
          <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Why OsumFix")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Why Choose OsumFix?")}</h2>
                <p className="text-slate-500 mt-4">{t("Your Trusted Handyman Service Provider in Dubai")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t("Skilled & Experienced Technicians"), desc: t("Our handyman team is trained to handle a wide variety of installation, repair, and maintenance tasks professionally and safely."), icon: <Wrench size={28} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
                  { title: t("One Team for Multiple Jobs"), desc: t("Save time and effort by hiring a single team to complete several maintenance tasks during one single visit."), icon: <Sparkles size={28} className="text-white" />, gradient: "from-cyan-500 to-blue-600" },
                  { title: t("Professional Tools & Equipment"), desc: t("We arrive fully equipped with all the necessary tools and hardware to complete jobs efficiently on the first attempt."), icon: <Shield size={28} className="text-white" />, gradient: "from-teal-500 to-emerald-600" },
                  { title: t("Clean & Organized Work"), desc: t("We respect your property and always ensure the work area is cleaned thoroughly before final project completion."), icon: <Layers size={28} className="text-white" />, gradient: "from-purple-500 to-indigo-600" },
                  { title: t("Transparent Pricing"), desc: t("No hidden fees. We provide clear, itemized quotations detailing costs before any work begins."), icon: <Clock size={28} className="text-white" />, gradient: "from-pink-500 to-rose-600" },
                  { title: t("Fast Response & Reliable Service"), desc: t("We complete tasks efficiently while maintaining high-quality workmanship and flexible scheduling."), icon: <CheckCircle2 size={28} className="text-white" />, gradient: "from-emerald-500 to-teal-600" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-none bg-white border border-[var(--primary)] shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-none bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center mb-6 text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Our Handyman Services (White Background) */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Expertise")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Handyman Services")}</h2>
                <p className="text-slate-500 mt-4">{t("We provide a comprehensive range of handyman solutions for homes, apartments, villas, offices, and commercial properties.")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: t("Mounting & Installation"),
                    items: [t("TV Wall Mounting"), t("Mirror Installation"), t("Picture & Artwork Hanging"), t("Curtain & Blind Installation"), t("Shelf Installation"), t("Wall Bracket Installation"), t("Whiteboard & Notice Board Install")]
                  },
                  {
                    title: t("Furniture Assembly"),
                    items: [t("IKEA Furniture Assembly"), t("Office Workstation Assembly"), t("Bed & Wardrobe Assembly"), t("Cabinet Installation"), t("Desk & Storage Unit Assembly"), t("Furniture Disassembly")]
                  },
                  {
                    title: t("Home & Carpentry Repairs"),
                    items: [t("Door Handle Repair"), t("Lock Replacement"), t("Cabinet Door & Drawer Repair"), t("Minor Wall Plaster Repairs"), t("Silicone & Grout Replacement"), t("Small Carpentry Repairs")]
                  },
                  {
                    title: t("Electrical & Plumbing"),
                    items: [t("Light Fixture Installation"), t("Ceiling Fan Installation"), t("Smoke Detector Mounts"), t("Switch & Socket Replacement"), t("Shower Head & Faucet Replace"), t("Minor Drain Assistance")]
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

          {/* Section 4: Most Popular Handyman Jobs (Dark Theme Accent block) */}
          <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[var(--secondary)] font-bold uppercase tracking-wider text-xs">{t("Popular Jobs")}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--dark)]">{t("Most Popular Handyman Jobs We Handle")}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("Moving in or moving out? We handle TV installations, mirror hanging, curtain rods, and wall hole filling so you don't have to worry about tools.")}</p>
                </div>
                <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                  {[
                    t("TV Mounting"), t("Curtain Installation"), t("Mirror Hanging"), t("Furniture Assembly"),
                    t("Shelf Installation"), t("Door Lock Repairs"), t("Wall Art Installation"), t("Ceiling Fan Installation"),
                    t("Cabinet Adjustments"), t("Appliance Connections"), t("Wall Bracket Installation"), t("Silicone Replacement"),
                    t("Minor Plumbing Repairs"), t("Home Maintenance Tasks"), t("Office Maintenance Jobs")
                  ].map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-700 cursor-default">
                      🛠️ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200" />

              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[var(--dark)]">{t("Residential & Commercial Handyman")}</h3>
                  <p className="text-slate-500 text-sm mt-3">{t("We serve all homes, offices, retail spaces, and clinics in Dubai:")}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[t("Apartments"), t("Villas"), t("Townhouses"), t("Offices"), t("Restaurants & Cafes"), t("Retail Shops"), t("Warehouses"), t("Hotels"), t("Clinics"), t("Salons"), t("Schools"), t("Commercial Buildings")].map((sec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl text-center hover:border-[var(--primary)]/30 hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-slate-700">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Handyman Process (Slate-50 Background) */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("Our Service Process")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Our Handyman Service Process")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: t("1"), title: t("Book Your Service"), desc: t("Contact OsumFix via phone, WhatsApp, or our online inquiry form.") },
                  { step: t("2"), title: t("Discuss Needs"), desc: t("Tell us about the jobs you need completed and get a quick quote.") },
                  { step: t("3"), title: t("Schedule Visit"), desc: t("Choose a convenient date and time for our handyman team to visit.") },
                  { step: t("4"), title: t("Service Delivery"), desc: t("Our technicians arrive fully equipped and complete tasks efficiently.") },
                  { step: t("5"), title: t("Final Inspection"), desc: t("We review all completed work to ensure quality and satisfaction.") },
                  { step: t("6"), title: t("Clean-Up & Handover"), desc: t("The work area is cleaned and organized before final handover.") }
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
                <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm mb-2 block">{t("FAQ")}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--dark)]">{t("Frequently Asked Questions")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: t("What handyman services do you provide?"), a: t("We offer TV wall mounting, mirror and artwork hanging, curtain and blinds installation, shelves mounting, IKEA furniture assembly, cabinet door realignments, lock replacement, and minor plumbing/electrical repairs.") },
                  { q: t("Do you provide TV mounting services?"), a: t("Yes. We professionally install and mount TVs of all sizes on concrete walls, drywall, or brick walls, ensuring proper bracket alignment and cable management support.") },
                  { q: t("Can you assemble furniture?"), a: t("Absolutely. We assemble IKEA beds, wardrobes, dining sets, study desks, office workstations, shelves, and storage cabinets.") },
                  { q: t("Do you install curtains and blinds?"), a: t("Yes. We mount curtain rods, tracks, roller blinds, Roman blinds, and related window accessories securely.") },
                  { q: t("Can I book multiple jobs in one visit?"), a: t("Yes. Our handyman service is perfect for completing multiple minor maintenance and assembly tasks during a single appointment to save your time.") },
                  { q: t("Do you serve commercial properties?"), a: t("Yes. We handle repairs, mounting, board installations, and general office maintenance for corporate workspaces and commercial buildings in Dubai.") }
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
          {/* Section 9: Explore Other Technical Services (Full-width Horizontal Grid) */}
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">{t("Explore Our Other Services")}</h3>
                <p className="text-slate-500 text-sm mt-3">{t("We are Dubai's trusted one-stop provider for all home and building technical solutions.")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: t("AC Repair & Maintenance"), slug: "ac-work", img: "/images/services/ac_hero.png" },
                  { name: t("Electrical Work"), slug: "electrical-work", img: "/images/services/electrical.png" },
                  { name: t("Plumbing Work"), slug: "plumbing-work", img: "/images/services/plumbing.png" },
                  { name: t("Painting Work"), slug: "painting-work", img: "/images/services/painting.png" },
                  { name: t("Masonry Work"), slug: "masonry-work", img: "/images/services/masonry.png" },
                  { name: t("Carpentry Work"), slug: "carpentry-work", img: "/images/services/carpentry.png" },
                  { name: t("Steel Fixing"), slug: "steel-fixing", img: "/images/services/steel.png" },
                  { name: t("Interior Designing"), slug: "interior-designing", img: "/images/services/interior.png" },
                  { name: t("Ceiling & Gypsum"), slug: "ceiling-gypsum", img: "/images/services/gypsum.png" },
                  { name: t("Handyman Services"), slug: "handyman-services", img: "/images/services/handyman.png" }
                ].filter(s => s.slug !== slug).map((s, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${s.slug}`}
                    className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 sm:p-4 rounded-3xl flex flex-col group transition-all duration-300"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-50 border border-slate-100/50">
                      {/* Using unoptimized for placeholder rendering if image doesn't exist, though Next.js Image is robust */}
                      <Image
                        src={t(s.img)}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={s.name}
                      />
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">{t("Image")}</span>
                      </div>
                    </div>
                    <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                      <h4 className="font-bold text-[var(--dark)] text-sm sm:text-base md:text-lg group-hover:text-[var(--primary)] transition-colors">{s.name}</h4>
                      <span className="text-xs sm:text-sm text-[var(--primary)] font-medium inline-flex items-center mt-1.5">
                        {t("View Service")} <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>



          {/* Call to Action Booking Banner */}
          <section className="py-16 bg-[var(--primary)] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{t("Ready to Clear Your Home Maintenance Checklist?")}</h2>
              <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">{t("Book your handyman site visit or booking appointment today. Enjoy reliable, hassle-free assembly, repairs, and mountings with OsumFix.")}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
                <a href="https://wa.me/971551519540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#1ebd5b] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                  </svg>
                  {t("WhatsApp")}
                </a>
                <Link href="/contact" className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm sm:text-base flex items-center justify-center">
                  Request Callback
                </Link>
                <a href="tel:+971551519540" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center">{t("Call Us")}</a>
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
            { label: t("Services"), href: "/services" },
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
                  <Image src={t("/images/service-detail-placeholder.jpg")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" alt={t("Service Detail Image")} />
                </div>

                <div className="space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold text-[var(--dark)] mb-6">{t("Overview")}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      At OsumFix Technical Services, our {formattedTitle.toLowerCase()} are designed to meet the highest standards of quality and safety. We understand that issues can cause significant disruption to your daily life or business operations. That's why our certified technicians are trained to identify and resolve problems quickly and efficiently.
                    </p>
                    <p className="text-slate-600 leading-relaxed">{t("Whether it's a minor repair, a major installation, or routine maintenance, we use the latest tools and techniques to ensure long-lasting results. We pride ourselves on transparent pricing, clear communication, and leaving your premises clean and tidy after the work is done.")}</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <h3 className="text-2xl font-bold text-[var(--dark)] mb-6">{t("Key Benefits")}</h3>
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
                    <h2 className="text-3xl font-bold text-[var(--dark)] mb-6">{t("Our Process")}</h2>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                      {[
                        { title: t("Inspection & Diagnosis"), desc: t("We thoroughly assess the situation to identify the root cause.") },
                        { title: t("Transparent Quote"), desc: t("You receive a detailed breakdown of costs before any work begins.") },
                        { title: t("Execution"), desc: t("Our technicians perform the work efficiently and safely.") },
                        { title: t("Final Testing"), desc: t("We rigorously test the completed work to ensure everything functions perfectly.") }
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
                  <h3 className="text-xl font-bold text-[var(--dark)] mb-6 border-b pb-4">{t("Other Services")}</h3>
                  <ul className="space-y-4">
                    {[t("AC Work"), t("Electrical Work"), t("Plumbing Work"), t("Painting Work"), t("Masonry Work"), t("Carpentry Work"), t("Steel Fixing"), t("Interior Designing"), t("Ceiling & Gypsum"), t("Handyman Services")].map((s, idx) => {
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
                    <h3 className="text-2xl font-bold mb-4">{t("Need Help Now?")}</h3>
                    <p className="text-slate-300 mb-6 text-sm">{t("Our emergency response team is available 24/7 across Dubai.")}</p>
                    <a href="tel:+971551519540" className="block w-full bg-[var(--primary)] hover:bg-[var(--secondary)] py-3 rounded-full font-bold transition-colors mb-4 flex items-center justify-center gap-2">
                      <Phone size={18} /> 055 1519540 / 056 7910188
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
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.016 14.07 1 11.493 1c-5.448 0-9.876 4.375-9.88 9.8.001 1.77.47 3.5-1.358 5.022l-.768.802 4.062-1.066zm13.11-6.142c-.22-.11-1.302-.642-1.503-.715-.202-.073-.348-.11-.495.11-.147.22-.57.715-.698.86-.128.147-.257.166-.477.056-.22-.11-.93-.342-1.77-1.09-.654-.582-1.096-1.302-1.224-1.523-.128-.22-.014-.34.097-.45.099-.1.22-.256.33-.383.11-.128.146-.22.22-.366.073-.146.037-.274-.018-.383-.056-.11-.495-1.19-.678-1.632-.178-.429-.356-.37-.49-.376-.127-.006-.273-.007-.42-.007-.147 0-.385.056-.587.275-.202.22-.77.752-.77 1.834s.789 2.128.9 2.275c.11.147 1.552 2.37 3.76 3.323.525.226.935.362 1.254.463.527.168 1.008.144 1.387.088.423-.063 1.302-.53 1.486-1.042.183-.513.183-.954.128-1.043-.056-.09-.202-.147-.422-.257z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg">{t("Instant Quote")}</h4>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{t("Have a query or need an instant quote? WhatsApp us directly for quick booking and support.")}</p>
                  <a
                    href="https://wa.me/971551519540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-3 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >{t("Chat on WhatsApp")}</a>
                </div>

                {/* Service Areas Card */}
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-bold text-[var(--dark)] mb-4 border-b pb-4">{t("Areas We Serve")}</h3>
                  <p className="text-slate-600 text-sm mb-4">{t("We provide prompt, professional technical services across Dubai, including:")}</p>
                  <ul className="grid grid-cols-2 gap-2 text-slate-700 font-medium text-xs sm:text-sm">
                    {[t("Dubai Marina"), t("Downtown Dubai"), t("Palm Jumeirah"), t("JLT"), t("Al Barsha"), t("Arabian Ranches"), t("Business Bay"), t("Jumeirah"), t("Meydan"), t("Mirdif")].map((area, idx) => (
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

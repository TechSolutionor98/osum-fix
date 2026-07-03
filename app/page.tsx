"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneCall, Zap, Droplets, Wind, Paintbrush, Hammer, Wrench, Grid, Layout, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import Hero from "@/components/Hero";

const services = [
  {
    title: "AC Work",
    description: "Professional AC installation, maintenance, leak repairs, and deep cleaning to keep your cooling systems running efficiently.",
    slug: "ac-work",
    icon: <Wind size={32} />,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Electrical Work",
    description: "Safe and certified electrical repairs, wiring, fixture installations, and troubleshooting for residential and B2B needs.",
    slug: "electrical-work",
    icon: <Zap size={32} />,
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Plumbing Work",
    description: "Expert leak detection, pipe repair, fixture installations, and drainage solutions by experienced plumbers.",
    slug: "plumbing-work",
    icon: <Droplets size={32} />,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Painting Work",
    description: "Premium interior and exterior wall painting, wallpaper installation, and surface preparation with high-quality finishes.",
    slug: "painting-work",
    icon: <Paintbrush size={32} />,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Masonry Work",
    description: "Professional bricklaying, plastering, tile installation, stone work, and concrete repairs for walls and floors.",
    slug: "masonry-work",
    icon: <Layers size={32} />,
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Carpentry Work",
    description: "Custom wood work, furniture repair, door and cabinet installation, and custom shelving solutions.",
    slug: "carpentry-work",
    icon: <Hammer size={32} />,
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Steel Fixing",
    description: "Accurate steel cutting, bending, and assembly of reinforcing rebar grids for structural concrete foundation work.",
    slug: "steel-fixing",
    icon: <Grid size={32} />,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Interior Designing",
    description: "Custom space planning, theme selection, furniture layouts, and architectural lighting layouts for modern interiors.",
    slug: "interior-designing",
    icon: <Layout size={32} />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Ceiling & Gypsum",
    description: "Modern false ceiling designs, gypsum board partitions, decorative plaster molding, and lighting integrations.",
    slug: "ceiling-gypsum",
    icon: <Layers size={32} />,
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Handyman Services",
    description: "Reliable day-to-day general repairs, mounting, picture hanging, bracket installs, and home maintenance.",
    slug: "handyman-services",
    icon: <Wrench size={32} />,
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Home() {
  const titleCharacters = [
    ...(" Professional Maintenance & Repair ".split("").map(c => ({ char: c, isAccent: false }))),
    ...("Solutions.".split("").map(c => ({ char: c, isAccent: true })))
  ];

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" as any }
    },
  };



  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[550px] flex items-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-slate-900 -z-20"></div>
          {/* Subtle background pattern or gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 to-slate-900/80 -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-2xl text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wider mb-4 border border-white/30 backdrop-blur-sm">
                DUBAI&apos;S PREMIER TECHNICAL SERVICES
              </span>

              <motion.h1
                variants={sentenceVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              >
                <span>OsumFix</span>
                {titleCharacters.map((item, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className={item.isAccent ? "text-[var(--secondary)]" : ""}
                  >
                    {item.char}
                  </motion.span>
                ))}
              </motion.h1>

              <p className="text-sm md:text-base text-slate-200 mb-6 max-w-xl leading-relaxed">
                OsumFix delivers premium technical services for residential and commercial properties across Dubai. Reliable, fast, and guaranteed quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-start">
                <Link
                  href="/services"
                  className="bg-[var(--secondary)] hover:bg-[#009bc2] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg text-center flex items-center justify-center text-sm gap-2"
                >
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-slate-50 text-[var(--dark)] px-6 py-3 rounded-full font-semibold transition-all shadow-lg text-center flex items-center justify-center text-sm gap-2"
                >
                  Contact Us <PhoneCall size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle
                  subtitle="Why Choose OsumFix"
                  title="We Build Trust Through Quality Work"
                  description="With years of experience in the Dubai market, we understand the high standards our clients expect. Our team of certified professionals is dedicated to exceeding those expectations."
                />

                <div className="space-y-6 mt-8">
                  {[
                    "Certified & Experienced Technicians",
                    "24/7 Emergency Support",
                    "Transparent Pricing & No Hidden Fees",
                    "Guaranteed Satisfaction"
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary)] shrink-0">
                        <CheckCircle2 size={24} />
                      </div>
                      <span className="text-lg font-medium text-slate-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href="/about" className="text-[var(--primary)] font-semibold flex items-center gap-2 hover:text-[var(--secondary)] transition-colors">
                    More About Us <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className="relative">
                {/* Image Placeholder */}
                <div className="aspect-[4/5] rounded-2xl bg-slate-200 overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 flex items-center justify-center">
                    <span className="text-slate-400 font-medium">Professional Team Image</span>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-white">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--dark)] text-xl">100%</h4>
                      <p className="text-sm text-slate-500 font-medium">Quality Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle="Our Services"
              title="Comprehensive Maintenance Solutions"
              description="From minor repairs to major installations, we provide a full spectrum of technical services for residential and commercial properties."
              centered
            />

            {/* Timeline Layout */}
            <div className="relative mt-16 max-w-5xl mx-auto">
              {/* Vertical Line for Desktop */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 transform -translate-x-1/2 z-0"></div>

              <div className="space-y-8 md:space-y-12 relative z-10">
                {services.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                      } relative`}
                  >
                    {/* Center Number Marker */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-[var(--primary)] text-white font-bold text-lg shadow-md z-10">
                      {index + 1}
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-[calc(50%-3rem)] relative h-[320px]">
                      {/* Little triangle arrow pointing to timeline */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-slate-100 transform rotate-45 z-10 ${index % 2 === 0
                        ? '-right-2 border-l-0 border-b-0'
                        : '-left-2 border-r-0 border-t-0'
                        }`}></div>

                      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all w-full h-full relative z-20 group overflow-hidden">

                        {/* Default State: Image */}
                        <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white z-10 drop-shadow-md">
                            {service.title}
                          </h3>
                        </div>

                        {/* Hover State: Content Overlay */}
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 md:p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 text-[var(--primary)] flex items-center justify-center shrink-0">
                              {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--dark)]">
                              <span className="md:hidden text-[var(--secondary)] mr-2">{index + 1}.</span>
                              {service.title}
                            </h3>
                          </div>

                          <p className="text-slate-600 mb-6 line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            {service.description}
                          </p>

                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center text-[var(--secondary)] font-medium hover:text-[var(--primary)] transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                          >
                            Read More <ArrowRight size={16} className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle="See Us In Action"
              title="Experience The OsumFix Difference"
              description="Watch how our expert technicians handle complex maintenance challenges with precision and care."
              centered
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 w-full mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative border-4 border-white bg-slate-900"
            >
              <video
                className="w-full aspect-video object-cover pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                poster="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--primary)]"></div>
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need Professional Maintenance Services in Dubai?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experts are ready to solve your technical issues quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[var(--primary)] hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg"
              >
                Get a Free Quote
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

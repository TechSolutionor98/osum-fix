"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Wind, Paintbrush, Hammer, Wrench, Grid, Layout, Layers } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";

interface ServicesProps {
  cms?: any;
}

export default function Services({ cms }: ServicesProps) {
  const t = (val: string) => getCmsVal(cms, val);

  // Define translation strings in the exact top-to-bottom visual layout order:

  // 1. Section headers
  const sectionSubtitle = t("Our Services");
  const sectionTitle = t("Comprehensive Maintenance Solutions");
  const sectionDescription = t("From minor repairs to major installations, we provide a full spectrum of technical services for residential and commercial properties.");

  // 2. Button texts
  const viewAllBtnText = t("View All Services");
  const readMoreText = t("Read More");

  // 3. Services array items
  const services = [
    {
      title: t("AC Work"),
      description: t("Professional AC installation, maintenance, leak repairs, and deep cleaning to keep your cooling systems running efficiently."),
      slug: "ac-work",
      icon: <Wind size={32} />,
      image: t("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Electrical Work"),
      description: t("Safe and certified electrical repairs, wiring, fixture installations, and troubleshooting for residential and B2B needs."),
      slug: "electrical-work",
      icon: <Zap size={32} />,
      image: t("https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Plumbing Work"),
      description: t("Expert leak detection, pipe repair, fixture installations, and drainage solutions by experienced plumbers."),
      slug: "plumbing-work",
      icon: <Droplets size={32} />,
      image: t("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Painting Work"),
      description: t("Premium interior and exterior wall painting, wallpaper installation, and surface preparation with high-quality finishes."),
      slug: "painting-work",
      icon: <Paintbrush size={32} />,
      image: t("https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Masonry Work"),
      description: t("Professional bricklaying, plastering, tile installation, stone work, and concrete repairs for walls and floors."),
      slug: "masonry-work",
      icon: <Layers size={32} />,
      image: t("https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Carpentry Work"),
      description: t("Custom wood work, furniture repair, door and cabinet installation, and custom shelving solutions."),
      slug: "carpentry-work",
      icon: <Hammer size={32} />,
      image: t("https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Steel Fixing"),
      description: t("Accurate steel cutting, bending, and assembly of reinforcing rebar grids for structural concrete foundation work."),
      slug: "steel-fixing",
      icon: <Grid size={32} />,
      image: t("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Interior Designing"),
      description: t("Custom space planning, theme selection, furniture layouts, and architectural lighting layouts for modern interiors."),
      slug: "interior-designing",
      icon: <Layout size={32} />,
      image: t("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Ceiling & Gypsum"),
      description: t("Modern false ceiling designs, gypsum board partitions, decorative plaster molding, and lighting integrations."),
      slug: "ceiling-gypsum",
      icon: <Layers size={32} />,
      image: t("https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop")
    },
    {
      title: t("Handyman Services"),
      description: t("Reliable day-to-day general repairs, mounting, picture hanging, bracket installs, and home maintenance."),
      slug: "handyman-services",
      icon: <Wrench size={32} />,
      image: t("https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=800&auto=format&fit=crop")
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={sectionSubtitle}
          title={sectionTitle}
          description={sectionDescription}
          centered
        />

        {/* Timeline Layout */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-8 md:space-y-12 relative z-10">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                {/* Center Number Marker */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-[var(--primary)] text-white font-bold text-lg shadow-md z-10">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-3rem)] relative h-[320px]">
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-slate-100 transform rotate-45 z-10 ${
                    index % 2 === 0
                      ? "-right-2 border-l-0 border-b-0"
                      : "-left-2 border-r-0 border-t-0"
                  }`}></div>

                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all w-full h-full relative z-20 group overflow-hidden">
                    {/* Default State: Image with dynamic zoom and blur on hover */}
                    <div className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-0"></div>
                      <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white z-10 drop-shadow-md transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Hover State: Premium Content Dark Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 md:p-8 flex flex-col justify-center text-white">
                      <div className="flex items-center gap-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white/10 text-[var(--accent)] flex items-center justify-center shrink-0 border border-white/10">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          <span className="md:hidden text-[var(--accent)] mr-2">{index + 1}.</span>
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-slate-200 mb-6 text-sm leading-relaxed line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        {service.description}
                      </p>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-[var(--accent)] font-semibold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                      >
                        {readMoreText} <ArrowRight size={16} className="ml-2" />
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
            {viewAllBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Wind, Paintbrush, Hammer, Wrench, Grid, Layout, Layers } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { getCmsVal } from "@/lib/api-helper";
import ServiceCard from "@/components/ServiceCard";

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
      image: t("/images/service-ac.jpg")
    },
    {
      title: t("Electrical Work"),
      description: t("Safe and certified electrical repairs, wiring, fixture installations, and troubleshooting for residential and B2B needs."),
      slug: "electrical-work",
      icon: <Zap size={32} />,
      image: t("/images/service-electrical.jpg")
    },
    {
      title: t("Plumbing Work"),
      description: t("Expert leak detection, pipe repair, fixture installations, and drainage solutions by experienced plumbers."),
      slug: "plumbing-work",
      icon: <Droplets size={32} />,
      image: t("/images/service-plumbing.jpg")
    },
    {
      title: t("Painting Work"),
      description: t("Premium interior and exterior wall painting, wallpaper installation, and surface preparation with high-quality finishes."),
      slug: "painting-work",
      icon: <Paintbrush size={32} />,
      image: t("/images/service-painting.jpg")
    },
    {
      title: t("Masonry Work"),
      description: t("Professional bricklaying, plastering, tile installation, stone work, and concrete repairs for walls and floors."),
      slug: "masonry-work",
      icon: <Layers size={32} />,
      image: t("/images/service-masonry.jpg")
    },
    {
      title: t("Carpentry Work"),
      description: t("Custom wood work, furniture repair, door and cabinet installation, and custom shelving solutions."),
      slug: "carpentry-work",
      icon: <Hammer size={32} />,
      image: t("/images/service-carpentry.jpg")
    },
    {
      title: t("Steel Fixing"),
      description: t("Accurate steel cutting, bending, and assembly of reinforcing rebar grids for structural concrete foundation work."),
      slug: "steel-fixing",
      icon: <Grid size={32} />,
      image: t("/images/service-steel.jpg")
    },
    {
      title: t("Interior Designing"),
      description: t("Custom space planning, theme selection, furniture layouts, and architectural lighting layouts for modern interiors."),
      slug: "interior-designing",
      icon: <Layout size={32} />,
      image: t("/images/service-interior.jpg")
    },
    {
      title: t("Ceiling & Gypsum"),
      description: t("Modern false ceiling designs, gypsum board partitions, decorative plaster molding, and lighting integrations."),
      slug: "ceiling-gypsum",
      icon: <Layers size={32} />,
      image: t("/images/service-ceiling.jpg")
    },
    {
      title: t("Handyman Services"),
      description: t("Reliable day-to-day general repairs, mounting, picture hanging, bracket installs, and home maintenance."),
      slug: "handyman-services",
      icon: <Wrench size={32} />,
      image: t("/images/service-handyman.jpg")
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

        {/* Services Grid (Card Type Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="h-full"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
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

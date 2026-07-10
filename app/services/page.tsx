import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Zap, Droplets, Wind, Paintbrush, Hammer, Wrench, Grid, Layout, Layers } from "lucide-react";
import { getPublishedContent } from "@/lib/cms-service";
import { getCmsVal } from "@/lib/api-helper";

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const cms = await getPublishedContent("/services");
  const t = (val: string) => getCmsVal(cms, val);

  const allServices = [
    {
      title: t("AC Work"),
      description: t("Complete AC servicing, deep cooling coil cleaning, duct disinfection, gas top-ups, and compressor repair."),
      slug: "ac-work",
      icon: <Wind size={24} />,
      features: [t("AC Installation & Repair"), t("Duct Cleaning"), t("Gas Top-ups")],
      image: t("/images/hvac_service.png")
    },
    {
      title: t("Electrical Work"),
      description: t("Expert electrical solutions including safe wiring, DB dressing, fault-finding, and fixtures installation."),
      slug: "electrical-work",
      icon: <Zap size={24} />,
      features: [t("Wiring & Repair"), t("DB Dressing"), t("Fixture Installation")],
      image: t("/images/electrical_service.png")
    },
    {
      title: t("Plumbing Work"),
      description: t("Leak repair, water heater replacement, drainage clearing, and premium sanitary fixtures installation."),
      slug: "plumbing-work",
      icon: <Droplets size={24} />,
      features: [t("Leak Repair"), t("Water Heater Replacement"), t("Drainage Clearing")],
      image: t("/images/plumbing_service.png")
    },
    {
      title: t("Painting Work"),
      description: t("Transform your space with our premium interior and exterior painting services, including specialized waterproofing solutions for durability."),
      slug: "painting-work",
      icon: <Paintbrush size={24} />,
      features: [t("Interior & Exterior"), t("Waterproofing"), t("Wall Finishing")],
      image: t("/images/painting-work.jpg")
    },
    {
      title: t("Masonry Work"),
      description: t("Bricklaying, wall plastering, tile installation, stone cladding, and professional concrete restoration."),
      slug: "masonry-work",
      icon: <Layers size={24} />,
      features: [t("Bricklaying & Plastering"), t("Tile Installation"), t("Concrete Restoration")],
      image: t("/images/masonry-work.jpg")
    },
    {
      title: t("Carpentry Work"),
      description: t("Bespoke wood installations, door repairs, custom shelves construction, cabinet fittings, and lock replacement."),
      slug: "carpentry-work",
      icon: <Hammer size={24} />,
      features: [t("Wood Installations"), t("Door & Cabinet Repairs"), t("Custom Shelving")],
      image: t("/images/carpentry-work.jpg")
    },
    {
      title: t("Steel Fixing"),
      description: t("Professional concrete reinforcement services including steel bar bending, cutting, and grid alignment."),
      slug: "steel-fixing",
      icon: <Grid size={24} />,
      features: [t("Steel Bar Bending"), t("Grid Alignment"), t("Concrete Reinforcement")],
      image: t("/images/steel-fixing.jpg")
    },
    {
      title: t("Interior Designing"),
      description: t("Residential and B2B interior designs, detailed 2D space layouts, mood boards, and lighting selections."),
      slug: "interior-designing",
      icon: <Layout size={24} />,
      features: [t("2D Space Layouts"), t("Mood Boards"), t("Lighting Selections")],
      image: t("/images/interior-designing.jpg")
    },
    {
      title: t("Ceiling & Gypsum"),
      description: t("Beautiful modern false ceiling installations, decorative plaster boards, and partitions for home and office."),
      slug: "ceiling-gypsum",
      icon: <Layers size={24} />,
      features: [t("False Ceiling Installations"), t("Plaster Boards"), t("Partitions")],
      image: t("/images/ceiling-gypsum.jpg")
    },
    {
      title: t("Handyman Services"),
      description: t("Versatile and responsive maintenance solutions for everyday needs. Our technicians are equipped to handle diverse tasks quickly and professionally."),
      slug: "handyman-services",
      icon: <Wrench size={24} />,
      features: [t("General Repairs"), t("Mounting & Fixing"), t("Assembly Work"), t("Minor Fixes")],
      image: t("/images/handyman-services.jpg")
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title={t("Our Services")}
          breadcrumb={[{ label: t("Services"), href: "/services" }]}
        />

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle={t("What We Offer")}
              title={t("Comprehensive Technical Solutions")}
              description={t("Explore our wide range of professional maintenance and installation services tailored for properties in Dubai.")}
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {allServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Zap, Droplets, Wind, Paintbrush, Hammer, Wrench, Grid, Layout, Layers } from "lucide-react";

const allServices = [
  {
    title: "AC Work",
    description: "Complete AC servicing, deep cooling coil cleaning, duct disinfection, gas top-ups, and compressor repair.",
    slug: "ac-work",
    icon: <Wind size={24} />,
    features: ["AC Installation & Repair", "Duct Cleaning", "Gas Top-ups"]
  },
  {
    title: "Electrical Work",
    description: "Expert electrical solutions including safe wiring, DB dressing, fault-finding, and fixtures installation.",
    slug: "electrical-work",
    icon: <Zap size={24} />,
    features: ["Wiring & Repair", "DB Dressing", "Fixture Installation"]
  },
  {
    title: "Plumbing Work",
    description: "Leak repair, water heater replacement, drainage clearing, and premium sanitary fixtures installation.",
    slug: "plumbing-work",
    icon: <Droplets size={24} />,
    features: ["Leak Repair", "Water Heater Replacement", "Drainage Clearing"]
  },
  {
    title: "Painting Work",
    description: "Transform your space with our premium interior and exterior painting services, including specialized waterproofing solutions for durability.",
    slug: "painting-work",
    icon: <Paintbrush size={24} />,
    features: ["Interior & Exterior", "Waterproofing", "Wall Finishing"]
  },
  {
    title: "Masonry Work",
    description: "Bricklaying, wall plastering, tile installation, stone cladding, and professional concrete restoration.",
    slug: "masonry-work",
    icon: <Layers size={24} />,
    features: ["Bricklaying & Plastering", "Tile Installation", "Concrete Restoration"]
  },
  {
    title: "Carpentry Work",
    description: "Bespoke wood installations, door repairs, custom shelves construction, cabinet fittings, and lock replacement.",
    slug: "carpentry-work",
    icon: <Hammer size={24} />,
    features: ["Wood Installations", "Door & Cabinet Repairs", "Custom Shelving"]
  },
  {
    title: "Steel Fixing",
    description: "Professional concrete reinforcement services including steel bar bending, cutting, and grid alignment.",
    slug: "steel-fixing",
    icon: <Grid size={24} />,
    features: ["Steel Bar Bending", "Grid Alignment", "Concrete Reinforcement"]
  },
  {
    title: "Interior Designing",
    description: "Residential and B2B interior designs, detailed 2D space layouts, mood boards, and lighting selections.",
    slug: "interior-designing",
    icon: <Layout size={24} />,
    features: ["2D Space Layouts", "Mood Boards", "Lighting Selections"]
  },
  {
    title: "Ceiling & Gypsum",
    description: "Beautiful modern false ceiling installations, decorative plaster boards, and partitions for home and office.",
    slug: "ceiling-gypsum",
    icon: <Layers size={24} />,
    features: ["False Ceiling Installations", "Plaster Boards", "Partitions"]
  },
  {
    title: "Handyman Services",
    description: "Versatile and responsive maintenance solutions for everyday needs. Our technicians are equipped to handle diverse tasks quickly and professionally.",
    slug: "handyman-services",
    icon: <Wrench size={24} />,
    features: ["General Repairs", "Mounting & Fixing", "Assembly Work", "Minor Fixes"],
    isWide: true
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="Our Services"
          breadcrumb={[{ label: "Services", href: "/services" }]}
        />

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle="What We Offer"
              title="Comprehensive Technical Solutions"
              description="Explore our wide range of professional maintenance and installation services tailored for properties in Dubai."
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

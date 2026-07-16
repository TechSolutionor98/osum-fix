import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesClient from "@/components/ServicesClient";
import CTA from "@/components/Home/CTA";
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
      description: t("Complete AC servicing and repairs"),
      slug: "ac-work",
      icon: <Wind size={20} />,
      categoryFilter: "AC",
      categoryName: t("AC Work"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtOe-BjVJG6zFZwJT4vnmzCr6Snqu1QNyV2M2udO1IChxMllg3y0S2RJxwsI6oJIjp2V-hP4IL1CzCk5v2SNa5Ta6daBuViUm5YkCJ1U3bB8k9lVYJfJdCRiX8p6LDyIKD20LVzDZEDhKirnGwZrqI1Srxh6x0I5M9Sj3Fgf82TvBI3yHFgtQ7eSGK1HznN-tLgnhbpGvIIvzOdV7d-CNh3-Ww1vHK3Q05fLYwIeOBaMsp6v7USfOl-4hkhrxlBxE4TXRX9CxHhwo"
    },
    {
      title: t("Electrical Work"),
      description: t("Safe wiring and fixtures installation"),
      slug: "electrical-work",
      icon: <Zap size={20} />,
      categoryFilter: "Electrical",
      categoryName: t("Electrical"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6BB45MjbJIGJO-dq-5EYcsusZXw-110Y1X6XKCu8G2Pkg9ReW5qPN20lQktN_zLN4nrLG4D0CIzkrdWreAgER7wj4bQv5ppVvdlwX00ay6ICyjklifyP7mW3KyrzDEcVOiqsedPcZj7JNJMzqrEEYrTzoERoa4pI_eUxs5SrfCb8Sb2MArmv8z1SDpfhyCWSsDhgB6MkA8xmYoEn4rDEoIfhuVbGiJBnPf3x2GV97ncHnP0LcQB9zDht_NuzlSHe7p7x-008gW0Y"
    },
    {
      title: t("Plumbing Work"),
      description: t("Leak repair and sanitary fixtures"),
      slug: "plumbing-work",
      icon: <Droplets size={20} />,
      categoryFilter: "Plumbing",
      categoryName: t("Plumbing"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3SQB35WfLAW95bIvUg_lQpCwlP0N_W66oYKlAnJreX1Rv5fCbi0d9DG10RZmQdKQw0tWy9Fm3symAtEe9T6lkXyFTEpyYiUHf8bZbzy15f2oP2zjPop6xBpGgUCFjqDkOIX9og3UW9zeZHFrLj6gf6U4WyPfsbS2z4loAR4xQjlfa_WBnI6hPPmH_LFKNDvNTc3aWO5r38LxHTI__RLtQ4kduSqYW6gFre_myaG6Ve9AMCVFd9UfZM2d8Oeg1CX5WZM2aKhUjNfc"
    },
    {
      title: t("Painting Work"),
      description: t("Premium interior and exterior painting"),
      slug: "painting-work",
      icon: <Paintbrush size={20} />,
      categoryFilter: "Painting",
      categoryName: t("Painting"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPQXvTPOs3GPHeUohqEr8bVHDPFoeKTMrf1rnlJLVJRUJpe8WKLvhEyrXaiaTL7Pu1owe-KtrF2rgewjRIsvBwjpmnFiiThAozOorEDVoI6BIIkhPRL0-htwERTdu3PGM_iFwEkFVlN9BfjLWW81S0dBLfQN6Rv8B6g1D3-y9BPzV3ISske6zC_lw8ChSO48yMwSPxWSsC8r5gl8jcdkXu8ldoPF3GIBMPBZdXagMtc676dlHML3X9DMRFL6t250vvRA3zYV3fTSI"
    },
    {
      title: t("Masonry Work"),
      description: t("Bricklaying, plastering, and tiling"),
      slug: "masonry-work",
      icon: <Layers size={20} />,
      categoryFilter: "Masonry",
      categoryName: t("Masonry"),
      image: t("/images/masonry_service_new.png")
    },
    {
      title: t("Carpentry Work"),
      description: t("Bespoke wood installations & repairs"),
      slug: "carpentry-work",
      icon: <Hammer size={20} />,
      categoryFilter: "Carpentry",
      categoryName: t("Carpentry"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1cQdNsBW4hWKimUdhPR846CFdnFBETlrk7qXEPIKihWMaRcZNUsodPyw_pt04D78adLvQHree33sWbTmbgOZGjm9AJrEceEpAuuYBPd8g6MnOwsIPV1cZFhPhcd4WLw-Nqpag-JCg8Gx7LrqVejB0Y5M1VhYi9uP_nOhC49obMHiNCjEvaN3UZRNGNajsXUOMsDD3vmR84eBsLAE4lvZMLKSuvO3AeBnOktsB13UDMsG1_NMcKPSjIE5QeDAH5uztJHON0TMHR58"
    },
    {
      title: t("Steel Fixing"),
      description: t("Concrete reinforcement services"),
      slug: "steel-fixing",
      icon: <Grid size={20} />,
      categoryFilter: "Steel Fixing",
      categoryName: t("Steel Fixing"),
      image: t("/images/steel_fixing_new.png")
    },
    {
      title: t("Interior Designing"),
      description: t("Detailed 2D space layouts & designs"),
      slug: "interior-designing",
      icon: <Layout size={20} />,
      categoryFilter: "Interior",
      categoryName: t("Interior"),
      image: t("/images/interior_design_new.png")
    },
    {
      title: t("Ceiling & Gypsum"),
      description: t("Modern false ceiling installations"),
      slug: "ceiling-gypsum",
      icon: <Layers size={20} />,
      categoryFilter: "Ceiling",
      categoryName: t("Ceiling"),
      image: t("/images/ceiling_gypsum_new.png")
    },
    {
      title: t("Handyman Services"),
      description: t("Responsive maintenance solutions"),
      slug: "handyman-services",
      icon: <Wrench size={20} />,
      categoryFilter: "Handyman",
      categoryName: t("Handyman"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5A0dG2KSYZ707zR5BJhK1erhl3--3abzQwcTvn9lluIypvPyN8QOikB77wV4jwscXMUpwfOf_ADKZyO_NdVQ_OB5TBTeA6l79H8CYyZ4tzkRIqqeqGJ6TGBbNUXDcO6ZzU-d4i2QVTdvCcLqYsPx793g9CkW8SI3kbGCMfJMfMExzA8eVr6SU1_fxdd6YxUDojNFWBU4pE_PUNXuogBnHSkEM823z3XAG_DPcPrE3f-Uea7EXNsIsGYaOpewPBRuFlff-bFNxOqY"
    }
  ];

  const dict = {
    "Our Services": t("Our Services"),
    "Comprehensive technical solutions tailored for premium residences and commercial properties across Dubai. Reliable, certified, and available 24/7.": t("Comprehensive technical solutions tailored for premium residences and commercial properties across Dubai. Reliable, certified, and available 24/7."),
    "All Services": t("All Services"),
    "AC": t("AC"),
    "Electrical": t("Electrical"),
    "Plumbing": t("Plumbing"),
    "Painting": t("Painting"),
    "Masonry": t("Masonry"),
    "Carpentry": t("Carpentry"),
    "Steel Fixing": t("Steel Fixing"),
    "Interior": t("Interior"),
    "Ceiling": t("Ceiling"),
    "Handyman": t("Handyman"),
    "Annual Package": t("Annual Package"),
    "Total Home Care": t("Total Home Care"),
    "Unlimited call-outs and priority response for one low monthly fee. Secure your peace of mind.": t("Unlimited call-outs and priority response for one low monthly fee. Secure your peace of mind."),
    "Learn More": t("Learn More")
  };

  return (
    <>
      <Navbar />
      <main>
        <ServicesClient services={allServices} dict={dict} />
        <CTA cms={cms} />
      </main>
      <Footer />
    </>
  );
}

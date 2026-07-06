import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import WhoWeAre from "@/components/About/WhoWeAre";
import Philosophy from "@/components/About/Philosophy";
import Advantages from "@/components/About/Advantages";
import AboutCta from "@/components/About/AboutCta";
import { getPublishedContent } from "@/lib/cms-service";

export const revalidate = 60; // Revalidate page every 60 seconds

export default async function AboutPage() {
  // Fetch about page CMS sections from database
  const cms = await getPublishedContent("/about");

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-black">
      <Navbar />
      <main>
        <PageBanner
          title="About OsumFix"
          breadcrumb={[{ label: "About Us", href: "/about" }]}
        />
        <WhoWeAre cms={cms} />
        <Philosophy cms={cms} />
        <Advantages cms={cms} />
        <AboutCta cms={cms} />
      </main>
      <Footer />
    </div>
  );
}

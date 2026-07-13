import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import WhoWeAre from "@/components/About/WhoWeAre";
import Stats from "@/components/About/Stats";
import Philosophy from "@/components/About/Philosophy";
import Advantages from "@/components/About/Advantages";
import Team from "@/components/About/Team";
import Commitment from "@/components/About/Commitment";
import CTA from "@/components/Home/CTA";
import { getPublishedContent } from "@/lib/cms-service";

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  // Fetch about page CMS sections from database
  const cms = await getPublishedContent("/about");
  const homeCms = await getPublishedContent("/");

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-black">
      <Navbar />
      <main>
        <PageBanner
          title="About OsumFix"
          breadcrumb={[{ label: "About Us", href: "/about" }]}
        />
        <WhoWeAre cms={cms} />
        <Stats cms={cms} />
        <Philosophy cms={cms} />
        <Commitment cms={cms} />
        <Advantages cms={cms} />
        <Team cms={cms} />
        <CTA cms={homeCms} />
      </main>
      <Footer />
    </div>
  );
}

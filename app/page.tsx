import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeClient from "./HomeClient";
import { getPublishedContent } from "@/lib/cms-service";
import { generateCmsMetadata } from "@/lib/cms-fetch";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return await generateCmsMetadata("/", {
    title: "OsumFix - Premier Home Maintenance & Technical Services in Dubai",
    description: "Expert AC repair, plumbing, electrical, and handyman services in Dubai.",
  });
}

export default async function Home() {
  // Fetch home page CMS sections from database
  const cms = await getPublishedContent("/");

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-black">
      <Navbar />
      <HomeClient cms={cms} />
      <Footer />
    </div>
  );
}

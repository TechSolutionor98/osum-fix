import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeClient from "./HomeClient";
import { getPublishedContent } from "@/lib/cms-service";

export const dynamic = 'force-dynamic';

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

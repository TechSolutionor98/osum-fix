import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import BlogsClient from "./BlogsClient";
import { getBlogsList } from "@/lib/cms-service";
import { generateCmsMetadata } from "@/lib/cms-fetch";

export const revalidate = 60; // Revalidate page every 60 seconds

export async function generateMetadata() {
  return await generateCmsMetadata("/blogs", {
    title: "Blogs & Technical Insights - OsumFix Dubai",
    description: "Read expert tips, home maintenance guides, AC care advice, and property repair insights from OsumFix.",
  });
}

export default async function BlogsPage() {
  const blogs = await getBlogsList(false); // Fetch only published blogs

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageBanner 
          title="Our Blogs & Insights" 
          breadcrumb={[{ label: "Blogs", href: "/blogs" }]} 
        />
        <BlogsClient initialBlogs={blogs} />
      </main>
      <Footer />
    </>
  );
}

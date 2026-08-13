import GalleryClient from "./GalleryClient";
import { generateCmsMetadata } from "@/lib/cms-fetch";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return await generateCmsMetadata("/gallery", {
    title: "Project Gallery - OsumFix Dubai",
    description: "Browse photos and showcase of our recent technical maintenance, AC repair, plumbing, and interior projects in Dubai.",
  });
}

export default function GalleryPage() {
  return <GalleryClient />;
}

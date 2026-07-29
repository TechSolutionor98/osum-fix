import GalleryClient from "./GalleryClient";
import { generateCmsMetadata } from "@/lib/cms-fetch";

export const revalidate = 3600;

export async function generateMetadata() {
  return await generateCmsMetadata("/gallery", {
    title: "Project Gallery - OsumFix Dubai",
    description: "Browse photos and showcase of our recent technical maintenance, AC repair, plumbing, and interior projects in Dubai.",
  });
}

export default function GalleryPage() {
  return <GalleryClient />;
}

import FaqClient from "./FaqClient";
import { generateCmsMetadata } from "@/lib/cms-fetch";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return await generateCmsMetadata("/faq", {
    title: "Frequently Asked Questions - OsumFix Dubai",
    description: "Got questions about AC maintenance, call-out fees, or annual contracts? Find clear answers in our FAQ section.",
  });
}

export default function FAQPage() {
  return <FaqClient />;
}

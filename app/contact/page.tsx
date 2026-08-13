import ContactClient from "./ContactClient";
import { generateCmsMetadata } from "@/lib/cms-fetch";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return await generateCmsMetadata("/contact", {
    title: "Contact Us - OsumFix Maintenance Dubai",
    description: "Get in touch with OsumFix for technical support, maintenance inquiries, and emergency technician visits in Dubai.",
  });
}

export default function ContactPage() {
  return <ContactClient />;
}

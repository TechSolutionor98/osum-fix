import { getPublishedContent } from "@/lib/cms-service";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentLinksView from "./AppointmentLinksView";
import { getDb } from "@/lib/mongodb";

export const metadata = {
  title: 'Book an Appointment - Voltaria Global',
  description: 'Schedule an appointment with Voltaria Global using our easy online booking system.',
};

export const revalidate = 60;

export default async function AppointmentsPublicPage() {
  const navbarCms = await getPublishedContent("[Global] Navbar");
  const footerCms = await getPublishedContent("[Global] Footer");

  let links = [];
  try {
    const db = await getDb();
    const doc = await db.collection('appointments').findOne({ _id: 'appointment_links' });
    links = doc?.links || [];
  } catch (err) {
    console.error('Error fetching appointment links:', err);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] font-sans antialiased text-black">
      {/* Header Navigation */}
      <Navbar cms={navbarCms} />

      <main className="flex-grow pt-10">
        <AppointmentLinksView links={links} />
      </main>

      {/* Footer Branding and Info */}
      <Footer cms={footerCms} />
    </div>
  );
}

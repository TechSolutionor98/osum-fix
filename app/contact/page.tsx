import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] font-sans antialiased text-black">
      {/* Header Navigation */}
      <Navbar />

      {/* Page Header */}
      <div className="text-center pt-20 pb-4">
        <h1 className="text-5xl md:text-7xl font-black text-red-600 tracking-wider uppercase">
          CONTACT US
        </h1>
      </div>

      {/* Contact Section Form */}
      <main className="flex-grow">
        <Contact />
      </main>

      {/* Footer Branding and Info */}
      <Footer />
    </div>
  );
}

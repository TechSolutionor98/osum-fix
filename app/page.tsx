import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-black">
      {/* Header Navigation */}
      <Navbar />
      
      {/* Simplified Core Home Sections */}
      <main className="flex-grow flex flex-col">
        {/* Section 1: Hero Banner */}
        <Hero />
        
        {/* Section 2: Who We Are & Why Voltaria */}
        <About />

        {/* Section 3: What We Offer (Product Portfolio) */}
        <Services />

        {/* Section 4: Get in Touch (Contact Form) */}
        <Suspense fallback={
          <div className="text-center py-24 text-gray-500 font-bold uppercase tracking-widest animate-pulse text-sm">
            Initializing Contact Form...
          </div>
        }>
          <Contact />
        </Suspense>
      </main>
      
      {/* Footer Branding and Info */}
      <Footer />
    </div>
  );
}

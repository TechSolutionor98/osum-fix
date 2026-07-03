import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title="Privacy Policy" 
          breadcrumb={[{ label: "Privacy Policy", href: "/privacy-policy" }]} 
        />
        
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-blue lg:prose-lg">
            <h2>1. Information We Collect</h2>
            <p>
              At OsumFix Technical Services LLC, we collect information you provide directly to us when you request a quote, fill out a contact form, or communicate with us. This may include your name, email address, phone number, and property address in Dubai.
            </p>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our technical services, process transactions, send you technical notices and support messages, and communicate with you about services, offers, and events.
            </p>
            
            <h2>3. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except as necessary to provide our services (e.g., subcontractors for specific technical works) or to comply with the law.
            </p>
            
            <h2>4. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
            </p>
            
            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@osumfix.ae.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

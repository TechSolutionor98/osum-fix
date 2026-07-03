import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner 
          title="Terms & Conditions" 
          breadcrumb={[{ label: "Terms & Conditions", href: "/terms-conditions" }]} 
        />
        
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-blue lg:prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of OsumFix Technical Services LLC, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2>2. Service Scope</h2>
            <p>
              We provide technical services including but not limited to electrical, plumbing, HVAC maintenance, painting, and handyman services across Dubai, UAE. All services are subject to availability and scheduling.
            </p>
            
            <h2>3. Pricing and Payments</h2>
            <p>
              All prices quoted are in UAE Dirhams (AED) unless otherwise stated. Payment is due upon completion of the service unless an Annual Maintenance Contract (AMC) or other prior payment agreement is in place.
            </p>
            
            <h2>4. Warranties and Liability</h2>
            <p>
              OsumFix guarantees the quality of our workmanship. However, we are not liable for pre-existing conditions, misuse of installed equipment, or damages caused by third-party interference after our service completion.
            </p>
            
            <h2>5. Cancellations</h2>
            <p>
              Please notify us at least 24 hours in advance if you need to cancel or reschedule a service appointment to avoid a cancellation fee.
            </p>
            
            <h2>6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates as applied in the Emirate of Dubai.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

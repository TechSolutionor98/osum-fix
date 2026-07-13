import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import QuoteWrapper from "@/components/RequestQuote/QuoteWrapper";
import FAQSection from "@/components/Home/FAQSection";

export const metadata = {
  title: "Request a Quote | OsumFix",
  description: "Get a free, no-obligation estimate for your technical maintenance and repair needs in Dubai. Fast response and competitive pricing.",
};

export const dynamic = 'force-dynamic';

export default async function RequestQuotePage() {

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-black">
      <Navbar />
      <main className="flex-grow">
        <PageBanner
          title="Request a Quote"
          breadcrumb={[{ label: "Request Quote", href: "/request-quote" }]}
        />

        <section className="py-20 md:py-24">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteWrapper />
          </div>
        </section>

        <FAQSection />

      </main>
      <Footer />
    </div>
  );
}

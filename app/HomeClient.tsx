"use client";

import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/Home/Projects"));
const VideoSection = dynamic(() => import("@/components/Home/VideoSection"));
const FAQSection = dynamic(() => import("@/components/Home/FAQSection"));
const CTA = dynamic(() => import("@/components/Home/CTA"));
const HomeQuoteSection = dynamic(() => import("@/components/Home/HomeQuoteSection"));

interface HomeClientProps {
  cms?: any;
}

export default function HomeClient({ cms }: HomeClientProps) {
  return (
    <main>
      <Hero cms={cms} />
      <Services cms={cms} />
      <WhyChooseUs cms={cms} />
      <Projects cms={cms} />
      <VideoSection cms={cms} />
      <FAQSection />
      <CTA cms={cms} />
      <HomeQuoteSection />
    </main>
  );
}

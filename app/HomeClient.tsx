"use client";

import Hero from "@/components/Home/Hero";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Services from "@/components/Home/Services";
import VideoSection from "@/components/Home/VideoSection";
import CTA from "@/components/Home/CTA";

interface HomeClientProps {
  cms?: any;
}

export default function HomeClient({ cms }: HomeClientProps) {
  return (
    <main>
      <Hero cms={cms} />
      <WhyChooseUs cms={cms} />
      <Services cms={cms} />
      <VideoSection cms={cms} />
      <CTA cms={cms} />
    </main>
  );
}

"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 border-b border-gray-100">
      {/* Hero Image Container */}
      <div className="relative w-full aspect-[16/7] md:aspect-[21/9] min-h-[250px] max-h-[450px]">
        <Image
          src="https://res.cloudinary.com/dqghun7oj/image/upload/v1781241977/cms/default/content/vcbtcnuaoh3k8hxyko2u.png"
          alt="Voltaria Modern Solar Panel House"
          fill
          priority
          sizes="100vw"
          className="bg-cover"
        />
        {/* Subtle Overlay to make layout feel premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
      </div>
    </section>
  );
}

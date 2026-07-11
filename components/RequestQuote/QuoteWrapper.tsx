"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import QuoteForm from "./QuoteForm";

// Dynamically import the map component to avoid SSR issues with Leaflet
const LocationSelector = dynamic(() => import("./LocationSelector"), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[400px] bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center">Loading Map...</div>
});

export default function QuoteWrapper() {
  const [address, setAddress] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left Column: Form */}
      <div>
        <QuoteForm address={address} setAddress={setAddress} />
      </div>
      
      {/* Right Column: Location / Map */}
      <div className="lg:sticky lg:top-24 h-full min-h-[500px]">
        <LocationSelector address={address} setAddress={setAddress} />
      </div>
    </div>
  );
}

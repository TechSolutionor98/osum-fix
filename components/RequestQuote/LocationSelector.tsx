"use client";

import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapPin } from "lucide-react";

interface LocationSelectorProps {
  address: string;
  setAddress: (val: string) => void;
}

// Center on Dubai by default
const defaultCenter = { lat: 25.2048, lng: 55.2708 };

function MapEvents({ setMarkerPos, setAddress }: { setMarkerPos: any, setAddress: any }) {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setMarkerPos({ lat, lng });
      
      try {
        // Reverse geocoding using Nominatim
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
        const data = await res.json();
        if (data && data.display_name) {
          setAddress(data.display_name);
        }
      } catch (error) {
        console.error("Geocoding failed", error);
      }
    },
  });
  return null;
}

export default function LocationSelector({ address, setAddress }: LocationSelectorProps) {
  const [markerPos, setMarkerPos] = useState<{ lat: number; lng: number } | null>(null);

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[var(--dark)] flex items-center gap-2">
          <MapPin className="text-[var(--primary)]" />
          Select Service Location
        </h3>
        <p className="text-slate-500 mt-2">
          Click anywhere on the map to automatically fill in your address, or type it in the form.
        </p>
      </div>

      <div className="flex-grow w-full rounded-2xl overflow-hidden border-4 border-slate-50 relative min-h-[400px] z-10">
        <MapContainer 
          center={[defaultCenter.lat, defaultCenter.lng]} 
          zoom={11} 
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents setMarkerPos={setMarkerPos} setAddress={setAddress} />
          {markerPos && <Marker position={[markerPos.lat, markerPos.lng]} />}
        </MapContainer>
      </div>
    </div>
  );
}

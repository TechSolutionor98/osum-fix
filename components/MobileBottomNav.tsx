"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wrench, Info, CalendarCheck, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setMounted(true);
    setHash(window.location.hash);
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (!mounted) return null;

  const isBookNowActive = hash === "#request-quote";

  const tabs = [
    { name: "Home", href: "/", icon: Home, isActive: pathname === "/" && !isBookNowActive },
    { name: "About Us", href: "/about", icon: Info, isActive: pathname === "/about" && !isBookNowActive },
    { name: "Services", href: "/services", icon: Wrench, isActive: pathname?.startsWith("/services") && !isBookNowActive },
    { name: "Book Now", href: "#request-quote", icon: CalendarCheck, isActive: isBookNowActive },
    { name: "Blogs", href: "/blogs", icon: Newspaper, isActive: pathname?.startsWith("/blogs") && !isBookNowActive },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-[9999] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-2">
      <div className="flex justify-between items-center h-16 px-1 relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          
          if (tab.name === "Book Now") {
            return (
              <button 
                key={tab.name} 
                onClick={() => {
                  window.location.hash = "request-quote";
                  window.dispatchEvent(new Event("hashchange"));
                }}
                className="flex flex-col items-center justify-center w-1/5 h-full relative px-1"
                aria-label={tab.name}
              >
                <div className={`transition-all duration-300 flex items-center justify-center ${
                  tab.isActive 
                    ? "bg-[#0B2C3D] text-white w-12 h-12 rounded-[20px] shadow-md" 
                    : "w-8 h-8 bg-transparent text-slate-600"
                }`}>
                  <Icon size={20} className={tab.isActive ? "scale-110 transition-transform" : ""} />
                </div>
                <span className={`text-[9px] font-bold whitespace-nowrap transition-all duration-300 overflow-hidden ${
                  tab.isActive ? "h-0 opacity-0 scale-0 m-0" : "h-4 opacity-100 scale-100 mt-1 text-slate-600"
                }`}>
                  {tab.name}
                </span>
              </button>
            );
          }

          return (
            <Link 
              key={tab.name} 
              href={tab.href} 
              onClick={() => {
                if (window.location.hash === "#request-quote") {
                  window.history.pushState({}, document.title, window.location.pathname + window.location.search);
                  window.dispatchEvent(new Event("hashchange"));
                }
              }}
              className="flex flex-col items-center justify-center w-1/5 h-full relative px-1"
              aria-label={tab.name}
            >
              <div className={`transition-all duration-300 flex items-center justify-center ${
                tab.isActive 
                  ? "bg-[#0B2C3D] text-white w-12 h-12 rounded-[20px] shadow-md" 
                  : "w-8 h-8 bg-transparent text-slate-600"
            }`}>
                <Icon size={20} className={tab.isActive ? "scale-110 transition-transform" : ""} />
              </div>
              <span className={`text-[9px] font-bold whitespace-nowrap transition-all duration-300 overflow-hidden ${
                tab.isActive ? "h-0 opacity-0 scale-0 m-0" : "h-4 opacity-100 scale-100 mt-1 text-slate-600"
              }`}>
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap, Droplets, Wind, Paintbrush, Hammer, Wrench, Grid, Layout, Layers } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    name: "AC Work",
    description: "Complete AC servicing and repairs",
    icon: <Image src="/images/ac-work.gif" alt="AC" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/ac-work"
  },
  {
    name: "Electrical Work",
    description: "Safe wiring and fixtures installation",
    icon: <Image src="/images/electrical-work.gif" alt="Electrical" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/electrical-work"
  },
  {
    name: "Plumbing Work",
    description: "Leak repair and sanitary fixtures",
    icon: <Image src="/images/plumbing-work.gif" alt="Plumbing" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/plumbing-work"
  },
  {
    name: "Painting Work",
    description: "Premium interior and exterior painting",
    icon: <Image src="/images/painting-work.gif" alt="Painting" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/painting-work"
  },
  {
    name: "Masonry Work",
    description: "Bricklaying, plastering, and tiling",
    icon: <Image src="/images/masonry-work.gif" alt="Masonry" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/masonry-work"
  },
  {
    name: "Carpentry Work",
    description: "Bespoke wood installations & repairs",
    icon: <Image src="/images/carpentry-work.gif" alt="Carpentry" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/carpentry-work"
  },
  {
    name: "Steel Fixing",
    description: "Concrete reinforcement services",
    icon: <Image src="/images/steel-fixing.gif" alt="Steel Fixing" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/steel-fixing"
  },
  {
    name: "Interior Designing",
    description: "Detailed 2D space layouts & designs",
    icon: <Image src="/images/interior-designing.gif" alt="Interior" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/interior-designing"
  },
  {
    name: "Ceiling & Gypsum",
    description: "Modern false ceiling installations",
    icon: <Image src="/images/ceiling-gypsum.gif" alt="Ceiling" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/ceiling-gypsum"
  },
  {
    name: "Handyman Services",
    description: "Responsive maintenance solutions",
    icon: <Image src="/images/handyman-services.gif" alt="Handyman" width={40} height={40} className="w-10 h-10 object-contain" />,
    href: "/services/handyman-services"
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdownOpen(prev => prev === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group -my-3">
            <Image
              src="/images/bgremove.png"
              alt="OsumFix Logo"
              width={280}
              height={96}
              className="h-20 sm:h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-colors flex items-center gap-1
                    ${pathname === link.href || (link.hasDropdown && pathname.startsWith("/services"))
                      ? "text-[var(--primary)] font-semibold"
                      : "text-slate-600 hover:text-[var(--primary)]"
                    }
                  `}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown for Services */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-[40%] mt-2 w-[850px] xl:w-[950px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden"
                      >
                        <div className="p-5 grid grid-cols-3 gap-x-3 gap-y-1">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="group flex items-start p-2.5 rounded-xl hover:bg-[var(--primary)] transition-all duration-300"
                            >
                              <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center text-[var(--primary)] mr-3 flex-shrink-0 group-hover:bg-white group-hover:text-[var(--primary)] transition-colors border border-[var(--primary)] group-hover:border-transparent">
                                {service.icon}
                              </div>
                              <div className="flex flex-col">
                                <h4 className="text-slate-800 font-semibold text-sm group-hover:text-white transition-colors leading-tight mb-0.5">
                                  {service.name}
                                </h4>
                                <p className="text-slate-500 text-[11px] leading-snug group-hover:text-white/80 transition-colors line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Location & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">

            <Link
              href="/#request-quote"
              onClick={() => {
                window.location.hash = "request-quote";
              }}
              className="bg-[#e36704] hover:bg-[#c25602] text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[var(--primary)] focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-y-auto max-h-[calc(100vh-76px)]"
          >
            <div className="px-4 pt-4 pb-28 space-y-1 shadow-inner min-h-[calc(100vh-76px)] flex flex-col">
              <div className="flex-1 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className={`flex items-center rounded-md ${pathname === link.href ? "bg-blue-50" : "hover:bg-slate-50"}`}>
                    <Link
                      href={link.href}
                      onClick={() => !link.hasDropdown && setIsOpen(false)}
                      className={`block px-3 py-3 text-base font-medium flex-1
                        ${pathname === link.href
                          ? "text-[var(--primary)]"
                          : "text-slate-700 hover:text-[var(--primary)]"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <button
                        onClick={(e) => toggleMobileDropdown(link.name, e)}
                        className="px-4 py-3 text-slate-500 hover:text-[var(--primary)] focus:outline-none flex items-center justify-center"
                        aria-label={`Toggle ${link.name} dropdown`}
                      >
                        <ChevronDown size={20} className={`transition-transform duration-300 ${mobileDropdownOpen === link.name ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.hasDropdown && mobileDropdownOpen === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pb-2 space-y-1 border-l-2 border-slate-100 ml-4 mt-1">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-[var(--primary)] group transition-colors"
                            >
                              <div className="w-9 h-9 rounded bg-white flex items-center justify-center text-[var(--primary)] flex-shrink-0 group-hover:bg-white group-hover:text-[var(--primary)] border border-[var(--primary)] group-hover:border-transparent">
                                {service.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold text-slate-700 group-hover:text-white leading-tight">
                                  {service.name}
                                </span>
                                <span className="text-[11px] text-slate-500 group-hover:text-white/80 line-clamp-1 mt-0.5">
                                  {service.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  href="/#request-quote"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.hash = "request-quote";
                  }}
                  className="block w-full text-center bg-[#e36704] hover:bg-[#c25602] text-white px-6 py-3 rounded-xl font-bold shadow-md cursor-pointer transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

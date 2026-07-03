"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Wrench } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },


  // { name: "Projects", href: "/projects" },
  // { name: "Gallery", href: "/gallery" },
  // { name: "Testimonials", href: "/testimonials" },
  // { name: "FAQ", href: "/faq" }, 
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "AC Work", href: "/services/ac-work" },
  { name: "Electrical Work", href: "/services/electrical-work" },
  { name: "Plumbing Work", href: "/services/plumbing-work" },
  { name: "Painting Work", href: "/services/painting-work" },
  { name: "Masonry Work", href: "/services/masonry-work" },
  { name: "Carpentry Work", href: "/services/carpentry-work" },
  { name: "Steel Fixing", href: "/services/steel-fixing" },
  { name: "Interior Designing", href: "/services/interior-designing" },
  { name: "Ceiling & Gypsum", href: "/services/ceiling-gypsum" },
  { name: "Handyman Services", href: "/services/handyman-services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-white py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[var(--primary)] text-white p-2 rounded-lg group-hover:bg-[var(--secondary)] transition-colors">
              <Wrench size={24} />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-[var(--dark)] block">
                OsumFix
              </span>
              <span className="text-[0.65rem] font-semibold text-[var(--secondary)] uppercase tracking-wider block -mt-1">
                Technical Services
              </span>
            </div>
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
                        className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                      >
                        <div className="py-2">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[var(--primary)]"
                            >
                              {service.name}
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

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[var(--primary)] focus:outline-none"
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
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium
                      ${pathname === link.href
                        ? "text-[var(--primary)] bg-blue-50"
                        : "text-slate-700 hover:text-[var(--primary)] hover:bg-slate-50"
                      }
                    `}
                  >
                    <div className="flex justify-between items-center">
                      {link.name}
                    </div>
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-6 pb-2 space-y-1 border-l-2 border-slate-100 ml-4 mt-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-slate-500 hover:text-[var(--primary)] hover:bg-slate-50"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[var(--primary)] text-white px-6 py-3 rounded-xl font-medium shadow-md"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

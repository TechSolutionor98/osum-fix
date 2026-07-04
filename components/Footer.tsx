import Link from "next/link";
import { Mail, Phone, MapPin, Wrench } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--dark)] text-slate-200 pt-16 pb-8 border-t-4 border-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="bg-[var(--primary)] text-white p-2 rounded-lg">
                <Wrench size={24} />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-white block">
                  OsumFix
                </span>
                <span className="text-[0.65rem] font-semibold text-[var(--secondary)] uppercase tracking-wider block -mt-1">
                  Technical Services
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Premium technical services across Dubai. We specialize in electrical, plumbing, HVAC, and general maintenance for residential and commercial properties.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[var(--secondary)] hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[var(--secondary)] hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[var(--secondary)] hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[var(--secondary)] hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-slate-300 hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-slate-300 hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Our Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-slate-300 hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-slate-300 hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-slate-300 hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/services/ac-work" className="text-sm hover:text-[var(--secondary)] transition-colors">
                  AC Work
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-work" className="text-sm hover:text-[var(--secondary)] transition-colors">
                  Electrical Work
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing-work" className="text-sm hover:text-[var(--secondary)] transition-colors">
                  Plumbing Work
                </Link>
              </li>
              <li>
                <Link href="/services/painting-work" className="text-sm hover:text-[var(--secondary)] transition-colors">
                  Painting Work
                </Link>
              </li>
              <li>
                <Link href="/services/masonry-work" className="text-sm hover:text-[var(--secondary)] transition-colors">
                  Masonry Work
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry-work" className="text-sm hover:text-[var(--secondary)] transition-colors">
                  Carpentry Work
                </Link>
              </li>
              <li>
                <Link href="/services/handyman-services" className="text-sm hover:text-[var(--secondary)] transition-colors">
                  Handyman Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="text-[var(--secondary)] shrink-0 mt-0.5" size={18} />
                <span>
                  Office 405, Business Bay,<br />
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="text-[var(--secondary)] shrink-0" size={18} />
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="text-[var(--secondary)] shrink-0" size={18} />
                <span>info@osumfix.ae</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-300">
            &copy; {currentYear} OsumFix Technical Services LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-300">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

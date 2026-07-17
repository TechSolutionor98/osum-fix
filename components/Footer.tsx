import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--dark)] text-white pt-16 pb-8 border-t-4 border-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group mb-4 -mt-4">
              <Image
                src="/images/blackbgremove.png"
                alt="OsumFix Logo"
                width={280}
                height={96}
                className="h-20 sm:h-24 w-auto object-contain scale-110 origin-left"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white">
              Premium technical services across Dubai. We specialize in electrical, plumbing, steel fixing, and general maintenance for residential and commercial properties.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white transition-transform hover:scale-110">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white transition-transform hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white transition-transform hover:scale-110">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white transition-transform hover:scale-110">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Service
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm text-white hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-white hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-sm text-white hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="/services/ac-work" className="text-sm hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> AC Work
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-work" className="text-sm hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Electrical Work
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing-work" className="text-sm hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Plumbing Work
                </Link>
              </li>
              <li>
                <Link href="/services/painting-work" className="text-sm hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Painting Work
                </Link>
              </li>
              <li>
                <Link href="/services/masonry-work" className="text-sm hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Masonry Work
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry-work" className="text-sm hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Carpentry Work
                </Link>
              </li>
              <li>
                <Link href="/services/handyman-services" className="text-sm hover:text-[var(--secondary)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span> Handyman Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="text-[var(--secondary)] shrink-0 mt-0.5" size={18} />
                <span>
                  office NO4-173 Al Khabeesi Building,Deira Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="text-[var(--secondary)] shrink-0" size={18} />
                <span>(+971) 055 1519540 <br /> (+971) 056 7910188</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="text-[var(--secondary)] shrink-0" size={18} />
                <span>work@osumfix.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-white">
            &copy; {currentYear} Qemat Al Nawras Technical Services LLC.
          </p>
          <p className="text-sm text-white md:text-right">
            Developed by <span className="font-semibold text-[var(--secondary)]">Tech Solutionor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

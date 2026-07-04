import { getBlogBySlug, getBlogsList } from "@/lib/cms-service";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, Calendar, User, ArrowLeft, ArrowRight, 
  MessageSquare, Tag, ShieldCheck, Mail, Phone, CalendarRange
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // Revalidate page every 60 seconds

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Fetch blog data by slug
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Fetch other blogs for "Related Articles"
  const allBlogs = await getBlogsList(false);
  const relatedBlogs = allBlogs
    .filter(b => b.slug !== slug)
    .slice(0, 3); // Get up to 3 related articles

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-screen">
        
        {/* Banner Section */}
        <PageBanner 
          title={blog.title} 
          breadcrumb={[
            { label: "Blogs", href: "/blogs" },
            { label: blog.title, href: `/blogs/${blog.slug}` }
          ]} 
        />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Blog Content */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Back Link */}
                <Link 
                  href="/blogs" 
                  className="inline-flex items-center gap-1.5 text-[var(--primary)] hover:text-[var(--secondary)] font-bold text-sm group transition-colors"
                >
                  <ArrowLeft size={16} className="transform group-hover:-translate-x-0.5 transition-transform" />
                  Back to all blogs
                </Link>

                <div className="bg-white rounded-[2.5rem] border border-slate-150 p-6 sm:p-10 shadow-sm space-y-8">
                  {/* Category Badge & Details */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="bg-[var(--secondary)] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {blog.category || "General"}
                    </span>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <User size={14} className="text-[var(--primary)]" /> By {blog.author || "OsumFix"}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {formatDate(blog.createdAt)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {blog.readMinutes || 5} Min Read
                      </span>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--dark)] tracking-tight leading-tight">
                    {blog.title}
                  </h1>

                  {/* Cover Image */}
                  <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img 
                      src={blog.coverImage || "/images/finalhero.png"} 
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Main Rich Text Content */}
                  <div 
                    className="prose max-w-none text-slate-700 leading-relaxed text-base sm:text-lg space-y-6 focus:outline-none"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                    style={{
                      wordBreak: "break-word"
                    }}
                  />

                  {/* Custom stylesheet overrides for the parsed HTML tags inside prose container */}
                  <style jsx global>{`
                    .prose p {
                      margin-bottom: 1.5rem;
                      line-height: 1.8;
                      color: #475569;
                    }
                    .prose h2 {
                      font-size: 1.75rem;
                      font-weight: 800;
                      color: #173A5A;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                    }
                    .prose h3 {
                      font-size: 1.5rem;
                      font-weight: 700;
                      color: #173A5A;
                      margin-top: 1.5rem;
                      margin-bottom: 1rem;
                    }
                    .prose ul {
                      list-style-type: disc;
                      padding-left: 1.5rem;
                      margin-bottom: 1.5rem;
                      space-y: 0.5rem;
                    }
                    .prose li {
                      margin-bottom: 0.5rem;
                      color: #475569;
                    }
                    .prose strong {
                      color: #173A5A;
                      font-weight: 700;
                    }
                  `}</style>

                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                      <span className="text-slate-500 font-bold text-sm flex items-center gap-1 mr-2">
                        <Tag size={16} /> Tags:
                      </span>
                      {blog.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

              </div>

              {/* Right Column: Premium Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Author Card */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-150 shadow-sm text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mx-auto text-3xl font-black shadow-inner">
                    {blog.author ? blog.author.charAt(0).toUpperCase() : "O"}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark)] text-lg">Written By {blog.author || "OsumFix Team"}</h4>
                    <p className="text-slate-400 text-xs mt-1">Technical Insights Expert</p>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Sharing practical guidelines and recommendations for property preservation, safety compliance, and construction standards across Dubai.
                  </p>
                </div>

                {/* Popular Services Quick Links */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-150 shadow-sm">
                  <h4 className="font-extrabold text-[var(--dark)] text-lg border-b pb-4 mb-6">Our Core Services</h4>
                  <ul className="space-y-4">
                    {[
                      { name: "AC Repair & Work", slug: "ac-work" },
                      { name: "Plumbing Services", slug: "plumbing-work" },
                      { name: "Electrical Work", slug: "electrical-work" },
                      { name: "Handyman Services", slug: "handyman-services" },
                      { name: "Gypsum False Ceilings", slug: "ceiling-gypsum" },
                      { name: "Carpentry & Woodwork", slug: "carpentry-work" }
                    ].map((s, idx) => (
                      <li key={idx}>
                        <Link 
                          href={`/services/${s.slug}`} 
                          className="flex items-center justify-between text-slate-600 hover:text-[var(--primary)] font-bold text-sm sm:text-base group transition-colors"
                        >
                          <span>{s.name}</span>
                          <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform text-slate-400 group-hover:text-[var(--primary)]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Consultation CTA */}
                <div className="bg-[var(--dark)] text-white p-8 rounded-[2rem] border border-slate-200/10 shadow-sm relative overflow-hidden space-y-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary)]/20 rounded-full blur-xl -mr-12 -mt-12"></div>
                  
                  <div className="space-y-2">
                    <span className="text-[var(--secondary)] font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck size={14} /> FREE site visit & quotes
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight">Need Professional Technical Assistance?</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      We offer same-day booking inspection visits and transparent estimates for homes and offices in Dubai.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a href="tel:+971501234567" className="w-full bg-[var(--primary)] hover:bg-[var(--secondary)] py-3 rounded-full font-bold transition-all text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md">
                      <Phone size={16} /> Call +971 50 123 4567
                    </a>
                    <Link href="/contact" className="w-full bg-white text-[var(--dark)] hover:bg-slate-100 py-3 rounded-full font-bold transition-all text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md">
                      <CalendarRange size={16} /> Schedule Inspection
                    </Link>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Section: Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="mt-20 pt-12 border-t border-slate-200 space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--dark)] tracking-tight">Other Interesting Articles</h3>
                  <p className="text-slate-500 text-sm">Read more recommendations from OsumFix technical experts.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedBlogs.map((item) => (
                    <article 
                      key={item._id} 
                      className="bg-white rounded-3xl overflow-hidden border border-slate-150 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                    >
                      <div className="aspect-[16/10] relative overflow-hidden bg-slate-100 shrink-0">
                        <img 
                          src={item.coverImage || "/images/finalhero.png"} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div className="space-y-3">
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">
                            {item.category || "General"}
                          </span>
                          <h4 className="font-extrabold text-[var(--dark)] text-base sm:text-lg leading-snug line-clamp-2 hover:text-[var(--primary)] transition-colors">
                            <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                          </h4>
                          <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed">
                            {item.excerpt}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                          <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                            <Calendar size={12} /> {formatDate(item.createdAt)}
                          </span>
                          <Link href={`/blogs/${item.slug}`} className="text-xs text-[var(--primary)] font-bold inline-flex items-center gap-1 group">
                            Read Article <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

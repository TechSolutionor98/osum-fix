import Image from "next/image";
import { getBlogBySlug, getBlogsList } from "@/lib/cms-service";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import BlogComments from "@/components/Blogs/BlogComments";
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
      <main className="bg-white min-h-screen">
        
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
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

                <article>
                  {/* Cover Image on Top */}
                  <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-100 shadow-sm mb-8 relative">
                    <Image 
                      src={blog.coverImage || "/images/finalhero.png"} 
                      alt={blog.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Header / Meta */}
                  <div className="space-y-4 mb-8">
                    <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                      {blog.category || "General"}
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--dark)] tracking-tight leading-[1.2]">
                      {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium pt-2">
                      <span className="flex items-center gap-1.5 text-[var(--dark)] font-bold">
                        <User size={15} className="text-[var(--primary)]" /> {blog.author || "OsumFix Team"}
                      </span>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={15} className="text-slate-400" /> {formatDate(blog.createdAt)}
                      </span>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={15} className="text-slate-400" /> {blog.readMinutes || 5} Min Read
                      </span>
                    </div>
                  </div>

                  {/* Main Rich Text Content */}
                  <div 
                    className="prose prose-lg max-w-none text-slate-600 leading-[1.8] focus:outline-none"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                    style={{
                      wordBreak: "break-word"
                    }}
                  />

                  {/* Custom stylesheet overrides */}
                  <style dangerouslySetInnerHTML={{
                    __html: `
                    .prose p { margin-bottom: 2rem; color: #475569; }
                    .prose h2 { font-size: 2rem; font-weight: 900; color: #0E2033; margin-top: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.025em; }
                    .prose h3 { font-size: 1.5rem; font-weight: 800; color: #0E2033; margin-top: 2.5rem; margin-bottom: 1.25rem; }
                    .prose ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 2rem; }
                    .prose li { margin-bottom: 0.75rem; color: #475569; }
                    .prose strong { color: #0E2033; font-weight: 800; }
                    `
                  }} />

                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="pt-10 mt-10 border-t border-slate-200 flex flex-wrap gap-2 items-center">
                      <span className="text-[var(--dark)] font-bold text-sm flex items-center gap-1.5 mr-2">
                        <Tag size={16} className="text-[var(--primary)]" /> Tags:
                      </span>
                      {blog.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-slate-100 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </article>
                <BlogComments slug={blog.slug || slug} />
              </div>

              {/* Right Column: Sidebar */}
              <div className="lg:col-span-4 space-y-12 lg:pl-4">
                
                {/* OsumFix Details */}
                <div className="space-y-4">
                  <h3 className="font-extrabold text-lg text-[var(--dark)] tracking-tight">OsumFix</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We provide professional AC Repair, Plumbing, Electrical Work, Handyman Services, and comprehensive home maintenance solutions across Dubai.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block text-center w-full bg-[var(--primary)] hover:bg-[var(--secondary)] text-white py-3 rounded-lg font-bold transition-all text-sm shadow-sm mt-2"
                  >
                    Contact Our Team
                  </Link>
                </div>

                {/* Recent Posts */}
                <div className="space-y-5 pt-8 border-t border-slate-200">
                  <div className="space-y-3">
                    <h3 className="font-extrabold text-lg text-[var(--dark)] tracking-tight">Recent Posts</h3>
                    <div className="w-12 h-0.5 bg-[var(--primary)]"></div>
                  </div>
                  {allBlogs.length === 0 ? (
                    <p className="text-slate-400 text-xs italic">No articles available.</p>
                  ) : (
                    <ul className="space-y-5">
                      {allBlogs.filter(b => b.slug !== slug).slice(0, 4).map(post => (
                        <li key={post._id} className="group">
                          <Link href={`/blogs/${post.slug}`} className="flex flex-col gap-1.5">
                            <h4 className="text-sm font-bold text-[var(--dark)] group-hover:text-[var(--primary)] transition-colors line-clamp-2 leading-snug">
                              {post.title}
                            </h4>
                            <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                              <Calendar size={12} /> {formatDate(post.createdAt)}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Direct Help Desk */}
                <div className="space-y-4 pt-8 border-t border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">DIRECT HELP DESK</span>
                  <h3 className="font-extrabold text-lg text-[var(--dark)] tracking-tight">Need Immediate Support?</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Contact our technical desk for inspection visits, maintenance quotes, and customer support.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

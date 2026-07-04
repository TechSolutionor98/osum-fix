"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Clock, User, Calendar, ArrowRight, Search, 
  BookOpen, MessageSquare, ChevronRight, Tag
} from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  tags: string[];
  published: boolean;
  readMinutes: number;
  category: string;
  createdAt: string;
  commentCount?: number;
}

export default function BlogsClient({ initialBlogs }: { initialBlogs: Blog[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(initialBlogs.map(b => b.category || "General")))];

  // Filter blogs based on search query and category
  const filteredBlogs = initialBlogs.filter(blog => {
    const category = blog.category || "General";
    const matchesCategory = selectedCategory === "All" || category === selectedCategory;
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.tags && blog.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = filteredBlogs[0];
  const listBlogs = filteredBlogs.slice(1);

  // Format date helper
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer border
                ${selectedCategory === cat
                  ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/10 focus:border-[var(--primary)] bg-white text-sm"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-xl font-bold text-slate-800">No Blogs Found</h3>
          <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="space-y-16">
          
          {/* Featured Blog (Only when no specific category is selected, or as the first matching item) */}
          {featuredBlog && !searchQuery && (
            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-150 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-slate-100">
                <img 
                  src={featuredBlog.coverImage || "/images/finalhero.png"} 
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                />
                <span className="absolute top-6 left-6 bg-[var(--secondary)] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                  {featuredBlog.category || "General"}
                </span>
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <User size={14} /> By {featuredBlog.author || "OsumFix"}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {formatDate(featuredBlog.createdAt)}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--dark)] leading-tight hover:text-[var(--primary)] transition-colors">
                    <Link href={`/blogs/${featuredBlog.slug}`}>
                      {featuredBlog.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-4">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                    <Clock size={14} /> {featuredBlog.readMinutes || 5} Min Read
                  </span>
                  
                  <Link 
                    href={`/blogs/${featuredBlog.slug}`} 
                    className="inline-flex items-center gap-1.5 text-[var(--primary)] hover:text-[var(--secondary)] font-bold text-sm group"
                  >
                    Read Full Article 
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* List Grid */}
          {((listBlogs.length > 0) || (searchQuery && filteredBlogs.length > 0)) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery ? filteredBlogs : listBlogs).map((blog) => (
                <article 
                  key={blog._id} 
                  className="bg-white rounded-3xl overflow-hidden border border-slate-150 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={blog.coverImage || "/images/finalhero.png"} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[var(--primary)] text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {blog.category || "General"}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {formatDate(blog.createdAt)}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {blog.readMinutes || 5} min
                        </span>
                      </div>

                      <h3 className="font-extrabold text-[var(--dark)] text-lg sm:text-xl leading-snug hover:text-[var(--primary)] transition-colors line-clamp-2">
                        <Link href={`/blogs/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-semibold flex items-center gap-1">
                        <User size={12} className="text-[var(--primary)]" /> {blog.author || "OsumFix"}
                      </span>
                      <Link 
                        href={`/blogs/${blog.slug}`} 
                        className="inline-flex items-center gap-1 text-xs text-[var(--primary)] hover:text-[var(--secondary)] font-bold group"
                      >
                        Read More 
                        <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      )}

    </div>
  );
}

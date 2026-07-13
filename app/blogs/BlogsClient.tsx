"use client";

import Image from "next/image";
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Column: Articles */}
        <div className="lg:col-span-8 space-y-10">

          {/* Header & Search */}
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center border-b border-slate-200 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--dark)] tracking-tight">Articles & Insights</h1>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search articles in real-time..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white text-sm transition-all"
              />
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>



          {/* Blogs Grid or Empty State */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center">
                <BookOpen size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--dark)]">No Articles Found</h3>
                <p className="text-slate-500 mt-2 text-sm max-w-sm mx-auto">We couldn't find any articles matching your search query or selected category.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog._id}
                  className="bg-white rounded-3xl overflow-hidden border border-[var(--secondary)] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={blog.coverImage || "/images/finalhero.png"}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[var(--primary)] text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                      {blog.category || "General"}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[11px] sm:text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {formatDate(blog.createdAt)}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} /> {blog.readMinutes || 5} min read
                        </span>
                      </div>

                      <h3 className="font-extrabold text-[var(--dark)] text-lg sm:text-xl leading-snug group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                        <Link href={`/blogs/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-semibold flex items-center gap-1.5">
                        <User size={13} className="text-[var(--primary)]" /> {blog.author || "OsumFix Team"}
                      </span>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-[var(--primary)] hover:text-[var(--secondary)] font-bold"
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

        {/* Right Sidebar */}
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

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-lg text-[var(--dark)] tracking-tight">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border
                    ${selectedCategory === cat
                      ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="space-y-5 pt-8 border-t border-slate-200">
            <div className="space-y-3">
              <h3 className="font-extrabold text-lg text-[var(--dark)] tracking-tight">Recent Posts</h3>
              <div className="w-12 h-0.5 bg-[var(--primary)]"></div>
            </div>
            {initialBlogs.length === 0 ? (
              <p className="text-slate-400 text-xs italic">No articles available.</p>
            ) : (
              <ul className="space-y-5">
                {initialBlogs.slice(0, 4).map(post => (
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
  );
}

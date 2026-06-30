import React from 'react';
import BlogListingClient from './BlogListingClient';
import { getBlogsList, getPublishedContent } from '@/lib/cms-service';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog - Voltaria Global',
  description: 'Read the latest updates, news, and expert articles on solar energy, batteries, fans, and power solutions.',
};

export const revalidate = 60;

export default async function ClientBlogsPage() {
  let blogs = [];
  try {
    const list = await getBlogsList(false); // Only published blogs
    blogs = JSON.parse(JSON.stringify(list)) || [];
  } catch (err) {
    console.error('Failed to load public blogs list', err);
  }

  const navbarCms = await getPublishedContent("[Global] Navbar");
  const footerCms = await getPublishedContent("[Global] Footer");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased text-black">
      <Navbar cms={navbarCms} />

      <main className="flex-grow">
        {/* Premium Hero Banner */}
        <section className="bg-gradient-to-br from-[#E70812] via-[#c90710] to-[#99050b] text-white py-24 px-6 relative overflow-hidden shadow-inner">
          <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-wider">
              Our Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
              The Voltaria Blog
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Stay updated with expert guides, industry news, solar energy insights, and product updates from Voltaria Global.
            </p>
          </div>
        </section>

        {/* Real-time Client-side Blog Listing & Sidebar Widgets */}
        <BlogListingClient initialBlogs={blogs} />
      </main>

      <Footer cms={footerCms} />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Added Next.js Image import
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

const categories = ["All", "Our Story", "Mentorship", "Philosophy", "Community", "Facilities"];

export default function BlogClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on search input and active category selection
  const filtered = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Assign placeholders if post.image isn't provided in BLOG_POSTS yet
  const getPostImage = (post: typeof BLOG_POSTS[0]) => {
    return post.image || "/ayoddhya/hero/library-setup.jpg";
  };

  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1E3A8A_0%,#0A0F1E_60%)]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-blob" />
        <div className="section-container relative text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 text-gold-400 mb-6">
            Blog
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Insights from
            <span className="italic text-gold-400"> Ayoddhya Library</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-xl mx-auto mb-10">
            Stories on focus, mentorship, the Teacher's Mindset, and what it really takes to shape tomorrow.
          </motion.p>
          
          {/* Search Box */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search" placeholder="Search articles..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-gold-500/50 focus:bg-white/15 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          
          {/* Featured Post Card */}
          {featured && activeCategory === "All" && !search && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="premium-card overflow-hidden mb-12 group cursor-pointer bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-4/3 lg:aspect-auto bg-gray-100 relative min-h-80 overflow-hidden">
                  
                  {/* Next.js Image replacing gradient block */}
                  <Image
                    src={getPostImage(featured)}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">{featured.category}</span>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Clock className="w-3.5 h-3.5" />{featured.readTime}
                    </div>
                    <span className="text-gray-400 text-xs">{featured.date}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-950 mb-4 group-hover:text-gold-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 mb-6 leading-relaxed">{featured.excerpt}</p>
                  <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-navy-950 font-semibold text-sm group-hover:text-gold-600 transition-colors">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-navy-950 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Post Grid Display */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(search || activeCategory !== "All" ? filtered : rest).map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="premium-card overflow-hidden group cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
                  
                  {/* Thumbnail Image Wrapper */}
                  <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                    <Image
                      src={getPostImage(post)}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>

                  {/* Card Info Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                        <Tag className="w-3 h-3" />{post.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock className="w-3 h-3" />{post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="font-display font-semibold text-lg text-navy-950 mb-2 leading-snug group-hover:text-gold-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
                      <span className="text-gray-400 text-xs">{post.date}</span>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-navy-950 text-xs font-semibold hover:text-gold-600 transition-colors">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
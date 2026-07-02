import { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BookOpen, Calendar, X, ChevronRight, Share2, Sparkles, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900/60 transition-colors duration-300" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
              DENTAL INSIGHTS
            </span>
            <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Clinic Practice Insights & Guides
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-xl dark:text-neutral-400">
              Actionable guides drafted by dental architects, engineers, and healthcare marketers to help you manage your practice confidently.
            </p>
          </div>
          
          <div className="rounded-xl bg-purple-50 px-4 py-2 text-xs text-[#6A1B9A] font-semibold flex items-center gap-1.5 dark:bg-amber-400/10 dark:text-amber-400 shrink-0">
            <Sparkles className="h-4 w-4 text-amber-500 animate-spin" />
            <span>Updated weekly • India-wide context</span>
          </div>
        </div>

        {/* 3 Grid items for publications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id}
              className="rounded-2xl border border-gray-150 bg-white dark:border-neutral-800 dark:bg-neutral-900 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md hover:border-purple-200 dark:hover:border-neutral-700 transition-all group"
            >
              {/* Card visual elements */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-[10px] font-bold uppercase text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400">
                    {post.category}
                  </span>
                  
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-neutral-500">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#6A1B9A] dark:text-white dark:group-hover:text-amber-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom footer button bar */}
              <div className="px-6 py-4.5 border-t border-gray-100 dark:border-neutral-800/80 bg-gray-50/50 dark:bg-neutral-900/40 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{post.date}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(post)}
                  className="flex items-center gap-1 text-xs font-bold text-[#6A1B9A] hover:text-purple-800 dark:text-amber-400 dark:hover:text-amber-500 hover:translate-x-0.5 transition-all text-left"
                >
                  <span>Read Article</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay for displaying a selected article */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs" id="blog-reader-overlay">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100 dark:border-neutral-800 dark:bg-neutral-900"
              >
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-[#6A1B9A] dark:text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                      Dentroz Publications Hub
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="rounded-full p-1.5 hover:bg-gray-100 text-gray-400 hover:text-gray-900 dark:hover:bg-neutral-800 dark:hover:text-white"
                    aria-label="Close article"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Article Core Content scroll */}
                <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6 scrollbar-thin">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-purple-50 px-2.5 py-0.5 text-[9px] font-bold text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400 uppercase">
                        {selectedArticle.category}
                      </span>
                      <span className="text-[10px] text-gray-400 font-semibold">{selectedArticle.date} • {selectedArticle.readTime}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white leading-tight">
                      {selectedArticle.title}
                    </h2>
                  </div>

                  <hr className="border-gray-100 dark:border-neutral-800" />

                  {/* Body Text paragraph rendering */}
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed font-normal whitespace-pre-line">
                      {selectedArticle.content}
                    </p>
                    
                    <p className="text-xs text-gray-600 dark:text-neutral-400 leading-relaxed font-normal">
                      Whether you are starting from a raw commercial site, redesigning a family practice, or looking to boost organic patient bookings, our setup design consultants provide continuous turn-key blueprint handoffs.
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100 dark:bg-neutral-950 dark:border-neutral-800">
                    <p className="text-xs text-gray-500 dark:text-neutral-400 font-semibold">
                      Need direct guidance for your specific clinic plan? Connect with India's Dental Setup advisors at <a href="tel:+919150044651" className="text-[#6A1B9A] hover:underline dark:text-amber-400 font-bold">+91 91500 44651</a> to book a free structural site overview.
                    </p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/60">
                  <span className="text-[10px] text-gray-400 dark:text-neutral-500">© 2026 Dentroz Inc. All rights reserved.</span>
                  
                  <button
                    type="button"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: selectedArticle.title,
                          text: selectedArticle.excerpt,
                          url: window.location.href,
                        }).catch(() => {});
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="flex items-center gap-1.5 rounded-lg bg-white border px-3 py-1.5 text-xs font-bold text-gray-650 hover:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Share info</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

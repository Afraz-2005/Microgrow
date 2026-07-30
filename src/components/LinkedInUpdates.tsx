import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  ExternalLink, 
  Check, 
  Search
} from 'lucide-react';
import { LINKEDIN_POSTS, ORGANISATION_INFO } from '../data/organizationData';
import { LinkedInPost } from '../types';

export const LinkedInUpdates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCopyLink = (post: LinkedInPost) => {
    navigator.clipboard.writeText(post.linkedInUrl);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const allTags = ['all', ...Array.from(new Set(LINKEDIN_POSTS.flatMap(p => p.tags)))];

  const filteredPosts = LINKEDIN_POSTS.filter(post => {
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    const matchesSearch = searchQuery === '' || 
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="linkedin-feed" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Chapter Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block border border-blue-200/60">
              FIELD DISPATCHES & LIVE UPDATES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight">
              Sourced From Our Official LinkedIn.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Genuine field notes, workshop photos, and community progress stories published live on MicroGrow Social Foundation's LinkedIn page.
            </p>
          </div>

          <a
            href={ORGANISATION_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto btn-blue-primary text-xs px-6 py-3.5 rounded-lg uppercase tracking-wider flex items-center gap-2 shrink-0 font-bold"
          >
            <Linkedin className="w-4 h-4 fill-white text-white" />
            <span>Follow on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-3 rounded-xl border border-slate-200/80 font-mono text-xs font-bold">
          
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {allTags.slice(0, 5).map((tag, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap uppercase tracking-wider ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {tag === 'all' ? 'All Dispatches' : tag}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64 font-sans">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search dispatches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 shadow-2xs"
            />
          </div>
        </div>

        {/* LinkedIn Feed Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="card-editorial p-6 space-y-4 hover:border-blue-500/60 transition-all flex flex-col justify-between bg-white border border-slate-200/90 rounded-xl shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                      MS
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                        {post.author}
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      </h4>
                      <p className="text-[11px] font-mono text-slate-400">
                        {post.date} • {post.category}
                      </p>
                    </div>
                  </div>

                  <a 
                    href={post.linkedInUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                    title="Open on LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-normal">
                  {post.content}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono font-bold">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-slate-900">
                    <ThumbsUp className="w-3.5 h-3.5 text-blue-600" /> {post.likesCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" /> {post.commentsCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <Share2 className="w-3.5 h-3.5" /> {post.sharesCount}
                  </span>
                </div>

                <button
                  onClick={() => handleCopyLink(post)}
                  className="flex items-center gap-1 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {copiedId === post.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


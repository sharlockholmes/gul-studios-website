import React from 'react';
import { BlogPost } from '../types';
import { X, Calendar, Clock, Share2 } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0D]/85 backdrop-blur-xl overflow-y-auto">
      <div className="glass-card max-w-3xl w-full p-6 sm:p-10 rounded-3xl border border-white/10 relative bg-[#171717] shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-xl bg-[#0B0B0D] border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Header */}
        <div className="space-y-4 border-b border-white/10 pb-6 mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#0B0B0D] text-[#C9A227] border border-[#C9A227]/30">
            {post.category}
          </span>

          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#FAFAFA] leading-tight">
            {post.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-6 h-6 rounded-full object-cover border border-[#C9A227]/40"
              />
              <span className="text-neutral-200 font-medium">{post.author.name}</span>
            </div>
            <span className="text-neutral-600">•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>{post.date}</span>
            </div>
            <span className="text-neutral-600">•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
          {post.content}
        </div>

        {/* Article Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="text-xs text-neutral-400 font-mono">
            © {new Date().getFullYear()} GÜL STUDIOS — Bilişim & Teknoloji Yayınları
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Bağlantı kopyalandı!');
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B0B0D] hover:bg-white/5 text-neutral-300 border border-white/10 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Paylaş</span>
          </button>
        </div>

      </div>
    </div>
  );
};

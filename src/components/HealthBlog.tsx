import React from 'react';
import { HEALTH_ARTICLES } from '../data/blogData';
import { HealthArticle } from '../types';
import { Clock, UserCheck, ArrowRight, BookOpen } from 'lucide-react';

interface HealthBlogProps {
  onSelectArticle: (article: HealthArticle) => void;
}

export const HealthBlog: React.FC<HealthBlogProps> = ({ onSelectArticle }) => {
  return (
    <section id="health-blog" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B9EDF3]/50 text-[#0e7490] text-xs font-bold mb-3">
            <span>Evidence-Based Healthcare Knowledge</span>
            <span className="text-cyan-300">·</span>
            <span>طبی آگاہی مضامین</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243746] tracking-tight">
            Healthcare Knowledge & Awareness
          </h2>

          <p className="mt-3 text-base text-[#546E7A] leading-relaxed">
            All health articles are medically responsible, evidence-based, and reviewed by qualified doctors and clinical pharmacists before publication.
          </p>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HEALTH_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-[#F5F9FA] hover:bg-white rounded-3xl border border-gray-200/70 hover:border-[#20B9D2]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                {/* Article Thumbnail */}
                <div className="w-full h-48 bg-gray-100 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-[#243746] uppercase tracking-wider shadow-xs">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>·</span>
                    <span>{article.publishDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#243746] group-hover:text-[#20B9D2] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  {article.urduTitle && (
                    <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 font-medium">
                      {article.urduTitle}
                    </p>
                  )}

                  <p className="mt-3 text-xs text-[#546E7A] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-200/50 flex items-center justify-between text-xs">
                <span className="text-gray-400 font-medium truncate max-w-[180px]">
                  {article.authorDoctor}
                </span>

                <span className="font-bold text-[#20B9D2] group-hover:text-[#188ea1] flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

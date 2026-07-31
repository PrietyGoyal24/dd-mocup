'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { projectsData } from '@/data/projectsData';

const FILTER_CATEGORIES = [
  { id: 'all', label: 'all' },
  { id: 'app', label: 'app' },
  { id: 'web', label: 'web' },
  { id: 'branding', label: 'branding' },
  { id: 'advertising', label: 'advertising' },
  { id: 'designbuild', label: 'designbuild' },
  { id: 'event', label: 'event' },
  { id: 'projectdesign', label: 'project design' },
  { id: 'storyboard', label: 'story board' },
];

const parseDescriptionTags = (desc: string) => {
  if (!desc) return [];
  return desc.split(/[|,]/).map(t => t.trim()).filter(Boolean);
};

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter projects based on active filter tab and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category Filter
      let matchesCategory = false;
      if (activeFilter === 'all') {
        matchesCategory = true;
      } else if (activeFilter === 'designbuild') {
        matchesCategory =
          project.categories.some(c => c.includes('designbuild') || c.includes('design build')) ||
          project.description.toLowerCase().includes('design') ||
          project.categoryTag.toLowerCase().includes('design');
      } else if (activeFilter === 'projectdesign') {
        matchesCategory =
          project.categories.some(c => c.includes('projectdesign') || c.includes('project design')) ||
          project.description.toLowerCase().includes('design');
      } else if (activeFilter === 'storyboard') {
        matchesCategory = project.categories.some(c => c.includes('storyboard') || c.includes('story board'));
      } else {
        matchesCategory =
          project.categories.includes(activeFilter) ||
          project.description.toLowerCase().includes(activeFilter) ||
          project.categoryTag.toLowerCase().includes(activeFilter) ||
          project.type.toLowerCase().includes(activeFilter);
      }

      // Search Query Filter
      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.categoryTag.toLowerCase().includes(query) ||
          project.type.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query);
      }

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="pt-32 sm:pt-48 pb-24">
          {/* Main Portfolio Header Section */}
          <div className="w-full px-6 lg:px-[98px] mb-12 sm:mb-16">
            <div className="flex items-start gap-4 sm:gap-8">
              {/* Left Accent Line */}
              <div className="w-[60px] sm:w-[110px] md:w-[130px] h-[2px] bg-[#727272] mt-4 sm:mt-6 shrink-0"></div>

              {/* Right Content Column */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h1
                  className="text-[32px] font-bold text-[#000000] uppercase tracking-wider leading-none mb-6 sm:mb-10"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif", letterSpacing: "1px" }}
                >
                  PORTFOLIO.
                </h1>

                {/* Subheading */}
                <h2
                  className="text-[20px] sm:text-[25px] md:text-[24px] font-bold text-[#111111] mb-3 sm:mb-6 leading-snug"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
                >
                  Reference work where our hands were (almost) completely untied.
                </h2>

                {/* Description Paragraph */}
                <p
                  className="text-[#444444] text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-5xl mb-5 sm:mb-6"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif" }}
                >
                  If you are enthusiastic about your profession with a strong thirst for challenges and if you are also talented, it would be a good idea to meet us.
                </p>

                {/* View our Clientele link */}
                <p
                  className="text-[15px] sm:text-[17px] text-[#111111] mb-10 sm:mb-14"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif" }}
                >
                  View our{' '}
                  <Link
                    href="/clientele"
                    className="font-bold text-[#111111] hover:text-[#f27820] transition-colors cursor-pointer"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
                  >
                    Clientele
                  </Link>
                </p>

                {/* Filter Toolbar & Search Row */}
                <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e5e5e5]">
                  {/* Category Filter Tabs */}
                  <div className="flex items-center gap-3 sm:gap-6 lg:gap-7 overflow-x-auto scrollbar-none pb-2 md:pb-0 flex-nowrap md:flex-wrap">
                    {FILTER_CATEGORIES.map((cat) => {
                      const isActive = activeFilter === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => handleFilterChange(cat.id)}
                          className={`text-[15px] sm:text-[16px] transition-all cursor-pointer whitespace-nowrap border ${
                            isActive
                              ? 'border-[#111111] text-[#111111] font-bold px-3.5 py-1'
                              : 'border-transparent text-[#444444] hover:text-[#111111] font-normal px-1 py-1'
                          }`}
                          style={{ fontFamily: isActive ? "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" : "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif" }}
                        >
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Search Input Box */}
                  <div className="relative w-full md:w-60 shrink-0">
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-[#111111] placeholder:text-gray-400 text-[14px] px-3 py-1.5 pr-8 border-b border-[#cccccc] focus:outline-none focus:border-[#f27820]"
                    />
                    {searchQuery ? (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 text-xs"
                      >
                        ✕
                      </button>
                    ) : (
                      <svg
                        className="w-3.5 h-3.5 absolute right-2 top-2 text-gray-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Reset Filter Button if active */}
                {activeFilter !== 'all' && (
                  <div className="mb-6 flex items-center justify-end">
                    <button
                      onClick={() => handleFilterChange('all')}
                      className="text-[13px] text-[#f27820] hover:underline cursor-pointer font-bold"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}

                {/* Projects Card Grid (Sharp Corners, Compact Height, Uniform Design) */}
                {filteredProjects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {filteredProjects.map((project) => {
                      const tags = parseDescriptionTags(project.description);

                      return (
                        <div
                          key={project.id}
                          className="group bg-white rounded-none border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
                        >
                          <div>
                            {/* Image Container (Widescreen 16:9 for Compact Card Height) */}
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f4f4f4] rounded-none">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                unoptimized
                              />
                            </div>

                            {/* Card Content Body */}
                            <div className="p-5">
                              <h3
                                className="text-[18px] sm:text-[19px] font-extrabold text-[#111111] uppercase tracking-wide leading-tight mb-2.5 group-hover:text-[#f27820] transition-colors duration-300"
                                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
                              >
                                {project.title}
                              </h3>

                              {/* Light Orange Tag Pills */}
                              <div className="flex flex-wrap gap-1.5 mt-2.5">
                                {tags.map((tag, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-[11.5px] font-medium bg-[#fff7ed] text-[#ea580c] px-2.5 py-0.8 rounded-md border border-[#ffedd5] hover:bg-[#f27820] hover:text-white hover:border-[#f27820] hover:scale-105 transition-all duration-300"
                                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif" }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Footer Action Link */}
                          <div className="px-5 pb-4.5 pt-2 flex items-center justify-between border-t border-gray-100">
                            <a
                              href={project.link || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#f27820] hover:text-[#d96716] transition-colors group/link"
                              style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
                            >
                              Experience Now
                              <svg
                                className="w-4 h-4 transform group-hover/link:translate-x-1.5 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-16 text-center bg-white border border-black/5 p-8 rounded-none">
                    <p className="text-[16px] text-gray-500 font-medium">No projects found matching your filters.</p>
                    <button
                      onClick={() => {
                        setActiveFilter('all');
                        setSearchQuery('');
                      }}
                      className="mt-4 bg-[#f27820] text-white px-6 py-2 text-sm font-bold hover:bg-[#d96716] transition-colors cursor-pointer rounded-none"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

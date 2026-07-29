'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function BrandStrategyClient() {
  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-12">
            <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
              <h1
                className="text-[#1a1a1a] uppercase text-[30px] sm:text-[52px] md:text-[72px] lg:text-[84px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .BRAND STRATEGY &<br />IDENTITY
              </h1>

              <p
                className="text-[#555555] text-[18px] md:text-[22px] max-w-[380px] leading-relaxed lg:pb-3"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                A good design makes your work half done.
              </p>
            </div>
          </div>

          {/* Fixed Background Image Section with Seamless Grid Aligned to Page Margins */}
          <div
            className="w-full relative bg-fixed bg-cover bg-center min-h-screen py-8 md:py-12 lg:py-16 px-6 lg:pl-[104px] lg:pr-[115px]"
            style={{ backgroundImage: "url('/content-writing.jpg')" }}
          >
            <div className="w-full mx-auto shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

                {/* ROW 1 & 2: Large Orange Card (Spans 2 cols, 2 rows) */}
                <div className="lg:col-span-2 lg:row-span-2 bg-[#e87524] p-5 sm:p-8 md:p-10 lg:p-12 text-white flex flex-col justify-center min-h-[220px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px]">
                  <span
                    className="text-white/80 text-[11px] sm:text-[13px] md:text-[14px] uppercase tracking-wider mb-2 sm:mb-4 block"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    services
                  </span>
                  <h2
                    className="text-[16px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-bold leading-tight mb-3 sm:mb-5 tracking-wide text-[#0e2038]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    WE&apos;RE ABUNDANT JUST FOR THE FOLLOWING ARTISTIC VALUES
                  </h2>
                  <p
                    className="text-white/95 text-[12px] sm:text-[14px] md:text-[15px] leading-relaxed max-w-[620px]"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    Brand is the cultural connection between company and community. And when we say connection, we&apos;re talking about cross-platform consistency and cultural expression, about bringing human experience to the digital landscape.
                  </p>
                </div>

                {/* ROW 1, COL 3: Corporate Brand Identity */}
                <Link
                  href="/services/brand-strategy"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none">
                      <circle cx="18" cy="18" r="6" fill="#eab308" />
                      <circle cx="18" cy="18" r="4" fill="#06b6d4" />
                      <text x="18" y="21" fontSize="10" fontWeight="bold" fill="#fff" textAnchor="middle">$</text>
                      <circle cx="18" cy="4" r="3.5" fill="#10b981" />
                      <circle cx="32" cy="18" r="3.5" fill="#10b981" />
                      <circle cx="18" cy="32" r="3.5" fill="#10b981" />
                      <circle cx="4" cy="18" r="3.5" fill="#10b981" />
                      <line x1="18" y1="7.5" x2="18" y2="12" stroke="#10b981" strokeWidth="2" />
                      <line x1="28.5" y1="18" x2="24" y2="18" stroke="#10b981" strokeWidth="2" />
                      <line x1="18" y1="28.5" x2="18" y2="24" stroke="#10b981" strokeWidth="2" />
                      <line x1="7.5" y1="18" x2="12" y2="18" stroke="#10b981" strokeWidth="2" />
                    </svg>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Corporate Brand Identity
                  </span>
                </Link>

                {/* ROW 1, COL 4: Transparent Empty Cell */}
                <div className="hidden lg:block bg-transparent min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px]" />

                {/* ROW 2, COL 3: Brand Development */}
                <Link
                  href="/services/brand-reimagination"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none">
                      <rect x="3" y="6" width="30" height="24" rx="3" fill="#fff" stroke="#1e293b" strokeWidth="2" />
                      <line x1="3" y1="12" x2="33" y2="12" stroke="#1e293b" strokeWidth="1.5" />
                      <circle cx="7" cy="9" r="1.2" fill="#1e293b" />
                      <circle cx="11" cy="9" r="1.2" fill="#1e293b" />
                      <circle cx="15" cy="9" r="1.2" fill="#1e293b" />
                      <polygon points="15,16 24,20 15,24" fill="#eb7424" />
                    </svg>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Brand Development
                  </span>
                </Link>

                {/* ROW 2, COL 4: Signage Design */}
                <Link
                  href="/services/signage-design"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none">
                      <path d="M18 6v22M9 14l9-5 9 5M9 14v6c0 3 4.5 4.5 9 4.5s9-1.5 9-4.5v-6" stroke="#1e293b" strokeWidth="2" />
                      <circle cx="9" cy="20" r="3.5" fill="#3b82f6" />
                      <circle cx="27" cy="20" r="3.5" fill="#eb7424" />
                      <path d="M6 31h24" stroke="#1e293b" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Signage Design
                  </span>
                </Link>

                {/* ROW 3, COL 1: Transparent Empty Cell (Shows laptop & hands) */}
                <div className="hidden lg:block bg-transparent min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px]" />

                {/* ROW 3, COL 2: Packaging and Sales Promotion */}
                <Link
                  href="/services/product-and-packaging-design"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#10b981]/30 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#047857]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2H4z" />
                      </svg>
                    </div>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Packaging and Sales Promotion
                  </span>
                </Link>

                {/* ROW 3, COL 3: Stationary Design / Print Design */}
                <Link
                  href="/services/stationary-design"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none">
                      <rect x="4" y="8" width="28" height="20" rx="2" fill="#06b6d4" />
                      <path d="M4 11l14 9 14-9" stroke="#fff" strokeWidth="2" />
                      <rect x="10" y="4" width="16" height="6" fill="#67e8f9" />
                    </svg>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Stationary Design / Print Design
                  </span>
                </Link>

                {/* ROW 3, COL 4: Strategy and Brand consulting */}
                <Link
                  href="/services/brand-strategy"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none">
                      <rect x="6" y="6" width="10" height="10" fill="#eab308" />
                      <rect x="20" y="6" width="10" height="10" fill="#3b82f6" />
                      <rect x="13" y="20" width="10" height="10" fill="#ef4444" />
                      <circle cx="11" cy="11" r="2" fill="#fff" />
                      <circle cx="25" cy="11" r="2" fill="#fff" />
                      <circle cx="18" cy="25" r="2" fill="#fff" />
                    </svg>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Strategy and Brand consulting
                  </span>
                </Link>

                {/* ROW 4, COL 1: Product Design */}
                <Link
                  href="/services/product-design"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none">
                      <circle cx="14" cy="14" r="8" fill="#ef4444" fillOpacity="0.75" />
                      <circle cx="22" cy="14" r="8" fill="#eab308" fillOpacity="0.75" />
                      <circle cx="18" cy="22" r="8" fill="#3b82f6" fillOpacity="0.75" />
                    </svg>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Product Design
                  </span>
                </Link>

                {/* ROW 4, COL 2: Content Writing */}
                <Link
                  href="/services/content-writing"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none">
                      <rect x="6" y="4" width="24" height="28" rx="3" fill="#fff" stroke="#64748b" strokeWidth="2" />
                      <line x1="10" y1="10" x2="26" y2="10" stroke="#475569" strokeWidth="2" />
                      <line x1="10" y1="16" x2="22" y2="16" stroke="#475569" strokeWidth="2" />
                      <path d="M20 24l6-6 3 3-6 6-4 1 1-4z" fill="#eb7424" />
                    </svg>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Content Writing
                  </span>
                </Link>

                {/* ROW 4, COL 3: Transparent Empty Cell (Shows notebook & pen) */}
                <div className="hidden lg:block bg-transparent min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px]" />

                {/* ROW 4, COL 4: Photography */}
                <Link
                  href="/services/photography"
                  className="bg-[#e9ecef]/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[240px] flex flex-col items-center justify-center text-center hover:bg-[#e9ecef]/95 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none">
                      <rect x="3" y="6" width="30" height="24" rx="3" fill="#0f766e" />
                      <circle cx="24" cy="13" r="3" fill="#fde047" />
                      <polygon points="6,26 15,15 22,23 27,18 33,26" fill="#14b8a6" />
                    </svg>
                  </div>
                  <span
                    className="text-[#0e2038] font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Photography
                  </span>
                </Link>

              </div>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

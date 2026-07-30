'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function SearchEngineOptimizationClient() {
  const offerItems = [
    {
      num: '1.',
      title: 'On-Page SEO Optimization',
      desc: 'Optimize content, HTML tags, meta descriptions, headings, and internal links to ensure maximum search engine visibility.',
    },
    {
      num: '2.',
      title: 'Technical SEO & Audits',
      desc: 'Enhance website architecture, crawlability, site speed, schema markup, and mobile responsiveness for optimal indexing.',
    },
    {
      num: '3.',
      title: 'Keyword Research & Strategy',
      desc: 'Identify high-intent, industry-relevant keywords to attract qualified prospects and gain a competitive edge.',
    },
    {
      num: '4.',
      title: 'Off-Page SEO & Link Building',
      desc: 'Build high-quality authority backlinks and brand mentions to establish domain credibility and boost page rankings.',
    },
    {
      num: '5.',
      title: 'Content Creation & Optimization',
      desc: 'Produce engaging, search-engine-friendly content that answers user queries and drives continuous organic engagement.',
    },
  ];

  const whyChoosePoints = [
    'Long-term sustainable organic growth',
    'Higher search engine rankings and brand authority',
    'Enhanced user experience and site speed',
    'Cost-effective customer acquisition channel',
    'High conversion rates from targeted search traffic',
  ];

  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[90px] lg:pt-[125px]">
          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-8 text-[36px] sm:text-[58px] md:text-[80px] lg:text-[96px] leading-[1.05] tracking-[1px] font-normal"
                style={{
                  fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                SEARCH ENGINE OPTIMIZATION
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Dominate search engine rankings and attract qualified organic traffic. We deliver data-driven SEO strategies that elevate your brand&apos;s digital presence, enhance online visibility, and drive sustainable business growth.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="Search Engine Optimization"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* WHAT WE OFFER SECTION */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHAT WE OFFER:
              </h2>

              <div className="space-y-6">
                {offerItems.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h3
                      className="text-[#1a1a1a] text-[16px] md:text-[18px] font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.num} {item.title}
                    </h3>
                    <p
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WHY CHOOSE SEARCH ENGINE OPTIMIZATION */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY CHOOSE SEARCH ENGINE OPTIMIZATION
              </h2>

              <ul className="space-y-2.5 ml-2">
                {whyChoosePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LET'S ELEVATE YOUR ORGANIC REACH */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                LET&apos;S ELEVATE YOUR ORGANIC REACH
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Ready to outrank the competition and dominate search results? Partner with us to build a tailored SEO strategy that turns search visibility into revenue.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

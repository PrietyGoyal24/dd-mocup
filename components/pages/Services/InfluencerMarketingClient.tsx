'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function InfluencerMarketingClient() {
  const offerItems = [
    {
      num: '1.',
      title: 'Influencer Identification & Vetting',
      desc: 'We match your brand with influencers that align with your goals, industry, and audience demographics — ensuring authentic partnerships.',
    },
    {
      num: '2.',
      title: 'Campaign Strategy & Planning',
      desc: 'From concept to execution, we plan influencer campaigns that deliver measurable results and align with your overall marketing strategy.',
    },
    {
      num: '3.',
      title: 'Content Collaboration',
      desc: 'We coordinate content creation with influencers that feels natural, engaging, and true to both the influencer’s voice and your brand.',
    },
    {
      num: '4.',
      title: 'Performance Tracking',
      desc: 'We analyze campaign metrics including reach, engagement, clicks, and conversions — optimizing for maximum ROI.',
    },
    {
      num: '5.',
      title: 'Platform Coverage',
      desc: 'We run influencer campaigns across platforms like Instagram, YouTube, TikTok, LinkedIn, and X (Twitter) — wherever your audience is active.',
    },
  ];

  const whyChoosePoints = [
    'Increase brand awareness & reach new audiences',
    'Build trust and social proof quickly',
    'Drive direct traffic and sales',
    'Engage customers in authentic conversations',
    'Stay relevant in fast-changing digital culture',
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
                INFLUENCER MARKETING
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Leverage the trust and engagement of popular influencers to elevate your brand. Our Influencer Marketing services help you collaborate with social media personalities to promote your products and build authentic connections with your audience.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="Influencer Marketing"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* OUR INFLUENCER MARKETING SERVICES INCLUDE: */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                OUR INFLUENCER MARKETING SERVICES INCLUDE:
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

          {/* WHY CHOOSE INFLUENCER MARKETING? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY CHOOSE INFLUENCER MARKETING?
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

          {/* LET US CONNECT YOU WITH THE RIGHT INFLUENCERS */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                LET US CONNECT YOU WITH THE RIGHT INFLUENCERS
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Whether you&apos;re launching a new product or growing your digital footprint, our influencer marketing experts will help you reach the right people with the right message at the right time.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

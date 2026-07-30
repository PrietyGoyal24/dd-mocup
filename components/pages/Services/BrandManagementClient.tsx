'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function BrandManagementClient() {
  const offerItems = [
    {
      num: '1.',
      title: 'Brand Strategy Development',
      desc: 'We define your unique value proposition, voice, and visual identity to ensure your brand stands out in the marketplace.',
    },
    {
      num: '2.',
      title: 'Consistent Brand Communication',
      desc: 'We ensure consistency across advertising, packaging, digital, and print assets — strengthening recognition and trust.',
    },
    {
      num: '3.',
      title: 'Reputation Monitoring',
      desc: 'We track public sentiment, online reviews, and social media mentions to help you manage and improve brand perception.',
    },
    {
      num: '4.',
      title: 'Brand Positioning',
      desc: 'We help position your brand effectively in the minds of your target audience, aligning business goals with customer expectations.',
    },
    {
      num: '5.',
      title: 'Brand Refresh & Rebranding',
      desc: 'Need a new direction? We help modernize or reposition your brand while maintaining its core identity and customer base.',
    },
  ];

  const whyChoosePoints = [
    'Increases brand recognition and trust',
    'Improves customer loyalty and retention',
    'Protects your reputation in a competitive market',
    'Drives consistency across all marketing channels',
    'Boosts your overall brand equity and value',
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
                BRAND MANAGEMENT
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Your brand is more than just a logo — it&apos;s the perception people hold about your business. Our Brand Management services help you build, communicate, and maintain a consistent brand image across all customer touchpoints.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="Brand Management"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* OUR BRAND MANAGEMENT SERVICES INCLUDE: */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                OUR BRAND MANAGEMENT SERVICES INCLUDE:
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

          {/* WHY BRAND MANAGEMENT MATTERS: */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY BRAND MANAGEMENT MATTERS:
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

          {/* LET'S BUILD A BRAND THAT LASTS */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                LET&apos;S BUILD A BRAND THAT LASTS
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                With our expert brand management team, you&apos;ll be able to control the narrative, win customer loyalty, and drive long-term business success. Let&apos;s create a brand that speaks to your audience and grows with your business.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

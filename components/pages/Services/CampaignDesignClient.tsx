'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function CampaignDesignClient() {
  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-6 text-[30px] sm:text-[52px] md:text-[72px] lg:text-[86px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .CAMPAIGN DESIGN
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Powerful campaigns start with thoughtful, bold design. Our campaign design services help your brand connect, communicate, and convert through creative storytelling, cohesive visuals, and strategic messaging.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Campaign Design"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* OUR CAMPAIGN DESIGN SERVICES INCLUDE: */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                OUR CAMPAIGN DESIGN SERVICES INCLUDE:
              </h2>

              <div className="space-y-6">
                {[
                  {
                    num: '1.',
                    title: 'Print Campaigns',
                    desc: 'From billboards to brochures, we design attention-grabbing print assets that drive action while staying on-brand.',
                  },
                  {
                    num: '2.',
                    title: 'Digital Campaigns',
                    desc: 'We craft digital-first campaigns including social media graphics, banner ads, and email creatives for maximum engagement online.',
                  },
                  {
                    num: '3.',
                    title: 'Integrated Marketing Campaigns',
                    desc: 'Our team ensures consistent messaging and visual style across all platforms, unifying your brand voice through every channel.',
                  },
                  {
                    num: '4.',
                    title: 'Product Launch Campaigns',
                    desc: 'We help create buzz and drive results through compelling launch visuals that introduce your product to the world in style.',
                  },
                  {
                    num: '5.',
                    title: 'Event & Festival Campaigns',
                    desc: 'From cultural events to corporate expos, we design campaigns that captivate audiences and highlight key experiences.',
                  },
                ].map((item, idx) => (
                  <div key={idx}>
                    <h3
                      className="text-[#1a1a1a] font-bold text-[16px] md:text-[17px] mb-1.5"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.num} {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WHY PARTNER WITH US FOR CAMPAIGN DESIGN? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                WHY PARTNER WITH US FOR CAMPAIGN DESIGN?
              </h2>

              <ul className="space-y-2.5 ml-2">
                {[
                  'Strategic messaging and storytelling',
                  'Consistent branding across all media',
                  'Expertise in print and digital execution',
                  'Tailored visuals that fit your audience and goals',
                  'Collaborative approach for powerful impact',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LET'S LAUNCH SOMETHING GREAT */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                LET&apos;S LAUNCH SOMETHING GREAT
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Whether you need to build awareness, promote a product, or increase engagement, our campaign design services can bring your ideas to life with clarity and creativity.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function PublicRelationsClient() {
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
                .PUBLIC RELATIONS
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Public Relations is about building trust, shaping reputation, and creating meaningful connections between your brand and the public. At DesignDot, our strategic PR services help elevate your brand voice, manage media relations, and drive impactful storytelling across channels.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Public Relations"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* OUR PUBLIC RELATIONS SERVICES INCLUDE: */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                OUR PUBLIC RELATIONS SERVICES INCLUDE:
              </h2>

              <div className="space-y-6">
                {[
                  {
                    num: '1.',
                    title: 'Media Relations & Press Releases',
                    desc: 'Crafting compelling press releases and securing targeted media coverage across print, digital, and broadcast channels.',
                  },
                  {
                    num: '2.',
                    title: 'Brand Reputation Management',
                    desc: 'Proactively managing your brand image, monitoring sentiment, and fostering strong public confidence in your business.',
                  },
                  {
                    num: '3.',
                    title: 'Crisis Communication & Management',
                    desc: 'Strategic guidance and rapid response messaging to safeguard your brand integrity during challenging times.',
                  },
                  {
                    num: '4.',
                    title: 'Corporate Communications & Thought Leadership',
                    desc: 'Positioning your leadership as industry authority through speeches, opinion pieces, keynotes, and executive interviews.',
                  },
                  {
                    num: '5.',
                    title: 'Event PR & Product Launch Campaigns',
                    desc: 'Generating buzz, press attendance, and consumer interest for major milestone announcements and product launches.',
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

          {/* WHY INVEST IN STRATEGIC PR? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                WHY INVEST IN STRATEGIC PR?
              </h2>

              <ul className="space-y-2.5 ml-2">
                {[
                  'Builds long-term credibility, authority, and public trust',
                  'Amplifies organic brand awareness and media reach',
                  'Maintains a positive brand narrative during critical industry shifts',
                  'Establishes key executives as recognized industry experts',
                  'Strengthens investor, partner, and customer relations',
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

          {/* ELEVATE YOUR BRAND'S REPUTATION */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                ELEVATE YOUR BRAND&apos;S REPUTATION
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Whether launching a new initiative or protecting your market standing, our PR specialists are ready to craft a powerful communications strategy tailored to your goals.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

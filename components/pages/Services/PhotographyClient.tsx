'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function PhotographyClient() {
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
                .PHOTOGRAPHY
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                A great photograph tells a compelling story. Our professional photography services are designed to enhance your brand image and create visual content that connects with your audience across platforms.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Photography"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* OUR PHOTOGRAPHY SERVICES */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                OUR PHOTOGRAPHY SERVICES
              </h2>

              <div className="space-y-6">
                {[
                  {
                    num: '1.',
                    title: 'Product Photography',
                    desc: 'Showcase your products in the best light with sharp, detailed, and high-quality images that convert browsers into buyers.',
                  },
                  {
                    num: '2.',
                    title: 'Corporate & Team Photography',
                    desc: 'Build trust and credibility with professional headshots and office environment photography that represent your company culture.',
                  },
                  {
                    num: '3.',
                    title: 'Event Photography',
                    desc: 'Capture the energy and key moments of your corporate events, product launches, or brand activations.',
                  },
                  {
                    num: '4.',
                    title: 'Lifestyle & Branding Shoots',
                    desc: "Tell your brand's story with lifestyle photography that reflects your values and engages your target audience.",
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

          {/* WHY PROFESSIONAL PHOTOGRAPHY MATTERS */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                WHY PROFESSIONAL PHOTOGRAPHY MATTERS
              </h2>

              <ul className="space-y-2.5 ml-2">
                {[
                  'Enhances the visual appeal of your website, social media & brochures',
                  "Strengthens your brand's identity and consistency",
                  'Improves audience engagement and conversion rates',
                  'Creates a professional and polished brand image',
                  'Provides original content tailored to your marketing strategy',
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

          {/* GET VISUALS THAT SPEAK VOLUMES */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                GET VISUALS THAT SPEAK VOLUMES
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Whether it&apos;s for your online store, corporate profile, or campaign launch, our expert photography team is ready to create visuals that elevate your brand.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

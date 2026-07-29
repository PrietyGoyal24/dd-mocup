'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function MotionDesignClient() {
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
                .MOTION DESIGN
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Capture attention and tell your brand story through powerful visual motion. Our Motion Design services blend creativity with technology to produce high-impact animations that engage and inspire.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Motion Design"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* WHAT WE OFFER */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                WHAT WE OFFER:
              </h2>

              <div className="space-y-6">
                {[
                  {
                    num: '1.',
                    title: 'Explainer Videos',
                    desc: 'Simplify complex concepts with easy-to-understand animated videos designed for product demos, onboarding, or education.',
                  },
                  {
                    num: '2.',
                    title: 'Logo Animations',
                    desc: 'Make your brand memorable with animated logos that add flair and movement to your digital identity.',
                  },
                  {
                    num: '3.',
                    title: '2D & 3D Animations',
                    desc: "From flat graphics to immersive 3D motion graphics, we deliver animations that align with your brand's voice and visuals.",
                  },
                  {
                    num: '4.',
                    title: 'UI/UX Motion',
                    desc: 'Enhance user interaction with subtle interface animations that create a smoother, more intuitive experience.',
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

          {/* WHY CHOOSE MOTION DESIGN? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                WHY CHOOSE MOTION DESIGN?
              </h2>

              <ul className="space-y-2.5 ml-2">
                {[
                  'Increase viewer engagement',
                  'Convey messages quickly and effectively',
                  'Boost brand recognition and appeal',
                  'Improve social media and campaign performance',
                  'Stand out in a competitive digital landscape',
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

          {/* LET'S MAKE IT MOVE */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                LET&apos;S MAKE IT MOVE
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Whether you need an animated video ad or an interactive app walkthrough, our Motion Design services bring your ideas to life with creativity and precision.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

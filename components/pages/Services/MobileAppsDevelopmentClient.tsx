'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function MobileAppsDevelopmentClient() {
  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-6 text-[32px] sm:text-[56px] md:text-[76px] lg:text-[90px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .MOBILE APP DEVELOPMENT SERVICES
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  We build enterprise-grade mobile ecosystems, offering expert strategic guidance and engineering excellence.
                </p>
                <p>
                  Our team delivers highly secure, scalable, and compliant mobile apps powered by cutting-edge AI and supported by high-availability cloud infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="Mobile App Development Services"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our Mobile App Development Expertise */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR MOBILE APP DEVELOPMENT <span className="text-[#f27820]">EXPERTISE</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'IOS APP DEVELOPMENT',
                    desc: 'Building custom, high-quality apps for iPhone and iPad devices with superior performance and user experience.',
                  },
                  {
                    title: 'ANDROID APP DEVELOPMENT',
                    desc: 'Crafting robust apps for Android users, with seamless functionality and secure architecture.',
                  },
                  {
                    title: 'CROSS-PLATFORM APP DEVELOPMENT',
                    desc: 'Using frameworks like React Native and Flutter to create apps that work on both iOS and Android, saving you time and money.',
                  },
                  {
                    title: 'AI AND MACHINE LEARNING INTEGRATION',
                    desc: 'We integrate AI technologies into mobile apps to offer personalized experiences, improve decision-making, and enhance user satisfaction.',
                  },
                  {
                    title: 'ENTERPRISE MOBILE APP DEVELOPMENT',
                    desc: 'Custom mobile solutions that integrate seamlessly with your enterprise systems, enhancing business productivity.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3 uppercase tracking-[0.5px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries We've Helped Grow Digitally */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                INDUSTRIES WE'VE HELPED GROW <span className="text-[#f27820]">DIGITALLY</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'E-commerce & Retail',
                  'Banking & Finance',
                  'Healthcare & Fitness',
                  'Education',
                  'Travel & Hospitality',
                  'Entertainment & Media',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-[#1a1a1a] text-[16px] md:text-[18px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-3 text-[#1a1a1a]">•</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Mobile App Development is Important for Your Business */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY MOBILE APP DEVELOPMENT IS IMPORTANT FOR <span className="text-[#f27820]">YOUR BUSINESS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                With mobile usage growing exponentially, having a mobile app for your business is no longer a luxury—it's a necessity. A well-designed mobile app can help your business:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Engage directly with customers',
                  'Streamline business operations',
                  'Improve customer loyalty',
                  'Stay ahead of the competition',
                  'Drive more sales and conversions',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-[#1a1a1a] text-[16px] md:text-[18px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-3 text-[#1a1a1a]">•</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Mobile App Development Process */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR MOBILE APP DEVELOPMENT <span className="text-[#f27820]">PROCESS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Let's explore the essential steps involved in transforming your vision into a functional and user-friendly app.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'PLANNING' },
                  { num: '02', name: 'DESIGN' },
                  { num: '03', name: 'DEVELOPMENT' },
                  { num: '04', name: 'TESTING' },
                  { num: '05', name: 'LAUNCH' },
                  { num: '06', name: 'MAINTENANCE' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-5 px-7 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out flex items-center gap-5"
                  >
                    <div
                      className="w-[46px] h-[46px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[15px] shrink-0"
                      style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                    >
                      {item.num}
                    </div>
                    <span
                      className="text-[#0e2038] uppercase font-bold text-[15px] md:text-[16px] tracking-[1px]"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Success Stories That Testify to Our Mobile App Development Services Across Industries */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                SUCCESS STORIES THAT TESTIFY TO OUR MOBILE APP DEVELOPMENT <span className="text-[#f27820]">SERVICES ACROSS INDUSTRIES</span>
              </h2>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  With 10+ years of experience as a custom mobile development partner, we've helped 1,000+ businesses transform their ideas into impactful digital reality.
                </p>
                <p>
                  From startups to enterprises, our success stories speak for themselves.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

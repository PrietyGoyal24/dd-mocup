'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function IOSAppDevelopmentClient() {
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
                .IOS/IPADOS APP DEVELOPMENT
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We offer end-to-end iOS and iPadOS App Development services tailored for modern businesses. Whether it's an app for iPhone or iPad, our experienced developers craft intuitive and high-performance solutions using Swift and Objective-C that meet Apple's strict standards.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="iOS/iPadOS App Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Core Technologies */}
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
                CORE <span className="text-[#f27820]">TECHNOLOGIES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Swift & Objective-C',
                    desc: "We use Apple's preferred languages — Swift for modern, safe, and fast development, and Objective-C for legacy support — to build apps that are smooth and reliable.",
                  },
                  {
                    title: 'UIKit & SwiftUI',
                    desc: 'Our team leverages both UIKit for flexibility and SwiftUI for modern declarative UI development, creating responsive interfaces across iPhone and iPad screens.',
                  },
                  {
                    title: 'Apple Ecosystem Integration',
                    desc: 'From Apple Pay and iCloud to SiriKit and CoreML, we integrate native services to enhance functionality and user experience in your app.',
                  },
                  {
                    title: 'App Store Compliance',
                    desc: "We ensure every app meets Apple's App Store guidelines for performance, security, and privacy — helping you get approved faster and maintain your app seamlessly.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-start"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#fdebe0] text-[#f27820] flex items-center justify-center mb-4 shrink-0 font-bold text-[18px]">
                      ✓
                    </div>
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
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
                ))}
              </div>
            </div>
          </div>

          {/* iOS/iPadOS Services We Offer */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                IOS/IPADOS SERVICES <span className="text-[#f27820]">WE OFFER</span>
              </h2>

              <div className="space-y-3">
                {[
                  'Custom iPhone & iPad App Development',
                  'UI/UX Design for Apple Devices',
                  'Legacy App Modernization',
                  'App Store Submission & Optimization',
                  'Maintenance & Support',
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

          {/* Industries We Serve */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                INDUSTRIES <span className="text-[#f27820]">WE SERVE</span>
              </h2>

              <div className="space-y-3">
                {[
                  'Healthcare & Fitness',
                  'Education & eLearning',
                  'E-commerce & Retail',
                  'Banking & Finance',
                  'Travel & Hospitality',
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

          {/* Why Choose Us for iOS/iPadOS Development? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY CHOOSE US FOR <span className="text-[#f27820]">IOS/IPADOS DEVELOPMENT?</span>
              </h2>

              <div className="space-y-3">
                {[
                  'Certified iOS Developers',
                  'Pixel-perfect UI Implementation',
                  'Optimized for All Apple Devices',
                  'Data Security & Encryption',
                  'Scalable & Maintainable Architecture',
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

          {/* The Future of Apple App Development */}
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
                THE FUTURE OF <span className="text-[#f27820]">APPLE APP DEVELOPMENT</span>
              </h2>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                With the evolution of Apple Silicon, ARKit, and machine learning, iOS/iPadOS apps are becoming more powerful than ever. We are ready to help you stay ahead with future-proof app solutions.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function FlutterAppDevelopmentClient() {
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
                .FLUTTER APP DEVELOPMENT
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Flutter, backed by Google, is a powerful framework that allows you to build stunning mobile apps for both Android and iOS using a single codebase. We specialize in developing Flutter apps that are fast, expressive, and natively compiled.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="Flutter App Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our Core Flutter Services */}
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
                OUR CORE <span className="text-[#f27820]">FLUTTER SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Custom Flutter App Development',
                    desc: 'We design and build tailored Flutter apps that match your unique business requirements. Expect high-performance, visually appealing apps with intuitive UI and cross-platform consistency.',
                  },
                  {
                    title: 'Flutter App Migration',
                    desc: "Upgrade your legacy apps to Flutter with minimal disruption. We ensure smooth transitions, better performance, and full compatibility while preserving your app's functionality and user data.",
                  },
                  {
                    title: 'Flutter App Ideation & Consulting',
                    desc: 'From concept to launch, our consulting team helps shape your app idea into a market-ready solution. Get expert advice on features, tech stack, user flow, and monetization strategy.',
                  },
                  {
                    title: 'Flutter App Support & Upgradation',
                    desc: 'We provide ongoing maintenance, timely updates, performance enhancements, and bug fixes to keep your app running smoothly across all platforms and OS versions.',
                  },
                  {
                    title: 'Flutter Web App Development',
                    desc: 'Create responsive and fast-loading web apps with Flutter. Our team delivers web solutions that mirror the mobile experience for a seamless transition across devices and browsers.',
                  },
                  {
                    title: 'Flutter Desktop App Development',
                    desc: 'Extend your application to desktop platforms with ease. We develop Flutter apps for Windows, macOS, and Linux with native performance, optimized UI, and smooth functionality.',
                  },
                  {
                    title: 'Flutter IoT App Development',
                    desc: 'Connect your app to smart devices with our Flutter IoT integration services. We develop solutions with real-time data processing, remote control capabilities, and device automation.',
                  },
                  {
                    title: 'Flutter Widget Customization',
                    desc: "Enhance usability with customized Flutter widgets. We craft interactive, reusable components tailored to your app's UI/UX goals while maintaining a consistent design language.",
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

          {/* Why Choose Flutter? */}
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
                WHY CHOOSE <span className="text-[#f27820]">FLUTTER?</span>
              </h2>

              <div className="space-y-3">
                {[
                  'Write once, run on iOS, Android, Web, and Desktop',
                  'Fast development with Hot Reload',
                  'Rich widget library and smooth animations',
                  'High-performance, native-like user experience',
                  'Strong community and backing by Google',
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
                  'eCommerce & Retail',
                  'Healthcare & Telemedicine',
                  'Education & eLearning',
                  'Fintech & Banking',
                  'On-Demand Services',
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

          {/* Let's Build a Future-Ready Flutter App */}
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
                LET'S BUILD A <span className="text-[#f27820]">FUTURE-READY FLUTTER APP</span>
              </h2>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                From idea to deployment and beyond, our Flutter experts help you build apps that delight users and drive results. Reach out today to turn your vision into a cross-platform success story.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

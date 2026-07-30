'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function InternetOfThingsClient() {
  const offerItems = [
    {
      num: '1.',
      title: 'IoT Strategy & Consulting',
      desc: 'We help you define a clear IoT roadmap aligned with your business objectives — from architecture to technology stack recommendations.',
    },
    {
      num: '2.',
      title: 'IoT Application Development',
      desc: 'Build powerful mobile and web applications to control, monitor, and manage IoT-enabled devices and data streams.',
    },
    {
      num: '3.',
      title: 'Device Connectivity & Integration',
      desc: 'We integrate sensors, gateways, and embedded systems to collect and transmit real-time data from edge devices to the cloud.',
    },
    {
      num: '4.',
      title: 'IoT Cloud & Data Analytics',
      desc: 'Store and analyze IoT data with cloud platforms and machine learning algorithms to drive actionable insights and automation.',
    },
    {
      num: '5.',
      title: 'Security & Compliance',
      desc: 'Ensure data privacy, encryption, and secure device communication with best-in-class IoT security practices and protocols.',
    },
  ];

  const industriesServed = [
    'Smart Homes & Buildings',
    'Healthcare & Wearables',
    'Manufacturing & Industrial IoT',
    'Retail & Supply Chain',
    'Automotive & Transportation',
  ];

  const whyChoosePoints = [
    'Expertise in connected systems and sensor technology',
    'Cross-platform software & hardware integration',
    'Cloud-native & scalable architecture',
    'Secure and compliant IoT solutions',
    'Real-time monitoring and automation',
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
                className="text-[#1a1a1a] uppercase mb-8 text-[32px] sm:text-[52px] md:text-[76px] lg:text-[90px] leading-[1.05] tracking-[1px] font-normal"
                style={{
                  fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                INTERNET OF THINGS (IOT)
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Unlock the power of smart connectivity with our Internet of Things (IoT) solutions. We design and develop intelligent IoT systems that collect, analyze, and act on data from connected devices — helping your business operate smarter and faster.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="Internet of Things (IoT)"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* OUR IOT SERVICES INCLUDE: */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                OUR IOT SERVICES INCLUDE:
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

          {/* INDUSTRIES WE SERVE: */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                INDUSTRIES WE SERVE:
              </h2>

              <ul className="space-y-2.5 ml-2">
                {industriesServed.map((point, index) => (
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

          {/* WHY CHOOSE US FOR IOT SOLUTIONS? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY CHOOSE US FOR IOT SOLUTIONS?
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

          {/* LET'S CONNECT YOUR BUSINESS TO THE FUTURE */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                LET&apos;S CONNECT YOUR BUSINESS TO THE FUTURE
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Whether you&apos;re building smart devices, monitoring assets, or automating operations, our IoT development team is here to transform your vision into intelligent reality.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function BlockchainApplicationClient() {
  const whatBlockchainCanDo = [
    'Automation',
    'Reduced Data Storage Cost',
    'Increased Efficiency & Speed',
    'Eliminates Duplication of Data',
    'Enhanced Data Security',
  ];

  const serviceCards = [
    {
      title: 'Smart Contract Development',
      desc: 'We design smart contracts for Ethereum, Hyperledger Fabric, and more to automate and secure transactions.',
    },
    {
      title: 'Blockchain Exchange Development',
      desc: 'Compete with global platforms like Coinbase or Binance by building a secure, scalable crypto exchange.',
    },
    {
      title: 'Blockchain App Consulting',
      desc: 'Our experts provide strategic consulting to build a robust and market-ready blockchain application.',
    },
    {
      title: 'Hyperledger Development',
      desc: 'Harness the power of Hyperledger Fabric and Multichain for enterprise-level app development.',
    },
    {
      title: 'Enterprise Blockchain Development',
      desc: 'From ideation to launch, we build scalable applications tailored for maximum business ROI.',
    },
    {
      title: 'Migration & Upgrades',
      desc: 'We help modernize your existing solutions by securely migrating to blockchain-based infrastructure.',
    },
    {
      title: 'Maintenance & Support',
      desc: 'Round-the-clock support and upgrades for OS releases, APIs, and third-party integrations.',
    },
  ];

  const industriesWeServe = [
    'Travel & Hospitality',
    'Supply Chain & Logistics',
    'Insurance',
    'Retail & eCommerce',
    'Real Estate',
    'IoT & Smart Devices',
  ];

  const whyChoosePoints = [
    'Top Blockchain development company in India & USA with proven expertise.',
    'We adopt emerging technologies and deliver future-ready solutions rapidly.',
    'Timely delivery, cost-effective solutions, and 24x7 support.',
    'Team of tech-savvy Blockchain developers and creative UI/UX designers.',
    'We help you understand and implement the potential of Blockchain for your business.',
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
                BLOCKCHAIN APPLICATION DEVELOPMENT
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                The world is moving rapidly toward digitalization, and soon, the entire financial system will be digital. Blockchain is one of the most promising technologies of the future, often misunderstood as being limited to cryptocurrencies. At <strong className="font-bold">DesignDot</strong>, we empower enterprises with secure, decentralized solutions that go beyond finance. Our Blockchain App Development services are built to enhance transparency, security, and trust in data transfer.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="Blockchain Application Development"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* THE FUTURE IS DECENTRALIZED */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-8">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                THE FUTURE IS DECENTRALIZED
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Blockchain offers industries a decentralized, democratic, and secure system for recording and transferring data. The process and cost benefits of Blockchain app development are inspiring organizations to partner with Blockchain experts like <strong className="font-bold">DesignDot</strong>. We&apos;re one of the leading Blockchain application development companies in the USA and India, dedicated to security, innovation, and transparency.
              </p>
            </div>
          </div>

          {/* OUR EXPERTISE IN BLOCKCHAIN SOFTWARE DEVELOPMENT */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-8">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                OUR EXPERTISE IN BLOCKCHAIN SOFTWARE DEVELOPMENT
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                As a full-stack blockchain software company, we develop unique and secure platforms to meet your business needs—ensuring data is reliable and verifiable. Our framework integrates Blockchain with AI, data analytics, IoT, and advanced cybersecurity measures. From startups to enterprises, we deliver what our clients actually need, thanks to our dedicated and experienced Blockchain developers and mobile app teams.
              </p>
            </div>
          </div>

          {/* WHAT CAN BLOCKCHAIN DO FOR YOU? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHAT CAN BLOCKCHAIN DO FOR YOU?
              </h2>

              <ul className="space-y-2.5 ml-2">
                {whatBlockchainCanDo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OUR BLOCKCHAIN DEVELOPMENT SERVICES */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-14">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                OUR BLOCKCHAIN DEVELOPMENT SERVICES
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCards.map((card, index) => (
                  <div
                    key={index}
                    className="group relative rounded-lg border border-[#e0d8d0] border-l-[4px] border-l-[#f27820] p-6 sm:p-8 flex flex-col justify-start bg-white text-slate-800 hover:bg-[#f27820] hover:text-white hover:border-[#f27820] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform hover:-translate-y-2.5 hover:shadow-2xl cursor-pointer overflow-hidden"
                  >
                    <div className="mb-5">
                      <div className="w-[52px] h-[52px] rounded-lg flex items-center justify-center bg-[#fcf3ec] text-[#f27820] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-white group-hover:text-[#f27820]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-[28px] h-[28px]"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="8.5 12 11 14.5 15.5 10" />
                        </svg>
                      </div>
                    </div>
                    <h3
                      className="mb-3 text-[18px] md:text-[20px] font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold'",
                        letterSpacing: '0.2px',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-[#1a1a1a] group-hover:text-white/95 transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular'",
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 400,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INDUSTRIES WE SERVE WITH BLOCKCHAIN */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                INDUSTRIES WE SERVE WITH BLOCKCHAIN
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                At <strong className="font-bold">DesignDot</strong>, we specialize in Blockchain solutions for various industries—revitalizing operations and integrating future technologies like AI, IoT, AR/VR, and machine learning.
              </p>

              <ul className="space-y-2.5 ml-2">
                {industriesWeServe.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* WHY CHOOSE BLOCKCHAIN DEVELOPMENT SERVICES FROM DESIGNDOT? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY CHOOSE BLOCKCHAIN DEVELOPMENT SERVICES FROM DESIGNDOT?
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
        </main>
      </div>

      <Footer />
    </div>
  );
}

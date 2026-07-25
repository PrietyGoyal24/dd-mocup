'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function CloudMigrationClient() {
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
                .CLOUD MIGRATION & MODERNIZATION
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Transform Your Business with Cloud Migration and Modernization.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Move beyond legacy systems and embrace the agility, scalability, and innovation of the cloud.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Our solutions help organizations migrate seamlessly, modernize applications, and unlock new opportunities for growth.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Cloud Migration and Modernization"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Our Core Services */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR CORE <span className="text-[#f27820]">SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Strategic Cloud Migration',
                    desc: 'Move workloads with zero disruption and enterprise-grade security.',
                  },
                  {
                    title: 'Rehosting (Lift & Shift)',
                    desc: 'Fast-track migration from physical infrastructure to the cloud.',
                  },
                  {
                    title: 'Replatforming',
                    desc: 'Modernize operating systems and databases while reducing licensing costs.',
                  },
                  {
                    title: 'Application Modernization',
                    desc: 'Transform monolithic software into agile cloud-native applications.',
                  },
                  {
                    title: 'Containerization',
                    desc: 'Deploy applications using Docker and Kubernetes for scalable environments.',
                  },
                  {
                    title: 'Data & AI Modernization',
                    desc: 'Prepare enterprise data for AI, analytics, and predictive intelligence.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl px-6 py-6 shadow-sm">
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[14px] md:text-[15px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                KEY <span className="text-[#f27820]">FEATURES</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Seamless Cloud Migration',
                  'Application Modernization',
                  'Hybrid & Multi-Cloud Support',
                  'Security & Compliance',
                  'Automation & AI Tools',
                  'Cost Optimization',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] px-5 py-4 text-[#0e2038] font-bold text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cloud Modernization Solutions Offered */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                CLOUD MODERNIZATION <span className="text-[#f27820]">SOLUTIONS OFFERED</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: 'Cloud Migration',
                    items: ['Lift-and-Shift', 'Replatforming', 'Rehosting'],
                  },
                  {
                    category: 'Application Modernization',
                    items: ['Microservices', 'Containerization', 'Serverless Architecture'],
                  },
                  {
                    category: 'Data Modernization',
                    items: ['Cloud Databases', 'Analytics Platforms', 'AI Integration'],
                  },
                  {
                    category: 'Infrastructure Modernization',
                    items: ['Virtual Machines', 'Kubernetes', 'Hybrid Cloud'],
                  },
                  {
                    category: 'Security & Governance',
                    items: ['Identity Management', 'Compliance Frameworks', 'Data Protection'],
                  },
                ].map((group, idx) => (
                  <div key={idx}>
                    <div className="flex items-start mb-3">
                      <span className="text-[#1a1a1a] mr-2 font-bold text-[15px] mt-[1px]">•</span>
                      <span
                        className="text-[#1a1a1a] font-bold text-[15px] md:text-[16px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {group.category}
                      </span>
                    </div>
                    <ul className="ml-6 space-y-2">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#444444] mr-2 text-[13px] mt-[2px]">•</span>
                          <span
                            className="text-[#444444] text-[13px] md:text-[14px] leading-relaxed"
                            style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Cloud Migration & Modernization Process */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-3 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR CLOUD MIGRATION & <span className="text-[#f27820]">MODERNIZATION PROCESS</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Our structured process ensures a smooth, secure, and efficient cloud transformation journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { num: '01', label: 'ASSESSMENT & DISCOVERY' },
                  { num: '02', label: 'PLANNING & DESIGN' },
                  { num: '03', label: 'EXECUTION' },
                  { num: '04', label: 'TESTING & VALIDATION' },
                  { num: '05', label: 'OPTIMIZATION & SUPPORT' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm"
                  >
                    <div className="w-[46px] h-[46px] rounded-full bg-[#f27820] flex items-center justify-center shrink-0">
                      <span
                        className="text-white font-bold text-[14px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {item.num}
                      </span>
                    </div>
                    <span
                      className="text-[#0e2038] font-bold text-[15px] md:text-[16px] tracking-[1px] uppercase"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Your AWS 7R's Migration Journey Simplified */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-3 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                YOUR AWS 7R&apos;S MIGRATION JOURNEY <span className="text-[#f27820]">SIMPLIFIED</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                We evaluate your IT portfolio using the industry-standard 7Rs framework to determine the right strategy for every workload.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Rehost',
                  'Replatform',
                  'Refactor',
                  'Repurchase',
                  'Retire',
                  'Retain',
                  'Relocate',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] px-5 py-4 text-[#0e2038] font-bold text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Design Dot For Cloud Migration & Modernization? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY CHOOSE DESIGN DOT FOR <span className="text-[#f27820]">CLOUD MIGRATION & MODERNIZATION?</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Proven Cloud Expertise',
                  'End-to-End Migration Solutions',
                  'Tailored Cloud Strategies',
                  'Enterprise Security & Compliance',
                  'Cost-Efficient Cloud Transformation',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] px-5 py-4 text-[#0e2038] font-bold text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                KEY <span className="text-[#f27820]">BENEFITS</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  '40% Lower Total Cost of Ownership',
                  'Global Scalability',
                  'Enhanced Security & Compliance',
                  'Faster Innovation & CI/CD Pipelines',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] px-5 py-4 text-[#0e2038] font-bold text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

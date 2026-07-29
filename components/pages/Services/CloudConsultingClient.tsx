'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { Check } from 'lucide-react';

export default function CloudConsultingClient() {
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
                .CLOUD CONSULTING SERVICES
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Leverage our deep cloud expertise to develop a clear strategy, accelerate transformation, and ensure secure, scalable, and optimized cloud adoption for your business.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Cloud Consulting Services"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Why Cloud Consulting? */}
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
                WHY <span className="text-[#f27820]">CLOUD CONSULTING?</span>
              </h2>

              <ul className="space-y-3 mb-8 ml-2">
                {[
                  { title: 'Expert Guidance', desc: 'Get tailored strategies for cloud adoption and transformation' },
                  { title: 'Risk Reduction', desc: 'Avoid costly mistakes with experienced cloud consultants' },
                  { title: 'Accelerated ROI', desc: 'Optimize performance and reduce cloud spend' },
                  { title: 'Future-Ready', desc: 'Ensure cloud solutions align with your long-term business goals' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      <strong className="text-[#1a1a1a] font-bold" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Cloud Consulting Services */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR CLOUD CONSULTING <span className="text-[#f27820]">SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Cloud Readiness Assessment',
                    desc: 'Evaluate your current IT landscape and cloud fit',
                  },
                  {
                    title: 'Cloud Strategy & Roadmap',
                    desc: 'Design a custom strategy aligned with business goals',
                  },
                  {
                    title: 'Cost Optimization',
                    desc: 'Reduce unnecessary cloud expenses and improve efficiency',
                  },
                  {
                    title: 'Security & Compliance',
                    desc: 'Assess cloud risks and implement best-practice security',
                  },
                  {
                    title: 'Architecture Design',
                    desc: 'Build scalable, high-performing, and secure cloud architectures',
                  },
                  {
                    title: 'Vendor Selection',
                    desc: 'Choose the right cloud platform: AWS, Azure, GCP, or hybrid',
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] rounded-r-xl p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#fff0e6] border border-[#f27820]/20 flex items-center justify-center text-[#f27820] mb-4">
                        <Check className="w-5 h-5 text-[#f27820] stroke-[2.5]" />
                      </div>
                      <h3
                        className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-2"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-[#444444] text-[14px] md:text-[15px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Supported Cloud Platforms */}
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
                SUPPORTED <span className="text-[#f27820]">CLOUD PLATFORMS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'AWS',
                    desc: 'Certified AWS consulting for architecture and operations',
                  },
                  {
                    title: 'Microsoft Azure',
                    desc: 'Azure design and optimization strategies',
                  },
                  {
                    title: 'Google Cloud (GCP)',
                    desc: 'GCP planning, setup, and cost management',
                  },
                  {
                    title: 'Hybrid & Multi-Cloud',
                    desc: 'Build flexible multi-cloud or hybrid environments',
                  },
                  {
                    title: 'Private Cloud',
                    desc: 'Consulting on custom and secure private cloud setups',
                  },
                  {
                    title: 'Cloud Migration Support',
                    desc: 'Pre- and post-migration planning and execution',
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] rounded-r-xl p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#fff0e6] border border-[#f27820]/20 flex items-center justify-center text-[#f27820] mb-4">
                        <Check className="w-5 h-5 text-[#f27820] stroke-[2.5]" />
                      </div>
                      <h3
                        className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-2"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-[#444444] text-[14px] md:text-[15px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Approach */}
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
                OUR <span className="text-[#f27820]">APPROACH</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Discovery',
                    desc: 'Understand current infrastructure and business needs',
                  },
                  {
                    title: 'Planning',
                    desc: 'Define cloud goals and select the right architecture',
                  },
                  {
                    title: 'Implementation Support',
                    desc: 'Work alongside your team to ensure successful execution',
                  },
                  {
                    title: 'Governance',
                    desc: 'Establish policies for usage, cost, and compliance',
                  },
                  {
                    title: 'Monitoring & Optimization',
                    desc: 'Continuously refine for performance and ROI',
                  },
                  {
                    title: 'Training & Handover',
                    desc: 'Empower your team with the right knowledge and tools',
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] rounded-r-xl p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#fff0e6] border border-[#f27820]/20 flex items-center justify-center text-[#f27820] mb-4">
                        <Check className="w-5 h-5 text-[#f27820] stroke-[2.5]" />
                      </div>
                      <h3
                        className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-2"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-[#444444] text-[14px] md:text-[15px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Benefits & Why Choose Us */}
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
                BUSINESS <span className="text-[#f27820]">BENEFITS</span>
              </h2>

              <ul className="space-y-2.5 mb-10 ml-2">
                {[
                  'Informed and risk-free cloud adoption decisions',
                  'Faster go-to-market with scalable infrastructure',
                  'Lower total cost of ownership and increased ROI',
                  'Enhanced security, performance, and compliance',
                  'Greater agility and innovation across your business',
                  'Ongoing support for evolving cloud needs',
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY <span className="text-[#f27820]">CHOOSE US?</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Our experienced consultants bring industry expertise, certified cloud knowledge, and proven methodologies to help you navigate the complexities of cloud transformation with confidence and clarity.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

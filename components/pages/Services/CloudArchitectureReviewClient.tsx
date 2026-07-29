'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function CloudArchitectureReviewClient() {
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
                .CLOUD ARCHITECTURE REVIEW
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Optimize Your Cloud Environment with Expert Architecture Review.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Ensure your cloud infrastructure is secure, scalable, and cost-efficient.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Our Cloud Architecture Review helps organizations identify gaps, improve performance, and align cloud strategy with business goals.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Cloud Architecture Review"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* DESIGNDOT - YOUR PARTNER IN ENHANCING YOUR CLOUD JOURNEY */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-2 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                DESIGNDOT – <span className="text-[#f27820]">YOUR PARTNER IN ENHANCING YOUR CLOUD JOURNEY</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Accelerate your digital transformation with tailored cloud migration, modernization, and optimization solutions.
              </p>

              <h3
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[16px] sm:text-[18px] md:text-[20px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR <span className="text-[#f27820]">SPECIALITIES</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Cloud Migration',
                    desc: 'Smooth transition of workloads, applications, and data to the cloud with minimal disruption.',
                  },
                  {
                    title: 'Application Modernization',
                    desc: 'Refactor, rebuild, and optimize applications using cloud-native technologies.',
                  },
                  {
                    title: 'Cloud Architecture Review',
                    desc: 'Assess and optimize your cloud environment for security, performance, and cost efficiency.',
                  },
                  {
                    title: 'Hybrid & Multi-Cloud Solutions',
                    desc: 'Run workloads seamlessly across AWS, Azure, Google Cloud, and hybrid infrastructures.',
                  },
                  {
                    title: 'Security & Compliance',
                    desc: 'Enterprise-grade protection aligned with industry standards and regulations.',
                  },
                  {
                    title: 'Cost Optimization',
                    desc: 'Intelligent resource management to maximize cloud ROI and efficiency.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl px-6 py-6 shadow-sm">
                    <h4
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h4>
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

          {/* Why Partner With DesignDot? */}
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
                WHY PARTNER WITH <span className="text-[#f27820]">DESIGNDOT?</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Certified Cloud Experts',
                  'Tailored Cloud Strategies',
                  'Access to AI & Advanced Analytics',
                  'Reliable & Resilient Infrastructure',
                  'End-to-End Cloud Support',
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

          {/* Why Your Business Needs A Cloud Architecture Review */}
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
                WHY YOUR BUSINESS NEEDS A <span className="text-[#f27820]">CLOUD ARCHITECTURE REVIEW</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Cloud adoption alone isn&apos;t enough. Businesses must ensure their architecture is secure, scalable, resilient, and aligned with long-term business goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { num: '01', label: 'PERFORMANCE OPTIMIZATION' },
                  { num: '02', label: 'SECURITY & COMPLIANCE' },
                  { num: '03', label: 'COST EFFICIENCY' },
                  { num: '04', label: 'SCALABILITY & RELIABILITY' },
                  { num: '05', label: 'BEST PRACTICES ALIGNMENT' },
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

          {/* Core Tools & Technologies */}
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
                CORE TOOLS & <span className="text-[#f27820]">TECHNOLOGIES</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: 'Cloud Native Tools',
                    items: ['AWS Well-Architected Tool', 'Azure Advisor', 'Google Cloud Operations Suite'],
                  },
                  {
                    category: 'Monitoring & Observability',
                    items: ['Prometheus', 'Grafana', 'Datadog', 'New Relic'],
                  },
                  {
                    category: 'Security & Compliance',
                    items: ['Prisma Cloud', 'Check Point CSPM', 'IAM Reviews', 'HIPAA / GDPR / SOC 2'],
                  },
                  {
                    category: 'Cost Optimization',
                    items: ['CloudHealth by VMware', 'AWS Cost Explorer', 'Azure Cost Management', 'FinOps Governance'],
                  },
                  {
                    category: 'Automation & IaC',
                    items: ['Terraform', 'Ansible', 'Chef', 'Kubernetes'],
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

          {/* Benefits For Your Business */}
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
                BENEFITS FOR <span className="text-[#f27820]">YOUR BUSINESS</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Future-Ready Cloud Infrastructure',
                  'Improved Efficiency & Resource Utilization',
                  'Faster AI & Innovation Adoption',
                  'High Availability & Disaster Recovery',
                  'Strategic Business Alignment',
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

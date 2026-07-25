'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function AzureCloudServiceClient() {
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
                .AZURE CLOUD SERVICE
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Empowering Innovation in the Cloud.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Azure Cloud Service is a fully managed platform designed to help businesses build, deploy, and scale applications with unmatched flexibility and reliability.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Whether you&apos;re a startup or an enterprise, Azure provides the tools and infrastructure to accelerate digital transformation.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="Azure Cloud Service"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
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
                  'Global Reach across 60+ Regions',
                  'Automatic Scalability',
                  'Hybrid Cloud Capability',
                  'Enterprise Security & Compliance',
                  'Pay-as-You-Go Pricing',
                  'Microsoft Ecosystem Integration',
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] px-5 py-4 text-[#0e2038] font-bold text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Azure Services We Offer */}
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
                AZURE SERVICES <span className="text-[#f27820]">WE OFFER</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                At Design Dot, we help businesses unlock the full potential of Microsoft Azure with scalable, secure, and AI-powered cloud solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Azure Cloud Migration',
                    desc: 'Seamlessly migrate workloads to Azure with minimal disruption and optimized performance.',
                  },
                  {
                    title: 'AI & Machine Learning',
                    desc: 'Build intelligent applications with Azure AI and machine learning tools.',
                  },
                  {
                    title: 'Data & Analytics',
                    desc: 'Transform data into actionable insights using Azure Synapse Analytics and Power BI.',
                  },
                  {
                    title: 'Infrastructure Management',
                    desc: 'Optimize virtual machines, Kubernetes, and cloud resources for scalability.',
                  },
                  {
                    title: 'Security & Compliance',
                    desc: 'Protect applications and data with enterprise-grade security tools.',
                  },
                  {
                    title: 'Backup & Disaster Recovery',
                    desc: 'Ensure business continuity with Azure Backup and Site Recovery.',
                  },
                  {
                    title: 'DevOps & CI/CD',
                    desc: 'Automate development pipelines and improve deployment workflows.',
                  },
                  {
                    title: 'IoT Solutions',
                    desc: 'Connect and manage IoT devices with Azure IoT Hub and Digital Twins.',
                  },
                  {
                    title: 'Cost Management',
                    desc: 'Optimize cloud spending with auto-scaling and cost management tools.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl px-6 py-6 shadow-sm"
                  >
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

          {/* Why Choose Azure */}
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
                WHY CHOOSE <span className="text-[#f27820]">AZURE?</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'AI-Powered Services',
                  'Scalable Infrastructure',
                  'Enterprise-Grade Security',
                  'Global Cloud Reach',
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

          {/* Popular Azure Services */}
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
                POPULAR AZURE <span className="text-[#f27820]">SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: 'Compute',
                    items: ['Azure Virtual Machines', 'Azure Functions'],
                  },
                  {
                    category: 'Storage',
                    items: ['Azure Blob Storage', 'Azure Disk Storage'],
                  },
                  {
                    category: 'Databases',
                    items: ['Azure SQL Database', 'Cosmos DB'],
                  },
                  {
                    category: 'Networking',
                    items: ['Azure Virtual Network', 'Azure CDN'],
                  },
                  {
                    category: 'AI/ML',
                    items: ['Azure Machine Learning', 'Cognitive Services'],
                  },
                  {
                    category: 'Security',
                    items: ['Azure Active Directory', 'Key Vault'],
                  },
                ].map((group, idx) => (
                  <div key={idx}>
                    <div className="flex items-start mb-2">
                      <span className="text-[#1a1a1a] mr-2 font-bold text-[15px]">•</span>
                      <span
                        className="text-[#1a1a1a] font-bold text-[15px] md:text-[16px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {group.category}
                      </span>
                    </div>
                    <ul className="ml-6 space-y-1">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#444444] mr-2 text-[13px]">•</span>
                          <span
                            className="text-[#444444] text-[13px] md:text-[14px]"
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

          {/* Azure Use Cases */}
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
                AZURE <span className="text-[#f27820]">USE CASES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { num: '01', label: 'STARTUPS' },
                  { num: '02', label: 'ENTERPRISES' },
                  { num: '03', label: 'DEVELOPERS' },
                  { num: '04', label: 'GOVERNMENT & HEALTHCARE' },
                  { num: '05', label: 'AI & IOT PROJECTS' },
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

          {/* Benefits for Users */}
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
                BENEFITS FOR <span className="text-[#f27820]">USERS</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Flexible Workloads & OS Support',
                  'Cost-Efficient Infrastructure',
                  'Access to AI & IoT Innovation',
                  'High Availability & Disaster Recovery',
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] px-5 py-4 text-[#0e2038] font-bold text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.2] text-[18px] sm:text-[22px] md:text-[24px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                FREQUENTLY <span className="text-[#f27820]">ASKED QUESTIONS</span>
              </h2>

              <div className="border-t border-[#e0d8d0]/30 space-y-0">
                {[
                  {
                    id: 1,
                    question: '1. What is Azure Cloud Service?',
                    answer:
                      'Azure Cloud Service is a fully managed platform by Microsoft that allows businesses to build, deploy, and scale applications in the cloud with high reliability and flexibility.',
                  },
                  {
                    id: 2,
                    question: '2. How does Azure ensure enterprise security?',
                    answer:
                      'Azure provides built-in security features including Azure Active Directory, Key Vault, advanced threat protection, encryption, and compliance with global standards like GDPR and HIPAA.',
                  },
                  {
                    id: 3,
                    question: '3. Can Azure support hybrid cloud environments?',
                    answer:
                      'Yes, Azure is specifically designed to support hybrid cloud environments, allowing seamless integration between on-premises infrastructure and cloud services.',
                  },
                  {
                    id: 4,
                    question: '4. How does Azure pricing work?',
                    answer:
                      'Azure follows a pay-as-you-go pricing model, meaning you only pay for the resources and services you actually use, with flexible options for reserved instances to reduce costs.',
                  },
                ].map((faq) => (
                  <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-[#e0d8d0]/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left font-bold text-[16px] md:text-[18px] text-[#0e2038] hover:text-[#f27820] focus:outline-none transition-colors duration-200"
        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
      >
        <span>{question}</span>
        {isOpen ? (
          <span className="text-[#f27820] font-bold text-[22px] leading-none shrink-0 ml-4 select-none">-</span>
        ) : (
          <span className="text-[#f27820] font-bold text-[22px] leading-none shrink-0 ml-4 select-none">+</span>
        )}
      </button>
      {isOpen && (
        <div
          className="pb-6 text-black text-[16px] md:text-[21px] leading-[26px]"
          style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

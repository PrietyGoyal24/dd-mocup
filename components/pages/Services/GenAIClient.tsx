'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { Plus, Minus } from 'lucide-react';

export default function GenAIClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: '1. What is Generative AI?',
      answer:
        'Generative AI refers to artificial intelligence models capable of generating new content such as text, images, code, audio, or synthetic data based on patterns learned from existing data.',
    },
    {
      question: '2. How can Gen AI benefit my business?',
      answer:
        'Gen AI streamlines workflows, automates creative & repetitive tasks, enhances customer engagement with intelligent conversational agents, accelerates software development, and reveals hidden insights from complex data.',
    },
    {
      question: '3. What industries can leverage Gen AI?',
      answer:
        'Industries across Marketing & Sales, Healthcare, Finance, Retail & E-Commerce, Education, Government, and Technology can leverage Gen AI for competitive transformation.',
    },
    {
      question: '4. What services do you offer under Gen AI?',
      answer:
        'We offer AI-powered content creation, design & visual innovation, software development acceleration, data insights & summarization, and custom conversational AI solutions.',
    },
    {
      question: '5. Is Gen AI secure and compliant?',
      answer:
        'Yes, our solutions incorporate enterprise-grade security including IAM controls, cloud security posture management, data encryption, and compliance frameworks such as GDPR, HIPAA, and ISO.',
    },
  ];

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
                .GENERATIVE AI SOLUTIONS
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Revolutionizing Business with Generative AI.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Harness the power of Generative AI to innovate, automate, and transform the way your organization creates, analyzes, and delivers value.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Generative AI Solutions"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Empowering Innovation with Gen AI Services */}
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
                EMPOWERING INNOVATION WITH <span className="text-[#f27820]">GEN AI SERVICES</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                We help businesses unlock creativity, efficiency, and growth by harnessing the transformative power of Generative AI.
              </p>

              <h3
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[16px] sm:text-[18px] md:text-[20px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR GEN AI <span className="text-[#f27820]">SERVICES</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'AI-Powered Content Creation',
                    desc: 'Automate marketing copy, product descriptions, and personalized communications.',
                  },
                  {
                    title: 'Design & Visual Innovation',
                    desc: 'Generate branding assets, prototypes, and visuals with AI-driven creativity.',
                  },
                  {
                    title: 'Software Development Acceleration',
                    desc: 'Reduce development cycles with AI-assisted coding tools.',
                  },
                  {
                    title: 'Data Insights & Summarization',
                    desc: 'Convert complex data into actionable AI-powered insights.',
                  },
                  {
                    title: 'Conversational AI Solutions',
                    desc: 'Deploy intelligent chatbots and virtual assistants for seamless customer interaction.',
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

          {/* Industry Applications */}
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
                INDUSTRY <span className="text-[#f27820]">APPLICATIONS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { num: '01', label: 'MARKETING & SALES' },
                  { num: '02', label: 'HEALTHCARE' },
                  { num: '03', label: 'FINANCE' },
                  { num: '04', label: 'RETAIL & E-COMMERCE' },
                  { num: '05', label: 'EDUCATION & GOVERNMENT' },
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

          {/* Our Methodology For Delivering Generative AI Services */}
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
                OUR METHODOLOGY FOR DELIVERING <span className="text-[#f27820]">GENERATIVE AI SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Discovery & Assessment',
                  'Strategy & Roadmap',
                  'Design & Development',
                  'Implementation & Integration',
                  'Testing & Validation',
                  'Optimization & Scaling',
                  'Support & Continuous Improvement',
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

          {/* Advanced Tools & Technologies Powering Our Gen AI Solutions */}
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
                ADVANCED TOOLS & TECHNOLOGIES <span className="text-[#f27820]">POWERING OUR GEN AI SOLUTIONS</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                We combine cutting-edge AI models, cloud platforms, and DevOps practices to deliver scalable, secure, and future-ready Gen AI solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: 'Core AI Technologies',
                    items: [
                      'Large Language Models (LLMs)',
                      'Image & Design Generation Models',
                      'Code Generation AI',
                      'Speech & Audio AI',
                    ],
                  },
                  {
                    category: 'Cloud Platforms',
                    items: [
                      'Amazon Web Services (AWS)',
                      'Microsoft Azure',
                      'Google Cloud Platform (GCP)',
                      'Hybrid & Multi-Cloud Solutions',
                    ],
                  },
                  {
                    category: 'DevOps & Infrastructure',
                    items: [
                      'Docker & Kubernetes',
                      'Terraform & Ansible',
                      'Jenkins & GitHub Actions',
                      'Prometheus & Grafana',
                    ],
                  },
                  {
                    category: 'Security & Compliance',
                    items: [
                      'Identity & Access Management (IAM)',
                      'Cloud Security Posture Management',
                      'GDPR, HIPAA & ISO Compliance',
                      'Enterprise Data Encryption',
                    ],
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

          {/* Benefits Of Our Technology Stack */}
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
                BENEFITS OF OUR <span className="text-[#f27820]">TECHNOLOGY STACK</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Scalable AI Architectures',
                  'Workflow Automation & Efficiency',
                  'AI & Advanced Analytics Innovation',
                  'Enterprise-Grade Security',
                  'Future-Ready Cloud-Native Solutions',
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

          {/* FAQ Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                GENERATIVE AI <span className="text-[#f27820]">FREQUENTLY ASKED QUESTIONS</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center text-left py-2 focus:outline-none group cursor-pointer"
                    >
                      <span
                        className="text-[#0e2038] font-bold text-[16px] md:text-[18px] pr-4 group-hover:text-[#f27820] transition-colors"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {faq.question}
                      </span>
                      <span className="text-[#f27820] shrink-0">
                        {openFaq === index ? (
                          <Minus className="w-5 h-5 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2.5]" />
                        )}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="mt-2 pr-8 animate-in fade-in duration-200">
                        <p
                          className="text-[#444444] text-[14px] md:text-[15px] leading-relaxed"
                          style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    )}
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

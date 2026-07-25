'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function AWSClient() {
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
                .AMAZON WEB SERVICES
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Leverage cutting-edge AWS cloud services from Designdot top industry experts to unlock new growth opportunities and harness the full potential of cloud technology for your business.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="Amazon Web Services"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Key Features for Users */}
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
                KEY FEATURES FOR <span className="text-[#f27820]">USERS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'On-Demand Access',
                  'Pay-as-You-Go Pricing',
                  'Global Infrastructure',
                  'Scalability',
                  'Enterprise-Grade Security',
                  'Wide Service Portfolio',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-7 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] flex items-center"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[16px] md:text-[18px]"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top-Class AWS Services We Offer */}
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
                TOP-CLASS AWS SERVICES <span className="text-[#f27820]">WE OFFER</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'AWS Cloud Migration',
                    desc: 'Seamlessly transition your infrastructure to AWS with minimal disruption and maximum efficiency.',
                  },
                  {
                    title: 'Cloud Architecture & Design',
                    desc: 'Build robust and scalable cloud architecture aligned with your business goals.',
                  },
                  {
                    title: 'Managed AWS Services',
                    desc: 'Ongoing cloud management, monitoring, and optimization for peak performance.',
                  },
                  {
                    title: 'AWS Security & Compliance',
                    desc: 'Advanced security measures ensuring compliance with industry standards.',
                  },
                  {
                    title: 'Big Data & Analytics',
                    desc: 'Real-time analytics and big data processing solutions.',
                  },
                  {
                    title: 'Machine Learning & AI Solutions',
                    desc: 'AI and ML models hosted on AWS to automate processes and enhance decisions.',
                  },
                  {
                    title: 'DevOps Automation',
                    desc: 'Automated workflows and continuous integration on AWS.',
                  },
                  {
                    title: 'Cost Optimization',
                    desc: 'Maximize ROI with efficient AWS cost optimization strategies.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-2"
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

          {/* Why Users Choose AWS */}
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
                WHY USERS <span className="text-[#f27820]">CHOOSE AWS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Flexibility for startups and enterprises',
                  'Continuous innovation and rapid deployment',
                  'Cost-efficient cloud infrastructure',
                  'Agility to adapt to changing business needs',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-7 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] flex items-center"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[16px] md:text-[18px]"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The "Design Dot" Workflow: How to Build It */}
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
                THE "DESIGN DOT" WORKFLOW: <span className="text-[#f27820]">HOW TO BUILD IT</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                To create next-generation solutions, architects use visual diagramming tools that translate dots and lines directly into Infrastructure as Code.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'MAP THE USER JOURNEY' },
                  { num: '02', name: 'DEFINE THE EVENT' },
                  { num: '03', name: 'AUTOMATE THE GUARDRAILS' },
                  { num: '04', name: 'ANALYZE & OPTIMIZE' },
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

          {/* Why It Matters for Your Business */}
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
                WHY IT MATTERS FOR <span className="text-[#f27820]">YOUR BUSINESS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Faster Speed to Market',
                  'Future-Proof Cloud Infrastructure',
                  'Cost Efficiency with Scale-to-Zero Architecture',
                  'Flexible and Modular Event-Driven Systems',
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
                    question: '1. What is AWS, and what services does it offer?',
                    answer:
                      'AWS is a comprehensive cloud platform by Amazon offering services including computing, storage, databases, machine learning, analytics, and networking.',
                  },
                  {
                    id: 2,
                    question: '2. How does AWS pricing work?',
                    answer:
                      'AWS follows a pay-as-you-go pricing model, meaning customers only pay for the resources they consume.',
                  },
                  {
                    id: 3,
                    question: '3. What are the key security features provided by AWS?',
                    answer:
                      'AWS provides advanced security services, encryption, compliance certifications, and monitoring tools to protect applications and data.',
                  },
                  {
                    id: 4,
                    question: '4. How does AWS ensure compliance with industry standards?',
                    answer:
                      'AWS follows a shared responsibility model where AWS secures the infrastructure while customers secure their applications and data.',
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

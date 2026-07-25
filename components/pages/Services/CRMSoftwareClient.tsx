'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function CRMSoftwareClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is CRM software development?',
      answer:
        'Custom CRM software development involves designing and building applications tailored specifically to a company’s unique workflows, operational needs, and business goals.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. How long does it take to develop a CRM?',
      answer:
        'Project timelines depend on features, complexity, integrations, and business requirements. Smaller solutions may take a few months, while enterprise platforms can require longer development cycles.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. Can you integrate CRM with existing tools?',
      answer:
        'Yes. We develop software solutions that seamlessly integrate with existing business systems, third-party applications, APIs, cloud services, and legacy infrastructure.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. Do you provide post-development support?',
      answer:
        'Absolutely. We provide ongoing maintenance, monitoring, performance optimization, updates, and long-term technical support after deployment.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. Are your CRM solutions scalable?',
      answer:
        'Custom software offers greater flexibility, scalability, security, and long-term business value because it is built specifically around your operational requirements and growth goals.',
      isOpen: false,
    },
  ];

  const [faqs, setFaqs] = useState(initialFaqs);

  const toggleFaq = (id: number) => {
    setFaqs(
      faqs.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-8 text-[32px] sm:text-[56px] md:text-[76px] lg:text-[90px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-middle"></span>
                CRM SOFTWARE
                <span className="block">DEVELOPMENT</span>
              </h1>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="CRM Software Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Reliable CRM Development Services */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-8">
            <div className="w-full">
              <h2
                className="uppercase mb-2 text-[18px] sm:text-[20px] md:text-[22px] leading-[1.3] tracking-[1.5px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                }}
              >
                <span className="text-[#f27820]">RELIABLE CRM</span>{' '}
                <span className="text-[#555555]">DEVELOPMENT SERVICES</span>
              </h2>
              <div className="w-[60px] h-[3px] bg-[#f27820] mb-6" />
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We specialize in creating custom CRM software solutions that streamline business
                processes, improve customer relationships, and drive growth.
                <br />
                Our expertise ensures your CRM system is scalable, secure, and tailored to your
                unique business needs.
              </p>
            </div>
          </div>

          {/* CRM Services We Offer */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                CRM <span className="text-[#f27820]">SERVICES WE OFFER</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Custom CRM Development',
                    desc: 'Tailored solutions to fit your workflow and business goals.',
                  },
                  {
                    title: 'CRM Integration',
                    desc: 'Seamless integration with existing tools like ERP, marketing, and sales platforms.',
                  },
                  {
                    title: 'CRM Migration',
                    desc: 'Safe and efficient migration from legacy systems to modern CRM platforms.',
                  },
                  {
                    title: 'CRM Support & Maintenance',
                    desc: 'Ongoing updates, troubleshooting, and performance optimization.',
                  },
                  {
                    title: 'CRM Consulting',
                    desc: 'Expert advice to choose the best CRM strategy and technology stack.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 md:py-8 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed text-justify"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Your Best Custom CRM Development Company */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                YOUR BEST CUSTOM{' '}
                <span className="text-[#f27820]">CRM DEVELOPMENT COMPANY</span>
              </h2>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] mb-2"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our team combines deep industry knowledge with cutting-edge technology to deliver CRM
                solutions that empower your sales, marketing, and support teams.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Whether you need cloud-based, mobile, or AI-driven CRMs, we design systems that fit
                your business goals.
              </p>
            </div>
          </div>

          {/* Why Choose Us as Your CRM Software Development Agency */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY CHOOSE US AS YOUR{' '}
                <span className="text-[#f27820]">CRM SOFTWARE DEVELOPMENT AGENCY?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Experienced CRM developers with a track record of successful projects.',
                  'Agile methodology ensuring timely delivery and flexibility.',
                  'Commitment to data security, compliance, and scalability.',
                  'Transparent communication and client-centric approach.',
                  'Cost-effective solutions without compromising on quality.',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-8 rounded-r-lg shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex items-start"
                  >
                    <span
                      className="text-[#0e2038] text-[15px] md:text-[16px] font-bold leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ready to Build Next-Level Custom Digital Solutions */}
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
                READY TO BUILD NEXT-LEVEL{' '}
                <span className="text-[#f27820]">CUSTOM DIGITAL SOLUTIONS?</span>
              </h2>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] mb-2"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Partner with us to transform your customer interactions into strategic growth
                opportunities.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our CRM software is designed to enhance efficiency, improve customer satisfaction,
                and drive revenue.
              </p>
            </div>
          </div>

          {/* A Good CRM Software Always Allows You to Do More */}
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
                A GOOD CRM SOFTWARE ALWAYS{' '}
                <span className="text-[#f27820]">ALLOWS YOU TO DO MORE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                A robust CRM should:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Centralize customer data for easy access.',
                  'Automate repetitive tasks for sales and marketing.',
                  'Provide actionable insights with reporting and analytics.',
                  'Enable better collaboration among teams.',
                  'Enhance customer engagement and retention.',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-8 rounded-r-lg shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex items-start"
                  >
                    <span
                      className="text-[#0e2038] text-[15px] md:text-[16px] font-bold leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leading CRM Platform Tools */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                LEADING CRM PLATFORM <span className="text-[#f27820]">TOOLS THAT WE USE</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Enterprise CRM Platforms */}
                <div>
                  <h4
                    className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                  >
                    <span className="mr-2 font-bold">•</span> Enterprise CRM Platforms
                  </h4>
                  <ul className="space-y-2 pl-8">
                    {[
                      'Salesforce – Enterprise-grade CRM for sales, marketing, and customer support.',
                      'HubSpot CRM – Inbound marketing and automation-focused CRM.',
                      'Zoho CRM – Affordable, customizable solution for SMEs.',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-start font-bold"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        <span className="mr-2 mt-0.5 shrink-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advanced CRM Solutions */}
                <div>
                  <h4
                    className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                  >
                    <span className="mr-2 font-bold">•</span> Advanced CRM Solutions
                  </h4>
                  <ul className="space-y-2 pl-8">
                    {[
                      'Microsoft Dynamics 365 – Powerful CRM integrated with Microsoft tools.',
                      'Pipedrive & Freshworks – Sales-centric CRMs with intuitive interfaces.',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-start font-bold"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        <span className="mr-2 mt-0.5 shrink-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Leverage AI-Powered CRM Solutions */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                LEVERAGE <span className="text-[#f27820]">AI-POWERED CRM SOLUTIONS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our AI-integrated CRMs help you:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Predict customer behavior and personalize engagement.',
                  'Automate lead scoring and follow-ups.',
                  'Gain intelligent insights from data for better decision-making.',
                  'Reduce manual errors and improve operational efficiency.',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-8 rounded-r-lg shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex items-start"
                  >
                    <span
                      className="text-[#0e2038] text-[15px] md:text-[16px] font-bold leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hire CRM Software Developers */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                HIRE CRM SOFTWARE DEVELOPERS{' '}
                <span className="text-[#f27820]">TAILORED TO YOUR NEEDS</span>
              </h2>
              <p
                className="text-[#444444] mb-6 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our developers specialize in:
              </p>

              <div className="mb-6">
                <h4
                  className="text-[#1a1a1a] mb-3 text-[18px] md:text-[20px] flex items-center font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                >
                  <span className="mr-2 font-bold">•</span> CRM Development Expertise
                </h4>
                <ul className="space-y-2 pl-8">
                  {[
                    'Custom CRM design and development.',
                    'CRM integration and API development.',
                    'Mobile and cloud-based CRM solutions.',
                    'Ongoing CRM support and optimization.',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-start font-bold"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      <span className="mr-2 mt-0.5 shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                className="text-[#f27820] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Flexible hiring models ensure you get the right talent for your project.
              </p>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                INDUSTRIES <span className="text-[#f27820]">WE SERVE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We provide CRM solutions for diverse industries, including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'HEALTHCARE' },
                  { num: '02', name: 'RETAIL & E-COMMERCE' },
                  { num: '03', name: 'FINANCE & BANKING' },
                  { num: '04', name: 'MANUFACTURING' },
                  { num: '05', name: 'EDUCATION' },
                  { num: '06', name: 'REAL ESTATE' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-5 px-7 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out flex items-center gap-5"
                  >
                    <div className="w-[46px] h-[46px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[15px] shrink-0"
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

          {/* Key Benefits of CRM Development */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                KEY BENEFITS OF <span className="text-[#f27820]">CRM DEVELOPMENT</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Improved Engagement',
                    desc: 'Improved customer engagement and retention.',
                  },
                  {
                    title: 'Workflow Automation',
                    desc: 'Streamlined sales and marketing workflows.',
                  },
                  {
                    title: 'Advanced Analytics',
                    desc: 'Data-driven decision making with advanced analytics.',
                  },
                  {
                    title: 'Efficiency',
                    desc: 'Automation of repetitive tasks for efficiency.',
                  },
                  {
                    title: 'Scalable Solutions',
                    desc: 'Scalable and customizable solutions to grow with your business.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 md:py-8 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                  >
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

          {/* CRM Software Development Process Timeline */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR CRM SOFTWARE <span className="text-[#f27820]">DEVELOPMENT PROCESS</span>
              </h2>

              {/* Zigzag Timeline */}
              <div className="relative w-full mx-auto mt-10">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#f58331] transform md:-translate-x-1/2" />
                <div className="space-y-10 relative">
                  {[
                    {
                      step: '01',
                      title: 'REQUIREMENT ANALYSIS',
                      desc: 'Understanding business goals, workflows, and CRM requirements.',
                    },
                    {
                      step: '02',
                      title: 'CRM STRATEGY PLANNING',
                      desc: 'Defining architecture, integrations, and feature roadmap.',
                    },
                    {
                      step: '03',
                      title: 'UI/UX DESIGN',
                      desc: 'Designing intuitive and user-friendly CRM interfaces.',
                    },
                    {
                      step: '04',
                      title: 'DEVELOPMENT & INTEGRATION',
                      desc: 'Building CRM modules and integrating third-party systems.',
                    },
                    {
                      step: '05',
                      title: 'TESTING & OPTIMIZATION',
                      desc: 'Ensuring security, scalability, and smooth performance.',
                    },
                    {
                      step: '06',
                      title: 'DEPLOYMENT & SUPPORT',
                      desc: 'Launching CRM solutions with continuous support and updates.',
                    },
                  ].map((item, index) => {
                    const isEven = index % 2 === 1;
                    return (
                      <div
                        key={index}
                        className={`flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                      >
                        <div className="absolute left-6 md:left-1/2 w-[60px] h-[60px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[18px] md:text-[20px] transform -translate-x-1/2 z-10">
                          {item.step}
                        </div>
                        <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-[70px]' : 'md:pr-[70px]'}`}>
                          <div
                            className={`bg-white border border-[#e0d8d0]/40 rounded-2xl pt-6 pb-7 px-8 md:px-10 shadow-lg ${isEven ? 'text-left' : 'text-left md:text-center'}`}
                          >
                            <h3
                              className="text-[#0e2038] uppercase mb-[15px]"
                              style={{
                                fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                                fontSize: '18px',
                                lineHeight: '28px',
                                letterSpacing: '1px',
                                fontWeight: 700,
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              className="text-[#444444]"
                              style={{
                                fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0.5px',
                              }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <div className="hidden md:block w-1/2" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
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
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-[#e0d8d0]/30">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center py-6 text-left font-bold text-[16px] md:text-[18px] text-[#0e2038] hover:text-[#f27820] focus:outline-none transition-colors duration-200"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      <span>{faq.question}</span>
                      {faq.isOpen ? (
                        <span className="text-[#f27820] font-bold text-[22px] leading-none shrink-0 ml-4 select-none">-</span>
                      ) : (
                        <span className="text-[#f27820] font-bold text-[22px] leading-none shrink-0 ml-4 select-none">+</span>
                      )}
                    </button>
                    {faq.isOpen && (
                      <div
                        className="pb-6 text-black text-[16px] md:text-[21px] leading-[26px]"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {faq.answer}
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

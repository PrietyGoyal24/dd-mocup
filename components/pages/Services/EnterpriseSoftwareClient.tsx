'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function EnterpriseSoftwareClient() {
  const technologies = [
    {
      category: 'Frontend Development',
      items: ['React.js', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      category: 'Backend Development',
      items: ['Node.js', '.NET', 'Java', 'Python', 'PHP'],
    },
    {
      category: 'Mobile Development',
      items: ['iOS (Swift)', 'Android (Kotlin)', 'React Native', 'Flutter'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    },
  ];

  const managementLevels = [
    {
      title: 'OPERATIONAL LEVEL',
      desc: 'Automation tools and workflow systems that streamline daily tasks and reduce manual effort.',
    },
    {
      title: 'TACTICAL LEVEL',
      desc: 'Reporting dashboards, analytics systems, and performance monitoring tools that assist mid-level managers in decision-making.',
    },
    {
      title: 'STRATEGIC LEVEL',
      desc: 'Advanced data insights, forecasting systems, and enterprise applications that support executive-level planning and business growth strategies.',
    },
  ];

  const industries = [
    { step: '01', name: 'HEALTHCARE' },
    { step: '02', name: 'FINTECH & BANKING' },
    { step: '03', name: 'E-COMMERCE & RETAIL' },
    { step: '04', name: 'MANUFACTURING' },
    { step: '05', name: 'LOGISTICS & TRANSPORTATION' },
    { step: '06', name: 'EDUCATION & EDTECH' },
    { step: '07', name: 'REAL ESTATE' },
    { step: '08', name: 'TRAVEL & HOSPITALITY' },
    { step: '09', name: 'SAAS & TECHNOLOGY STARTUPS' },
  ];

  const initialFaqs = [
    {
      id: 1,
      question: '1. What is custom software development?',
      answer: 'Custom software development involves designing and building applications tailored specifically to a company\'s unique workflows, operational needs, and business goals.',
      isOpen: true,
    },
    {
      id: 2,
      question: '2. What is enterprise software development?',
      answer: 'Enterprise software development focuses on building scalable applications that support large organizations, complex operations, multi-user environments, and enterprise-level processes.',
      isOpen: true,
    },
    {
      id: 3,
      question: '3. How long does software development take?',
      answer: 'Project timelines depend on features, complexity, integrations, and business requirements. Smaller solutions may take a few months, while enterprise platforms can require longer development cycles.',
      isOpen: true,
    },
    {
      id: 4,
      question: '4. Can custom software integrate with existing systems?',
      answer: 'Yes. We develop software solutions that seamlessly integrate with existing business systems, third-party applications, APIs, cloud services, and legacy infrastructure.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. How do you ensure enterprise-level security?',
      answer: 'We implement secure coding practices, encryption, role-based access controls, secure authentication, regular testing, and compliance-focused development standards.',
      isOpen: false,
    },
    {
      id: 6,
      question: '6. Do you provide maintenance and post-launch support?',
      answer: 'Absolutely. We provide ongoing maintenance, monitoring, performance optimization, updates, and long-term technical support after deployment.',
      isOpen: false,
    },
    {
      id: 7,
      question: '7. Is custom software better than off-the-shelf solutions?',
      answer: 'Custom software offers greater flexibility, scalability, security, and long-term business value because it is built specifically around your operational requirements and growth goals.',
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
                style={{
                  fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-middle"></span>
                ENTERPRISE SOFTWARE
                <span className="block">DEVELOPMENT</span>
              </h1>

              {/* Orange category label */}
              <p
                className="uppercase mb-4 text-[14px] md:text-[16px] tracking-[3px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                }}
              >
                <span className="text-[#f27820]">CUSTOM SOFTWARE</span>{' '}
                <span className="text-[#1a1a1a]">DEVELOPMENT</span>
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://dd.mocup.in/assets/web/images/services/enterprise-software.webp"
                  alt="Enterprise Software Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bespoke Software Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-8">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[18px] sm:text-[20px] md:text-[22px] leading-[1.2] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '1.5px',
                  fontWeight: 400,
                }}
              >
                BESPOKE SOFTWARE DEVELOPMENT{' '}
                <span className="text-[#f27820]">SERVICES FOR EVERY BUSINESS</span>
              </h2>
              <p
                className="text-[#444444] w-full text-justify mb-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                Every business has unique workflows, goals, and operational challenges. Off-the-shelf software often forces companies to adjust their processes to fit the tool. Our Custom Software Development Services are designed to do the opposite—we build technology around your business model.
              </p>
              <p
                className="text-[#444444] w-full text-justify mb-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                At Designdot, we create scalable, secure, and performance-driven software tailored to your exact requirements. Whether you need enterprise-grade systems, SaaS platforms, automation tools, or customer-facing applications, our team transforms your ideas into powerful digital solutions.
              </p>
              <p
                className="text-[#444444] w-full text-justify mb-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                We focus on building software that increases productivity, enhances user experience, and drives measurable ROI.
              </p>
              <p
                className="text-[#444444] w-full text-justify"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                From startups launching innovative products to enterprises modernizing legacy systems, we deliver solutions that evolve with your growth.
              </p>
            </div>
          </div>

          {/* Custom Software Development Projects */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR CUSTOM SOFTWARE{' '}
                <span className="text-[#f27820]">DEVELOPMENT PROJECTS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We have successfully delivered a wide range of custom-built solutions, including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Business Systems */}
                <div>
                  <h4
                    className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                    style={{
                      fontFamily: "'GTWalsheimPro-Bold'",
                      letterSpacing: '0.2px',
                    }}
                  >
                    <span className="mr-2 text-[20px] font-bold">•</span> Business Systems
                  </h4>
                  <ul className="space-y-2 pl-8">
                    {[
                      'Enterprise Resource Planning (ERP) Systems',
                      'Customer Relationship Management (CRM) Platforms',
                      'Workflow Automation Tools',
                      'Inventory & Supply Chain Systems',
                      'Financial Management Software',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-start"
                        style={{
                          fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                        }}
                      >
                        <span className="mr-2 mt-0.5 text-[18px] font-bold shrink-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Digital Platforms */}
                <div>
                  <h4
                    className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                    style={{
                      fontFamily: "'GTWalsheimPro-Bold'",
                      letterSpacing: '0.2px',
                    }}
                  >
                    <span className="mr-2 text-[20px] font-bold">•</span> Digital Platforms
                  </h4>
                  <ul className="space-y-2 pl-8">
                    {[
                      'SaaS-Based Applications',
                      'E-commerce Platforms',
                      'Custom Mobile Applications',
                      'Data Analytics & Reporting Dashboards',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-start"
                        style={{
                          fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                        }}
                      >
                        <span className="mr-2 mt-0.5 text-[18px] font-bold shrink-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack We Cover */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                TECHNICAL <span className="text-[#f27820]">STACK WE COVER</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our diverse technical expertise allows us to build robust applications tailored to various business needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col">
                    <h4
                      className="text-[#1a1a1a] mb-2 text-[18px] md:text-[20px] flex items-center font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold'",
                        letterSpacing: '0.2px',
                      }}
                    >
                      <span className="mr-2 text-[20px] font-bold">•</span> {tech.category}
                    </h4>
                    <ul className="space-y-1 pl-8">
                      {tech.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-center font-bold"
                          style={{
                            fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                          }}
                        >
                          <span className="mr-2 text-[18px] font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We carefully select technologies based on performance, scalability, security, and your business objectives. Our goal is to create a flexible tech foundation that supports future expansion.
              </p>
            </div>
          </div>

          {/* Management Levels Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                CUSTOM SOFTWARE DEVELOPMENT FOR{' '}
                <span className="text-[#f27820]">VARIOUS MANAGEMENT LEVELS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Custom software should empower every layer of your organization. We design solutions that provide value across management levels:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {managementLevels.map((level, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-8 px-8 rounded-r-lg shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300"
                  >
                    <h3
                      className="text-[#1a1a1a] uppercase mb-4 text-[16px] md:text-[18px] font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                        letterSpacing: '0.5px',
                      }}
                    >
                      {level.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed text-justify"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {level.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                By aligning software functionality with organizational structure, we ensure better visibility, faster decisions, and improved operational control.
              </p>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.2] text-[18px] sm:text-[22px] md:text-[24px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                INDUSTRIES <span className="text-[#f27820]">WE SERVE</span>
              </h2>
              <p
                className="text-black mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif",
                  letterSpacing: '0.5px',
                }}
              >
                Our custom software solutions cater to diverse industries, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industries.map((ind, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-6 px-8 md:py-7 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                  >
                    <div className="w-[50px] h-[50px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[16px] md:text-[18px] shrink-0">
                      {ind.step}
                    </div>
                    <span
                      className="text-[#0e2038] text-[18px] md:text-[20px] font-bold tracking-wide uppercase"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {ind.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries closing paragraph */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-4">
            <p
              className="text-[#444444] text-[16px] md:text-[18px]"
              style={{
                fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                letterSpacing: '0.5px',
              }}
            >
              We understand industry-specific regulations, workflows, and market challenges, enabling us to develop solutions that deliver tangible business impact.
            </p>
          </div>

          {/* Success-Driven Development Process Timeline */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR SUCCESS-DRIVEN{' '}
                <span className="text-[#f27820]">CUSTOMIZED DEVELOPMENT PROCESS</span>
              </h2>
              <p
                className="text-[#444444] mb-12 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We follow a structured and transparent development methodology to ensure successful project outcomes.
              </p>

              {/* Zigzag Timeline */}
              <div className="relative w-full mx-auto">
                {/* Vertical Center Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#f58331] transform md:-translate-x-1/2" />

                <div className="space-y-10 relative">
                  {[
                    {
                      step: '01',
                      title: 'REQUIREMENT ANALYSIS',
                      desc: 'We conduct in-depth consultations to understand your business goals, technical requirements, and user expectations.',
                    },
                    {
                      step: '02',
                      title: 'STRATEGIC PLANNING',
                      desc: 'We define project scope, timelines, milestones, and technology stack selection.',
                    },
                    {
                      step: '03',
                      title: 'UI/UX DESIGN',
                      desc: 'We design intuitive, user-friendly interfaces that enhance engagement and usability.',
                    },
                    {
                      step: '04',
                      title: 'AGILE DEVELOPMENT',
                      desc: 'Our developers follow agile practices to deliver incremental builds with regular feedback cycles.',
                    },
                    {
                      step: '05',
                      title: 'TESTING & QUALITY ASSURANCE',
                      desc: 'We perform functional, performance, security, and usability testing to ensure reliability.',
                    },
                    {
                      step: '06',
                      title: 'DEPLOYMENT & ONGOING SUPPORT',
                      desc: 'We ensure smooth deployment and provide continuous maintenance, updates, and optimization.',
                    },
                  ].map((item, index) => {
                    const isEven = index % 2 === 1;
                    return (
                      <div
                        key={index}
                        className={`flex flex-col md:flex-row items-start md:items-center ${
                          isEven ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        {/* Timeline Marker */}
                        <div className="absolute left-6 md:left-1/2 w-[60px] h-[60px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[18px] md:text-[20px] transform -translate-x-1/2 z-10">
                          {item.step}
                        </div>

                        {/* Content Card */}
                        <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-[70px]' : 'md:pr-[70px]'}`}>
                          <div
                            className={`bg-white border border-[#e0d8d0]/40 rounded-2xl pt-6 pb-7 px-8 md:px-10 shadow-lg ${
                              isEven ? 'text-left' : 'text-left md:text-center'
                            }`}
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
                                fontWeight: 400,
                              }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Empty spacer */}
                        <div className="hidden md:block w-1/2" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <p
                className="text-[#444444] mt-12 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                This process ensures transparency, efficiency, and predictable delivery timelines.
              </p>
            </div>
          </div>

          {/* Why Choose Designdot */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY CHOOSE DESIGNDOT AS YOUR{' '}
                <span className="text-[#f27820]">CUSTOM SOFTWARE DEVELOPMENT COMPANY?</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Choosing the right development partner is critical to project success. Here&apos;s why businesses trust Designdot:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Client-Centric Approach',
                    desc: 'We prioritize your business goals and tailor solutions accordingly.',
                  },
                  {
                    title: 'Experienced Development Team',
                    desc: 'Our skilled engineers and consultants bring deep technical expertise and industry knowledge.',
                  },
                  {
                    title: 'Scalable & Secure Solutions',
                    desc: 'We build software designed for growth, performance, and data security.',
                  },
                  {
                    title: 'Agile & Transparent Communication',
                    desc: 'Regular updates, sprint reviews, and clear documentation keep you informed at every stage.',
                  },
                  {
                    title: 'Long-Term Partnership',
                    desc: 'We offer post-launch support, system upgrades, and continuous improvements.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 md:py-8 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed text-justify"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our commitment is not just to deliver software — but to deliver business value.
              </p>
            </div>
          </div>

          {/* One-Stop Hub Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-3 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                A ONE-STOP HUB FOR ALL YOUR{' '}
                <span className="text-[#f27820]">SOFTWARE DEVELOPMENT NEEDS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Designdot provides comprehensive software services under one roof:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Custom Software Development',
                  'Enterprise Application Development',
                  'SaaS Product Engineering',
                  'Mobile App Development',
                  'Cloud Migration & Integration',
                  'API Development',
                  'UI/UX Design',
                  'System Modernization',
                  'Maintenance & Support Services',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-8 rounded-r-lg shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex items-center"
                  >
                    <span
                      className="text-[#0e2038] text-[15px] md:text-[17px] font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our integrated approach ensures seamless collaboration, consistent quality, and faster execution.
              </p>
            </div>
          </div>

          {/* Software Development Services Tag List */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="uppercase mb-4 text-[15px] md:text-[17px] tracking-[3px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                }}
              >
                <span className="text-[#f27820]">SOFTWARE DEVELOPMENT</span>{' '}
                <span className="text-[#555555]">SERVICES</span>
              </h2>
              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  'Excel',
                  'Microsoft',
                  'IBM',
                  'Oracle',
                  'SAP',
                  'Salesforce',
                  'HubSpot',
                  'AWS',
                  'Google Cloud',
                  'Azure',
                  'Zoho',
                  'ServiceNow',
                  'Jira',
                  'Confluence',
                  'GitHub',
                  'GitLab',
                  'Jenkins',
                  'Docker',
                  'Kubernetes',
                  'Terraform',
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 border border-[#e0d8d0] text-[#1a1a1a] text-[13px] md:text-[14px] rounded hover:border-[#f27820] hover:text-[#f27820] transition-colors duration-200 cursor-default"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Transform Your Business Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                TRANSFORM YOUR BUSINESS WITH OUR SUITE OF{' '}
                <span className="text-[#f27820]">CUSTOM ENTERPRISE SOFTWARE DEVELOPMENT SERVICES</span>
              </h2>
              <p
                className="text-[#444444] w-full text-justify mb-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                In today&apos;s digital economy, enterprise software is the backbone of operational efficiency, data-driven decision-making, and scalable growth.
              </p>
              <p
                className="text-[#444444] w-full text-justify mb-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                At Designdot, we deliver custom enterprise software development services that help organizations streamline processes, enhance collaboration, and achieve long-term competitive advantage.
              </p>
              <p
                className="text-[#444444] w-full text-justify mb-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                Our enterprise solutions are built to manage complex workflows, large data volumes, and multi-department operations.
              </p>
              <p
                className="text-[#444444] w-full text-justify mb-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                Whether you need to modernize legacy infrastructure, build a scalable SaaS platform, or integrate multiple business systems, our team designs secure, high-performance applications tailored to your organization&apos;s structure and goals.
              </p>
              <p
                className="text-[#444444] w-full text-justify"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                We combine strategic consulting with advanced engineering to ensure your enterprise software aligns perfectly with business objectives, compliance requirements, and industry standards.
              </p>
            </div>
          </div>

          {/* Types of Enterprise Software We Build */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                TYPES OF ENTERPRISE SOFTWARE{' '}
                <span className="text-[#f27820]">WE BUILD AND INTEGRATE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We design and integrate a wide range of enterprise-grade solutions, including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'ERP Systems',
                    desc: 'Centralized management of finance, HR, operations, and supply chains.',
                  },
                  {
                    title: 'CRM Platforms',
                    desc: 'Enhanced customer engagement and sales automation.',
                  },
                  {
                    title: 'Supply Chain & Inventory Management Systems',
                    desc: 'Real-time tracking and logistics optimization.',
                  },
                  {
                    title: 'Human Resource Management Systems (HRMS)',
                    desc: 'Payroll, recruitment, and employee performance management.',
                  },
                  {
                    title: 'Business Intelligence & Analytics Platforms',
                    desc: 'Data dashboards and predictive insights.',
                  },
                  {
                    title: 'Document & Workflow Automation Systems',
                    desc: 'Improved productivity and reduced manual errors.',
                  },
                  {
                    title: 'Custom SaaS Enterprise Applications',
                    desc: 'Scalable cloud-based business platforms.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 md:py-8 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed text-justify"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our integration services ensure seamless communication between existing systems, third-party tools, APIs, and cloud environments.
              </p>
            </div>
          </div>

          {/* Why Innovate with Designdot */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY INNOVATE YOUR BUSINESS WITH A{' '}
                <span className="text-[#f27820]">
                  CUSTOM ENTERPRISE SOFTWARE DEVELOPMENT COMPANY LIKE DESIGNDOT
                </span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Choosing a specialized enterprise development partner ensures your technology investments deliver measurable value.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Business-Centric Strategy',
                    desc: 'We align software features with your operational goals and KPIs.',
                  },
                  {
                    title: 'Scalability & Performance',
                    desc: 'Our systems are designed to handle growth, high traffic, and large datasets.',
                  },
                  {
                    title: 'Security-First Development',
                    desc: 'Enterprise-grade encryption, secure authentication, and compliance integration are built from day one.',
                  },
                  {
                    title: 'Agile & Transparent Execution',
                    desc: 'Regular sprint updates and milestone tracking ensure complete visibility.',
                  },
                  {
                    title: 'Long-Term Support & Optimization',
                    desc: 'We provide continuous maintenance and upgrades to keep your software future-ready.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 md:py-8 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed text-justify"
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

          {/* Global Standards & Compliances */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WE BUILD ENTERPRISE SOFTWARE ALIGNED WITH{' '}
                <span className="text-[#f27820]">GLOBAL STANDARDS AND COMPLIANCES</span>
              </h2>
              <p
                className="text-[#444444] mb-2 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Enterprise applications must meet regulatory and industry-specific standards.
              </p>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We develop solutions aligned with global compliance frameworks such as:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'GDPR for data protection',
                  'HIPAA for healthcare data security',
                  'PCI-DSS for payment security',
                  'ISO-based quality and security standards',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-8 rounded-r-lg shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex items-center"
                  >
                    <span
                      className="text-[#0e2038] text-[15px] md:text-[17px] font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our team ensures data privacy, secure architecture, access controls, and audit-ready documentation to help organizations meet both regional and international regulatory requirements.
              </p>
            </div>
          </div>

          {/* Enterprise Application Development for Industries */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                ENTERPRISE APPLICATION DEVELOPMENT SERVICES{' '}
                <span className="text-[#f27820]">CUSTOMIZED FOR A RANGE OF INDUSTRIES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We deliver tailored enterprise solutions for diverse sectors:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Healthcare',
                    desc: 'Patient management systems, telehealth platforms, secure data systems.',
                  },
                  {
                    title: 'Finance & Banking',
                    desc: 'Secure transaction systems, compliance-driven applications.',
                  },
                  {
                    title: 'Retail & E-commerce',
                    desc: 'Inventory, CRM, and omnichannel management platforms.',
                  },
                  {
                    title: 'Manufacturing',
                    desc: 'ERP, automation, and production management software.',
                  },
                  {
                    title: 'Logistics & Transportation',
                    desc: 'Fleet tracking and supply chain optimization systems.',
                  },
                  {
                    title: 'Education',
                    desc: 'Learning management systems and student information platforms.',
                  },
                  {
                    title: 'Real Estate',
                    desc: 'Property and asset management software.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 md:py-8 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed text-justify"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Industry closing paragraph */}
              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our industry-specific expertise ensures we address unique workflows, compliance standards, and operational challenges.
              </p>
            </div>
          </div>

          {/* Advanced Technologies Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                ADVANCED TECHNOLOGIES WE USE FOR{' '}
                <span className="text-[#f27820]">ROBUST AND INNOVATIVE ENTERPRISE SOFTWARE DEVELOPMENT</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We leverage modern technologies to build resilient enterprise systems:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Modern Technologies */}
                <div>
                  <h4
                    className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                  >
                    <span className="mr-2 text-[20px] font-bold">•</span> Modern Technologies
                  </h4>
                  <ul className="space-y-2 pl-8">
                    {[
                      'Cloud Computing (AWS, Microsoft Azure, Google Cloud)',
                      'Microservices Architecture',
                      'Artificial Intelligence & Machine Learning',
                      'Big Data & Analytics',
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

                {/* Enterprise Innovations */}
                <div>
                  <h4
                    className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                  >
                    <span className="mr-2 text-[20px] font-bold">•</span> Enterprise Innovations
                  </h4>
                  <ul className="space-y-2 pl-8">
                    {[
                      'Internet of Things (IoT) Integration',
                      'Blockchain Solutions',
                      'DevOps Automation & CI/CD Pipelines',
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

              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                These technologies enable high availability, automation, scalability, and real-time data insights.
              </p>
            </div>
          </div>

          {/* Tools and Languages We Use */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                TOOLS AND <span className="text-[#f27820]">LANGUAGES WE USE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our enterprise software development team works with a comprehensive tech stack:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    category: 'Programming Languages',
                    items: ['Java', 'Python', 'C#', 'PHP', 'JavaScript'],
                  },
                  {
                    category: 'Frontend Technologies',
                    items: ['React.js', 'Angular', 'Vue.js'],
                  },
                  {
                    category: 'Backend Frameworks',
                    items: ['.NET Core', 'Node.js', 'Spring Boot', 'Django'],
                  },
                  {
                    category: 'DevOps & Tools',
                    items: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Terraform'],
                  },
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col">
                    <h4
                      className="text-[#1a1a1a] mb-2 text-[17px] md:text-[18px] flex items-center font-bold"
                      style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                    >
                      <span className="mr-2 font-bold">•</span> {tech.category}
                    </h4>
                    <ul className="space-y-1 pl-7">
                      {tech.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-center font-bold"
                          style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                        >
                          <span className="mr-2 font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] mt-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We select tools based on business requirements, scalability goals, and system complexity.
              </p>
            </div>
          </div>

          {/* Barriers to Enterprise Software Development */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                HOW WE HELP TACKLE DIFFERENT BARRIERS TO{' '}
                <span className="text-[#f27820]">ENTERPRISE SOFTWARE DEVELOPMENT</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Enterprise projects often face technical and organizational challenges. We help overcome:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Legacy System Limitations',
                    desc: 'We modernize outdated infrastructure without disrupting operations.',
                  },
                  {
                    title: 'Data Silos',
                    desc: 'Our integration strategies unify disconnected systems for better visibility.',
                  },
                  {
                    title: 'Scalability Issues',
                    desc: 'We implement cloud-native and microservices architectures.',
                  },
                  {
                    title: 'Security Concerns',
                    desc: 'Enterprise-grade encryption, multi-factor authentication, and continuous monitoring.',
                  },
                  {
                    title: 'Change Management Resistance',
                    desc: 'We provide training, documentation, and onboarding support to ensure smooth adoption.',
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

          {/* Enterprise Project Flow Timeline */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR ENTERPRISE SOFTWARE{' '}
                <span className="text-[#f27820]">DEVELOPMENT PROJECT FLOW</span>
              </h2>

              {/* Zigzag Timeline */}
              <div className="relative w-full mx-auto mt-10">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#f58331] transform md:-translate-x-1/2" />
                <div className="space-y-10 relative">
                  {[
                    {
                      step: '01',
                      title: 'REQUIREMENT ANALYSIS',
                      desc: 'Detailed assessment of business needs, technical gaps, and project scope.',
                    },
                    {
                      step: '02',
                      title: 'STRATEGIC PLANNING',
                      desc: 'System blueprint creation with scalability and compliance considerations.',
                    },
                    {
                      step: '03',
                      title: 'UI/UX DESIGN',
                      desc: 'User-focused interfaces that enhance productivity and engagement.',
                    },
                    {
                      step: '04',
                      title: 'AGILE DEVELOPMENT',
                      desc: 'Incremental builds with continuous feedback loops.',
                    },
                    {
                      step: '05',
                      title: 'TESTING & QA',
                      desc: 'Comprehensive functional, performance, and security testing.',
                    },
                    {
                      step: '06',
                      title: 'DEPLOYMENT & INTEGRATION',
                      desc: 'Seamless deployment across cloud or on-premise environments.',
                    },
                    {
                      step: '07',
                      title: 'ONGOING SUPPORT & OPTIMIZATION',
                      desc: 'Continuous monitoring, updates, and system enhancements.',
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
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
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
                        style={{
                          fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                        }}
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

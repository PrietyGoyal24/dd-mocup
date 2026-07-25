'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function SaaSClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is SaaS application development?',
      answer:
        'SaaS application development involves building cloud-based software accessible via the internet on a subscription basis.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. How long does it take to develop a SaaS application?',
      answer:
        'Development timelines vary based on features, integrations, and complexity.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. What technologies do you use for SaaS development?',
      answer:
        'We use React, Angular, Node.js, Python, .NET, AWS, Azure, and modern DevOps technologies.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. Can you build a multi-tenant SaaS application?',
      answer:
        'Yes, we specialize in secure multi-tenant architecture and optimized cloud infrastructure.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. Do you provide post-launch support?',
      answer:
        'Absolutely. We provide maintenance, optimization, monitoring, and feature enhancements.',
      isOpen: false,
    },
    {
      id: 6,
      question: '6. Is SaaS secure?',
      answer:
        'Yes. SaaS applications are secured using encryption, authentication systems, secure APIs, and compliance standards.',
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
                SAAS APPLICATION
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
                  alt="SaaS Application Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* SaaS App Development Company */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-8">
            <div className="w-full">
              <h2
                className="uppercase mb-2 text-[18px] sm:text-[20px] md:text-[22px] leading-[1.3] tracking-[1.5px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                }}
              >
                <span className="text-[#f27820]">SAAS APP</span>{' '}
                <span className="text-[#555555]">DEVELOPMENT COMPANY</span>
              </h2>
              <div className="w-[60px] h-[3px] bg-[#f27820] mb-6" />
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-4"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  MindInventory is a leading SaaS app development company delivering scalable, secure, and high-performing cloud-based software solutions.
                  We help startups, enterprises, and growing businesses transform their ideas into powerful SaaS platforms that drive recurring revenue and long-term growth.
                </p>
                <p>
                  Our team specializes in building multi-tenant architectures, subscription-based systems, and cloud-native applications that ensure performance, flexibility, and seamless user experiences.
                </p>
                <p>
                  Whether you’re launching a new SaaS product or modernizing an existing one, we provide end-to-end development services tailored to your business objectives.
                </p>
                <p>
                  With expertise in modern technologies, DevOps practices, and cloud platforms, we ensure your SaaS application is future-ready, reliable, and built to scale.
                </p>
              </div>
            </div>
          </div>

          {/* Our SaaS Application Development Services */}
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
                OUR SAAS APPLICATION{' '}
                <span className="text-[#f27820]">DEVELOPMENT SERVICES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We provide comprehensive SaaS development services designed to cover every stage of the product lifecycle:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'SaaS Product Consulting',
                    desc: 'We validate your idea, define product strategy, create roadmaps, and choose the right technology stack.',
                  },
                  {
                    title: 'Custom SaaS Application Development',
                    desc: 'From MVP to enterprise platforms, we develop scalable and feature-rich SaaS solutions.',
                  },
                  {
                    title: 'Multi-Tenant Architecture Development',
                    desc: 'Robust multi-tenant systems with secure data isolation and optimized performance.',
                  },
                  {
                    title: 'UI/UX Design for SaaS',
                    desc: 'Intuitive and engaging interfaces that improve adoption and retention.',
                  },
                  {
                    title: 'SaaS Migration & Modernization',
                    desc: 'Migration of legacy applications into cloud-based SaaS platforms.',
                  },
                  {
                    title: 'API Development & Integration',
                    desc: 'Secure API development and third-party integrations for payment systems, CRMs, and analytics tools.',
                  },
                  {
                    title: 'Maintenance & Support',
                    desc: 'Continuous monitoring, optimization, updates, and technical support.',
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

          {/* Ready to Build Powerful SaaS Software Solutions? */}
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
                READY TO BUILD POWERFUL{' '}
                <span className="text-[#f27820]">SAAS SOFTWARE SOLUTIONS?</span>
              </h2>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] mb-8 space-y-2"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  If you’re looking to launch a subscription-based platform or transform your traditional software into a cloud-based SaaS model, MindInventory is your trusted technology partner.
                </p>
                <p>
                  We focus on scalable cloud infrastructure, high availability, secure data handling, seamless user experience, and flexible subscription systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Scalable cloud infrastructure',
                  'High availability and performance',
                  'Secure data handling and compliance',
                  'Seamless user experience',
                  'Flexible subscription and billing systems',
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

          {/* Our Featured SaaS Development Success Stories */}
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
                OUR FEATURED SAAS{' '}
                <span className="text-[#f27820]">DEVELOPMENT SUCCESS STORIES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Cloud-based project management platform improving productivity by 40%.',
                  'Healthcare SaaS platform for remote patient monitoring.',
                  'FinTech SaaS platform with analytics and subscription billing.',
                  'HR SaaS system automating recruitment and payroll processes.',
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

          {/* Dedicated Teams for Your Specific Requirements */}
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
                DEDICATED TEAMS FOR{' '}
                <span className="text-[#f27820]">YOUR SPECIFIC REQUIREMENTS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Engagement Models */}
                <div>
                  <h4
                    className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                  >
                    <span className="mr-2 font-bold">•</span> Engagement Models
                  </h4>
                  <ul className="space-y-2 pl-8">
                    {[
                      'Dedicated Development Team',
                      'Staff Augmentation',
                      'End-to-End Project Development',
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

                {/* Our Team Expertise */}
                <div>
                  <h4
                    className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                  >
                    <span className="mr-2 font-bold">•</span> Our Team Expertise
                  </h4>
                  <ul className="space-y-2 pl-8">
                    {[
                      'SaaS Developers',
                      'Solution Architects',
                      'UI/UX Designers',
                      'DevOps Engineers',
                      'QA Specialists',
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

          {/* Industries We Empower With SaaS Solutions */}
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
                INDUSTRIES WE EMPOWER WITH{' '}
                <span className="text-[#f27820]">SAAS SOLUTIONS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'HEALTHCARE' },
                  { num: '02', name: 'FINTECH' },
                  { num: '03', name: 'EDUCATION' },
                  { num: '04', name: 'RETAIL & ECOMMERCE' },
                  { num: '05', name: 'REAL ESTATE' },
                  { num: '06', name: 'LOGISTICS & SUPPLY CHAIN' },
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

          {/* Why Choose MindInventory for SaaS Development? */}
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
                WHY CHOOSE MINDINVENTORY{' '}
                <span className="text-[#f27820]">FOR SAAS DEVELOPMENT?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Proven Expertise',
                    desc: 'Years of experience building scalable SaaS applications.',
                  },
                  {
                    title: 'Agile Development',
                    desc: 'Faster delivery cycles with transparent collaboration.',
                  },
                  {
                    title: 'Cloud & DevOps Excellence',
                    desc: 'Expertise in AWS, Azure, and Google Cloud infrastructure.',
                  },
                  {
                    title: 'Security & Compliance',
                    desc: 'Secure APIs, encryption, and industry-standard compliance practices.',
                  },
                  {
                    title: 'Scalable Architecture',
                    desc: 'SaaS platforms built for future growth and performance.',
                  },
                  {
                    title: 'Client-Centric Approach',
                    desc: 'Transparent communication and long-term partnerships.',
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

          {/* Our SaaS Development Process Timeline */}
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
                OUR SAAS <span className="text-[#f27820]">DEVELOPMENT PROCESS</span>
              </h2>

              {/* Zigzag Timeline */}
              <div className="relative w-full mx-auto mt-10">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#f58331] transform md:-translate-x-1/2" />
                <div className="space-y-10 relative">
                  {[
                    {
                      step: '01',
                      title: 'REQUIREMENT ANALYSIS',
                      desc: 'Understanding business requirements and SaaS goals.',
                    },
                    {
                      step: '02',
                      title: 'PRODUCT STRATEGY',
                      desc: 'Defining roadmap, architecture, and subscription models.',
                    },
                    {
                      step: '03',
                      title: 'UI/UX DESIGN',
                      desc: 'Designing intuitive cloud-based interfaces.',
                    },
                    {
                      step: '04',
                      title: 'DEVELOPMENT & INTEGRATION',
                      desc: 'Building SaaS architecture and integrating APIs.',
                    },
                    {
                      step: '05',
                      title: 'TESTING & OPTIMIZATION',
                      desc: 'Ensuring performance, scalability, and security.',
                    },
                    {
                      step: '06',
                      title: 'DEPLOYMENT & SUPPORT',
                      desc: 'Launching and maintaining SaaS platforms.',
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

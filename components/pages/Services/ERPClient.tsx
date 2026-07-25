'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ERPClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is ERP software development?',
      answer:
        'ERP software development is the process of building centralized software applications that integrate and manage key business operations across departments.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. How long does it take to develop a custom ERP system?',
      answer:
        'Timelines depend on complexity, required modules, and integrations, typically ranging from a few months to a year.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. Can ERP software be customized?',
      answer:
        'Yes. Custom ERP systems are built specifically around your workflows, processes, and business requirements.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. Is cloud-based ERP secure?',
      answer:
        'Yes. Modern cloud ERP solutions use advanced encryption, role-based access control, secure APIs, and compliance standards to protect data.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. Do you provide post-implementation support?',
      answer:
        'Yes. We offer continuous maintenance, performance monitoring, updates, and user training after launch.',
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
                className="text-[#1a1a1a] uppercase mb-6 text-[32px] sm:text-[56px] md:text-[76px] lg:text-[90px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .ERP SOFTWARE DEVELOPMENT
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  In today’s competitive business environment, managing multiple departments with disconnected systems can slow down growth and reduce efficiency. At Designdot, we provide comprehensive ERP software development services designed to unify your business processes, improve operational visibility, and drive smarter decision-making.
                </p>
                <p>
                  Our custom ERP solutions integrate core business functions such as finance, HR, supply chain, manufacturing, sales, and inventory into a centralized system. Whether you are a startup, SME, or enterprise, we build scalable ERP platforms tailored to your workflows and long-term business goals.
                </p>
                <p>
                  From strategy and design to development and deployment, our ERP experts ensure seamless implementation and measurable ROI.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="ERP Software Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our Latest Suite of Custom ERP Services */}
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
                OUR LATEST SUITE OF <span className="text-[#f27820]">CUSTOM ERP SERVICES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We deliver end-to-end ERP development services customized to your industry and operational requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: 'CUSTOM ERP DEVELOPMENT',
                    desc: 'Build tailored ERP systems aligned with your specific business processes.',
                  },
                  {
                    title: 'ERP CONSULTING & PLANNING',
                    desc: 'Analyze your current infrastructure and create a roadmap for ERP implementation.',
                  },
                  {
                    title: 'ERP INTEGRATION SERVICES',
                    desc: 'Integrate ERP with CRM, accounting software, HR tools, payment gateways, and third-party applications.',
                  },
                  {
                    title: 'ERP MIGRATION & MODERNIZATION',
                    desc: 'Upgrade legacy systems to modern, cloud-based ERP platforms with minimal disruption.',
                  },
                  {
                    title: 'CLOUD-BASED ERP SOLUTIONS',
                    desc: 'Develop secure, scalable cloud ERP systems for real-time data access.',
                  },
                  {
                    title: 'ERP MAINTENANCE & SUPPORT',
                    desc: 'Provide ongoing monitoring, upgrades, security patches, and performance optimization.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
                  >
                    <h3
                      className="text-[#0e2038] uppercase font-bold text-[17px] md:text-[19px] mb-3 tracking-[0.5px]"
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our flexible solutions are designed to enhance productivity and streamline enterprise-wide operations.
              </p>
            </div>
          </div>

          {/* Equipped with Capabilities to Develop Premium ERP Software Modules */}
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
                EQUIPPED WITH CAPABILITIES TO DEVELOP PREMIUM{' '}
                <span className="text-[#f27820]">ERP SOFTWARE MODULES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We specialize in building powerful ERP modules that automate and optimize every department.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: 'Finance & Accounting Module',
                    desc: 'Automate billing, payroll, budgeting, taxation, and financial reporting.',
                  },
                  {
                    title: 'Human Resource Management (HRM)',
                    desc: 'Manage recruitment, attendance, payroll, and employee performance.',
                  },
                  {
                    title: 'Inventory & Supply Chain Management',
                    desc: 'Track inventory levels, suppliers, procurement, and logistics.',
                  },
                  {
                    title: 'Sales & CRM Module',
                    desc: 'Monitor leads, sales pipelines, customer interactions, and order management.',
                  },
                  {
                    title: 'Manufacturing & Production Module',
                    desc: 'Plan production schedules, manage raw materials, and monitor quality control.',
                  },
                  {
                    title: 'Business Intelligence & Reporting',
                    desc: 'Generate real-time reports and dashboards for data-driven decisions.',
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Each module can be customized and integrated to ensure smooth cross-department communication and operational transparency.
              </p>
            </div>
          </div>

          {/* Why Partner with Designdot - Your ERP System Development Partner? */}
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
                WHY PARTNER WITH DESIGNDOT – YOUR{' '}
                <span className="text-[#f27820]">ERP SYSTEM DEVELOPMENT PARTNER?</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Choosing the right ERP development partner is critical to success. Here’s why businesses trust Designdot.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    num: '01',
                    title: 'Industry Expertise',
                    desc: 'We understand the complexities of various industries and design ERP systems accordingly.',
                  },
                  {
                    num: '02',
                    title: 'Customization-Focused Approach',
                    desc: 'We don’t offer one-size-fits-all solutions — we build ERP systems tailored to your needs.',
                  },
                  {
                    num: '03',
                    title: 'Scalable Architecture',
                    desc: 'Our ERP solutions grow with your business, supporting expansion and evolving requirements.',
                  },
                  {
                    num: '04',
                    title: 'Data Security & Compliance',
                    desc: 'We implement strict security standards, encryption protocols, and regulatory compliance.',
                  },
                  {
                    num: '05',
                    title: 'Transparent Communication',
                    desc: 'Regular updates, milestone tracking, and collaborative planning ensure alignment at every stage.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out flex items-start gap-5"
                  >
                    <div
                      className="w-[46px] h-[46px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[15px] shrink-0"
                      style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                    >
                      {item.num}
                    </div>
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-2"
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
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] text-[16px] md:text-[18px] mt-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our goal is to build long-term partnerships and deliver ERP solutions that create measurable business impact.
              </p>
            </div>
          </div>

          {/* Experience Our Best-in-Class ERP Software Development Process */}
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
                EXPERIENCE OUR BEST-IN-CLASS{' '}
                <span className="text-[#f27820]">ERP SOFTWARE DEVELOPMENT PROCESS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {[
                  { num: '01', name: 'REQUIREMENT ANALYSIS' },
                  { num: '02', name: 'SYSTEM DESIGN & PLANNING' },
                  { num: '03', name: 'DEVELOPMENT & CUSTOMIZATION' },
                  { num: '04', name: 'TESTING & QUALITY ASSURANCE' },
                  { num: '05', name: 'DEPLOYMENT & TRAINING' },
                  { num: '06', name: 'ONGOING SUPPORT & OPTIMIZATION' },
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                This systematic approach ensures minimal disruption and maximum efficiency during ERP implementation.
              </p>
            </div>
          </div>

          {/* ERP Technology Stack We Use */}
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
                ERP TECHNOLOGY STACK <span className="text-[#f27820]">WE USE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We leverage modern technologies to build high-performance ERP systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {[
                  {
                    category: 'Frontend Technologies',
                    items: ['React.js', 'Angular', 'Vue.js'],
                  },
                  {
                    category: 'Backend Technologies',
                    items: ['Node.js', 'Python (Django/Flask)', '.NET Core', 'PHP', 'Java'],
                  },
                  {
                    category: 'Database Solutions',
                    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
                  },
                  {
                    category: 'Cloud Platforms',
                    items: ['AWS', 'Microsoft Azure', 'Google Cloud'],
                  },
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col">
                    <h4
                      className="text-[#1a1a1a] mb-3 text-[17px] md:text-[18px] flex items-center font-bold"
                      style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                    >
                      <span className="mr-2 font-bold">•</span> {tech.category}
                    </h4>
                    <ul className="space-y-1.5 pl-7">
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
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our flexible tech stack ensures scalability, security, and seamless integration across platforms.
              </p>
            </div>
          </div>

          {/* What Can You Achieve With Designdot ERP Services? */}
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
                WHAT CAN YOU ACHIEVE WITH{' '}
                <span className="text-[#f27820]">DESIGNDOT ERP SERVICES?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Centralize and automate business operations',
                  'Enhance decision-making with data analytics',
                  'Improve cross-department collaboration',
                  'Improve customer satisfaction and service delivery',
                  'Reduce operational costs and manual errors',
                  'Scale your operations efficiently',
                  'Gain real-time business insights',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-[#1a1a1a] text-[16px] md:text-[18px] flex items-start font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-3 text-[#1a1a1a]">•</span> {item}
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our ERP solutions empower organizations to operate smarter, faster, and more efficiently in a digitally driven marketplace.
              </p>
            </div>
          </div>
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

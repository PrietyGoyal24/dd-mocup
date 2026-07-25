'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function WebPortalClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What services do you offer?',
      answer:
        'We provide custom web development, e-commerce development, web portal development, web applications, UI/UX design, CMS development, maintenance support, and cybersecurity solutions.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. Do you work with startups and enterprises?',
      answer:
        'Yes. We work with startups, SMBs, and large enterprises with scalable tailored solutions.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. How do you understand business requirements?',
      answer:
        'We begin with a discovery session to understand business goals, audiences, technical requirements, and long-term objectives.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. How long does development take?',
      answer:
        'Timelines depend on project complexity. Basic websites may take 2–4 weeks, while custom portals can take 6–12+ weeks.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. Will the portal be mobile-friendly?',
      answer:
        'Yes. All our portals are fully responsive and optimized for mobile, tablet, and desktop devices.',
      isOpen: false,
    },
    {
      id: 6,
      question: '6. Can you redesign existing portals?',
      answer:
        'Absolutely. We modernize existing portals to improve performance, UI/UX, security, and scalability.',
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
                .WEB PORTAL DEVELOPMENT
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  Building Secure, Scalable & Interactive Digital Platforms. A web portal is more than just a website — it is a centralized, secure gateway that connects users, data, and services on a single unified platform.
                </p>
                <p>
                  Whether for customers, employees, vendors, students, or partners, a well-designed web portal improves collaboration, streamlines processes, and enhances user experience.
                </p>
                <p>
                  We design and develop custom web portals tailored to your business needs, ensuring performance, security, and scalability.
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
                  alt="Web Portal Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our Web Portal Development Services */}
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
                OUR <span className="text-[#f27820]">WEB PORTAL DEVELOPMENT SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'CUSTOM PORTAL DEVELOPMENT',
                    desc: 'We build fully customized portals designed around your unique workflows and business goals.',
                    bullets: [
                      'Tailored UI/UX design',
                      'Custom dashboard development',
                      'Role-based access systems',
                      'Workflow automation',
                      'API integrations',
                    ],
                  },
                  {
                    title: 'ENTERPRISE WEB PORTALS',
                    desc: 'Streamline internal communication and operations with secure enterprise portals.',
                    bullets: [
                      'Employee self-service portals',
                      'HR and payroll portals',
                      'Project management dashboards',
                      'Knowledge management systems',
                      'Internal communication tools',
                    ],
                  },
                  {
                    title: 'CUSTOMER & CLIENT PORTALS',
                    desc: 'Enhance customer engagement with secure and interactive platforms.',
                    bullets: [
                      'Account management systems',
                      'Order tracking',
                      'Billing and payment integration',
                      'Support ticket systems',
                      'Document sharing',
                    ],
                  },
                  {
                    title: 'E-LEARNING & EDUCATIONAL PORTALS',
                    desc: 'Deliver structured learning experiences through dynamic online platforms.',
                    bullets: [
                      'Student & teacher dashboards',
                      'Course management systems',
                      'Online assessments',
                      'Video content integration',
                      'Progress tracking',
                    ],
                  },
                  {
                    title: 'B2B & VENDOR PORTALS',
                    desc: 'Simplify collaboration between businesses and partners.',
                    bullets: [
                      'Vendor onboarding systems',
                      'Supply chain management',
                      'Inventory tracking',
                      'Order management',
                      'Secure document exchange',
                    ],
                  },
                  {
                    title: 'COMMUNITY & MEMBERSHIP PORTALS',
                    desc: 'Build engaged communities with interactive digital spaces.',
                    bullets: [
                      'Member profiles',
                      'Forums & discussion boards',
                      'Event management',
                      'Subscription management',
                      'Content access control',
                    ],
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
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-4 text-justify"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                    <ul className="space-y-1.5 pl-5 list-disc text-[#1a1a1a]">
                      {item.bullets.map((b, idx) => (
                        <li
                          key={idx}
                          className="text-[14px] md:text-[15px]"
                          style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features We Integrate */}
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
                KEY <span className="text-[#f27820]">FEATURES WE INTEGRATE</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Secure Authentication',
                    desc: 'MFA & SSO enabled authentication systems.',
                  },
                  {
                    title: 'Data Encryption',
                    desc: 'Advanced security and compliance standards implementation.',
                  },
                  {
                    title: 'Real-Time Notifications',
                    desc: 'Instant updates and communication systems.',
                  },
                  {
                    title: 'Cloud Integration',
                    desc: 'Seamless cloud deployment and infrastructure support.',
                  },
                  {
                    title: 'Advanced Search',
                    desc: 'Fast and intelligent search functionality.',
                  },
                  {
                    title: 'Mobile Responsiveness',
                    desc: 'Optimized experiences across all devices.',
                  },
                  {
                    title: 'Third-Party API Integration',
                    desc: 'Connect portals with external platforms and services.',
                  },
                  {
                    title: 'Analytics & Reporting',
                    desc: 'Interactive dashboards and reporting systems.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 md:py-8 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transform transition-all duration-300 ease-out"
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

          {/* Technologies We Use */}
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
                TECHNOLOGIES <span className="text-[#f27820]">WE USE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We leverage modern technologies and frameworks to build robust portals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {[
                  {
                    category: 'Frontend',
                    items: ['React.js', 'Angular', 'Vue.js'],
                  },
                  {
                    category: 'Backend',
                    items: ['Node.js', '.NET', 'PHP', 'Python'],
                  },
                  {
                    category: 'Databases',
                    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
                  },
                  {
                    category: 'Cloud & Frameworks',
                    items: ['AWS', 'Azure', 'Google Cloud', 'Laravel', 'Django', 'WordPress'],
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
                Our technology stack is selected based on your performance, security, and scalability requirements.
              </p>
            </div>
          </div>

          {/* Our Development Process */}
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
                OUR <span className="text-[#f27820]">DEVELOPMENT PROCESS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'REQUIREMENT ANALYSIS' },
                  { num: '02', name: 'PLANNING & ARCHITECTURE' },
                  { num: '03', name: 'UI/UX DESIGN' },
                  { num: '04', name: 'DEVELOPMENT & INTEGRATION' },
                  { num: '05', name: 'TESTING & SECURITY VALIDATION' },
                  { num: '06', name: 'DEPLOYMENT & MAINTENANCE' },
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

          {/* Benefits of a Web Portal */}
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
                BENEFITS OF A <span className="text-[#f27820]">WEB PORTAL</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Centralized Data Management',
                  'Better Collaboration',
                  'Improved User Engagement',
                  'Automation of Processes',
                  'Enhanced Security',
                  'Increased Productivity',
                  'Streamlined Operations',
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
                A well-developed portal transforms complex operations into seamless digital experiences.
              </p>
            </div>
          </div>

          {/* Industries We Serve */}
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
                INDUSTRIES <span className="text-[#f27820]">WE SERVE</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'STARTUPS' },
                  { num: '02', name: 'SMALL & MEDIUM BUSINESSES' },
                  { num: '03', name: 'ENTERPRISES' },
                  { num: '04', name: 'HEALTHCARE' },
                  { num: '05', name: 'EDUCATION' },
                  { num: '06', name: 'RETAIL & E-COMMERCE' },
                  { num: '07', name: 'FINANCIAL SERVICES' },
                  { num: '08', name: 'TECHNOLOGY COMPANIES' },
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

          {/* Why Choose Us? */}
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
                WHY <span className="text-[#f27820]">CHOOSE US?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    num: '01',
                    title: 'Business-Driven Development',
                    desc: 'Solutions aligned with real business objectives.',
                  },
                  {
                    num: '02',
                    title: 'Experienced Team',
                    desc: 'Skilled designers and developers with proven expertise.',
                  },
                  {
                    num: '03',
                    title: 'Scalable Solutions',
                    desc: 'Future-ready platforms built for long-term growth.',
                  },
                  {
                    num: '04',
                    title: 'Transparent Communication',
                    desc: 'Regular updates and collaborative workflows.',
                  },
                  {
                    num: '05',
                    title: 'On-Time Delivery',
                    desc: 'Efficient project execution and timely deployment.',
                  },
                  {
                    num: '06',
                    title: 'Maintenance & Support',
                    desc: 'Continuous support, upgrades, and optimization.',
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
                        className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.desc}
                      </p>
                    </div>
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
                We don’t just build websites — we build digital platforms that achieve results.
              </p>
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

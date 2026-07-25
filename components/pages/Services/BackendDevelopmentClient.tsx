'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function BackendDevelopmentClient() {
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
                .BACKEND DEVELOPMENT
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p className="font-bold text-[#1a1a1a]">
                  Backend Excellence: Strengthening Applications with Secure Architectures.
                </p>
                <p>
                  At Designdot, we believe backend development is the foundation of digital success.
                </p>
                <p>
                  A secure, scalable, and well-structured backend ensures that applications run smoothly, data is protected, and users enjoy seamless experiences.
                </p>
                <p>
                  Our focus is on building architectures that are robust, efficient, and future-ready.
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
                  alt="Backend Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Designdot - Building Reliable Backend Solutions With Expertise and Innovation */}
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
                DESIGNDOT — BUILDING RELIABLE BACKEND SOLUTIONS WITH <span className="text-[#f27820]">EXPERTISE AND INNOVATION</span>
              </h2>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  We combine technical expertise with innovative thinking to deliver backend systems that power modern applications.
                </p>
                <p>
                  Whether it's managing complex databases, integrating APIs, or ensuring top-notch security, our team builds solutions that are reliable, adaptable, and aligned with your business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Our Backend Development Expertise */}
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
                OUR BACKEND DEVELOPMENT <span className="text-[#f27820]">EXPERTISE</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: 'Custom Backend Development',
                    desc: 'Tailored backend solutions for unique business needs.',
                  },
                  {
                    title: 'Database Design & Optimization',
                    desc: 'Efficient, secure, and scalable data management systems.',
                  },
                  {
                    title: 'API Development & Integration',
                    desc: 'Smooth communication between systems and platforms.',
                  },
                  {
                    title: 'Cloud Solutions',
                    desc: 'Leveraging AWS, Azure, and Google Cloud for scalability.',
                  },
                  {
                    title: 'Microservices Architecture',
                    desc: 'Flexible and modular systems for faster innovation.',
                  },
                  {
                    title: 'Security & Compliance',
                    desc: 'Protecting sensitive data with industry best practices.',
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Ready to strengthen your digital backbone? Let's build secure and scalable systems together.
              </p>
            </div>
          </div>

          {/* Our Approach to Providing Exceptional Backend Solutions */}
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
                OUR APPROACH TO PROVIDING <span className="text-[#f27820]">EXCEPTIONAL BACKEND SOLUTIONS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'REQUIREMENT ANALYSIS' },
                  { num: '02', name: 'ARCHITECTURE PLANNING' },
                  { num: '03', name: 'DATABASE MANAGEMENT' },
                  { num: '04', name: 'API DEVELOPMENT' },
                  { num: '05', name: 'SECURITY IMPLEMENTATION' },
                  { num: '06', name: 'TESTING & OPTIMIZATION' },
                  { num: '07', name: 'DEPLOYMENT & SUPPORT' },
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

          {/* The Advanced Tools & Technologies We Use to Power Our Backend Solutions */}
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
                THE ADVANCED TOOLS & TECHNOLOGIES WE USE TO POWER OUR <span className="text-[#f27820]">BACKEND SOLUTIONS</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {[
                  {
                    category: 'Programming Languages',
                    items: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby'],
                  },
                  {
                    category: 'Databases',
                    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
                  },
                  {
                    category: 'Frameworks',
                    items: ['Express.js', 'Django', 'Spring Boot', 'Laravel'],
                  },
                  {
                    category: 'Cloud Platforms',
                    items: ['AWS', 'Microsoft Azure', 'Google Cloud'],
                  },
                  {
                    category: 'APIs & Integrations',
                    items: ['RESTful APIs', 'GraphQL', 'Third-party Integrations'],
                  },
                  {
                    category: 'Security Tools',
                    items: ['OAuth', 'JWT', 'SSL/TLS', 'Data Encryption'],
                  },
                ].map((col, colIdx) => (
                  <div key={colIdx} className="space-y-3">
                    <h3
                      className="text-[#1a1a1a] font-bold text-[18px] md:text-[20px]"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      • {col.category}
                    </h3>
                    <ul className="space-y-2 pl-6 list-disc text-[#444444]">
                      {col.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-[16px] md:text-[17px]"
                          style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Designdot for Your Backend Development Needs? */}
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
                WHY CHOOSE DESIGNDOT FOR YOUR <span className="text-[#f27820]">BACKEND DEVELOPMENT NEEDS?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Expert Team',
                  'Innovation-Driven Solutions',
                  'Scalable Architectures',
                  'Security First Approach',
                  'Client-Centric Communication',
                  'Proven Track Record',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex items-center"
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
                {[
                  {
                    id: 1,
                    question: 'Q1: What industries do you serve with backend solutions?',
                    answer:
                      'We work across industries including e-commerce, healthcare, fintech, education, and enterprise solutions.',
                  },
                  {
                    id: 2,
                    question: 'Q2: Can you integrate backend systems with existing applications?',
                    answer:
                      'Yes. We specialize in API development and integration, ensuring smooth communication between new and existing systems.',
                  },
                  {
                    id: 3,
                    question: 'Q3: How do you ensure backend security?',
                    answer:
                      'We implement encryption, authentication protocols, and compliance standards to safeguard sensitive data.',
                  },
                  {
                    id: 4,
                    question: 'Q4: Do you provide ongoing support after deployment?',
                    answer:
                      'Absolutely. We offer maintenance, monitoring, and updates to keep backend systems secure and efficient.',
                  },
                  {
                    id: 5,
                    question: 'Q5: Can you build cloud-based backend solutions?',
                    answer:
                      'Yes. We leverage AWS, Azure, and Google Cloud to deliver scalable and reliable cloud-based architectures.',
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


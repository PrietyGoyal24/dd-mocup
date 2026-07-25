'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function MVPDevelopmentClient() {
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
                .MVP DEVELOPMENT
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  Turning innovative ideas into market-ready products requires speed, strategy, and precision.
                </p>
                <p>
                  Our MVP (Minimum Viable Product) development services help startups and enterprises validate concepts, reduce risks, and accelerate time-to-market with scalable and future-ready solutions.
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
                  alt="MVP Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our MVP Development Services for Startups and Enterprises */}
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
                OUR MVP DEVELOPMENT SERVICES FOR <span className="text-[#f27820]">STARTUPS AND ENTERPRISES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We design and develop MVPs that focus on core functionalities allowing you to launch quickly, gather real user feedback, and refine your product efficiently.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: 'MVP Consulting & Strategy',
                    desc: 'We analyze your idea, define the core value proposition, identify target users, and outline a development roadmap.',
                  },
                  {
                    title: 'Rapid Prototyping & UI/UX Design',
                    desc: 'User-centric prototypes and intuitive interfaces for seamless early adoption.',
                  },
                  {
                    title: 'Custom MVP Development',
                    desc: 'Scalable web and mobile MVP solutions tailored to your business goals.',
                  },
                  {
                    title: 'API & Third-Party Integrations',
                    desc: 'Seamless integration with essential services and tools for enhanced functionality.',
                  },
                  {
                    title: 'Cloud-Ready Architecture',
                    desc: 'Secure and scalable infrastructure designed for future expansion.',
                  },
                  {
                    title: 'MVP Testing & Optimization',
                    desc: 'Performance testing, usability improvements, and iteration based on feedback.',
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
                Our approach ensures you invest only in essential features while building a strong foundation for growth.
              </p>
            </div>
          </div>

          {/* Ready to Kickstart Your MVP Software Development Project? */}
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
                READY TO KICKSTART YOUR <span className="text-[#f27820]">MVP SOFTWARE DEVELOPMENT PROJECT?</span>
              </h2>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  Transform your idea into a functional product faster and smarter.
                </p>
                <p>
                  Whether you're validating a startup concept or testing a new enterprise solution, our expert team helps you minimize risks and maximize market impact.
                </p>
                <p>
                  Let's collaborate to build a lean, scalable, and impactful MVP that attracts users and investors alike.
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated Teams For Your Specific Requirements */}
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
                DEDICATED TEAMS FOR YOUR <span className="text-[#f27820]">SPECIFIC REQUIREMENTS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  'Dedicated Development Team',
                  'MVP Product Squad',
                  'Technical Consulting Team',
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our teams work using agile methodologies to ensure transparency, faster iterations, and timely delivery.
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {[
                  { num: '01', name: 'FINTECH' },
                  { num: '02', name: 'HEALTHCARE' },
                  { num: '03', name: 'E-COMMERCE' },
                  { num: '04', name: 'SAAS PLATFORMS' },
                  { num: '05', name: 'EDUCATION & ELEARNING' },
                  { num: '06', name: 'REAL ESTATE' },
                  { num: '07', name: 'LOGISTICS & TRANSPORTATION' },
                  { num: '08', name: 'TRAVEL & HOSPITALITY' },
                  { num: '09', name: 'SOCIAL NETWORKING' },
                  { num: '10', name: 'ENTERPRISE SOLUTIONS' },
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
                We tailor every MVP to meet industry standards, compliance requirements, and market demands.
              </p>
            </div>
          </div>

          {/* Why Choose Designdot for MVP Development Services? */}
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
                WHY CHOOSE DESIGNDOT FOR <span className="text-[#f27820]">MVP DEVELOPMENT SERVICES?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  'Strategic product consultation',
                  'User-focused design approach',
                  'Scalable and secure architecture',
                  'Faster time-to-market',
                  'Transparent communication',
                  'Post-launch support & product scaling',
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We don't just build MVPs — we help you build products that evolve into successful digital businesses.
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
                {[
                  {
                    id: 1,
                    question: '1. What is MVP development?',
                    answer:
                      'MVP development involves building a product with essential features to validate an idea before full-scale development.',
                  },
                  {
                    id: 2,
                    question: '2. How long does it take to develop an MVP?',
                    answer:
                      'Depending on complexity, an MVP typically takes 6–12 weeks to design, develop, and launch.',
                  },
                  {
                    id: 3,
                    question: '3. Why should startups invest in MVP development?',
                    answer:
                      'An MVP helps validate business ideas, attract investors, gather user feedback, and reduce development risks.',
                  },
                  {
                    id: 4,
                    question: '4. Can an MVP be scaled later?',
                    answer:
                      'Yes. A well-built MVP is designed with scalability in mind, allowing additional features and enhancements over time.',
                  },
                  {
                    id: 5,
                    question: '5. Do you provide post-MVP development support?',
                    answer:
                      'Yes. We offer continuous improvements, feature expansion, performance optimization, and maintenance services.',
                  },
                  {
                    id: 6,
                    question: '6. How much does MVP development cost?',
                    answer:
                      'Costs vary based on features, technology stack, and project complexity. We provide customized pricing after understanding your requirements.',
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


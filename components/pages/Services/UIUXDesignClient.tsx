'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function UIUXDesignClient() {
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
                .UI UX DESIGN
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p className="font-bold text-[#1a1a1a]">
                  Your UI/UX Partner For Empowering Your Brand
                  <br />
                  Crafting Experiences That Inspire, Engage, and Convert
                </p>
                <p>
                  Your digital product is more than just code — it's an experience. Our UI/UX design services focus on creating intuitive, visually compelling, and user-centered interfaces that turn visitors into loyal customers. We combine creativity with strategy to design experiences that are not only beautiful but also functional and results-driven.
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
                  alt="UI UX Design"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our Approach to Delivering UI/UX Design Service */}
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
                OUR APPROACH TO DELIVERING <span className="text-[#f27820]">UI/UX DESIGN SERVICE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We believe that great design is more than just aesthetics—it's about creating meaningful experiences that connect users with your brand. Our approach blends creativity, strategy, and empathy to ensure every project delivers value.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: '1. RESEARCH & DISCOVERY',
                    desc: 'We begin by understanding your business goals, target audience, and market trends. User research, competitor analysis, and stakeholder interviews help us uncover insights that shape the design direction.',
                  },
                  {
                    title: '2. INFORMATION ARCHITECTURE & WIREFRAMING',
                    desc: 'We organize content and features into clear, user-friendly structures. Wireframes act as blueprints, mapping out user journeys and interactions before visual design begins.',
                  },
                  {
                    title: '3. VISUAL DESIGN & BRANDING',
                    desc: 'Our team crafts interfaces that are visually engaging, consistent with your brand identity, and accessible to all users. We focus on typography, color palettes, and design systems to ensure scalability and cohesion.',
                  },
                  {
                    title: '4. PROTOTYPING & INTERACTION DESIGN',
                    desc: 'Interactive prototypes bring ideas to life, allowing stakeholders and users to experience the product before development. We refine micro-interactions and animations to enhance usability and delight.',
                  },
                  {
                    title: '5. USABILITY TESTING & ITERATION',
                    desc: 'Real user feedback is essential. We conduct usability tests to identify pain points and opportunities for improvement. Continuous iteration ensures the final product is intuitive, efficient, and enjoyable.',
                  },
                  {
                    title: '6. COLLABORATION & DELIVERY',
                    desc: 'We work closely with developers, product managers, and stakeholders to ensure smooth handoff and implementation. Detailed design documentation and guidelines guarantee consistency across platforms.',
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

              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-4"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  We believe exceptional digital experiences are built through strategy, creativity, and user insight. Our approach combines research-driven thinking with innovative design execution to ensure your product is intuitive, engaging, and conversion-focused.
                </p>
                <p>
                  We start by understanding your business goals, target audience, and competitive landscape. From there, we define user journeys, identify pain points, and craft solutions that balance aesthetics with usability. Every decision we make is aligned with your brand identity and long-term growth strategy.
                </p>
                <p>
                  Our collaborative workflow ensures transparency at every stage — from discovery to final delivery — so you always stay informed and involved.
                </p>
              </div>
            </div>
          </div>

          {/* Our Suite of UI/UX Design Solutions */}
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
                OUR SUITE OF <span className="text-[#f27820]">UI/UX DESIGN SOLUTIONS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We offer comprehensive UI/UX design services tailored to businesses of all sizes and industries:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Website UI/UX Design – Modern, responsive, and user-friendly website interfaces',
                  'E-commerce Design – Conversion-focused online store experiences',
                  'Mobile App Design – Intuitive Android and iOS app experiences',
                  'Redesign & UX Optimization – Enhancing existing products for better performance',
                  'Web Application Design – Scalable and interactive web app interfaces',
                  'Design System Creation – Scalable design frameworks for consistency',
                  'Dashboard & SaaS Product Design – Data-driven, structured, and engaging dashboards',
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
                We use industry-leading tools like Figma, Adobe XD, and Sketch to ensure precision and collaboration.
              </p>
            </div>
          </div>

          {/* Our UI Design Process */}
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
                OUR <span className="text-[#f27820]">UI DESIGN PROCESS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our UI design process focuses on visual appeal, brand alignment, and interactive clarity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'BRAND & VISUAL RESEARCH' },
                  { num: '02', name: 'MOOD BOARDS & STYLE EXPLORATION' },
                  { num: '03', name: 'HIGH-FIDELITY DESIGN CREATION' },
                  { num: '04', name: 'COMPONENT & DESIGN SYSTEM DEVELOPMENT' },
                  { num: '05', name: 'DEVELOPER HANDOFF' },
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

          {/* Our UX Design Process */}
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
                OUR <span className="text-[#f27820]">UX DESIGN PROCESS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our UX design process ensures your product is functional, efficient, and user-centered.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'USER RESEARCH & ANALYSIS' },
                  { num: '02', name: 'INFORMATION ARCHITECTURE' },
                  { num: '03', name: 'WIREFRAMING' },
                  { num: '04', name: 'PROTOTYPING' },
                  { num: '05', name: 'USABILITY TESTING' },
                  { num: '06', name: 'CONTINUOUS OPTIMIZATION' },
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

          {/* Ready to Elevate Your User Experience with Top-Notch UI/UX Design? */}
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
                READY TO ELEVATE YOUR USER EXPERIENCE WITH TOP-NOTCH <span className="text-[#f27820]">UI/UX DESIGN?</span>
              </h2>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  Your digital product deserves more than just a good design — it deserves an experience that users love and trust.
                </p>
                <p>
                  Whether you're building from scratch or redesigning an existing platform, our expert UI/UX team is ready to transform your vision into a powerful digital reality.
                </p>
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
                FREQUENTLY <span className="text-[#f27820]">ASKED QUESTIONS (FAQ)</span>
              </h2>

              <div className="border-t border-[#e0d8d0]/30 space-y-0">
                {[
                  {
                    id: 1,
                    question: '1. What is the difference between UI and UX design?',
                    answer:
                      'UI focuses on visual elements like layout, colors, and typography, while UX focuses on usability, structure, and user satisfaction.',
                  },
                  {
                    id: 2,
                    question: '2. How long does a UI/UX design project take?',
                    answer:
                      'A standard website design may take 2–4 weeks, while complex applications may take several months.',
                  },
                  {
                    id: 3,
                    question: '3. Do you offer redesign services?',
                    answer:
                      'Yes. We analyze your current product and redesign it to improve engagement and conversion rates.',
                  },
                  {
                    id: 4,
                    question: '4. Will the design be responsive?',
                    answer:
                      'Absolutely. All our designs are mobile-friendly and optimized for different screen sizes and devices.',
                  },
                  {
                    id: 5,
                    question: '5. Do you conduct usability testing?',
                    answer:
                      'Yes. We perform usability testing to ensure the final design meets real user expectations.',
                  },
                  {
                    id: 6,
                    question: '6. Can you work with our development team?',
                    answer:
                      'Yes. We collaborate closely with in-house or external development teams for smooth implementation.',
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


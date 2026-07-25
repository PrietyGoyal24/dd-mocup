'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function FrontendDevelopmentClient() {
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
                .FRONTEND DEVELOPMENT
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p className="font-bold text-[#1a1a1a]">
                  Frontend Excellence: Elevating Interfaces to Exceptional Experiences.
                </p>
                <p>
                  Your frontend is the face of your digital product. It's where users interact, explore, and form lasting impressions about your brand.
                </p>
                <p>
                  We specialize in building high-performance, visually compelling, and responsive interfaces that transform ideas into immersive digital experiences.
                </p>
                <p>
                  Our frontend development solutions focus on speed, accessibility, usability, and seamless performance across all devices and browsers.
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
                  alt="Frontend Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Crafting User-Centric Frontends With Expertise and Vision */}
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
                CRAFTING USER-CENTRIC <span className="text-[#f27820]">FRONTENDS WITH EXPERTISE AND VISION</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We combine design thinking with technical excellence to create frontends that truly connect with users.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  'Pixel-perfect implementation of UI/UX designs',
                  'Mobile-first and responsive layouts',
                  'Cross-browser compatibility',
                  'Optimized loading speed',
                  'Scalable and maintainable code architecture',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex items-center"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[16px] md:text-[18px] leading-snug"
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
                By aligning business objectives with user behavior insights, we craft engaging digital journeys that increase retention and conversions.
              </p>
            </div>
          </div>

          {/* Our Frontend Development Expertise */}
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
                OUR FRONTEND DEVELOPMENT <span className="text-[#f27820]">EXPERTISE</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Custom Website Development',
                    desc: 'Responsive and high-performing websites tailored to your brand.',
                  },
                  {
                    title: 'Web Application Interfaces',
                    desc: 'Interactive, scalable, and data-driven frontend solutions.',
                  },
                  {
                    title: 'Single Page Applications (SPAs)',
                    desc: 'Dynamic applications built using React, Angular, and Vue.js.',
                  },
                  {
                    title: 'E-commerce Frontend Solutions',
                    desc: 'Optimized product pages, smooth checkout experiences, and conversion-focused layouts.',
                  },
                  {
                    title: 'Progressive Web Applications (PWAs)',
                    desc: 'Fast, reliable, and engaging app-like experiences on the web.',
                  },
                  {
                    title: 'UI Implementation from Design Tools',
                    desc: 'Precise conversion of designs from Figma, Adobe XD, and other platforms into functional code.',
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

          {/* Our Approach to Providing Exceptional Frontend Solutions */}
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
                OUR APPROACH TO PROVIDING <span className="text-[#f27820]">EXCEPTIONAL FRONTEND SOLUTIONS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'REQUIREMENT ANALYSIS' },
                  { num: '02', name: 'UI/UX COLLABORATION' },
                  { num: '03', name: 'AGILE DEVELOPMENT' },
                  { num: '04', name: 'PERFORMANCE OPTIMIZATION' },
                  { num: '05', name: 'TESTING & QUALITY ASSURANCE' },
                  { num: '06', name: 'DEPLOYMENT & ONGOING SUPPORT' },
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

          {/* Tools and Technologies We Use in Frontend Development */}
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
                TOOLS AND TECHNOLOGIES WE USE IN <span className="text-[#f27820]">FRONTEND DEVELOPMENT</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We leverage cutting-edge technologies to build scalable and efficient interfaces.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    category: 'Frontend Technologies',
                    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Vue.js'],
                  },
                  {
                    category: 'Frameworks & Libraries',
                    items: ['Bootstrap', 'Tailwind CSS', 'Material UI', 'Redux'],
                  },
                  {
                    category: 'Development Tools',
                    items: ['Git', 'GitHub', 'Webpack', 'Vite'],
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our tech stack is chosen based on your project requirements to ensure optimal performance and scalability.
              </p>
            </div>
          </div>

          {/* Why Choose Designdot for Your Frontend Development Needs? */}
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
                WHY CHOOSE DESIGNDOT FOR YOUR <span className="text-[#f27820]">FRONTEND DEVELOPMENT NEEDS?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  'User-focused development',
                  'Modern scalable architectures',
                  'Performance-driven implementation',
                  'Transparent communication',
                  'On-time project delivery',
                  'Post-launch support and maintenance',
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
                We don't just build interfaces — we craft digital experiences that drive measurable business impact.
              </p>
            </div>
          </div>

          {/* Why Frontend Development Matters */}
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
                WHY FRONTEND DEVELOPMENT <span className="text-[#f27820]">MATTERS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Fast, responsive, and smooth user experiences',
                  'Consistency with brand identity',
                  'Accessibility across devices and browsers',
                  'Higher user engagement and retention',
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
                    question: '1. What is frontend development?',
                    answer:
                      'Frontend development focuses on building the visual and interactive parts of a website or web application that users interact with directly.',
                  },
                  {
                    id: 2,
                    question: '2. How long does frontend development take?',
                    answer:
                      'Timelines vary based on complexity. A basic website may take 2–4 weeks, while complex applications can take several months.',
                  },
                  {
                    id: 3,
                    question: '3. Will my website be mobile-friendly?',
                    answer:
                      'Yes. We follow a mobile-first approach to ensure full responsiveness across all devices.',
                  },
                  {
                    id: 4,
                    question: '4. Do you optimize frontend performance?',
                    answer:
                      'Absolutely. We implement best practices such as code optimization, lazy loading, and asset compression to ensure fast loading times.',
                  },
                  {
                    id: 5,
                    question: '5. Can you work with our backend team?',
                    answer:
                      'Yes. We collaborate seamlessly with backend developers to ensure smooth API integration and functionality.',
                  },
                  {
                    id: 6,
                    question: '6. Do you provide maintenance services?',
                    answer:
                      'Yes. We offer ongoing support, updates, and performance monitoring after deployment.',
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


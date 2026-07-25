'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function FullStackClient() {
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
                .FULL STACK DEVELOPMENT
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p className="font-bold text-[#1a1a1a]">
                  Build Powerful Web & Mobile Applications from Frontend to Backend
                </p>
                <p>
                  Full Stack Development brings together both frontend and backend expertise to build complete, end-to-end applications. From user interface design to server-side logic, database management, and deployment — full-stack developers handle the entire technology stack.
                </p>
                <p>
                  Whether you're building a new product, upgrading an existing platform, or scaling your application, our Full Stack Development services deliver reliable, scalable, and high-performing solutions.
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
                  alt="Full Stack Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* What is Full Stack Development? */}
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
                WHAT IS <span className="text-[#f27820]">FULL STACK DEVELOPMENT?</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Full Stack Development is the process of creating a complete software application that includes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Frontend (Client-side) – what users see and interact with',
                  'Database – storing and retrieving data',
                  'Backend (Server-side) – logic, processing, and database operations',
                  'Deployment & Maintenance – launching and supporting the application',
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
                A full-stack developer can manage every part of the development lifecycle, ensuring faster delivery and better coordination.
              </p>
            </div>
          </div>

          {/* Our Full Stack Development Services */}
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
                OUR FULL STACK <span className="text-[#f27820]">DEVELOPMENT SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '1 - CUSTOM WEB APPLICATION DEVELOPMENT',
                    desc: 'Build robust web applications that scale with your business.',
                    bullets: [
                      'Responsive UI/UX',
                      'API integration',
                      'Performance optimization',
                      'Security & compliance',
                    ],
                  },
                  {
                    title: '2 - MOBILE APP DEVELOPMENT',
                    desc: 'Develop high-performing mobile apps for iOS and Android using:',
                    bullets: [
                      'Native frameworks',
                      'Cross-platform frameworks',
                      'Backend integration',
                      'App store deployment',
                    ],
                  },
                  {
                    title: '3 - API DEVELOPMENT & INTEGRATION',
                    desc: 'Create secure and scalable APIs to connect your applications with:',
                    bullets: [
                      'Third-party services',
                      'Payment gateways',
                      'CRM/ERP systems',
                      'Internal tools',
                    ],
                  },
                  {
                    title: '4 - ENTERPRISE SOFTWARE DEVELOPMENT',
                    desc: 'We build enterprise-grade systems including:',
                    bullets: [
                      'ERP solutions',
                      'CRM platforms',
                      'HR & Payroll systems',
                      'Inventory & Logistics systems',
                    ],
                  },
                  {
                    title: '5 - CLOUD & DEVOPS',
                    desc: 'We ensure your application is built for performance, reliability, and scalability with:',
                    bullets: [
                      'Cloud architecture (AWS, Azure, Google Cloud)',
                      'CI/CD pipelines',
                      'Monitoring & support',
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

          {/* Why Choose Our Full Stack Developers? */}
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
                WHY CHOOSE OUR <span className="text-[#f27820]">FULL STACK DEVELOPERS?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Faster Delivery',
                    desc: 'With a single team handling frontend and backend, development cycles are shorter and more efficient.',
                  },
                  {
                    title: 'End-to-End Expertise',
                    desc: 'We manage everything from UI to database, ensuring seamless integration.',
                  },
                  {
                    title: 'Secure & Scalable',
                    desc: 'Applications built with modern security standards and scalable architecture.',
                  },
                  {
                    title: 'Focused on Performance',
                    desc: 'Optimized code, fast loading times, and high availability.',
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

          {/* Diverse Full Stack Combinations Tailored for Your Business */}
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
                DIVERSE FULL STACK COMBINATIONS TAILORED FOR <span className="text-[#f27820]">YOUR BUSINESS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Every business has unique technical requirements, growth goals, and budget considerations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '1. MERN STACK',
                    desc: 'MongoDB, Express.js, React, Node.js for dynamic web applications and SaaS platforms.',
                  },
                  {
                    title: '2. MEAN STACK',
                    desc: 'MongoDB, Express.js, Angular, Node.js for enterprise-grade applications.',
                  },
                  {
                    title: '3. LAMP STACK',
                    desc: 'Linux, Apache, MySQL, PHP for CMS, ecommerce, and business websites.',
                  },
                  {
                    title: '4. PYTHON-BASED STACK',
                    desc: 'Django / Flask with React or Vue for AI integration and scalable systems.',
                  },
                  {
                    title: '5. .NET STACK',
                    desc: '.NET Core with Angular/React and SQL Server for enterprise systems.',
                  },
                  {
                    title: '6. JAMSTACK',
                    desc: 'JavaScript, APIs, and Markup for speed, security, and scalability.',
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
            </div>
          </div>

          {/* Our Full Stack Development Process */}
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
                OUR FULL STACK <span className="text-[#f27820]">DEVELOPMENT PROCESS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'DISCOVERY & PLANNING' },
                  { num: '02', name: 'UI/UX DESIGN' },
                  { num: '03', name: 'DEVELOPMENT' },
                  { num: '04', name: 'TESTING & QA' },
                  { num: '05', name: 'DEPLOYMENT & SUPPORT' },
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Ecommerce & Retail',
                  'Logistics & Transportation',
                  'Healthcare',
                  'Real Estate',
                  'Finance & Banking',
                  'SaaS Platforms',
                  'Education',
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
                FREQUENTLY <span className="text-[#f27820]">ASKED QUESTIONS (FAQ) – FULL STACK DEVELOPMENT</span>
              </h2>

              <div className="border-t border-[#e0d8d0]/30 space-y-0">
                {[
                  {
                    id: 1,
                    question: '1. What is Full Stack Development?',
                    answer:
                      'Full Stack Development refers to building both the front-end and back-end of a web or mobile application.',
                  },
                  {
                    id: 2,
                    question: '2. What technologies are used in Full Stack Development?',
                    answer:
                      'Technologies include React, Angular, Vue.js, Node.js, Django, .NET, MongoDB, MySQL, and PostgreSQL.',
                  },
                  {
                    id: 3,
                    question: '3. Why should I choose Full Stack Development for my project?',
                    answer:
                      'Full stack development offers faster development cycles, seamless integration, scalability, and cost-effective solutions.',
                  },
                  {
                    id: 4,
                    question: '4. How long does it take to develop a full stack application?',
                    answer:
                      'Development timelines vary from 2–4 weeks for basic websites to 3–6+ months for enterprise solutions.',
                  },
                  {
                    id: 5,
                    question: '5. Is full-stack development suitable for startups?',
                    answer:
                      'Yes. It reduces development costs, speeds up MVP creation, and supports rapid scaling.',
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


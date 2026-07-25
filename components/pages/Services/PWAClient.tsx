'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function PWAClient() {
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
                .PROGRESSIVE WEB APPS
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  At DesignDot, we specialize in Progressive Web App (PWA) development, creating apps that combine the best features of web and mobile applications.
                </p>
                <p>
                  PWAs offer a unique blend of speed, performance, and user experience that make them an ideal choice for businesses seeking to enhance engagement and maximize conversions.
                </p>
                <p>
                  With a single codebase for all platforms, PWAs are the future of the web, delivering seamless experiences across desktop and mobile devices.
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
                  alt="Progressive Web Apps"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* What are Progressive Web Apps (PWAs)? */}
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
                WHAT ARE PROGRESSIVE WEB APPS <span className="text-[#f27820]">(PWAS)?</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Progressive Web Apps (PWAs) are web applications that use modern web capabilities to deliver an app-like experience directly in the browser. PWAs offer the following features:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Offline Capabilities',
                  'Speed and Performance',
                  'App-Like Experience',
                  'Engagement Features',
                  'Cross-Platform Compatibility',
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                In today's digital era, PWAs are revolutionizing the way businesses engage users. They are fast, reliable, and engaging.
              </p>
            </div>
          </div>

          {/* Why Choose PWAs for Your Business? */}
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
                WHY CHOOSE PWAS FOR <span className="text-[#f27820]">YOUR BUSINESS?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '1. COST-EFFECTIVE DEVELOPMENT',
                    desc: 'PWAs eliminate the need for developing separate apps for iOS, Android, and the web.',
                  },
                  {
                    title: '2. IMPROVED USER ENGAGEMENT',
                    desc: 'Features like push notifications, offline access, and home screen icons help keep users engaged.',
                  },
                  {
                    title: '3. FASTER LOADING TIMES',
                    desc: 'PWAs are designed for lightning-fast load times, even in low-network conditions.',
                  },
                  {
                    title: '4. INCREASED CONVERSIONS',
                    desc: 'PWAs deliver smooth experiences that help convert users into customers effectively.',
                  },
                  {
                    title: '5. ENHANCED SEO BENEFITS',
                    desc: 'PWAs improve SEO visibility with faster load times and mobile-friendly experiences.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[16px] md:text-[18px] mb-3 uppercase tracking-[0.5px]"
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
            </div>
          </div>

          {/* Our PWA Development Services */}
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
                OUR PWA DEVELOPMENT <span className="text-[#f27820]">SERVICES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                At DesignDot, we offer custom PWA development services tailored to your business needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '1. CUSTOM PWA DEVELOPMENT',
                    desc: 'We craft bespoke Progressive Web Apps optimized for speed, performance, and functionality.',
                  },
                  {
                    title: '2. PWA MIGRATION SERVICES',
                    desc: 'We migrate your existing website or native app to a Progressive Web App.',
                  },
                  {
                    title: '3. PWA UI/UX DESIGN',
                    desc: 'Our expert designers create beautiful and intuitive interfaces for your PWA.',
                  },
                  {
                    title: '4. PWA OPTIMIZATION',
                    desc: 'We optimize every element of your app for speed and responsiveness.',
                  },
                  {
                    title: '5. PWA TESTING & QUALITY ASSURANCE',
                    desc: 'Rigorous QA checks ensure flawless functionality across devices and browsers.',
                  },
                  {
                    title: '6. POST-LAUNCH SUPPORT & MAINTENANCE',
                    desc: 'We provide ongoing maintenance and support after deployment.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[16px] md:text-[18px] mb-3 uppercase tracking-[0.5px]"
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
            </div>
          </div>

          {/* Benefits of Choosing Designdot for PWA Development */}
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
                BENEFITS OF CHOOSING DESIGNDOT FOR <span className="text-[#f27820]">PWA DEVELOPMENT</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Proven Expertise in PWA Development',
                    desc: 'Experienced developers building high-performance PWAs across industries.',
                  },
                  {
                    title: 'Customized Solutions',
                    desc: 'Tailored PWA solutions designed around your business goals.',
                  },
                  {
                    title: 'Agile Development Process',
                    desc: 'Flexible development methodology with continuous feedback and improvements.',
                  },
                  {
                    title: 'Cross-Platform Support',
                    desc: 'PWAs built to work seamlessly across desktops, smartphones, and tablets.',
                  },
                  {
                    title: 'Transparent Communication',
                    desc: 'Clear communication and project visibility throughout development.',
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

          {/* Industries We Serve with PWAs */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                INDUSTRIES WE SERVE WITH <span className="text-[#f27820]">PWAS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'E-Commerce & Retail',
                  'Finance & Banking',
                  'Education & E-Learning',
                  'Travel & Hospitality',
                  'Healthcare',
                  'Social Networking',
                  'News & Media',
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

          {/* Why PWAs Are The Future of Web Development */}
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
                WHY PWAS ARE THE FUTURE OF <span className="text-[#f27820]">WEB DEVELOPMENT</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'UNIVERSAL ACCESS',
                    desc: 'PWAs work seamlessly across all devices and platforms.',
                  },
                  {
                    title: 'FASTER DEVELOPMENT',
                    desc: 'A single codebase significantly reduces development time and costs.',
                  },
                  {
                    title: 'IMPROVED USER EXPERIENCE',
                    desc: 'PWAs provide speed, responsiveness, and app-like experiences.',
                  },
                  {
                    title: 'OFFLINE ACCESS',
                    desc: 'Users can access content even without an internet connection.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3 uppercase tracking-[0.5px]"
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
            </div>
          </div>

          {/* FAQs About PWAs */}
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
                FAQS ABOUT <span className="text-[#f27820]">PWAS</span>
              </h2>

              <div className="border-t border-[#e0d8d0]/30 space-y-0">
                {[
                  {
                    id: 1,
                    question: 'Q: What is the difference between a PWA and a native app?',
                    answer:
                      'A PWA is a web application that functions like a native mobile app but is accessed via a browser.',
                  },
                  {
                    id: 2,
                    question: 'Q: Can PWAs work offline?',
                    answer:
                      'Yes, PWAs can function offline or with poor network connections using service workers.',
                  },
                  {
                    id: 3,
                    question: 'Q: Are PWAs SEO-friendly?',
                    answer:
                      'Yes. PWAs are SEO-friendly because they are indexed by search engines and improve visibility.',
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


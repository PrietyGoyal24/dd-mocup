'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ELearningClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is an e-learning application?',
      answer:
        'An e-learning application is a digital learning platform that enables students, employees, or users to access courses, video lectures, quizzes, and live classes anywhere, anytime.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. How long does it take to develop an e-learning app?',
      answer:
        'Development timelines vary depending on features like live streaming, gamification, and custom LMS integrations, typically taking 3 to 6 months.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. Can you integrate video streaming and live classes into the app?',
      answer:
        'Yes. We integrate secure video streaming APIs, real-time virtual classroom tools, screen sharing, live chat, and recording capabilities.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. Do you build both mobile and web e-learning platforms?',
      answer:
        'Yes. We build responsive web platforms as well as native iOS and Android mobile apps with offline access capabilities.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. Is offline content access possible in mobile e-learning apps?',
      answer:
        'Yes. We implement secure offline storage so learners can download course materials and videos to watch when disconnected from the internet.',
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
                E-LEARNING APPLICATION
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  Digital transformation has transformed the education industry, making learning accessible anytime and anywhere through modern digital platforms.
                </p>
                <p>
                  E-learning applications help institutions, businesses, and educators deliver engaging, scalable, and interactive learning experiences with seamless communication and measurable outcomes.
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
                  alt="E-Learning Application Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* What is an E-Learning App? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-8">
            <div className="w-full">
              <h2
                className="uppercase mb-4 text-[18px] sm:text-[20px] md:text-[22px] leading-[1.3] tracking-[1.5px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                }}
              >
                WHAT IS AN <span className="text-[#f27820]">E-LEARNING APP?</span>
              </h2>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  An e-learning app is a digital platform that allows users to access educational content, training materials, and live learning sessions through mobile apps or web platforms.
                </p>
                <p>
                  These platforms support video lectures, quizzes, assignments, certifications, and collaboration between students and instructors.
                </p>
              </div>
            </div>
          </div>

          {/* E-Learning Apps Are Designed To */}
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
                E-LEARNING APPS ARE <span className="text-[#f27820]">DESIGNED TO</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Deliver structured courses and training modules',
                  'Enable remote learning through live sessions',
                  'Track learner progress and performance',
                  'Provide certifications and assessments',
                  'Encourage collaboration between students and instructors',
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

          {/* Key Features of E-Learning Apps */}
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
                KEY FEATURES OF <span className="text-[#f27820]">E-LEARNING APPS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                A successful e-learning platform includes features that improve engagement, accessibility, and performance tracking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'User Registration & Profiles',
                    desc: 'Secure login systems with personalized dashboards for students, instructors, and administrators.',
                  },
                  {
                    title: 'Course Management System',
                    desc: 'Easy course creation and multimedia content management with videos, PDFs, and presentations.',
                  },
                  {
                    title: 'Live Video Classes',
                    desc: 'Real-time virtual classrooms with screen sharing, chat, and collaboration tools.',
                  },
                  {
                    title: 'Assessments & Quizzes',
                    desc: 'Automated tests, assignments, and grading systems for learner evaluation.',
                  },
                  {
                    title: 'Progress Tracking & Analytics',
                    desc: 'Detailed reports, completion rates, and learner performance insights.',
                  },
                  {
                    title: 'Push Notifications',
                    desc: 'Alerts for classes, deadlines, announcements, and updates.',
                  },
                  {
                    title: 'Payment Gateway Integration',
                    desc: 'Secure subscriptions, one-time payments, and in-app purchases.',
                  },
                  {
                    title: 'Offline Access',
                    desc: 'Downloadable content for uninterrupted learning without internet connectivity.',
                  },
                  {
                    title: 'Gamification',
                    desc: 'Badges, leaderboards, and rewards to increase engagement.',
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

          {/* Steps in E-Learning Application Development */}
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
                STEPS IN <span className="text-[#f27820]">E-LEARNING APPLICATION DEVELOPMENT</span>
              </h2>

              {/* Zigzag Timeline */}
              <div className="relative w-full mx-auto mt-10">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#f58331] transform md:-translate-x-1/2" />
                <div className="space-y-10 relative">
                  {[
                    {
                      step: '01',
                      title: 'REQUIREMENT ANALYSIS',
                      desc: 'Define audience, learning goals, core features, and monetization strategy.',
                    },
                    {
                      step: '02',
                      title: 'MARKET RESEARCH & PLANNING',
                      desc: 'Analyze competitors and create a clear product roadmap.',
                    },
                    {
                      step: '03',
                      title: 'UI/UX DESIGN',
                      desc: 'Create engaging interfaces with smooth user experiences.',
                    },
                    {
                      step: '04',
                      title: 'TECHNOLOGY SELECTION',
                      desc: 'Choose scalable frameworks, cloud services, and integrations.',
                    },
                    {
                      step: '05',
                      title: 'DEVELOPMENT',
                      desc: 'Build frontend, backend, APIs, and integrate video conferencing.',
                    },
                    {
                      step: '06',
                      title: 'TESTING & QA',
                      desc: 'Conduct security, performance, and functionality testing.',
                    },
                    {
                      step: '07',
                      title: 'DEPLOYMENT',
                      desc: 'Launch on app stores and cloud platforms with optimized infrastructure.',
                    },
                    {
                      step: '08',
                      title: 'MAINTENANCE & UPDATES',
                      desc: 'Continuous support, feature upgrades, and improvements.',
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

          {/* Technology Stack for E-Learning App Development */}
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
                TECHNOLOGY STACK FOR{' '}
                <span className="text-[#f27820]">E-LEARNING APP DEVELOPMENT</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Selecting the right technology stack ensures scalability, security, and performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {[
                  {
                    category: 'Frontend Development',
                    items: ['React Native', 'Flutter', 'React.js', 'Angular'],
                  },
                  {
                    category: 'Backend Development',
                    items: ['Node.js', 'Python (Django / Flask)', '.NET Core'],
                  },
                  {
                    category: 'Database',
                    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
                  },
                  {
                    category: 'Cloud & Hosting',
                    items: ['AWS', 'Google Cloud', 'Microsoft Azure'],
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    category: 'Video Streaming & Conferencing',
                    items: ['WebRTC', 'Secure Video APIs', 'Third-party Video Conferencing Platforms'],
                  },
                  {
                    category: 'Payment Integration',
                    items: ['Stripe', 'PayPal', 'Razorpay'],
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
                          className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-start font-bold"
                          style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                        >
                          <span className="mr-2 mt-0.5 shrink-0 font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Examples of Successful E-Learning Apps */}
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
                EXAMPLES OF SUCCESSFUL <span className="text-[#f27820]">E-LEARNING APPS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {[
                  { num: '01', name: 'DUOLINGO' },
                  { num: '02', name: 'UDEMY' },
                  { num: '03', name: 'COURSERA' },
                  { num: '04', name: 'KHAN ACADEMY' },
                  { num: '05', name: "BYJU'S" },
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
                These platforms demonstrate how engaging content, scalable technology, and user-friendly design create impactful digital learning experiences.
              </p>
            </div>
          </div>

          {/* Elevate E-Learning By Integrating Digital Samba's Video Conferencing */}
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
                ELEVATE E-LEARNING BY INTEGRATING{' '}
                <span className="text-[#f27820]">DIGITAL SAMBA&apos;S VIDEO CONFERENCING</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Live interaction is a key component of modern e-learning, and Digital Samba helps create secure, interactive virtual classrooms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  'High-quality real-time video communication',
                  'Secure and encrypted virtual classrooms',
                  'Screen sharing and collaboration tools',
                  'Breakout rooms for discussions',
                  'Easy API integration with e-learning platforms',
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                By integrating advanced conferencing features directly into your platform, you can improve student engagement, collaboration, and knowledge retention.
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

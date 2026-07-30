'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function AIChatbotDevelopmentClient() {
  const offerItems = [
    {
      num: '1.',
      title: 'Development from Scratch',
      desc: 'We specialize in developing AI chatbot applications from the ground up using industry-standard frameworks and modern UI/UX practices.',
    },
    {
      num: '2.',
      title: 'Improvement Through Upgrade',
      desc: 'Our developers enhance compatibility with the latest platforms and technologies to ensure seamless integration across devices and channels.',
    },
    {
      num: '3.',
      title: 'Bug Fixing & Optimization',
      desc: 'We offer bug detection and debugging services to ensure your chatbot functions correctly and communicates effectively with your users.',
    },
    {
      num: '4.',
      title: 'Post-launch Maintenance',
      desc: 'Our commitment doesn\'t end at deployment—we provide complete maintenance and upgrades to keep your chatbot error-free and competitive.',
    },
    {
      num: '5.',
      title: 'Enterprise Capability',
      desc: 'We develop enterprise-grade chatbots that can handle large-scale user interactions, improving your business workflows and customer service.',
    },
  ];

  const whyChoosePoints = [
    'Expertise in Amazon Lex, Dialogflow, Microsoft Bot Framework',
    'Agile development with quick turnaround times',
    'Smart integrations with CRM, ERP, and customer support tools',
    '15+ years of industry experience with 92% repeat customers',
    'Developed 850+ apps for clients in 30+ countries',
  ];

  const industriesServed = [
    'Customer Support & Helpdesks',
    'News & Media',
    'Corporate Information Portals',
    'E-commerce & Retail',
    'Education & E-learning',
    'Healthcare & Wellness',
  ];

  const benefitCards = [
    {
      title: 'Economical',
      desc: 'Cost-effective and easy to deploy with high adoption rates.',
    },
    {
      title: 'Generates Leads',
      desc: 'Collects data and user feedback to generate quality leads.',
    },
    {
      title: 'Automated Actions',
      desc: 'Performs predefined tasks without manual intervention.',
    },
    {
      title: 'Personalized Conversations',
      desc: 'Delivers tailored responses for better user engagement.',
    },
    {
      title: 'Enhanced Productivity',
      desc: 'Saves time and resources by automating repetitive processes.',
    },
    {
      title: 'Built-in Security',
      desc: 'Secures user data and ensures safe interactions.',
    },
    {
      title: 'Privacy Standards',
      desc: 'Adheres to strict data privacy and compliance protocols.',
    },
    {
      title: 'Monitoring & Analytics',
      desc: 'Tracks user behavior and provides actionable insights.',
    },
    {
      title: 'Multimedia Sharing',
      desc: 'Supports media formats like video and images to boost interactivity.',
    },
  ];

  const whyPartnerPoints = [
    '15+ years of experience in chatbot & AI solutions',
    'Global presence with 100% client satisfaction rate',
    'Fast deployment with minimal downtime',
    'Custom AI chatbot architecture tailored to your business',
    'Scalable solutions designed for enterprise needs'
  ];

  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[90px] lg:pt-[125px]">
          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-8 text-[36px] sm:text-[58px] md:text-[80px] lg:text-[96px] leading-[1.05] tracking-[1px] font-normal"
                style={{
                  fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                AI CHATBOT DEVELOPMENT
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our AI-powered Chatbot development services deliver real-time, intuitive, and scalable solutions for multiple industries including entertainment, customer support, education, and more. Automate communication, improve service delivery, and increase efficiency using intelligent chatbots.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="AI Chatbot Development"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* OUR AI CHATBOT DEVELOPMENT SERVICES */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                OUR AI CHATBOT DEVELOPMENT SERVICES
              </h2>

              <div className="space-y-6">
                {offerItems.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h3
                      className="text-[#1a1a1a] text-[16px] md:text-[18px] font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.num} {item.title}
                    </h3>
                    <p
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WHY CHOOSE US FOR CHATBOT DEVELOPMENT? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY CHOOSE US FOR CHATBOT DEVELOPMENT?
              </h2>

              <ul className="space-y-2.5 ml-2">
                {whyChoosePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* INDUSTRIES WE SERVE */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                INDUSTRIES WE SERVE
              </h2>

              <ul className="space-y-2.5 ml-2">
                {industriesServed.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BENEFITS OF USING CHATBOT DEVELOPMENT */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-14">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-3 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                BENEFITS OF USING CHATBOT DEVELOPMENT
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Know why we are a leading Chatbot Development Company and how our bots benefit modern businesses:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefitCards.map((card, index) => (
                  <div
                    key={index}
                    className="group relative rounded-lg border border-[#e0d8d0] border-l-[4px] border-l-[#f27820] p-6 sm:p-8 flex flex-col justify-start bg-white text-slate-800 hover:bg-[#f27820] hover:text-white hover:border-[#f27820] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform hover:-translate-y-2.5 hover:shadow-2xl cursor-pointer overflow-hidden"
                  >
                    <div className="mb-5">
                      <div className="w-[52px] h-[52px] rounded-lg flex items-center justify-center bg-[#fcf3ec] text-[#f27820] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-white group-hover:text-[#f27820]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-[28px] h-[28px]"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="8.5 12 11 14.5 15.5 10" />
                        </svg>
                      </div>
                    </div>
                    <h3
                      className="mb-3 text-[18px] md:text-[20px] font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold'",
                        letterSpacing: '0.2px',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-[#1a1a1a] group-hover:text-white/95 transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular'",
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 400,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WHY PARTNER WITH US? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY PARTNER WITH US?
              </h2>

              <ul className="space-y-2.5 ml-2">
                {whyPartnerPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

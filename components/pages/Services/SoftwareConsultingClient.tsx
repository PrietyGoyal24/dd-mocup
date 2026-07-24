'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { Check, Plus, Minus, CheckCircle } from 'lucide-react';

export default function SoftwareConsultingClient() {
  const cards = [
    {
      title: 'Identify System Gaps',
      desc: 'Analyze existing systems and discover improvement opportunities.',
      isFeatured: false,
    },
    {
      title: 'Digital Roadmap',
      desc: 'Create a clear transformation strategy aligned with business goals.',
      isFeatured: true,
    },
    {
      title: 'Application Modernization',
      desc: 'Upgrade outdated applications with scalable modern technologies.',
      isFeatured: false,
    },
    {
      title: 'Operational Efficiency',
      desc: 'Improve workflows and automate repetitive business processes.',
      isFeatured: false,
    },
    {
      title: 'Customer Experience',
      desc: 'Build user-focused platforms with smooth digital experiences.',
      isFeatured: false,
    },
    {
      title: 'Future Scalability',
      desc: 'Develop future-ready systems built for growth and performance.',
      isFeatured: false,
    },
  ];

  const technologies = [
    {
      category: 'Frontend Technologies',
      items: ['React.js', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      category: 'Backend Technologies',
      items: ['Node.js', '.NET', 'Java', 'Python', 'PHP'],
    },
    {
      category: 'Mobile Development',
      items: ['iOS (Swift)', 'Android (Kotlin)', 'React Native', 'Flutter'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    },
  ];

  const roadmap = [
    {
      step: '01',
      title: 'DISCOVERY & ASSESSMENT',
      desc: 'Analyze systems, processes, and business objectives.',
    },
    {
      step: '02',
      title: 'STRATEGY & PLANNING',
      desc: 'Create software roadmap with milestones and KPIs.',
    },
    {
      step: '03',
      title: 'ARCHITECTURE & DESIGN',
      desc: 'Design scalable architecture and intuitive UI/UX.',
    },
    {
      step: '04',
      title: 'DEVELOPMENT & INTEGRATION',
      desc: 'Agile development with continuous iteration and feedback.',
    },
    {
      step: '05',
      title: 'TESTING & QA',
      desc: 'Ensure security, reliability, and performance optimization.',
    },
    {
      step: '06',
      title: 'DEPLOYMENT & OPTIMIZATION',
      desc: 'Smooth deployment with ongoing monitoring and support.',
    },
  ];

  const industries = [
    { step: '01', name: 'HEALTHCARE' },
    { step: '02', name: 'FINTECH & BANKING' },
    { step: '03', name: 'E-COMMERCE & RETAIL' },
    { step: '04', name: 'MANUFACTURING' },
    { step: '05', name: 'LOGISTICS & TRANSPORTATION' },
    { step: '06', name: 'EDUCATION & EDTECH' },
    { step: '07', name: 'REAL ESTATE' },
    { step: '08', name: 'SAAS & STARTUPS' },
  ];

  const differentiators = [
    {
      step: '01',
      title: 'Business-First Approach',
      desc: 'We focus on ROI, business growth, and operational impact — not just code.',
    },
    {
      step: '02',
      title: 'Experienced Engineering Team',
      desc: 'Certified developers, architects, and consultants with proven expertise.',
    },
    {
      step: '03',
      title: 'Agile & Transparent Process',
      desc: 'Regular updates, sprint reviews, and complete project visibility.',
    },
    {
      step: '04',
      title: 'Scalable & Future-Ready Solutions',
      desc: 'Technology ecosystems built to grow with your business.',
    },
    {
      step: '05',
      title: 'Security & Compliance Focused',
      desc: 'Data protection and regulatory compliance integrated from day one.',
    },
    {
      step: '06',
      title: 'Long-Term Partnership',
      desc: "We don't just deliver projects — we build lasting relationships.",
    },
  ];

  const oneStopHub = [
    'Custom Software Development',
    'Enterprise Application Development',
    'SaaS Product Development',
    'Cloud Migration & Modernization',
    'API Development & System Integration',
    'Legacy System Modernization',
    'Mobile App Development',
    'UI/UX Design',
    'DevOps & Maintenance Support',
  ];

  const initialFaqs = [
    {
      id: 1,
      question: '1. What is software consulting?',
      answer: 'Software consulting involves analyzing business needs and recommending, designing, and implementing technology solutions that improve efficiency and performance.',
      isOpen: true,
    },
    {
      id: 2,
      question: '2. How do you determine the right technology stack?',
      answer: 'We evaluate your business goals, scalability requirements, budget, and long-term vision before recommending technologies.',
      isOpen: true,
    },
    {
      id: 3,
      question: '3. How long does a software development project take?',
      answer: 'Timelines vary depending on complexity. Small projects may take 2–3 months, while enterprise systems may take 6–12 months or more.',
      isOpen: true,
    },
    {
      id: 4,
      question: '4. Do you offer ongoing support after deployment?',
      answer: 'Yes, we offer ongoing maintenance, updates, and round-the-clock support plans to ensure your systems remain stable and up-to-date.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. How do you ensure project security?',
      answer: 'We follow strict security protocols, including source code encryption, regular penetration tests, secure APIs, and compliance with standards like GDPR/HIPAA.',
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
          <div className="w-full px-6 md:px-12 lg:px-16 pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-8 text-[32px] sm:text-[56px] md:text-[76px] lg:text-[90px] leading-[1.05] tracking-[1px] font-normal"
                style={{
                  fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                <span className="block mb-3 md:mb-5">
                  <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                  SOFTWARE ENGINEERING &
                </span>
                <span className="block">CONSULTING</span>
              </h1>
              <p
                className="text-[#444444] w-full text-justify"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                Pioneering Excellence With Our Software Consulting Services. In today&apos;s fast-moving digital economy, software is no longer just a support function — it is the backbone of innovation, scalability, and competitive advantage.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 md:px-12 lg:px-16 pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg"
                  alt="Software Engineering & Consulting"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://dd.mocup.in/assets/web/images/expertise.webp';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Reinvent Your Business Intro */}
          <div className="w-full px-6 md:px-12 lg:px-16  pb-8">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[22px] sm:text-[26px] md:text-[24px] leading-[1] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold'",
                  letterSpacing: '0.5px',
                }}
              >
                REINVENT YOUR BUSINESS WITH THE BEST SOFTWARE CONSULTING COMPANY
              </h2>
              <p
                className="text-[#444444] w-full text-justify mb-1.5"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular'",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                Digital transformation is not just about adopting new technology — it&apos;s about solving real business challenges with the right technology.
              </p>
              <p
                className="text-[#444444] w-full text-justify"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif",
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '1.1px',
                  fontWeight: 400,
                }}
              >
                Our consultants work closely with stakeholders to understand your processes, challenges, and long-term objectives.
              </p>
            </div>
          </div>

          {/* Six Cards Grid */}
          <div className="w-full px-6 md:px-12 lg:px-16 pb-12">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="group relative rounded-lg border border-[#e0d8d0] border-l-[4px] border-l-[#f27820] pt-8 pb-10 pl-5 pr-6 md:pt-10 md:pb-12 md:pl-6 md:pr-8 flex flex-col justify-start min-h-[260px] bg-white text-slate-800 hover:bg-[#f27820] hover:text-white hover:border-[#f27820] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform hover:-translate-y-2.5 hover:shadow-2xl cursor-pointer overflow-hidden"
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
                        fontSize: '18px',
                        lineHeight: '26px',
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

          {/* Diverse Technologies Section */}
          <div className="w-full px-6 md:px-12 lg:px-16 pb-16">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.2] text-[18px] sm:text-[22px] md:text-[24px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                DIVERSE <span className="text-[#f27820]">TECHNOLOGIES</span> FOR SOFTWARE DEVELOPMENT
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col">
                    <h4
                      className="text-[#1a1a1a] mb-2 text-[20px] md:text-[22px] flex items-center font-bold"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold'",
                        letterSpacing: '0.2px',
                      }}
                    >
                      <span className="mr-2 text-[20px] font-bold">•</span> {tech.category}
                    </h4>
                    <ul className="space-y-1 pl-10">
                      {tech.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-center font-bold"
                          style={{
                            fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                          }}
                        >
                          <span className="mr-2 text-[18px] font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Roadmap Timeline */}
          <div className="w-full px-6 md:px-12 lg:px-16 pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.2] text-[20px] sm:text-[24px] md:text-[28px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR STRATEGIC <span className="text-[#f27820]">SOFTWARE CONSULTING ROADMAP</span>
              </h2>
              <p
                className="text-Black mb-12 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '1.5px',
                }}
              >
                Our structured approach ensures transparency, efficiency, and predictable outcomes.
              </p>

              {/* Timeline Graphic Grid */}
              <div className="relative w-full mx-auto">
                {/* Vertical Center Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#f58331] transform md:-translate-x-1/2" />

                <div className="space-y-10 relative">
                  {roadmap.map((item, index) => {
                    const isEven = index % 2 === 1;
                    return (
                      <div
                        key={index}
                        className={`flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''
                          }`}
                      >
                        {/* Timeline Marker Point */}
                        <div className="absolute left-6 md:left-1/2 w-[60px] h-[60px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[18px] md:text-[20px] transform -translate-x-1/2 z-10">
                          {item.step}
                        </div>

                        {/* Content Card container */}
                        <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-[70px]' : 'md:pr-[70px]'}`}>
                          <div className={`bg-white border border-[#e0d8d0]/40 rounded-2xl pt-6 pb-7 px-8 md:px-10 shadow-lg ${
                            isEven ? 'text-left' : 'text-left md:text-right'
                          }`}>
                            <h3
                              className="text-[#0e2038] uppercase mb-[15px]"
                              style={{
                                fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                                fontSize: '20px',
                                lineHeight: '30px',
                                letterSpacing: '1px',
                                fontWeight: 700,
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              className="text-[#444444] md:whitespace-nowrap"
                              style={{
                                fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                                fontSize: '18px',
                                lineHeight: '26px',
                                letterSpacing: '1px',
                                fontWeight: 400,
                              }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Empty Space filler for alignment */}
                        <div className="hidden md:block w-1/2" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
            {/* Industries We Serve */}
          <div className="w-full px-6 md:px-12 lg:px-16 pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.2] text-[18px] sm:text-[22px] md:text-[24px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                INDUSTRIES <span className="text-[#f27820]">WE SERVE</span>
              </h2>
              <p
                className="text-black mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif",
                  letterSpacing: '0.5px',
                }}
              >
                Our industry-specific experience allows us to understand regulatory requirements, market challenges, and operational workflows.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industries.map((ind, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-6 px-8 md:py-7 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                  >
                    <div className="w-[50px] h-[50px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[16px] md:text-[18px] shrink-0">
                      {ind.step}
                    </div>
                    <span
                      className="text-[#0e2038] text-[18px] md:text-[20px] font-bold tracking-wide uppercase"
                      style={{
                        fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {ind.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
            {/* Differentiators Section */}
          <div className="w-full px-6 md:px-12 lg:px-16 pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-10 leading-[1.2] text-[24px] sm:text-[24px] md:text-[26px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHAT <span className="text-[#f27820]">DIFFERENTIATES US</span> FROM OTHER SOFTWARE CONSULTING COMPANIES?
              </h2>
 
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {differentiators.map((diff, index) => (
                   <div
                     key={index}
                     className="flex items-start gap-6 bg-white border border-[#e0d8d0]/40 py-6 px-8 md:py-7 md:px-9 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transform transition-all duration-300 ease-out"
                   >
                     <div className="w-[50px] h-[50px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[16px] md:text-[18px] shrink-0">
                       {diff.step}
                     </div>
                     <div>
                       <h3
                         className="text-[#0e2038] font-bold text-[18px] md:text-[24px] mb-2"
                         style={{
                           fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                         }}
                       >
                         {diff.title}
                       </h3>
                       <p
                         className="text-black text-[16px] md:text-[18px] leading-relaxed"
                         style={{
                           fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                         }}
                       >
                         {diff.desc}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>

            {/* One-Stop Hub Section */}
          <div className="w-full px-6 md:px-12 lg:px-16 pb-12">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-3 leading-[1.2] text-[18px] sm:text-[22px] md:text-[26px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                A ONE-STOP HUB FOR ALL YOUR <span className="text-[#f27820]">SOFTWARE DEVELOPMENT NEEDS</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[20px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                From concept to post-launch support, we offer comprehensive services under one roof.
              </p>
 
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {oneStopHub.map((item, index) => (
                   <div
                     key={index}
                     className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-8 rounded-r-lg shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex items-center"
                   >
                     <span
                       className="text-[#0e2038] text-[16px] md:text-[18px] font-bold"
                       style={{
                         fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif",
                       }}
                     >
                       {item}
                     </span>
                   </div>
                 ))}
               </div>
 
               <p
                 className="text-[#444444] mt-10 text-[18px] md:text-[24px] leading-[38px] text-left"
                 style={{
                   fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                   letterSpacing: '0.5px',
                 }}
               >
                 Whether you&apos;re a startup building your first MVP or an enterprise scaling globally, we provide end-to-end technology solutions tailored to your growth.
               </p>
            </div>
          </div>
             {/* FAQs Section */}
          <div className="w-full px-6 md:px-12 lg:px-16 pb-16">
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
                       style={{
                         fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                       }}
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
                         style={{
                           fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                         }}
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

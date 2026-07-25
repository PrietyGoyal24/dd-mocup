'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function SoftwareDevelopmentOutsourcingClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is software development outsourcing?',
      answer:
        'Software development outsourcing involves hiring an external development team or company to design, build, test, and maintain software solutions.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. Why should I outsource software development?',
      answer:
        'Outsourcing provides access to skilled tech talent, reduces operational and infrastructure costs, speeds up delivery, and allows your team to focus on core business objectives.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. How do you ensure project security?',
      answer:
        'We enforce strict NDAs, IP protection agreements, secure coding practices, data encryption, and compliance with global security standards.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. Can you work with our existing team?',
      answer:
        'Yes. We offer staff augmentation and dedicated team models that seamlessly integrate with your in-house developers and workflows.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. Do you provide post-launch support?',
      answer:
        'Absolutely. We provide continuous maintenance, monitoring, security updates, and performance optimization after deployment.',
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
                SOFTWARE DEVELOPMENT
                <span className="block">OUTSOURCING</span>
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  Accelerate innovation and reduce operational costs with Designdot’s end-to-end software development outsourcing services, delivering scalable, secure, and high-performance digital solutions for startups, SMEs, and enterprises.
                </p>
                <p>
                  From building new applications to modernizing legacy systems and extending in-house teams, we provide expert talent, advanced technologies, and proven development processes to drive faster business growth.
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
                  alt="Software Development Outsourcing"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Software Development Outsourcing Services We Offer */}
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
                SOFTWARE DEVELOPMENT{' '}
                <span className="text-[#f27820]">OUTSOURCING SERVICES WE OFFER</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We deliver comprehensive outsourcing services tailored to diverse business requirements and growth goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Custom Software Development',
                    desc: 'Tailored software solutions aligned with business operations and long-term strategies.',
                  },
                  {
                    title: 'Web Application Development',
                    desc: 'Secure and scalable web applications, enterprise portals, and SaaS platforms.',
                  },
                  {
                    title: 'Mobile App Development',
                    desc: 'Native and cross-platform mobile applications for iOS and Android devices.',
                  },
                  {
                    title: 'UI/UX Design',
                    desc: 'User-centric and intuitive designs that improve usability and engagement.',
                  },
                  {
                    title: 'Software Product Development',
                    desc: 'End-to-end product engineering from idea validation to deployment.',
                  },
                  {
                    title: 'Cloud & DevOps Services',
                    desc: 'Cloud migration, infrastructure setup, CI/CD pipelines, and optimization.',
                  },
                  {
                    title: 'Maintenance & Support',
                    desc: 'Continuous monitoring, updates, security patches, and performance improvements.',
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

          {/* Engagement Models Offered By Our Software Development Outsourcing Company */}
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
                ENGAGEMENT MODELS OFFERED BY OUR{' '}
                <span className="text-[#f27820]">SOFTWARE DEVELOPMENT OUTSOURCING COMPANY</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We provide flexible engagement models designed for transparency, agility, and cost control.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Dedicated Team Model',
                  'Fixed-Price Model',
                  'Time & Material Model',
                  'Staff Augmentation',
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

          {/* Get Experts For All Your Needs */}
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
                GET EXPERTS FOR <span className="text-[#f27820]">ALL YOUR NEEDS</span>
              </h2>
              <p
                className="text-[#444444] mb-6 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our experienced professionals collaborate closely with your team to ensure smooth communication, faster delivery, and successful project execution.
              </p>

              <div>
                <h4
                  className="text-[#1a1a1a] mb-4 text-[18px] md:text-[20px] flex items-center font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                >
                  <span className="mr-2 font-bold">•</span> Technical Experts
                </h4>
                <ul className="space-y-2 pl-8">
                  {[
                    'Software Developers',
                    'Mobile App Developers',
                    'UI/UX Designers',
                    'QA Engineers',
                    'DevOps Specialists',
                    'Project Managers',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] flex items-start font-bold"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      <span className="mr-2 mt-0.5 shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bring Your App Vision to Life With Our Software Outsourcing Company */}
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
                BRING YOUR APP VISION TO LIFE WITH OUR{' '}
                <span className="text-[#f27820]">SOFTWARE OUTSOURCING COMPANY</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                From concept validation and prototyping to deployment and post-launch support, we manage the complete software development lifecycle. Our focus is on building scalable, secure, and high-performance digital products that drive measurable business growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Scalable architecture',
                  'Secure coding standards',
                  'High-performance applications',
                  'Seamless integrations',
                  'Business-driven development approach',
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

          {/* Leveraging High-Performance Tech Stack for Business Growth */}
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
                LEVERAGING HIGH-PERFORMANCE{' '}
                <span className="text-[#f27820]">TECH STACK FOR BUSINESS GROWTH</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We use modern technologies to develop reliable, scalable, and future-ready software solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {[
                  {
                    category: 'Frontend Technologies',
                    items: ['React.js', 'Angular', 'Vue.js'],
                  },
                  {
                    category: 'Backend Technologies',
                    items: ['Node.js', 'Python', '.NET', 'PHP', 'Java'],
                  },
                  {
                    category: 'Mobile Technologies',
                    items: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
                  },
                  {
                    category: 'Cloud Platforms',
                    items: ['AWS', 'Microsoft Azure', 'Google Cloud'],
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
                    category: 'Databases',
                    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
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
            </div>
          </div>

          {/* Our Four-Step Process for Software Outsourcing */}
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
                OUR FOUR-STEP PROCESS FOR{' '}
                <span className="text-[#f27820]">SOFTWARE OUTSOURCING</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our streamlined outsourcing process ensures quality delivery within timelines and budgets.
              </p>

              {/* Zigzag Timeline */}
              <div className="relative w-full mx-auto mt-10">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#f58331] transform md:-translate-x-1/2" />
                <div className="space-y-10 relative">
                  {[
                    {
                      step: '01',
                      title: 'REQUIREMENT ANALYSIS',
                      desc: 'Understanding business goals, technical requirements, and project scope.',
                    },
                    {
                      step: '02',
                      title: 'PLANNING & STRATEGY',
                      desc: 'Defining roadmap, selecting technologies, and creating development plans.',
                    },
                    {
                      step: '03',
                      title: 'DEVELOPMENT & TESTING',
                      desc: 'Agile development, testing, and iterative improvements.',
                    },
                    {
                      step: '04',
                      title: 'DEPLOYMENT & SUPPORT',
                      desc: 'Application deployment, monitoring, and continuous optimization.',
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

          {/* Enabling Growth Across Industries With Outsourcing Software Development Services */}
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
                ENABLING GROWTH ACROSS INDUSTRIES WITH{' '}
                <span className="text-[#f27820]">OUTSOURCING SOFTWARE DEVELOPMENT SERVICES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We deliver industry-specific solutions that support digital transformation and business efficiency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'HEALTHCARE' },
                  { num: '02', name: 'FINTECH' },
                  { num: '03', name: 'ECOMMERCE & RETAIL' },
                  { num: '04', name: 'EDUCATION & ELEARNING' },
                  { num: '05', name: 'REAL ESTATE' },
                  { num: '06', name: 'LOGISTICS & SUPPLY CHAIN' },
                  { num: '07', name: 'TRAVEL & HOSPITALITY' },
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

          {/* Why Choose Designdot As Your Software Development Outsourcing Company? */}
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
                WHY CHOOSE DESIGNDOT AS YOUR{' '}
                <span className="text-[#f27820]">SOFTWARE DEVELOPMENT OUTSOURCING COMPANY?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: 'Experienced Team',
                    desc: 'Skilled developers and engineers with years of industry expertise.',
                  },
                  {
                    title: 'Cost-Effective Solutions',
                    desc: 'Reduce operational costs without compromising quality.',
                  },
                  {
                    title: 'Agile Methodology',
                    desc: 'Faster development cycles with flexible adaptability.',
                  },
                  {
                    title: 'Transparent Communication',
                    desc: 'Regular updates, sprint reviews, and reporting.',
                  },
                  {
                    title: 'Data Security & Compliance',
                    desc: 'Strict security standards and data protection practices.',
                  },
                  {
                    title: 'Long-Term Partnership',
                    desc: 'Reliable support focused on long-term business growth.',
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

              <p
                className="text-[#444444] text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Designdot delivers innovative, scalable, and reliable software solutions that help businesses succeed in competitive markets.
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

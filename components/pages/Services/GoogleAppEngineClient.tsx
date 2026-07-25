'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function GoogleAppEngineClient() {
  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-6 text-[28px] sm:text-[48px] md:text-[66px] lg:text-[80px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .GOOGLE APP ENGINE SERVICES
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our Award-Winning Google App Engine Services.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Collaborate with the experts at DesignDot to unlock the full potential of Google App Engine.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Together, we&apos;ll craft innovative, user-focused applications that elevate your brand and drive success.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Google App Engine Services"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Our Google App Engine Services */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-3 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR GOOGLE APP ENGINE <span className="text-[#f27820]">SERVICES</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                At Designdot, we offer comprehensive Google App Engine services to help businesses develop, deploy, and optimize cloud-native applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Custom App Development',
                    desc: 'Build scalable and high-performance applications tailored to your business requirements.',
                  },
                  {
                    title: 'Google App Engine Migration',
                    desc: 'Seamlessly migrate existing applications with minimal downtime and disruption.',
                  },
                  {
                    title: 'Continuous Deployment & CI/CD',
                    desc: 'Automate testing, deployment, and release workflows for faster delivery.',
                  },
                  {
                    title: 'App Performance Optimization',
                    desc: 'Improve speed, scalability, and user experience with monitoring tools.',
                  },
                  {
                    title: 'Backend Services Integration',
                    desc: 'Integrate Cloud SQL, Firebase, BigQuery, and other Google Cloud services.',
                  },
                  {
                    title: 'Security & Compliance',
                    desc: 'Ensure enterprise-grade security, identity management, and compliance standards.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl px-6 py-6 shadow-sm"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[14px] md:text-[15px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Google App Engine */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY CHOOSE <span className="text-[#f27820]">GOOGLE APP ENGINE?</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Fully Managed Cloud Platform',
                  'Automatic Scaling',
                  'Google Cloud Integration',
                  'Developer-Friendly Environment',
                  'Cost-Efficient Pricing',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] px-5 py-4 text-[#0e2038] font-bold text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google App Engine Specialities */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                GOOGLE APP ENGINE <span className="text-[#f27820]">SPECIALITIES</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: 'Core Features',
                    items: [
                      'Serverless Platform',
                      'Automatic Scaling',
                      'Multi-Language Support',
                      'Traffic Splitting',
                    ],
                  },
                  {
                    category: 'Environment Support',
                    items: [
                      'Standard Environment',
                      'Flexible Environment',
                      'Docker Container Support',
                    ],
                  },
                  {
                    category: 'Integrated Services',
                    items: [
                      'Cloud SQL',
                      'Firestore',
                      'Datastore',
                      'Pub/Sub',
                      'BigQuery',
                    ],
                  },
                  {
                    category: 'Security & Monitoring',
                    items: [
                      'Cloud Logging',
                      'Cloud Monitoring',
                      'IAM Access Management',
                      'Enterprise Security',
                    ],
                  },
                ].map((group, idx) => (
                  <div key={idx}>
                    <div className="flex items-start mb-3">
                      <span className="text-[#1a1a1a] mr-2 font-bold text-[15px] mt-[1px]">•</span>
                      <span
                        className="text-[#1a1a1a] font-bold text-[15px] md:text-[16px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {group.category}
                      </span>
                    </div>
                    <ul className="ml-6 space-y-2">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#444444] mr-2 text-[13px] mt-[2px]">•</span>
                          <span
                            className="text-[#444444] text-[13px] md:text-[14px] leading-relaxed"
                            style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google App Engine Process Overview */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                GOOGLE APP ENGINE <span className="text-[#f27820]">PROCESS OVERVIEW</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { num: '01', label: 'DEVELOP' },
                  { num: '02', label: 'CONFIGURE' },
                  { num: '03', label: 'DEPLOY' },
                  { num: '04', label: 'SCALE' },
                  { num: '05', label: 'MONITOR' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm"
                  >
                    <div className="w-[46px] h-[46px] rounded-full bg-[#f27820] flex items-center justify-center shrink-0">
                      <span
                        className="text-white font-bold text-[14px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {item.num}
                      </span>
                    </div>
                    <span
                      className="text-[#0e2038] font-bold text-[15px] md:text-[16px] tracking-[1px] uppercase"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits for Users */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                BENEFITS FOR <span className="text-[#f27820]">USERS</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Focus on Development Instead of Infrastructure',
                  'Cost-Efficient Pay-as-You-Go Pricing',
                  'High Availability & Reliability',
                  'Flexible Deployment Environments',
                  'Rapid Application Deployment',
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#f27820] px-5 py-4 text-[#0e2038] font-bold text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
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
                    question: '1. What is Google App Engine?',
                    answer:
                      'Google App Engine is a fully managed serverless platform that allows developers to build, deploy, and scale applications without managing infrastructure.',
                  },
                  {
                    id: 2,
                    question: '2. What languages does Google App Engine support?',
                    answer:
                      'Google App Engine supports multiple programming languages including Python, Java, Node.js, Go, PHP, Ruby, and .NET via the flexible environment.',
                  },
                  {
                    id: 3,
                    question: '3. How does auto-scaling work on Google App Engine?',
                    answer:
                      'App Engine automatically scales your application up or down based on incoming traffic, ensuring high performance during peak usage and cost savings during low traffic periods.',
                  },
                  {
                    id: 4,
                    question: '4. Is Google App Engine suitable for enterprise applications?',
                    answer:
                      'Yes, Google App Engine offers enterprise-grade security, compliance certifications, IAM access management, and seamless integration with other Google Cloud services.',
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

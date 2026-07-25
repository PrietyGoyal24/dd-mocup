'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { CheckCircle } from 'lucide-react';

export default function APIDevelopmentClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is custom API development?',
      answer:
        'Custom API development involves designing, building, and deploying application programming interfaces tailored to connect your software applications, third-party tools, and databases securely.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. Should I choose REST or GraphQL for my project?',
      answer:
        'REST is ideal for standard CRUD operations and caching, while GraphQL is best when front-end applications need precise data queries with zero over-fetching.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. How do you secure APIs against unauthorized access?',
      answer:
        'We implement OAuth 2.0, JSON Web Tokens (JWT), API keys, rate limiting, CORS configuration, and SSL/TLS encryption.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. Do you provide API documentation for developers?',
      answer:
        'Yes. We provide interactive OpenAPI/Swagger documentation, Postman collections, and detailed integration guides for internal and third-party developers.',
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
                .API DEVELOPMENT
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  In today’s interconnected digital landscape, robust and secure APIs (Application Programming Interfaces) are essential for enabling seamless communication between software systems. Our API Development services empower businesses to connect applications, data, and services efficiently—ensuring scalability, security, and performance across platforms.
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
                  alt="API Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Custom API Development Services */}
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
                CUSTOM <span className="text-[#f27820]">API DEVELOPMENT SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'REST & SOAP API Development',
                    desc: 'We build secure and scalable RESTful and SOAP APIs tailored to your business requirements using industry standards and best practices.',
                  },
                  {
                    title: 'API Integration',
                    desc: 'Seamlessly integrate third-party services such as payment gateways, CRMs, ERPs, and social platforms into your ecosystem.',
                  },
                  {
                    title: 'API for Mobile & Web Apps',
                    desc: 'Develop backend APIs that serve your mobile and web apps with optimal performance, flexibility, and real-time data access.',
                  },
                  {
                    title: 'GraphQL Development',
                    desc: 'Enable precise data fetching and faster front-end performance with our GraphQL API solutions tailored to modern web apps.',
                  },
                  {
                    title: 'API Testing & QA',
                    desc: 'Ensure your APIs function flawlessly with automated testing for reliability, security, and performance under all scenarios.',
                  },
                  {
                    title: 'API Documentation & Support',
                    desc: 'Deliver clear, developer-friendly documentation and ongoing support to simplify implementation and onboarding.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
                  >
                    <div className="w-[42px] h-[42px] rounded-lg bg-[#fff1e8] text-[#f27820] flex items-center justify-center mb-4">
                      <CheckCircle className="w-5 h-5 text-[#f27820]" />
                    </div>
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

          {/* Why Choose Us for API Development? */}
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
                WHY CHOOSE US FOR <span className="text-[#f27820]">API DEVELOPMENT?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Scalable Architecture',
                    desc: 'We design APIs to handle high traffic volumes and support long-term application growth using stateless architecture.',
                  },
                  {
                    title: 'Secure Communication',
                    desc: 'From OAuth 2.0 to API key-based access and HTTPS encryption, our APIs are built with security as a top priority.',
                  },
                  {
                    title: 'Cross-Platform Compatibility',
                    desc: 'Ensure seamless communication across mobile, web, IoT, and cloud platforms for maximum flexibility.',
                  },
                  {
                    title: 'Rapid Development',
                    desc: 'Accelerate your product delivery with our agile API development practices, reusable components, and version control.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
                  >
                    <div className="w-[42px] h-[42px] rounded-lg bg-[#fff1e8] text-[#f27820] flex items-center justify-center mb-4">
                      <CheckCircle className="w-5 h-5 text-[#f27820]" />
                    </div>
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

          {/* Our API Tech Stack */}
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
                OUR API <span className="text-[#f27820]">TECH STACK</span>
              </h2>

              <ul className="space-y-3 pl-2 mb-8">
                {[
                  'Node.js, Express.js, Laravel, .NET Core',
                  'GraphQL, REST, gRPC, OpenAPI (Swagger)',
                  'Postman, SwaggerHub, SoapUI',
                  'OAuth 2.0, JWT, API Gateways (Kong, Apigee)',
                  'MongoDB, MySQL, PostgreSQL, Redis',
                  'AWS Lambda, Azure Functions, Firebase',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#1a1a1a] text-[16px] md:text-[18px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-3 text-[#1a1a1a]">•</span> {item}
                  </li>
                ))}
              </ul>

              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                From planning and design to implementation and maintenance, we deliver secure, reliable, and high-performance APIs that drive digital transformation and enhance user experience across your ecosystem.
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

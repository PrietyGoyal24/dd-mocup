'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { CheckCircle } from 'lucide-react';

export default function AppModernizationClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is application modernization?',
      answer:
        'Application modernization is the process of updating legacy software systems with modern architecture, cloud infrastructure, containerization, and enhanced security to align with current business needs.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. Why should we modernize legacy systems instead of rebuilding from scratch?',
      answer:
        'Modernizing allows you to preserve critical business logic and valuable data while reducing risks, costs, and downtime compared to full rewrite projects.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. What is the difference between refactoring and re-architecting?',
      answer:
        'Refactoring cleans and optimizes existing code without altering its external behavior, whereas re-architecting alters the underlying structure (such as moving from monolith to microservices).',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. How do you ensure business continuity during cloud migration?',
      answer:
        'We execute phased migrations with automated testing, parallel runs, and blue-green deployment strategies to ensure zero operational downtime.',
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
                .APPLICATION MODERNIZATION
                <span className="block">SERVICES</span>
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  In a rapidly evolving digital ecosystem, legacy systems can hinder agility, scalability, and innovation. Our Application Modernization Services are designed to transform your outdated applications into modern, efficient, and scalable systems. By leveraging cloud-native technologies, microservices, and modern architecture patterns, we help you future-proof your business and reduce technical debt.
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
                  alt="Application Modernization Services"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our Application Modernization Capabilities */}
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
                OUR APPLICATION <span className="text-[#f27820]">MODERNIZATION CAPABILITIES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Legacy System Assessment',
                    desc: 'Analyze your existing infrastructure to identify modernization opportunities, risks, and the most cost-effective paths forward.',
                  },
                  {
                    title: 'Re-Engineering & Refactoring',
                    desc: 'Improve code quality, performance, and scalability by restructuring and optimizing legacy codebases.',
                  },
                  {
                    title: 'Cloud Migration',
                    desc: 'Seamlessly migrate your legacy systems to modern cloud platforms such as AWS, Azure, or Google Cloud for improved scalability and performance.',
                  },
                  {
                    title: 'Microservices Architecture',
                    desc: 'Break down monolithic applications into independent, manageable microservices to increase flexibility and deployment speed.',
                  },
                  {
                    title: 'Containerization & Orchestration',
                    desc: 'Leverage Docker and Kubernetes to deploy, manage, and scale applications efficiently in modern environments.',
                  },
                  {
                    title: 'UI/UX Modernization',
                    desc: 'Redesign user interfaces to provide intuitive and modern user experiences across devices and platforms.',
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

          {/* Why Choose Us for Application Modernization? */}
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
                WHY CHOOSE US FOR <span className="text-[#f27820]">APPLICATION MODERNIZATION?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Strategic Planning',
                    desc: 'We align modernization efforts with your business goals to ensure maximum ROI and minimal disruption.',
                  },
                  {
                    title: 'Cross-Platform Expertise',
                    desc: 'Whether it\'s mainframes, desktop apps, or legacy web platforms, we modernize solutions across all environments.',
                  },
                  {
                    title: 'End-to-End Ownership',
                    desc: 'From initial assessment to implementation and post-deployment support, we manage the entire modernization lifecycle.',
                  },
                  {
                    title: 'Security-First Approach',
                    desc: 'We embed security best practices in every stage to ensure your modern applications are robust and compliant.',
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

          {/* Technologies We Use */}
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
                TECHNOLOGIES <span className="text-[#f27820]">WE USE</span>
              </h2>

              <ul className="space-y-3 pl-2 mb-8">
                {[
                  'Cloud Platforms: AWS, Microsoft Azure, Google Cloud',
                  'Containerization: Docker, Kubernetes',
                  'Languages: Java, .NET, Python, Node.js',
                  'Databases: PostgreSQL, MySQL, MongoDB, Redis',
                  'Frameworks: Spring Boot, Angular, React, Vue.js',
                  'DevOps Tools: Jenkins, GitLab CI/CD, Ansible, Terraform',
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
                Unlock the full potential of your business with our comprehensive Application Modernization Services. We help you reduce costs, improve agility, and accelerate innovation—one system at a time.
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

'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { Plus, Minus } from 'lucide-react';

export default function SecurityComplianceClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: '1. Why is security and compliance important for businesses?',
      answer:
        'Security and compliance safeguard critical business data, prevent costly cyber attacks and data breaches, ensure adherence to legal regulations, and build long-term trust with clients and stakeholders.',
    },
    {
      question: '2. What industries benefit most from security & compliance services?',
      answer:
        'Industries handling sensitive customer, financial, or healthcare data—such as Healthcare, Finance, E-Commerce, SaaS, Enterprise Software, and Government entities—benefit directly.',
    },
    {
      question: '3. Which compliance standards do you support?',
      answer:
        'We support global compliance frameworks including SOC 2, ISO 27001, PCI DSS, GDPR, HIPAA, NIST, and enterprise security governance policies.',
    },
    {
      question: '4. How do you ensure data protection?',
      answer:
        'We implement multi-layered security including end-to-end encryption in transit and at rest, Zero-Trust IAM access control, automated vulnerability assessments, and 24/7 SIEM monitoring.',
    },
    {
      question: '5. What tools power your security solutions?',
      answer:
        'Our solutions are powered by industry leaders like Prisma Cloud, Check Point CSPM, Splunk, Microsoft Sentinel, AWS IAM, Azure AD, Datadog, and AI-driven threat intelligence platforms.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-6 text-[30px] sm:text-[52px] md:text-[72px] lg:text-[86px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .SECURITY & COMPLIANCE
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                We safeguard your business with enterprise-grade security frameworks and ensure compliance with global standards.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Innovate with confidence while protecting your data, infrastructure, and digital operations.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Security and Compliance"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Key Focus Areas */}
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
                KEY FOCUS <span className="text-[#f27820]">AREAS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Data Protection & Privacy',
                    desc: 'End-to-end encryption, secure IAM, and privacy-first frameworks aligned with GDPR and HIPAA.',
                  },
                  {
                    title: 'Compliance Management',
                    desc: 'Continuous monitoring for SOC 2, ISO 27001, PCI DSS, and other standards.',
                  },
                  {
                    title: 'Cloud Security Posture Management',
                    desc: 'Real-time visibility, vulnerability detection, and proactive remediation.',
                  },
                  {
                    title: 'Threat Detection & Response',
                    desc: 'AI-driven monitoring, SIEM integration, and incident response frameworks.',
                  },
                  {
                    title: 'Governance & Risk Management',
                    desc: 'Risk assessments, governance frameworks, and secure cloud adoption policies.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl px-6 py-6 shadow-sm">
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

          {/* How We Help You Achieve Compliance */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Achieve compliance effortlessly — connect with our experts for consultation.
              </p>

              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                HOW WE HELP YOU ACHIEVE <span className="text-[#f27820]">COMPLIANCE</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Regulatory Alignment',
                  'Automated Compliance Monitoring',
                  'Risk Management & Governance',
                  'Identity & Access Management',
                  'AI-Driven Threat Detection',
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

          {/* Experience Unparalleled Cybersecurity Solutions */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-2 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                EXPERIENCE UNPARALLELED <span className="text-[#f27820]">CYBERSECURITY SOLUTIONS</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Protect your business with advanced security frameworks designed to safeguard data, ensure compliance, and defend against evolving cyber threats.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    category: 'Threat Detection & Response',
                    items: [
                      'AI-Driven Monitoring',
                      'Automated Incident Response',
                      'SIEM Integration',
                    ],
                  },
                  {
                    category: 'Data Protection & Privacy',
                    items: [
                      'End-to-End Encryption',
                      'Identity & Access Management',
                      'GDPR & HIPAA Alignment',
                    ],
                  },
                  {
                    category: 'Cloud Security',
                    items: [
                      'CSPM Monitoring',
                      'Vulnerability Detection',
                      'Secure Multi-Cloud Environments',
                    ],
                  },
                  {
                    category: 'Compliance Management',
                    items: [
                      'SOC 2 Monitoring',
                      'ISO 27001 Compliance',
                      'PCI DSS Support',
                      'Automated Reporting',
                    ],
                  },
                  {
                    category: 'Governance & Risk Management',
                    items: [
                      'Risk Assessments',
                      'Security Policies',
                      'Long-Term Governance',
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

          {/* Advanced Tools & Technologies We Use */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-2 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                ADVANCED TOOLS & TECHNOLOGIES <span className="text-[#f27820]">WE USE</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                We leverage industry-leading platforms to ensure businesses remain secure, compliant, and resilient in an evolving digital landscape.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: 'Identity & Access Management',
                    items: [
                      'AWS IAM',
                      'Azure Active Directory',
                      'Google Cloud IAM',
                      'MFA & SSO',
                    ],
                  },
                  {
                    category: 'Threat Detection Platforms',
                    items: [
                      'Splunk',
                      'Microsoft Sentinel',
                      'AI Anomaly Detection',
                    ],
                  },
                  {
                    category: 'Compliance & Governance',
                    items: [
                      'Prisma Cloud',
                      'Check Point CSPM',
                      'SOC 2 & ISO 27001',
                      'GDPR & HIPAA',
                    ],
                  },
                  {
                    category: 'Monitoring & Observability',
                    items: [
                      'Datadog',
                      'Prometheus',
                      'Grafana',
                      'AWS CloudWatch',
                      'Azure Monitor',
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

          {/* Benefits Of Our Technology Stack */}
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
                BENEFITS OF OUR <span className="text-[#f27820]">TECHNOLOGY STACK</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'End-to-End Infrastructure Protection',
                  'Effortless Compliance & Audits',
                  'Secure Global Scalability',
                  'Future-Ready Security Frameworks',
                  'Enhanced Trust & Business Resilience',
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

          {/* FAQ Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-4">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                SECURITY & COMPLIANCE <span className="text-[#f27820]">FREQUENTLY ASKED QUESTIONS</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center text-left py-2 focus:outline-none group cursor-pointer"
                    >
                      <span
                        className="text-[#0e2038] font-bold text-[16px] md:text-[18px] pr-4 group-hover:text-[#f27820] transition-colors"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {faq.question}
                      </span>
                      <span className="text-[#f27820] shrink-0">
                        {openFaq === index ? (
                          <Minus className="w-5 h-5 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2.5]" />
                        )}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="mt-2 pr-8 animate-in fade-in duration-200">
                        <p
                          className="text-[#444444] text-[14px] md:text-[15px] leading-relaxed"
                          style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                        >
                          {faq.answer}
                        </p>
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

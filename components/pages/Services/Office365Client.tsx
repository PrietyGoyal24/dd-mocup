'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function Office365Client() {
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
                .OFFICE 365 SERVICES
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Trusted Microsoft Office 365 Services.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-2"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Empower your team, enhance productivity, and simplify collaboration with trusted Microsoft Office 365 solutions.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Our experts help organizations transition to Office 365, optimize features, and maximize value while ensuring security and business continuity.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Office 365 Services"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Microsoft Office 365 Services We Offer */}
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
                MICROSOFT OFFICE 365 SERVICES <span className="text-[#f27820]">WE OFFER</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                From migration and setup to security and ongoing support, we deliver complete Office 365 solutions for businesses of all sizes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Office 365 Migration Services',
                    desc: 'Seamless migration from Exchange, Google Workspace, or on-premise systems to Office 365.',
                  },
                  {
                    title: 'Office 365 Setup & Configuration',
                    desc: 'Configure user accounts, licenses, integrations, and security settings.',
                  },
                  {
                    title: 'Office 365 Support & Administration',
                    desc: 'Ongoing administration, user management, and optimization support.',
                  },
                  {
                    title: 'Office 365 Security & Compliance',
                    desc: 'Secure your environment with MFA, DLP, and Advanced Threat Protection.',
                  },
                  {
                    title: 'Office 365 Backup & Recovery',
                    desc: 'Protect emails, documents, and business data with reliable backup solutions.',
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

          {/* Microsoft Office 365 Applications For Your Enterprise */}
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
                MICROSOFT OFFICE 365 APPLICATIONS <span className="text-[#f27820]">FOR YOUR ENTERPRISE</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    category: 'Collaboration Tools',
                    items: ['Microsoft Teams', 'SharePoint', 'Planner & To-Do'],
                  },
                  {
                    category: 'Productivity Applications',
                    items: ['Microsoft Word', 'Excel', 'PowerPoint', 'Outlook'],
                  },
                  {
                    category: 'Storage & Analytics',
                    items: ['OneDrive', 'Power BI'],
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

          {/* Customized Office 365 Solutions */}
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
                CUSTOMIZED OFFICE 365 <span className="text-[#f27820]">SOLUTIONS</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                We customize Office 365 environments to align with your workflows, collaboration needs, and industry requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Tailored Configurations',
                  'Industry-Specific Solutions',
                  'Customized Collaboration Tools',
                  'Scalable Cloud Solutions',
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

          {/* SharePoint Platform Collaborations */}
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
                SHAREPOINT PLATFORM <span className="text-[#f27820]">COLLABORATIONS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Centralized Document Management',
                    desc: 'Store, manage, and share documents securely from anywhere.',
                  },
                  {
                    title: 'Real-Time Collaboration',
                    desc: 'Enable co-authoring, version control, and project collaboration.',
                  },
                  {
                    title: 'Customizable Portals',
                    desc: 'Create portals and workflows tailored to business processes.',
                  },
                  {
                    title: 'Business Process Automation',
                    desc: 'Automate approvals, notifications, and repetitive tasks.',
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

          {/* Microsoft 365 Services Over A Single Platform */}
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
                MICROSOFT 365 SERVICES OVER <span className="text-[#f27820]">A SINGLE PLATFORM</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Microsoft 365 combines Office 365, Windows, and Enterprise Mobility + Security into a unified productivity ecosystem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Unified Platform Access',
                  'Productivity & Collaboration',
                  'Advanced Security Features',
                  'Business Intelligence with Power BI',
                  'Cloud Flexibility & Remote Work Enablement',
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

          {/* Why Choose Design Dot For MS Office 365 Services */}
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
                WHY CHOOSE DESIGN DOT FOR <span className="text-[#f27820]">MS OFFICE 365 SERVICES?</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Certified Microsoft Consultants',
                  'Tailored Office 365 Solutions',
                  'End-to-End Support',
                  'Industry Expertise',
                  'Advanced Security & Compliance',
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

          {/* Get Started With Microsoft Office 365 Services Today */}
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
                GET STARTED WITH <span className="text-[#f27820]">MICROSOFT OFFICE 365 SERVICES TODAY</span>
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-1"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Elevate your digital workplace with secure, scalable, and collaborative Office 365 solutions.
              </p>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Whether you&apos;re planning migration, optimization, or enterprise collaboration, our team is here to help.
              </p>
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
                    question: '1. What is Microsoft Office 365?',
                    answer:
                      'Microsoft Office 365 is a cloud-based subscription service that provides access to Office apps like Word, Excel, PowerPoint, Teams, and more, along with cloud storage and collaboration tools.',
                  },
                  {
                    id: 2,
                    question: '2. How long does an Office 365 migration take?',
                    answer:
                      'Migration timelines vary based on the size and complexity of your organization. Small businesses can be migrated within days, while larger enterprises may take several weeks for a full transition.',
                  },
                  {
                    id: 3,
                    question: '3. Is Office 365 secure for business use?',
                    answer:
                      'Yes, Office 365 includes enterprise-grade security features such as Multi-Factor Authentication (MFA), Data Loss Prevention (DLP), Advanced Threat Protection, and compliance certifications like ISO 27001 and GDPR.',
                  },
                  {
                    id: 4,
                    question: '4. Can Office 365 be customized for our business workflows?',
                    answer:
                      'Absolutely. We tailor Office 365 environments with custom SharePoint portals, Teams configurations, Power Automate workflows, and industry-specific compliance settings.',
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

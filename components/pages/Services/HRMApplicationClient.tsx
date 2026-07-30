'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function HRMApplicationClient() {
  const keyFeaturesCards = [
    {
      title: 'Employee Management',
      desc: 'Maintain detailed employee records, hierarchy, documents, and lifecycle from onboarding to offboarding.',
    },
    {
      title: 'Attendance & Leave',
      desc: 'Track employee attendance, holidays, leave applications, and auto-approve workflows.',
    },
    {
      title: 'Payroll & Compensation',
      desc: 'Automate salary calculations, taxes, payslips, bonuses, and compliance with integrated payroll engines.',
    },
    {
      title: 'Recruitment & Hiring',
      desc: 'Manage job postings, applications, interview rounds, and candidate tracking all in one place.',
    },
    {
      title: 'Performance Evaluation',
      desc: 'Track KPIs, run appraisals, gather 360-degree feedback, and manage goal settings and reviews.',
    },
    {
      title: 'Employee Self-Service',
      desc: 'Enable employees to apply for leave, download payslips, update info, and view announcements.',
    },
    {
      title: 'Training & Development',
      desc: 'Organize training programs, monitor participation, and track certifications for skills growth.',
    },
    {
      title: 'Compliance & Audits',
      desc: 'Stay compliant with labor laws and audits through alerts, documentation, and reports.',
    },
  ];

  const whyChoosePoints = [
    'Custom modules to suit your organizational policies and workflows',
    'Cloud-based or on-premise HRM deployment options',
    'Role-based access control for HR, managers, and employees',
    'Integrated with payroll, finance, biometric, and ERP systems',
    'Scalable architecture to grow with your organization',
    'User-friendly interfaces with real-time dashboards and analytics',
  ];

  const industriesWeServe = [
    'Corporate Enterprises',
    'Educational Institutions',
    'Healthcare and Hospitals',
    'Manufacturing & Logistics',
    'IT & Tech Companies',
    'Government and Public Sector',
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
                HRM APPLICATION
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our custom-built Human Resource Management (HRM) applications are tailored to simplify and automate all aspects of your workforce management—from onboarding to retirement. Empower your HR team with digital tools that improve efficiency, compliance, and employee experience.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="HRM Application"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* KEY FEATURES OF OUR HRM SOLUTIONS */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-14">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                KEY FEATURES OF OUR HRM SOLUTIONS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyFeaturesCards.map((card, index) => (
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

          {/* WHY CHOOSE OUR HRM APPLICATION DEVELOPMENT? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY CHOOSE OUR HRM APPLICATION DEVELOPMENT?
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
                {industriesWeServe.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BUILD A SMARTER HR ECOSYSTEM TODAY */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                BUILD A SMARTER HR ECOSYSTEM TODAY
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Ready to digitize your human resource operations? Let&apos;s work together to design and develop a feature-rich HRM application tailored specifically for your workforce.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

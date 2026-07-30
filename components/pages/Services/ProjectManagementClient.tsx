'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ProjectManagementClient() {
  const benefitsCards = [
    {
      title: 'Enhanced Team Productivity',
      desc: 'Enable clear task delegation and streamline communication to drive focus and accountability.',
    },
    {
      title: 'Real-Time Progress Tracking',
      desc: 'Keep stakeholders updated with real-time dashboards, timelines, and milestone tracking.',
    },
    {
      title: 'Improved Budget Control',
      desc: 'Monitor expenses and forecast costs accurately to prevent budget overruns.',
    },
    {
      title: 'Resource Optimization',
      desc: 'Balance workloads, avoid burnout, and ensure optimal resource utilization.',
    },
    {
      title: 'Centralized Project Data',
      desc: 'Access all documents, conversations, and progress logs from a single platform.',
    },
    {
      title: 'Flexible Methodologies',
      desc: 'Support for agile, waterfall, kanban, and custom workflows to fit any project type.',
    },
  ];

  const coreCapabilities = [
    'Task & Milestone Tracking',
    'Team Collaboration & File Sharing',
    'Resource Allocation & Budgeting',
    'Gantt Charts and Timeline Views',
    'Agile Sprint Boards & Scrum Features',
    'Risk & Issue Management',
    'Custom Dashboards & Reports',
  ];

  const industriesWeServe = [
    'Construction & Infrastructure',
    'IT & Software Development',
    'Marketing & Creative Agencies',
    'Education & E-learning',
    'Healthcare & Pharmaceuticals',
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
                className="text-[#1a1a1a] uppercase mb-8 text-[32px] sm:text-[52px] md:text-[76px] lg:text-[90px] leading-[1.05] tracking-[1px] font-normal"
                style={{
                  fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                PROJECT MANAGEMENT SOLUTIONS
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Take control of your projects with our end-to-end project management solutions that enable planning, execution, collaboration, and delivery—on time and within budget. Our tools support agile, waterfall, and hybrid methodologies to meet your unique needs.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="Project Management Solutions"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* BENEFITS OF OUR PROJECT MANAGEMENT PLATFORM */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-14">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                BENEFITS OF OUR PROJECT MANAGEMENT PLATFORM
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefitsCards.map((card, index) => (
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

          {/* CORE CAPABILITIES OF OUR PROJECT MANAGEMENT SYSTEM */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                CORE CAPABILITIES OF OUR PROJECT MANAGEMENT SYSTEM
              </h2>

              <ul className="space-y-2.5 ml-2">
                {coreCapabilities.map((point, index) => (
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

          {/* DELIVER PROJECTS WITH CONFIDENCE */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                DELIVER PROJECTS WITH CONFIDENCE
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Whether you&apos;re managing internal initiatives or client-facing projects, our project management solutions help you achieve your goals faster, with more clarity and less stress. From kickoff to delivery—track, manage, and optimize everything in one place.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

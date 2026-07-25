'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function AIInMobileAppsClient() {
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
                .AI APP DEVELOPMENT SERVICES
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p className="font-bold text-[#0e2038] text-[18px] md:text-[20px]">
                  Transforming Data into Intelligence. Transforming Ideas into Innovation.
                </p>
                <p>
                  Don't just follow the AI trend—lead it. At DesignDot, we engineer intelligent applications that learn, adapt, and evolve.
                </p>
                <p>
                  From Generative AI and LLMs to Predictive Analytics and Computer Vision, we build the brains behind your digital transformation.
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
                  alt="AI App Development Services"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Key Components of Full-Spectrum AI App Development */}
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
                KEY COMPONENTS OF FULL-SPECTRUM <span className="text-[#f27820]">AI APP DEVELOPMENT</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '1. STRATEGY & CONSULTING',
                    points: [
                      'Business case analysis to identify AI opportunities.',
                      'Feasibility studies and ROI projections.',
                      'Roadmap creation aligned with organizational goals.',
                    ],
                  },
                  {
                    title: '2. DESIGN & PROTOTYPING',
                    points: [
                      'User-centric UI/UX design for intuitive interaction.',
                      'Wireframes and prototypes to validate concepts.',
                      'AI-driven personalization features and predictive analytics.',
                    ],
                  },
                  {
                    title: '3. CUSTOM AI MODEL DEVELOPMENT',
                    points: [
                      'Tailored machine learning models for specific use cases.',
                      'NLP for chatbots, sentiment analysis, and voice assistants.',
                      'Computer Vision for image recognition and automation.',
                    ],
                  },
                  {
                    title: '4. INTEGRATION & DEVELOPMENT',
                    points: [
                      'Seamless integration with legacy systems and workflows.',
                      'API development for cross-platform compatibility.',
                      'Cloud-native architecture for scalability and resilience.',
                    ],
                  },
                  {
                    title: '5. DEPLOYMENT & SCALING',
                    points: [
                      'Cloud-based deployment using AWS, Azure, and Google Cloud.',
                      'Continuous monitoring and performance optimization.',
                      'Scalable infrastructure for growing user bases.',
                    ],
                  },
                  {
                    title: '6. SECURITY & COMPLIANCE',
                    points: [
                      'Data encryption and secure authentication.',
                      'Compliance with GDPR, HIPAA, and industry standards.',
                      'AI ethics and bias mitigation strategies.',
                    ],
                  },
                  {
                    title: '7. MAINTENANCE & SUPPORT',
                    points: [
                      'Regular updates and feature enhancements.',
                      'Bug fixes and performance tuning.',
                      '24/7 technical support and monitoring.',
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[16px] md:text-[18px] mb-3 uppercase tracking-[0.5px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {item.title}
                      </h3>
                      <ul
                        className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed space-y-2 list-disc list-inside"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comprehensive AI & Machine Learning Services */}
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
                COMPREHENSIVE AI & MACHINE LEARNING <span className="text-[#f27820]">SERVICES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We offer a full spectrum of AI capabilities, ensuring your application is smarter, faster, and more efficient.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Generative AI & LLM Integration',
                  'Natural Language Processing (NLP)',
                  'Predictive Analytics',
                  'AI Strategy & Consulting',
                  'Computer Vision & Image Recognition',
                  'MLOps & Model Scaling',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-[#1a1a1a] text-[16px] md:text-[18px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-3 text-[#1a1a1a]">•</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The AI Development Lifecycle */}
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
                THE AI DEVELOPMENT <span className="text-[#f27820]">LIFECYCLE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                AI development requires a data-first approach and continuous refinement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'DISCOVERY & DATA AUDIT' },
                  { num: '02', name: 'FEASIBILITY STUDY & PROTOTYPING' },
                  { num: '03', name: 'MODEL TRAINING & TUNING' },
                  { num: '04', name: 'APPLICATION INTEGRATION' },
                  { num: '05', name: 'CONTINUOUS LEARNING' },
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

          {/* Why Designdot for AI App Development? */}
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
                WHY <span className="text-[#f27820]">DESIGNDOT</span> FOR AI APP DEVELOPMENT?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Ethical AI Framework',
                    desc: 'We prioritize data privacy, security, and bias-reduction in every AI model.',
                  },
                  {
                    title: 'Seamless Scalability',
                    desc: 'Our AI architectures are designed to handle millions of requests without latency.',
                  },
                  {
                    title: 'Domain Expertise',
                    desc: 'Expertise across FinTech, Healthcare, Retail, Logistics, and more.',
                  },
                  {
                    title: 'Cost-Effective Innovation',
                    desc: 'We focus on efficient AI implementation using pre-trained and fine-tuned models.',
                  },
                  {
                    title: 'Full Transparency',
                    desc: 'We explain how your AI systems work and how decisions are made.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-2"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real-World AI Impact */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                REAL-WORLD <span className="text-[#f27820]">AI IMPACT</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'HEALTHCARE',
                    desc: 'Early disease detection through AI-powered diagnostic imaging.',
                  },
                  {
                    title: 'FINTECH',
                    desc: 'Real-time fraud detection and automated credit scoring models.',
                  },
                  {
                    title: 'ECOMMERCE',
                    desc: 'Hyper-personalized recommendation engines that drive higher conversions.',
                  },
                  {
                    title: 'MANUFACTURING',
                    desc: 'Predictive maintenance that identifies equipment failure before it happens.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3 uppercase tracking-[0.5px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.desc}
                      </p>
                    </div>
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


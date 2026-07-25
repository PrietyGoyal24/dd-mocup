'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { CheckCircle } from 'lucide-react';

export default function OffshoreSoftwareClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is offshore software development?',
      answer:
        'Offshore software development is the practice of partnering with a software team located in another country to build, test, and manage digital products cost-effectively.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. How do you manage time zone differences?',
      answer:
        'We overlap working hours with your local team, establishing clear schedules, daily standups, and async communication tools to ensure zero disruption.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. How do you protect Intellectual Property (IP)?',
      answer:
        'We sign comprehensive Non-Disclosure Agreements (NDAs), enforce strict data privacy policies, and transfer 100% of IP ownership to you.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. What size projects do you handle offshore?',
      answer:
        'We handle projects of all scales — from small MVPs and dedicated developer augmentation to full enterprise system rebuilds.',
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
                OFFSHORE SOFTWARE
                <span className="block">DEVELOPMENT</span>
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  Leverage the power of offshore software development to accelerate innovation, cut operational costs, and access top global tech talent. We provide reliable, secure, and scalable offshore development services that align with your business needs and time zone preferences.
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
                  alt="Offshore Software Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our Offshore Development Capabilities */}
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
                OUR OFFSHORE <span className="text-[#f27820]">DEVELOPMENT CAPABILITIES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'End-to-End Software Development',
                    desc: 'From discovery and planning to deployment and support, we offer complete offshore development solutions tailored to your project requirements.',
                  },
                  {
                    title: 'Global Talent Access',
                    desc: 'Work with our experienced developers, engineers, designers, and QA specialists based in strategic global locations.',
                  },
                  {
                    title: 'Time Zone-Aligned Teams',
                    desc: 'We structure our teams to match your working hours, ensuring continuous collaboration and faster delivery cycles.',
                  },
                  {
                    title: 'Dedicated Project Management',
                    desc: 'Each offshore team includes a dedicated project manager to maintain transparent communication and timely execution.',
                  },
                  {
                    title: 'Scalable Engagement Models',
                    desc: 'Start small or scale fast—our flexible models (fixed price, T&M, or dedicated teams) adapt to your evolving business goals.',
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

          {/* Our Offshore Expertise */}
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
                OUR OFFSHORE <span className="text-[#f27820]">EXPERTISE</span>
              </h2>

              <ul className="space-y-3 pl-2">
                {[
                  'Custom Web and Mobile App Development',
                  'Enterprise Solutions & Legacy System Modernization',
                  'Cloud Engineering & DevOps',
                  'eCommerce Development & Integration',
                  'AI & Data Analytics Solutions',
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
            </div>
          </div>

          {/* Why Choose Us for Offshore Development? */}
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
                WHY CHOOSE US FOR <span className="text-[#f27820]">OFFSHORE DEVELOPMENT?</span>
              </h2>

              <ul className="space-y-3 pl-2">
                {[
                  'Highly skilled global professionals',
                  'Proven agile & DevOps methodologies',
                  'Lower costs with zero quality compromise',
                  'Full security, IP protection & NDAs',
                  'Fast ramp-up and dedicated support',
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

'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ELearningSolutionsClient() {
  const offerings = [
    'E-commerce website development',
    'E-commerce application development',
    'Customization of existing e-commerce site',
    'Development and integration of business specific applications',
    'Development of dynamic B2C portal',
    'Custom design, development and deployment of online shopping cart from the scratch',
    'Integration of third party e-commerce applications',
    'Search Engine Optimization (SEO) of e-shop or e-store',
    'eBay Integration',
    'Payment Gateway Integration',
    'Custom development, configuration and installation of shopping cart software',
    'Technical support and maintenance services for e-commerce websites and applications developed by us',
    'Develop New Custom',
    'E-Commerce System',
    'MAGENTO, OSCOMMERCE, ZENCART, X-CART, WORDPRESS ETC.',
  ];

  const whySelectPoints = [
    'Dedicated Developer',
    'Shipping & Payment Gateway Integration',
    'APIs',
    'Open source',
    'Custom Content Management System',
    'Data Import',
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
                E-LEARNING SOLUTIONS
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                E-learning comprises all forms of electronically supported learning and teaching. The information and communication systems, whether networked learning or not, serve as specific media to implement the learning process. The term will still most likely be utilized to reference out-of-classroom and in-classroom educational experiences via technology, even as advances continue in regard to devices and curriculum. E-learning is essentially a computer and network-enabled transfer of skills and knowledge. E-learning applications and processes include Web-based learning, computer-based learning, virtual education opportunities and digital collaboration. Content is delivered via the Internet, intranet/extranet, audio or video tape, satellite TV, and CD-ROM. It can be self-paced or instructor-led and includes media in the form of text, image, animation, streaming video and audio.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="E-Learning Solutions"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* E-COMMERCE DEVELOPMENT @ DESIGNDOT */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                E-COMMERCE DEVELOPMENT @ DESIGNDOT
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                DesignDot is a one of the leading e-commerce development companies in India that delivers comprehensive e-commerce website development solutions to its clients, spread across world. We deliver wide range of e-commerce development services from our offshore development center in India. Our offerings include:
              </p>

              <ul className="space-y-2.5 ml-2">
                {offerings.map((item, index) => (
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

          {/* WHY SELECT DESIGNDOT AS YOUR CUSTOM E-COMMERCE DEVELOPMENT COMPANY? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WHY SELECT DESIGNDOT AS YOUR CUSTOM E-COMMERCE DEVELOPMENT COMPANY?
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-4"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                There are many e-commerce sites that meet dead end on the Internet highway and are ultimately abandoned by their owners due to poor performance. DesignDot understands this problem and hence focuses on creating online shopping carts that flourish on the net and help their owners expand their business.
              </p>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                We equip your e-commerce site with custom features and optimize it for search engines so that you can reach out to millions of prospective customers of net and vividly display your hosted products/services.
              </p>

              <ul className="space-y-2.5 ml-2">
                {whySelectPoints.map((point, index) => (
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
        </main>
      </div>

      <Footer />
    </div>
  );
}

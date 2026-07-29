'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ProductDesignClient() {
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
                .PRODUCT DESIGN
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-4"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Product Design is conceptualization of an idea about a product and transformation of the idea into a reality and is one of the most important sensitive factors which determines the success of a product. The role of product design changes throughout the life-cycle of a product. In the initial product development stage, the role of design is to create a marketable product from an innovation. A very broad concept, it is essentially the efficient and effective generation and development of ideas through a process that leads to new products.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Industrial Design (ID) is the professional service of creating products and systems that optimize function, value and appearance for the mutual benefit of user and manufacturer.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Product Design"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Process of Product Design */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] sm:text-[20px] md:text-[22px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
              >
                Process of Product Design
              </h2>

              <ul className="space-y-3.5 mb-10 ml-2">
                {[
                  {
                    title: 'Research / Analysis',
                    desc: 'This mainly involves research, facts and figures, finding a solutions to the problem, and researching how to fix an effective manner.',
                  },
                  {
                    title: 'Trends / Concept',
                    desc: 'Mainly where the solution to the problem is found, and steps are taken to ensure the design will meet standard and consumer needs.',
                  },
                  {
                    title: 'Design',
                    desc: 'Brainstorming of ideas, narrowing down of ideas, and then from this, prototypes will be made to test the design before it is built.',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      <strong className="text-[#1a1a1a] font-bold" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>{item.title}</strong> – {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The functions of product and package design are: */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[18px] sm:text-[20px] md:text-[22px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
              >
                The functions of product and package design are:
              </h2>

              <ul className="space-y-3 ml-2">
                {[
                  "Constitutes the physical representation of a brand's personality.",
                  'Draws attention to a specific product in a crowded retail space. (in this case a product’s packaging serves as a great promotional tool)',
                  'Positions a product amongst a certain category and perceived value, hence reflecting a specific potential price.',
                  'Serves as a protective container, as well as provides useful nutritional information or instructions of use.',
                  'Constitutes as an essential brand identity tool. Even a specific color might trigger an association to a particular brand.',
                  'Differentiates a product from its competitors and private labels by transmitting a sense of worth or a story.',
                  'Packages might also serve as souvenirs, collectibles or a source of storage.',
                  'When a product design is groundbreaking, it can influence the way we use something specific by shifting behavior patterns.',
                  'Reflects the level of modernism, creativity and cutting-edge qualities the brand might have.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item}
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

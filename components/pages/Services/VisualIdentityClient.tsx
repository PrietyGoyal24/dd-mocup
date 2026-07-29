'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function VisualIdentityClient() {
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
                .VISUAL IDENTITY
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-4"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                DesignDot is a leading multimedia presentation solution provider. Our Flash, Ajax and Graphic designing experts offer complete multimedia authoring &amp; multimedia interactive presentation services, which includes initial concepts, design, animation and programming at exceptional rates as well as CD/DVD ROM duplication capability.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Our hi-tech approach to multimedia authoring and Multimedia Interactive CD/DVD presentations, offers you and your company an opportunity to present product and services, record of accomplishment, key contact details and even technical schematics, etc. in an interactive and highly engaging format.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Visual Identity"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Multimedia Intro */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Our multimedia experts can create stunning Interactive CD/DVD presentation and intensive CD/DVD catalogues. Our multimedia designs are capable of generating your client&apos;s interest in your product. Our multimedia experts put your data either in static or in a dynamic pattern on a mini or big CD/DVD. Our multimedia presentations are also useful for electronic signage display during an event of your choice.
              </p>

              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                INTERACTIVE CD PRESENTATION IS PREFERRED TO:
              </h2>

              <div className="space-y-6 mb-12">
                <div>
                  <h3
                    className="text-[#1a1a1a] font-bold text-[16px] md:text-[17px] mb-1.5"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Sales Promotion &amp; Presentation, Brand promotion &amp; enhancements
                  </h3>
                  <p
                    className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    Multimedia Interactive sales presentations on CD/DVD created at DesignDot System enable you to give a complete sales presentation on the desktop or laptop of your target customers. This can be used as a tempting addition to sales mailing, as a hand out at an exhibition, or as speaker support in sales meetings.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-[#1a1a1a] font-bold text-[16px] md:text-[17px] mb-1.5"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Interactive Brochures on CD/DVD at DesignDot System
                  </h3>
                  <p
                    className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    Interactive CD-ROM Presentation of your brochures encourages users to learn more about your company, products &amp; services.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-[#1a1a1a] font-bold text-[16px] md:text-[17px] mb-1.5"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Business Cards sized Mini CD/DVD-ROM
                  </h3>
                  <p
                    className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    To prevent the need for carrying large CD-ROMs, our multimedia artists create mini CD/DVD-ROMs, which are the size of small business cards. They are eye-catching and are much more convenient to hand over as interactive brochures or presentations to customers or targeted people.
                  </p>
                </div>
              </div>

              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                OUR EXPERTISE:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 pb-10">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>3D modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>2D and 3D characters animation (Max and Maya)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Flash presentations</span>
                  </li>
                </ul>

                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Corporate Presentations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Interactive computer games</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Interactive Brochure</span>
                  </li>
                </ul>

                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>CD Presentations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Splash screens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold">•</span>
                    <span className="text-[#444444] text-[15px] md:text-[16px]" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Digital photography &amp; video shooting etc.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ContentStrategyClient() {
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
                .CONTENT MANAGEMENT SYSTEM
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-3"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Website content consists of written text, pictures, photo galleries and graphics, audio and video clippings. In the present competitive business environment, interactive website is a necessity for success of the online business. It is important to hire a professional CMS website development company so that you have robust and versatile Content Management System (CMS), which gives you the liberty to manage the content of your website at your will and customize it perfectly to suit the needs of end users.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                DesignDot developers proficiently utilize, advanced CMS website development platforms like Joomla, Drupal, Wordpress, etc., to deliver end-to-end content management solutions for their clients. Our custom CMS web development services bring to you the following benefits:
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Content Management System"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* CMS Benefits */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <ul className="space-y-3 ml-2">
                {[
                  'You can update your website content at your will and add unlimited number of web pages according to your choice',
                  'You no longer require a qualified technical programmer or developer to delete, add, and update website content. This saves you time and money.',
                  'Add pictures, graphics, video/audios, text and other content on your own choice and in manner that suits your online business',
                  'You get customized CMS solutions that help you keep your website completely updated so the visitors keeping coming back to it for latest information, news content, etc.',
                  'Your website enjoys competitive edge because you can quickly react to the market changes and update the content accordingly.',
                  'We ensure that CMS developed for you is completely optimized for the search engine so that your web content enjoys higher ranking in the search engine rankings, which in turn drives up the traffic to your site.',
                  'If you want your CMS to be developed at a short notice, we take advantage of readymade modules available and integrate it seamlessly to your website.',
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

          {/* SCOPE OF OUR CMS WEBSITE DEVELOPMENT SERVICES */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                SCOPE OF OUR CMS WEBSITE DEVELOPMENT SERVICES
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                We are professional CMS web Development Company and offer CMS solutions for the following areas of web world:
              </p>

              <ul className="space-y-3 ml-2">
                {[
                  'CMS for E-commerce/online shopping portals so that you can update and manage the content of your online store at click of button and enhance its performance',
                  'Blog development and integration with purpose to enhance interaction with visitors for better business conversions',
                  'Forum/ Chat development for greater participation of the community',
                  'Custom CMS development for Social networking sites to support their end users interactions like live chat, text messaging, reviews, blogging, live feeds, etc',
                  'Integration of multimedia features like audio/video/ 3D animation/ graphics in the website content to enhance user experience and bring about more business conversions, especially for e-commerce sites.',
                  'We offer you innovative CMS based website development solutions so that you effortlessly manage your website content and encourage the visitors to hit your web pages with the purpose to successfully convert them into actual buyers of your hosted product or services.',
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

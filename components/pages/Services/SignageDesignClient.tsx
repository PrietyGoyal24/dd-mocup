'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function SignageDesignClient() {
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
                .SIGNAGE DESIGN
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-4"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                A Signage is an essential part of your company marketing strategy to showcase your product and services and to grab the attention of your customers.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                <strong className="text-[#1a1a1a] font-bold" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>Our expert Design Services make your visual impressions crisp and clear!</strong> The design stage of your sign project may be as simple as designing a sign that matches an existing color scheme for a building, or as complex as using different effects to create a custom look for a particular situation.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Signage Design"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Detailed Intro Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                At DesignDot, our renowned sign design services create Custom Signs For All Your Business Needs. Our expert signage design teams can assist you in creating an awe-inspiring and memorable brand. We carefully optimize your logos and graphics and match colors to design professional quality signs and other types of visual presentations that achieve the desired look for your business or event signage. There are many ways to use different materials to create different effects. Our design team has a vast knowledge of what color, shape, and texture combinations work well. If you are looking for impact, attention, or a means to best represent your image, feel free to join in the design process! Our designers will listen to your input in order to incorporate your ideas into the final layout.
              </p>
            </div>
          </div>

          {/* Outdoor Signage & Graphics Solutions */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-3 leading-[1.3] text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '1px',
                }}
              >
                OUTDOOR SIGNAGE & GRAPHICS SOLUTIONS
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Tell the world who you are with a custom outdoor sign that highlights your presence while promoting your company&apos;s unique brand and identity!
              </p>

              <ul className="space-y-2.5 ml-2">
                {[
                  'Architectural Signs',
                  'Company Signs',
                  'Event & Sponsor Signs',
                  'Outdoor Custom Banners',
                  'Outdoor Directional & Way-Finding Signs',
                  'Outdoor Retail Signs',
                  'Outdoor Safety & Compliance Signs',
                  'Outdoor Specialty Signs & Custom Signs',
                  'Promotional Displays',
                  'Vehicle & Boat Graphics',
                  'Yard & Sidewalk Signs',
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

          {/* Indoor Signs & Signage Solutions */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-3 leading-[1.3] text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '1px',
                }}
              >
                INDOOR SIGNS & SIGNAGE SOLUTIONS
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Our Indoor Signs & Signage Graphics Solutions combine high impact looks with elegance and visual appeal for any business need.
              </p>

              <ul className="space-y-2.5 ml-2">
                {[
                  'Decals & Labels',
                  'Event & Meeting Signs',
                  'Indoor Custom Banners',
                  'Indoor Directional & Way-Finding Signs',
                  'Indoor Retail Signs',
                  'Indoor Safety & Compliance Signs',
                  'Indoor Specialty Signs & Custom Signs',
                  'Plaques & Awards',
                  'Posters & Presentation Signs',
                  'Promotional Products',
                  'Reception & Office Signage',
                  'Trade Show Displays',
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

          {/* Navigation & Digital Signage Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-6 pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[26px] sm:text-[42px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .NAVIGATION & DIGITAL SIGNAGE
              </h2>
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Signs are any kind of visual graphics created to display information to a particular audience. Directional signs showing the location of services, facilities, functional spaces and key areas, such as sign posts or directional arrows.
              </p>

              {/* INDOOR SIGNAGE */}
              <div className="mb-8">
                <h3
                  className="text-[#1a1a1a] uppercase mb-2 text-[18px] sm:text-[20px] md:text-[22px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  INDOOR SIGNAGE
                </h3>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  Direct people through your premises with easy-to-read signage that informs and guides customers, and improves traffic flow.
                </p>
              </div>

              {/* OUTDOOR SIGNAGE */}
              <div className="mb-8">
                <h3
                  className="text-[#1a1a1a] uppercase mb-2 text-[18px] sm:text-[20px] md:text-[22px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  OUTDOOR SIGNAGE
                </h3>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  Pinpoint your building or property with a monument sign that signifies your image. Guide traffic, control visitor parking and direct visitors in the correct route with well appointed directional signage.
                </p>
              </div>

              {/* Digital Signage */}
              <div className="mb-8">
                <h3
                  className="text-[#1a1a1a] mb-2 text-[18px] sm:text-[20px] md:text-[22px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  Digital Signage
                </h3>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-4"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  Digital signage is the use of electronic displays to broadcast messages, and is among the fastest growing forms of media because it&apos;s dynamic and flexible.
                </p>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-4"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  Digital signage is a sub-segment of signage. Digital signs use technologies such as LCD, LED and Projection to display content such as digital images, video, streaming media, and information.
                </p>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  We are one of the reputed manufacturers, suppliers of a wide range of Signages & all types of Branding. Products are manufactured from quality raw material following the set industry guidelines. Moreover, our professionals employ latest machines and equipment to deliver a flawless range of signages to our valuable clients.
                </p>

                <h4
                  className="text-[#1a1a1a] font-bold text-[16px] md:text-[18px] mb-4"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  LED Signage/ MS / Acrylic Signages follows are:
                </h4>

                <ul className="space-y-2.5 ml-2">
                  {[
                    'Retail Display',
                    'Internal Sign Boards',
                    'External Sign Boards',
                    'Metal Letters Sign Board',
                    'Stainless Steel Sign Boards',
                    'Brass Letters Sign Boards',
                    'Digital Printing Sign Boards',
                    'Back Light',
                    'Vinyl Print Signage',
                    'Flags',
                    '3D LED Acrylic letters mounted on wall',
                    '3D LED Acrylic letters on ACP box',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#444444] mr-3 font-bold text-[16px] leading-relaxed">•</span>
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
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

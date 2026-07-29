'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function StationaryDesignClient() {
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
                .STATIONARY / PRINT DESIGN
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Print design is a graphic design also known as communication design - is the art and practice of planning and projecting ideas and experiences with visual and textual content. Creative process of producing a visual communication and presentation that is performed in order to convey a specific message or messages to a targeted Audience – purposely made for printing, may include images, words, or graphic forms. The most common types print design finish products are brochure, outdoor banner, vinyl wrap, business card, flyers, product labels and packaging.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Stationary / Print Design"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Print design are done Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Printing on the other hand is a process of producing a hard copy of the graphic design and other documents. It is typically done with ink and paper using a printer. <strong className="text-[#1a1a1a] font-bold" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>Print design are done:</strong>
              </p>

              <ul className="space-y-2.5 ml-2">
                {[
                  'Stationery (Letterhead + business card + envelopes, etc.)',
                  'Marketing Collateral (Flyers, Brochures, books, websites, etc.)',
                  'Products & Packaging (Products sold and the packaging in which they come in)',
                  'Banner Design',
                  'Gift Voucher',
                  'Poster',
                  'Shopping Bag',
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

          {/* Other types of print design */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[18px] sm:text-[20px] md:text-[22px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Other types of print design are done for the following uses:
              </h2>

              <ul className="space-y-2.5 ml-2">
                {[
                  'Book Covers',
                  'Calendar',
                  'Compliment Slips',
                  'Continuation Sheets',
                  'Door Hanger',
                  'Exhibition Graphics',
                  'Folders',
                  'Flags',
                  'Greeting Cards',
                  'Invitations',
                  'Leaflets',
                  'Letterheads',
                  'Mailers',
                  'Manual',
                  'Menus',
                  'Notebook Covers',
                  'Postcards',
                  'Presentation Folders',
                  'Stickers',
                  'Tickets',
                  'T-Shirts',
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

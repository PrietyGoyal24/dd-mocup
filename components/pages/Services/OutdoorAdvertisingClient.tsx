'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function OutdoorAdvertisingClient() {
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
                .OUTDOOR ADVERTISING
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Outdoor advertising is an amazing opportunity to promote your brand to people when they are transporting themselves from one location to another. Our services save you time when planning and buying your outdoor advertising, our services provide you with a bespoke outdoor advertising program. We currently use the most up to date media software to enable us to plan book and analyse your outdoor media campaign, we can provide an unbiased detailed plan based on your campaign targets/brief. Please remember time is money and we are here to give you some back.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Outdoor Advertising"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* REASONS FOR USING OUTDOOR ADVERTISING */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                REASONS FOR USING OUTDOOR ADVERTISING
              </h2>

              <ul className="space-y-2.5 ml-2 mb-12">
                {[
                  'Outdoor advertising is the fastest growing traditional medium in the UK.',
                  'Everyone who leaves their home is exposed to outdoor advertising!',
                  'People now spend 70% of their time out of home.',
                  'Unlike any other medium you don\'t have to tune in, turn it on, dial up or turn the page to see it, it\'s just there for free making it "Unavoidable".',
                  'Outdoor Advertising has been also known as the "Third space" which is the time we spend Out-of-Home and Out-of-Office. Previously it was dead time a time to get from A to B as quickly as possible. With the advent of phone and connectivity, it has become a much more active space allowing the consumers to engage with the advertiser on the go!',
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

              {/* TYPES OF OUTDOOR ADVERTISING */}
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                TYPES OF OUTDOOR ADVERTISING
              </h2>

              <ul className="space-y-2.5 ml-2 mb-12">
                {[
                  'Airport Advertising',
                  'Bus Advertising',
                  'Mobile Billboards',
                  'Outdoor Bulletins',
                  'Transit Shelter Posters',
                  'Subway Posters',
                  'Outdoor Bulletins',
                  'Emerging New Media Types',
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

              {/* AIRPORT ADVERTISING */}
              <div className="mb-12">
                <h2
                  className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
                >
                  AIRPORT ADVERTISING
                </h2>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  Airport advertising offers an innovative and flexible range of media opportunities, ranging from long-term and short-term indoor and outdoor advertising panels. Advertising availabilities include dramatic back-lit signage along each of the airport&apos;s concourses and exciting other products to choose from. Please remember time is money and we are here to give you some back.
                </p>

                <h3
                  className="text-[#1a1a1a] uppercase mb-4 text-[18px] sm:text-[20px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  AIRPORT ADVERTISING STATISTICS
                </h3>

                <ul className="space-y-2.5 ml-2">
                  {[
                    'That there are greeters, and well-wishers for each traveler arriving or departing at the airport',
                    'Your advertising works to a captive audience 24 hours a day, 7 days a week, 365 days per year',
                    'Airport advertising is the lowest cost per impression available',
                    'Each ad has a long exposure time assuring your message is seen',
                    'We reach the decision makers and executives, who are frequent travelers',
                    'A targeted market to the most affluent segment of the population',
                    'Most affordable and effective way to advertise in these modern times',
                    'Adaptable to any business or product',
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

              {/* BUS ADVERTISING */}
              <div className="mb-12">
                <h2
                  className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
                >
                  BUS ADVERTISING
                </h2>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  People notice moving objects when they are driving. Bus ads are eye-catching, unique and therefore memorable. There is no clutter or other advertising distractions, especially at traffic lights where cars get stuck right behind or beside ads for several minutes. Full wrap and tail wrap buses are so distinctive that people often remember them after one viewing.
                </p>

                <h3
                  className="text-[#1a1a1a] uppercase mb-4 text-[18px] sm:text-[20px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  STANDARD BUS TRANSIT ADVERTISING SIZES
                </h3>

                <ul className="space-y-3 ml-2">
                  {[
                    {
                      title: 'Super King Size',
                      desc: 'This is the largest Bus Transit Poster available. It appears on the street side of the bus and is produced in four sections, the copy area measures 28" H x 238".',
                    },
                    {
                      title: 'King Size',
                      desc: 'This poster appears on the curb side of the bus. Produced in 1 or 2 sections, it can be as large as 27" H x 141" W.',
                    },
                    {
                      title: 'Queen Size',
                      desc: 'This poster usually appears on the curb side of the bus. Produced in 1 or 2 section, it can be as large as 30" H x 88" W.',
                    },
                    {
                      title: 'Bus Wraps',
                      desc: 'These buses are cleverly wrapped in vinyl and take on the appearance of rolling billboard. The H reach allows you to create unlimited selling opportunities to all our prospects as opposed to the limited opportunities using other media.',
                    },
                    {
                      title: 'Headlight and Taillight Displays',
                      desc: 'These displays are standard exterior advertising posters appearing on the front and rear of buses. Most headlights measure 21" H x 44" W overall. Taillights can measure as large as 21" H x 72" W.',
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                      <p
                        className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        <strong className="text-[#1a1a1a] font-bold" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>{item.title} :</strong> {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MOBILE BILLBOARDS */}
              <div className="mb-12">
                <h2
                  className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
                >
                  MOBILE BILLBOARDS
                </h2>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  It is often difficult to reach an audience where there are no forms of outdoor such as billboards. Mobile trucks can reach just about anywhere. They are also excellent for targeting a specific place or event such as a sporting event or a competitor&apos;s business for recruitment purposes. These illuminated ads are the size of a 30-sheet poster (22&apos; x 10&apos;) and provide the coverage flexibility no other outdoor medium provides.
                </p>

                <h3
                  className="text-[#1a1a1a] uppercase mb-4 text-[18px] sm:text-[20px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  TYPICAL ADVERTISING CAMPAIGNS COULD BE:
                </h3>

                <ul className="space-y-2.5 ml-2">
                  {[
                    'Product launches',
                    'Recruitment campaigns',
                    'Trade shows',
                    'Ethnic target marketing',
                    'Special event promotions',
                    'Retail/restaurant grand openings',
                    'Even general brand awareness in a specific area',
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

              {/* OUTDOOR BULLETINS */}
              <div className="mb-12">
                <h2
                  className="text-[#1a1a1a] uppercase mb-2 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
                >
                  OUTDOOR BULLETINS
                </h2>
                <h3
                  className="text-[#1a1a1a] font-bold text-[16px] md:text-[17px] mb-3"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  Uniface, Rotates and Permanents
                </h3>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  These large illuminated displays deliver impact in size, placement, color and lighting. Advertising on the Rotating (Rotary) type are physically moved every 60 days to new locations. Permanent Bulletin advertising remains at the same location throughout the contract.
                </p>

                <ul className="space-y-2.5 ml-2 mb-8">
                  {[
                    'Largest standard size Out-of-Home format',
                    'Situated at the most visible, H-density traffic locales',
                    'Bulletins rotate throughout the market at 60 days intervals',
                    'UNIFACE offers a seamless creative canvas and flighting flexibility',
                    'Extensions are available to further impact the visual dynamics',
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

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-[16px] mb-1" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>Uniface Bulletins</h4>
                    <p className="text-[#444444] text-[15px] leading-relaxed" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Hand or computer painted on a single flexible face material.</p>
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-[16px] mb-1" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>Regular Bulletins</h4>
                    <p className="text-[#444444] text-[15px] leading-relaxed" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Painted on movable wood sections</p>
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-[16px] mb-1" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>Outdoor Bulletin Extensions</h4>
                    <p className="text-[#444444] text-[15px] leading-relaxed" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>Painted cut-outs and extensions are usually limited to 5-1/2 feet above, 2 feet below, and 2 feet on either side of the regular display area.</p>
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-[16px] mb-2" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>30-Sheet Posters (Bleeds and 30-Sheets)</h4>
                    <p className="text-[#444444] text-[15px] leading-relaxed mb-4" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>These are the most common types of posters. Strategically placed 30-sheet Posters deliver advertising impressions throughout a market, not only to residents, but also to commuting traffic. Standard 30-Sheet Posters Size.</p>
                    <ul className="space-y-2.5 ml-2 mb-4">
                      {[
                        'Distributed throughout the market on primary and secondary arteries',
                        'Delivers residents plus inbound and outbound commuters',
                        'Builds awareness throughout the marketplace quickly and efficiently',
                        'Posters are generally flighted and reposted at 4 week intervals',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                          <span className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[#444444] text-[15px] leading-relaxed" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>
                      Poster panel copy area is always covered with printed paper. Utilizing the entire copy area of the panel, typically called a bleed poster, has the most impact. This is 14% larger than a 30-sheet (9&apos; 7&quot; H x 21&apos; 7&quot; W) design for a standard poster, which requires white blanking paper around the design.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-[16px] mb-2" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>8-Sheet Posters</h4>
                    <p className="text-[#444444] text-[15px] leading-relaxed mb-4" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>
                      In Metropolitan neighborhoods or near point of sale, Eight Sheets often reach hard-to-get audiences that are infrequently exposed to other print media.
                    </p>
                    <ul className="space-y-2.5 ml-2">
                      {[
                        'Nestled in the neighborhoods',
                        'Pinpoint local businesses',
                        'Reach hard-to-get pedestrian audiences',
                        'Excellent for point-of-purchase targeting',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                          <span className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-[16px] mb-1" style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}>Standard Eight-Sheet Poster Size</h4>
                    <p className="text-[#444444] text-[15px] leading-relaxed" style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}>
                      In Metropolitan neighborhoods or near point of sale, Eight Sheets often reach hard-to-get audiences that are only infrequently exposed to other print media.
                    </p>
                  </div>
                </div>
              </div>

              {/* TRANSIT SHELTER POSTERS */}
              <div className="mb-12">
                <h2
                  className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
                >
                  TRANSIT SHELTER POSTERS
                </h2>
                <p
                  className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  These structures display 2-sided (back-to-back and back-lit). They provide both automotive and pedestrian exposure along prescribed routes, offering general market coverage.
                </p>
              </div>

              {/* SUBWAY POSTERS */}
              <div className="mb-12">
                <h2
                  className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
                >
                  SUBWAY POSTERS
                </h2>

                <ul className="space-y-2.5 ml-2">
                  {[
                    'Subway posters reach the largest mass transit audience in the country, nearly 3.5 million people each and every day',
                    'Captive audience with massive daily reach and frequency',
                    'Delivers an average recall of 56%',
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

              {/* Emerging New Media Types */}
              <div className="mb-12">
                <h3
                  className="text-[#1a1a1a] mb-4 text-[18px] sm:text-[20px] font-bold"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  Emerging New Media Types
                </h3>

                <ul className="space-y-2.5 ml-2">
                  {[
                    'Street Furniture',
                    'ATM Advertising',
                    'Blimps',
                    'Elevator Advertising',
                    'Automobile Wraps',
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
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

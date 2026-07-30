'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function MobileAdvertisingClient() {
  const keyFeatures = [
    {
      title: 'Flexible Service Model',
      desc: 'DesignDot Mobile advertising platform provides the flexibility to Mobile Operator to launch different service models for mobile advertising. Mobile operators can either use the system for internal marketing department; open it up for external advertisers or do both. This provides the ability to cater to different corporate strategies.',
    },
    {
      title: 'Multiple Delivery Channels Support',
      desc: 'The platform has the capability to interface with multiple service delivery mediums such as SMSC, MMSC, Voice Mail System, Welcome SMS System, WAP Gateway and many more, enabling the creation of innovative advertisement types such as interactive SMS, click to call, click to WAP, click to Mobile website and direct branding messages.',
    },
    {
      title: 'Integration to Subscriber Profiling Elements',
      desc: 'The platform can be integrated to Mobile Operator’s Subscriber Profiling elements such as Data Warehouse, CRM, Customer Loyalty systems, Billing System and Location Base Monitoring system. This provides operators the flexibility to create targeted advertisements for subscribers of a specific profile.',
    },
    {
      title: 'Advertisement Text Insertion',
      desc: 'Text advertisement contents can be inserted into mobile network notification messages which have sufficient space. Examples are Voice Mail notification, Welcome SMS, Missed Call Notification and information request replies. The platform will have checking algorithm built-in to ensure that messages are kept within the original quantity. Dynamic insertion of multiple advertisements per campaign is also supported.',
    },
    {
      title: 'Scheduled Campaign',
      desc: 'Advertisement broadcast can be scheduled ahead on the platform. This will allow advertisers (internal and external) to manage their marketing campaigns more efficiently and easily. Advertisement templates can be saved to allow for easy management.',
    },
    {
      title: 'Reporting',
      desc: 'The platform comes equipped with reporting functions that allows the Mobile Operator to have an overall view of the advertisement transactions going through the system. Operators can then optimize their network capacity planning activities and also create different marketing plans for advertisers and provide statistical figures for commercial engagements.',
    },
    {
      title: 'User Friendly Interface',
      desc: 'DesignDot’s Mobile Advertising platform comes with easy to use GUI to allow the operations team to easily manage the system. This provides shorter learning curve and more importantly, lowers possibility of human errors. As the GUI is web based, it also makes it easier for the operations team to access it anywhere over a secure connection.',
    },
    {
      title: 'System Performance Monitoring',
      desc: 'Built-in system monitoring capabilities provides status of system elements and traffic statistics for easy management. Alerts can also be sent out for notification purposes. The system can also be optionally integrated to external Network Monitoring system via SNMP, allowing Mobile Operators to have a consolidated monitoring platform.',
    },
  ];

  const addOnModules = [
    'Mobile Website Creation Facility',
    'Advanced Advertisement Report Analytics (e.g. CTR, CPM, CPC)',
    'SMS Content Triggered Advertising',
    'Built In Subscriber Profiling Module',
    'Interface to MobileTV and Mobile Website platforms',
    'Advertisement Publisher Module',
  ];

  const keyFeaturesList = [
    'Real-time rating and optimization',
    'Mobile Website Creation Facility',
    'Advanced Advertisement Report Analytics (e.g. CTR, CPM, CPC)',
    'SMS Content Triggered Advertising',
    'Built In Subscriber Profiling Module',
    'Advertisement Publisher Module',
    'Advertising Text insertion',
    'Icon',
    'Alert Screen',
    'Splash Screen',
    'GIF animated graphics',
    'Registration form',
  ];

  const carrierBenefits = [
    'Strong ad optimization and analytics',
    'Monetize on-deck and off-deck traffic',
    'Access to various ad-supported business models',
  ];

  const smsMarketingPoints = [
    'Marketing on a mobile phone known as SMS Marketing has become increasingly popular ever since the rise of SMS (Short Message Service) in the early 2000s in Europe and some parts of Asia when businesses started to collect mobile phone numbers and send off wanted (or unwanted) content. On average, SMS messages are read within four minutes, making them highly convertible.',
    'Mobile marketing via SMS has expanded rapidly in Europe and Asia as a new channel to reach the consumer.',
    'SMS Marketing services typically run off a short code, but sending text messages to an email address is another methodology. Short codes are 5 or 6 digit numbers that have been assigned by all the mobile operators in a given country for the use of brand campaign and other consumer services.',
    'MMS mobile marketing can contain a timed slideshow of images, text, audio and video. This mobile content is delivered via MMS (Multimedia Message Service). Nearly all new phones produced with a color screen are capable of sending and receiving standard MMS message. Brands are able to both send (mobile terminated) and receive (mobile originated) rich content through MMS A2P (application-to-person) mobile networks to mobile subscribers. In some networks, brands are also able to sponsor messages that are sent P2P (person-to-person).',
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
                MOBILE ADVERTISING
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Mobile advertising is a form of advertising via mobile (wireless) phones or other mobile devices. It is a subset of mobile marketing. Mobile advertising involves displaying text, graphics, image and animated advertisements on data enabled mobile devices. Mobile TV is big in Asia, but is yet to pick up pace in the U.S. Currently, SMS is more prevalent in the U.S. and it is predicted that video will grow as well. A major obstacle to the growth of mobile advertising is that most cellular phones still work on independent networks.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="Mobile Advertising"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* KEY FEATURES OF MOBILE ADVERTISING */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-8 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                KEY FEATURES OF MOBILE ADVERTISING
              </h2>

              <ul className="space-y-4 ml-2 mb-8">
                {keyFeatures.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                    <span
                      className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                      style={{
                        fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                      }}
                    >
                      <strong
                        className="font-bold mr-1"
                        style={{
                          fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                        }}
                      >
                        {item.title}:
                      </strong>{' '}
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Optional Add On Modules */}
              <h3
                className="text-[#1a1a1a] text-[18px] md:text-[20px] font-bold mb-4"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                Optional Add On Modules
              </h3>
              <ul className="space-y-2.5 ml-2">
                {addOnModules.map((item, index) => (
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

          {/* TYPE OF MOBILE ADVERTISING */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                TYPE OF MOBILE ADVERTISING
              </h2>

              <h3
                className="text-[#1a1a1a] text-[18px] md:text-[20px] font-bold mb-2"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                Mobile Marketing
              </h3>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-4"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Mobile Marketing is a set of practices that enables organizations to communicate and engage with their audience in an interactive and relevant manner through any mobile device or network.
              </p>

              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-3 font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                Mobile marketing can refer to one or two categories of interest:
              </p>
              <ul className="space-y-2.5 ml-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Firstly, it is meant to describe marketing on or with a mobile device, such as a cell phone using SMS Marketing. (This is an example of horizontal telecommunication convergence)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Secondly, and defining more traditionally, it is meant to describe marketing in a moving fashion - for example - technology road shows or moving billboards.
                  </span>
                </li>
              </ul>

              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Mobile Marketing is now actively being expanded with smart phones and tablets such as Ipad, Iphone, Android etc. reaching to about 35% of cell phones users. A significant fraction of the people still use feature phones that are not web savvy but can receive email and text messages. Because of the emergence of new technology, you can send mobile advertising to feature phones and smart phones plus you have the option of sending that same mobile ad to desktops and laptops through e-mail. You can now send mobile ads to local or international customers or prospective clients with the option of deciding to pick when and where to send your ads. Mobile marketing is commonly known as wireless marketing. However wireless is not necessarily mobile.
              </p>

              {/* KEY FEATURES */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                KEY FEATURES
              </h3>
              <ul className="space-y-2.5 ml-2 mb-8">
                {keyFeaturesList.map((item, index) => (
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

              {/* CARRIER BENEFITS */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                CARRIER BENEFITS
              </h3>
              <ul className="space-y-2.5 ml-2 mb-8">
                {carrierBenefits.map((item, index) => (
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

              {/* MOBILE MARKETING VIA SMS MARKETING */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                MOBILE MARKETING VIA SMS MARKETING
              </h3>
              <ul className="space-y-3 ml-2 mb-8">
                {smsMarketingPoints.map((item, index) => (
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

              {/* IN-GAME MOBILE MARKETING */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                IN-GAME MOBILE MARKETING
              </h3>
              <ul className="space-y-3 ml-2 mb-8">
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    There are essentially four major trends in mobile gaming right now: interactive real-time 3D games, massive multi-player games and social networking games. This means a trend towards more complex and more sophisticated, richer game play. On the other side, there are the so-called casual games, i.e. games that are very simple and very easy to play. Most mobile games today are such casual games and this will probably stay so for quite a while to come.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Brands are now delivering promotional messages within mobile games or sponsoring entire games to drive consumer engagement. This is known as mobile advergaming or Ad-funded mobile game.
                  </span>
                </li>
              </ul>

              {/* MOBILE WEB MARKETING */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                MOBILE WEB MARKETING
              </h3>
              <ul className="space-y-3 ml-2 mb-8">
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Advertising on web pages specifically meant for access by mobile devices is also an option. The Mobile Marketing Association provides a set of guidelines and standards that give the recommended format of ads, presentation, and metrics used in reporting. Google, Yahoo, and other major mobile content providers have been selling advertising placement on their properties for years already and are doing so even now. Advertising networks focused on mobile properties and advertisers are also available. Additionally, web forms on web pages can be used to integrate with mobile texting sources for reminders about meetings, seminars and other important events that assume users are not always at their computers.
                  </span>
                </li>
              </ul>

              {/* MOBILE MARKETING VIA QR CODES */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                MOBILE MARKETING VIA QR CODES
              </h3>
              <ul className="space-y-3 ml-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    QR (or Quick Response) codes have been growing in popularity in Asia and Europe. But until 2011, they were slow to be adopted in North America. Originally approved as an ISS standard in 1997, Denso-Wave first developed the standard for tracking automobile parts in Japan.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Paralleling the rise in smart phone adoption, QR codes have become much more prevalent in marketing pieces both online and offline.
                  </span>
                </li>
              </ul>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Its potential for tracking offline sources and delivering the types of analytics previously reserved for online tracking makes another powerful reason that marketers are flocking to QR codes in droves.
              </p>

              {/* QR CODES ARE AN OPEN SOURCE TECHNOLOGY */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                QR CODES ARE AN OPEN SOURCE TECHNOLOGY.
              </h3>
              <ul className="space-y-3 ml-2 mb-8">
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Companies specifically offering integrated marketing solutions are typically merging code generation with tracking features and a variety of mobile landing page solutions to capture leads, make sales and provide more product information.
                  </span>
                </li>
              </ul>

              {/* LOCATION-BASED SERVICES */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                LOCATION-BASED SERVICES
              </h3>
              <ul className="space-y-3 ml-2 mb-8">
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Location-based services (LBS) are offered by some cell phone networks as a way to send custom advertising and other information to cell-phone subscribers based on their current location. The cell-phone service provider gets the location from a GPS chip built into the phone, or using radiolocation and trilateration based on the signal-strength of the closest cell-phone towers (for phones without GPS features).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Meantime, LBS can be enabled without GPS tracking technique. Mobile WiMAX technology is utilized to give a new dimension to mobile marketing. The new type of mobile marketing is envisioned between a BS(Base Station) and a multitude of CPE (Consumer Premise Equipment) mounted on vehicle dashtops. Whenever vehicles come within the effective range of the BS, the dashtop CPE with LCD touchscreen loads up a set of icons or banners of individually different shapes that can only be activated by finger touches or voice tags. On the screen, a user has a frame of 5 to 7 icons or banners to choose from, and the frame rotates one after another. This mobile WiMAX-compliant LBS is privacy-friendly and user-centric, when compared with GPS-enabled LBS.
                  </span>
                </li>
              </ul>

              {/* USER-CONTROLLED MEDIA */}
              <h3
                className="text-[#1a1a1a] uppercase mb-4 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                USER-CONTROLLED MEDIA
              </h3>
              <ul className="space-y-3 ml-2">
                <li className="flex items-start">
                  <span className="text-[#1a1a1a] mr-3 font-bold text-[16px] leading-relaxed">•</span>
                  <span
                    className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                    }}
                  >
                    Mobile marketing differs from most other forms of marketing communication in that it is often user (consumer) initiated (mobile originated, or MO) message, and requires the express consent of the consumer to receive future communications. A call delivered from a server (business) to a user (consumer) is called a mobile terminated (MT) message. This infrastructure points to a trend set by mobile marketing of consumer controlled marketing communications. Due to the demands for more user controlled media, mobile messaging infrastructure providers have responded by developing architectures that offer applications to operators with more freedom for the users, as opposed to the network-controlled media. Along with these advances to user-controlled Mobile Messaging 2.0, blog events throughout the world have been implemented in order to launch popularity in the latest advances in mobile technology.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

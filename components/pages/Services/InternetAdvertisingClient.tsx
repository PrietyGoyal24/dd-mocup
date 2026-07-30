'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function InternetAdvertisingClient() {
  const benefitsList = [
    'Being found first in search results',
    'Gaining an advantage over your competitors',
    'Attaining the highest rate of traffic to your website',
    'Taking your position as your industry\'s leader',
    'Attracting more quality sales leads',
    'Increasing business revenue',
    'Enhancing business profitability',
    'Improving business sustainability',
  ];

  const typesList = [
    {
      title: 'Floating ad',
      desc: 'An ad which moves across the user\'s screen or floats above the content.',
    },
    {
      title: 'Expanding ad',
      desc: 'An ad which changes size and which may alter the contents of the webpage.',
    },
    {
      title: 'Polite ad',
      desc: 'A method by which a large ad will be downloaded in smaller pieces to minimize the disruption of the content being viewed',
    },
    {
      title: 'Wallpaper ad',
      desc: 'An ad which changes the background of the page being viewed.',
    },
    {
      title: 'Trick banner',
      desc: 'A banner ad that looks like a dialog box with buttons. It simulates an error message or an alert.',
    },
    {
      title: 'Pop-up',
      desc: 'A new window which opens in front of the current one, displaying an advertisement, or entire webpage.',
    },
    {
      title: 'Pop-under',
      desc: 'Similar to a Pop-Up except that the window is loaded or sent behind the current window so that the user does not see it until they close one or more active windows.',
    },
    {
      title: 'Video ad',
      desc: 'similar to a banner ad, except that instead of a static or animated image, actual moving video clips are displayed. This is the kind of advertising most prominent in television, and many advertisers will use the same clips for both television and online advertising.',
    },
    {
      title: 'Map ad',
      desc: 'text or graphics linked from, and appearing in or over, a location on an electronic map such as on Google Maps.',
    },
    {
      title: 'Mobile ad',
      desc: 'an SMS text or multi-media message sent to a cell phone.',
    },
    {
      title: 'Superstitial',
      desc: 'An animated adv on a Web page from Enliven Marketing Technologies. It uses video, 3D content or Flash to provide a TV-like advertisement. Used to be known as Unicast Transitional ads as they were originally made by Unicast Communications but the company was acquired by Viewpoint Corporation in 2004, which then changed its name to Enliven in 2008.',
    },
    {
      title: 'Interstitial ad',
      desc: 'a full-page ad that appears before a user reaches their original destination.',
    },
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
                INTERNET ADVERTISING
              </h1>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-4"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Online advertising is a form of promotion that uses the Internet and World Wide Web to deliver marketing messages to attract customers. Examples of online advertising include contextual ads on search engine results pages, banner ads, blogs, Rich Media Ads, Social network advertising, interstitial ads, online classified advertising, advertising networks and e-mail marketing, including e-mail spam. Many of these types of ads are delivered by an Ad server.
              </p>
              <p
                className="text-[#1a1a1a] w-full text-justify text-[16px] md:text-[18px] leading-relaxed mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Online advertisements may also offer various forms of animation. In its most common use, the term &quot;online advertising&quot; comprises all sorts of banner, e-mail, in-game, and keyword advertising, including platforms such as Facebook, Twitter, and MySpace. Web-related advertising has a variety of ways to publicize and reach a niche audience to focus its attention to a specific group. Research has proven that online advertising has given results and is growing business revenue.
              </p>
            </div>
          </div>

          {/* Sticky Background Hero Image Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full overflow-hidden">
              <img
                src="/assets/web/images/why-designdot.jpg"
                alt="Internet Advertising"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover sticky top-[100px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/why-designdot.jpg';
                }}
              />
            </div>
          </div>

          {/* BENEFITS OF INTERNET ADVERTISING SERVICES OFFER */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full pt-2">
              <h2
                className="text-[#1a1a1a] uppercase mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                BENEFITS OF INTERNET ADVERTISING SERVICES OFFER
              </h2>

              <ul className="space-y-2.5 ml-2 mb-8">
                {benefitsList.map((item, index) => (
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

              {/* TYPES */}
              <h2
                className="text-[#1a1a1a] uppercase mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                TYPES
              </h2>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-4"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Though, as seen above, the large majority of online advertising has a cost that is brought about by usage or interaction of an ad, there are a few other methods of advertising online that only require a onetime payment.
              </p>

              <ul className="space-y-3 ml-2 mb-6">
                {typesList.map((item, index) => (
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

              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                In addition, ads containing streaming video or streaming audio are becoming very popular with advertisers.
              </p>

              {/* WIDGETS */}
              <h3
                className="text-[#1a1a1a] uppercase mb-3 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                WIDGETS
              </h3>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Widgets give users prolonged opportunities to interact with your brand. We deliver them more effectively using the technologies that we use for rich media ads. We can also provide fresh inventory by adding display ads within our existing network of widgets.
              </p>

              {/* E-MAIL ADVERTISING */}
              <h3
                className="text-[#1a1a1a] uppercase mb-3 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                E-MAIL ADVERTISING
              </h3>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Legitimate E-mail advertising or E-mail marketing is often known as &quot;opt-in e-mail advertising&quot; to distinguish it from spam.
              </p>

              {/* DISPLAY ADVERTISING */}
              <h3
                className="text-[#1a1a1a] uppercase mb-3 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                DISPLAY ADVERTISING
              </h3>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Display advertising appears on web pages in many forms, including web banners. These banners can consist of static or animated images, as well as interactive media that may include audio and video elements. Display advertising on the Internet is widely used for branding. This is why metrics like interaction time are becoming more relevant. This may change in the future as display advertising is becoming much more targeted to users, much like how search engine ads can be extremely relevant to users based on what they are searching for. Display advertisers use cookie and browser history to determine demographics and interests of users and target appropriate ads to those browsers. Banner ad standards have changed over the years to larger sizes, in part due to increased resolution of standard monitors and browsers, in part to provide advertisers with more impact for their investment. The standards continue to evolve. Banner ads can be targeted to internet users in many different ways in order to reach the advertiser&apos;s most relevant audience. Behavioral retargeting, demographic targeting, geographic targeting, and site based targeting are all common ways in which advertisers choose to target their banner ads.
              </p>

              {/* AFFILIATE MARKETING */}
              <h3
                className="text-[#1a1a1a] uppercase mb-3 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                AFFILIATE MARKETING
              </h3>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Affiliate marketing is a form of online advertising where advertisers place campaigns with a potentially large number of small (and large) publishers, who are only paid media fees when traffic to the advertiser is garnered, and usually upon a specific measurable campaign result (a form, a sale, a sign-up, etc.). Today, this is usually accomplished through contracting with an affiliate network. The online retailer used its program to generate low cost brand exposure and provided at the same time small websites a way to earn some supplemental income.
              </p>

              {/* BEHAVIORAL TARGETING */}
              <h3
                className="text-[#1a1a1a] uppercase mb-3 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                BEHAVIORAL TARGETING
              </h3>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                In addition to contextual targeting, online advertising can be targeted based on a user&apos;s online behavior. This practice is known as Behavioral Targeting. For example, if a user is known to have recently visited a number of automotive shopping / comparison sites based on clickstream analysis enabled by cookies stored on the user&apos;s computer, that user can then be served auto-related ads when they visit other, non-automotive sites.
              </p>

              {/* SEMANTIC ADVERTISING */}
              <h3
                className="text-[#1a1a1a] uppercase mb-3 text-[18px] md:text-[20px] font-bold"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                SEMANTIC ADVERTISING
              </h3>
              <p
                className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                }}
              >
                Semantic advertising applies semantic analysis techniques to web pages. The process is meant to accurately interpret and classify the meaning and/or main subject of the page and then populate it with targeted advertising spots. By closely linking content to advertising, it is assumed that the viewer will be more likely to show an interest (i.e., through engagement) in the advertised product or service.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

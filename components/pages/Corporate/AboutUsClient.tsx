'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function AboutUsClient() {
  const stats = [
    { number: '12+', text: 'countries where we have\nhappy customers' },
    { number: '15+', text: 'Years of Experience' },
    { number: '1850+', text: 'Clients projects' },
    { number: '1500+', text: 'Happy customers' },
  ];

  const whyDesigndotFeatures = [
    {
      title: 'operational expertise.',
      desc: 'DesignDot in other words can be considered as a bank of technically expert people. Our personnel are well exposed to various levels of companies around the globe and gained operational expertise in vast fields of web development and software development',
    },
    {
      title: 'capacity of work.',
      desc: 'At DesignDot, we provide solutions at one stand point to your different kinds of problems. Our areas of work range from web designing, web development, software development, ecommerce solution, graphics and multimedia solution and search engine optimization (SEO).',
    },
    {
      title: 'time saving services.',
      desc: 'Our trained service providers not only provide you the best in quality services and solutions, they are also capable of delivering projects in a designed time frame, making your product in the market become a more predictable phenomenon.',
    },
    {
      title: 'security.',
      desc: "We assure the security of your data and your business secrets if any related to your project. All our staff is on company payrolls and works from within our infrastructure. DesignDot's data protection policy and Private Labeling contractual agreements keep your reputation intact. In most cases the employee doesn't even know who he/she is actually working for.",
    },
    {
      title: 'quality.',
      desc: "DesignDot follows the best quality management procedures available in the market. Our team first realizes the client's needs thoroughly, and then your business values and finally starts working over the project. Testing of the product is done not only after completion, but is also offered at various stages of the development cycles so as to ensure you the direction of the path of development.",
    },
    {
      title: 'cost saving.',
      desc: 'Due to "Labor arbitrage" our services by and large will save you costs, if compared to hiring in-house staff at your home country.',
    },
    {
      title: 'stable staff.',
      desc: 'DesignDot enjoys lowest staff turnover rates. This ensures a rapid and qualitative post production service and maintenance.',
    },
    {
      title: 'knowledge level.',
      desc: 'Our developers and programmers are educated in reputed universities/institutions. Besides their high technological knowledge they are well conversant with the English language.',
    },
    {
      title: 'support.',
      desc: 'Our technical and marketing team is ready to provide 24*7 services throughout the year. Our service department is ready to answer your queries, questions and recommend the ultimate solution for problems ranging from simple to complex.',
    },
  ];


  const processSteps = [
    {
      num: '1',
      title: 'meet.',
      tags: 'discussion. + requirements.',
      desc: 'We meet and learn about your business and set goals for the Project',
    },
    {
      num: '2',
      title: 'research.',
      tags: 'study. + research.',
      desc: 'We hit the Books / Internet to learn about your industry and your competitors. We do this to ensure you get the best visual solution possible.',
    },
    {
      num: '3',
      title: 'concept.',
      tags: 'prototype. + architecture. + user journey.',
      desc: 'We sketch our ideas so as to work efficiently and get to the proper visual solution.',
    },
    {
      num: '4',
      title: 'interface.',
      tags: 'UI. + illustration. + interactivity.',
      desc: 'We settle on our first draft design concepts. Usually 3; Sometimes more; Sometime less.',
    },
    {
      num: '5',
      title: 'development.',
      tags: 'UX. + coding. + animation.',
      desc: 'structure, data, design, content, and functionality. Design improvisation always happens in front-end development.',
    },
    {
      num: '6',
      title: 'revise.',
      tags: 'QA. + testing.',
      desc: "We ask you to choose one concept and focus on that. then we work on revising the concept so it meets the goals outlined and makes you happy. Sometimes there's one revision round; sometimes two; rarely more.",
    },
    {
      num: '7',
      title: 'launch.',
      tags: '',
      desc: 'Finally, project set to launch to ruling the world.',
    },
  ];


  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[90px] lg:pt-[125px]">
          {/* Header Award Winning Badge Pill */}
          <div className="w-full flex justify-center pt-26 pb-14 px-4 text-center">
            <div className="bg-[#083169] text-white px-8 sm:px-3 py-4 sm:py-3 inline-block shadow-md">
              <h5
                className="text-[14px] sm:text-[22px] md:text-[28px] lg:text-[24px] font-bold tracking-[2px] uppercase leading-tight mb-0"
                style={{
                  fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                }}
              >
                AWARD-WINNING OFFSHORE SOFTWARE COMPANY SINCE 2005
              </h5>
            </div>
          </div>

          {/* Autoplay Video Hero Banner */}
          <div className="w-full px-4 sm:px-6 lg:pl-[98px] lg:pr-[98px] pb-16">
            <div className="relative w-full  overflow-hidden shadow-2xl bg-#efefef max-h-[820px]">
              {/* Desktop & Mobile Autoplay Video */}
              <video
                id="bgvideo"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full min-h-[350px] sm:min-h-[500px] md:min-h-[650px] object-cover opacity-80"
              >
                <source src="https://dd.mocup.in/assets/web/images/video/about.mp4" type="video/mp4" />
                <source src="https://dd.mocup.in/assets/web/images/video/about-mobile.mp4" type="video/mp4" />
              </video>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

              {/* Video Overlay Text */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-[180px] text-white pointer-events-none">
                <h1
                  className="uppercase text-[40px] sm:text-[65px] md:text-[75px] lg:text-[75px] leading-[1.4] font-bold max-w-[1026px] drop-shadow-lg"
                  style={{
                    fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                  }}
                >
                  LET’S MAKE SOMETHING <br />
                  AWESOME
                  <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-white ml-2 align-baseline"></span>
                </h1>
                <p
                  className="text-white text-[18px] sm:text-[22px] md:text-[24px] mt-6 sm:mt-10 font-normal drop-shadow"
                  style={{
                    fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  }}
                >
                  It’s not really about us, tho
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-white ml-2 align-baseline"></span>
                </p>
              </div>
            </div>
          </div>

          {/* Section One: ESTD. 2005. */}
          <div className="w-full px-6 lg:pl-[98px] lg:pr-[98px] pt-4 pb-16">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Left Line Accent */}
              <div className="hidden lg:block w-[130px] h-[2px] bg-[#727272] mt-[15px] shrink-0"></div>

              {/* Right Content */}
              <div className="w-full flex-1">
                <h2
                  className="text-[#000000] text-[32px] sm:text-[36px] font-bold mb-[30px] uppercase"
                  style={{
                    fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  }}
                >
                  ESTD<span className="inline-block w-2 h-2 rounded-full bg-black mx-1 align-baseline"></span> 2005<span className="inline-block w-2 h-2 rounded-full bg-black ml-1 align-baseline"></span>
                </h2>

                <h3
                  className="text-[#000000] text-[20px] sm:text-[24px] font-bold leading-snug mb-6"
                  style={{
                    fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'",
                  }}
                >
                  Through strategy and design, we combine story and experience to build bold brands<span className="inline-block w-2 h-2 rounded-full bg-black ml-1 align-baseline"></span>

                </h3>

                <div
                  className="space-y-6 text-[#000000] text-[16px] md:text-[18px] leading-[30px]"
                  style={{
                    fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  }}
                >
                  <p>
                    DesignDot’s core emphasis has been – to create complete cohesion between aspects of designing and technology-use. Our gained expertise in terms of knowledge and technology helps clients in getting a suitable and desired solution.
                  </p>

                  <p>
                    DesignDot is a Global creative agency established in 2005.{' '}
                    <strong
                      className="font-bold"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      We design &amp; build brands, UI &amp; UX, Interface &amp; Application Development, campaigns &amp; digital projects, Signage &amp; Interior, Visualization &amp; Advertising, Exhibition &amp; Event &#123; 360 services, support and solutions &#125;
                    </strong>{' '}
                    for businesses large &amp; small all over the world. DesignDot has progressed in terms of scalability, functionality and in fulfilling the ever-increasing demands of our esteemed clients.
                  </p>

                  <p>
                    In this strive to offer value-based, technology-driven and cost-effective solutions to our valued clients, DesignDot has created a niche for itself in the industry and has been accorded with laurels and appreciation. DesignDot’s core emphasis has been – to create complete cohesion between aspects of designing and technology-use.
                  </p>
                </div>

                {/* Visitors Count Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-12 border-t border-b border-gray-200 py-10">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <b
                        className="text-[32px] sm:text-[36px] text-black font-bold mb-2"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {stat.number}
                      </b>
                      <span
                        className="text-[16px] sm:text-[18px] text-black capitalize whitespace-pre-line leading-snug"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {stat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section Two: Sticky Parallax Banner 1 & Mission/Vision/Values */}
          <div className="w-full">
            {/* Parallax Background 1 */}
            <div className="w-full px-6 lg:pl-[98px] lg:pr-[98px]">
              <div
                className="w-full min-h-[350px] sm:min-h-[446px] bg-fixed bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://dd.mocup.in/assets/web/images/about-11-banner.jpg')`,
                }}
              ></div>
            </div>

            {/* Mission, Vision, Values Grid */}
            <div className="w-full px-6 lg:pl-[98px] lg:pr-[98px] py-16 bg-[#fcf5f5]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                {/* Column 1: Vision */}
                <div>
                  <b
                    className="text-[30px] sm:text-[36px] text-black font-bold block mb-6"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    our vision<span className="inline-block w-2 h-2 rounded-full bg-black ml-1.5 align-baseline"></span>
                  </b>
                  <div
                    className="space-y-4 text-[17px] sm:text-[18px] text-black leading-[30px] text-justify"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    <p>
                      Our vision is to become a leader and preferred provider of business Web, Brand Identity, Mobile Application Development, Software Development, Advertising and Design Build services, support and solutions for SMEs in the country and this drives us ahead to absorb latest technological advancements in our work practices. Our goal is to build and deliver mission critical IT solutions for SME segment, which empowers them to enhance their core business competency.
                    </p>
                    <p>
                      DesignDot aims at delivering world class business Web, Brand Identity, Mobile Application Development, Software Development, Advertising and Design Build services, support and solutions to its clients. Constant innovation and advancement is our motto. At Designdot, we practice latest technological platforms to build cutting-edge ERP, POS and CRM solutions, which help our clients to materialize their goals in a cost-efficient manner.
                    </p>
                  </div>
                </div>

                {/* Column 2: Mission */}
                <div>
                  <b
                    className="text-[30px] sm:text-[36px] text-black font-bold  block mb-6"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    our mission<span className="inline-block w-2 h-2 rounded-full bg-black ml-1.5 align-baseline"></span>
                  </b>
                  <div
                    className="space-y-4 text-[17px] sm:text-[18px] text-black leading-[30px] text-justify"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    <p>
                      To become a leading software company that delivers business solutions meeting international standards across the globe.
                    </p>
                    <p>
                      It is through our passion and commitment to our clients that we develop software to face real-world challenges. It is our love for and dedication to what we do that enables us to become a better company for ourselves, for our clients, our community and the world.
                    </p>
                  </div>
                </div>

                {/* Column 3: Values */}
                <div>
                  <b
                    className="text-[30px] sm:text-[36px] text-black font-bold block mb-6"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    our values<span className="inline-block w-2 h-2 rounded-full bg-black ml-1.5 align-baseline"></span>
                  </b>
                  <div
                    className="space-y-4 text-[17px] sm:text-[18px] text-black leading-[30px] text-justify"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    <p>
                      We regularly assess our performance and constantly strive to improve our capabilities to serve our clients in a better way. At DesignDot, we imbibe following core values in our daily work place practices so that our business solutions meet our clients’ expectations:
                    </p>
                    <p>
                      <strong className="font-bold">Customer-Centric Approach</strong> &ndash; We commit ourselves to serving our clients with outstanding solutions/services in time-bound, confidential, cost-efficient manner.
                    </p>
                    <p>
                      <strong className="font-bold">Complete Collaboration</strong> &ndash; We see our clients as an extension of our organization and inculcate spirit of cooperation to work with us towards fulfillment of their goals.
                    </p>
                    <p>
                      <strong className="font-bold">Team Spirit</strong> &ndash; We consider our employees as our family members bound together by common objective to achieve quality work and help us to fulfill our set goals.
                    </p>
                    <p>
                      <strong className="font-bold">Personal Growth</strong> &ndash; Employees are valuable asset of an organization and keeping this ideal in mind, we support their growth on professional and personal levels, and contribute ardently to the progress of the organization and its clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Three: Sticky Parallax Banner 2 & WHY DESIGNDOT */}
          <div className="w-full bg-[#fcf5f5] pt-16">
            {/* Parallax Banner 2 with Overlaid Title */}
            <div className="w-full px-6 lg:pl-[98px] lg:pr-[98px]">
              <div
                className="relative w-full min-h-[450px] sm:min-h-[660px] bg-fixed bg-cover bg-center flex items-center justify-start p-8 sm:p-14 lg:p-20"
                style={{
                  backgroundImage: `url('https://dd.mocup.in/assets/web/images/about-2-banner.jpg')`,
                }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <h2
                  className="relative z-10 text-white uppercase text-[40px] sm:text-[75px] md:text-[92px] lg:text-[75px] font-bold leading-tight tracking-wider text-left"
                  style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
                >
                  WHY DESIGNDOT<span className="inline-block w-3 h-3 md:w-5 md:h-5 rounded-full bg-white ml-2 align-baseline"></span>
                </h2>
              </div>
            </div>


            {/* Why DesignDot Features Grid & Content */}
            <div className="w-full px-6 lg:pl-[98px] lg:pr-[98px] py-16 bg-white">
              {/* Subheading & Paragraphs with Left Accent Line */}
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-12">
                <div className="hidden lg:block w-[130px] h-[2px] bg-[#727272] mt-[15px] shrink-0"></div>

                <div className="w-full flex-1 space-y-6">
                  <h3
                    className="text-[20px] sm:text-[24px] font-bold text-black leading-snug"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Strategy informs our making and our making brings our strategy to life. We move forward with each step of our process supporting the next.
                  </h3>
                  <p
                    className="text-[16px] sm:text-[18px] text-black leading-[30px]"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    DesignDot aims at delivering world class business software solutions to its clients. Constant innovation and advancement in our motto. At DesignDot, we practice latest technological platforms to build cutting-edge ERP, POS and CRM solutions, which help our clients to materialize their goals in cost-efficient manner.
                  </p>
                  <p
                    className="text-[16px] sm:text-[18px] text-black leading-[30px]"
                    style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                  >
                    DesignDot is an International based Information Technology (Web, Software Application, mobile app etc.), Branding, Advertising and Design Build Service provider company. DesignDot has evolved from a startup company just a few years ago to establishing a name and fame for itself in the IT space. It has developed a rich clientele base, which puts their faith on our capabilities. It is because of our excellent services in all quarters that they come to us again and again with newer and more challenging types of projects. DesignDot strives to share the following benefits with each of its clients.
                  </p>
                </div>
              </div>

              {/* Accent Line & Heading Side-by-Side: Why Designdot for Offshore IT Services? */}
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mt-16">
                <div className="hidden lg:block w-[130px] h-[2px] bg-[#727272] mt-[15px] shrink-0"></div>

                <div className="w-full flex-1">
                  <h2
                    className="text-[26px] sm:text-[36px] font-bold text-black mb-12"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    Why Designdot for Offshore IT Services?
                  </h2>

                  {/* 9 Grid Cards aligned under the heading */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {whyDesigndotFeatures.map((feat, idx) => (
                      <div key={idx} className="flex flex-col justify-start">
                        <b
                          className="text-[24px] sm:text-[28px] text-black font-bold mb-4 block"
                          style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                        >
                          {feat.title}
                        </b>
                        <p
                          className="text-[16px] sm:text-[18px] text-black leading-[28px] text-justify"
                          style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                        >
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Section Four: OUR PROCESS */}
          <div className="w-full bg-white py-20 pl-0 pr-6 lg:pl-0 lg:pr-[98px]">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left Banner Image Container */}
              <div className="sec-left-banner relative w-full lg:w-[950px] shrink-0 min-h-[600px] lg:min-h-[1950px]">
                <img
                  src="https://dd.mocup.in/assets/web/images/about-4-banner.jpg"
                  alt="OUR PROCESS"
                  className="w-full h-full min-h-[900px] lg:min-h-[2150px] object-cover"
                />
                <div className="sec-left-text absolute inset-0 pt-28 sm:pt-36 lg:pt-40 flex flex-col items-center justify-start p-6 text-center bg-black/25">
                  <h2
                    className="text-white text-[38px] sm:text-[54px] lg:text-[68px] uppercase font-bold tracking-wider"
                    style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    OUR PROCESS
                  </h2>
                  <div className="w-[100px] sm:w-[130px] h-[2px] bg-gray-300 mt-4"></div>
                </div>
              </div>

              {/* Right Steps Timeline Section */}

              <div className="sec-right flex-1 pl-6 lg:pl-[50px] pt-0">
                <div className="flex flex-col">
                  {processSteps.map((step, idx) => (
                    <div key={step.num} className="flex flex-col">
                      {/* Vertical Line Segment above title */}
                      <div className={`w-[3px] h-[85px] sm:h-[95px] bg-[#727272] ml-[19px] sm:ml-[23px] ${idx === 0 ? 'mt-0 mb-3' : 'mt-4 mb-3'}`}></div>

                      {/* Step Item Content */}
                      <div className="sec-four-one flex flex-col pl-[50px] sm:pl-[68px] relative">
                        {/* Row 1: Title (above circle badge 1) */}
                        <h3
                          className="text-[28px] sm:text-[36px] font-bold text-black mb-1  mt-1"
                          style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                        >
                          {step.title}
                        </h3>

                        {/* Row 2: Circle Badge pill positioned at line axis + Sub-tags */}
                        <div className={`relative flex items-center ${step.tags ? 'min-h-[28px] mb-1.5' : 'h-0 mb-0'}`}>
                          {/* Circle Badge 1 aligned horizontally with Sub-tags */}
                          <div className={`absolute -left-[52px] sm:-left-[68px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fcf5f5] border border-black/15 flex items-center justify-center font-bold text-[16px] sm:text-[24px] text-black shrink-0 shadow-sm ${!step.tags ? '-top-4' : ''}`}>
                            {step.num}
                          </div>

                          {step.tags && (
                            <div
                              className="text-[16px] sm:text-[18px] font-bold text-black"
                              style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                            >
                              {step.tags}
                            </div>
                          )}
                        </div>


                        {/* Row 3: Description Text */}
                        <div className="sec-four-text">
                          <p
                            className="text-[15px] sm:text-[17px] text-[#1a1a1a] leading-[24px] max-w-[720px]"
                            style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                          >
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>



            </div>
          </div>







          {/* Section Six: OUR ACHIEVEMENTS */}
          <div className="w-full bg-white text-black py-20 px-6 lg:pl-[98px] lg:pr-[98px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
              <h2
                className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold uppercase tracking-wider text-center md:text-left"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                OUR ACHIEVEMENT<span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-black ml-2 align-baseline"></span>
              </h2>

              <div className="flex items-center gap-6 sm:gap-10 lg:gap-10">
                <img
                  src="https://dd.mocup.in/assets/web/images/award-1.png"
                  alt="HOW International Design Awards Winner"
                  className="h-40 sm:h-52 lg:h-70 object-contain"
                />
                <img
                  src="https://dd.mocup.in/assets/web/images/award-two.png"
                  alt="Certificate of Nomination"
                  className="h-40 sm:h-52 lg:h-60 object-contain"
                />
              </div>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

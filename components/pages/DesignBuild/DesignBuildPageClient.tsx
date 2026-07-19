'use client';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function DesignBuildPageClient() {
  const benefits = [
    {
      title: 'Interior Design',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse.',
      href: '/services/interior-design',
    },
    {
      title: 'Turnkey Solutions',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum?',
      href: '/services/turnkey-projects',
    },
    {
      title: 'Event Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, dolore.',
      href: '/services/event-management',
    },
    {
      title: 'Exhibition Stands',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem in aliquam blanditiis? Dolores, eius?',
      href: '/services/exhibition-stands',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fffbf8] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white">
      {/* Navigation Header */}
      <Navbar theme="light" />

      <main className="w-full pt-[96px] lg:pt-[120px]">
        {/* Banner Top Strip Message */}
        <div className="w-full flex justify-center pt-[120px] pb-100px] md:pt-[120px] md:pb-[80px] bg-[#fffbf8]">
          <div className="bg-[#083169] inline-flex items-center justify-center" style={{ padding: '10px' }}>
            <h5
              className="text-white uppercase"
              style={{
                fontFamily: 'GTWalsheimPro-Bold',
                fontSize: '24px',
                lineHeight: '30px',
                letterSpacing: '2px',
                fontWeight: 700
              }}
            >
              Rapid delivery. Total team coordination.
            </h5>
          </div>
        </div>

        {/* Video & Banner Text Section */}
        <div className="about-us-video w-full px-[20px] md:px-[50px] pb-0 bg-[#fffbf8]">
          <div className="section-container w-full max-w-[1320px] mx-auto">
            <div className="video-outer w-full">
              <div className="video-inner relative w-full overflow-hidden bg-black">
                {/* Desktop Video background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="1920"
                  height="240"
                  className="w-full h-auto hidden md:block"
                >
                  <source src="https://dd.mocup.in/assets/web/images/video/design-build.mp4" type="video/mp4" />
                </video>

                {/* Mobile Video background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="1920"
                  height="240"
                  className="w-full h-auto block md:hidden"
                >
                  <source src="https://dd.mocup.in/assets/web/images/video/designbuild-mobile.mp4" type="video/mp4" />
                </video>

                {/* Video overlay texts */}
                <div className="absolute left-[20px] md:left-[50px] lg:left-[100px] top-[50%] -translate-y-1/2 text-left z-10 w-full max-w-[90%]">
                  <h1
                    className="text-white uppercase mb-0 drop-shadow-lg"
                    style={{
                      fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                      fontSize: '75px',
                      lineHeight: '110px',
                      letterSpacing: '1px',
                      fontWeight: 700
                    }}
                  >
                    DESIGN-BUILD.
                  </h1>
                  <p
                    className="text-white drop-shadow-md flex items-center mt-[30px]"
                    style={{
                      fontFamily: 'GTWalsheimPro-Regular',
                      fontSize: '22px',
                      lineHeight: '22px',
                      letterSpacing: '1px',
                      fontWeight: 400
                    }}
                  >
                    total turnkey solutions<span className="inline-block w-[6px] h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-white ml-2 mb-[2px]"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Let's talk description paragraph */}
        <div className="w-full px-[20px] md:px-[50px] pb-12 bg-[#fffbf8]">
          <div className="w-full max-w-[1320px] mx-auto text-left">
            <h2
              className="text-[#2a255e] uppercase"
              style={{
                fontFamily: 'GTWalsheimPro-Regular',
                fontSize: '40px',
                lineHeight: '60px',
                letterSpacing: '3px',
                fontWeight: 400,
                marginTop: '50px',
                marginBottom: '20px',
              }}
            >
              DESIGN-BUILD. YOU MIGHT SAY IT’S A SIMPLE APPROACH TO
              <br />
              <span className="text-[#f58331]">CONSTRUCTION.</span>
            </h2>
            <p
              className="text-black font-normal"
              style={{
                fontFamily: 'GTWalsheimPro-Regular',
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '1px',
                marginTop: '0px',
                marginBottom: '10px',
              }}
            >
              A team working together from start to finish in open communication and purposeful collaboration to deliver otherwise unachievable results. It’s the notion that when owners sit at the same table with architects, builders, engineers and estimators, great ideas — the best ideas — are born.
            </p>
          </div>
        </div>

        {/* Benefits Grid Section */}
        <section className="w-full px-[20px] md:px-[50px] py-16 bg-[#fffbf8]">
          <div className="w-full max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {benefits.map((b) => (
                <a
                  key={b.title}
                  href={b.href}
                  className="group block relative select-none cursor-pointer"
                >
                  <div
                    className="transform flex flex-col justify-start items-start h-full w-full pt-[40px] pb-[40px] px-[24px] md:pt-[50px] md:pb-[50px] md:px-[40px] bg-white border-l-[6px] border-[#f58331] rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:bg-[#f58331] hover:text-white hover:-translate-y-[10px] hover:shadow-[0_15px_35px_rgba(245,131,49,0.2)] transition-all duration-[350ms] ease-out text-left group"
                  >
                    {/* CheckCircle Badge Icon */}
                    <div
                      className="w-[50px] h-[50px] rounded-md bg-[#f58331]/10 group-hover:bg-white flex items-center justify-center transition-colors duration-300 mb-[24px]"
                    >
                      <svg
                        className="w-[24px] h-[24px] text-[#f58331] transition-colors duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>

                    {/* Header title */}
                    <h4
                      className="text-[18px] font-bold text-black group-hover:text-white transition-colors mb-[16px] tracking-wide"
                      style={{
                        fontFamily: 'GTWalsheimPro-Bold',
                        fontSize: '18px',
                        lineHeight: '18px'
                      }}
                    >
                      {b.title}
                    </h4>

                    {/* Desc Paragraph */}
                    <p
                      className="text-[18px] text-[#2c2c2c] group-hover:text-white/95 transition-colors font-normal"
                      style={{
                        fontFamily: 'GTWalsheimPro-Regular',
                        fontSize: '18px',
                        lineHeight: '26px'
                      }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </section>
      </main>

      {/* Reusable Footer Component */}
      <Footer />
    </div>
  );
}

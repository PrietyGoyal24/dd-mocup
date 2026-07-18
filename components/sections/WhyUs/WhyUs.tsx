'use client';

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-white text-[#111] w-full overflow-x-hidden pt-[60px] pb-[40px] md:pt-[100px] md:pb-[50px]">
      <div className="flex flex-col md:flex-row items-stretch w-full">

        {/* Left column — text */}
        <div className="w-full md:w-[58.33%] flex items-center">
          <div className="w-full px-[30px] md:pl-[160px] lg:pl-[200px] xl:pl-[260px] md:pr-[40px]">

            {/* Row 1: 00. + separator + 'Why Us' */}
            <div className="flex items-center text-[#111] md:relative mb-[30px] md:mb-[50px]">
              <div className="flex items-center md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[-100px] lg:left-[-150px] xl:left-[-195px]">
                <span
                  className="font-extrabold inline-block md:w-[49px]"
                  style={{ fontFamily: "'GTWalsheimPro-Bold'", fontSize: '24px', letterSpacing: '1px' }}
                >00.</span>
                <span
                  className="block h-[1.5px] bg-[#727272] w-[60px] ml-[7px] mr-[12px] md:mx-0 md:w-[50px] md:ml-0 lg:w-[80px] lg:ml-0 xl:w-[109px] xl:ml-0"
                />
              </div>
              <span
                className="font-extrabold md:ml-[-4px] lg:ml-[-10px] xl:ml-[-24px]"
                style={{ fontFamily: "'GTWalsheimPro-Bold'", fontSize: '24px', letterSpacing: '1px' }}
              >
                Why Us
                <span className="inline-block w-[8px] h-[8px] rounded-full bg-[#111] ml-[6px] shrink-0 relative -bottom-[1px]" />
              </span>
            </div>

             {/* Heading and Content */}
             <div className="w-full">
               <div className="w-full md:ml-[-4px] lg:ml-[-10px] xl:ml-[-24px]">
                 <h2
                  className="m-0 font-extrabold text-[#111] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "'GTWalsheimPro-Bold'",
                    fontWeight: 400,
                    fontSize: '27px',
                    letterSpacing: '2px',
                    lineHeight: '67px',
                  }}
                >
                  A CREATIVE DIGITAL AGENCY
                  <span className="inline-block w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#111] ml-[8px] shrink-0 relative -bottom-[2px] md:-bottom-[3px]" />
                </h2>

                <span
                  className="block h-[1px]"
                  style={{
                    width: '90px',
                    backgroundColor: '#727272',
                    marginTop: '16px',
                    marginBottom: '34px',
                  }}
                />

                <p
                  className="text-[#111] m-0 w-full"
                  style={{
                    maxWidth: '465px',
                    fontFamily: "'GTWalsheimPro-Regular'",
                    fontWeight: 400,
                    fontSize: '18px',
                    letterSpacing: '1px',
                    lineHeight: '30px',
                  }}
                >
                  DesignDot is a Global creative agency. We{' '}
                  <span
                    className="font-extrabold"
                    style={{
                      fontFamily: "'GTWalsheimPro-Bold'",
                      fontWeight: 400,
                      fontSize: '18px',
                      letterSpacing: '1px',
                      lineHeight: '30px',
                    }}
                  >
                    Design & Build Brands, UI / UX, Interface & Application Development, Campaigns & Digital Projects, Signage & Advertising, Visualisation & Interior, Exhibition & Event
                  </span>
                  {' '}
                  {'{360 Services, support and solutions} provider for businesses provider for businesses Small, Medium, Large Enterprises across the world. We are at our best in the following areas...'}
                </p>

                <div className="flex items-center mt-[40px] md:mt-[50px]">
                  <span className="inline-block w-[80px] h-[1px]" style={{ backgroundColor: '#727272' }} />
                  <a
                    href="https://dd.mocup.in/about-us"
                    className="inline-block transition-opacity hover:opacity-90 uppercase"
                    style={{
                      fontFamily: "'GTWalsheimPro-Regular'",
                      fontWeight: 400,
                      fontSize: '11px',
                      letterSpacing: '1px',
                      padding: '5px 7px',
                      marginLeft: '18px',
                      backgroundColor: '#F3812F',
                      color: '#23527C',
                      lineHeight: '11px',
                    }}
                  >
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — logo */}
        <div className="w-full md:w-[41.67%] flex items-center justify-end p-0 mt-10 md:mt-0">
          <div className="w-full max-w-[645px]">
            <img
              src="https://dd.mocup.in/assets/web/images/d-logo-2.jpg"
              alt="design dot logo"
              width={645}
              height={780}
              loading="lazy"
              className="w-full h-auto"
              style={{ boxShadow: '-9px 8px 24px 17px #f4f4f4' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import { INDUSTRY_ITEMS } from '@/constants';

const ICON_MAP: Record<string, string> = {
  robot: 'fas fa-robot',
  cogs: 'fas fa-cogs',
  brain: 'fas fa-brain',
  eye: 'fas fa-eye',
  cloud: 'fas fa-cloud',
  language: 'fas fa-language',
  chart: 'fas fa-chart-line',
};

export default function Solutions() {
  return (
    <section className="relative bg-[#191919] text-white select-none py-[60px] md:py-[80px]">
      <div className="w-full max-w-[1840px] mx-auto px-5 md:pl-[65px] md:pr-[64px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-start">

          {/* Left sticky column */}
          <div className="lg:sticky lg:top-[120px] self-start">

            <div className="flex items-center pt-0 lg:pt-[44px] w-full">
              {/* Hanging Prefix Column */}
              <div className="w-[120px] md:w-[140px] lg:w-[170px] xl:w-[220px] flex items-center shrink-0">
                <span className="text-[20px] lg:text-[24px] font-bold leading-none tracking-tight text-[#f58331] inline-block md:w-[49px]" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>02.</span>
                <span className="block h-[1.5px] bg-[#727272] w-[60px] ml-[7px] mr-[12px] md:mx-0 md:w-[50px] md:ml-0 lg:w-[80px] lg:ml-0 xl:w-[109px] xl:ml-0" />
              </div>

              <span
                className="text-[20px] md:text-[26px] leading-[30px] text-white font-extrabold flex items-baseline"
                style={{ fontFamily: 'GTWalsheimPro-Bold' }}
              >
                We Build Smarter, Faster Solutions
                <span className="inline-block w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-white ml-[4px] md:ml-[6px] align-baseline" />
              </span>
            </div>

            <div className="mt-[40px] md:mt-[70px] ml-0 md:ml-[140px] lg:ml-[170px] xl:ml-[220px] w-full md:w-[62%] p-8 md:p-10 rounded-[8px] bg-[#2c2c2c4f] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              <div className="mb-6">
                <i className="fas fa-paper-plane text-white text-[30px]" />
              </div>
              <h5
                className="text-[24px] md:text-[24px] leading-[30px] text-white mb-4 tracking-[1px] font-extrabold"
                style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}
              >
                Fuel Your Digital-First Idea
              </h5>
              <p
                className="text-[18px] md:text-[20px] leading-[1.6] text-[#adadad] mb-8"
                style={{ fontFamily: 'GTWalsheimPro-Regular' }}
              >
                With 1600+ Transformation Experts
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-[#f58331] text-white text-[14px] tracking-[1px] rounded-[21px] transition-opacity hover:opacity-80 uppercase font-extrabold"
                style={{ fontFamily: 'GTWalsheimPro-Bold' }}
              >
                Innovate With Us
              </a>
            </div>
          </div>

          {/* Right sidebar list */}
          <div className="pt-0 lg:pt-0 mt-10 lg:mt-0">
            {INDUSTRY_ITEMS.map((item) => {
              const iconClass = ICON_MAP[item.icon] || 'fas fa-cogs';
              return (
                <div
                  key={item.title}
                  className="industry-item border-b border-white/10 last:border-b-0"
                >
                  <div className="industry-item-inner group flex gap-6 md:gap-8 items-start py-[44px] md:py-[48px] px-5 md:px-3 cursor-pointer transition-all duration-300 ease-linear hover:bg-[#232323]">
                    <div className="w-[20px] shrink-0 text-center">
                      <i className={`${iconClass} text-white text-[26px] md:text-[30px]`} />
                    </div>

                    <div className="flex-1 min-w-0 mr-2 md:mr-4">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <h5
                          className="text-[20px] md:text-[24px] leading-[30px] text-white m-0 font-extrabold tracking-[0.5px]"
                          style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}
                        >
                          {item.title}
                        </h5>
                        <img
                          src="https://dd.mocup.in/assets/web/images/tools-arrow-vector.svg"
                          alt="arrow"
                          width={26}
                          height={26}
                          loading="lazy"
                          className="shrink-0 mt-1 opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <p
                        className="text-[20px] md:text-[20px] leading-[1.65] text-[#adadad] m-0"
                        style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

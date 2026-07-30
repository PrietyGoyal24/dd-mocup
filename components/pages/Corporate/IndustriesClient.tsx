'use client';

import React, { useRef, useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function IndustriesClient() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, []);

  const industriesList = [
    {
      id: 'aerospace',
      title: 'Aerospace',
      icon: 'https://dd.mocup.in/assets/web/images/industries/travelling.png',
      fallbackIcon: '✈️',
    },
    {
      id: 'automotive',
      title: 'Automotive',
      icon: 'https://dd.mocup.in/assets/web/images/industries/architect.png',
      fallbackIcon: '👷',
    },
    {
      id: 'banking',
      title: 'Banking and Capital Markets',
      icon: 'https://dd.mocup.in/assets/web/images/industries/debit-card.png',
      fallbackIcon: '💳',
    },
    {
      id: 'communications',
      title: 'Communications',
      icon: 'https://dd.mocup.in/assets/web/images/industries/chat.png',
      fallbackIcon: '💬',
    },
    {
      id: 'consumer-packaged-goods',
      title: 'Consumer Packaged Goods',
      icon: 'https://dd.mocup.in/assets/web/images/industries/goods.png',
      fallbackIcon: '📦',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: 'https://dd.mocup.in/assets/web/images/industries/manufacturing.png',
      fallbackIcon: '🏭',
    },
    {
      id: 'education',
      title: 'Education',
      icon: 'https://dd.mocup.in/assets/web/images/industries/education.png',
      fallbackIcon: '🎓',
    },
    {
      id: 'energy',
      title: 'Energy',
      icon: 'https://dd.mocup.in/assets/web/images/industries/energy.png',
      fallbackIcon: '⚡',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: 'https://dd.mocup.in/assets/web/images/industries/heart-beat.png',
      fallbackIcon: '🩺',
    },
    {
      id: 'high-technology',
      title: 'High Technology',
      icon: 'https://dd.mocup.in/assets/web/images/industries/industry-tech.png',
      fallbackIcon: '💡',
    },
    {
      id: 'hospitality',
      title: 'Hospitality and Leisure',
      icon: 'https://dd.mocup.in/assets/web/images/industries/pin.png',
      fallbackIcon: '🏨',
    },
    {
      id: 'insurance',
      title: 'Insurance',
      icon: 'https://dd.mocup.in/assets/web/images/industries/health-insurance.png',
      fallbackIcon: '☂️',
    },
    {
      id: 'life-sciences',
      title: 'Life Sciences',
      icon: 'https://dd.mocup.in/assets/web/images/industries/planet-earth.png',
      fallbackIcon: '🌱',
    },
    {
      id: 'logistics',
      title: 'Logistics and Distribution',
      icon: 'https://dd.mocup.in/assets/web/images/industries/logistics.png',
      fallbackIcon: '🌐',
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: 'https://dd.mocup.in/assets/web/images/industries/resources.png',
      fallbackIcon: '📊',
    },
    {
      id: 'retail',
      title: 'Retail',
      icon: 'https://dd.mocup.in/assets/web/images/industries/retail-store.png',
      fallbackIcon: '🛍️',
    },
    {
      id: 'publishing',
      title: 'Publishing',
      icon: 'https://dd.mocup.in/assets/web/images/industries/project-management.png',
      fallbackIcon: '💡',
    },
    {
      id: 'studios-and-networks',
      title: 'Studios and Networks',
      icon: 'https://dd.mocup.in/assets/web/images/industries/studio.png',
      fallbackIcon: '🎬',
    },
    {
      id: 'utilities',
      title: 'Utilities',
      icon: 'https://dd.mocup.in/assets/web/images/industries/utility.png',
      fallbackIcon: '⚡',
    },
  ];


  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        {/* Pass theme="light" for white navbar matching 4th image from real website */}
        <Navbar theme="light" />

        <main className="pt-40 sm:pt-48">
          {/* Top Title Pill - Matching Header background color & navy badge */}
          <div className="w-full bg-[#fcf5f5] px-6 lg:px-[98px] pt-8 pb-14 text-center">
            <div className="inline-block bg-[#083169] text-white text-[15px] sm:text-[28px] font-bold px-2 py-1 uppercase tracking-wider">
              INDUSTRIES.
            </div>
          </div>

          {/* Autoplay Video Section - Matching AboutUsClient Video Banner exact size */}
          <div className="w-full px-4 sm:px-6 lg:pl-[98px] lg:pr-[98px] pb-16">
            <div className="relative w-full overflow-hidden shadow-2xl bg-[#efefef] max-h-[820px]">
              <video
                ref={videoRef}
                id="bgvideo"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full min-h-[350px] sm:min-h-[500px] md:min-h-[650px] object-cover opacity-80"
              >
                <source src="https://dd.mocup.in/assets/web/images/video/industries.mp4" type="video/mp4" />
                <source src="https://dd.mocup.in/assets/web/images/video/industries.ogv" type="video/ogv" />
                <source src="https://dd.mocup.in/assets/web/images/video/industries.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/25 flex items-center justify-left p-46 text-center pointer-events-none">
                <h1
                  className="text-white text-[44px] sm:text-[68px] lg:text-[75px] uppercase font-bold tracking-wider drop-shadow-md inline-block"
                  style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
                >
                  INDUSTRIES
                  <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-white ml-1 sm:ml-3 align-baseline"></span>
                </h1>
              </div>


            </div>
          </div>


          {/* Main Heading & 2-Column Grid */}
          <div className="w-full px-6 lg:px-[98px] pt-8 sm:pt-1 pb-28 sm:pb-36 bg-[#fcf5f5]">

            {/* Section Main Heading with Letter Spacing */}
            <div className="mb-14">
              <h2
                className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold tracking-[0.08em] uppercase"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.10em' }}
              >
                <span className="text-[#083169]">LETS BRING THE WORLD CLOSER </span>
                <span className="text-[#f27820]">TOGETHER.</span>
              </h2>
            </div>

            {/* 2-Column Industries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16">
              {industriesList.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="w-full h-[220px] sm:h-[340px] flex items-center justify-start px-6 sm:px-12 border-t border-b border-black/70 bg-transparent hover:bg-white hover:shadow-xl transition-all duration-300 rounded-none group cursor-pointer"
                >
                  <div className="w-16 h-16 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center mr-6 sm:mr-10">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `<span class="text-4xl sm:text-5xl">${item.fallbackIcon}</span>`;
                        }
                      }}
                    />
                  </div>

                  <h3
                    className="text-[22px] sm:text-[30px] font-bold text-[#111111] group-hover:text-black transition-colors duration-300 leading-tight"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {item.title}
                  </h3>
                </a>
              ))}
            </div>





          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

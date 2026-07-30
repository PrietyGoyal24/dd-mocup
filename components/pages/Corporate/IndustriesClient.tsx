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

          {/* Autoplay Video Section */}
          <div className="w-full px-6 lg:px-[98px] pb-16">
            <div className="relative w-full rounded-none overflow-hidden shadow-sm bg-black h-[240px] sm:h-[360px] lg:h-[480px]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://dd.mocup.in/assets/web/images/video/industries.mp4" type="video/mp4" />
                <source src="https://dd.mocup.in/assets/web/images/video/industries.ogv" type="video/ogv" />
                <source src="https://dd.mocup.in/assets/web/images/video/industries.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center p-6 text-center">
                <h1
                  className="text-white text-[44px] sm:text-[68px] lg:text-[90px] uppercase font-bold tracking-widest drop-shadow-md"
                  style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
                >
                  INDUSTRIES.
                </h1>
              </div>
            </div>
          </div>

          {/* Main Heading & 2-Column Grid */}
          <div className="w-full px-6 lg:px-[98px] py-8 sm:py-1 bg-[#fcf5f5]">
            {/* Section Main Heading */}
            <div className="mb-14">
              <h2
                className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold tracking-wide"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                <span className="text-[#083169]">LETS BRING THE WORLD CLOSER </span>
                <span className="text-[#f27820]">TOGETHER.</span>
              </h2>
            </div>

            {/* 2-Column Industries Grid matching 3rd image from real website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10">
              {industriesList.map((item) => (
                <div key={item.id} className="flex flex-col">
                  {/* Single Top Line */}
                  <div className="w-full h-[1px] bg-[#727272] mb-10"></div>

                  {/* Industry Card - Smooth White Hover Effect matching 3rd Image */}
                  <div className="w-full group cursor-pointer bg-transparent hover:bg-white p-8 sm:p-16 hover:shadow-xl transition-all duration-500 ease-in-out flex items-center gap-6 sm:gap-10 min-h-[160px] sm:min-h-[160px]">
                    <div className="w-16 h-16 sm:w-20 sm:h-50 shrink-0 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                      className="text-[22px] sm:text-[30px] font-bold text-[#111111] group-hover:text-black transition-colors duration-500 leading-tight"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Single Bottom Line */}
                  <div className="w-full h-[1px] bg-[#727272]+ mt-8"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

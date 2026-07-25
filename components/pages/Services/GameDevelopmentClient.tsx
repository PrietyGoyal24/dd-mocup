'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function GameDevelopmentClient() {
  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-6 text-[32px] sm:text-[56px] md:text-[76px] lg:text-[90px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .GAME DEVELOPMENT
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-6"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p className="font-bold text-[#0e2038] text-[18px] md:text-[20px]">
                  We Don't Just Build Games. We Build Legacies.
                </p>
                <p>
                  From indie-inspired mobile titles to AAA-quality console epics, DesignDot is the powerhouse behind world-class gaming experiences. Combining disruptive technology with immersive storytelling, we turn visionary concepts into chart-topping realities.
                </p>
              </div>
              <p
                className="text-[#f27820] font-bold text-[15px] md:text-[16px] tracking-[1px] uppercase mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
              >
                Award-Winning Studio | 500+ Games Launched
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="Game Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Full-Cycle Game Development Services */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                FULL-CYCLE <span className="text-[#f27820]">GAME DEVELOPMENT SERVICES</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We offer a 360-degree approach to game creation, ensuring every layer of your project is polished to perfection.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'PC & Console Development',
                    desc: 'High-fidelity gaming for PlayStation, Xbox, and PC using Unreal Engine and Unity.',
                  },
                  {
                    title: 'Mobile Game Development',
                    desc: 'Engaging iOS and Android games optimized for performance and monetization.',
                  },
                  {
                    title: 'AR/VR & Metaverse',
                    desc: 'Immersive and decentralized virtual worlds powered by advanced spatial computing.',
                  },
                  {
                    title: 'Blockchain & NFT Gaming',
                    desc: 'Secure Web3 economies, Play-to-Earn models, and smart contract integrations.',
                  },
                  {
                    title: 'Game Art & Animation',
                    desc: 'AAA-quality 3D modeling, concept art, and motion capture animation.',
                  },
                  {
                    title: 'Live-Ops & Maintenance',
                    desc: 'Post-launch support, community management, and continuous content updates.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-2"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Tech Stack: The Engine of Innovation */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR TECH STACK: <span className="text-[#f27820]">THE ENGINE OF INNOVATION</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                We utilize the most advanced tools in the industry to ensure your game is future-proof and scalable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Game Engines */}
                <div>
                  <h3
                    className="text-[#1a1a1a] text-[18px] font-bold mb-4 flex items-center"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-2 text-[#1a1a1a]">•</span> Game Engines
                  </h3>
                  <div className="space-y-2.5 pl-5">
                    {['Unity', 'Unreal Engine 5', 'CryEngine'].map((item, idx) => (
                      <div
                        key={idx}
                        className="text-[#444444] text-[16px] md:text-[17px] font-medium"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <h3
                    className="text-[#1a1a1a] text-[18px] font-bold mb-4 flex items-center"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-2 text-[#1a1a1a]">•</span> Platforms
                  </h3>
                  <div className="space-y-2.5 pl-5">
                    {[
                      'iOS',
                      'Android',
                      'Windows',
                      'macOS',
                      'PlayStation 5',
                      'Xbox Series X/S',
                      'Nintendo Switch',
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="text-[#444444] text-[16px] md:text-[17px] font-medium"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Technologies */}
                <div>
                  <h3
                    className="text-[#1a1a1a] text-[18px] font-bold mb-4 flex items-center"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-2 text-[#1a1a1a]">•</span> Backend Technologies
                  </h3>
                  <div className="space-y-2.5 pl-5">
                    {['Photon', 'PlayFab', 'Node.js', 'AWS GameLift'].map((item, idx) => (
                      <div
                        key={idx}
                        className="text-[#444444] text-[16px] md:text-[17px] font-medium"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Designdot Player-First Framework */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                THE DESIGNDOT <span className="text-[#f27820]">PLAYER-FIRST FRAMEWORK</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our development philosophy centers on the Core Loop, ensuring every second of gameplay is rewarding and intuitive.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { num: '01', name: 'CONCEPT DISCOVERY' },
                  { num: '02', name: 'PROTOTYPING' },
                  { num: '03', name: 'VISUAL ARCHITECTURE' },
                  { num: '04', name: 'ENGINEERING' },
                  { num: '05', name: 'RIGOROUS QA' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-5 px-7 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out flex items-center gap-5"
                  >
                    <div
                      className="w-[46px] h-[46px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[15px] shrink-0"
                      style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                    >
                      {item.num}
                    </div>
                    <span
                      className="text-[#0e2038] uppercase font-bold text-[15px] md:text-[16px] tracking-[1px]"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Partner with the Industry Leader? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY PARTNER WITH THE <span className="text-[#f27820]">INDUSTRY LEADER?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  'Multidisciplinary Talent',
                  'IP Protection & NDA Compliance',
                  'Scalable Development Teams',
                  'Monetization Expertise',
                  '24/7 Global Support',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-6 px-7 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] flex items-center"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[16px] md:text-[18px]"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item}
                    </h3>
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Whether you need a small strike team for an MVP or a massive studio for a AAA title, we scale to your requirements.
              </p>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                INDUSTRIES <span className="text-[#f27820]">WE SERVE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Gaming technology is no longer just for play. We apply game mechanics across multiple industries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {[
                  { num: '01', name: 'EDTECH' },
                  { num: '02', name: 'HEALTHCARE' },
                  { num: '03', name: 'REAL ESTATE' },
                  { num: '04', name: 'CORPORATE SOLUTIONS' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-5 px-7 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out flex items-center gap-5"
                  >
                    <div
                      className="w-[46px] h-[46px] rounded-full bg-[#f27820] text-white flex items-center justify-center font-bold text-[15px] shrink-0"
                      style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                    >
                      {item.num}
                    </div>
                    <span
                      className="text-[#0e2038] uppercase font-bold text-[15px] md:text-[16px] tracking-[1px]"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                From gamified learning platforms to VR surgical simulations and interactive brand engagement apps, we create experiences that deliver impact.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

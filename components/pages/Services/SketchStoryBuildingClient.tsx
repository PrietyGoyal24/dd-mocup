'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function SketchStoryBuildingClient() {
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
                .SKETCH &amp; STORY BUILDING
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-3"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Storyboarding is the process of creating a visual script, or draft, of the shots and scene. Whatever type of production you&apos;re planning, bear in mind that the more include sketches of important scenes, along with scene descriptions.
              </p>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Well planned videos look the most professional. Storyboarding is the process of creating a visual script, or draft, of the shots and scene changes in a video or movie.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full overflow-hidden">
              <img
                src="/why-designdot.jpg"
                alt="Sketch & Story Building"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                }}
              />
            </div>
          </div>

          {/* Why Storyboarding */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full">
              <p
                className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-6"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
              >
                Storyboards are invaluable when several people are working on a project together. A well-defined storyboard helps to ensure that everyone understands the goals of the project and how the video and audio footage should work together. The storyboarding process is an important one for the following reasons:
              </p>

              <ul className="space-y-3 ml-2 mb-12">
                {[
                  'To deliver its message effectively, a video or movie production needs to be well planned. Even a family event video will benefit from planning.',
                  'Storyboarding helps you to think about how you want your finished movie to look, how the story should unfold, and what shots will best convey your story to your audience.',
                  "With your storyboard in place, you'll waste less time setting up shots because you'll know exactly what scenes you need to shoot, and where to shoot them from.",
                  "Storyboarding is especially useful for planning complex sequences of events, saving you from shooting footage you can't use or missing footage that is essential to the plot.",
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

              {/* Services are includes */}
              <h2
                className="text-[#1a1a1a] mb-6 text-[18px] sm:text-[20px] font-bold"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'", letterSpacing: '0.5px' }}
              >
                Services are includes:
              </h2>

              <ul className="space-y-2.5 ml-2">
                {[
                  '2D sketches',
                  '3D sketches',
                  'Visual Scripts',
                  'Pencil Drawing',
                  'Color Drawing',
                  'Cartoon book creation',
                  'Video shots creation',
                  'etc.',
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

        </main>
      </div>

      <Footer />
    </div>
  );
}

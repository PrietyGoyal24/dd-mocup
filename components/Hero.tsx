'use client';

import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  {
    heading: 'DESIGN. DEVELOPMENT. TECHNOLOGY',
    paragraph: ''
  },
  {
    heading: 'WE BUILD YOUR IDEAS.',
    paragraph: 'We create award-winning brands and strategically designed experiences for a digitally driven world.'
  },
  {
    heading: 'DESIGN AND INNOVATION.',
    paragraph: "We're a brand strategy, digital design agency and application development. Building brands experiences INSPIRED BY CULTURE & PLACE."
  },
  {
    heading: 'GREAT EXPERIENCE BUILDS GREAT BRANDS.',
    paragraph: 'Precisely what you imagined your brand could be, only more so. Brand Strategy & Digital Innovation.'
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sequential typing state
  const [slideIndex, setSlideIndex] = useState(0);
  const [typedHeading, setTypedHeading] = useState('');
  const [typedParagraph, setTypedParagraph] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Sequential Typing Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentSlide = SLIDES[slideIndex];

    if (!isDeleting) {
      // Typing phase
      if (typedHeading.length < currentSlide.heading.length) {
        timer = setTimeout(() => {
          setTypedHeading(currentSlide.heading.slice(0, typedHeading.length + 1));
        }, 90); // Heading typing speed (reduced)
      } else if (typedParagraph.length < currentSlide.paragraph.length) {
        timer = setTimeout(() => {
          setTypedParagraph(currentSlide.paragraph.slice(0, typedParagraph.length + 1));
        }, 50); // Paragraph typing speed (reduced)
      } else {
        // Pause once fully typed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Wait 3 seconds on complete slide
      }
    } else {
      // Deleting phase
      if (typedParagraph.length > 0) {
        timer = setTimeout(() => {
          setTypedParagraph(typedParagraph.slice(0, -1));
        }, 15); // Paragraph deleting speed
      } else if (typedHeading.length > 0) {
        timer = setTimeout(() => {
          setTypedHeading(typedHeading.slice(0, -1));
        }, 30); // Heading deleting speed
      } else {
        // Move to next slide
        timer = setTimeout(() => {
          setIsDeleting(false);
          setSlideIndex((prev) => (prev + 1) % SLIDES.length);
        }, 500); // Small delay before typing next slide
      }
    }

    return () => clearTimeout(timer);
  }, [typedHeading, typedParagraph, isDeleting, slideIndex]);

  return (
    <>
      <section
        ref={containerRef}
        data-cursor="paint"
        className="showcase relative w-full flex flex-col items-center justify-center overflow-hidden bg-transparent select-none animate-in fade-in duration-500 cursor-none pt-[120px] px-[30px] pb-[160px] md:pb-[240px] lg:pb-[340px]"
      >
        <div className="caption w-full h-full flex flex-col justify-center items-center" style={{ padding: '120px 0', minHeight: '356px' }}>
          <div className="container-box w-full pl-[38px] pr-[46px]">
            <div className="type-wrap w-full flex flex-col items-center text-center">
              {/* Heading */}
              <h1
                id="typed"
                className="font-black text-[26px] md:text-[36px] lg:text-[44px] xl:text-[52px] [@media(min-width:1600px)]:text-[65px] leading-[1.08] tracking-tight text-white uppercase select-none mb-[20px] w-full"
                style={{ fontFamily: "'GTWalsheimPro-Bold', sans-serif", fontWeight: 700 }}
              >
                {typedHeading}
              </h1>

              {/* Paragraph */}
              {typedParagraph.length > 0 && (
                <p
                  className="text-[16px] font-sans tracking-wide text-white/90 max-w-none leading-[36px] md:leading-[30px] select-none mt-2"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif" }}
                >
                  {typedParagraph}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Mockup Section (Recreating the original website portfolio player with split background) */}
      <div
        data-cursor="paint"
        className="clip w-full bg-[#fcf5f5] relative z-20 cursor-none select-none pt-0 pb-[80px] lg:py-[20px]"
      >
        <div className="container-box w-full px-[15px] lg:pl-[38px] lg:pr-[46px] -mt-[140px] md:-mt-[200px] lg:-mt-[280px] z-30 relative">
          <div
            className="clip-box bg-[#333333] p-[10px] mx-0 lg:mx-[85px] border border-white/10 rounded-none shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex"
          >
            <div className="relative w-full overflow-hidden rounded-none bg-white">
              <video
                id="bgvideo"
                src="https://dd.mocup.in/assets/web/images/video/designdot.mp4"
                className="w-full h-auto block"
                playsInline
                autoPlay
                loop
                muted
                style={{ width: '100% !important', height: 'auto !important' } as any}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MoveLeft, MoveRight } from 'lucide-react';
import { WHAT_GOOD_PROJECTS } from '@/constants';

export default function Portfolio() {
  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600, // smooth transition speed
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section 
      className="relative bg-[#191919] text-[#FFFFFF] overflow-hidden select-none w-full"
      style={{ fontFamily: "'GTWalsheimPro-Regular'" }}
    >
      <div className="w-full max-w-[1840px] mx-auto px-5 md:pl-[65px] md:pr-[64px] flex flex-col z-10 relative">
        
        {/* Row 1: Heading & Controls */}
        <div className="section-heading slider-heading flex justify-between items-center w-full pt-[40px] lg:pt-[120px] lg:pb-[50px]">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center w-full"
          >
            {/* Hanging Prefix Column */}
            <div className="w-[120px] md:w-[95px] lg:w-[135px] xl:w-[195px] flex items-center shrink-0">
              <span className="text-[22px] lg:text-[26px] font-bold leading-none tracking-tight text-[#F58331] inline-block md:w-[49px]" style={{ fontFamily: "'GTWalsheimPro-Bold'" }}>04.</span>
              <div className="block h-[1px] bg-[#FFFFFF]/40 w-[60px] ml-[7px] mr-[12px] md:mx-0 md:w-[50px] md:ml-0 lg:w-[80px] lg:ml-0 xl:w-[109px] xl:ml-0" />
            </div>
            
            {/* Content */}
            <div className="flex items-center md:ml-[-4px] lg:ml-[-10px] xl:ml-[-24px]">
              <div className="flex items-baseline">
                <h2 className="font-bold text-[20px] lg:text-[26px] leading-none tracking-tight text-[#FFFFFF] m-0 p-0" style={{ fontFamily: "'GTWalsheimPro-Bold'" }}>
                  What&apos;s Good
                </h2>
                <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-white rounded-full ml-[6px]" />
              </div>
            </div>
          </motion.div>

          {/* Slider Arrow Buttons */}
          <div className="flex gap-4 shrink-0 text-white/80 md:mr-[4px] lg:mr-[10px] xl:mr-[5px]">
            <button
              onClick={handlePrev}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <MoveLeft size={32} strokeWidth={1} />
            </button>
            <button
              onClick={handleNext}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <MoveRight size={32} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Indented Content Block */}
        <div className="sliderContainer what-good-container pl-0 md:pl-[95px] lg:pl-[135px] xl:pl-[195px] md:ml-[-4px] md:mr-[4px] lg:ml-[-10px] lg:mr-[10px] xl:ml-[-24px] xl:mr-[5px]">
          {/* Carousel Slider */}
          <div className="w-full overflow-hidden">
            <div className="-mx-[15px] lg:-mx-[35px]">
              <Slider ref={sliderRef} {...settings}>
                {WHAT_GOOD_PROJECTS.map((project, index) => (
                  <div key={`${project.title}-${index}`} className="focus:outline-none px-[15px] lg:px-[35px]">
                    <div className="w-full flex-col bg-[#191919] flex">
                      {/* Image Cover */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                    {/* Footer text content of card */}
                    <div 
                      className="what-good-text flex flex-col w-full text-[#FFFFFF] pt-6 pb-6 pr-4"
                    >
                      <div className="flex justify-between items-center w-full mb-[15px]">
                        <h3 
                          className="font-bold text-[22px] md:text-[26px] tracking-wide m-0 p-0"
                          style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                        >
                          {project.title}
                        </h3>
                        <a
                          href={project.href}
                          target="_blank"
                          className="text-[12px] md:text-[14px] font-bold tracking-wider text-[#FFFFFF] flex items-center gap-[10px] shrink-0"
                          style={{ fontFamily: "'GTWalsheimPro-Bold'" }}
                        >
                          <span className="w-[50px] md:w-[120px] h-[1px] bg-[#FFFFFF]/40" />
                          <span>View Case Study</span>
                        </a>
                      </div>
                      <p 
                        className="text-[18px] md:text-[20px] text-white font-normal leading-[1.55] m-0 p-0"
                        style={{ fontFamily: "'GTWalsheimPro-Regular'" }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

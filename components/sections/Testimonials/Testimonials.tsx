'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="w-full max-w-[1840px] mx-auto px-5 md:pl-[65px] md:pr-[64px] flex flex-col z-10 relative">
        
        {/* Row 1: Index --- Heading */}
        <div className="flex items-center mb-[40px] lg:mb-[60px] w-full justify-between">
          <div className="flex items-center flex-1">
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <span className="text-[22px] lg:text-[26px] font-bold leading-none tracking-tight text-[#F58331]" style={{ fontFamily: "'GTWalsheimPro-Bold'" }}>05.</span>
              <div className="flex-grow h-[1.8px] bg-[#111111]/40 ml-[15px] mr-[15px]" />
            </div>
            
            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h2 className="font-bold text-[22px] lg:text-[26px] leading-none tracking-tight text-black m-0 p-0" style={{ fontFamily: "'GTWalsheimPro-Bold'" }}>
                What Are Client Says<span className="inline-block w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-black rounded-full ml-[4px] relative -top-[2px]"></span>
              </h2>
            </div>
          </div>
          
          {/* Explore Button */}
          <div className="hidden md:flex items-center gap-[24px] shrink-0">
            <div className="w-[80px] lg:w-[100px] h-[1.5px] bg-[#111111]/40" />
            <a 
              href="https://dd.mocup.in/testimonial" 
              className="bg-[#F58331] text-black px-[6px] py-[2px] text-[12px]  tracking-[2px] uppercase transition-opacity hover:opacity-90 rounded-sm"
              style={{ fontFamily: "'GTWalsheimPro-Regular'" }}
            >
              EXPLORE
            </a>
          </div>
        </div>

        {/* Indented Content Block */}
        <div className="w-full pl-0 md:pl-[120px] lg:pl-[160px]">

        <div className="flex flex-col text-left mb-[58px] max-w-[450px]">
          <p className="text-[18px] lg:text-[22px] leading-[1.5] text-[#111111]" style={{ fontFamily: "'GTWalsheimPro-Regular'" }}>
            <strong className="font-black" style={{ fontFamily: "'GTWalsheimPro-Bold'" }}>
              Over 1500+ Happy Clients, we turn Ideas into reality for a living
            </strong>
            {' '}We are in the business of digital transformation. We help our clients see what they cannot.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-transparent flex flex-col justify-start text-left h-full"
            >
              {/* Header profile info */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-[56px] h-[64px] overflow-hidden shrink-0 rounded-[4px]">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h6 className="text-[16px] font-extrabold text-black uppercase m-0 leading-tight" style={{ fontFamily: "'GTWalsheimPro-Bold'" }}>
                    {testi.name}
                  </h6>
                  <span className="text-[14px] text-slate-500 mt-[4px] leading-snug break-words" style={{ fontFamily: "'GTWalsheimPro-Regular'" }}>
                    {testi.role}
                  </span>
 
                  {/* Rating Stars */}
                  <div className="flex gap-1 mt-1.5">
                    {[...Array(testi.stars)].map((_, i) => (
                      <Star key={i} size={13} className="fill-[#f27820] text-[#f27820]" />
                    ))}
                  </div>
                </div>
              </div>
 
              {/* Review paragraph */}
              <p className="text-[14px] lg:text-[18px] leading-[1.65] font-normal text-[#444] text-justify m-0 p-0" style={{ fontFamily: "'GTWalsheimPro-Regular'" }}>
                {testi.text}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

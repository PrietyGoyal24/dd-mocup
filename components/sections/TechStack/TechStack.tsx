'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GRID_TECH_DATA } from '@/constants';

const MENU_ITEMS = [
  {
    id: "frontend",
    label: "Frontend Programming Languages",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/frontend-programming-languages-icon.svg"
        alt="Frontend Programming Languages"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
  {
    id: "backend",
    label: "Backend Programming Languages",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/backend-programming-languages-icon.svg"
        alt="Backend Programming Languages"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
  {
    id: "mobile",
    label: "Mobile App Development",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/mobile-icon.svg"
        alt="Mobile App Development"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
  {
    id: "bigdata",
    label: "Big Data",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/big-data-icon-home.svg"
        alt="Big Data"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
  {
    id: "database",
    label: "Databases / Data Storages",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/databases-datastorages-icon.svg"
        alt="Databases / Data Storages"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
  {
    id: "clouddb",
    label: "Cloud DB, Warehouses And Storage",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/cloud-db-warehouses-and-storage-icon.svg"
        alt="Cloud DB, Warehouses And Storage"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
  {
    id: "devops",
    label: "DevOps",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/devops-tech-icon.svg"
        alt="DevOps"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
  {
    id: "architecturedesigns",
    label: "Architecture Designs And Patterns",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/architecture-designs-and-patterns-icon.svg"
        alt="Architecture Designs And Patterns"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
  {
    id: "artificialintelligence",
    label: "Artificial Intelligence",
    iconNode: (
      <img
        src="https://dd.mocup.in/assets/web/images/icon/artificial-intelligence-deck-icon.svg"
        alt="Artificial Intelligence"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain"
        loading="lazy"
      />
    )
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>("frontend");

  const toggleAccordion = (id: string) => {
    setMobileActiveCategory(mobileActiveCategory === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #6a63a5;
          border-radius: 10px;
          border: 3px solid #363266;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #7b75b8;
        }
      `}</style>
      <div className="w-full max-w-[1840px] mx-auto px-5 md:pl-[65px] md:pr-[64px] flex flex-col z-10 relative">

        {/* Row 1: Heading with Hanging Indent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-[50px] w-full"
        >
          {/* Hanging Prefix Column */}
          <div className="w-[120px] md:w-[95px] lg:w-[135px] xl:w-[195px] flex items-center shrink-0">
            <span
              className="font-black text-[20px] lg:text-[24px] leading-none tracking-tight text-[#111111] inline-block md:w-[49px]"
              style={{ fontFamily: 'GTWalsheimPro-Bold' }}
            >
              03.
            </span>
            <div className="block h-[1.5px] bg-[#111111]/40 w-[60px] ml-[7px] mr-[12px] md:mx-0 md:w-[50px] md:ml-0 lg:w-[80px] lg:ml-0 xl:w-[109px] xl:ml-0" />
          </div>

          {/* Content Column Start */}
          <div className="flex items-baseline md:ml-[-4px] lg:ml-[-10px] xl:ml-[-24px]">
            <h2
              className="font-bold text-[20px] lg:text-[24px] leading-none capitalize tracking-tight text-[#111111]"
              style={{ fontFamily: 'GTWalsheimPro-Bold' }}
            >
              Our Range Of Frameworks And Cutting-Edge Technology Expertise
            </h2>
            <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-[#111111] rounded-full ml-[6px]" />
          </div>
        </motion.div>

        {/* Indented Content Block */}
        <div className="pl-0 md:pl-[95px] lg:pl-[135px] xl:pl-[195px] md:ml-[-4px] md:mr-[4px] lg:ml-[-10px] lg:mr-[10px] xl:ml-[-24px] xl:mr-[5px]">

          {/* Desktop Layout */}
          <div className="hidden lg:flex h-[515px] w-full overflow-hidden rounded-[2px]">
            {/* Left Vertical Menu */}
            <div className="w-1/2 shrink-0 bg-[#363266] pt-[20px] pb-[15px] pl-[20px] pr-[15px] flex flex-col relative h-full rounded-l-[2px]">
              <div data-lenis-prevent="true" className="flex flex-col relative h-full overflow-y-auto scroll-smooth custom-scrollbar pr-[10px]">
                {MENU_ITEMS.map((item) => {
                  const isActive = activeCategory === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveCategory(item.id)}
                      className={`flex justify-between items-center px-[20px] py-[24px] mb-[10px] mr-[10px] rounded-[10px] text-[18px] font-bold tracking-wide transition-all duration-200 cursor-pointer relative group ${isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10'
                        }`}
                      style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                    >
                      <div className="flex items-center gap-[20px]">
                        <div className="w-[24px] h-[24px] flex justify-center items-center opacity-90 text-white">
                          {item.iconNode}
                        </div>
                        <span>{item.label}</span>
                      </div>
                      {isActive && (
                        <span className="arrow-tech shrink-0">
                          <img
                            src="https://dd.mocup.in/assets/web/images/tools-arrow-vector.svg"
                            alt="arrow"
                            width={30}
                            height={30}
                            loading="lazy"
                            className="w-[30px] h-[30px] object-contain opacity-90"
                          />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="w-1/2 bg-[#E8E8E8] p-[30px] flex flex-col justify-start rounded-r-[2px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-[20px] text-left"
                >
                  {GRID_TECH_DATA[activeCategory as keyof typeof GRID_TECH_DATA]?.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-[32px] bg-[#f8f9fa] px-[20px] py-[16px] rounded-[10px] shadow-sm hover:shadow-md transition-all min-h-[65px]"
                    >
                      <div className="w-[65px] h-[35px] flex items-center justify-center shrink-0">
                        <img src={tech.img} alt={tech.name} className="w-[65px] max-h-[35px] object-contain" loading="lazy" />
                      </div>
                      <span
                        className="text-[14px] md:text-[16px] font-bold text-[#111111] tracking-wider uppercase leading-[20px]"
                        style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Layout (Accordion) */}
          <div className="lg:hidden space-y-4">
            {MENU_ITEMS.map((item) => {
              const isOpen = mobileActiveCategory === item.id;
              return (
                <div key={item.id} className="border border-slate-100 rounded-xl overflow-hidden bg-[#f8f9fc]">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex justify-between items-center px-4 py-4 bg-white text-[15px] font-bold tracking-wide text-slate-800 cursor-pointer"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-[24px] h-[24px] flex items-center justify-center text-[#f27820] shrink-0">
                        {item.iconNode}
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <span className="text-slate-400">{isOpen ? '▼' : '►'}</span>
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-[#f8f9fc] border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      {GRID_TECH_DATA[item.id as keyof typeof GRID_TECH_DATA]?.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-4 bg-white border border-slate-100 p-3 rounded-lg shadow-sm"
                        >
                          <div className="w-8 h-8 flex items-center justify-center shrink-0">
                            <img src={tech.img} alt={tech.name} className="max-w-full max-h-full object-contain" />
                          </div>
                          <span
                            className="text-[14px] font-bold text-slate-800"
                            style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                          >
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

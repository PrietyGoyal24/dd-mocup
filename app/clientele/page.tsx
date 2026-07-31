'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

const CLIENTELE_ALL_LOGOS = [
  // Row 1
  { name: "IndiGo", url: "https://dd.mocup.in/assets/web/images/clientele/indigo.jpg" },
  { name: "TOTO", url: "https://dd.mocup.in/assets/web/images/clientele/toto.jpg" },
  { name: "The Wall Street Journal", url: "https://dd.mocup.in/assets/web/images/clientele/wall-street-journal-logo.jpg" },
  { name: "Aeiforia", url: "https://dd.mocup.in/assets/web/images/clientele/aeiforia.jpg" },
  { name: "Fortis", url: "https://dd.mocup.in/assets/web/images/clientele/fortis%20(1).jpg" },
  { name: "Honeywell", url: "https://dd.mocup.in/assets/web/images/clientele/honeywell.jpg" },
  { name: "Apollo Hospitals", url: "https://dd.mocup.in/assets/web/images/clientele/Apollo%20Hospital%20Logo.jpg" },
  { name: "IBS Hospitals", url: "https://dd.mocup.in/assets/web/images/clientele/QRG-Health-City-Pulmonologist-Chest-Physician-Asthma-Allergy-Specialist-Faridabad-28d972%20(1).jpg" },

  // Row 2
  { name: "British Council", url: "https://dd.mocup.in/assets/web/images/clientele/british-council-1-logo-png-transparent.jpg" },
  { name: "TNN", url: "https://dd.mocup.in/assets/web/images/clientele/tnnbda.jpg" },
  { name: "Vivo", url: "https://dd.mocup.in/assets/web/images/clientele/vivo-Phone-logo.jpg" },
  { name: "Panasonic", url: "https://dd.mocup.in/assets/web/images/clientele/panasonic-logo.jpg" },
  { name: "St Thomas School", url: "https://dd.mocup.in/assets/web/images/clientele/stthomas.jpg" },
  { name: "G D Goenka La Petite", url: "https://dd.mocup.in/assets/web/images/clientele/gd%20goenka.jpg" },
  { name: "Maven Magnet", url: "https://dd.mocup.in/assets/web/images/clientele/maven.jpg" },
  { name: "Benori", url: "https://dd.mocup.in/assets/web/images/clientele/benori.jpg" },

  // Row 3
  { name: "Cinevidya", url: "https://dd.mocup.in/assets/web/images/clientele/cinevidya-logo.jpg" },
  { name: "Trinity School", url: "https://dd.mocup.in/assets/web/images/clientele/trinity.jpg" },
  { name: "National Geographic", url: "https://dd.mocup.in/assets/web/images/clientele/national-geographic.jpg" },
  { name: "TonsBridge", url: "https://dd.mocup.in/assets/web/images/clientele/thetonsbridge-footer.jpg" },
  { name: "Plato", url: "https://dd.mocup.in/assets/web/images/clientele/plato.jpg" },
  { name: "Heston International", url: "https://dd.mocup.in/assets/web/images/clientele/beston.jpg" },
  { name: "Bolan", url: "https://dd.mocup.in/assets/web/images/clientele/bolan.jpg" },
  { name: "Bose Brothers", url: "https://dd.mocup.in/assets/web/images/clientele/bosebrothersarchitects.jpg" },

  // Row 4
  { name: "Cognizant", url: "https://dd.mocup.in/assets/web/images/clientele/Cognizant-Logo.jpg" },
  { name: "Brats n Cuties", url: "https://dd.mocup.in/assets/web/images/clientele/brats-Cuties.jpg" },
  { name: "Barista", url: "https://dd.mocup.in/assets/web/images/clientele/barista.jpg" },
  { name: "The Shri Ram School", url: "https://dd.mocup.in/assets/web/images/clientele/the%20shriram%20school.jpg" },
  { name: "Kohler", url: "https://dd.mocup.in/assets/web/images/clientele/kohler.jpg" },
  { name: "Swaraj Abhiyan", url: "https://dd.mocup.in/assets/web/images/clientele/swaraj-abhiyan%20(1).jpg" },
  { name: "Glue", url: "https://dd.mocup.in/assets/web/images/clientele/glue.jpg" },
  { name: "Elsevier", url: "https://dd.mocup.in/assets/web/images/clientele/elsevior.jpg" },

  // Row 5
  { name: "The Amayaa", url: "https://dd.mocup.in/assets/web/images/clientele/theamayaa.jpg" },
  { name: "Rivatas", url: "https://dd.mocup.in/assets/web/images/clientele/Rivatas.jpg" },
  { name: "Asawa", url: "https://dd.mocup.in/assets/web/images/clientele/ata-logo.jpg" },
  { name: "Ekta Shakti", url: "https://dd.mocup.in/assets/web/images/clientele/Ekta-Shakti-final.jpg" },
  { name: "Design Plus", url: "https://dd.mocup.in/assets/web/images/clientele/designplus.jpg" },
  { name: "Icomos India", url: "https://dd.mocup.in/assets/web/images/clientele/icomos.jpg" },
  { name: "Harry's", url: "https://dd.mocup.in/assets/web/images/clientele/harrys%20(1).jpg" },
  { name: "IDCube", url: "https://dd.mocup.in/assets/web/images/clientele/idcube-offerid-cube-logo.jpg" },

  // Row 6
  { name: "LPS", url: "https://dd.mocup.in/assets/web/images/clientele/Lakshmi%20Precision%20Screws%20Ltd.jpg" },
  { name: "Pink Noise", url: "https://dd.mocup.in/assets/web/images/clientele/pink-noise-web-01%20(1).jpg" },
  { name: "Northshore Medical", url: "https://dd.mocup.in/assets/web/images/clientele/nmac%20(1).jpg" },
  { name: "Science College", url: "https://dd.mocup.in/assets/web/images/clientele/science-college.jpg" },
  { name: "Sanden", url: "https://dd.mocup.in/assets/web/images/clientele/sanden-logo-big.jpg" },
  { name: "Modenext", url: "https://dd.mocup.in/assets/web/images/clientele/modenext.jpg" },
  { name: "Archade Foundation", url: "https://dd.mocup.in/assets/web/images/clientele/archade-foundation.jpg" },
  { name: "Colorplast", url: "https://dd.mocup.in/assets/web/images/clientele/colorplast_logo_hd.jpg" },

  // Row 7
  { name: "Lavazza", url: "https://dd.mocup.in/assets/web/images/clientele/barista-lavzaa.jpg" },
  { name: "Mani Mukta", url: "https://dd.mocup.in/assets/web/images/clientele/mm_logo_long.jpg" },
  { name: "Girbana", url: "https://dd.mocup.in/assets/web/images/clientele/girbana_logo.jpg" },
  { name: "Zeedilse", url: "https://dd.mocup.in/assets/web/images/clientele/zee-dilse.jpg" },
  { name: "Omco", url: "https://dd.mocup.in/assets/web/images/clientele/omco.jpg" },
  { name: "Mgtwell", url: "https://dd.mocup.in/assets/web/images/clientele/mgtwell-logo.jpg" },
  { name: "Jindal Steel & Power", url: "https://dd.mocup.in/assets/web/images/clientele/Jindal_Steel_and_Power_Logo.svg.jpg" },
  { name: "Flowmore", url: "https://dd.mocup.in/assets/web/images/clientele/flowmore.jpg" },

  // Row 8
  { name: "Buildheights", url: "https://dd.mocup.in/assets/web/images/clientele/Build_Height-Final%20Logo.jpg" },
  { name: "Prop Right", url: "https://dd.mocup.in/assets/web/images/clientele/propright%20(1).jpg" },
  { name: "Distinct", url: "https://dd.mocup.in/assets/web/images/clientele/DISTINCT%20logo%20final%2002-1.jpg" },
  { name: "SKETS Studio", url: "https://dd.mocup.in/assets/web/images/clientele/skets-studio.jpg" },
  { name: "Aamby Valley City", url: "https://dd.mocup.in/assets/web/images/clientele/aamby.jpg" },
  { name: "Risalat", url: "https://dd.mocup.in/assets/web/images/clientele/risalat.jpg" },
  { name: "Al-Falah School", url: "https://dd.mocup.in/assets/web/images/clientele/afset.jpg" },
  { name: "SKDAS Associated Architects", url: "https://dd.mocup.in/assets/web/images/clientele/skdas-n.jpg" },

  // Row 9
  { name: "Biofloc Bharat", url: "https://dd.mocup.in/assets/web/images/clientele/biofloc-bharat-svg.jpg" },
  { name: "Centime", url: "https://dd.mocup.in/assets/web/images/clientele/centime-logo-400.jpg" },
  { name: "MapmyIndia", url: "https://dd.mocup.in/assets/web/images/clientele/mapmyindia-og.jpg" },
  { name: "Abaxial", url: "https://dd.mocup.in/assets/web/images/clientele/abaxial_logo.jpg" },
  { name: "Rajbala Foundation", url: "https://dd.mocup.in/assets/web/images/clientele/rajbala-foundation.jpg" },
  { name: "RD Enviro", url: "https://dd.mocup.in/assets/web/images/clientele/rdenviro.jpg" },
  { name: "Nostri", url: "https://dd.mocup.in/assets/web/images/clientele/nostri-architects%20(1).jpg" },
  { name: "HA+D", url: "https://dd.mocup.in/assets/web/images/clientele/hlx.jpg" },

  // Row 10
  { name: "DrWell.Co", url: "https://dd.mocup.in/assets/web/images/clientele/drwell_logo.jpg" },
  { name: "Zuhouz", url: "https://dd.mocup.in/assets/web/images/clientele/zuhouz%20(1).jpg" },
  { name: "Trinity School", url: "https://dd.mocup.in/assets/web/images/clientele/trinity.jpg" },
  { name: "Dulux", url: "https://dd.mocup.in/assets/web/images/clientele/dulux-logo.jpg" },
  { name: "Dell", url: "https://dd.mocup.in/assets/web/images/clientele/Dell_Logo.svg.jpg" },
  { name: "Delhi Police", url: "https://dd.mocup.in/assets/web/images/clientele/DP.jpg" },
  { name: "Godrej", url: "https://dd.mocup.in/assets/web/images/clientele/godrej.jpg" },
  { name: "Hycinth", url: "https://dd.mocup.in/assets/web/images/clientele/hycinth.jpg" },

  // Row 11
  { name: "Jakson", url: "https://dd.mocup.in/assets/web/images/clientele/jakson.jpg" },
  { name: "Kinapse", url: "https://dd.mocup.in/assets/web/images/clientele/KINAPSE-WEBSITE-FULL-COLOR-LOGO-FINAL-300x164.jpg" },
  { name: "Auscomp", url: "https://dd.mocup.in/assets/web/images/clientele/auscomp-computers.jpg" },
  { name: "NAMC", url: "https://dd.mocup.in/assets/web/images/clientele/namc.jpg" },
  { name: "Northstar", url: "https://dd.mocup.in/assets/web/images/clientele/northstar.jpg" },
];

export default function ClientelePage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="pt-32 sm:pt-70 pb-24">
          <div className="w-full px-5 md:pl-[65px] md:pr-[64px] flex flex-col z-10 relative">
            
            {/* Mark ①: Accent line starts at 1st Cyan Line (left margin) and ends at 2nd Cyan Line */}
            <div className="flex items-center mb-[40px] lg:mb-[50px] w-full justify-between">
              <div className="flex items-center flex-1">
                {/* Hanging Accent Line Column */}
                <div className="w-[120px] md:w-[95px] lg:w-[135px] xl:w-[174px] flex items-center shrink-0">
                  <div className="block h-[1.5px] bg-[#111111]/40 w-[60px] ml-[7px] mr-[12px] md:mx-0 md:w-[50px] md:ml-0 lg:w-[80px] lg:ml-0 xl:w-[125px] xl:ml-0" />
                </div>
                
                {/* Heading CLIENTELE. (Starts at 2nd Cyan Line) */}
                <div className="flex items-baseline md:ml-[-4px] lg:ml-[-10px] xl:ml-[-24px]">
                  <h1
                    className="font-bold text-[32px] sm:text-[40px] leading-none tracking-tight text-black m-0 p-0 uppercase"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
                  >
                    CLIENTELE.
                  </h1>
                </div>
              </div>
            </div>
     
            {/* Mark ② & ③: Indented Content Block (Starts at 2nd Cyan Line, ends at 3rd Cyan Line) */}
            <div className="pl-0 md:pl-[95px] lg:pl-[135px] xl:pl-[174px] md:ml-[-4px] md:mr-[4px] lg:ml-[-10px] lg:mr-[10px] xl:ml-[-24px] xl:mr-[5px]">
              
              {/* Subheading (Starts at 2nd Cyan Line) */}
              <h2
                className="text-[20px] sm:text-[25px] md:text-[26px] font-bold text-[#111111] mb-3 leading-snug"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro', sans-serif" }}
              >
                Inspired design, bold solutions &amp; bottom line results.
              </h2>

              {/* Description Paragraph (Starts at 2nd Cyan Line) */}
              <p
                className="text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed text-[#444444] mb-10 lg:mb-14"
                style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif" }}
              >
                We turn information into experiences people care about. Strategic Thinking. Compelling Design.
              </p>

              {/* Logo Grid: Starts at 2nd Cyan Line (Mark ②) & Ends at 3rd Cyan Line (Mark ③) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-t border-l border-[#b3b3b3] border-dotted w-full">
                {CLIENTELE_ALL_LOGOS.map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="border-r border-b border-[#b3b3b3] border-dotted flex items-center justify-center p-4 aspect-square bg-white transition-all duration-300 hover:bg-[#fafafa]"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="w-[85%] h-[85%] object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

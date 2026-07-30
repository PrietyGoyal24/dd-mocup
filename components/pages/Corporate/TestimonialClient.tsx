'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  rating: number;
  content: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 'bn-sinha',
    name: 'B N Sinha',
    role: 'Director, AR Group',
    avatar: 'https://dd.mocup.in/assets/web/images/bn-sinha.jpg',
    rating: 5,
    content:
      'Creativity is often believed to be an inborn talent, and if the talent mixes up with astute professionalism it is bound to deliver wonders. Jyoti and his venture DesignDot does the same. He helped our firm with fresh designs for our logo, web site, etc. and they did an amazing job ... We really appreciated their creativity, their intelligence ability to work with our content. They developed fresh,design concept that is on par or better than any other firm in our field. DesignDot is a great company to work with! Very professional and prompt, highly recommended for all kinds of design work. Have done multiple jobs and all have come out perfect. I wish all the very best in all of their endeavours.',
  },
  {
    id: 'pratyush-prasan',
    name: 'Pratyush Prasan',
    role: 'Director (technical), Habitat Alliance',
    rating: 5,
    content:
      'Designdot did a good job with our website and gave us exactly what we needed. We wish them success.',
  },
  {
    id: 'mihir-dutta',
    name: 'Mihir Dutta',
    role: 'CEO, Chatpata Bong',
    rating: 5,
    content:
      'We really appreciate the work done by Designdot and would love to recommend them for their splendid effort.',
  },
  {
    id: 'shashank-pokhriyal',
    name: 'Shashank Pokhriyal',
    role: 'CEO',
    avatar: 'https://dd.mocup.in/assets/web/images/Shashank.jpg',
    rating: 5,
    content:
      'DesignDot is a group of highly professional people. They are highly recommended.',
  },
  {
    id: 'dr-satish-chandra',
    name: 'DR.SATISH CHANDRA',
    role: 'ADVISOR, AFGHANISTAN RAILWAY AUTHORITY',
    rating: 5,
    content:
      'I have known Mr.Jyotirmoy Sinha - since 2011 and found him a creative thinker, and an accomplished professional. His digital skills and logical mindset -to appreciate the context of a problem - have provided excellent integration of AI and Technology based,- Institutional Solutions for many for-profit and non-profit organizations. As a retired Civil Servant, as an Academician, Consultant and Social - entrepreneur, -I rate DesignDot a credible Organization under the stewardship of Mr. Jyotirmoy Sinha. DesignDot has the potential to emerge as the World Class- Technology Solution Providing Company. I wish DesignDot great success.',
  },
  {
    id: 'kennette-burgess',
    name: 'Kennette Burgess',
    role: 'NCC LTD. Director, International Strategic Marketing & Business Development',
    avatar: 'https://dd.mocup.in/assets/web/images/keneete.jpg',
    rating: 5,
    content:
      'Had the pleasure of working with DesignDot after my company hired him years ago to complete web development projects for my clients. He did wonderful work for my clients. Reasonably priced. Websites were beautiful and functional with CMS (content management systems) and other features like flash sites, flash banners, document libraries, etc. Would recommend them for your web development project.',
  },
];

export default function TestimonialClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: '',
    phone: '',
    securityCodeInput: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string>('');
  const [securityError, setSecurityError] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  // Function to generate random 4-digit security code
  const generateRandomCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);
  };

  useEffect(() => {
    generateRandomCode();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'securityCodeInput') {
      setSecurityError(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.securityCodeInput !== generatedCode) {
      setSecurityError(true);
      generateRandomCode(); // Security code changes every time on error or submit as requested!
      return;
    }

    setSubmittedSuccess(true);
    setSecurityError(false);
    // Reset form after successful submission and generate new security code
    setFormData({
      name: '',
      email: '',
      companyName: '',
      message: '',
      phone: '',
      securityCodeInput: '',
    });
    setSelectedFile(null);
    generateRandomCode(); // Security code changes again after submit!

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 5000);
  };

  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="pt-36 sm:pt-44 pb-20">
          {/* Header Section */}
          <div className="w-full px-6 lg:px-[98px] pt-14 pb-10">
            <div className="flex items-start gap-6 sm:gap-8">
              {/* Left Accent Line */}
              <div className="w-[110px] sm:w-[130px] h-[2px] bg-[#727272] mt-4 sm:mt-5 shrink-0"></div>

              {/* Right Content Column: Heading + Paragraph */}
              <div className="flex-1">
                <h1
                  className="text-[36px] sm:text-[32px] font-bold tracking-tight text-[#111111] uppercase leading-none mb-8 sm:mb-12"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  TESTIMONIAL.
                </h1>

                <p
                  className="text-[#333333] text-[16px] sm:text-[18px] lg:text-[19px] font-normal leading-[1.6] w-full"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  If you are enthusiastic about your profession with a strong thirst for challenges and if you are also talented, it would be a good idea<br className="hidden sm:inline" /> to meet us.
                </p>
              </div>
            </div>
          </div>


          {/* Testimonial Form Section */}
          <div className="w-full px-6 lg:px-[98px] py-4">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
              {/* Row 1: Name, Email, Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#d96716] transition-colors"
                  />
                </div>

                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#d96716] transition-colors"
                  />
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#d96716] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Message Full Width */}
              <div className="w-full mt-2">
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#d96716] transition-colors resize-none"
                />
              </div>

              {/* Row 3: Phone Number, File Input, Security Code */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-end mt-2">
                {/* Phone Number */}
                <div className="w-full">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#d96716] transition-colors"
                  />
                </div>

                {/* Choose File Button */}
                <div className="w-full flex items-center gap-3 border-b border-[#f27820] pb-2">
                  <label
                    htmlFor="file-upload"
                    className="bg-[#efefef] hover:bg-[#e2e2e2] text-[#111111] text-[14px] px-4 py-1.5 border border-[#cccccc] cursor-pointer transition-colors shrink-0 shadow-none rounded-none"
                  >
                    Choose File
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <span className="text-[14px] text-[#777777] truncate">
                    {selectedFile ? selectedFile.name : 'No file chosen'}
                  </span>
                </div>

                {/* Enter Security Code & Security Code Badge */}
                <div className="w-full flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      name="securityCodeInput"
                      required
                      placeholder="Enter Security Code → *"
                      value={formData.securityCodeInput}
                      onChange={handleInputChange}
                      className={`w-full bg-transparent border-b ${securityError ? 'border-red-600' : 'border-[#f27820]'
                        } py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none transition-colors`}
                    />
                    {securityError && (
                      <span className="absolute left-0 -bottom-6 text-[12px] text-red-600 font-semibold">
                        Incorrect code. Generated new code!
                      </span>
                    )}
                  </div>

                  {/* Dynamic Security Code Badge */}
                  <div
                    onClick={generateRandomCode}
                    title="Click to generate new security code"
                    className="bg-[#f27820] hover:bg-[#d96716] text-white font-bold text-[22px] px-6 py-2 tracking-widest cursor-pointer select-none shrink-0 transition-colors"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    {generatedCode}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  className="bg-[#f27820] hover:bg-[#d96716] text-white text-[16px] font-bold px-12 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  Submit
                </button>

                {submittedSuccess && (
                  <span className="text-green-700 font-semibold text-[15px] bg-green-50 border border-green-200 px-4 py-2">
                    ✓ Thank you! Your testimonial has been submitted successfully.
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Section Divider Line */}
          <div className="w-full px-6 lg:px-[98px] my-1 sm:my-12">
            <div className="w-full h-[8px] bg-[#666666]"></div>
          </div>

          {/* Testimonials 3-Column Masonry Grid */}
          <div className="w-full px-6 lg:px-[98px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
              {/* Column 1: B N Sinha & Kennette Burgess */}
              <div className="flex flex-col gap-6 sm:gap-8">
                {[testimonialsData[0], testimonialsData[5]].map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 sm:p-8 border border-black/5 flex flex-col justify-between rounded-none"
                  >
                    <div>
                      <div className="flex items-start gap-4 sm:gap-5 mb-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-[#d0d0d0] overflow-hidden rounded-none flex items-center justify-center">
                          {item.avatar ? (
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <svg className="w-full h-full text-[#808080]" viewBox="0 0 100 100" fill="currentColor">
                              <rect width="100" height="100" fill="#d0d0d0" />
                              <circle cx="50" cy="40" r="20" fill="#808080" />
                              <path d="M 20 88 C 20 65, 32 60, 50 60 C 68 60, 80 65, 80 88 Z" fill="#808080" />
                            </svg>
                          )}
                        </div>

                        <div className="flex flex-col justify-start pt-1">
                          <h3
                            className="text-[16px] sm:text-[18px] font-bold text-[#111111] leading-snug"
                            style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                          >
                            {item.name}
                          </h3>
                          <p
                            className="text-[13px] sm:text-[14px] text-[#444444] font-normal leading-tight mt-1"
                            style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                          >
                            {item.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[#f27820] text-[16px] mb-4">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>

                      <p
                        className="text-[#333333] text-[14px] sm:text-[15px] font-normal leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2: Pratyush Prasan & Shashank Pokhriyal */}
              <div className="flex flex-col gap-6 sm:gap-8">
                {[testimonialsData[1], testimonialsData[3]].map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 sm:p-8 border border-black/5 flex flex-col justify-between rounded-none"
                  >
                    <div>
                      <div className="flex items-start gap-4 sm:gap-5 mb-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-[#d0d0d0] overflow-hidden rounded-none flex items-center justify-center">
                          {item.avatar ? (
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <svg className="w-full h-full text-[#808080]" viewBox="0 0 100 100" fill="currentColor">
                              <rect width="100" height="100" fill="#d0d0d0" />
                              <circle cx="50" cy="40" r="20" fill="#808080" />
                              <path d="M 20 88 C 20 65, 32 60, 50 60 C 68 60, 80 65, 80 88 Z" fill="#808080" />
                            </svg>
                          )}
                        </div>

                        <div className="flex flex-col justify-start pt-1">
                          <h3
                            className="text-[16px] sm:text-[18px] font-bold text-[#111111] leading-snug"
                            style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                          >
                            {item.name}
                          </h3>
                          <p
                            className="text-[13px] sm:text-[14px] text-[#444444] font-normal leading-tight mt-1"
                            style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                          >
                            {item.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[#f27820] text-[16px] mb-4">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>

                      <p
                        className="text-[#333333] text-[14px] sm:text-[15px] font-normal leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 3: Mihir Dutta & DR.SATISH CHANDRA */}
              <div className="flex flex-col gap-6 sm:gap-8">
                {[testimonialsData[2], testimonialsData[4]].map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 sm:p-8 border border-black/5 flex flex-col justify-between rounded-none"
                  >
                    <div>
                      <div className="flex items-start gap-4 sm:gap-5 mb-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-[#d0d0d0] overflow-hidden rounded-none flex items-center justify-center">
                          {item.avatar ? (
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <svg className="w-full h-full text-[#808080]" viewBox="0 0 100 100" fill="currentColor">
                              <rect width="100" height="100" fill="#d0d0d0" />
                              <circle cx="50" cy="40" r="20" fill="#808080" />
                              <path d="M 20 88 C 20 65, 32 60, 50 60 C 68 60, 80 65, 80 88 Z" fill="#808080" />
                            </svg>
                          )}
                        </div>

                        <div className="flex flex-col justify-start pt-1">
                          <h3
                            className="text-[16px] sm:text-[18px] font-bold text-[#111111] leading-snug"
                            style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                          >
                            {item.name}
                          </h3>
                          <p
                            className="text-[13px] sm:text-[14px] text-[#444444] font-normal leading-tight mt-1"
                            style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                          >
                            {item.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-[#f27820] text-[16px] mb-2">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>

                      <p
                        className="text-[#333333] text-[14px] sm:text-[15px] font-normal leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.content}
                      </p>
                    </div>
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

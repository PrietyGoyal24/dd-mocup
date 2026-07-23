'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ContactUsPageClient() {
  // Capture local time dynamic rendering
  const [localTime, setLocalTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };
      // Format to get `/ Fri, 8 PM /` style
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
      // Adjust format to match "/ Fri, 8:00 PM /" style
      setLocalTime(`/ ${formatted.replace(',', '')} /`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organisation: '',
    location: '',
    projectBudget: '',
    service: '',
    description: '',
    captchaInput: '',
  });

  const [captchaCode, setCaptchaCode] = useState('7198');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Generate a random captcha code on mount
  useEffect(() => {
    regenerateCaptcha();
  }, []);

  const regenerateCaptcha = () => {
    const chars = '0123456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Check captcha
    if (formData.captchaInput !== captchaCode) {
      setErrorMessage('Security code is incorrect. Please try again.');
      return;
    }

    // Success simulation
    setFormSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#fffbf8] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white">
      <style>{`
        .custom-sec-left {
          width: 125px;
          flex-shrink: 0;
          display: block;
        }
        .custom-line-span {
          width: 100px;
          height: 1.5px;
          background-color: #707070;
          display: inline-block;
        }
        .guideline-sec-left {
          display: block;
          flex-shrink: 0;
        }
        .guideline-line-span {
          width: 140px;
          height: 1.5px;
          background-color: #707070;
          display: inline-block;
          margin-right: 25px;
          margin-top: 12px;
          vertical-align: top;
        }
        @media (max-width: 1023px) {
          .custom-sec-left {
            display: none;
          }
          .guideline-line-span {
            display: none;
          }
        }
      `}</style>
      {/* Navigation Header */}
      <Navbar theme="light" />

      <main className="w-full" style={{ paddingTop: '130px' }}>
        {/* Banner Top Strip Message */}
        <div className="w-full flex justify-center bg-[#fffbf8]" style={{ paddingTop: '90px', paddingBottom: '70px' }}>
          <div className="bg-[#083169] inline-flex items-center justify-center text-center" style={{ padding: '10px' }}>
            <h5
              className="text-white uppercase"
              style={{
                fontFamily: 'GTWalsheimPro-Bold',
                fontSize: '24px',
                lineHeight: '30px',
                letterSpacing: '2px',
                fontWeight: 700
              }}
            >
              Looking for something special? Contact us now and let your ideas become reality!
            </h5>
          </div>
        </div>

        {/* Video & Banner Text Section */}
        <div className="about-us-video w-full pb-0 bg-[#fffbf8]">
          <div className="section-container w-full max-w-[1840px] mx-auto px-5 md:pl-[65px] md:pr-[70px]">
            <div className="video-outer w-full">
              <div className="video-inner relative w-full overflow-hidden bg-black">
                {/* Desktop Video background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="1920"
                  height="240"
                  className="w-full h-auto hidden md:block"
                >
                  <source src="https://dd.mocup.in/assets/web/images/video/contact-video.mp4" type="video/mp4" />
                </video>

                {/* Mobile Video background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="1920"
                  height="240"
                  className="w-full h-auto block md:hidden"
                >
                  <source src="https://dd.mocup.in/assets/web/images/video/contact-mobile.mp4" type="video/mp4" />
                </video>

                {/* Video overlay texts */}
                <div className="absolute left-[20px] md:left-[50px] lg:left-[100px] top-[50%] -translate-y-1/2 text-left z-10 w-full max-w-[90%]">
                  <h1
                    className="text-[#f58331] uppercase mb-0 drop-shadow-lg"
                    style={{
                      fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'",
                      fontSize: '75px',
                      lineHeight: '110px',
                      letterSpacing: '1px',
                      fontWeight: 700
                    }}
                  >
                    CONTACT US<span className="inline-block w-[6px] h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-white ml-2 mb-[2px]"></span>
                  </h1>
                  <p
                    className="text-[#f58331] drop-shadow-md flex items-center mt-[30px]"
                    style={{
                      fontFamily: 'GTWalsheimPro-Regular',
                      fontSize: '22px',
                      lineHeight: '22px',
                      letterSpacing: '1px',
                      fontWeight: 400
                    }}
                  >
                    timing is everything<span className="inline-block w-[6px] h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-[#f58331] ml-2 mb-[2px]"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Let's talk description paragraph */}
        <div className="w-full pb-12 bg-[#fffbf8]">
          <div className="w-full max-w-[1840px] mx-auto px-5 md:pl-[65px] md:pr-[64px] text-left">
            <h2
              className="text-[#2a255e] uppercase"
              style={{
                fontFamily: 'GTWalsheimPro-Regular',
                fontSize: '40px',
                lineHeight: '60px',
                letterSpacing: '3px',
                fontWeight: 400,
                marginTop: '50px',
                marginBottom: '20px',
              }}
            >
              Let’s talk<span className="inline-block w-2 h-2 rounded-full bg-black ml-1.5 align-baseline"></span>
            </h2>
            <p
              className="text-black font-normal"
              style={{
                fontFamily: 'GTWalsheimPro-Regular',
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '1px',
                marginTop: '0px',
                marginBottom: '10px',
              }}
            >
              No matter what your ask—big or small—we’re ready to talk. We’re all about working together to solve your gnarliest, Just send us your questions or concerns by sending a proposal and we will give you the help you need.
            </p>
          </div>
        </div>

        {/* Section One: Form and Guidelines */}
        <section className="bg-[#fffbf8] py-16">
          <div className="w-full max-w-[1840px] mx-auto px-5 md:pl-[98px] md:pr-[64px]">

            {/* Divider styling line next to Contact Form header */}
            <div className="flex items-center mb-12 w-full justify-between">
              <div className="flex items-center flex-1 pl-[30px] lg:pl-[1px]">
                {/* Left Gutter / Prefix Column with line */}
                <div className="w-[120px] md:w-[95px] lg:w-[135px] xl:w-[195px] flex items-center shrink-0">
                  <div className="block h-[1.5px] bg-gray-500 w-[80px] ml-[7px] mr-[12px] md:mx-0 md:w-[65px] md:ml-0 lg:w-[100px] lg:ml-0 xl:w-[130px] xl:ml-0" />
                </div>
                
                {/* Heading Column */}
                <div className="flex items-baseline md:ml-[-4px] lg:ml-[-10px] xl:ml-[-24px]">
                  <h3
                    className="text-[32px] font-bold text-[#111111] tracking-wide"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    Contact Form<span className="inline-block w-1.5 h-1.5 bg-black rounded-full ml-1 align-baseline"></span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Grid wrapper with matching columns layout */}
            <div className="w-full pl-0 md:pl-[95px] lg:pl-[135px] xl:pl-[195px] md:ml-[-4px] lg:ml-[-10px] xl:ml-[-24px]">
              <div className="w-full flex flex-col lg:flex-row items-start">

                {/* Left Column: Interactive Form */}
                <div className="w-full lg:w-[45%] flex flex-col text-left">
                  {formSubmitted ? (
                    <div className="thank-you-contact-page bg-[#fcf5f5] border border-gray-100 p-8 rounded-xl text-left">
                      <h3 className="text-[#f27820] text-[28px] font-extrabold uppercase mb-4" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>
                        Thank You!
                      </h3>
                      <p className="text-[#111] text-[18px] leading-[1.7]" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>
                        Your request has been successfully submitted. Our business development team will review details and contact you shortly in the next 24 hours.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-6 bg-[#083169] text-white font-bold px-6 py-3 text-[14px] uppercase tracking-wider hover:bg-black transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left w-full">
                      {errorMessage && (
                        <div className="bg-red-50 text-red-600 border border-red-150 p-4 rounded text-[14px] font-bold">
                          {errorMessage}
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="name *"
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[50px] text-[24px] font-light text-gray-500 placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <input
                          type="number"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="phone *"
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[50px] text-[24px] font-light text-gray-500 placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email *"
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[50px] text-[24px] font-light text-gray-500 placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          name="organisation"
                          value={formData.organisation}
                          onChange={handleInputChange}
                          placeholder="organisation"
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[50px] text-[24px] font-light text-gray-500 placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="location *"
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[50px] text-[24px] font-light text-gray-500 placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <select
                          name="projectBudget"
                          value={formData.projectBudget}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[50px] text-[24px] font-light text-gray-500 px-[15px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        >
                          <option value="">project budget...</option>
                          <option value="Not Sure">Not Sure</option>
                          <option value="$3000 to $10000">$3000 to $10000</option>
                          <option value="$10000 to $20000">$10000 to $20000</option>
                          <option value="$20000 to $30000">$20000 to $30000</option>
                          <option value="$30000 to $50000">$30000 to $50000</option>
                          <option value="$50000 to $100000">$50000 to $100000</option>
                          <option value="$100000 and above">$100000 and above</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          placeholder="services *"
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[50px] text-[24px] font-light text-gray-500 placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <input
                          type="file"
                          name="file_data"
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[50px] text-[16px] text-gray-500 pt-[10px] px-[21px] focus:outline-none rounded-sm file:mr-3 file:py-[2px] file:px-2 file:border file:border-[#767676] file:bg-[#efefef] file:text-black file:rounded-[2px] file:cursor-pointer hover:file:bg-[#e5e5e5]"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="description"
                          className="w-full border border-gray-300 bg-[#fcf5f5] h-[185px] text-[24px] font-light text-gray-500 placeholder:text-gray-400 px-[20px] py-[10px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase resize-none"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        />
                      </div>

                      {/* Interactive Captcha Section */}
                      <div className="flex items-center gap-[10px] mt-2 w-full">
                        <input
                          type="text"
                          name="captchaInput"
                          required
                          value={formData.captchaInput}
                          onChange={handleInputChange}
                          placeholder="enter security code → *"
                          className="flex-1 border border-gray-300 bg-[#fcf5f5] h-[50px] text-[24px] font-light text-gray-500 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                          style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                        />
                        <div className="flex items-center justify-center bg-[#f58331] text-white text-[24px] font-normal px-6 h-[50px] rounded-sm select-none">
                          {captchaCode}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-[#083169] text-white hover:bg-black text-[24px] font-bold h-[68px] border border-[#d3d3d3] transition-colors tracking-wide mt-5 cursor-pointer"
                        style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                      >
                        SUBMIT
                      </button>
                    </form>
                  )}
                </div>

                {/* Right Column: Guidelines */}
                <div className="w-full lg:w-[50%] relative lg:left-[8%] flex flex-col gap-10 mt-12 lg:mt-0 text-left">

                  {/* Rule 1 */}
                  <div className="flex items-start mb-[50px]">
                    <div className="guideline-sec-left">
                      <span className="guideline-line-span"></span>
                    </div>
                    <div className="flex-1 flex flex-col pr-[10px] lg:pr-[40px]">
                      <b className="text-[22px] text-[#000000] font-bold mb-[15px] whitespace-nowrap" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>
                        Put Forward Your Requirement
                      </b>
                      <p className="text-[18px] text-[#000000] font-normal leading-[30px]" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>
                        Fill up the form given on the right side of this page, and within 24 hours, one of our business development executive will reach you for further communication.
                      </p>
                    </div>
                  </div>

                  {/* Rule 2 */}
                  <div className="flex items-start mb-[50px]">
                    <div className="guideline-sec-left">
                      <span className="guideline-line-span"></span>
                    </div>
                    <div className="flex-1 flex flex-col pr-[10px] lg:pr-[20px]">
                      <b className="text-[22px] text-[#000000] font-bold mb-[15px] whitespace-nowrap" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>
                        Sign Non-Disclosure Agreement:
                      </b>
                      <p className="text-[18px] text-[#000000] font-normal leading-[30px]" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>
                        Through NDA, we make you feel secure. Your idea will be yours. Signing up an NDA assures you the privacy of your idea and project.
                      </p>
                    </div>
                  </div>

                  {/* Rule 3 */}
                  <div className="flex items-start mb-[50px]">
                    <div className="guideline-sec-left">
                      <span className="guideline-line-span"></span>
                    </div>
                    <div className="flex-1 flex flex-col pr-[10px] lg:pr-[20px]">
                      <b className="text-[22px] text-[#000000] font-bold mb-[15px] whitespace-nowrap" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>
                        Analyzing Your Requirement:
                      </b>
                      <p className="text-[18px] text-[#000000] font-normal leading-[30px]" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>
                        As soon as you signed up the NDA, we shall analyze the requirements put forward by you. Our team of experts will read and analyze the same, and will get back to you within few hours.
                      </p>
                    </div>
                  </div>

                  {/* Rule 4 */}
                  <div className="flex items-start mb-[50px]">
                    <div className="guideline-sec-left">
                      <span className="guideline-line-span"></span>
                    </div>
                    <div className="flex-1 flex flex-col pr-[10px] lg:pr-[20px]">
                      <b className="text-[22px] text-[#000000] font-bold mb-[15px] whitespace-nowrap" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>
                        Estimated Budget:
                      </b>
                      <p className="text-[18px] text-[#000000] font-normal leading-[30px]" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>
                        Once our team of <span className="font-extrabold text-[#111]">experts</span> and business development managers are done with analyzing the project and compilation of necessary resources required for the project, <span className="font-extrabold text-[#111]">we shall send you</span> with estimated budget or cost and estimated time required for completion of project successfully.
                      </p>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Section Two: Address Cards */}
        <section className="bg-[#fffbf8] py-16">
          <div className="w-full max-w-[1200px] mx-auto px-5 md:pl-[65px] md:pr-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Card 1: India */}
              <div
                className="group flex flex-col justify-between items-start h-[580px] p-9 bg-[#fcf5f5] hover:bg-[#f47820] hover:text-white transition-all duration-[900ms] border-[5px] border-white rounded-[20px] shadow-sm select-none max-w-[320px] w-full mr-auto relative -left-[45px]"
              >
                <img
                  src="https://dd.mocup.in/assets/web/images/indian-flag.png"
                  alt="India Flag"
                  className="w-[71px] object-contain"
                />

                <div className="text-left font-sans select-none text-[#111] group-hover:text-white transition-colors duration-500">
                  <b
                    className="text-[18px] tracking-widest block uppercase mb-6"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    INDIA
                  </b>
                  <b
                    className="text-[17px] tracking-wide block uppercase leading-[1.66] mb-8 font-normal"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    <span style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}>DESIGNDOT TECHNOLOGIES</span> <br />PVT LTD
                  </b>

                  <p
                    className="text-[14px] md:text-[15px] leading-[1.8] uppercase tracking-wide block mb-8"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    RZ 1/3, 3RD FLOOR, <br />RAJNAGAR 1, DWARKA,<br />
                    NEW DELHI - 110077
                  </p>

                  <a
                    href="tel:+91-9873282812"
                    className="text-[17px] font-bold uppercase tracking-wide block mb-8 hover:underline text-[#f27820] group-hover:text-white transition-colors"
                  >
                    +91 9873-282-812
                  </a>

                  <p
                    className="text-[15px] font-bold uppercase tracking-widest block mb-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    INDIA
                  </p>
                </div>
              </div>

              {/* Card 2: Canada */}
              <div
                className="group flex flex-col justify-between items-start h-[580px] p-9 bg-[#fcf5f5] hover:bg-[#418fce] hover:text-white transition-all duration-[900ms] border-[5px] border-white rounded-[20px] shadow-sm select-none max-w-[320px] w-full mr-auto relative -left-[1px]"
              >
                <img
                  src="https://dd.mocup.in/assets/web/images/canada-flag.png"
                  alt="Canada Flag"
                  className="w-[71px] object-contain"
                />

                <div className="text-left font-sans select-none text-[#111] group-hover:text-white transition-colors duration-500">
                  <b
                    className="text-[18px] tracking-widest block uppercase mb-6"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    CANADA
                  </b>
                  <b
                    className="text-[17px] tracking-wide block uppercase leading-[1.66] mb-8 font-normal"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    <span style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}>DESIGNDOT TECHNOLOGIES</span> <br />PVT LTD
                  </b>

                  <p
                    className="text-[14px] md:text-[15px] leading-[1.8] uppercase tracking-wide block mb-8"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    54 Hanbury <br />Crescent L6X5N7, <br />Brampton Ontario
                  </p>

                  {/* Empty text row replacement to match height */}
                  <div className="h-[26px] mb-8" />

                  <p
                    className="text-[15px] font-bold uppercase tracking-widest block mb-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    Canada
                  </p>
                </div>
              </div>

              {/* Card 3: US */}
              <div
                className="group flex flex-col justify-between items-start h-[580px] p-9 bg-[#fcf5f5] hover:bg-[#fcf5f5] transition-all duration-[900ms] border-[5px] border-white rounded-[20px] shadow-sm select-none max-w-[330px] w-full ml-auto relative left-[36px]"
              >
                <img
                  src="https://dd.mocup.in/assets/web/images/usa-icon-c.png"
                  alt="US Flag"
                  className="w-[71px] object-contain"
                />

                <div className="text-left font-sans select-none text-[#111]">
                  <b
                    className="text-[18px] tracking-widest block uppercase mb-6"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    US
                  </b>
                  <b
                    className="text-[17px] tracking-wide block uppercase leading-[1.66] mb-8 font-normal"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    <span style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}>DESIGNDOT TECHNOLOGIES</span> <br />PVT LTD
                  </b>

                  <p
                    className="text-[14px] md:text-[15px] leading-[1.8] uppercase tracking-wide block mb-8"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    13151 Emily Rd, <br />Suite- 135,<br />
                    Dallas, TX - 75240
                  </p>

                  <a
                    href="tel:+1-4694410125"
                    className="text-[17px] font-bold uppercase tracking-wide block mb-8 hover:underline text-[#f27820] transition-colors"
                  >
                    +1 469-441-0125
                  </a>

                  <p
                    className="text-[15px] font-bold uppercase tracking-widest block mb-0 opacity-100"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    US
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Reusable Footer Component */}
      <Footer />
    </div>
  );
}

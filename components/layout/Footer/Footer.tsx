'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaNums, setCaptchaNums] = useState({ num1: 3, num2: 7 });

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1; // 1 to 9
    const n2 = Math.floor(Math.random() * 9) + 1; // 1 to 9
    setCaptchaNums({ num1: n1, num2: n2 });
  };

  // State variables for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    idea: '',
    nda: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    generateCaptcha();
    const updateTime = () => {
      const today = new Date();
      const daylist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const localday = daylist[today.getDay()];
      let hour = today.getHours();
      const prepand = hour >= 12 ? " PM " : " AM ";
      hour = hour >= 12 ? hour - 12 : hour;
      if (hour === 0) hour = 12; // 12 AM/PM instead of 0
      setLocalTime(`/ ${localday}, ${hour}${prepand} /`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Captcha validation
    const expectedAnswer = (captchaNums.num1 + captchaNums.num2).toString();
    if (captchaAnswer.trim() !== expectedAnswer) {
      setCaptchaError(true);
      generateCaptcha();
      setCaptchaAnswer('');
      return;
    }

    setCaptchaError(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', budget: '', idea: '', nda: false });
      setCaptchaAnswer('');
      generateCaptcha();
    }, 2500);
  };

  return (
    <footer className="relative w-full overflow-hidden select-none bg-white text-[#111] pt-[80px] md:pt-[100px] pb-[40px] md:pb-[50px]">
      <div className="w-full max-w-[1840px] mx-auto px-5 md:pl-[65px] md:pr-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 md:gap-8 lg:gap-[100px] items-start">

          {/* Left Column: Let's build something awesome & details */}
          <div className="flex flex-col text-left justify-start w-full">

            {/* Content wrapper with margin-left so that text inspect outline starts at let's */}
            <div className="flex-grow ml-0 sm:ml-[110px] md:ml-[91px] lg:ml-[125px] xl:ml-[171px] relative">

              {/* Heading */}
              <div className="relative w-full">
                <div className="absolute left-[-152px] md:left-[-42px] lg:left-[-76px] xl:left-[-122px] top-[16px] md:top-[22px] w-[120px] md:w-[30px] lg:w-[64px] xl:w-[110px] h-[1.2px] bg-[#727272] hidden sm:block" />
                <h2
                  className="text-[26px] md:text-[38px] leading-[1.5] text-[#111111] lowercase"
                  style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}
                >
                  let&apos;s build something<br />awesome
                </h2>
              </div>

              <div className="flex flex-col gap-[80px] mt-[54px] pl-0 sm:pl-[90px] md:pl-[91px] lg:pl-[125px] xl:pl-[171px]">

                {/* Phone number */}
                <div className="relative w-full">
                  <div className="absolute left-[-152px] md:left-[-91px] lg:left-[-125px] xl:left-[-171px] top-[9px] w-[120px] md:w-[59px] lg:w-[93px] xl:w-[139px] h-[1.2px] bg-[#727272] hidden sm:block" />
                  <div className="flex flex-col">
                    <span
                      className="text-[18px] leading-[18px] font-[400] text-[#B8B7B7] mb-[17px] tracking-[1px] block"
                      style={{ fontFamily: 'GTWalsheimPro-Regular', textTransform: 'none' }}
                    >
                      Phone number
                    </span>
                    <div
                      className="text-[18px] leading-[26px] tracking-wide flex flex-col gap-[6px] text-[#111111] font-[400]"
                      style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                    >
                      <a href="tel:+919873282812" className="hover:text-[#23527C] transition-colors text-[#111111] font-[400]">+91-9873.282.812</a>
                      <a href="tel:+14694410125" className="hover:text-[#23527C] transition-colors text-[#111111] font-[400]">+1 469-441-0125</a>
                    </div>
                  </div>
                </div>

                {/* Mail at */}
                <div className="relative w-full">
                  <div className="absolute left-[-152px] md:left-[-91px] lg:left-[-125px] xl:left-[-171px] top-[9px] w-[120px] md:w-[59px] lg:w-[93px] xl:w-[139px] h-[1.2px] bg-[#727272] hidden sm:block" />
                  <div className="flex flex-col">
                    <span
                      className="text-[18px] leading-[18px] font-[400] text-[#B8B7B7] mb-[17px] tracking-[1px] block"
                      style={{ fontFamily: 'GTWalsheimPro-Regular', textTransform: 'none' }}
                    >
                      Mail at
                    </span>
                    <div
                      className="text-[18px] leading-[26px] tracking-wide text-[#111111] font-[400]"
                      style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                    >
                      <a href="mailto:info@designdot.co" className="hover:text-[#23527C] transition-colors text-[#111111] font-[400]">info@designdot.co</a>
                    </div>
                  </div>
                </div>

                {/* Direct Chat */}
                <div className="relative w-full">
                  <div className="absolute left-[-152px] md:left-[-91px] lg:left-[-125px] xl:left-[-171px] top-[9px] w-[120px] md:w-[59px] lg:w-[93px] xl:w-[139px] h-[1.2px] bg-[#727272] hidden sm:block" />
                  <div className="flex flex-col">
                    <span
                      className="text-[18px] leading-[18px] font-[400] text-[#B8B7B7] mb-[17px] tracking-[1px] block"
                      style={{ fontFamily: 'GTWalsheimPro-Regular', textTransform: 'none' }}
                    >
                      Direct Chat
                    </span>
                    <div
                      className="text-[18px] leading-[26px] tracking-wide text-[#111111] font-[400]"
                      style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                    >
                      <a
                        href="https://api.whatsapp.com/send?phone=+919873282812&text=Hii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#f27820] transition-colors text-[#111111] flex items-center gap-[8px]"
                      >
                        <i className="fab fa-whatsapp text-[18px]" />
                        <span>Whats app</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Connect */}
                <div className="relative w-full">
                  <div className="absolute left-[-152px] md:left-[-91px] lg:left-[-125px] xl:left-[-171px] top-[9px] w-[120px] md:w-[59px] lg:w-[93px] xl:w-[139px] h-[1.2px] bg-[#727272] hidden sm:block" />
                  <div className="flex flex-col">
                    <span
                      className="text-[18px] leading-[18px] font-[400] text-[#B8B7B7] mb-[17px] tracking-[1px] block"
                      style={{ fontFamily: 'GTWalsheimPro-Regular', textTransform: 'none' }}
                    >
                      Connect with us
                    </span>
                    <div className="flex gap-[12px] h-[26px] items-center">
                      <a href="#" className="w-[30px] h-[30px] border border-[#111] rounded-full flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#f58331] hover:border-[#111111] transition-all duration-300" aria-label="Facebook">
                        <i className="fab fa-facebook-f text-[12px]" />
                      </a>
                      <a href="#" className="w-[30px] h-[30px] border border-[#111] rounded-full flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#f58331] hover:border-[#111111] transition-all duration-300" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in text-[12px]" />
                      </a>
                      <a href="#" className="w-[30px] h-[30px] border border-[#111] rounded-full flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#f58331] hover:border-[#111111] transition-all duration-300" aria-label="Twitter">
                        <i className="fab fa-twitter text-[12px]" />
                      </a>
                      <a href="#" className="w-[30px] h-[30px] border border-[#111] rounded-full flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#f58331] hover:border-[#111111] transition-all duration-300" aria-label="YouTube">
                        <i className="fab fa-youtube text-[12px]" />
                      </a>
                      <a href="#" className="w-[30px] h-[30px] border border-[#111] rounded-full flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#f58331] hover:border-[#111111] transition-all duration-300" aria-label="Instagram">
                        <i className="fab fa-instagram text-[12px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Write us Proposal Form */}
          <div className="flex flex-col text-left font-sans md:mr-[4px] lg:mr-[10px] xl:mr-[5px]">
            <h3
              className="text-[22px] md:text-[26px] font-extrabold text-[#111111] mb-[48px] mt-0 md:mt-[4px]"
              style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}
            >
              Feel Free To Write Us.
            </h3>

            {isSubmitted ? (
              <div className="bg-[#363266] p-[40px] rounded-[20px] text-center flex flex-col items-center justify-center min-h-[420px] shadow-lg">
                <div className="w-[56px] h-[56px] rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                  <Check size={28} />
                </div>
                <h4 className="text-[20px] font-bold text-white mb-2" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>Proposal Request Received</h4>
                <p className="text-white/70 text-[14px]" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#363266] p-[30px] rounded-[20px] shadow-xl flex flex-col gap-[28px] w-full">

                {/* Full Name */}
                <div className="flex flex-col border-b border-white/20 pb-[6px]">
                  <label
                    className="text-[18px] leading-[24px] text-white tracking-[1px] mb-[5px] block"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  >
                    Full Name <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-0 py-1 px-0 text-white focus:outline-none text-[15px] font-[400]"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col border-b border-white/20 pb-[6px]">
                  <label
                    className="text-[18px] leading-[24px] text-white tracking-[1px] mb-[5px] block"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  >
                    E-mail ID <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 py-1 px-0 text-white focus:outline-none text-[15px] font-[400]"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  />
                </div>

                {/* Contact Number */}
                <div className="flex flex-col border-b border-white/20 pb-[6px]">
                  <label
                    className="text-[18px] leading-[24px] text-white tracking-[1px] mb-[5px] block"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  >
                    Contact Number <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-0 py-1 px-0 text-white focus:outline-none text-[15px] font-[400]"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  />
                </div>

                {/* Budget Range */}
                <div className="flex flex-col border-b border-white/20 pb-[6px]">
                  <label
                    className="text-[18px] leading-[24px] text-white tracking-[1px] mb-[5px] block"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  >
                    Select a Budget Range <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-transparent border-0 py-1 px-0 text-white focus:outline-none text-[14px] font-[400] appearance-none cursor-pointer"
                      style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                    >
                      <option value="" disabled className="text-slate-900 bg-white">-- Please select --</option>
                      <option value="Still Evaluating" className="text-slate-900 bg-white">Still Evaluating</option>
                      <option value="Less than $50K" className="text-slate-900 bg-white">Less than $50K</option>
                      <option value="$50K - $100K" className="text-slate-900 bg-white">$50K - $100K</option>
                      <option value="$100 - $250K" className="text-slate-900 bg-white">$100 - $250K</option>
                      <option value="More than $250K" className="text-slate-900 bg-white">More than $250K</option>
                    </select>
                    <div className="absolute right-[4px] top-[6px] pointer-events-none text-white/70">
                      <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Idea */}
                <div className="flex flex-col border-b border-white/20 pb-[6px]">
                  <label
                    className="text-[18px] leading-[24px] text-white tracking-[1px] mb-[5px] block"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  >
                    Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)<span className="text-[#ff4b4b]">*</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    className="w-full bg-transparent border-0 py-1 px-0 text-white focus:outline-none text-[14px] font-[400] resize-none"
                    style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                  />
                </div>

                {/* NDA & Captcha Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] pt-[12px]">
                  <label className="flex items-center gap-[10px] text-white text-[14px] font-[500] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.nda}
                      onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                      className="rounded-sm border-0 bg-white text-[#f27820] focus:ring-0 w-[14px] h-[14px] cursor-pointer"
                    />
                    <span style={{ fontFamily: 'GTWalsheimPro-Regular' }}>Include Copy of a Non-Disclosure Agreement</span>
                  </label>

                  <div className="flex items-center gap-[10px]">
                    <span className="text-white font-[500] text-[18px]" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>{captchaNums.num1} + {captchaNums.num2} =</span>
                    <input
                      type="text"
                      required
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      className="w-[54px] h-[36px] bg-white/10 border border-white/25 rounded-[4px] text-center text-white focus:outline-none focus:border-white/50 text-[14px] font-[600]"
                      style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                    />
                  </div>
                </div>

                {captchaError && (
                  <p className="text-[#ff4b4b] text-[12px] font-[600]" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>Incorrect Captcha Answer. Please try again.</p>
                )}

                {/* Submit Button */}
                <div className="pt-[10px]">
                  <button
                    type="submit"
                    className="w-full bg-[#bdc0cb] hover:bg-[#aab0bf] text-[#111] transition-colors h-[42px] rounded-[6px] font-bold text-[14px] tracking-[0.08em] uppercase cursor-pointer focus:outline-none"
                    style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 800 }}
                  >
                    REQUEST PROPOSAL
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1840px] mx-auto px-5 pl-0 sm:pl-[140px] md:pl-[156px] lg:pl-[190px] xl:pl-[236px] pr-5 md:pr-[64px] md:mr-[4px] lg:mr-[10px] xl:mr-[5px] flex flex-col mt-[64px]">
        {/* Top Divider Line */}
        <div className="w-full mb-[24px] relative flex items-center">
          <div className="w-full h-[1.2px] bg-[#111111]" />
        </div>

        {/* Working Hours, Policies & Local Time Strip */}
        <div className="flex flex-col w-full pb-[30px]">
          {/* Row 1: Labels */}
          <div className="flex justify-between items-center w-full">
            <span
              className="text-[#8e8e8e] text-[18px] font-[500]  tracking-wider"
              style={{ fontFamily: 'GTWalsheimPro-Regular' }}
            >
              Working Hours
            </span>
            <span
              className="text-[#8e8e8e] text-[18px] font-[500]  tracking-wider"
              style={{ fontFamily: 'GTWalsheimPro-Regular' }}
            >
              Local Time
            </span>
          </div>

          {/* Row 2: Values */}
          <div className="flex justify-between items-center w-full mt-[12px]">
            <span
              className="text-[#111111] text-[15px] font-[400] tracking-wide"
              style={{ fontFamily: 'GTWalsheimPro-Regular' }}
            >
              / MON - FRI, 9AM TO 6PM /
            </span>
            <span
              className="text-[#111111] text-[15px] font-[400] tracking-wide"
              style={{ fontFamily: 'GTWalsheimPro-Regular' }}
            >
              {localTime}
            </span>
          </div>

          {/* Row 3: Policies Links */}
          <div className="flex justify-start items-center w-full mt-[14px]">
            <div
              className="flex flex-wrap text-[14px] font-[400] text-[#111111] items-center gap-[4px]"
              style={{ fontFamily: 'GTWalsheimPro-Regular' }}
            >
              <a href="https://dd.mocup.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Privacy Policy</a>
              <span className="text-[#8e8e8e] font-normal mx-[10px]">|</span>
              <a href="https://dd.mocup.in/cookies-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Cookies Policy</a>
              <span className="text-[#8e8e8e] font-normal mx-[10px]">|</span>
              <a href="https://dd.mocup.in/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Terms & Conditions</a>
              <span className="text-[#8e8e8e] font-normal mx-[10px]">|</span>
              <a href="https://dd.mocup.in/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="w-full h-[1.2px] bg-[#111111] mb-[40px]" />

        {/* Happiness, Achievements, Brochure & Copyright Column block */}
        <div className="flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-[60px] w-full pb-0">

          {/* Happiness Guarantee */}
          <div className="flex items-start gap-[24px] text-left">
            <img
              src="https://dd.mocup.in/assets/web/images/design-wheel.png"
              alt="Happiness guarantee"
              className="w-[160px] h-[160px] object-contain flex-shrink-0 mt-[30px]"
              loading="lazy"
            />
            <div className="flex flex-col gap-[8px] pt-0 -mt-[4px]">
              <h5
                className="text-[16px] font-extrabold tracking-wide text-[#111111]"
                style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}
              >
                Happiness guarantee
              </h5>
              <p
                className="text-[15px] text-black font-[400] leading-[2.1] max-w-[280px]"
                style={{ fontFamily: 'GTWalsheimPro-Regular' }}
              >
                If you&apos;re not happy, we&apos;re not<br />
                happy. We work tirelessly to<br />
                make sure your Designdot<br />
                experience is delightful.<br />
                That&apos;s why we offer the<br />
                DesignDot Happiness<br />
                Guarantee.
              </p>
            </div>
          </div>

          {/* Achievement */}
          <div className="flex flex-col items-start pt-[4px]">
            <h5
              className="text-[19px] leading-[21px] font-[700] tracking-[1px] text-[#000000] uppercase mb-[20px]"
              style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'", fontWeight: 700 }}
            >
              OUR<br />ACHIEVEMENT.
            </h5>
            <div className="flex gap-[20px] items-center">
              <img src="https://dd.mocup.in/assets/web/images/footer-award-2.png" alt="Award 2" className="h-[130px] object-contain" loading="lazy" />
              <img src="https://dd.mocup.in/assets/web/images/footer-award-1.png" alt="Award 1" className="h-[130px] object-contain" loading="lazy" />
            </div>
          </div>

          {/* Brochure & Copyright Column */}
          <div className="flex flex-col gap-[10px] text-left lg:text-right items-start lg:items-end pt-[4px] lg:pt-[30px] lg:ml-auto">
            <a
              href="https://drive.google.com/file/d/1m0wCjfT7xhCWghgZBxrkRXdDrwZkpaue/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f27820] hover:text-[#23527C] font-[900] text-[16px] tracking-wide transition-colors cursor-pointer"
              style={{ fontFamily: 'GTWalsheimPro-Bold', fontWeight: 900 }}
            >
              Download Brochure
            </a>
            <p
              className="text-[12px] text-[#111111] font-[400] tracking-wide uppercase"
              style={{ fontFamily: 'GTWalsheimPro-Regular' }}
            >
              © ALL RIGHTS RESERVED 2026,DESIGNDOT
            </p>
          </div>
        </div>

      </div>

      {/* Spacer to guarantee bottom white space */}
      <div className="w-full h-[30px] md:h-[40px]" />

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=+919873282812&text=Hii"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[30px] right-[30px] z-50 bg-[#25d366] text-white w-[60px] h-[60px] rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:bg-[#128c7e] transition-all hover:-translate-y-1 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-[34px] h-[34px] ml-[2px] mb-[2px]">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

    </footer>
  );
}
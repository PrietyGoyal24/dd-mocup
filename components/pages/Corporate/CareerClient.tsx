'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';



interface JobPosition {
  id: string;
  title: string;
  experience: string;
  expertise: string;
  education: string;
}

const jobPositionsData: JobPosition[] = [
  {
    id: 'digital-media-marketing',
    title: 'DIGITAL MEDIA MARKETING',
    experience: '1 - 3yrs',
    expertise: 'Content Creation / writing, SEO, Social Media Marketing',
    education: 'Graduate',
  },
  {
    id: 'ai-mern-stack-developer',
    title: 'AI MERN STACK DEVVELOPER',
    experience: 'Intern / 1 - 2yrs',
    expertise: 'design, develop, and maintain AI integrated MERN applications',
    education: 'B. Tech / MCA',
  },
  {
    id: 'ui-ux-designer-developer',
    title: 'UI/UX DESIGNER & DEVELOPER',
    experience: '2+ Years',
    expertise: 'translate UI/UX design wireframes to actual code',
    education: 'B. Tech / MCA',
  },
  {
    id: 'ui-graphic-designer',
    title: 'UI & GRAPHIC DESIGNER',
    experience: '1-3 Years',
    expertise: 'Figma for creating wireframes, graphics & brand identity',
    education: 'Graduate',
  },
  {
    id: 'business-development',
    title: 'BUSINESS DEVELOPMENT',
    experience: '1+ Years',
    expertise: 'Web Mobile Cloud App, UI & UX sales & client acquisition',
    education: 'BBA / MBA',
  },
  {
    id: 'mobile-app-developer',
    title: 'MOBILE APP DEVELOPER (IOS & ANDROID)',
    experience: '1-3 Years',
    expertise: 'React Native, Flutter, and Ionic mobile frameworks',
    education: 'B. Tech / MCA',
  },
  {
    id: 'full-mern-stack-developer',
    title: 'FULL-MERN STACK DEVELOPER',
    experience: '2-4 Years',
    expertise: 'MongoDB, Express, React, Node.js, REST APIs & Cloud deployment',
    education: 'B. Tech / MCA',
  },
  {
    id: 'php-web-developer',
    title: 'PHP WEB DEVELOPER',
    experience: '1-3 Years',
    expertise: 'PHP, Laravel, CodeIgniter, MySQL & RESTful APIs',
    education: 'B. Tech / MCA / Graduate',
  },
];

export default function CareerClient() {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isReadMoreModalOpen, setIsReadMoreModalOpen] = useState(false);


  // Submit Your Resume Form State
  const [resumeFormData, setResumeFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    expertise: '',
    appliedFor: '',
    expectedSalary: '',
    ctc: '',
    address: '',
    aboutYourself: '',
    securityCodeInput: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string>('');
  const [securityError, setSecurityError] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  const [mounted, setMounted] = useState(false);

  const generateRandomCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);
  };

  useEffect(() => {
    setMounted(true);
    generateRandomCode();
  }, []);

  // Lock background page scroll (both html and body) when any modal is open
  useEffect(() => {
    if (isReadMoreModalOpen || isApplyModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isReadMoreModalOpen, isApplyModalOpen]);







  const handleResumeInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setResumeFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'securityCodeInput') {
      setSecurityError(false);
    }
  };

  const handleResumeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleResumeFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (resumeFormData.securityCodeInput !== generatedCode) {
      setSecurityError(true);
      generateRandomCode();
      return;
    }

    setFormSuccess(true);
    setSecurityError(false);
    setResumeFormData({
      firstName: '',
      email: '',
      phone: '',
      education: '',
      experience: '',
      expertise: '',
      appliedFor: '',
      expectedSalary: '',
      ctc: '',
      address: '',
      aboutYourself: '',
      securityCodeInput: '',
    });
    setResumeFile(null);
    generateRandomCode();

    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };

  const handleApplyClick = (job: JobPosition) => {
    setResumeFormData((prev) => ({ ...prev, appliedFor: job.title }));
    const section = document.getElementById('submit-resume-section');
    if (section) {
      const yOffset = -160;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };



  const handleReadMoreClick = (job: JobPosition) => {
    setSelectedJob(job);
    setIsReadMoreModalOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="pt-40 sm:pt-58 pb-24">
          {/* Top Seeking Talent Banner */}
          <div className="w-full px-6 lg:px-[98px] flex justify-center mb-14">
            <div
              className="bg-[#083169] text-white text-[16px] sm:text-[24px] font-bold tracking-wider px-8 sm:px-3 py-2 uppercase text-center shadow-sm"
              style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
            >
              WE ARE ALWAYS SEEKING FOR NEW TALENTS.
            </div>
          </div>

          {/* Main Hero Image Banner with Text Overlay */}
          <div className="w-full px-6 lg:px-[98px] mb-16 sm:mb-20">
            <div className="relative w-full max-h-[550px] sm:max-h-[650px] overflow-hidden shadow-2xl bg-[#efefef]">
              <img
                src="https://dd.mocup.in/assets/web/images/dd-blog-img.jpg"
                alt="Career Banner"
                className="w-full h-full min-h-[350px] sm:min-h-[500px] md:min-h-[650px] object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-8 sm:p-16 text-left pointer-events-none">
                <h1
                  className="text-white text-[48px] sm:text-[75px] uppercase font-bold tracking-wider drop-shadow-md leading-none mb-3"
                  style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
                >
                  CAREER.
                </h1>
                <p
                  className="text-white text-[16px] sm:text-[22px] font-normal tracking-wide drop-shadow flex items-center gap-2"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  dedication. innovation. a complete team
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-white ml-1"></span>
                </p>
              </div>
            </div>
          </div>

          {/* Job Positions Header & Cards Grid Container aligned at exact same left vertical line */}
          <div className="w-full px-6 lg:px-[98px] mb-12 sm:mb-16">
            <div className="flex items-start gap-6 sm:gap-8">
              {/* Left Accent Line */}
              <div className="w-[110px] sm:w-[130px] h-[2px] bg-[#727272] mt-4 sm:mt-5 shrink-0"></div>

              {/* Right Content Column: Title, Subtitle, Description, AND Cards Grid starting at exact same left alignment */}
              <div className="flex-1">
                <h2
                  className="text-[32px] sm:text-[34px] font-bold text-[#111111] uppercase tracking-tight leading-none mb-10"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  JOB POSITIONS.
                </h2>

                <p
                  className="text-[#111111] text-[18px] sm:text-[22px] font-bold mb-4"
                  style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                >
                  Check our open positions below and apply now.
                </p>

                <p
                  className="text-[#333333] text-[15px] sm:text-[19px] font-normal leading-relaxed w-full max-w-full mb-12 sm:mb-16"
                  style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                >
                  Check. Want to work with the latest technologies and most talented people around you? Bingo. Want to benefit from flexible salary benefits? Working at DesignDot means joining a group of people obsessed with making things—making things that inspire new ways of thinking, bring about real change, & make people’s lives just a little bit easier. It’s not bullshit. It’s a code. Our way of life. It’s been in our DNA since 2005.
                </p>

                {/* 3-Column Job Positions Cards Grid aligned with JOB POSITIONS. text */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
                  {jobPositionsData.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white p-8 sm:p-10 border border-black/5 flex flex-col justify-between rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[380px]"
                    >
                      <div>
                        {/* Job Title */}
                        <h3
                          className="text-[20px] sm:text-[24px] font-bold text-[#111111] uppercase leading-snug mb-8 min-h-[56px] flex items-start"
                          style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                        >
                          {job.title}
                        </h3>

                        {/* Requirements Header */}
                        <h4
                          className="text-[16px] font-bold text-[#111111] mb-4"
                          style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                        >
                          Requirements
                        </h4>

                        {/* Requirements List */}
                        <ul className="space-y-3 mb-8 text-[14px] sm:text-[15px] text-[#444444]">
                          <li className="flex items-start gap-2.5">
                            <span className="text-[#f27820] font-bold text-[16px] leading-none mt-0.5">✓</span>
                            <span>
                              <strong className="text-[#111111] font-semibold">Experience :</strong> {job.experience}
                            </span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-[#f27820] font-bold text-[16px] leading-none mt-0.5">✓</span>
                            <span className="line-clamp-2">
                              <strong className="text-[#111111] font-semibold">Expertise</strong> in {job.expertise}
                            </span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-[#f27820] font-bold text-[16px] leading-none mt-0.5">✓</span>
                            <span>
                              <strong className="text-[#111111] font-semibold">Education:</strong> {job.education}
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Action Buttons: READ MORE & APPLY NOW */}
                      <div className="flex items-center gap-4 pt-4 border-t border-black/5">
                        <button
                          onClick={() => handleReadMoreClick(job)}
                          className="flex-1 bg-[#3485d1] hover:bg-[#286bb0] text-white text-[13px] sm:text-[14px] font-bold py-3 uppercase tracking-wider transition-colors rounded-none cursor-pointer text-center"
                          style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                        >
                          READ MORE
                        </button>
                        <button
                          onClick={() => handleApplyClick(job)}
                          className="flex-1 bg-[#f27820] hover:bg-[#d96716] text-white text-[13px] sm:text-[14px] font-bold py-3 uppercase tracking-wider transition-colors rounded-none cursor-pointer text-center"
                          style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                        >
                          APPLY NOW
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Your Resume Form Section */}
          <div id="submit-resume-section" className="w-full px-6 lg:px-[98px] mt-20 sm:mt-28 scroll-mt-44">


            <div className="bg-white p-8 sm:p-14 border border-black/5 shadow-sm rounded-none">
              <h2
                className="text-[28px] sm:text-[36px] font-bold text-[#111111] text-center mb-12 sm:mb-16"
                style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
              >
                Submit Your Resume
              </h2>

              <form onSubmit={handleResumeFormSubmit} className="space-y-8">
                {/* Row 1: First Name*, Email Address*, Phone Number* */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="First Name*"
                    value={resumeFormData.firstName}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address*"
                    value={resumeFormData.email}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number*"
                    value={resumeFormData.phone}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                  />
                </div>

                {/* Row 2: Education*, Experience*, Expertise* */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  <input
                    type="text"
                    name="education"
                    required
                    placeholder="Education*"
                    value={resumeFormData.education}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                  />
                  <input
                    type="text"
                    name="experience"
                    required
                    placeholder="Experience*"
                    value={resumeFormData.experience}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                  />
                  <input
                    type="text"
                    name="expertise"
                    required
                    placeholder="Expertise*"
                    value={resumeFormData.expertise}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                  />
                </div>

                {/* Row 3: Applied For*, Expected Salary*, CTC* */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="relative">
                    <select
                      name="appliedFor"
                      required
                      value={resumeFormData.appliedFor}
                      onChange={handleResumeInputChange}
                      className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-400">
                        Applied For*
                      </option>
                      {jobPositionsData.map((job) => (
                        <option key={job.id} value={job.title} className="text-black">
                          {job.title}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-2 top-3 pointer-events-none text-xs text-gray-500">
                      ▼
                    </span>
                  </div>

                  <input
                    type="text"
                    name="expectedSalary"
                    required
                    placeholder="Expected Salary*"
                    value={resumeFormData.expectedSalary}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                  />

                  <input
                    type="text"
                    name="ctc"
                    required
                    placeholder="CTC*"
                    value={resumeFormData.ctc}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                  />
                </div>

                {/* Row 4: Choose File & Address* */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-end">
                  <div className="w-full flex items-center gap-3 border-b border-[#f27820] pb-2">
                    <label
                      htmlFor="resume-file-upload"
                      className="bg-[#efefef] hover:bg-[#e2e2e2] text-[#111111] text-[14px] px-4 py-1.5 border border-[#cccccc] cursor-pointer transition-colors shrink-0 rounded-none"
                    >
                      Choose File
                    </label>
                    <input
                      type="file"
                      id="resume-file-upload"
                      onChange={handleResumeFileChange}
                      className="hidden"
                    />
                    <span className="text-[14px] text-[#777777] truncate">
                      {resumeFile ? resumeFile.name : 'No file chosen'}
                    </span>
                  </div>

                  <div className="md:col-span-2">
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Address*"
                      value={resumeFormData.address}
                      onChange={handleResumeInputChange}
                      className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 5: About yourself Full Width */}
                <div className="w-full">
                  <textarea
                    name="aboutYourself"
                    rows={3}
                    placeholder="About yourself"
                    value={resumeFormData.aboutYourself}
                    onChange={handleResumeInputChange}
                    className="w-full bg-transparent border-b border-[#f27820] py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none resize-none"
                  />
                </div>

                {/* Row 6: Security Code & Submit Button */}
                <div className="pt-4 flex flex-col gap-8">
                  <div className="w-full flex items-center gap-4">
                    <div className="flex-1 relative border-b border-[#f27820]">
                      <input
                        type="text"
                        name="securityCodeInput"
                        required
                        placeholder="Enter Security Code → *"
                        value={resumeFormData.securityCodeInput}
                        onChange={handleResumeInputChange}
                        className="w-full bg-transparent py-3 text-[16px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
                      />
                      {securityError && (
                        <span className="absolute left-0 -bottom-6 text-[12px] text-red-600 font-semibold">
                          Incorrect code. Generated new code!
                        </span>
                      )}
                    </div>

                    <div
                      onClick={generateRandomCode}
                      title="Click to generate new security code"
                      className="bg-[#f27820] hover:bg-[#d96716] text-white font-bold text-[20px] px-6 py-2 tracking-widest cursor-pointer select-none shrink-0 transition-colors"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {generatedCode}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="submit"
                      className="bg-[#f27820] hover:bg-[#d96716] text-white text-[16px] font-bold px-12 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      Submit
                    </button>

                    {formSuccess && (
                      <span className="text-green-700 font-semibold text-[15px] bg-green-50 border border-green-200 px-4 py-2">
                        ✓ Your resume has been submitted successfully!
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* Apply Now Modal */}
      {isApplyModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 sm:p-10 max-w-lg w-full rounded-none shadow-2xl relative">
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-[#111111] uppercase mb-4">
              Apply for {selectedJob.title}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Thank you! Your application for ${selectedJob.title} has been submitted.`);
                setIsApplyModalOpen(false);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full border-b border-[#f27820] py-2.5 text-[15px] focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full border-b border-[#f27820] py-2.5 text-[15px] focus:outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full border-b border-[#f27820] py-2.5 text-[15px] focus:outline-none"
              />
              <div className="py-2">
                <label className="block text-sm text-gray-600 mb-1">Upload Resume / CV</label>
                <input type="file" required className="w-full text-sm" />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f27820] hover:bg-[#d96716] text-white font-bold py-3 uppercase tracking-wider transition-colors rounded-none mt-4"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Job Details Modal Component */}
      {mounted && isReadMoreModalOpen && selectedJob && createPortal(

        <div
          className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 cursor-default"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsReadMoreModalOpen(false);
          }}
        >
          <div
            ref={modalContentRef}
            className="bg-white p-6 sm:p-10 lg:p-12 max-w-6xl w-full h-[82vh] max-h-[82vh] overflow-y-auto rounded-none shadow-2xl relative text-[#111111] border border-black/10 select-text"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#d7d3d3ff #f1f1f1', touchAction: 'pan-y' }}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => {
              e.stopPropagation();
              if (modalContentRef.current) {
                modalContentRef.current.scrollTop += e.deltaY;
              }
            }}
          >


            {/* Absolute Close Button */}
            <button
              onClick={() => setIsReadMoreModalOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#f27820] hover:bg-[#d96716] text-white w-9 h-9 flex items-center justify-center font-bold text-xl transition-colors cursor-pointer z-30"
            >
              ✕
            </button>

            {/* Title */}
            <h2
              className="text-[24px] sm:text-[32px] font-bold text-[#111111] uppercase tracking-tight border-b border-[#dddddd] pb-4 mb-8 pr-16"
              style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
            >
              {selectedJob.title}
            </h2>

            {/* 2-Column Detailed Layout */}
            {selectedJob.id === 'ai-mern-stack-developer' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">
                  <p>
                    We are seeking a highly skilled and motivated AI Technical Specialist to join our dynamic team. The ideal candidate will have a strong technical background in artificial intelligence and machine learning, with experience in developing and deploying AI-driven solutions. You will work closely with cross-functional teams to build innovative applications that enhance business processes and product offerings.
                  </p>

                  <ul className="space-y-2 text-[#111111] font-medium">
                    <li>• <strong>Industry:</strong> IT-Software/ Software Services</li>
                    <li>• <strong>Job Title:</strong> AI & MERN Technical Specialist / Engineer</li>
                    <li>• <strong>Job Location:</strong> Remote Job</li>
                    <li>• <strong>Experience:</strong> Intern / 1 - 2yrs</li>
                    <li>• <strong>Qualification:</strong> BE/BTech in Computer Science/MCA or equivalent</li>
                    <li>• <strong>Job Type:</strong> Full-time</li>
                    <li>• <strong>Salary:</strong> Fresher start from 15K+ /Month and Exp – 25K+/Per Month</li>
                  </ul>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Key Responsibilities</h3>
                    <ul className="space-y-3 list-disc pl-5">
                      <li><strong>Create and Innovate:</strong> Design, develop, and deploy AI models with a focus on natural language understanding and generation, machine learning algorithms, and automation systems</li>
                      <li><strong>Tech Toolbox:</strong> Utilize and explore libraries and frameworks such as LangChain, contributing to the development of efficient applications.</li>
                      <li><strong>Optimization:</strong> Train, fine-tune, and optimize AI models for performance, accuracy, and scalability.</li>
                      <li><strong>Team Player:</strong> Collaborate effectively with Data and Software Engineering teams, ensuring AI models are neatly integrated.</li>
                      <li><strong>Eager Learner:</strong> Keep up with AI/ML trends, tools, and best practices, applying fresh knowledge to enhance project outcomes.</li>
                      <li><strong>Ethics First:</strong> Ensure AI systems comply with ethical AI practices, data privacy laws, and industry standards.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Qualification</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li><strong>Programming Proficiency:</strong> Solid Python skills and familiarity with AI/ML tools (e.g., TensorFlow, PyTorch, R, or Java.)</li>
                      <li>A Full stack developer who can work on Frontend as well as Backend</li>
                      <li>Design, develop, and maintain web application with React.js / Next.js, Angular js, Node.js, React Native and related technologies</li>
                      <li>Strong knowledge of React.js, related framework, JavaScript, CSS, Web API, JSON or other JS frameworks/libraries.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Additional Qualifications</h3>
                    <ul className="space-y-2.5 list-disc pl-5 mb-8">
                      <li><strong>Relevant Degree:</strong> Bachelor's or Master's degree in Computer Science, Artificial Intelligence, Data Science, or related fields.</li>
                      <li><strong>Practical Experience:</strong> Intern / 0-2Yrs in ML and deep learning, with projects or contributions in NLP & Generative AI (Experience working with OpenAI, GoogleAI, Claude and similar LLMs.).</li>
                      <li>Experience with AI/ML frameworks such as TensorFlow, PyTorch, Keras, or similar.</li>
                      <li>Expertise in working with large datasets, data preprocessing, and data engineering.</li>
                      <li>Familiarity with cloud platforms like AWS, Google Cloud, or Azure.</li>
                      <li>Solid understanding of algorithms, statistics, and mathematics related to AI and ML.</li>
                      <li>Experience in natural language processing (NLP), computer vision, or reinforcement learning is a plus.</li>
                      <li><strong>Tech-Savvy Foundations:</strong> Strong problem-solving skills, communication abilities, and teamwork orientation.</li>
                      <li><strong>Problem Solver:</strong> Demonstrated ability to tackle challenges with innovative solutions.</li>
                      <li><strong>Communicator:</strong> Strong skills in articulating ideas and collaborating with various teams.</li>
                      <li><strong>Ethical AI Advocate:</strong> Understanding of ethical AI principles.</li>
                    </ul>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsReadMoreModalOpen(false);
                          handleApplyClick(selectedJob);
                        }}
                        className="bg-[#f27820] hover:bg-[#d96716] text-white text-[15px] font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Desired Skills</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Experience with ML Ops tools and processes.</li>
                      <li>Knowledge of reinforcement learning and advanced neural network architectures.</li>
                      <li>Experience with AI-driven automation and robotics.</li>
                      <li>Exposure to AI ethics and fairness practices.</li>
                      <li>Experience with large-scale distributed AI systems.</li>
                      <li>Familiarity with DevOps tools for AI model deployment (Docker, Kubernetes, etc.).</li>
                      <li>Knowledge of model interpretability, fairness in AI, and explainable AI techniques.</li>
                      <li>Publications in AI research or contributions to open-source AI projects are advantageous.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Good-To-Haves</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li><strong>Research Mindset:</strong> While direct experience might be limited, a curiosity-driven approach to exploring new applications of generative AI is valued.</li>
                      <li><strong>Emerging Leader:</strong> Show potential for technical leadership and project guidance.</li>
                      <li><strong>Google Colab and API Tools:</strong> Exposure to platforms like Google Colab and Postman for AI model prototyping and testing.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Research & Innovation</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Stay up-to-date with the latest trends and advancements in AI/ML technologies.</li>
                      <li>Conduct research to propose innovative AI solutions for various business challenges.</li>
                      <li>Participate in brainstorming and prototyping sessions to create novel AI applications.</li>
                      <li>Conduct research and experiments to improve existing AI models or develop new ones.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Solution Deployment</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Implement and optimize AI algorithms for real-time and batch processing.</li>
                      <li>Work closely with DevOps teams to integrate AI solutions into existing infrastructure.</li>
                      <li>Monitor and maintain AI systems to ensure consistent performance.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Collaboration & Communication</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Collaborate with business stakeholders to understand their needs and translate them into AI-driven solutions.</li>
                      <li>Document AI models, their use cases, performance metrics, and any required maintenance.</li>
                      <li>Provide technical guidance and mentorship to junior team members.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">How To Apply:</h3>
                    <p className="text-[14px] leading-relaxed">
                      To apply, please send your resume and a cover letter to <a href="mailto:career@designdot.co" className="text-[#3485d1] underline font-medium">career@designdot.co</a>. Include links to any relevant projects or portfolios that demonstrate your AI expertise.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Application Question(s):</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>How many years of experience do you have as a developer?</li>
                      <li>Are you comfortable working remotely?</li>
                      <li>What is your desired salary per year (in INR)?</li>
                      <li>We must fill this position urgently. Can you start immediately?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Contact Us:</h3>
                    <ul className="space-y-2 font-medium">
                      <li>• <strong>Phone:</strong> +91 9873282812</li>
                      <li>• <strong>Email:</strong> <a href="mailto:career@designdot.co" className="text-[#3485d1] underline">career@designdot.co</a></li>
                      <li>• <strong>Website:</strong> <a href="https://www.designdot.co" target="_blank" rel="noreferrer" className="text-[#3485d1] underline">www.designdot.co</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : selectedJob.id === 'ui-ux-designer-developer' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">
                  <p>
                    We are seeking a talented UI/UX Designer & Developer to join our dynamic team. This is a hybrid role for a creative individual who is passionate about the entire product development lifecycle, from user research and wireframing to writing clean, maintainable, and high-performance code.
                  </p>
                  <p>
                    You will be a critical link between design and engineering, responsible for translating concepts and user needs into beautiful, intuitive, and functional user interfaces. If you have a keen eye for design, a love for solving user-centric problems, and the technical skills to bring your visions to life, we want to hear from you.
                  </p>

                  <ul className="space-y-2 text-[#111111] font-medium">
                    <li>• <strong>Location:</strong> Remote</li>
                    <li>• <strong>Company:</strong> DesignDot Technologies Pvt Ltd</li>
                    <li>• <strong>Job Type:</strong> Full-time</li>
                    <li>• <strong>Experience Level:</strong> 2+ Years</li>
                    <li>• <strong>Salary:</strong> Competitive, based on skills and experience</li>
                  </ul>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Key Responsibilities</h3>
                    <p className="font-bold text-[#111111] mb-2">Front-End Development</p>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Translate UI/UX design wireframes into high-quality, reusable code using HTML5, CSS3, and TypeScript.</li>
                      <li>Build responsive, scalable, and performant user interfaces using React.js and Next.js.</li>
                      <li>Implement modern and efficient styling using Tailwind CSS, ensuring pixel-perfect execution of designs.</li>
                      <li>Collaborate with back-end developers to integrate with APIs and services, with a solid understanding of Node.js and the MERN stack.</li>
                      <li>Ensure the technical feasibility of UI/UX designs and optimize applications for maximum speed and accessibility (WCAG compliance).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Collaboration & Iteration</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Collaborate closely with product managers, backend engineers, and other stakeholders to define and implement innovative solutions.</li>
                      <li>Participate in agile/scrum development cycles, providing design and development expertise.</li>
                      <li>Iterate on designs and implementations based on user testing, analytics, and stakeholder feedback.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Required Qualifications & Skills</h3>
                    <ul className="space-y-2.5 list-disc pl-5 mb-8">
                      <li>2+ years of professional experience in a role combining UI/UX design and front-end development.</li>
                      <li>A strong portfolio is required. Your portfolio must showcase your design process (case studies, wireframes, user flows) and feature links to live projects you have coded.</li>
                      <li>Proficiency in modern front-end technologies: HTML5, CSS3, JavaScript/TypeScript.</li>
                      <li>Demonstrable experience building complex user interfaces with React.js.</li>
                      <li>Hands-on experience and a strong preference for Tailwind CSS or other utility-first CSS frameworks.</li>
                      <li>Expertise in design and prototyping tools such as Figma (preferred), Sketch, or Adobe XD.</li>
                      <li>A solid understanding of user-centered design principles, responsive design, and web accessibility standards.</li>
                      <li>Experience with version control using Git and working in a collaborative team environment.</li>
                      <li>Excellent communication skills, with the ability to clearly articulate and defend design and technical decisions.</li>
                    </ul>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsReadMoreModalOpen(false);
                          handleApplyClick(selectedJob);
                        }}
                        className="bg-[#f27820] hover:bg-[#d96716] text-white text-[15px] font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Preferred (Nice-To-Have) Qualifications</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Experience with server-side rendering (SSR) or static site generation (SSG) using Next.js.</li>
                      <li>Experience building cross-platform mobile applications with React Native.</li>
                      <li>Familiarity with the full MERN stack (MongoDB, Express.js, React, Node.js), demonstrating an understanding of the entire application lifecycle.</li>
                      <li>Knowledge of state management libraries (e.g., Redux Toolkit, Zustand, Context API).</li>
                      <li>Experience with component library tools like Storybook.</li>
                      <li>Familiarity with agile methodologies and CI/CD pipelines.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">What We Offer</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Competitive salary and benefits package.</li>
                      <li>Flexible work hours and (remote work options, if applicable).</li>
                      <li>Opportunities for professional growth and skill development.</li>
                      <li>A collaborative and inclusive work environment.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Application Question(s):</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>How many years of experience do you have as a developer?</li>
                      <li>Are you comfortable working remotely?</li>
                      <li>What is your desired salary per year (in INR)?</li>
                      <li>What is your CTC?</li>
                      <li>We must fill this position urgently. Can you start immediately?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">How To Apply:</h3>
                    <p className="text-[14px] leading-relaxed">
                      Ready to create with us? We'd love to see your work! Please submit your resume along with a link to your online portfolio to <a href="mailto:career@designdot.co" className="text-[#3485d1] underline font-medium">career@designdot.co</a> or apply through WhatsApp <a href="tel:+919873282812" className="text-[#3485d1] underline font-medium">+91 9873282812</a>. Applications without a portfolio will not be considered.
                    </p>
                  </div>
                </div>
              </div>
            ) : selectedJob.id === 'ui-graphic-designer' ? (

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">
                  <p>
                    We are seeking a versatile and creative UI & Graphic Designer who can seamlessly blend user interface design with compelling graphic creation. In this role, you will be responsible for designing everything from intuitive web and mobile interfaces to eye-catching marketing materials.
                  </p>
                  <p>
                    You are a master of visual storytelling, with a keen eye for detail and a deep understanding of what makes a design both beautiful and functional. This is a unique opportunity to have a significant impact across multiple facets of our brand, working closely with our product, marketing, and engineering teams.
                  </p>

                  <ul className="space-y-2 text-[#111111] font-medium">
                    <li>• <strong>Location:</strong> Remote</li>
                    <li>• <strong>Job Type:</strong> Full-time</li>
                    <li>• <strong>Experience Level:</strong> 1-3 Years</li>
                    <li>• <strong>Salary:</strong> Competitive, based on skills and experience</li>
                  </ul>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Key Responsibilities</h3>
                    <p className="font-bold text-[#111111] mb-2">UI/UX Design</p>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Design and deliver wireframes, user flows, prototypes, and high-fidelity mockups for our web and mobile applications using Figma.</li>
                      <li>Translate concepts into user-friendly and visually stunning user interfaces.</li>
                      <li>Collaborate with product managers and developers to ensure seamless implementation of your designs.</li>
                      <li>Help maintain and expand our design system to ensure consistency across all platforms.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-[#111111] mb-2">Graphic Design</p>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Create a wide range of graphic assets for digital and print, including social media graphics, ad campaigns, email newsletters, brochures, and presentations.</li>
                      <li>Develop and maintain our brand identity, including logos, typography, and color palettes.</li>
                      <li>Utilize the Adobe Creative Suite (Photoshop, Illustrator) and CorelDRAW to produce high-quality design work.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-[#111111] mb-2">Collaboration & Strategy</p>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Work closely with the marketing team to create compelling visuals that drive engagement and conversions.</li>
                      <li>Participate in brainstorming sessions and contribute creative ideas for new design projects.</li>
                      <li>Manage multiple projects simultaneously from concept to completion, meeting deadlines and maintaining quality.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Required Skills & Qualifications</h3>
                    <ul className="space-y-2.5 list-disc pl-5 mb-8">
                      <li>1+ years of professional experience as a UI/UX Designer, Graphic Designer, or a similar role.</li>
                      <li>A strong portfolio showcasing a diverse range of UI/UX and graphic design projects. Please highlight your process from concept to final design.</li>
                      <li><strong>UI/UX:</strong> Expert-level skills in Figma.</li>
                      <li><strong>Graphic Design:</strong> High proficiency in Adobe Photoshop, Adobe Illustrator, and CorelDRAW.</li>
                      <li>A solid understanding of design principles, including typography, color theory, layout, and visual hierarchy.</li>
                      <li>Excellent communication and collaboration skills, with the ability to clearly articulate design decisions and receive constructive feedback.</li>
                      <li>Strong creative and analytical problem-solving skills.</li>
                      <li>Good understanding of UI/UX principles and responsive design.</li>
                      <li>Ability to manage multiple projects and meet deadlines.</li>
                      <li>A keen eye for aesthetics and details.</li>
                    </ul>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsReadMoreModalOpen(false);
                          handleApplyClick(selectedJob);
                        }}
                        className="bg-[#f27820] hover:bg-[#d96716] text-white text-[15px] font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Bonus Qualifications</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Experience with video editing and motion graphics software (e.g., Adobe Premiere Pro, After Effects).</li>
                      <li>Strong digital illustration skills.</li>
                      <li>Basic understanding of HTML/CSS and how it impacts design implementation.</li>
                      <li>Experience with advanced prototyping and animation within Figma or other tools.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">What We Offer</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Competitive salary and timely payouts.</li>
                      <li>A flexible and supportive work environment.</li>
                      <li>Opportunities for professional development and growth.</li>
                      <li>A creative, collaborative, and energetic company culture.</li>
                      <li>The chance to work on exciting projects that make a real impact.</li>
                      <li>Opportunity to work on diverse projects across industries.</li>
                      <li>Growth-oriented and flexible work culture.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Application Question(s):</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>How many years of experience do you have as a developer?</li>
                      <li>Are you comfortable working remotely?</li>
                      <li>What is your desired salary per year (in INR)?</li>
                      <li>What is your CTC?</li>
                      <li>We must fill this position urgently. Can you start immediately?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">How To Apply:</h3>
                    <p className="text-[14px] leading-relaxed">
                      Ready to create with us? We'd love to see your work! Please submit your resume along with a link to your online portfolio to <a href="mailto:career@designdot.co" className="text-[#3485d1] underline font-medium">career@designdot.co</a> or apply through WhatsApp <a href="tel:+919873282812" className="text-[#3485d1] underline font-medium">+91 9873282812</a>. Note: Applications without a portfolio will not be considered.
                    </p>
                  </div>
                </div>
              </div>
            ) : selectedJob.id === 'business-development' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">
                  <p>
                    DesignDot introduces itself to you as a Global Creative Agency. DesignDot has emerged as a one-stop Design Development Technology services and solutions provider for many national and international corporate brands. We also work with Small Medium Enterprise companies and cater to their requirements with customized budgets.
                  </p>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Our Services</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li><strong>EXPERIENCE</strong> – Web Mobile Cloud App, UI & UX, IoT, E-Commerce, E-Learning, Etc.</li>
                      <li><strong>BRANDING</strong> – Brand Strategy, Signage Design, Product Design, Stationary Design Etc.</li>
                      <li><strong>VISIBILITY</strong> – Outdoor Advertising, Story Boarding, Digital Media, Commercial Media Etc.</li>
                      <li><strong>DESIGN BUILD</strong> – Interior Exterior & Turnkey Solutions, Event & Exhibition Design Etc.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Qualifications</h3>
                    <ul className="space-y-2 text-[#111111] font-medium mb-4">
                      <li>• <strong>Job Location:</strong> DELHI / NCR</li>
                      <li>• Bachelor's degree 1+ years in sales industry</li>
                      <li>• Experience in full sales cycle including deal closing Demonstrated sales success</li>
                      <li>• Strong negotiation skills</li>
                      <li>• Strong communication and presentation skills</li>
                      <li>• <strong>Industry:</strong> IT Industry</li>
                      <li>• <strong>Education:</strong> BBA / MBA etc.</li>
                    </ul>
                    <p>
                      The ideal candidate will have experience in all stages of the sales cycle. They should be confident in building new client relationships and maintaining existing ones. They should have evidence of strong skills and possess good negotiation skills.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Job Responsibilities</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Reach out to potential clients through direct communication via e-mail, video call, telephone, and online Social Media Platform.</li>
                      <li>Build relationships with prospective clients</li>
                      <li>Proven track record of achieving goals.</li>
                      <li>Maintain consistent contact with existing clients</li>
                      <li>Manage sales pipeline</li>
                      <li>Identifying and cultivating new relationships with potential clients.</li>
                      <li>Explain or give demo to them about our services</li>
                      <li>Analyze market and establish competitive advantages</li>
                      <li>Track metrics to ensure targets are hit</li>
                      <li>Client handling and solve their queries</li>
                      <li>Set targets, monitor and review business performance regularly.</li>
                      <li>Proven track record of achieving goals.</li>
                      <li>Willingness to work under different time zones</li>
                      <li>Planning and overseeing new marketing initiatives</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Your Daily Responsibilities</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Manage the sales cycle - from lead generation to closure</li>
                      <li>Carry monthly sales target</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Sales Process</h3>
                    <ul className="space-y-2.5 list-disc pl-5 mb-8">
                      <li>Cold Calling *preferred</li>
                      <li>Lead Generation *preferred</li>
                      <li>Lead Conversion *preferred</li>
                      <li>Negotiation skill *preferred</li>
                      <li>Proposal Creation *company guideline (Optional)</li>
                    </ul>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsReadMoreModalOpen(false);
                          handleApplyClick(selectedJob);
                        }}
                        className="bg-[#f27820] hover:bg-[#d96716] text-white text-[15px] font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Skills & Requirements</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Fluent in English (written and verbal)</li>
                      <li>Team player with an enthusiastic personality</li>
                      <li>Ability to work in a fast-paced environment</li>
                      <li>A strong desire to expand existing services into enterprise</li>
                      <li>Experience with public speaking and negotiation</li>
                      <li>Experience working with brand agencies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Other Typical Duties Include:</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Preparing PowerPoint presentations</li>
                      <li>Developing quotes and proposals</li>
                      <li>Negotiating and renegotiating by phone, email, and in person</li>
                      <li>Developing sales goals for the team and ensuring they are met</li>
                      <li>Training personnel and helping team members develop their skills</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">For Internship, Why Should You Join Us?</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>This profile can be converted into a full-time job after the internship period</li>
                      <li>Internship certificate</li>
                      <li>Opportunity to learn in and out of most emerging technology of the 21st century.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Supplemental Pay:</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Incentives</li>
                      <li>Performance Incentives</li>
                      <li>Quarterly Incentives</li>
                      <li>Yearly Incentives</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Benefits:</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Work from home</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Application Question(S):</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>How many years of experience do you have as a developer?</li>
                      <li>Are you comfortable working remotely?</li>
                      <li>What is your desired salary per year (in INR)?</li>
                      <li>What is your CTC?</li>
                      <li>We must fill this position urgently. Can you start immediately?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">How To Apply:</h3>
                    <p className="text-[14px] leading-relaxed">
                      Ready to create with us? We'd love to see your work! Please submit your resume along with a link to your online portfolio to <a href="mailto:career@designdot.co" className="text-[#3485d1] underline font-medium">career@designdot.co</a> or apply through WhatsApp <a href="tel:+919873282812" className="text-[#3485d1] underline font-medium">+91 9873282812</a>. Applications without a portfolio will not be considered.
                    </p>
                  </div>
                </div>
              </div>
            ) : selectedJob.id === 'mobile-app-developer' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">
                  <p>
                    We are seeking a versatile and talented Mobile App Developer to design, develop, and maintain high-quality applications for both iOS and Android platforms. The ideal candidate is passionate about mobile technology and has hands-on experience across the mobile development spectrum, including Native, Hybrid, and Progressive Web App (PWA) development.
                  </p>

                  <ul className="space-y-2 text-[#111111] font-medium">
                    <li>• <strong>Job Location:</strong> Remote</li>
                    <li>• <strong>Experience:</strong> 2+ Years</li>
                    <li>• <strong>Industry:</strong> IT-Software/Software Services</li>
                    <li>• <strong>Qualification:</strong> B. Tech / MCA</li>
                    <li>• <strong>Job Type:</strong> Full-time</li>
                    <li>• <strong>Salary:</strong> Competitive, based on skills and experience</li>
                  </ul>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Responsibilities</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Design and build advanced cross-platform applications for iOS and Android using frameworks like React Native and Flutter.</li>
                      <li>Develop and maintain hybrid mobile applications using Ionic in combination with Angular.</li>
                      <li>Create responsive and reliable Progressive Web Applications (PWAs) that provide a native-like feel.</li>
                      <li>Collaborate with product managers, UI/UX designers, and other engineers to define requirements and deliver high-quality features.</li>
                      <li>Write clean, scalable, and well-documented code following best practices in TypeScript/JavaScript/Dart.</li>
                      <li>Integrate with back-end systems via RESTful APIs and other services.</li>
                      <li>Manage the full application lifecycle, including submission to the Apple App Store and Google Play Store.</li>
                      <li>Troubleshoot, debug, and optimize application performance, quality, and responsiveness.</li>
                      <li>Stay current with emerging trends and technologies in the mobile development landscape.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Qualifications</h3>
                    <p className="font-bold text-[#111111] mb-2">Required Skills:</p>
                    <ul className="space-y-2.5 list-disc pl-5 mb-8">
                      <li>Strong proficiency in JavaScript/TypeScript and a solid understanding of HTML5/CSS3.</li>
                      <li>Demonstrable experience with React Native or Flutter.</li>
                      <li>Professional experience with Ionic and Angular.</li>
                      <li>Firm grasp of native iOS and Android platforms, their key principles, and UI/UX differences.</li>
                      <li>Proven experience building and consuming RESTful APIs.</li>
                      <li>Proficiency with version control systems, especially Git.</li>
                      <li>Excellent verbal and written communication skills.</li>
                    </ul>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsReadMoreModalOpen(false);
                          handleApplyClick(selectedJob);
                        }}
                        className="bg-[#f27820] hover:bg-[#d96716] text-white text-[15px] font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Preferred (Nice-to-Have) Skills:</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Direct experience with native iOS (Swift/Objective-C) or Android (Kotlin/Java) development.</li>
                      <li>Experience with state management libraries (e.g., Redux, Provider, BLoC).</li>
                      <li>Familiarity with mobile-specific CI/CD pipelines (e.g., Fastlane, Codemagic, Bitrise).</li>
                      <li>Knowledge of automated testing frameworks for mobile (e.g., Jest, Detox, Appium).</li>
                      <li>Understanding of backend technologies (e.g., Node.js, Firebase).</li>
                      <li>Experience with cloud services (AWS, Google Cloud, Azure).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Perks & Benefits</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>A competitive salary and performance-based incentives.</li>
                      <li>Flexible work hours and remote work options.</li>
                      <li>Generous Paid Time Off (PTO) and company holidays.</li>
                      <li>Opportunities for professional growth and skill development.</li>
                      <li>A collaborative and inclusive work environment.</li>
                      <li>A modern tech stack and the opportunity to work on exciting, impactful projects.</li>
                      <li>A supportive team environment where your contributions are valued.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Application Question(S):</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>How many years of experience do you have as a developer?</li>
                      <li>Are you comfortable working remotely?</li>
                      <li>What is your desired salary per year (in INR)?</li>
                      <li>What is your CTC?</li>
                      <li>We must fill this position urgently. Can you start immediately?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Contact Us</h3>
                    <ul className="space-y-2 font-medium">
                      <li>• <strong>Phone:</strong> +91 9873282812</li>
                      <li>• <strong>Email:</strong> <a href="mailto:career@designdot.co" className="text-[#3485d1] underline">career@designdot.co</a></li>
                      <li>• <strong>Website:</strong> <a href="https://www.designdot.co" target="_blank" rel="noreferrer" className="text-[#3485d1] underline">www.designdot.co</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : selectedJob.id === 'full-mern-stack-developer' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">
                  <p>
                    We are seeking a skilled and enthusiastic MERN Stack Developer to join our dynamic team. As a MERN Stack Developer, you will be responsible for developing and maintaining robust, scalable, and high-performance web applications. You will work across the full development lifecycle, from designing system architecture to deploying solutions.
                  </p>

                  <ul className="space-y-2 text-[#111111] font-medium">
                    <li>• <strong>Job Location:</strong> Remote Job</li>
                    <li>• <strong>Experience:</strong> 1+ Yrs</li>
                    <li>• <strong>Industry:</strong> IT-Software/Software Services</li>
                    <li>• <strong>Qualification:</strong> BE/BTech in Computer Science/MCA or equivalent.</li>
                    <li>• <strong>Job Type:</strong> Full-time</li>
                    <li>• <strong>Salary:</strong> ₹3,000,000 + per year</li>
                  </ul>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Responsibilities</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li><strong>Develop Full-Stack Applications:</strong> Build and maintain web applications using the Full stack (MongoDB, Express.js, React.js, React Native, Next js, Node.js).</li>
                      <li>Strong knowledge of React.js / Next.js, related frameworks, React Native, JavaScript, CSS, Web API, JSON or other JS frameworks/libraries.</li>
                      <li><strong>Design and Implement APIs:</strong> Create RESTful APIs and integrate them with front-end components.</li>
                      <li><strong>Database Management:</strong> Design, maintain, and optimize databases in MongoDB.</li>
                      <li><strong>Collaborate with Teams:</strong> Work closely with UI/UX designers, project managers, and other developers to deliver high-quality solutions.</li>
                      <li><strong>Testing and Debugging:</strong> Ensure cross-browser compatibility, test application performance, and fix bugs as needed.</li>
                      <li><strong>Maintain Code Quality:</strong> Write clean, efficient, and well-documented code following best practices.</li>
                      <li><strong>Continuous Improvement:</strong> Stay updated with the latest trends in web development and contribute to team learning.</li>
                      <li><strong>Deployment:</strong> Manage cloud-based hosting environments and ensure seamless application deployment.</li>
                      <li><strong>Problem Solver:</strong> Demonstrated ability to tackle challenges with innovative solutions.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Qualifications</h3>
                    <p className="font-bold text-[#111111] mb-2">Technical Skills:</p>
                    <ul className="space-y-2.5 list-disc pl-5 mb-8">
                      <li>Strong proficiency in JavaScript and ES6+.</li>
                      <li>In-depth knowledge of React.js, React Native, Next Js and Node.js.</li>
                      <li>Experience with front-end libraries and tools such as Redux, Webpack, or Babel.</li>
                      <li>Proficiency in writing efficient, secure, and scalable RESTful APIs.</li>
                      <li>Proficiency with fundamental front-end languages such as React Js, Typescript, HTML5, CSS, and JavaScript.</li>
                      <li>Familiarity with version control systems like Git.</li>
                      <li>Basic understanding of CI/CD pipelines and cloud services like AWS, Azure, or Firebase is a plus.</li>
                      <li>A full-stack developer who can work on the frontend as well as the backend (Web API) if required.</li>
                    </ul>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsReadMoreModalOpen(false);
                          handleApplyClick(selectedJob);
                        }}
                        className="bg-[#f27820] hover:bg-[#d96716] text-white text-[15px] font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Experience:</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>1+ years of professional experience as a MERN Stack Developer.</li>
                      <li>Experience in Agile/Scrum methodologies is preferred.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Soft Skills:</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Strong problem-solving and critical-thinking skills.</li>
                      <li>Excellent communication and teamwork abilities.</li>
                      <li>Ability to manage time effectively, dedication, and meeting deadlines.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Additional Qualifications:</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>React Native, Flutter for mobile application development</li>
                      <li>Solid understanding of algorithms, statistics, and mathematics related to AI and ML.</li>
                      <li><strong>Practical Experience:</strong> Contributions in NLP & Generative AI (Experience working with OpenAI, Google AI, Claude and similar LLMs.).</li>
                      <li>Experience with AI/ML frameworks such as Python, TensorFlow, PyTorch, Keras, or similar.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">What We Offer</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Competitive salary and benefits package.</li>
                      <li>Flexible work hours and remote work options.</li>
                      <li>Opportunities for professional growth and skill development.</li>
                      <li>A collaborative and inclusive work environment.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Application Question(S):</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>How many years of experience do you have as a developer?</li>
                      <li>Are you comfortable working remotely?</li>
                      <li>What is your desired salary per year (in INR)?</li>
                      <li>We must fill this position urgently. Can you start immediately?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Contact Us</h3>
                    <ul className="space-y-2 font-medium">
                      <li>• <strong>Phone:</strong> +91 9873282812</li>
                      <li>• <strong>Email:</strong> <a href="mailto:career@designdot.co" className="text-[#3485d1] underline">career@designdot.co</a></li>
                      <li>• <strong>Website:</strong> <a href="https://www.designdot.co" target="_blank" rel="noreferrer" className="text-[#3485d1] underline">www.designdot.co</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : selectedJob.id === 'php-web-developer' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">
                  <p>
                    We are seeking a motivated and experienced PHP Web Developer to design, develop, and maintain our robust web applications. You will be a key player in our back-end development team, working primarily with the Laravel framework to build scalable, secure, and high-performance solutions.
                  </p>
                  <p>
                    This role is perfect for a developer who is passionate about writing clean code, solving complex challenges, and working within a collaborative team to bring ambitious projects to life.
                  </p>

                  <ul className="space-y-2 text-[#111111] font-medium">
                    <li>• <strong>Location:</strong> Remote</li>
                    <li>• <strong>Company:</strong> DesignDot Technologies Pvt Ltd</li>
                    <li>• <strong>Job Type:</strong> Full-time</li>
                    <li>• <strong>Experience Level:</strong> 2+ Years</li>
                    <li>• <strong>Education:</strong> B. Tech / MCA</li>
                    <li>• <strong>Salary:</strong> Competitive, based on skills and experience</li>
                  </ul>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Qualifications:</h3>
                    <ul className="space-y-2 text-[#111111] font-medium">
                      <li>• B. Tech / MCA (other Qualification)</li>
                      <li>• Experience: 1 - 3 years</li>
                      <li>• Bachelor's degree in Computer Science, Information Technology, or a related field.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Develop, test, and deploy new features and applications using PHP, primarily within the Laravel framework.</li>
                      <li>Maintain and improve the performance and functionality of existing codebase, including projects built on CodeIgniter.</li>
                      <li>Design and manage efficient, scalable database schemas using relational databases like MySQL and PostgreSQL.</li>
                      <li>Build and maintain robust, secure, and well-documented RESTful APIs to be consumed by front-end applications.</li>
                      <li>Write clean, reusable, and efficient code following best practices and coding standards.</li>
                      <li>Troubleshoot, debug, and upgrade existing systems to ensure optimal performance and security.</li>
                      <li>Collaborate closely with front-end developers, project managers, and other stakeholders to deliver high-quality products on schedule.</li>
                      <li>Participate in code reviews to maintain code quality and share knowledge with the team.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Duties:</h3>
                    <ul className="space-y-2.5 list-disc pl-5 mb-8">
                      <li>Design and Build Web Applications.</li>
                      <li>Be responsible for the timely delivery of all tasks assigned.</li>
                      <li>Manage clients independently.</li>
                      <li>Manage the whole project solely or in a team.</li>
                      <li>Solve complex performance problems and architectural challenges.</li>
                      <li>Ensure resolving identified issues related to PHP development to different customers varying from senior.</li>
                      <li>Architect database schemas to support software solutions. (Optional)</li>
                      <li>Troubleshoot, debug, and optimize applications for maximum speed and scalability.</li>
                      <li>Work with third-party integrations, including payment gateways, APIs, and cloud services.</li>
                      <li>Collaborate with designers, project managers, and other developers to ensure smooth project execution.</li>
                      <li>Stay updated with the latest trends and best practices in web development.</li>
                    </ul>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsReadMoreModalOpen(false);
                          handleApplyClick(selectedJob);
                        }}
                        className="bg-[#f27820] hover:bg-[#d96716] text-white text-[15px] font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Required Skills & Qualifications</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>2+ years of professional experience in back-end web development with PHP.</li>
                      <li>Strong proficiency with at least one modern PHP MVC framework, with a strong preference for Laravel. (Professional experience with CodeIgniter is also highly valued).</li>
                      <li>Solid understanding of object-oriented programming (OOP) principles and design patterns.</li>
                      <li>Demonstrable experience with relational databases, including schema design and query optimization (MySQL, PostgreSQL).</li>
                      <li>Experience building and consuming RESTful APIs.</li>
                      <li>Proficiency with version control systems, particularly Git.</li>
                      <li>A solid understanding of the full web technology stack, including basic knowledge of HTML, CSS, and JavaScript.</li>
                      <li>Excellent problem-solving skills and attention to detail.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Preferred Qualifications (A Big Plus)</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Experience with or a strong interest in the full MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                      <li>Proficiency in MySQL & PostgreSQL database design and optimization.</li>
                      <li>Experience with front-end JavaScript frameworks like React.js or Vue.js.</li>
                      <li>Familiarity with containerization technologies like Docker.</li>
                      <li>Experience with cloud platforms (e.g., AWS, Azure, Google Cloud).</li>
                      <li>Knowledge of automated testing frameworks (e.g., PHPUnit, Pest).</li>
                      <li>Familiarity with CI/CD pipelines and DevOps principles.</li>
                      <li>Experience working with APIs, authentication methods (JWT, OAuth), and web security best practices.</li>
                      <li>Design and optimize RESTful APIs for seamless communication between the frontend and backend.</li>
                      <li>Understanding of MVC architecture and Object-Oriented Programming (OOP).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Perks & Benefits</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>A competitive salary and performance-based incentives.</li>
                      <li>Flexible work hours and remote work options.</li>
                      <li>Generous Paid Time Off (PTO) and company holidays.</li>
                      <li>Opportunities for professional growth and skill development.</li>
                      <li>A collaborative and inclusive work environment.</li>
                      <li>A modern tech stack and the opportunity to work on exciting, impactful projects.</li>
                      <li>A collaborative and supportive team environment where your contributions are valued.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Application Question(S):</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>How many years of experience do you have as a developer?</li>
                      <li>Are you comfortable working remotely?</li>
                      <li>What is your desired salary per year (in INR)?</li>
                      <li>What is your CTC?</li>
                      <li>We must fill this position urgently. Can you start immediately?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">How To Apply:</h3>
                    <p className="text-[14px] leading-relaxed">
                      Ready to create with us? We'd love to see your work! Please submit your resume along with a link to your online portfolio to:
                    </p>
                    <ul className="space-y-1 font-medium mt-2">
                      <li>• <strong>Email:</strong> <a href="mailto:career@designdot.co" className="text-[#3485d1] underline">career@designdot.co</a></li>
                      <li>• <strong>WhatsApp:</strong> <a href="tel:+919873282812" className="text-[#3485d1] underline">+91 9873282812</a></li>
                    </ul>
                    <p className="text-[13px] text-[#666666] mt-2">Note: Applications without a portfolio will not be considered.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">





                  <p>
                    Expert in {selectedJob.title}. It is the procedure which brings site on the top pages of the web index. The Specialist's role is to design, create, and deliver marketing programs to support expansion and growth of the company services and products. Proficiency in Content Creation / writing, SEO, SMO, SEM is a must. Creatively handle various online marketing tools and be able to work on prominent social media platforms. Good communication skills and ability to work in a team.
                  </p>

                  <ul className="space-y-2 text-[#111111] font-medium">
                    <li>• <strong>Job Location:</strong> New Delhi</li>
                    <li>• <strong>Experience:</strong> {selectedJob.experience}</li>
                    <li>• <strong>Education:</strong> {selectedJob.education}</li>
                  </ul>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Key Responsibilities</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-[#111111] mb-2">Search Engine Marketing & Optimization (SEM/SEO):</h4>
                        <ul className="space-y-2 list-disc pl-5">
                          <li>Develop and execute comprehensive SEO strategies to increase organic search rankings and drive relevant traffic.</li>
                          <li>Conduct keyword research, competitive analysis, and on-page/off-page SEO audits.</li>
                          <li>Plan, create, and manage high-performing PPC campaigns across Google Ads and other search platforms.</li>
                          <li>Monitor, analyze, and report on SEO and SEM campaign performance, providing actionable insights for optimization.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#111111] mb-2">Social Media Marketing & Optimization (SMM/SMO):</h4>
                        <ul className="space-y-2 list-disc pl-5">
                          <li>Manage and grow our social media profiles, including LinkedIn, Instagram, Facebook, TikTok, and X.</li>
                          <li>Develop and execute a content calendar that aligns with our marketing goals and brand voice.</li>
                          <li>Create and manage paid social media advertising campaigns (e.g., Meta Ads, LinkedIn Ads) to reach target audiences and drive conversions.</li>
                          <li>Engage with our online community, respond to comments and messages, and foster a positive brand image.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#111111] mb-2">Content & Creative:</h4>
                        <ul className="space-y-2 list-disc pl-5">
                          <li>Design visually appealing graphics, carousels, infographics, and ad creatives using Canva.</li>
                          <li>Create and edit engaging short-form video content for platforms like Instagram Reels, TikTok, and YouTube Shorts.</li>
                          <li>Ensure all content is on-brand, consistent in style, quality, and tone of voice.</li>
                          <li>Stay up-to-date with the latest digital media trends, new platform features, and creative best practices.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#111111] mb-2">Analytics & Reporting:</h4>
                        <ul className="space-y-2 list-disc pl-5">
                          <li>Track and analyze key metrics across our website, social channels, and ad campaigns using tools like Google Analytics 4.</li>
                          <li>Prepare regular performance reports that translate complex data into clear highlights and actionable recommendations.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#111111] mb-2">Qualifications & Skills</h4>
                        <p className="font-semibold mb-2">Required:</p>
                        <ul className="space-y-2 list-disc pl-5 mb-8">
                          <li>2-4+ years of proven experience in a digital marketing role with a focus on SEO, SEM, and SMM.</li>
                          <li>Demonstrable expertise in managing Google Ads campaigns and implementing SEO best practices.</li>
                          <li>Strong proficiency in Canva for creating professional-quality marketing assets.</li>
                          <li>Hands-on experience with video editing for social media (experience with tools like CapCut, Adobe Premiere Rush, Final Cut Pro, or similar is acceptable).</li>
                          <li>Solid understanding of social media platforms, their respective audiences, and best practices for organic and paid content.</li>
                          <li>Experience with Google Analytics, Google Search Console, and social media management tools (e.g., Buffer, Hootsuite, Sprout Social).</li>
                          <li>A data-driven mindset with excellent analytical and problem-solving skills.</li>
                          <li>Strong written communication and copywriting skills.</li>
                        </ul>

                        <div className="pt-4">
                          <button
                            onClick={() => {
                              setIsReadMoreModalOpen(false);
                              handleApplyClick(selectedJob);
                            }}
                            className="bg-[#f27820] hover:bg-[#d96716] text-white text-[15px] font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shadow-md rounded-none cursor-pointer"
                            style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                          >
                            APPLY NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Responsibilities And Duties</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Manage all social media accounts across platforms effectively.</li>
                      <li>Experience in setting up and optimizing Google AdWords, LinkedIn Sales Navigator, Bing, and Facebook Ad campaigns.</li>
                      <li>Monitor SEO and web traffic metrics to measure performance and identify areas for improvement.</li>
                      <li>Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform, and motivate.</li>
                      <li>Stay up-to-date with the latest trends and best practices in online marketing and performance measurement.</li>
                      <li>Monitor and develop reports on competitor activity within social media spaces.</li>
                      <li>Coordinate the creation of digital content, including website updates, blogs, press releases, and podcasts.</li>
                      <li>Manage end-to-end digital marketing projects from planning to execution and analysis.</li>
                      <li>Ability to build and lead your own marketing team while coordinating with the lead development team.</li>
                      <li>Good knowledge of social media platforms and content management systems.</li>
                      <li>Design and implement a results-driven social media strategy aligned with overall business goals.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Other Responsibilities</h3>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>Prepares reports by collecting, analyzing, and summarizing information.</li>
                      <li>Experienced in Online Reputation Management (ORM) to monitor and improve brand perception.</li>
                      <li>Accurately analyzes and assesses statistical data for performance insights.</li>
                      <li>Working knowledge of tools like SEMrush, Serpstat, Alexa, and similar platforms.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">Application Question(s):</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>How many years of experience do you have as a developer?</li>
                      <li>Are you comfortable working remotely?</li>
                      <li>What is your desired salary per year (in INR)?</li>
                      <li>What is your current CTC?</li>
                      <li>We must fill this position urgently. Can you start immediately?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#111111] mb-3">For More Information Or To Apply, Contact Us:</h3>
                    <ul className="space-y-2 font-medium">
                      <li>• <strong>WhatsApp:</strong> +91 98732 82812</li>
                      <li>• <strong>Email:</strong> <a href="mailto:career@designdot.co" className="text-[#3485d1] underline">career@designdot.co</a></li>
                      <li>• <strong>Website:</strong> <a href="https://www.designdot.co" target="_blank" rel="noreferrer" className="text-[#3485d1] underline">www.designdot.co</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}


          </div>
        </div>,
        document.body
      )}

      <Footer />
    </div>
  );
}

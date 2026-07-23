'use client';

import { useState, useEffect } from 'react';
import { X, Send, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Neeraj Tiwari",
    role: "Director - Digital Engineering",
    company: "Americana Group (Kuwait Food Co.)",
    avatar: "https://dd.mocup.in/assets/web/images/client/Neeraj-Tiwari.webp",
    text: "We approached Designdot with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge."
  },
  {
    name: "B N Sinha",
    role: "Director",
    company: "AR Group",
    avatar: "https://dd.mocup.in/assets/web/images/client-icon.jpg",
    text: "He helped our firm with fresh designs for our logo, web site, etc. and they did an amazing job... We really appreciated their creativity, their intelligence ability to work with our content. Very professional and prompt."
  },
  {
    name: "Kennette Burgess",
    role: "Director",
    company: "International Strategic Marketing",
    avatar: "https://dd.mocup.in/assets/web/images/keneete.jpeg",
    text: "Websites were beautiful and functional with CMS and other features like flash sites, flash banners, document libraries, etc. Would recommend them for your web development project."
  }
];

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    prefix: '+91',
    phone: '',
    captcha: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', idea: '', prefix: '+91', phone: '', captcha: '' });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/10 animate-in fade-in duration-200 pointer-events-none">
      <div 
        onClick={(e) => {
          if (typeof window !== 'undefined' && (window as any).cycleTheme) {
            (window as any).cycleTheme(e.clientX, e.clientY);
          }
        }}
        className="relative w-full max-w-[920px] flex flex-col gap-4 max-h-[95vh] pointer-events-auto translate-y-6"
      >
        {/* Main Modal Box */}
        <div className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row relative">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-slate-300 hover:text-slate-500 transition-colors cursor-pointer"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          {/* Left Section: Testimonials & Client info */}
          <div className="w-full md:w-1/2 bg-[#fffaf5] px-6 pt-4 pb-4 md:px-8 md:pt-6 md:pb-8 flex flex-col justify-start select-none relative">
            <h3 className="text-[22px] font-medium text-[#f27820] mb-1.5" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>Leaving Already?</h3>
            <p className="text-slate-900 text-[14px] font-bold mb-8 leading-snug max-w-[380px]">
              Hear from our clients and why 5000+ businesses trust <br /> Designdot
            </p>

            {/* Testimonial Card */}
            <div className="relative bg-white rounded-xl shadow-2xl p-3 flex flex-col items-left text-center mt-3">
              {/* Previous/Next Arrows */}
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
                className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] bg-[#f0f1f3] rounded-full flex items-center justify-center text-[#495057] hover:bg-[#e2e4e7] transition-colors cursor-pointer shadow z-10">
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
                className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] bg-[#f0f1f3] rounded-full flex items-center justify-center text-[#495057] hover:bg-[#e2e4e7] transition-colors cursor-pointer shadow z-10">
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>

              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out w-full"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {TESTIMONIALS.map((testi, idx) => {
                    return (
                      <div
                        key={idx}
                        className="w-full flex-shrink-0 flex flex-col items-center"
                      >
                        <div className="w-12 h-12 mb-3 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center bg-white">
                          <img src={testi.avatar} alt={testi.name} className="w-full h-full object-cover" />
                        </div>
                        <h6 className="font-bold text-[16px] text-slate-900 mb-2">{testi.name}</h6>
                        <div className="border border-slate-300 rounded-[20px] px-4 py-1.5 mb-4 inline-block">
                          <span className="text-[11px] text-slate-500 italic block leading-tight">{testi.role}</span>
                          <span className="text-[11px] text-slate-500 italic block leading-tight">{testi.company}</span>
                        </div>
                        <p className="font-medium text-slate-800 text-[13px] leading-relaxed mb-2 px-2">
                          “{testi.text}”
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="w-full md:w-1/2 px-6 pt-4 pb-4 md:px-8 md:pt-6 md:pb-8 overflow-y-auto">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Check size={36} />
                </div>
                <h3 className="text-xl font-bold mb-1">Proposal Requested!</h3>
                <p className="text-slate-500 text-sm">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-[20px] font-medium mb-1.5 text-[#f27820]" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>
                  Tell Us What You Need,
                </h3>
                <p className="text-[20px] text-[#f27820] font-medium mb-8 leading-tight" style={{ fontFamily: 'GTWalsheimPro-Regular' }}>
                  And We'll Get Back With A Cost And<br />Timeline Estimate
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-[16px]">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b border-slate-300 focus:border-[#f27820] outline-none py-2 text-slate-900 transition-colors placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="E-Mail ID*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b border-slate-300 focus:border-[#f27820] outline-none py-2 text-slate-900 transition-colors placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Describe Your Project/Idea In Brief"
                      rows={1}
                      value={formData.idea}
                      onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                      className="w-full border-b border-slate-300 focus:border-[#f27820] outline-none py-2 text-slate-900 transition-colors resize-none placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex gap-4">
                    <select
                      value={formData.prefix}
                      onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}
                      className="border-b border-slate-300 focus:border-[#f27820] outline-none py-2 bg-transparent text-slate-700 w-20"
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number*"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border-b border-slate-300 focus:border-[#f27820] outline-none py-2 text-slate-900 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-800 font-bold text-[14px]">3 + 2 =</span>
                      <input
                        type="text"
                        required
                        className="w-16 border-b border-slate-300 focus:border-[#f27820] outline-none py-1 text-center font-bold text-slate-900"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex-1 bg-[#f27820] hover:bg-[#d56113] text-white py-3.5 rounded-[4px] font-bold text-[14px] tracking-wider cursor-pointer transition-colors"
                      style={{ fontFamily: 'GTWalsheimPro-Regular' }}
                    >
                      SCHEDULE FREE CONSULTATION
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-white rounded-[12px] shadow-2xl p-5 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[14px] text-[#1a1a1a] font-bold leading-relaxed max-w-[560px]" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>
            Empowering businesses worldwide with <strong className="text-[#f27820]">5000+</strong> custom-built apps that drive growth and fuel innovation.
          </span>
          <div className="flex gap-10 md:gap-10 mt-1 md:-mt-5 opacity-90 mix-blend-multiply items-center shrink-0">
            <div className="flex flex-col items-center justify-center gap-0">
              <img src="https://dd.mocup.in/assets/web/images/clientele/fortis%20(1).jpg" alt="fortis" className="h-10 md:h-12 object-contain shrink-0" />
              <span className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a]" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>fortis</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-0.5">
              <img src="https://dd.mocup.in/assets/web/images/clientele/panasonic-logo.jpg" alt="panasonic" className="h-10 md:h-12 object-contain shrink-0" />
              <span className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a]" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>panasonic</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-0.5">
              <img src="https://dd.mocup.in/assets/web/images/clientele/british-council-1-logo-png-transparent.jpg" alt="british" className="h-10 md:h-12 object-contain shrink-0" />
              <span className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a]" style={{ fontFamily: 'GTWalsheimPro-Bold' }}>british</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ReactNativeClient() {
  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-6 text-[32px] sm:text-[52px] md:text-[72px] lg:text-[84px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                .REACT NATIVE APP DEVELOPMENT COMPANY
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  At DesignDot, we offer expert React Native app development services to help businesses build high-performance mobile applications using a single codebase.
                </p>
                <p>
                  Our React Native solutions deliver native-like performance, faster development cycles, and cost-effective scalability for both iOS and Android platforms.
                </p>
                <p>
                  Whether you're a startup or an enterprise, our team creates secure, user-friendly, and scalable React Native applications tailored to your business needs.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="React Native App Development Company"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Build Cross-Platform Apps with React Native */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                BUILD CROSS-PLATFORM APPS WITH <span className="text-[#f27820]">REACT NATIVE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                React Native enables businesses to develop powerful mobile apps that work seamlessly across multiple platforms. Our developers leverage the framework's flexibility to deliver apps that offer smooth performance and consistent user experiences. We help you:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Validate your app idea and roadmap',
                  'Optimize performance and scalability',
                  'Design intuitive user interfaces',
                  'Deploy apps to app stores efficiently',
                  'Develop cross-platform mobile apps',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-[#1a1a1a] text-[16px] md:text-[18px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-3 text-[#1a1a1a]">•</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our React Native App Development Services */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR REACT NATIVE APP <span className="text-[#f27820]">DEVELOPMENT SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '1. CUSTOM REACT NATIVE APP DEVELOPMENT',
                    desc: 'We design and develop custom React Native applications that align with your business objectives.',
                  },
                  {
                    title: '2. CROSS-PLATFORM MOBILE APP DEVELOPMENT',
                    desc: 'Using a shared codebase, we build apps that run smoothly on both iOS and Android.',
                  },
                  {
                    title: '3. UI/UX DESIGN FOR REACT NATIVE APPS',
                    desc: 'Our designers craft clean, intuitive, and engaging interfaces that enhance usability.',
                  },
                  {
                    title: '4. APP MIGRATION TO REACT NATIVE',
                    desc: 'We help businesses migrate existing mobile apps to React Native for better scalability.',
                  },
                  {
                    title: '5. THIRD-PARTY INTEGRATION',
                    desc: 'We integrate APIs, cloud services, payment gateways, and analytics tools.',
                  },
                  {
                    title: '6. TESTING, MAINTENANCE & SUPPORT',
                    desc: 'Our team ensures every React Native app is thoroughly tested and maintained post-launch.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[16px] md:text-[18px] mb-3 uppercase tracking-[0.5px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Technologies We Use */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                CORE TECHNOLOGIES <span className="text-[#f27820]">WE USE</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our React Native developers work with modern tools and frameworks to deliver robust applications:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'React Native',
                  'Firebase',
                  'JavaScript & TypeScript',
                  'Cloud Integration',
                  'Redux',
                  'Third-Party Libraries',
                  'REST APIs',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-[#1a1a1a] text-[16px] md:text-[18px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-3 text-[#1a1a1a]">•</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Designdot for React Native Development? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY CHOOSE DESIGNDOT FOR <span className="text-[#f27820]">REACT NATIVE DEVELOPMENT?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Expert React Native Developers',
                    desc: 'Experienced developers delivering scalable cross-platform solutions.',
                  },
                  {
                    title: 'Faster Time to Market',
                    desc: 'Quick development cycles while maintaining high quality.',
                  },
                  {
                    title: 'Cost-Effective Development',
                    desc: 'Build apps for multiple platforms using a single codebase.',
                  },
                  {
                    title: 'High Performance & Scalability',
                    desc: 'Apps optimized for speed, stability, and future growth.',
                  },
                  {
                    title: 'Agile Development Process',
                    desc: 'Flexible workflows with transparency and continuous improvement.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e0d8d0]/40 hover:border-[#f27820] py-7 px-8 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transform transition-all duration-300 ease-out"
                  >
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-2"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Partner with Designdot? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-4 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY PARTNER WITH <span className="text-[#f27820]">DESIGNDOT?</span>
              </h2>
              <p
                className="text-[#444444] mb-8 text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                With over 20+ years in business and 5,000+ successful projects, we bring unmatched expertise to the table.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'EXPERT DEVELOPERS',
                    desc: 'Access to a pool of seasoned React Native specialists.',
                  },
                  {
                    title: 'AGILE PROCESS',
                    desc: 'Transparent communication and iterative development for predictable results.',
                  },
                  {
                    title: 'PERFORMANCE FOCUS',
                    desc: 'We optimize every line of code for speed and battery efficiency.',
                  },
                  {
                    title: 'FLEXIBLE MODELS',
                    desc: 'Choose from dedicated teams, staff augmentation, or project-based outsourcing.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3 uppercase tracking-[0.5px]"
                        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-10">
              <h2
                className="text-[#555555] uppercase mb-8 leading-[1.2] text-[18px] sm:text-[22px] md:text-[24px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro', sans-serif",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                FREQUENTLY <span className="text-[#f27820]">ASKED QUESTIONS</span>
              </h2>

              <div className="border-t border-[#e0d8d0]/30 space-y-0">
                {[
                  {
                    id: 1,
                    question: 'Q: What is React Native, and why should I choose it for my app?',
                    answer:
                      'React Native is an open-source framework created by Meta that allows developers to build mobile apps for both iOS and Android using a single codebase.',
                  },
                  {
                    id: 2,
                    question: 'Q: Is a React Native app as fast as a Native app?',
                    answer:
                      'Yes. React Native uses native components and delivers near-native performance for most applications.',
                  },
                  {
                    id: 3,
                    question: 'Q: How long does it take to develop a React Native application?',
                    answer:
                      'A standard MVP typically takes 10 to 14 weeks depending on project complexity.',
                  },
                  {
                    id: 4,
                    question: 'Q: Can you migrate my existing iOS or Android app to React Native?',
                    answer:
                      'Yes. We specialize in migrating legacy native apps to React Native.',
                  },
                  {
                    id: 5,
                    question: 'Q: How much does React Native app development cost?',
                    answer:
                      'Costs depend on features, integrations, and design complexity. We offer flexible pricing models.',
                  },
                  {
                    id: 6,
                    question: 'Q: Will I own the source code after the project is finished?',
                    answer:
                      'Yes. Once the project is completed and final payment is made, you own 100% of the source code.',
                  },
                  {
                    id: 7,
                    question: 'Q: How do you handle app updates and maintenance?',
                    answer:
                      'We offer post-launch support packages including updates, bug fixes, and maintenance.',
                  },
                  {
                    id: 8,
                    question: 'Q: Do you sign a Non-Disclosure Agreement (NDA)?',
                    answer:
                      'Yes. We are happy to sign an NDA before discussing confidential project details.',
                  },
                ].map((faq) => (
                  <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-[#e0d8d0]/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left font-bold text-[16px] md:text-[18px] text-[#0e2038] hover:text-[#f27820] focus:outline-none transition-colors duration-200"
        style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
      >
        <span>{question}</span>
        {isOpen ? (
          <span className="text-[#f27820] font-bold text-[22px] leading-none shrink-0 ml-4 select-none">-</span>
        ) : (
          <span className="text-[#f27820] font-bold text-[22px] leading-none shrink-0 ml-4 select-none">+</span>
        )}
      </button>
      {isOpen && (
        <div
          className="pb-6 text-black text-[16px] md:text-[21px] leading-[26px]"
          style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}


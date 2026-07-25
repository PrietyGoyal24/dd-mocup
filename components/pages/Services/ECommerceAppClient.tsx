'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function ECommerceAppClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. Which platforms do you build e-commerce apps for?',
      answer:
        'We build e-commerce mobile applications for iOS, Android, and cross-platform frameworks like React Native and Flutter.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. Can you integrate multiple payment gateways into the app?',
      answer:
        'Yes. We integrate secure payment gateways including Stripe, PayPal, Razorpay, Apple Pay, Google Pay, and custom bank gateways.',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. Can the app sync with our existing web store and inventory?',
      answer:
        'Absolutely. We build API sync integrations connecting your mobile app with Shopify, WooCommerce, Magento, or custom backend inventory systems.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. Do you support multi-vendor marketplace app development?',
      answer:
        'Yes. We design and build comprehensive multi-vendor marketplaces with seller dashboards, commission tracking, ratings, and vendor payouts.',
      isOpen: false,
    },
    {
      id: 5,
      question: '5. How long does it take to launch an e-commerce mobile app?',
      answer:
        'Timelines typically range from 6 to 14 weeks depending on features, platforms, and third-party integrations.',
      isOpen: false,
    },
  ];

  const [faqs, setFaqs] = useState(initialFaqs);

  const toggleFaq = (id: number) => {
    setFaqs(
      faqs.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#fcf5f5] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar theme="light" />

        <main className="w-full pt-[96px] lg:pt-[120px]">

          {/* Hero Section */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[115px] pt-8 pb-6">
            <div className="w-full">
              <h1
                className="text-[#1a1a1a] uppercase mb-6 text-[32px] sm:text-[56px] md:text-[76px] lg:text-[90px] leading-[1.05] tracking-[1px] font-normal"
                style={{ fontFamily: "'SocialGothic-Bold', 'GT-Walsheim-Pro'" }}
              >
                <span className="inline-block w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[#1a1a1a] mr-2.5 sm:mr-3.5 align-baseline"></span>
                E-COMMERCE APP
                <span className="block">DEVELOPMENT</span>
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p className="font-bold text-[#1a1a1a]">
                  Build Powerful Mobile Shopping Experiences That Drive Sales
                </p>
                <p>
                  The future of retail is mobile. With consumers increasingly shopping through smartphones and tablets, businesses need high-performing, secure, and user-friendly e-commerce apps to stay competitive. A well-designed e-commerce application enhances customer experience, increases engagement, and drives higher conversions.
                </p>
                <p>
                  We develop scalable, feature-rich e-commerce mobile applications tailored to your business goals — helping you deliver seamless shopping experiences anytime, anywhere.
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
                  alt="E-Commerce App Development"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Our E-Commerce App Development Services */}
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
                OUR <span className="text-[#f27820]">E-COMMERCE APP DEVELOPMENT SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '1. CUSTOM E-COMMERCE APP DEVELOPMENT',
                    desc: 'We build fully customized applications designed around your brand and business model.',
                    bullets: [
                      'Unique UI/UX design',
                      'Custom product catalogs',
                      'Secure payment integration',
                      'Order management systems',
                      'Real-time inventory updates',
                    ],
                  },
                  {
                    title: '2. NATIVE & CROSS-PLATFORM DEVELOPMENT',
                    desc: 'We develop apps that deliver optimal performance across devices.',
                    bullets: [
                      'Native Android app development',
                      'Native iOS app development',
                      'Cross-platform apps (Flutter, React Native)',
                      'Seamless user experience across devices',
                    ],
                  },
                  {
                    title: '3. MARKETPLACE APP DEVELOPMENT',
                    desc: 'Launch multi-vendor platforms with advanced functionality.',
                    bullets: [
                      'Vendor dashboards',
                      'Product management systems',
                      'Commission management',
                      'Ratings & reviews',
                      'Secure vendor payments',
                    ],
                  },
                  {
                    title: '4. SHOPPING CART & PAYMENT INTEGRATION',
                    desc: 'Enable secure and smooth transactions.',
                    bullets: [
                      'Multiple payment gateway integration',
                      'Digital wallets',
                      'Subscription billing systems',
                      'One-click checkout',
                      'Secure transaction processing',
                    ],
                  },
                  {
                    title: '5. APP UI/UX DESIGN',
                    desc: 'We design intuitive and visually appealing interfaces to enhance user experience.',
                    bullets: [
                      'Mobile-first design',
                      'Easy navigation',
                      'Advanced search & filters',
                      'Personalized product recommendations',
                      'Wishlist & cart functionality',
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
                  >
                    <h3
                      className="text-[#0e2038] uppercase font-bold text-[17px] md:text-[19px] mb-3 tracking-[0.5px]"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed mb-4 text-justify"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                    <ul className="space-y-1.5 pl-5 list-disc text-[#1a1a1a]">
                      {item.bullets.map((b, idx) => (
                        <li
                          key={idx}
                          className="text-[14px] md:text-[15px]"
                          style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
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

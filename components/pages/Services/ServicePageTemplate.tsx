'use client';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { ServiceData } from '@/constants/serviceData';

interface ServicePageTemplateProps {
  service: ServiceData;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="w-full min-h-screen bg-[#fffbf8] text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white">
      {/* Navigation Header */}
      <Navbar theme="light" />

      <main className="w-full pt-[96px] lg:pt-[120px]">
        {/* Hero Title Section */}
        <div className="w-full px-[20px] md:px-[50px] pt-[30px] md:pt-[50px] pb-[20px] md:pb-[30px] bg-[#fffbf8]">
          <div className="w-full max-w-[1320px] mx-auto">
            <h1
              className="text-[#111111] uppercase leading-[1.1]"
              style={{
                fontFamily: 'GTWalsheimPro-Bold',
                fontSize: 'clamp(28px, 5vw, 60px)',
                fontWeight: 900,
                letterSpacing: '-0.5px',
              }}
            >
              <span className="text-[#f58331]">.</span>{service.title}
            </h1>
          </div>
        </div>

        {/* Hero Description */}
        <div className="w-full px-[20px] md:px-[50px] pb-[30px] md:pb-[40px] bg-[#fffbf8]">
          <div className="w-full max-w-[1320px] mx-auto">
            <p
              className="text-[#444444] leading-[1.8] max-w-[900px]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(14px, 1.6vw, 17px)',
                fontWeight: 400,
              }}
            >
              {service.heroDescription}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full px-[20px] md:px-[50px] pb-[40px] md:pb-[60px] bg-[#fffbf8]">
          <div className="w-full max-w-[1320px] mx-auto">
            <div className="w-full overflow-hidden">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  // Fallback to generic image if specific one fails
                  (e.target as HTMLImageElement).src = 'https://dd.mocup.in/assets/web/images/expertise.webp';
                }}
              />
            </div>
          </div>
        </div>

        {/* Content Section - Reinvent Your Business */}
        <div className="w-full px-[20px] md:px-[50px] pb-[40px] md:pb-[60px] bg-[#fffbf8]">
          <div className="w-full max-w-[1320px] mx-auto">
            <h2
              className="text-[#111111] uppercase mb-[20px] md:mb-[30px] leading-[1.2]"
              style={{
                fontFamily: 'GTWalsheimPro-Bold',
                fontSize: 'clamp(18px, 3vw, 28px)',
                fontWeight: 900,
                letterSpacing: '0.5px',
              }}
            >
              REINVENT YOUR BUSINESS WITH THE BEST {service.category} COMPANY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[50px]">
              <div>
                <p
                  className="text-[#555555] leading-[1.9] mb-[20px]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    fontWeight: 400,
                  }}
                >
                  At DesignDot, we specialize in delivering world-class {service.title.toLowerCase()} services that drive innovation and business growth. Our team of experienced professionals combines deep technical expertise with industry knowledge to create solutions that meet the unique challenges of your organization.
                </p>
                <p
                  className="text-[#555555] leading-[1.9]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    fontWeight: 400,
                  }}
                >
                  We understand that every business is different, which is why we take a consultative approach — working closely with you to understand your goals, challenges, and vision before crafting a tailored solution that delivers measurable results.
                </p>
              </div>
              <div>
                <p
                  className="text-[#555555] leading-[1.9] mb-[20px]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    fontWeight: 400,
                  }}
                >
                  With over 20 years in the industry and more than 5,000 clients worldwide, DesignDot has established itself as a trusted partner for businesses of all sizes. From startups to enterprises, we bring the same level of dedication, quality, and innovation to every project.
                </p>
                <p
                  className="text-[#555555] leading-[1.9]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    fontWeight: 400,
                  }}
                >
                  Our commitment to excellence, combined with cutting-edge technologies and agile methodologies, ensures that your project is delivered on time, within budget, and to the highest standards of quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full px-[20px] md:px-[50px] py-[40px] md:py-[60px] bg-[#f5f0eb]">
          <div className="w-full max-w-[1320px] mx-auto">
            <h2
              className="text-[#111111] uppercase mb-[30px] md:mb-[40px] leading-[1.2]"
              style={{
                fontFamily: 'GTWalsheimPro-Bold',
                fontSize: 'clamp(18px, 3vw, 28px)',
                fontWeight: 900,
                letterSpacing: '0.5px',
              }}
            >
              WHY CHOOSE DESIGNDOT FOR {service.title.toUpperCase()}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px]">
              {[
                {
                  icon: '🎯',
                  title: 'Expert Team',
                  desc: `Our team brings deep expertise in ${service.title.toLowerCase()}, ensuring your project is handled by specialists who understand the domain.`,
                },
                {
                  icon: '⚡',
                  title: 'Agile Delivery',
                  desc: 'We follow agile methodologies for iterative development, ensuring transparency, flexibility, and rapid time-to-market.',
                },
                {
                  icon: '🔒',
                  title: 'Quality Assurance',
                  desc: 'Every deliverable undergoes rigorous quality testing and review to ensure it meets the highest standards of performance and reliability.',
                },
                {
                  icon: '🌐',
                  title: 'Global Experience',
                  desc: 'With 5000+ clients across 50+ countries, we bring a global perspective and understanding of diverse market requirements.',
                },
                {
                  icon: '💡',
                  title: 'Innovation Driven',
                  desc: 'We stay ahead of technology trends and leverage the latest tools and frameworks to deliver future-proof solutions.',
                },
                {
                  icon: '🤝',
                  title: '24/7 Support',
                  desc: 'Our dedicated support team ensures your systems run smoothly with round-the-clock monitoring and maintenance.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-[24px] md:p-[30px] border border-[#e0d8d0] hover:border-[#f58331] transition-colors duration-300"
                >
                  <span className="text-[32px] mb-[16px] block">{item.icon}</span>
                  <h3
                    className="text-[#111111] uppercase mb-[10px]"
                    style={{
                      fontFamily: 'GTWalsheimPro-Bold',
                      fontSize: '16px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#666666] leading-[1.7]"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="w-full px-[20px] md:px-[50px] py-[40px] md:py-[60px]"
          style={{
            background: 'linear-gradient(135deg, #0e2038 0%, #1a3a5c 50%, #f58331 100%)',
          }}
        >
          <div className="w-full max-w-[1320px] mx-auto text-center">
            <h2
              className="text-white uppercase mb-[16px] leading-[1.2]"
              style={{
                fontFamily: 'GTWalsheimPro-Bold',
                fontSize: 'clamp(20px, 3.5vw, 36px)',
                fontWeight: 900,
                letterSpacing: '1px',
              }}
            >
              Ready to get started?
            </h2>
            <p
              className="text-white/80 mb-[30px] max-w-[600px] mx-auto"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                fontWeight: 400,
              }}
            >
              Let&apos;s discuss your {service.title.toLowerCase()} requirements. Our experts are ready to help you achieve your business goals.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-[#f58331] hover:bg-[#e0721f] text-white uppercase font-bold tracking-wider transition-colors duration-300"
              style={{
                fontFamily: 'GTWalsheimPro-Bold',
                fontSize: '14px',
                padding: '14px 40px',
                letterSpacing: '2px',
              }}
            >
              Contact Us Today
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full px-[20px] md:px-[50px] py-[40px] md:py-[50px] bg-[#fffbf8]">
          <div className="w-full max-w-[1320px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[30px] text-center">
              {[
                { value: '20+', label: 'Years In Business' },
                { value: '5000+', label: 'Clients Worldwide' },
                { value: '1700+', label: 'Projects Executed' },
                { value: '500+', label: 'Expert Developers' },
              ].map((stat) => (
                <div key={stat.label} className="py-[20px]">
                  <span
                    className="text-[#f58331] block mb-[8px]"
                    style={{
                      fontFamily: 'GTWalsheimPro-Bold',
                      fontSize: 'clamp(28px, 4vw, 48px)',
                      fontWeight: 900,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[#111111] uppercase"
                    style={{
                      fontFamily: 'GTWalsheimPro-Bold',
                      fontSize: 'clamp(10px, 1.2vw, 13px)',
                      fontWeight: 700,
                      letterSpacing: '2px',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

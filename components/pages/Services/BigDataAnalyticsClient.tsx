'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { CheckCircle } from 'lucide-react';

export default function BigDataAnalyticsClient() {
  const initialFaqs = [
    {
      id: 1,
      question: '1. What is Big Data Analytics?',
      answer:
        'Big Data Analytics is the process of examining large, complex data sets to uncover hidden patterns, correlations, market trends, and customer preferences to make data-driven business decisions.',
      isOpen: false,
    },
    {
      id: 2,
      question: '2. Which cloud platforms do you use for Big Data?',
      answer:
        'We work with major cloud platforms including AWS (Redshift, EMR, Kinesis), Google Cloud (BigQuery, Dataproc), and Microsoft Azure (Synapse, Databricks).',
      isOpen: false,
    },
    {
      id: 3,
      question: '3. How do you handle data privacy and security?',
      answer:
        'We enforce strict data governance, end-to-end encryption, role-based access control (RBAC), and compliance with GDPR, HIPAA, and SOC2 standards.',
      isOpen: false,
    },
    {
      id: 4,
      question: '4. Can you integrate BI dashboards with our existing database?',
      answer:
        'Yes. We connect custom Power BI, Tableau, or Looker dashboards with SQL/NoSQL databases, data warehouses, and live API endpoints.',
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
                .BIG DATA ANALYTICS
              </h1>
              <div
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed space-y-3 mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                <p>
                  In the age of information overload, businesses need to harness the power of big data to stay competitive. Our Big Data Analytics services are designed to help you make sense of complex data sets, uncover hidden trends, and gain real-time, actionable insights that drive growth and efficiency. Whether you&apos;re dealing with structured, semi-structured, or unstructured data, we provide end-to-end big data solutions customized to your business needs.
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
                  alt="Big Data Analytics"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Comprehensive Big Data Services */}
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
                COMPREHENSIVE <span className="text-[#f27820]">BIG DATA SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Data Warehousing & ETL',
                    desc: 'Build robust data warehouses and implement Extract, Transform, Load (ETL) pipelines to centralize and clean your data for consistent analysis.',
                  },
                  {
                    title: 'Real-Time Analytics',
                    desc: 'Monitor and analyze live data streams using platforms like Apache Kafka, Spark, and Flink to make decisions on the fly.',
                  },
                  {
                    title: 'Predictive Analytics',
                    desc: 'Forecast future outcomes using historical data and machine learning models for informed decision-making.',
                  },
                  {
                    title: 'Business Intelligence Dashboards',
                    desc: 'Develop intuitive and interactive BI dashboards using tools like Tableau, Power BI, and Looker to visualize key metrics.',
                  },
                  {
                    title: 'Cloud-Based Data Lakes',
                    desc: 'Implement scalable and secure data lakes on AWS, Google Cloud, or Azure to store and process vast data sets.',
                  },
                  {
                    title: 'Data Governance & Quality',
                    desc: 'Ensure data integrity, compliance, and security across all analytics workflows with strong governance practices.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
                  >
                    <div className="w-[42px] h-[42px] rounded-lg bg-[#fff1e8] text-[#f27820] flex items-center justify-center mb-4">
                      <CheckCircle className="w-5 h-5 text-[#f27820]" />
                    </div>
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed text-justify"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us for Big Data Analytics? */}
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
                WHY CHOOSE US FOR <span className="text-[#f27820]">BIG DATA ANALYTICS?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Domain Expertise',
                    desc: 'Our team has vast experience across industries like finance, healthcare, retail, and logistics, enabling tailored big data strategies.',
                  },
                  {
                    title: 'Scalable Architecture',
                    desc: 'We design big data solutions that grow with your business using distributed systems and cloud-native infrastructure.',
                  },
                  {
                    title: 'Security-First Approach',
                    desc: 'Security is embedded in every layer of our big data architecture, from encryption to role-based access controls.',
                  },
                  {
                    title: 'Performance Optimization',
                    desc: 'We identify performance bottlenecks and optimize query efficiency, reducing latency and operational costs.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
                  >
                    <div className="w-[42px] h-[42px] rounded-lg bg-[#fff1e8] text-[#f27820] flex items-center justify-center mb-4">
                      <CheckCircle className="w-5 h-5 text-[#f27820]" />
                    </div>
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#444444] text-[15px] md:text-[16px] leading-relaxed text-justify"
                      style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Big Data Tech Stack */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-12">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                OUR BIG DATA <span className="text-[#f27820]">TECH STACK</span>
              </h2>

              <ul className="space-y-3 pl-2 mb-8">
                {[
                  'Hadoop, Spark, Flink, Kafka',
                  'MongoDB, Cassandra, HBase',
                  'Amazon Redshift, Google BigQuery, Snowflake',
                  'Power BI, Tableau, QlikView',
                  'Python, R, Scala',
                  'Airflow, NiFi for data orchestration',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#1a1a1a] text-[16px] md:text-[18px] flex items-center font-bold"
                    style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                  >
                    <span className="mr-3 text-[#1a1a1a]">•</span> {item}
                  </li>
                ))}
              </ul>

              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                From architecture planning to execution and ongoing support, we deliver scalable and secure big data analytics solutions that help your business evolve with confidence. Let us be your data partner on the journey to digital transformation.
              </p>
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
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-[#e0d8d0]/30">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center py-6 text-left font-bold text-[16px] md:text-[18px] text-[#0e2038] hover:text-[#f27820] focus:outline-none transition-colors duration-200"
                      style={{ fontFamily: "'GTWalsheimPro-Bold', 'GT-Walsheim-Pro'" }}
                    >
                      <span>{faq.question}</span>
                      {faq.isOpen ? (
                        <span className="text-[#f27820] font-bold text-[22px] leading-none shrink-0 ml-4 select-none">-</span>
                      ) : (
                        <span className="text-[#f27820] font-bold text-[22px] leading-none shrink-0 ml-4 select-none">+</span>
                      )}
                    </button>
                    {faq.isOpen && (
                      <div
                        className="pb-6 text-black text-[16px] md:text-[21px] leading-[26px]"
                        style={{ fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'" }}
                      >
                        {faq.answer}
                      </div>
                    )}
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

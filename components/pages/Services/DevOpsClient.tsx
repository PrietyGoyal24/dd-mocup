'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function DevOpsClient() {
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
                .DEVOPS SERVICES
              </h1>
              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed mb-8"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                DevOps bridges the gap between development and operations by automating workflows, enabling continuous integration and delivery, and ensuring faster, more reliable software releases.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="/why-designdot.jpg"
                  alt="DevOps Services"
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://dd.mocup.in/assets/web/images/services/services-web-des-dev.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Why DevOps? */}
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
                WHY <span className="text-[#f27820]">DEVOPS?</span>
              </h2>

              <div className="space-y-3">
                {[
                  'Faster Releases: Automate deployments and reduce time-to-market',
                  'Improved Collaboration: Seamless integration between development and operations teams',
                  'Increased Reliability: Detect and resolve issues earlier in the lifecycle',
                  'Scalability: Easily scale infrastructure and applications',
                  'Cost Efficiency: Optimize resource usage with automation',
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

          {/* Our DevOps Services */}
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
                OUR DEVOPS <span className="text-[#f27820]">SERVICES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'CI/CD Pipelines',
                    desc: 'Automated build, test, and deployment pipelines',
                  },
                  {
                    title: 'Infrastructure as Code',
                    desc: 'Manage infrastructure using tools like Terraform & Ansible',
                  },
                  {
                    title: 'Containerization',
                    desc: 'Docker and Kubernetes setup for scalability and portability',
                  },
                  {
                    title: 'Cloud DevOps',
                    desc: 'DevOps practices for AWS, Azure, and GCP environments',
                  },
                  {
                    title: 'Monitoring & Logging',
                    desc: 'Real-time system health tracking with alerts',
                  },
                  {
                    title: 'Security Automation',
                    desc: 'DevSecOps for secure and compliant pipelines',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-start"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#fdebe0] text-[#f27820] flex items-center justify-center mb-4 shrink-0 font-bold text-[18px]">
                      ✓
                    </div>
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
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

          {/* Solutions We Provide */}
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
                SOLUTIONS <span className="text-[#f27820]">WE PROVIDE</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Automated Deployments',
                    desc: 'Zero-downtime rollouts with rollback support',
                  },
                  {
                    title: 'Version Control Integration',
                    desc: 'Git-based workflows with branching strategies',
                  },
                  {
                    title: 'Environment Provisioning',
                    desc: 'Dev, staging, and prod setup via IaC',
                  },
                  {
                    title: 'Alerting & Incident Response',
                    desc: 'Automated alerts and on-call strategies',
                  },
                  {
                    title: 'Platform Engineering',
                    desc: 'Build internal tools for better developer experience',
                  },
                  {
                    title: 'Audit & Compliance',
                    desc: 'Tracking changes, logging access, and meeting standards',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-start"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#fdebe0] text-[#f27820] flex items-center justify-center mb-4 shrink-0 font-bold text-[18px]">
                      ✓
                    </div>
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
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

          {/* Tech Stack & Tools */}
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
                TECH STACK & <span className="text-[#f27820]">TOOLS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'CI/CD Tools',
                    desc: 'GitHub Actions, GitLab CI, Jenkins, CircleCI',
                  },
                  {
                    title: 'IaC Tools',
                    desc: 'Terraform, Pulumi, AWS CloudFormation',
                  },
                  {
                    title: 'Containers',
                    desc: 'Docker, Kubernetes, Helm',
                  },
                  {
                    title: 'Monitoring',
                    desc: 'Prometheus, Grafana, ELK Stack, Datadog',
                  },
                  {
                    title: 'Cloud Platforms',
                    desc: 'AWS, Azure, GCP, DigitalOcean',
                  },
                  {
                    title: 'Security Tools',
                    desc: 'SonarQube, Snyk, HashiCorp Vault',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-start"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#fdebe0] text-[#f27820] flex items-center justify-center mb-4 shrink-0 font-bold text-[18px]">
                      ✓
                    </div>
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
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

          {/* Our DevOps Process */}
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
                OUR DEVOPS <span className="text-[#f27820]">PROCESS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Assessment',
                    desc: 'Review existing workflows and identify gaps',
                  },
                  {
                    title: 'Toolchain Setup',
                    desc: 'Select and configure the right tools',
                  },
                  {
                    title: 'Pipeline Development',
                    desc: 'Build CI/CD pipelines tailored to your stack',
                  },
                  {
                    title: 'Infrastructure Setup',
                    desc: 'Automated provisioning and cloud setup',
                  },
                  {
                    title: 'Monitoring Integration',
                    desc: 'Track performance, errors, and uptime',
                  },
                  {
                    title: 'Ongoing Optimization',
                    desc: 'Continuously improve reliability and speed',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-[4px] border-[#f27820] border-t border-r border-b border-[#e0d8d0]/30 py-7 px-8 rounded-r-2xl shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-start"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#fdebe0] text-[#f27820] flex items-center justify-center mb-4 shrink-0 font-bold text-[18px]">
                      ✓
                    </div>
                    <h3
                      className="text-[#0e2038] font-bold text-[17px] md:text-[19px] mb-3"
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

          {/* Key Benefits */}
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
                KEY <span className="text-[#f27820]">BENEFITS</span>
              </h2>

              <div className="space-y-3">
                {[
                  'Faster time to market',
                  'Automated and repeatable deployments',
                  'Consistent development environments',
                  'Proactive monitoring and alerting',
                  'Reduced manual intervention and errors',
                  'Continuous feedback and improvement',
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

          {/* Why Choose Our DevOps Team? */}
          <div className="w-full px-6 lg:pl-[104px] lg:pr-[111px] pb-16">
            <div className="w-full pt-6">
              <h2
                className="text-[#555555] uppercase mb-6 leading-[1.3] text-[18px] sm:text-[20px] md:text-[22px]"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                }}
              >
                WHY CHOOSE <span className="text-[#f27820]">OUR DEVOPS TEAM?</span>
              </h2>

              <p
                className="text-[#444444] text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "'GTWalsheimPro-Regular', 'GT-Walsheim-Pro'",
                  letterSpacing: '0.5px',
                }}
              >
                Our DevOps experts help you accelerate your digital transformation by embedding automation, resilience, and agility across your delivery pipelines. From strategy to implementation, we ensure your software lifecycle is efficient, repeatable, and scalable.
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}


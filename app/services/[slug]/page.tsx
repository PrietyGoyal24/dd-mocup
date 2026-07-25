import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_SERVICES, SERVICE_BY_SLUG } from '@/constants/serviceData';
import ServicePageTemplate from '@/components/pages/Services/ServicePageTemplate';
import EnterpriseSoftwareClient from '@/components/pages/Services/EnterpriseSoftwareClient';
import CRMSoftwareClient from '@/components/pages/Services/CRMSoftwareClient';
import SaaSClient from '@/components/pages/Services/SaaSClient';
import ELearningClient from '@/components/pages/Services/ELearningClient';

import SoftwareDevelopmentOutsourcingClient from '@/components/pages/Services/SoftwareDevelopmentOutsourcingClient';
import OffshoreSoftwareClient from '@/components/pages/Services/OffshoreSoftwareClient';
import BigDataAnalyticsClient from '@/components/pages/Services/BigDataAnalyticsClient';
import ERPClient from '@/components/pages/Services/ERPClient';
import AppModernizationClient from '@/components/pages/Services/AppModernizationClient';
import APIDevelopmentClient from '@/components/pages/Services/APIDevelopmentClient';
import AIInSoftwareClient from '@/components/pages/Services/AIInSoftwareClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];

  if (!service) {
    return {
      title: 'Service Not Found | DesignDot',
    };
  }

  return {
    title: `${service.title} | ${service.category} Services | DesignDot`,
    description: service.heroDescription,
    robots: 'index, follow',
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === 'enterprise-software-development') {
    return <EnterpriseSoftwareClient />;
  }

  if (slug === 'crm-software-development') {
    return <CRMSoftwareClient />;
  }

  if (slug === 'saas') {
    return <SaaSClient />;
  }

  if (slug === 'e-learning' || slug === 'e-learning-application') {
    return <ELearningClient />;
  }

  if (slug === 'software-development-outsourcing') {
    return <SoftwareDevelopmentOutsourcingClient />;
  }

  if (slug === 'offshore-software-development') {
    return <OffshoreSoftwareClient />;
  }

  if (slug === 'big-data-analytics') {
    return <BigDataAnalyticsClient />;
  }

  if (slug === 'erp-development') {
    return <ERPClient />;
  }

  if (slug === 'application-modernization-services') {
    return <AppModernizationClient />;
  }

  if (slug === 'api-development') {
    return <APIDevelopmentClient />;
  }

  if (slug === 'ai-in-software' || slug === 'ai-in-software-development') {
    return <AIInSoftwareClient />;
  }

  const service = SERVICE_BY_SLUG[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}

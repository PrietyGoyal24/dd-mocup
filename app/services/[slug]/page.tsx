import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_SERVICES, SERVICE_BY_SLUG } from '@/constants/serviceData';
import ServicePageTemplate from '@/components/pages/Services/ServicePageTemplate';

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
  const service = SERVICE_BY_SLUG[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}

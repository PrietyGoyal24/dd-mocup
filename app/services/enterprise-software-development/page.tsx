import { Metadata } from 'next';
import EnterpriseSoftwareClient from '@/components/pages/Services/EnterpriseSoftwareClient';

export const metadata: Metadata = {
  title: 'Enterprise Software Development | Scalable & Secure Solutions | DesignDot',
  description: 'Designdot builds scalable, secure, and high-performance enterprise software tailored to your business workflows. Custom ERP, CRM, SaaS, and digital platforms built to grow with you.',
  robots: 'index, follow',
};

export default function EnterpriseSoftwarePage() {
  return <EnterpriseSoftwareClient />;
}

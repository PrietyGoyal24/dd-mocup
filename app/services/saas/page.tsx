import { Metadata } from 'next';
import SaaSClient from '@/components/pages/Services/SaaSClient';

export const metadata: Metadata = {
  title: 'SaaS Application Development | Cloud-Based Software | DesignDot',
  description:
    'Designdot delivers scalable, multi-tenant SaaS application development services from MVP consulting to enterprise platforms and cloud modernization.',
  robots: 'index, follow',
};

export default function SaaSPage() {
  return <SaaSClient />;
}

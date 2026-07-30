import { Metadata } from 'next';
import EnterpriseMobilityServicesClient from '@/components/pages/Services/EnterpriseMobilityServicesClient';

export const metadata: Metadata = {
  title: 'Enterprise Mobility Services | Digital Transformation | DesignDot',
  description: 'Our Enterprise Mobility Services empower businesses to enable a connected workforce through secure, scalable, and user-centric mobile strategies.',
  robots: 'index, follow',
};

export default function EnterpriseMobilityServicesPage() {
  return <EnterpriseMobilityServicesClient />;
}

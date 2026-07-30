import { Metadata } from 'next';
import FleetManagementClient from '@/components/pages/Services/FleetManagementClient';

export const metadata: Metadata = {
  title: 'Fleet Management Solutions | DesignDot',
  description: 'Our Fleet Management Solutions are designed to streamline your vehicle operations, improve driver safety, and reduce operational costs.',
  robots: 'index, follow',
};

export default function FleetManagementPage() {
  return <FleetManagementClient />;
}

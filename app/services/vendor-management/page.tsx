import { Metadata } from 'next';
import VendorManagementClient from '@/components/pages/Services/VendorManagementClient';

export const metadata: Metadata = {
  title: 'Vendor Management Solutions | DesignDot',
  description: 'Our Vendor Management system helps businesses gain better control over vendor performance, compliance, contracts, and costs.',
  robots: 'index, follow',
};

export default function VendorManagementPage() {
  return <VendorManagementClient />;
}

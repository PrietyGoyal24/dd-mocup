import { Metadata } from 'next';
import WarehouseManagementClient from '@/components/pages/Services/WarehouseManagementClient';

export const metadata: Metadata = {
  title: 'Warehouse Management System Services | Digital Transformation | DesignDot',
  description: 'At DesignDot, we build high-performance Warehouse Management Systems (WMS) that optimize inventory control, streamline logistics, and boost efficiency.',
  robots: 'index, follow',
};

export default function WarehouseManagementSystemPage() {
  return <WarehouseManagementClient />;
}

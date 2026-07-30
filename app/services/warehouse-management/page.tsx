import { Metadata } from 'next';
import WarehouseManagementClient from '@/components/pages/Services/WarehouseManagementClient';

export const metadata: Metadata = {
  title: 'Warehouse Management Solutions | WMS Software | DesignDot',
  description: 'Streamline your warehouse operations with our robust and scalable Warehouse Management System (WMS). We help businesses improve accuracy, reduce costs, and enhance visibility.',
  robots: 'index, follow',
};

export default function WarehouseManagementPage() {
  return <WarehouseManagementClient />;
}

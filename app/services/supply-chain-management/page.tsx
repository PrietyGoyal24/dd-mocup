import { Metadata } from 'next';
import SupplyChainManagementClient from '@/components/pages/Services/SupplyChainManagementClient';

export const metadata: Metadata = {
  title: 'Supply Chain Management Solutions | DesignDot',
  description: 'We deliver smart and agile supply chain management (SCM) solutions to help businesses improve demand forecasting, reduce operational costs, and enhance visibility.',
  robots: 'index, follow',
};

export default function SupplyChainManagementPage() {
  return <SupplyChainManagementClient />;
}

import { Metadata } from 'next';
import ERPClient from '@/components/pages/Services/ERPClient';

export const metadata: Metadata = {
  title: 'ERP Software Development Services | Custom Enterprise Systems | DesignDot',
  description:
    'Designdot builds comprehensive, custom ERP software solutions to integrate finance, HR, inventory, supply chain, and operations into a single platform.',
  robots: 'index, follow',
};

export default function ERPPage() {
  return <ERPClient />;
}

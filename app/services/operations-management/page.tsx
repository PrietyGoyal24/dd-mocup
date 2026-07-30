import { Metadata } from 'next';
import OperationsManagementClient from '@/components/pages/Services/OperationsManagementClient';

export const metadata: Metadata = {
  title: 'Operations Management Solutions | Digital Transformation | DesignDot',
  description: 'Our operations management solutions help businesses streamline workflows, automate repetitive tasks, and optimize resources for efficient and scalable operations.',
  robots: 'index, follow',
};

export default function OperationsManagementPage() {
  return <OperationsManagementClient />;
}

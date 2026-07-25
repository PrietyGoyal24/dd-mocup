import { Metadata } from 'next';
import POSClient from '@/components/pages/Services/POSClient';

export const metadata: Metadata = {
  title: 'POS - Point of Sales Application Development | DesignDot',
  description:
    'Transform the way you sell with a powerful, intuitive, and fully integrated Point of Sales (POS) application from Designdot.',
  robots: 'index, follow',
};

export default function POSPage() {
  return <POSClient />;
}

import { Metadata } from 'next';
import POSClient from '@/components/pages/Services/POSClient';

export const metadata: Metadata = {
  title: 'POS Point Of Sales Application | Digital Transformation | DesignDot',
  description: 'Transform the way you sell with a powerful, intuitive, and fully integrated Point of Sales (POS) application.',
  robots: 'index, follow',
};

export default function PointOfSalesApplicationPage() {
  return <POSClient />;
}

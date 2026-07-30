import { Metadata } from 'next';
import POSClient from '@/components/pages/Services/POSClient';

export const metadata: Metadata = {
  title: 'Point of Sale (POS) Application Development Services | DesignDot',
  description: 'Our POS solutions are designed to simplify sales operations, enhance customer experience, and optimize inventory management.',
  robots: 'index, follow',
};

export default function POSApplicationPage() {
  return <POSClient />;
}

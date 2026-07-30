import { Metadata } from 'next';
import ECommerceApplicationClient from '@/components/pages/Services/ECommerceApplicationClient';

export const metadata: Metadata = {
  title: 'E-Commerce Application Development Services | DesignDot',
  description: 'We build powerful and flexible e-commerce applications that deliver a seamless shopping experience for performance, security, and conversion optimization.',
  robots: 'index, follow',
};

export default function ECommerceApplicationPage() {
  return <ECommerceApplicationClient />;
}

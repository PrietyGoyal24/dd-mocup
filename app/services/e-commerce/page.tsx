import { Metadata } from 'next';
import ECommerceApplicationClient from '@/components/pages/Services/ECommerceApplicationClient';

export const metadata: Metadata = {
  title: 'Ecommerce Development Solutions | DesignDot',
  description: 'Launch and scale your digital storefront with our tailor-made ecommerce solutions. We help you deliver seamless shopping experiences.',
  robots: 'index, follow',
};

export default function ECommercePage() {
  return <ECommerceApplicationClient />;
}

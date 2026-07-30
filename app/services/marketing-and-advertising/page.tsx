import { Metadata } from 'next';
import MarketingAndAdvertisingClient from '@/components/pages/Services/MarketingAndAdvertisingClient';

export const metadata: Metadata = {
  title: 'Marketing & Advertising Services | DesignDot',
  description: 'Transform your business with our strategic marketing and advertising services tailored to build brand awareness, attract targeted traffic, and convert leads into customers.',
  robots: 'index, follow',
};

export default function MarketingAndAdvertisingPage() {
  return <MarketingAndAdvertisingClient />;
}

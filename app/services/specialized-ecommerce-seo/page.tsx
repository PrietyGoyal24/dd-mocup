import { Metadata } from 'next';
import SpecializedECommerceSEOClient from '@/components/pages/Services/SpecializedECommerceSEOClient';

export const metadata: Metadata = {
  title: 'Specialized ECommerce SEO | Digital Marketing | DesignDot',
  description: 'We help your online store get discovered by customers actively searching for your products. Our specialized eCommerce SEO services focus on product visibility, category structure, and conversion optimization for higher traffic and better ROI.',
  robots: 'index, follow',
};

export default function SpecializedECommerceSEOPage() {
  return <SpecializedECommerceSEOClient />;
}

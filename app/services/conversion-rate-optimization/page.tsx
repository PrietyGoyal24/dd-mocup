import { Metadata } from 'next';
import ConversionRateOptimizationClient from '@/components/pages/Services/ConversionRateOptimizationClient';

export const metadata: Metadata = {
  title: 'Conversion Rate Optimization (CRO) | Digital Marketing | DesignDot',
  description: 'Are visitors browsing your site without converting? Our Conversion Rate Optimization (CRO) services help you turn passive users into paying customers.',
  robots: 'index, follow',
};

export default function ConversionRateOptimizationPage() {
  return <ConversionRateOptimizationClient />;
}

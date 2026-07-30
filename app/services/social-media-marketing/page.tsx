import { Metadata } from 'next';
import SocialMediaMarketingClient from '@/components/pages/Services/SocialMediaMarketingClient';

export const metadata: Metadata = {
  title: 'Social Media Marketing & Specialized ECommerce SEO | Digital Marketing | DesignDot',
  description: 'We help your online store get discovered by customers actively searching for your products. Our specialized eCommerce SEO services focus on product visibility, category structure, and conversion optimization for higher traffic and better ROI.',
  robots: 'index, follow',
};

export default function SocialMediaMarketingPage() {
  return <SocialMediaMarketingClient />;
}

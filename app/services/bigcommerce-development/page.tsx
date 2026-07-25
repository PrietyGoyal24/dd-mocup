import { Metadata } from 'next';
import BigCommerceClient from '@/components/pages/Services/BigCommerceClient';

export const metadata: Metadata = {
  title: 'BigCommerce Development Company | Custom B2B & B2C Stores | DesignDot',
  description:
    'Unlock the full potential of your ecommerce business with custom BigCommerce development services from Designdot. B2B Edition, Headless Commerce, Theme Customization.',
  robots: 'index, follow',
};

export default function BigCommercePage() {
  return <BigCommerceClient />;
}

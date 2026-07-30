import { Metadata } from 'next';
import BrandManagementClient from '@/components/pages/Services/BrandManagementClient';

export const metadata: Metadata = {
  title: 'Brand Management Services | Digital Marketing | DesignDot',
  description: 'Your brand is more than just a logo — it\'s the perception people hold about your business. Our Brand Management services help you build, communicate, and maintain a consistent brand image.',
  robots: 'index, follow',
};

export default function BrandManagementPage() {
  return <BrandManagementClient />;
}

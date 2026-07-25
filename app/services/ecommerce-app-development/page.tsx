import { Metadata } from 'next';
import ECommerceAppClient from '@/components/pages/Services/ECommerceAppClient';

export const metadata: Metadata = {
  title: 'Custom E-Commerce App Development Services | DesignDot',
  description:
    'Build powerful mobile shopping experiences for iOS & Android with Designdot. Custom e-commerce apps, native & cross-platform, multi-vendor marketplaces.',
  robots: 'index, follow',
};

export default function ECommerceAppPage() {
  return <ECommerceAppClient />;
}

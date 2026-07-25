import { Metadata } from 'next';
import WebPortalClient from '@/components/pages/Services/WebPortalClient';

export const metadata: Metadata = {
  title: 'Custom Web Portal Development Services | DesignDot',
  description:
    'Build secure, scalable & interactive web portals for enterprise, customers, e-learning, B2B vendors, and communities with Designdot.',
  robots: 'index, follow',
};

export default function WebPortalPage() {
  return <WebPortalClient />;
}

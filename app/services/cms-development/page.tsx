import { Metadata } from 'next';
import CMSDevelopmentClient from '@/components/pages/Services/CMSDevelopmentClient';

export const metadata: Metadata = {
  title: 'CMS Development Services | DesignDot',
  description: 'Our CMS development services help you create, manage, and modify digital content efficiently with secure and scalable CMS platforms.',
  robots: 'index, follow',
};

export default function CMSDevelopmentPage() {
  return <CMSDevelopmentClient />;
}

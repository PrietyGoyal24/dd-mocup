import { Metadata } from 'next';
import APIDevelopmentClient from '@/components/pages/Services/APIDevelopmentClient';

export const metadata: Metadata = {
  title: 'Custom API Development & Integration Services | DesignDot',
  description:
    'Build secure, scalable RESTful, SOAP, and GraphQL APIs with Designdot. We offer API development, integration, testing, and comprehensive documentation.',
  robots: 'index, follow',
};

export default function APIDevelopmentPage() {
  return <APIDevelopmentClient />;
}

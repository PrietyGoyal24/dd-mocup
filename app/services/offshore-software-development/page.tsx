import { Metadata } from 'next';
import OffshoreSoftwareClient from '@/components/pages/Services/OffshoreSoftwareClient';

export const metadata: Metadata = {
  title: 'Offshore Software Development Services | DesignDot',
  description:
    'Leverage top global tech talent with Designdot offshore software development services. Reliable, secure, and scalable software solutions tailored to your time zone.',
  robots: 'index, follow',
};

export default function OffshoreSoftwarePage() {
  return <OffshoreSoftwareClient />;
}

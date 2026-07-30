import { Metadata } from 'next';
import SupportClient from '@/components/pages/Services/SupportClient';

export const metadata: Metadata = {
  title: 'Software & IT Support Services | DesignDot',
  description: 'At DesignDot, we provide round-the-clock software maintenance and IT support services to keep your applications operational and secure.',
  robots: 'index, follow',
};

export default function SupportPage() {
  return <SupportClient />;
}

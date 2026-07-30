import { Metadata } from 'next';
import InternetOfThingsClient from '@/components/pages/Services/InternetOfThingsClient';

export const metadata: Metadata = {
  title: 'Internet Of Things (IoT) Services | Digital Transformation | DesignDot',
  description: 'Unlock the power of smart connectivity with our Internet of Things (IoT) solutions. We design and develop intelligent IoT systems.',
  robots: 'index, follow',
};

export default function InternetOfThingsPage() {
  return <InternetOfThingsClient />;
}

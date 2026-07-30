import { Metadata } from 'next';
import InternetOfThingsClient from '@/components/pages/Services/InternetOfThingsClient';

export const metadata: Metadata = {
  title: 'IoT Development Services | Emerging Technologies | DesignDot',
  description: 'Unlock the power of smart connectivity with our Internet of Things (IoT) solutions. We design and develop intelligent IoT systems.',
  robots: 'index, follow',
};

export default function IoTDevelopmentPage() {
  return <InternetOfThingsClient />;
}

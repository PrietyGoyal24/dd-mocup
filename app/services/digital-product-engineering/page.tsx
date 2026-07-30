import { Metadata } from 'next';
import DigitalProductEngineeringClient from '@/components/pages/Services/DigitalProductEngineeringClient';

export const metadata: Metadata = {
  title: 'Digital Product Engineering Services | Digital Transformation | DesignDot',
  description: 'We empower businesses to conceptualize, build, and scale cutting-edge digital products. From ideation to continuous enhancement.',
  robots: 'index, follow',
};

export default function DigitalProductEngineeringPage() {
  return <DigitalProductEngineeringClient />;
}

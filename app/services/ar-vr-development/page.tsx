import { Metadata } from 'next';
import ARVRDevelopmentClient from '@/components/pages/Services/ARVRDevelopmentClient';

export const metadata: Metadata = {
  title: 'AR/VR Development Services | Emerging Technologies | DesignDot',
  description: 'Dive into the world of immersive technology with DesignDot cutting-edge AR/VR development services. We build Augmented and Virtual Reality experiences.',
  robots: 'index, follow',
};

export default function ARVRDevelopmentPage() {
  return <ARVRDevelopmentClient />;
}

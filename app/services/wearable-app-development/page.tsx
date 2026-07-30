import { Metadata } from 'next';
import WearableAppDevelopmentClient from '@/components/pages/Services/WearableAppDevelopmentClient';

export const metadata: Metadata = {
  title: 'Wearable App Development Services | Digital Transformation | DesignDot',
  description: 'Enhance user experiences with cutting-edge wearable technology. We specialize in developing intuitive, high-performing apps for smartwatches and wearable devices.',
  robots: 'index, follow',
};

export default function WearableAppDevelopmentPage() {
  return <WearableAppDevelopmentClient />;
}

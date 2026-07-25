import { Metadata } from 'next';
import MobileAppsDevelopmentClient from '@/components/pages/Services/MobileAppsDevelopmentClient';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | iOS, Android, AI | Designdot',
  description:
    'Enterprise-grade mobile app development services from Designdot. Native iOS, Android, React Native, Flutter, and AI-powered mobile applications.',
  robots: 'index, follow',
};

export default function MobileAppDevelopmentPage() {
  return <MobileAppsDevelopmentClient />;
}

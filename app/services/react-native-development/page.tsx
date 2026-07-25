import { Metadata } from 'next';
import ReactNativeClient from '@/components/pages/Services/ReactNativeClient';

export const metadata: Metadata = {
  title: 'React Native App Development Company | Cross-Platform | Designdot',
  description:
    'Expert React Native app development services from Designdot. Build high-performance cross-platform mobile apps for iOS and Android with a single codebase.',
  robots: 'index, follow',
};

export default function ReactNativeDevelopmentPage() {
  return <ReactNativeClient />;
}

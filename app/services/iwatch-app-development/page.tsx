import { Metadata } from 'next';
import IWatchAppDevelopmentClient from '@/components/pages/Services/IWatchAppDevelopmentClient';

export const metadata: Metadata = {
  title: 'iWatch App Development Services | Emerging Technologies | DesignDot',
  description: 'DesignDot is a leading Apple Watch app development company helping brands deliver seamless user experiences through intuitive iWatch apps.',
  robots: 'index, follow',
};

export default function IWatchAppDevelopmentPage() {
  return <IWatchAppDevelopmentClient />;
}

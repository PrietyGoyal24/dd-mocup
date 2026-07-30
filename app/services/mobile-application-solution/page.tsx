import { Metadata } from 'next';
import MobileApplicationSolutionClient from '@/components/pages/Services/MobileApplicationSolutionClient';

export const metadata: Metadata = {
  title: 'Mobile Application Solutions | Mobile App Development | DesignDot',
  description: 'Empower your business with innovative, user-centric, and scalable mobile applications. We deliver end-to-end mobile app development services.',
  robots: 'index, follow',
};

export default function MobileApplicationSolutionPage() {
  return <MobileApplicationSolutionClient />;
}

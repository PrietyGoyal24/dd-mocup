import { Metadata } from 'next';
import KioskSoftwareClient from '@/components/pages/Services/KioskSoftwareClient';

export const metadata: Metadata = {
  title: 'Kiosk Software Development Services | DesignDot',
  description: 'We develop robust and intuitive kiosk software that powers self-service solutions across retail, hospitality, healthcare, and transportation.',
  robots: 'index, follow',
};

export default function KioskSoftwarePage() {
  return <KioskSoftwareClient />;
}

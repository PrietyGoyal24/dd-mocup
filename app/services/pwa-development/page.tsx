import { Metadata } from 'next';
import PWAClient from '@/components/pages/Services/PWAClient';

export const metadata: Metadata = {
  title: 'Progressive Web Apps (PWA) Development Services | Designdot',
  description:
    'Custom Progressive Web App (PWA) development services from Designdot. Fast, reliable, offline-ready web apps combining the best of web and native mobile applications.',
  robots: 'index, follow',
};

export default function PWADevelopmentPage() {
  return <PWAClient />;
}

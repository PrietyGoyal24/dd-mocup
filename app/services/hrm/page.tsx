import { Metadata } from 'next';
import HRMApplicationClient from '@/components/pages/Services/HRMApplicationClient';

export const metadata: Metadata = {
  title: 'HRM Application Development Services | DesignDot',
  description: 'Our custom-built Human Resource Management (HRM) applications simplify and automate workforce management from onboarding to retirement.',
  robots: 'index, follow',
};

export default function HRMAliasPage() {
  return <HRMApplicationClient />;
}

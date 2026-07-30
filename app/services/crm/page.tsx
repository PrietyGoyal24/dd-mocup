import { Metadata } from 'next';
import CRMApplicationClient from '@/components/pages/Services/CRMApplicationClient';

export const metadata: Metadata = {
  title: 'CRM Application Development Services | DesignDot',
  description: 'Streamline customer interactions, boost sales productivity, and manage leads efficiently with custom CRM application development services.',
  robots: 'index, follow',
};

export default function CRMAliasPage() {
  return <CRMApplicationClient />;
}

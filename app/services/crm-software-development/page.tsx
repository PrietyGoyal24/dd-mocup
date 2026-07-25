import { Metadata } from 'next';
import CRMSoftwareClient from '@/components/pages/Services/CRMSoftwareClient';

export const metadata: Metadata = {
  title: 'CRM Software Development | Custom CRM Solutions | DesignDot',
  description:
    'Designdot builds custom CRM software tailored to your business workflows — improving customer relationships, automating sales, and driving growth with scalable, secure solutions.',
  robots: 'index, follow',
};

export default function CRMSoftwarePage() {
  return <CRMSoftwareClient />;
}

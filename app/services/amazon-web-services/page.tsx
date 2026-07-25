import { Metadata } from 'next';
import AWSClient from '@/components/pages/Services/AWSClient';

export const metadata: Metadata = {
  title: 'Amazon Web Services (AWS) Consulting & Development | Designdot',
  description:
    'Leverage cutting-edge AWS cloud services from Designdot. Cloud migration, architecture design, security, machine learning, and DevOps automation on AWS.',
  robots: 'index, follow',
};

export default function AmazonWebServicesPage() {
  return <AWSClient />;
}

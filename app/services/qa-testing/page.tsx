import { Metadata } from 'next';
import QualityAssuranceTestingClient from '@/components/pages/Services/QualityAssuranceTestingClient';

export const metadata: Metadata = {
  title: 'Quality Assurance & Software Testing Services | DesignDot',
  description: 'At DesignDot, we deliver comprehensive Quality Assurance (QA) and software testing services to ensure your digital products are bug-free and secure.',
  robots: 'index, follow',
};

export default function QATestingPage() {
  return <QualityAssuranceTestingClient />;
}

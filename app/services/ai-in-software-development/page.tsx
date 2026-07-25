import { Metadata } from 'next';
import AIInSoftwareClient from '@/components/pages/Services/AIInSoftwareClient';

export const metadata: Metadata = {
  title: 'AI in Software Development | Smart Automation & Machine Learning | DesignDot',
  description:
    'Discover how Artificial Intelligence (AI) transforms software development with code generation, bug detection, automated testing, predictive analytics, and NLP.',
  robots: 'index, follow',
};

export default function AIInSoftwareDevelopmentPage() {
  return <AIInSoftwareClient />;
}

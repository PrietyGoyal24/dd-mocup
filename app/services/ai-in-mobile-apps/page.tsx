import { Metadata } from 'next';
import AIInMobileAppsClient from '@/components/pages/Services/AIInMobileAppsClient';

export const metadata: Metadata = {
  title: 'AI App Development Services | LLMs, Computer Vision | Designdot',
  description:
    'Custom AI app development services from Designdot. Intelligent mobile applications powered by Generative AI, LLMs, NLP, Computer Vision, and predictive analytics.',
  robots: 'index, follow',
};

export default function AIInMobileAppsPage() {
  return <AIInMobileAppsClient />;
}

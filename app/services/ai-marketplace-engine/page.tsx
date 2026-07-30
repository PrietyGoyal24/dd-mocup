import { Metadata } from 'next';
import AIMarketplaceEngineClient from '@/components/pages/Services/AIMarketplaceEngineClient';

export const metadata: Metadata = {
  title: 'AI Marketplace Engine Services | Digital Transformation | DesignDot',
  description: 'Launch a next-gen marketplace platform powered by artificial intelligence. Our AI Marketplace Engine combines intelligent automation and analytics.',
  robots: 'index, follow',
};

export default function AIMarketplaceEnginePage() {
  return <AIMarketplaceEngineClient />;
}

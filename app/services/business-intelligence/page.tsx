import { Metadata } from 'next';
import BusinessIntelligenceClient from '@/components/pages/Services/BusinessIntelligenceClient';

export const metadata: Metadata = {
  title: 'Business Intelligence (BI) Services | DesignDot',
  description: 'Make faster, smarter business decisions with our advanced Business Intelligence solutions. From data consolidation to real-time dashboards.',
  robots: 'index, follow',
};

export default function BusinessIntelligencePage() {
  return <BusinessIntelligenceClient />;
}

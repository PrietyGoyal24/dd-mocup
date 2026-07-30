import { Metadata } from 'next';
import InfluencerMarketingClient from '@/components/pages/Services/InfluencerMarketingClient';

export const metadata: Metadata = {
  title: 'Influencer Marketing Services | Digital Marketing | DesignDot',
  description: 'Leverage the trust and engagement of popular influencers to elevate your brand. Our Influencer Marketing services help you collaborate with social media personalities.',
  robots: 'index, follow',
};

export default function InfluencerMarketingPage() {
  return <InfluencerMarketingClient />;
}

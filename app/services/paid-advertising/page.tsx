import { Metadata } from 'next';
import PaidAdvertisingClient from '@/components/pages/Services/PaidAdvertisingClient';

export const metadata: Metadata = {
  title: 'Paid Advertising Services | Digital Marketing | DesignDot',
  description: 'Amplify your reach and drive high-converting traffic with strategic paid advertising campaigns. We help you target the right audience through platforms like Google Ads, Meta Ads, and more to ensure maximum ROI and visibility.',
  robots: 'index, follow',
};

export default function PaidAdvertisingPage() {
  return <PaidAdvertisingClient />;
}

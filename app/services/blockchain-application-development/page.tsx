import { Metadata } from 'next';
import BlockchainApplicationClient from '@/components/pages/Services/BlockchainApplicationClient';

export const metadata: Metadata = {
  title: 'Blockchain Application Development Services | DesignDot',
  description: 'At DesignDot, we empower enterprises with secure, decentralized solutions that go beyond finance.',
  robots: 'index, follow',
};

export default function BlockchainApplicationPage() {
  return <BlockchainApplicationClient />;
}

import { Metadata } from 'next';
import DAppsDevelopmentClient from '@/components/pages/Services/DAppsDevelopmentClient';

export const metadata: Metadata = {
  title: 'dApps Development Services | Emerging Technologies | DesignDot',
  description: 'At DesignDot, we build feature-rich, decentralized applications (dApps) that run on blockchain networks like Ethereum, Binance Smart Chain, Polygon, and Solana.',
  robots: 'index, follow',
};

export default function DAppsDevelopmentPage() {
  return <DAppsDevelopmentClient />;
}

import { Metadata } from 'next';
import NFTMarketplaceClient from '@/components/pages/Services/NFTMarketplaceClient';

export const metadata: Metadata = {
  title: 'NFT Marketplace Development | Emerging Technologies | DesignDot',
  description: 'Build your custom NFT platform with DesignDot, the leading NFT marketplace development company. Smart contract automation and Metaverse features.',
  robots: 'index, follow',
};

export default function NFTMarketplacePage() {
  return <NFTMarketplaceClient />;
}

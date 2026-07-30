import { Metadata } from 'next';
import CryptocurrencyWalletClient from '@/components/pages/Services/CryptocurrencyWalletClient';

export const metadata: Metadata = {
  title: 'Cryptocurrency Wallet Development | Emerging Technologies | DesignDot',
  description: 'At DesignDot, we craft secure and user-friendly cryptocurrency wallets that support seamless transactions and multi-currency management.',
  robots: 'index, follow',
};

export default function CryptocurrencyWalletPage() {
  return <CryptocurrencyWalletClient />;
}

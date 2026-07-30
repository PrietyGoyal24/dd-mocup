import { Metadata } from 'next';
import MobileAdvertisingClient from '@/components/pages/Services/MobileAdvertisingClient';

export const metadata: Metadata = {
  title: 'Mobile Advertising Services | Digital Marketing | DesignDot',
  description: 'Mobile advertising is a form of advertising via mobile (wireless) phones or other mobile devices. It is a subset of mobile marketing.',
  robots: 'index, follow',
};

export default function MobileAdvertisingPage() {
  return <MobileAdvertisingClient />;
}

import { Metadata } from 'next';
import InternetAdvertisingClient from '@/components/pages/Services/InternetAdvertisingClient';

export const metadata: Metadata = {
  title: 'Internet Advertising Services | Digital Marketing | DesignDot',
  description: 'Online advertising is a form of promotion that uses the Internet and World Wide Web to deliver marketing messages to attract customers.',
  robots: 'index, follow',
};

export default function InternetAdvertisingPage() {
  return <InternetAdvertisingClient />;
}

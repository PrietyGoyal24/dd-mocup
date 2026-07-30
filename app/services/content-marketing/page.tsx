import { Metadata } from 'next';
import ContentMarketingClient from '@/components/pages/Services/ContentMarketingClient';

export const metadata: Metadata = {
  title: 'Content Marketing & Writing Services | Digital Marketing | DesignDot',
  description: 'An error-free, persuasive, call-to-action writing that speaks your business to your prospective clients is a very important aspect for any business to grow.',
  robots: 'index, follow',
};

export default function ContentMarketingPage() {
  return <ContentMarketingClient />;
}

import { Metadata } from 'next';
import MVPDevelopmentClient from '@/components/pages/Services/MVPDevelopmentClient';

export const metadata: Metadata = {
  title: 'MVP Development Services for Startups & Enterprises | Designdot',
  description:
    'Turn innovative ideas into market-ready products with MVP development services from Designdot. Rapid prototyping, custom MVP build, cloud-ready architecture.',
  robots: 'index, follow',
};

export default function MVPDevelopmentPage() {
  return <MVPDevelopmentClient />;
}

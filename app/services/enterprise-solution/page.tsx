import { Metadata } from 'next';
import EnterpriseSolutionsClient from '@/components/pages/Services/EnterpriseSolutionsClient';

export const metadata: Metadata = {
  title: 'Enterprise Solutions | Digital Transformation | DesignDot',
  description: 'Empower your business with advanced enterprise-grade solutions that streamline operations, improve collaboration, and scale efficiently.',
  robots: 'index, follow',
};

export default function EnterpriseSolutionPage() {
  return <EnterpriseSolutionsClient />;
}

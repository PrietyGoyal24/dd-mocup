import { Metadata } from 'next';
import ELearningSolutionsClient from '@/components/pages/Services/ELearningSolutionsClient';

export const metadata: Metadata = {
  title: 'E-Learning Solutions | DesignDot',
  description: 'E-learning comprises all forms of electronically supported learning and teaching. Explore our comprehensive learning and e-commerce solutions.',
  robots: 'index, follow',
};

export default function ELearningSolutionsAliasPage() {
  return <ELearningSolutionsClient />;
}

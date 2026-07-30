import { Metadata } from 'next';
import SearchEngineOptimizationClient from '@/components/pages/Services/SearchEngineOptimizationClient';

export const metadata: Metadata = {
  title: 'Search Engine Optimization | Digital Marketing | DesignDot',
  description: 'Dominate search engine rankings and attract qualified organic traffic. We deliver data-driven SEO strategies that elevate your brand\'s digital presence, enhance online visibility, and drive sustainable business growth.',
  robots: 'index, follow',
};

export default function SearchEngineOptimizationPage() {
  return <SearchEngineOptimizationClient />;
}

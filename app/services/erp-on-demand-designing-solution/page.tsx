import { Metadata } from 'next';
import ERPDesigningSolutionClient from '@/components/pages/Services/ERPDesigningSolutionClient';

export const metadata: Metadata = {
  title: 'ERP On-Demand Designing Solutions | DesignDot',
  description: 'Streamline your business operations with custom-built ERP on-demand design solutions that align with your industry, team, and process flow.',
  robots: 'index, follow',
};

export default function ERPOnDemandDesigningSolutionAliasPage() {
  return <ERPDesigningSolutionClient />;
}

import { Metadata } from 'next';
import CRMForECommerceClient from '@/components/pages/Services/CRMForECommerceClient';

export const metadata: Metadata = {
  title: 'CRM for E-Commerce | Smart Customer Retention & AI Automation | DesignDot',
  description:
    'Build relationships and drive repeat revenue with custom e-commerce CRM solutions from Designdot. RFM scoring, predictive churn, AI hyper-personalization.',
  robots: 'index, follow',
};

export default function CRMForECommercePage() {
  return <CRMForECommerceClient />;
}

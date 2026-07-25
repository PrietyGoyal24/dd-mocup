import { Metadata } from 'next';
import BigDataAnalyticsClient from '@/components/pages/Services/BigDataAnalyticsClient';

export const metadata: Metadata = {
  title: 'Big Data Analytics Services | Data Warehousing & Real-Time Insights | DesignDot',
  description:
    'Harness the power of big data analytics with Designdot. We offer data warehousing, real-time analytics, BI dashboards, predictive analytics, and cloud data lakes.',
  robots: 'index, follow',
};

export default function BigDataAnalyticsAIPage() {
  return <BigDataAnalyticsClient />;
}

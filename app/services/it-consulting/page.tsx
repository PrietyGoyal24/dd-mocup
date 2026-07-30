import { Metadata } from 'next';
import ITConsultingClient from '@/components/pages/Services/ITConsultingClient';

export const metadata: Metadata = {
  title: 'IT Consulting Services | Digital Transformation | DesignDot',
  description: 'At DesignDot, we provide expert IT consulting services that empower businesses to align technology with their goals.',
  robots: 'index, follow',
};

export default function ITConsultingPage() {
  return <ITConsultingClient />;
}

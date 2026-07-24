import { Metadata } from 'next';
import SoftwareConsultingClient from '@/components/pages/Services/SoftwareConsultingClient';

export const metadata: Metadata = {
  title: 'Software Engineering & Consulting | Engineering Services | DesignDot',
  description: 'Pioneering Excellence With Our Software Consulting Services. In today\'s fast-moving digital economy, software is no longer just a support function — it is the backbone of innovation, scalability, and competitive advantage.',
  robots: 'index, follow',
};

export default function SoftwareConsultingPage() {
  return <SoftwareConsultingClient />;
}
